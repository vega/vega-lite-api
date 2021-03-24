const Data = Symbol('data');
const Context = Symbol('context');
let id_counter = 0;

export function id(prefix) {
  return (prefix || '') + (++id_counter);
}

export class BaseObject {
  toObject() { return toObject(this); }
}

export class MergeObject {
  constructor(values) { this[Data] = values; }
  toObject() { return Object.assign({}, ...recurse(this[Data])); }
}

export function assign(target, ...sources) {
  if (sources.length === 1 && Array.isArray(sources[0])) {
    target[Data] = sources[0];
  } else {
    sources.forEach(s => {
      Object.assign(target[Data], isObject(s) && s[Data] || s)
    });
  }
  return target;
}

export function flat(value) {
  return Array.isArray(value) ? [].concat(...value) : value;
}

export function prop(obj, name) {
  return isObject(obj) && !obj[Data] ? obj[name] : get(obj, name);
}

export function get(obj, name) {
  return obj[Data][name];
}

export function set(obj, name, value) {
  obj[Data][name] = object(value);
}

function duplicate(...obj) {
  return Object.assign(
    Object.create(Object.getPrototypeOf(obj[0])),
    ...obj
  );
}

export function copy(obj) {
  return duplicate(obj, { [Data]: Object.assign({}, obj[Data]) });
}

export function init(obj, value) {
  obj[Data] = value || {};
}

export function annotate(value, context) {
  const ctx = { [Context]: context };
  return isArray(value)
    ? value.map(v => duplicate(v, ctx))
    : duplicate(value, ctx)
}

function recurse(d) {
  return d && d.toObject ? d.toObject(d[Context] || 0) : toObject(d);
}

function toObject(value) {
  if (isArray(value)) {
    return value.map(d => recurse(d));
  } else if (isObject(value)) {
    const data = value[Data] || value;
    return isArray(data)
      ? recurse(data)
      : Object.keys(data).reduce((_, k) => {
          _[k] = recurse(data[k]);
          return _;
        }, {});
  } else {
    return value;
  }
}

export function raw(value) {
  return { [Data]: value, toObject: () => value };
}

function object(value) {
  return (isObject(value) && !value[Data]) ? {[Data]: value || {}} : value;
}

export function merge(flag, ...values) {
  const objects = [].concat(...values);
  return new MergeObject(flag ? annotate(objects, flag) : objects);
}

export function nest(obj, keys, rest) {
  const m = keys.reduce((m, k) => (m[k] = 1, m), {}),
        u = {}, v = {};

  for (let k in obj) (m[k] ? u : v)[k] = obj[k];
  u[rest] = v;
  return u;
}

// -- type checkers --

export const isArray = Array.isArray;

export function isBoolean(_) {
  return typeof _ === 'boolean';
}

export function isIterable(_) {
  return isObject(_) && typeof _[Symbol.iterator] === 'function';
}

export function isNumber(_) {
  return typeof _ === 'number';
}

export function isObject(_) {
  return _ === Object(_) && !isArray(_);
}

export function isString(_) {
  return typeof _ === 'string';
}

export function isFunction(_) {
  return typeof _ === 'function';
}

export function isEventTarget(_) {
  return isObject(_) && isFunction(_.addEventListener);
}
