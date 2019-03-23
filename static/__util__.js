const Data = Symbol('data');

const prototype = {
  toJSON: function() { return toJSON(this); }
};

export function proto(ctr) {
  if (ctr) {
    var p = (ctr.prototype = Object.create(prototype));
    p.constructor = ctr;
    return p;
  } else {
    return prototype;
  }
}

export function assign(target, ...sources) {
  sources.forEach(s => {
    Object.assign(target[Data], isDataObject(s) ? s[Data] : s)
  });
  return target;
}

export function flat(value) {
  return Array.isArray(value) ? [].concat(...value) : value;
}

export function get(obj, name) {
  return obj[Data][name];
}

export function set(obj, name, value) {
  obj[Data][name] = object(value);
}

export function copy(obj) {
  const mod = Object.create(Object.getPrototypeOf(obj));
  Object.assign(mod, obj);
  mod[Data] = Object.assign({}, obj[Data]);
  return mod;
}

export function init(obj, value) {
  obj[Data] = value || {};
}

function isDataObject(value) {
  return value === Object(value) && !Array.isArray(value) && value[Data];
}

function recurse(d, flag) {
  return d && d.toJSON ? d.toJSON(flag) : toJSON(d, flag);
}

function toJSON(value, flag) {
  if (isDataObject(value)) {
    const data = value[Data],
          out = {};
    for (let k in data) {
      const d = data[k];
      out[k] = recurse(d, flag);
    }
    return out;
  } else if (Array.isArray(value)) {
    return value.map(d => recurse(d, flag));
  } else {
    return value;
  }
}

function object(value) {
  return (value === Object(value) && !Array.isArray(value) && !value[Data])
    ? {[Data]: value || {}}
    : value;
}

export function merge(flag, ...values) {
  const objects = toJSON([].concat(...values), flag);
  return object(Object.assign({}, ...objects));
}
