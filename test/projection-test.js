const tape = require('tape'),
      vl = require('../');

function equalSpec(t, api, spec) {
  t.equal(JSON.stringify(api.toObject()), JSON.stringify(spec));
}

tape('Cartographic projections are supported', function(t) {
  equalSpec(t, vl.projection(), {});
  equalSpec(t, vl.projection('mercator'), {type: 'mercator'});
  equalSpec(t, vl.projection('mercator').scale(1000).translate(50, 50),
    {type: 'mercator', scale: 1000, translate: [50, 50]});
  equalSpec(t, vl.projection('mercator').rotate(10, 20, 30),
    {type: 'mercator', rotate: [10, 20, 30]});

  const mark = vl.markGeoshape().project(
    vl.projection('albersUsa')
  );
  const spec = {
    mark: {type: 'geoshape'},
    projection: {type: 'albersUsa'}
  };
  equalSpec(t, mark, spec);

  t.end();
});
