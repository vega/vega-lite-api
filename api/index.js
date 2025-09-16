import {generateAPI} from './generate/api';
import {generateDoc} from './generate/doc';
import {readFileSync} from 'fs';
import {createRequire} from 'module';
import {api} from './api';

const require = createRequire(import.meta.url);
const schema = JSON.parse(readFileSync(require.resolve('vega-lite/vega-lite-schema.json'), 'utf8'));

export function build() {
  return Promise.all([
    generateAPI(schema, api, 'src'),
    generateDoc(schema, api, 'docs/api', 'vl.')
  ]);
}
