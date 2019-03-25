var tape = require('tape'),
    vega = require('vega'),
    vegalite = require('vega-lite'),
    vl = require('../');

tape('Top-level specification types have a render method', function(t) {
  t.ok(vl.mark().render);
  t.ok(vl.chart().render);
  t.ok(vl.layer().render);
  t.ok(vl.hconcat().render);
  t.ok(vl.vconcat().render);
  t.ok(vl.chart().facet().render);
  t.ok(vl.chart().repeat().render);
  t.end();
});

// mock document
const document = {
  createElement: () => {
    return {
      setAttribute: () => {},
      appendChild: () => {},
      childNodes: []
    };
  }
};

tape('API can render Vega views', async function(t) {
  vl.register(vega, vegalite, {renderer: 'none'});

  global.document = document;

  const div = await vl.markCircle().render();
  t.ok(div.value);
  t.equal(div.value.stamp(), 1);

  delete global.document;
  t.end();
});