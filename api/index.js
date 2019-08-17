import {generateAPI} from './generate/api';
import {generateDoc} from './generate/doc';
import schema from 'vega-lite/build/vega-lite-schema';
import {api} from './api';

export function build() {
  return Promise.all([
    generateAPI(schema, api, 'src'),
    generateDoc(schema, api, 'docs/api', 'vl.')
  ]);
}
