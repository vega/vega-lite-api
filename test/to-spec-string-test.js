var tape = require('tape'),
    vega = require('vega'),
    vegalite = require('vega-lite'),
    vl = require('../');

function equalSpec(t, api, spec) {
  t.equal(JSON.stringify(api.toSpec()), JSON.stringify(spec));
}

tape('Top-level specification types have a toSpec method', function(t) {
  t.ok(vl.mark().toSpec);
  t.ok(vl.layer().toSpec);
  t.ok(vl.hconcat().toSpec);
  t.ok(vl.vconcat().toSpec);
  t.ok(vl.mark().facet().toSpec);
  t.ok(vl.mark().repeat().toSpec);
  t.end();
});

tape('Top-level specification types generate Vega-Lite specs', async function(t) {
  vl.register(vega, vegalite);

  const mark = vl.markCircle();
  equalSpec(t, mark, {
    $schema: `https://vega.github.io/schema/vega-lite/v3.json`,
    mark: {type: 'circle'}
  });

  t.end();
});

tape('Top-level specification types have a toString method', function(t) {
  t.ok(vl.mark().toString);
  t.ok(vl.layer().toString);
  t.ok(vl.hconcat().toString);
  t.ok(vl.vconcat().toString);
  t.ok(vl.mark().facet().toString);
  t.ok(vl.mark().repeat().toString);
  t.end();
});

tape('Top-level specification types generate Vega-Lite spec strings', async function(t) {
  vl.register(vega, vegalite);

  const mark = vl.markCircle();
  t.equal(mark.toString(), JSON.stringify({
    $schema: `https://vega.github.io/schema/vega-lite/v3.json`,
    mark: {type: 'circle'}
  }));
  t.equal(mark.toString(2), JSON.stringify({
    $schema: `https://vega.github.io/schema/vega-lite/v3.json`,
    mark: {type: 'circle'}
  }, null, 2));

  t.end();
});