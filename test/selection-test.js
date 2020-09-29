const tape = require('tape'),
      vl = require('../');

function equalSpec(t, api, spec) {
  t.equal(JSON.stringify(api.toObject()), JSON.stringify(spec));
}

function markDef(selection) {
  return vl.markPoint().select(selection);
}

function markSpec(name) {
  return {
    mark: {type: 'point'},
    selection: {
      [name]: {type: name}
    }
  };
}

function refSpec(name, opt) {
  return {selection: name, ...opt};
}

function encSpec(test) {
  return {
    condition: {test, value: 1},
    value: 0
  };
}

function filtSpec(test) {
  return {filter: test};
}

tape('Selection types are supported', function(t) {
  const names = ['single', 'multi', 'interval'];
  const single = vl.selectSingle(names[0]);
  const multi = vl.selectMulti(names[1]);
  const interval = vl.selectInterval(names[2]);

  equalSpec(t, markDef(single), markSpec(names[0]));
  equalSpec(t, markDef(multi), markSpec(names[1]));
  equalSpec(t, markDef(interval), markSpec(names[2]));

  equalSpec(t, single, refSpec(names[0]));
  equalSpec(t, multi, refSpec(names[1]));
  equalSpec(t, interval, refSpec(names[2]));

  t.end();
});

tape('Composite selection references are supported', function(t) {
  const selA = vl.selectSingle('a');
  const selB = vl.selectSingle('b');
  const selC = vl.or(selA, selB);

  const testA = refSpec('a');
  const testB = refSpec('b');
  const testC = {or: [testA, testB]};

  const encA = vl.opacity().if(selA, vl.value(1)).value(0);
  const encB = vl.opacity().if(selB, vl.value(1)).value(0);
  const encC = vl.opacity().if(selC, vl.value(1)).value(0);
  equalSpec(t, encA, encSpec(testA));
  equalSpec(t, encB, encSpec(testB));
  equalSpec(t, encC, encSpec(testC));

  const filtA = vl.filter(selA);
  const filtB = vl.filter(selB);
  const filtC = vl.filter(selC);
  equalSpec(t, filtA, filtSpec(testA));
  equalSpec(t, filtB, filtSpec(testB));
  equalSpec(t, filtC, filtSpec(testC));

  t.end();
});

tape('Selections can produce references', function(t) {
  const names = ['single', 'multi', 'interval'];
  const single = vl.selectSingle(names[0]);
  const multi = vl.selectMulti(names[1]);
  const interval = vl.selectInterval(names[2]);

  const key = 'key';
  equalSpec(t, single.key(key), refSpec(names[0], {key}));
  equalSpec(t, multi.key(key), refSpec(names[1], {key}));
  equalSpec(t, interval.key(key), refSpec(names[2], {key}));

  const field = 'field';
  equalSpec(t, single.field(field), refSpec(names[0], {field}));
  equalSpec(t, multi.field(field), refSpec(names[1], {field}));
  equalSpec(t, interval.field(field), refSpec(names[2], {field}));

  const encoding = 'enc';
  equalSpec(t, single.encoding(encoding), refSpec(names[0], {encoding}));
  equalSpec(t, multi.encoding(encoding), refSpec(names[1], {encoding}));
  equalSpec(t, interval.encoding(encoding), refSpec(names[2], {encoding}));

  t.end();
});