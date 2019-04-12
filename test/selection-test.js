var tape = require('tape'),
    vl = require('../');

function equalSpec(t, api, spec) {
  t.equal(JSON.stringify(api.toJSON()), JSON.stringify(spec));
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

function refSpec(name) {
  return {selection: name};
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
