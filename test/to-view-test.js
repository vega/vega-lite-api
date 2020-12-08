const tape = require('tape');
const vega = require('vega');
const vegalite = require('vega-lite');
const vl = require('../');

tape('Top-level specification types have a toView method', function(t) {
  t.ok(vl.mark().toView);
  t.ok(vl.layer().toView);
  t.ok(vl.hconcat().toView);
  t.ok(vl.vconcat().toView);
  t.ok(vl.mark().facet().toView);
  t.ok(vl.mark().repeat().toView);
  t.end();
});

tape('API can register and generate Vega views', async function(t) {
  vl.register(vega, vegalite);
  t.equal(vl.vega, vega);
  t.equal(vl.vegalite, vegalite);

  const view = vl.markCircle().toView();
  t.ok(await view.runAsync());
  t.equal(view.stamp(), 1);

  t.end();
});
