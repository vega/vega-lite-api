import {
  capitalize,
  emitter,
  error,
  getProperty,
  isInternal,
  isString,
  isObject,
  hasOwnProperty,
  stringValue as $,
} from './util';
import {isArrayType} from './schema';

export function generateMethod(schema, methodName, spec) {
  const emit = emitter('__util__');

  if (spec.ctr) {
    // method is a proxied invocation of another method
    generateProxy(emit, methodName, spec, spec.ctr);
    return emit.code();
  }

  const className = capitalize(methodName),
        ext = spec.ext || {},
        pass = spec.pass || {};

  emit.import('BaseObject');
  emit(`class ${className} extends BaseObject {`);
  emit().indent();

  // -- constructor --
  generateConstructor(emit, spec);

  // -- properties --
  for (let prop in schema) {
    if (hasOwnProperty(ext, prop)) continue; // skip if extension defined
    if (hasOwnProperty(pass, prop)) continue; // skip if pass defined
    const type = isArrayType(schema[prop]);
    generateProperty(emit, prop, {
      prop,
      mod: type ? '...' : '',
      multi: type > 1,
    });
  }

  // -- extensions --
  for (let prop in ext) {
    if (ext[prop] == null) continue; // skip if null
    if (hasOwnProperty(pass, prop)) continue; // skip if pass defined
    generateExtension(emit, prop, ext[prop]);
  }

  // -- pass --
  for (let prop in pass) {
    if (pass[prop] == null) continue; // skip if null
    generatePass(emit, prop, pass[prop]);
  }

  // -- call --
  for (let prop in spec.call) {
    if (spec.call[prop] == null) continue; // skip if null
    generateCall(emit, prop, spec.call[prop]);
  }

  // -- out --
  if (spec.out) {
    generateToObject(emit, spec.out);
  }

  emit.outdent()
  emit(`}`);
  emit();

  // -- exports --
  emit(`export function ${methodName}(...args) {`);
  emit(`  return new ${className}(...args);`);
  emit(`}`);

  return emit.code();
}

function generateProxy(emit, methodName, spec, opt) {
  const m = opt.call,
        a = opt.arg ? $(opt.arg) + ', ' : '';

  emit.import(m, opt.from || m);
  emit(`export function ${methodName}(...args) {`);
  if (spec.set) {
    emit.import('set');
    const set = generateMutations('obj', spec.set);
    emit(`  const obj = ${m}(...args);`);
    set.forEach(v => emit('  ' + v));
    emit(`  return obj;`);
  } else {
    emit(`  return ${m}(${a}...args);`);
  }
  emit(`}`);
}

