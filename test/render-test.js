import tape from 'tape';
import * as vega from 'vega';
import * as vegalite from 'vega-lite';
import * as vl from '../src/index.js';

tape('Top-level specification types have a render method', function(t) {
  t.ok(vl.mark().render);
  t.ok(vl.layer().render);
  t.ok(vl.hconcat().render);
  t.ok(vl.vconcat().render);
  t.ok(vl.mark().facet().render);
  t.ok(vl.mark().repeat().render);
  t.end();
});

// mock document
const document = {
  createElement: () => {
    return {
      setAttribute: () => {},
      appendChild: () => {},
      childNodes: [],
      style: {}
    };
  }
};

tape('API can render Vega views', async function(t) {
  vl.register(vega, vegalite, {view: {renderer: 'none'}});
  t.equal(vl.vega, vega);
  t.equal(vl.vegalite, vegalite);

  global.document = document;

  const div = await vl.markCircle().render();
  t.ok(div.value);
  t.equal(div.value.stamp(), 1);

  delete global.document;
  t.end();
});

tape('Render method can be externally invoked', async function(t) {
  vl.register(vega, vegalite, {view: {renderer: 'none'}});
  t.equal(vl.vega, vega);
  t.equal(vl.vegalite, vegalite);

  global.document = document;

  const div = await vl.render({
    spec: vl.markCircle().toSpec()
  });
  t.ok(div.value);
  t.equal(div.value.stamp(), 1);

  delete global.document;
  t.end();
});