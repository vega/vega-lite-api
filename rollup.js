import { rollup } from 'rollup';
import json from '@rollup/plugin-json';

const generate = 'build/generate-api.js';
const output = 'build/vega-lite-api.js';

(async function compile() {
  try {
    await api(generate);
    const generateModule = await import('./' + generate);
    await generateModule.build();
    await src(output);
  } catch (error) {
    console.error(error.stack); // eslint-disable-line no-console
  }
})();

function api(output) {
  return rollup({
    input: 'api/index.js',
    external: ['fs', 'vega-lite/vega-lite-schema.json'],
    plugins: [json()]
  }).then(function(bundle) {
    return bundle.write({
      file: output,
      format: 'es',
      globals: {fs: 'fs'}
    });
  }).then(function() {
    console.warn('↳ ' + output); // eslint-disable-line no-console
  });
}

function src(output) {
  return rollup({
    input: 'src/index.js'
  }).then(function(bundle) {
    return bundle.write({
      file: output,
      format: 'umd',
      name: 'vl'
    });
  }).then(function() {
    console.warn('↳ ' + output); // eslint-disable-line no-console
  });
}
