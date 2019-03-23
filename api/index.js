import {generateAPI} from './generate/api';
import {schema} from './vega-lite-schema';
import {api} from './api';

export function build() {
  generateAPI(schema, api);
}
