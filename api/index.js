import {generateAPI} from './generateAPI';
import {schema} from './schema';
import {api} from './API';

export function build() {
  generateAPI(schema, api);
}
