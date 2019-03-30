import {writeFile} from 'fs';

export function write(name, data) {
  return new Promise(function(resolve, reject) {
    writeFile(name, data, 'utf8', err => err ? reject(err) : resolve(data));
  });
}
