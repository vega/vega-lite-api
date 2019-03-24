import {capitalize, error, stringValue as $, unique, isString, isObject} from './util';

// TODO validation

export function generateMethod(schema, methodName, spec) {
  const className = capitalize(methodName),
        ext = spec.ext || {};

  let code = [];
  const emit = s => code.push(s || '');

  // -- imports --
  emit(`import {assign, copy, id, init, flat, get, merge, proto, set} from "./__util__";`);
  if (spec.switch) unique(spec.switch).forEach(method => {
    emit(`import {${method}} from "./${method}";`);
  });
  emit();

  // -- constructor --
  generateConstructor(emit, className, spec.set, spec.arg);

  // -- prototype --
  emit(`const prototype = proto(${className});`);
  emit();

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

  // -- switch --
  for (let prop in spec.switch) {
    generateSwitch(emit, prop, spec.switch[prop]);
  }

  // -- key --
  if (spec.key) {
    generateToJSON(emit, spec.key);
  }

  // export method
  emit(`export function ${methodName}(...args) {`);
  emit(`  return new ${className}(...args);`);
  emit(`}`);

  return code.join('\n');
}

function generateConstructor(emit, className, set, arg) {
  emit(`function ${className}(...args) {`);

  // init data object
  emit(`  init(this);`);

  // handle set values
  for (let prop in set) {
    emit(`  set(this, ${$(prop)}, ${$(set[prop])});`);
  }

  // handle argument values
  if (Array.isArray(arg)) {
    // use provided argument definitions
    for (let i=0, n=arg.length; i<n; ++i) {
      const _ = arg[i];
      if (Array.isArray(_)) { // include a default value
        emit(`  set(this, ${$(_[0])}, args[${i}] !== undefined ? args[${i}] : ${_[1]});`);
      } else if (_.startsWith(':::')) { // merge object arguments
        if (i !== 0) error('Illegal argument definition.');
        emit(`  set(this, ${$(_.slice(3))}, merge(0, get(this, ${$(_.slice(3))}), args));`);
        break;
      } else if (_.startsWith('...')) { // array value from arguments
        if (i !== 0) error('Illegal argument definition.');
        emit(`  set(this, ${$(_.slice(3))}, args);`);
        break;
      } else if (_.startsWith('^_')) { // internal state, autogenerate id
        emit(`  this[${$(_.slice(1))}] = args[${i}] !== undefined ? args[${i}] : id(${$(_.slice(2))});`);
      } else if (_.startsWith('_')) { // internal state
        emit(`  if (args[${i}] !== undefined) this[${$(_)}] = args[${i}];`);
      } else { // set value if not undefined
        emit(`  if (args[${i}] !== undefined) set(this, ${$(_)}, args[${i}]);`);
      }
    }
  } else {
    // otherwise, accept property value objects
    emit(`  assign(this, ...args);`);
  }

  emit(`}`);
  emit();
}

function generateExtension(emit, prop, val) {
  if (val.arg && val.arg.length > 1) {
    error('Extension method must take 0-1 named arguments');
  }

  const arg = val.arg && val.arg[0],
        set = generateMutations('obj', val.set);

  !arg // zero-argument generator
      ? generateCopy(emit, prop, set)
    : arg.startsWith(':::') // merge object arguments
      ? generateMergedProperty(emit, prop, arg.slice(3), val.flag, set)
    : arg.startsWith('+++') // merge object arguments and accrete
      ? generateAccretiveProperty(emit, prop, arg.slice(3), val.flag, set)
    : arg.startsWith('...') // array value from arguments
      ? generateProperty(emit, prop, arg.slice(3), '...', set)
    : generateProperty(emit, prop, arg, '', set); // standard value argument
}

function generateMutations(obj, values) {
  let code = [];
  for (let prop in values) {
    code.push(`set(${obj}, ${$(prop)}, ${$(values[prop])});`);
  }
  return code;
}

function generateCopy(emit, method, set) {
  emit(`prototype.${method} = function() {`);
  emit(`  const obj = copy(this);`);
  if (set) set.forEach(v => emit('  ' + v));
  emit(`  return obj;`);
  emit(`};`);
  emit();
}

function generateProperty(emit, method, prop, mod, set) {
  let val = mod ? 'flat(value)' : 'value';

  emit(`prototype.${method} = function(${mod || ''}value) {`);
  emit(`  if (arguments.length) {`);
  emit(`    const obj = copy(this);`);
  emit(`    set(obj, ${$(prop)}, ${val});`);
  if (set) set.forEach(v => emit('    ' + v));
  emit(`    return obj;`);
  emit(`  } else {`);
  emit(`    return get(this, ${$(prop)});`);
  emit(`  }`);
  emit(`};`);
  emit();
}

function generateMergedProperty(emit, method, prop, flag, set) {
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

function generateAccretiveProperty(emit, method, prop, flag, set) {
  emit(`prototype.${method} = function(...values) {`);
  emit(`  if (arguments.length) {`);
  emit(`    const val = get(this, ${$(prop)}) || [];`);
  emit(`    const obj = copy(this);`);
  emit(`    set(obj, ${$(prop)}, [].concat(val, merge(${flag}, values)));`);
  if (set) set.forEach(v => emit('    ' + v));
  emit(`    return obj;`);
  emit(`  } else {`);
  emit(`    return get(this, ${$(prop)});`);
  emit(`  }`);
  emit(`};`);
  emit();
}

function generateSwitch(emit, method, prop) {
  emit(`prototype.${method} = function(...values) {`);
  emit(`  return arguments.length`);
  emit(`    ? assign(${prop}(...values), this)`);
  emit(`    : null;`);
  emit(`};`);
  emit();
}

function generateToJSON(emit, key) {
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