function generateConstructor(emit, spec) {
  const arg  = spec.arg,
        set  = spec.set,
        type = spec.type;

  emit(`constructor(...args) {`).indent();
  emit(`super();`);

  // init data object
  emit.import('init');
  emit(`init(this);`);

  // handle set values
  for (let prop in set) {
    emit.import('set');
    emit(`set(this, ${$(prop)}, ${$(set[prop])});`);
  }

  // handle argument values
  if (Array.isArray(arg)) {
    // use provided argument definitions
    for (let i=0, n=arg.length; i<n; ++i) {
      const _ = arg[i],
            t = type && type[i];

      if (Array.isArray(_)) { // include a default value
        emit.import('set');
        emit(`set(this, ${$(_[0])}, args[${i}] !== undefined ? args[${i}] : ${_[1]});`);
      }
      else if (_.startsWith(':::')) { // merge object arguments
        if (i !== 0) error('Illegal argument definition.');
        emit.import(['get', 'set', 'merge']);
        if (t) emit(`args = args.map(_ => ${typeSwitch(emit, t, '_')});`);
        emit(`set(this, ${$(_.slice(3))}, merge(0, get(this, ${$(_.slice(3))}), args));`);
        break;
      }
      else if (_.startsWith('...')) { // array value from arguments
        if (i !== 0) error('Illegal argument definition.');
        emit.import(['set', 'flat']);
        if (t) {
          emit(`args = flat(args).map(_ => ${typeSwitch(emit, t, '_')});`);
        } else {
          emit(`args = flat(args);`);
        }
        emit(`set(this, ${$(_.slice(3))}, args);`);
        break;
      }
      else if (_.startsWith('^_')) { // internal state, autogenerate id
        emit.import('id');
        emit(`this[${$(_.slice(1))}] = args[${i}] !== undefined ? args[${i}] : id(${$(_.slice(2))});`);
      }
      else if (isInternal(_)) { // internal state
        emit(`if (args[${i}] !== undefined) this[${$(_)}] = args[${i}];`);
      }
      else { // set value if not undefined
        emit.import('set');
        const v = t ? typeSwitch(emit, t, `args[${i}]`) : `args[${i}]`;
        if (_.startsWith('^')) {
          emit.import('id');
          const prop = $(_.slice(1));
          emit(`set(this, ${prop}, args[${i}] !== undefined ? ${v} : id(${prop}));`);
        } else {
          emit(`if (args[${i}] !== undefined) set(this, ${$(_)}, ${v});`);
        }
      }
    }
  } else {
    // otherwise, accept property value objects
    emit.import('assign');
    if (type) {
      emit(`args = args.map(_ => ${typeSwitch(emit, type, '_')});`);
    }
    emit(`assign(this, ...args);`);
  }

  emit.outdent();
  emit(`}`);
  emit();
}

function generateExtension(emit, method, val) {
  if (val.arg && val.arg.length > 1) {
    error('Extension method must take 0-1 named arguments');
  }

  const arg = val.arg && val.arg[0];
  const opt = {
    prop: arg ? arg.slice(3) : arg,
    pre:  val.pre && val.pre[0],
    type: val.type && val.type[0],
    flag: val.flag || 0,
    nest: val.nest,
    set:  generateMutations('obj', val.set)
  };

  !arg // zero-argument generator
      ? generateCopy(emit, method, opt.set)
    : arg.startsWith(':::') // merge object arguments
      ? generateMergedProperty(emit, method, opt)
    : arg.startsWith('+::') // merge object arguments and accrete object
      ? generateAccretiveObjectProperty(emit, method, opt)
    : arg.startsWith('+++') // merge object arguments and accrete array
      ? generateAccretiveArrayProperty(emit, method, opt)
    : arg.startsWith('...') // array value from arguments
      ? generateProperty(emit, method, {...opt, mod: '...'})
    : generateProperty(emit, method, {...opt, prop: arg, mod: ''}); // standard value argument
}

function generateMutations(obj, values) {
  let code = [];
  for (let prop in values) {
    code.push(`set(${obj}, ${$(prop)}, ${$(values[prop])});`);
  }
  return code;
}

function generateNests(emit, nest) {
  if (nest) {
    emit('if (values.length) {').indent();
    nest.forEach((name, index) => {
      emit(`values[${index}] = {${name}: values[${index}]}`)
    });
    emit.outdent()('}');
  }
}

function generateCopy(emit, method, set) {
  emit.import('copy');
  if (set) emit.import('set');

  emit(`${method}() {`);
  emit(`  const obj = copy(this);`);
  if (set) set.forEach(v => emit('  ' + v));
  emit(`  return obj;`);
  emit(`}`);
  emit();
}

