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

export function hasOwnProperty(obj, property) {
  return Object.prototype.hasOwnProperty.call(obj, property);
}

export function stringValue(_) {
  return Array.isArray(_) ? '[' + _.map(stringValue) + ']'
    : isObject(_) || isString(_) ?
      // Output valid JSON and JS source strings.
      // See http://timelessrepo.com/json-isnt-a-javascript-subset
      JSON.stringify(_).replace('\u2028','\\u2028').replace('\u2029', '\\u2029')
    : _;
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
    prefix = prefix.slice(-2);
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
  return _[0].toUpperCase() + _.slice(1);
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
