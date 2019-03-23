export function capitalize(_) {
  return _[0].toUpperCase() + _.slice(1);
}

export function error(_) {
  throw new Error(_);
}

export function isObject(_) {
  return _ === Object(_);
}

export function isString(_) {
  return typeof _ === 'string';
}

export function stringValue(_) {
  return Array.isArray(_) ? '[' + _.map(stringValue) + ']'
    : isObject(_) || isString(_) ?
      // Output valid JSON and JS source strings.
      // See http://timelessrepo.com/json-isnt-a-javascript-subset
      JSON.stringify(_).replace('\u2028','\\u2028').replace('\u2029', '\\u2029')
    : _;
}

export function unique(obj) {
  const list = [],
        map = {};

  if (Array.isArray(obj)) {
    for (let v of obj) {
      if (!map.hasOwnProperty(v)) {
        list.push(v);
        map[v] = 1;
      }
    }
  } else {
    let v;
    for (let k in obj) {
      v = obj[k];
      if (!map.hasOwnProperty(v)) {
        list.push(v);
        map[v] = 1;
      }
    }
  }

  return list;
}
