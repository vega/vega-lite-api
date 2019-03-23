import {writeFile} from 'fs';
import {generateMethod} from './method';
import {resolve} from './schema';

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
