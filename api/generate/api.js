import {writeFile} from 'fs';
import {generateMethod} from './method';
import {props} from './schema';

export function generateAPI(schema, api, path) {
  const q = [];

  // generate api method definitions
  for (let name in api) {
    const def = props(schema, {$ref: '#/definitions/' + api[name].def});
    q.push(write(`${path}/${name}.js`, generateMethod(def, name, api[name])));
  }

  // generate api index
  q.push(write(`${path}/index.js`, generateIndex(api)));

  return Promise.all(q);
}

function generateIndex(api) {
  let code = '';
  for (let name in api) {
    code += `export {${name}} from "./${name}";\n`;
  }
  return code + '\n';
}

function write(name, data) {
  return new Promise(function(resolve, reject) {
    writeFile(name, data, 'utf8', err => err ? reject(err) : resolve(data));
  });
}
