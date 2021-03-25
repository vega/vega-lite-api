const tape = require('tape'),
      vl = require('../build/vega-lite-api');

function equalSpec(t, api, spec) {
  t.equal(JSON.stringify(api.toObject()), JSON.stringify(spec));
}

tape('Parameters are supported', function(t) {
  const param = vl.param('foo').value(5);

  // Test parameter reference
  equalSpec(t, param, { param: 'foo' });

  // Test parameter definition in mark context
  equalSpec(t,
    vl.markBar().params(param),
    {
      mark: { type: 'bar' },
      params: [ { name: 'foo', value: 5 } ]
    }
  );

  // Test parameter definition in data context
  equalSpec(t,
    vl.data('data.csv').params(param),
    {
      data: { url: 'data.csv' },
      params: [ { name: 'foo', value: 5 } ]
    }
  );

  t.end();
});

tape('Selection parameters are supported', function(t) {
  const param = 'foo';
  const points = [
    { point: vl.selectPoint(param) },
    { point: vl.selectSingle(param), toggle: false }, // deprecated
    { point: vl.selectMulti(param) }  // deprecated
  ];
  const intervals = [ vl.selectInterval(param) ];

  points.forEach(({ point, toggle }) => {
    const select = { type: 'point', toggle };

    // Test point selection reference
    equalSpec(t, point, { param });

    // Test point selection definition in mark context
    equalSpec(t,
      vl.markBar().params(point),
      {
        mark: { type: 'bar' },
        params: [ { name: 'foo', select } ]
      }
    );

    // Test point selection definition in data context
    equalSpec(t,
      vl.data('data.csv').params(point),
      {
        data: { url: 'data.csv' },
        params: [ { name: 'foo', select } ]
      }
    );
  });

  intervals.forEach(interval => {
    // Test interval selection reference
    equalSpec(t, interval, { param });

    // Test interval selection definition in mark context
    equalSpec(t,
      vl.markBar().params(interval),
      {
        mark: { type: 'bar' },
        params: [ { name: 'foo', select: { type: 'interval' } } ]
      }
    );

    // Test interval selection definition in data context
    equalSpec(t,
      vl.data('data.csv').params(interval),
      {
        data: { url: 'data.csv' },
        params: [ { name: 'foo', select: { type: 'interval' } } ]
      }
    );
  });

  t.end();
});

tape('Selection references are supported', function(t) {
  const param = 'foo';
  const key = 'key';
  const field = 'field';
  const encoding = 'encoding';
  const empty = false;

  const params = [
    vl.selectInterval(param),
    vl.selectPoint(param),
    vl.selectSingle(param), // deprecated
    vl.selectMulti(param)   // deprecated
  ];

  // Test parameter references with key, field, encoding, or empty
  params.forEach(obj => {
    equalSpec(t, obj.key(key), { param, key });
    equalSpec(t, obj.field(field), { param, field });
    equalSpec(t, obj.encoding(encoding), { param, encoding });
    equalSpec(t, obj.empty(empty), { param, empty });
  });

  t.end();
});

tape('Composite parameter references are supported', function(t) {
  const enc = (test) => ({ condition: { test, value: 1 }, value: 0 });
  const cond = (sel) => vl.opacity().if(sel, vl.value(1)).value(0);
  const filt = (filter) => ({ filter });

  const selA = vl.selectPoint('a');
  const selB = vl.selectPoint('b');
  const selC = vl.or(selA, selB);

  const testA = { param: 'a' };
  const testB = { param: 'b' };
  const testC = { or: [testA, testB] };

  equalSpec(t, cond(selA), enc(testA));
  equalSpec(t, cond(selB), enc(testB));
  equalSpec(t, cond(selC), enc(testC));

  equalSpec(t, vl.filter(selA), filt(testA));
  equalSpec(t, vl.filter(selB), filt(testB));
  equalSpec(t, vl.filter(selC), filt(testC));

  t.end();
});

tape('Deprecated selection methods are supported', function(t) {
  equalSpec(t,
    vl.markBar().select(vl.selectSingle().init(5)),
    {
      mark: { type: 'bar' },
      params: [ {
        name: 'name1',
        value: 5,
        select: { type: 'point', toggle: false }
      } ]
    }
  );
  t.end();
});