function typeSwitch(emit, types, value) {
  let code = '';

  for (const key in types) {
    let _ = types[key],
        set, val, check;

    switch (key.toLowerCase()) {
      case 'array':       check = 'isArray'; break;
      case 'string':      check = 'isString'; break;
      case 'number':      check = 'isNumber'; break;
      case 'boolean':     check = 'isBoolean'; break;
      case 'object':      check = 'isObject'; break;
      case 'eventtarget': check = 'isEventTarget'; break;
      case 'iterable':    check = 'isIterable'; break;
    }
    emit.import(check);

    if (_.map) {
      // map type switch logic to apply to each input array entry
      val = typeSwitch(emit, _.map, '_');
      val = `${value}.map(_ => { return ${val}; })`;
    } else if (_.key != null) {
      // object key is non-null, so wrap value in an object
      set = _.set;
      if (_.raw) {
        emit.import('raw');
        val = [`${_.key}: raw(${value})`];
      } else if (_.prop) {
        emit.import('prop');
        val = [`${_.key}: prop(${value}, ${$(_.prop)})`];
      } else {
        val = [`${_.key}: ${value}`];
      }
      for (let k in set) val.push(`${k}: ${$(set[k])}`);
      val = `{${val.join(', ')}}`;
    } else {
      // return a value directly
      if (_.raw) {
        emit.import('raw');
        val = `raw(${value})`;
      } else if (_.prop) {
        emit.import('prop');
        val = `prop(${value}, ${$(_.prop)})`;
      } else {
        val = value;
      }
    }

    code += `${check}(${value}) ? ${val} : `;
  }

  return code + value;
}

function generateProperty(emit, method, opt) {
  const {prop, mod, type, flag, set, multi} = opt;
  emit.import(['copy', 'get', 'set']);

  emit(`${method}(${mod || ''}value) {`).indent();
  emit(  `if (arguments.length) {`).indent();
  emit(    `const obj = copy(this);`);
  if (mod) {
    emit.import('flat');
    if (multi) {
    emit(  `if (value.length === 1 && !Array.isArray(value[0])) {`).indent();
    emit(    `value = value[0];`);
    if (type)
    emit(    `value = ${typeSwitch(emit, type, 'value')};`);
    emit.outdent()('} else {').indent();
    }

    emit(    'value = flat(value)'
      + (type ? `.map(v => ${typeSwitch(emit, type, 'v')});` : ';'));

      if (multi)
    emit.outdent()(`}`);
  } else if (type) {
    emit(    `value = ${typeSwitch(emit, type, 'value')};`);
  }

  // if a non-falsy flag is specified, annotate value with context
  if (flag) {
    emit.import('annotate');
    emit(    `value = annotate(value, ${flag});`);
  }

  emit(    `set(obj, ${$(prop)}, value);`);
  if (set) set.forEach(v => emit('    ' + v));
  emit(    `return obj;`).outdent();
  emit(  `} else {`).indent();
  emit(    `return get(this, ${$(prop)});`).outdent();
  emit(  `}`).outdent();
  emit(`}`);
  emit();
}

function generateMergedProperty(emit, method, opt) {
  const {prop, pre, type, flag, set, nest} = opt;
  emit.import(['copy', 'get', 'merge', 'set']);

  emit(`${method}(...values) {`).indent();

  generateNests(emit, nest);

  if (!pre)
  emit(`if (arguments.length) {`).indent();
  else
  emit(  `values = [${$(pre)}].concat(values)`);

  if (type)
  emit(  `values = values.map(v => ${typeSwitch(emit, type, 'v')});`);
  emit(  `const obj = copy(this);`);
  emit(  `set(obj, ${$(prop)}, merge(${flag}, values));`);
  if (set) set.forEach(v => emit(v));
  emit(  `return obj;`);

  if (!pre) {
  emit.outdent();
  emit(`} else {`).indent();
  emit(  `return get(this, ${$(prop)});`).outdent();
  emit(`}`); }

  emit.outdent();
  emit(`}`);
  emit();
}

function generateAccretiveObjectProperty(emit, method, opt) {
  const {prop, pre, type, flag, set, nest} = opt;
  emit.import(['copy', 'get', 'merge', 'set']);

  emit(`${method}(...values) {`).indent();

  generateNests(emit, nest);

  emit(`if (values.length === 1 && Array.isArray(values[0])) {`).indent();
  emit('values = values[0];').outdent();
  emit('}');

  if (!pre)
  emit(`if (values.length) {`).indent();
  else
  emit(  `values = [${$(pre)}].concat(values)`);

  if (type)
  emit(  `values = values.map(v => ${typeSwitch(emit, type, 'v')});`);
  emit(  `const val = get(this, ${$(prop)});`);
  emit(  `const obj = copy(this);`);
  emit(  `if (val) values = [val].concat(values);`);
  emit(  `set(obj, ${$(prop)}, merge(${flag}, values));`);
  if (set) set.forEach(v => emit(v));
  emit(  `return obj;`);

  if (!pre) {
  emit.outdent();
  emit(`} else {`).indent();
  emit(  `return get(this, ${$(prop)});`).outdent();
  emit(`}`); }

  emit.outdent();
  emit(`}`);
  emit();
}

