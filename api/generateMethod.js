import {capitalize, error, stringValue as $, unique} from './util';

// TODO validation

export function generateMethod(schema, methodName, spec) {
  const className = capitalize(methodName),
        ext = spec.ext || {};

  let code = '';
  const emit = s => code += (s || '') + '\n';

  // -- imports --
  emit(`import {assign, init, flat, get, merge, mutate, proto, set} from "./__util__";`);
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
    const arg = ext[prop][0];
    arg.startsWith('+++') ? generateMergedProperty(emit, prop, arg.slice(3))
      : arg.startsWith('...') ? generateProperty(emit, prop, arg.slice(3), '...')
      : generateProperty(emit, prop, arg);
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

  return code;
}

function generateConstructor(emit, className, set, arg) {
  emit(`function ${className}(...args) {`);

  // init data object
  emit(`  init(this);`);

  // handle set values
  for (let prop in set) {
    emit(`  mutate(this, ${$(prop)}, ${$(set[prop])});`);
  }

  // handle argument values
  if (Array.isArray(arg)) {
    // use provided argument definitions
    for (let i=0, n=arg.length; i<n; ++i) {
      const _ = arg[i];
      if (Array.isArray(_)) {
        emit(`  mutate(this, ${$(_[0])}, args[${i}] !== undefined ? args[${i}] : ${_[1]});`);
      } else if (_.startsWith('+++')) {
        if (i !== 0) error('Illegal argument definition.');
        emit(`  mutate(this, ${$(_.slice(3))}, merge(get(this, ${$(_.slice(3))}), args));`);
        break;
      } else if (_.startsWith('...')) {
        if (i !== 0) error('Illegal argument definition.');
        emit(`  mutate(this, ${$(_.slice(3))}, args);`);
        break;
      } else {
        emit(`  if (args[${i}] !== undefined) mutate(this, ${$(_)}, args[${i}]);`);
      }
    }
  } else {
    // otherwise, accept property value objects
    emit(`  assign(this, ...args);`);
  }

  emit(`}`);
  emit();
}

function generateProperty(emit, method, prop, mod) {
  emit(`prototype.${method} = function(${mod || ''}value) {`);
  emit(`  return arguments.length`);
  emit(`    ? set(this, ${$(prop)}, flat(value))`);
  emit(`    : get(this, ${$(prop)});`);
  emit(`};`);
  emit();
}

function generateMergedProperty(emit, method, prop) {
  emit(`prototype.${method} = function(...values) {`);
  emit(`  return arguments.length`);
  emit(`    ? set(this, ${$(prop)}, merge(values))`);
  emit(`    : get(this, ${$(prop)});`);
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
  emit(`prototype.toJSON = function() {`);
  emit(`  return {${key}: proto().toJSON.call(this)};`);
  emit(`};`);
  emit();
}
