import {writeFile} from 'fs';
import {generateMethod} from './generateMethod';

// eslint-disable-next-line no-console
const onError = err => err && console.error(err);

export function generateAPI(schema, api) {
  // generate api method definitions
  for (let name in api) {
    const def = resolve(schema, {$ref: '#/definitions/' + api[name].def});
    writeFile(`src/${name}.js`, generateMethod(def, name, api[name]), onError);
  }

  // generate api index
  writeFile(`src/index.js`, generateIndex(api), onError);
}

function generateIndex(api) {
  let code = '';
  for (let name in api) {
    code += `export {${name}} from "./${name}";\n`;
  }
  return code + '\n';
}

function resolve(schema, type) {
  let t;
  return !type ? null
    : type.$ref ? resolve(schema, get(schema, type.$ref))
    : type.type === 'object' ?  type.properties
    : (t = type.anyOf || type.allOf || type.oneOf)
      ? Object.assign({}, ...t.map(_ => resolve(schema, _)))
    : null;
}

function get(schema, ref) {
  if (!ref) return null;

  const path = ref.split('/');
  for (let i=1; i<path.length; ++i) {
    schema = schema[path[i]];
    if (schema == null) break;
  }
  return schema;
}
