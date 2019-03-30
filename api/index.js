import {generateAPI} from './generate/api';
import {generateDoc} from './generate/doc';
import schema from './schema.json';
import {api} from './api';

export function build() {
  return Promise.all([
    generateAPI(schema, api, 'src'),
    generateDoc(schema, api, 'docs', 'vl.')
  ]);
}
