import {generateAPI} from './generate/api';
import schema from './schema.json';
import {api} from './api';

export function build() {
  return generateAPI(schema, api, 'src');
}
