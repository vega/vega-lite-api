import {generateMethod} from './method';
import {props} from './schema';
import {write} from './write';

export function generateAPI(schema, api, path) {
  const q = [];

  // generate api method definitions
  for (let name in api) {
    if (name.startsWith('$')) continue; // skip external methods
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
    if (name.startsWith('_')) {
      continue; // skip private methods
    } else if (name.startsWith('$')) {
      const base = api[name].name;
      code += `export {${base ? `${base} as ` : ''}${name.slice(1)}} from "./${api[name].src}";\n`;
    } else {
      code += `export {${name}} from "./${name}";\n`;
    }
  }
  return code;
}
