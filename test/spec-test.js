const tape = require('tape'),
      vl = require('../');

function equalSpec(t, api, spec) {
  t.equal(JSON.stringify(api.toObject()), JSON.stringify(spec));
}

tape('Full spec is supported', function(t) {
  const spec = {
    mark: 'bar',
    data: { url: 'foo.csv' },
    encoding: {
      x: { field: 'x', type: 'quantitative' },
      y: { field: 'y', type: 'nominal' }
    }
  };

  equalSpec(t, vl.spec(spec), spec);

  t.end();
});