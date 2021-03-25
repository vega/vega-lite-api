import {isArray} from './util';

export function marshal(def) {
  return isArray(def)
    ? { anyOf: def.map(d => ({ $ref: '#/definitions/' + d })).reverse() }
    : { $ref: '#/definitions/' + def };
}

export function lookup(schema, ref) {
  if (!ref) return null;

  const path = ref.split('/');
  for (let i=1; i<path.length; ++i) {
    schema = schema[path[i]];
    if (schema == null) break;
  }
  return schema;
}

export function search(schema, type, check, get, gather, base) {
  let t;
  return !type
      ? base()
    : type.$ref
      ? search(schema, lookup(schema, type.$ref), check, get, gather, base)
    : check(type)
      ? get(type)
    : (t = type.anyOf || type.allOf || type.oneOf)
      ? gather(t.map(_ => search(schema, _, check, get, gather, base)))
    : base();
}

export function props(schema, type) {
  return search(schema, type,
    t => t.type === 'object',
    t => t.properties,
    a => Object.assign({}, ...a),
    () => null
  );
}

export function enums(schema, type) {
  return search(schema, type,
    t => t.const || t.enum,
    t => t.const || t.enum,
    a => [].concat(...a).sort(),
    () => []
  );
}

export function types(schema, type) {
  return search(schema, type,
    t => t.type === 'object' && (t = t.properties) && (t = t.type),
    t => t.properties.type.const || t.properties.type.enum || [],
    a => [].concat(...a).sort(),
    () => []
  );
}

export function isArrayType(schema) {
  if (hasArrayType(schema)) {
    return 1;
  } else if (schema = (schema.anyOf || schema.oneOf)) {
    if (!schema.length) return 0;
    let min = 3;
    let max = -1;
    schema.forEach(s => {
      const t = isArrayType(s);
      if (t < min) min = t;
      if (t > max) max = t;
    });
    return min === max ? min : 2;
  } else {
    return 0;
  }
}

function hasArrayType({ type, $ref }) {
  return type === 'array' || $ref && $ref.startsWith('#/definitions/Vector');
}
