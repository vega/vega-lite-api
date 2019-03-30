import {emitter, error, stringValue as $, isString, isObject} from './util';

export function generateMethod(schema, methodName, spec) {
  const emit = emitter('__util__'),
        className = '_' + methodName,
        ext = spec.ext || {};

  if (spec.ctr) {
    // method is a proxied invocation of another method
    generateProxy(emit, methodName, spec, spec.ctr);
    return emit.code();
  }

  // -- constructor --
  generateConstructor(emit, className, spec);

  // -- prototype --
  emit.import('proto');
  emit('// eslint-disable-next-line no-unused-vars');
  emit(`const prototype = proto(${className});\n`);

  // -- properties --
  for (let prop in schema) {
    if (ext.hasOwnProperty(prop)) continue; // skip if extension defined
    const mod = schema[prop].type === 'array' ? '...' : '';
    generateProperty(emit, prop, prop, mod);
  }

  // -- extensions --
  for (let prop in ext) {
    if (ext[prop] == null) continue; // skip if null
    generateExtension(emit, prop, ext[prop]);
  }

  // -- pass --
  for (let prop in spec.pass) {
    if (spec.pass[prop] == null) continue; // skip if null
    generatePass(emit, prop, spec.pass[prop]);
  }

  // -- call --
  for (let prop in spec.call) {
    if (spec.call[prop] == null) continue; // skip if null
    generateCall(emit, prop, spec.call[prop]);
  }

  // -- key --
  if (spec.key) {
    generateToJSON(emit, spec.key);
  }

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

function generateConstructor(emit, className, spec) {
  const arg  = spec.arg,
        set  = spec.set,
        type = spec.type;

  emit(`function ${className}(...args) {`);

  // init data object
  emit.import('init');
  emit(`  init(this);`);

  // handle set values
  for (let prop in set) {
    emit.import('set');
    emit(`  set(this, ${$(prop)}, ${$(set[prop])});`);
  }

  // handle argument values
  if (Array.isArray(arg)) {
    // use provided argument definitions
    for (let i=0, n=arg.length; i<n; ++i) {
      const _ = arg[i],
            t = type && type[i];

      if (Array.isArray(_)) { // include a default value
        emit.import('set');
        emit(`  set(this, ${$(_[0])}, args[${i}] !== undefined ? args[${i}] : ${_[1]});`);
      } else if (_.startsWith(':::')) { // merge object arguments
        if (i !== 0) error('Illegal argument definition.');
        emit.import(['get', 'set', 'merge']);
        emit(`  set(this, ${$(_.slice(3))}, merge(0, get(this, ${$(_.slice(3))}), args));`);
        break;
      } else if (_.startsWith('...')) { // array value from arguments
        if (i !== 0) error('Illegal argument definition.');
        emit.import(['set', 'flat']);
        emit(`  set(this, ${$(_.slice(3))}, flat(args));`);
        break;
      } else if (_.startsWith('^_')) { // internal state, autogenerate id
        emit.import('id');
        emit(`  this[${$(_.slice(1))}] = args[${i}] !== undefined ? args[${i}] : id(${$(_.slice(2))});`);
      } else if (_.startsWith('_')) { // internal state
        emit(`  if (args[${i}] !== undefined) this[${$(_)}] = args[${i}];`);
      } else { // set value if not undefined
        emit.import('set');
        const v = t ? typeSwitch(emit, t, `args[${i}]`) : `args[${i}]`;
        emit(`  if (args[${i}] !== undefined) set(this, ${$(_)}, ${v});`);
      }
    }
  } else {
    // otherwise, accept property value objects
    emit.import('assign');
    if (type) {
      emit(`  args = args.map(_ => ${typeSwitch(emit, type, `_`)});`);
    }
    emit(`  assign(this, ...args);`);
  }

  emit(`}`);
  emit();
}

function generateExtension(emit, prop, val) {
  if (val.arg && val.arg.length > 1) {
    error('Extension method must take 0-1 named arguments');
  }

  const arg  = val.arg && val.arg[0],
        type = val.type && val.type[0],
        flag = val.flag,
        set  = generateMutations('obj', val.set);

  !arg // zero-argument generator
      ? generateCopy(emit, prop, set)
    : arg.startsWith(':::') // merge object arguments
      ? generateMergedProperty(emit, prop, arg.slice(3), flag, set)
    : arg.startsWith('+::') // merge object arguments and accrete object
      ? generateAccretiveObjectProperty(emit, prop, arg.slice(3), flag, set)
    : arg.startsWith('+++') // merge object arguments and accrete array
      ? generateAccretiveArrayProperty(emit, prop, arg.slice(3), flag, set)
    : arg.startsWith('...') // array value from arguments
      ? generateProperty(emit, prop, arg.slice(3), '...', set)
    : generateProperty(emit, prop, arg, '', set, type); // standard value argument
}

function generateMutations(obj, values) {
  let code = [];
  for (let prop in values) {
    code.push(`set(${obj}, ${$(prop)}, ${$(values[prop])});`);
  }
  return code;
}

function generateCopy(emit, method, set) {
  emit.import('copy');
  if (set) emit.import('set');

  emit(`prototype.${method} = function() {`);
  emit(`  const obj = copy(this);`);
  if (set) set.forEach(v => emit('  ' + v));
  emit(`  return obj;`);
  emit(`};`);
  emit();
}

function typeSwitch(emit, types, value) {
  let code = '';

  for (let key in types) {
    let _ = types[key],
        set, val, check;

    switch (key) {
      case 'array':   check = 'isArray';   break;
      case 'string':  check = 'isString';  break;
      case 'number':  check = 'isNumber';  break;
      case 'boolean': check = 'isBoolean'; break;
      case 'object':  check = 'isObject';  break;
    }
    emit.import(check);

    if (_.map) {
      val = typeSwitch(emit, _.map, '_');
      val = `${value}.map(_ => { return ${val}; })`;
    } else {
      key = _.key
      set = _.set;
      val = [`${key}: ${_.map ? '_' : value}`];
      for (let k in set) val.push(`${k}: ${$(set[k])}`);
      val = `{${val.join(', ')}}`;
    }

    code += `${check}(${value}) ? ${val} : `;
  }

  return code + value;
}

function generateProperty(emit, method, prop, mod, set, type) {
  emit.import(['copy', 'get', 'set']);
  if (mod) emit.import('flat');

  const value = mod ? 'flat(value)' : 'value',
        final = type ? typeSwitch(emit, type, 'val') : 'val';

  emit(`prototype.${method} = function(${mod || ''}value) {`);
  emit(`  if (arguments.length) {`);
  emit(`    const obj = copy(this);`);
  emit(`    const val = ${value};`);
  emit(`    set(obj, ${$(prop)}, ${final});`);
  if (set) set.forEach(v => emit('    ' + v));
  emit(`    return obj;`);
  emit(`  } else {`);
  emit(`    return get(this, ${$(prop)});`);
  emit(`  }`);
  emit(`};`);
  emit();
}

function generateMergedProperty(emit, method, prop, flag, set) {
  emit.import(['copy', 'get', 'merge', 'set']);

  emit(`prototype.${method} = function(...values) {`);
  emit(`  if (arguments.length) {`);
  emit(`    const obj = copy(this);`);
  emit(`    set(obj, ${$(prop)}, merge(${flag}, values));`);
  if (set) set.forEach(v => emit('    ' + v));
  emit(`    return obj;`);
  emit(`  } else {`);
  emit(`    return get(this, ${$(prop)});`);
  emit(`  }`);
  emit(`};`);
  emit();
}

function generateAccretiveObjectProperty(emit, method, prop, flag, set) {
  emit.import(['copy', 'get', 'merge', 'set']);

  emit(`prototype.${method} = function(...values) {`);
  emit(`  if (arguments.length) {`);
  emit(`    const val = get(this, ${$(prop)});`);
  emit(`    const obj = copy(this);`);
  emit(`    if (val) values = [val].concat(values);`);
  emit(`    set(obj, ${$(prop)}, merge(${flag}, values));`);
  if (set) set.forEach(v => emit('    ' + v));
  emit(`    return obj;`);
  emit(`  } else {`);
  emit(`    return get(this, ${$(prop)});`);
  emit(`  }`);
  emit(`};`);
  emit();
}

function generateAccretiveArrayProperty(emit, method, prop, flag, set) {
  emit.import(['copy', 'get', 'merge', 'set']);

  emit(`prototype.${method} = function(...values) {`);
  emit(`  if (arguments.length) {`);
  emit(`    const val = get(this, ${$(prop)}) || [];`);
  emit(`    const obj = copy(this);`);
  emit(`    values = [].concat(val, merge(${flag}, values));`);
  emit(`    set(obj, ${$(prop)}, values.length > 1 ? values : values[0]);`);
  if (set) set.forEach(v => emit('    ' + v));
  emit(`    return obj;`);
  emit(`  } else {`);
  emit(`    return get(this, ${$(prop)});`);
  emit(`  }`);
  emit(`};`);
  emit();
}

function generatePass(emit, method, opt) {
  emit.import(opt.call, opt.from || opt.call);
  if (!opt.self) emit.import('assign');

  emit(`prototype.${method} = function(...values) {`);
  if (opt.args) emit(`  values = values.slice(0, ${opt.args});`);
  emit(`  const obj = ${opt.call}(...values);`);
  opt.self
    ? emit(`  return obj.${opt.self}(this);`)
    : emit(`  return assign(obj, this);`);
  emit(`};`);
  emit();
}

function generateCall(emit, method, opt) {
  emit.import(opt.call, opt.from || opt.call);

  emit(`prototype.${method} = function(...values) {`);
  if (opt.args) emit(`  values = values.slice(0, ${opt.args});`);
  emit(`  return ${opt.call}.apply(this, values);`);
  emit(`};`);
  emit();
}

function generateToJSON(emit, key) {
  emit.import('proto');

  if (Array.isArray(key)) {
    emit(`prototype.toJSON = function(flag) {`);
    emit(`  return flag`);
    emit(`    ? ${generateJSON(key[1])}`);
    emit(`    : ${generateJSON(key[0])};`);
  } else {
    emit(`prototype.toJSON = function() {`);
    emit(`  return ${generateJSON(key)};`);
  }
  emit(`};`);
  emit();
}

function generateJSON(key) {
  if (isObject(key)) {
    let c = [];
    for (let k in key) {
      let v = key[k];
      v = v.startsWith('_') ? `this[${$(v)}]` : v;
      c.push(`${k}: ${v}`);
    }
    return `{${c.join(', ')}}`;
  } else if (isString(key)) {
    const k = key.startsWith('_') ? `[this[${$(key)}]]` : key;
    return `{${k}: proto().toJSON.call(this)}`;
  } else {
    return `proto().toJSON.call(this)`;
  }
}
