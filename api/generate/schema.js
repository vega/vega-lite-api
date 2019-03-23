export function resolve(schema, type) {
  let t;
  return !type ? null
    : type.$ref ? resolve(schema, lookup(schema, type.$ref))
    : type.type === 'object' ? type.properties
    : (t = type.anyOf || type.allOf || type.oneOf)
      ? Object.assign({}, ...t.map(_ => resolve(schema, _)))
    : null;
}

export function enums(schema, type) {
  let t;
  return !type ? []
    : type.$ref ? enums(schema, lookup(schema, type.$ref))
    : type.enum ? type.enum
    : (t = type.anyOf || type.allOf || type.oneOf)
      ? [].concat(...t.map(_ => enums(schema, _)))
    : [];
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