function generateAccretiveArrayProperty(emit, method, opt) {
  const {prop, pre, type, flag, set, nest} = opt;
  emit.import(['copy', 'get', 'merge', 'set']);

  emit(`${method}(...values) {`).indent();

  generateNests(emit, nest);

  if (!pre)
  emit(`if (arguments.length) {`).indent();
  else
  emit(  `values = [${$(pre)}].concat(values)`);

  if (type)
  emit(  `values = values.map(v => ${typeSwitch(emit, type, 'v')});`);
  emit(  `const val = get(this, ${$(prop)}) || [];`);
  emit(  `const obj = copy(this);`);
  emit(  `values = [].concat(val, merge(${flag}, values));`);
  emit(  `set(obj, ${$(prop)}, values.length > 1 ? values : values[0]);`);
  if (set) set.forEach(v => emit(v));
  emit(  `return obj;`);

  if (!pre) {
  emit.outdent();
  emit(`} else {`).indent();
  emit(  `return get(this, ${$(prop)});`).outdent();
  emit(`}`); }

  emit.outdent();
  emit(`}`);
  emit();
}

function generatePass(emit, method, opt) {
  emit.import(opt.call, opt.from || opt.call);
  if (!opt.self && !opt.init) emit.import('assign');

  emit(`${method}(...values) {`);
  if (opt.args) emit(`  values = values.slice(0, ${opt.args});`);
  if (opt.prop) {
    if (opt.init) {
      emit(`  let obj = ${opt.call}(${getProperty(opt.init)});`);
    } else {
      emit(`  let obj = ${opt.call}();`);
      opt.self
        ? emit(`  obj = obj.${opt.self}(this);`)
        : emit(`  obj = assign(obj, this);`);
    }
    emit(`  return obj.${opt.prop}(...values);`);
  } else {
    emit(`  const obj = ${opt.call}(...values);`);
    opt.self
      ? emit(`  return obj.${opt.self}(this);`)
      : emit(`  return assign(obj, this);`);
  }
  emit(`}`);
  emit();
}

function generateCall(emit, method, opt) {
  emit.import(opt.call, opt.from || opt.call);

  emit(`${method}(...values) {`);
  if (opt.args) emit(`  values = values.slice(0, ${opt.args});`);
  emit(`  return ${opt.call}.apply(this, values);`);
  emit(`}`);
  emit();
}

function generateToObject(emit, spec) {
  const flag = Array.isArray(spec);
  const obj = flag
    ? `flag ? ${generateObject(emit, spec[1])} : ${generateObject(emit, spec[0])}`
    : generateObject(emit, spec);

  emit(`toObject(${flag ? 'flag' : ''}) {`);
  emit(`  return ${obj};`);
  emit(`}`);
  emit();
}

function generateObject(emit, spec) {
  const { key, nest } = spec || {};
  let obj;

  if (isObject(key)) {
    let c = [];
    for (let k in key) {
      c.push(`${k}: ${getProperty(key[k])}`);
    }
    obj = `{${c.join(', ')}}`;
  } else if (isString(key)) {
    const k = isInternal(key) ? `[this[${$(key)}]]` : key;
    obj = `{${k}: super.toObject()}`;
  } else {
    obj = `super.toObject()`;
  }
  return nest
    ? (emit.import('nest'), `nest(${obj}, ${$(nest.keys)}, ${$(nest.rest)})`)
    : obj;
}
