const rollup = require('rollup'),
      json = require('@rollup/plugin-json'),
      generate = 'build/generate-api.js',
      output = 'build/vega-lite-api.js';

(async function compile() {
  try {
    await api(generate);
    await require('./' + generate).build();
    await src(output);
  } catch (error) {
    console.error(error.stack); // eslint-disable-line no-console
  }
})();

function api(output) {
  return rollup.rollup({
    input: 'api/index.js',
    external: ['fs', 'vega-lite/build/vega-lite-schema'],
    plugins: [json()]
  }).then(function(bundle) {
    return bundle.write({
      file: output,
      format: 'cjs',
      globals: {fs: 'fs'}
    });
  }).then(function() {
    console.warn('↳ ' + output); // eslint-disable-line no-console
  });
}

function src(output) {
  return rollup.rollup({
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
