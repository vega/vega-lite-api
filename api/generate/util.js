export function error(_) {
  throw new Error(_);
}

export function isArray(_) {
  return Array.isArray(_);
}

export function isObject(_) {
  return _ === Object(_);
}

export function isString(_) {
  return typeof _ === 'string';
}

export function isInternal(_) {
  return isString(_) && _.startsWith('_');
}

export function hasOwnProperty(obj, property) {
  return Object.prototype.hasOwnProperty.call(obj, property);
}

export function reduce(input, value, key) {
  const items = Array.isArray(input)
    ? input
    : Object.keys(input);

  return items.reduce((api, item) => {
    const k = key ? key(item) : item;
    api[k] = value(item);
    return api;
  }, {});
}

export function stringValue(_) {
  return Array.isArray(_) ? '[' + _.map(stringValue) + ']'
    : isObject(_) || isString(_) ?
      // Output valid JSON and JS source strings.
      // See http://timelessrepo.com/json-isnt-a-javascript-subset
      JSON.stringify(_).replace('\u2028','\\u2028').replace('\u2029', '\\u2029')
    : _;
}

export function getProperty(name) {
  return `this.${name}` + (isInternal(name) ? '' : '()');
}

export function emitter(defaultFile) {
  const imports = {[defaultFile]: {}},
        lines = [];

  let prefix = '';

  const emit = (s) => {
    lines.push(s ? (prefix + s) : '');
    return emit;
  };

  emit.indent = () => {
    prefix = prefix + '  ';
    return emit;
  };

  emit.outdent = () => {
    prefix = prefix.slice(0, prefix.length - 2);
    return emit;
  };

  emit.import = (methods, file) => {
    file = file || defaultFile;
    (Array.isArray(methods) ? methods : [methods])
      .forEach(m => (imports[file] || (imports[file] = {}))[m] = 1);
    return emit;
  };

  emit.code = () => {
    const files = Object.keys(imports);

    const code = files.reduce((list, file) => {
      const methods = Object.keys(imports[file]).sort().join(', ');
      list.push(`import {${methods}} from './${file}';`);
      return list;
    }, []);

    return code.concat('', lines).join('\n');
  }

  return emit;
}

export function article(_) {
  return _ && _.match(/^[aeiou]/) ? 'an' : 'a';
}

export function capitalize(_) {
  let i = 0;
  const p = _[i] === '_' ? (++i, '_') : '';
  const c = _[i];
  return p + c.toUpperCase() + _.slice(++i);
}

export function uppercase(_) {
  return _.toUpperCase();
}

export function code(_) {
  return `<code>${_}</code>`;
}

export function link(_) {
  return `[${_}](${_})`;
}
