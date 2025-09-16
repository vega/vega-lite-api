import tape from 'tape';
import * as vl from '../src/index.js';

function equalSpec(t, api, spec) {
  t.equal(JSON.stringify(api.toObject()), JSON.stringify(spec));
}

tape('Layering unit specs is supported', function(t) {
  const values = [{key: 'a'}, {key: 'b'}];

  // data provided within unit spec
  const layer1 = vl.layer(
    vl.markLine().data(values),
    vl.markPoint().data(values)
  );
  const spec1 = {
    layer: [
      {mark: {type: 'line'}, data: {values}},
      {mark: {type: 'point'}, data: {values}}
    ]
  };
  equalSpec(t, layer1, spec1);

  // data provided outside of unit spec
  const layer2 = vl.layer(
    vl.markLine(),
    vl.markPoint()
  ).data(values);
  const spec2 = {
    layer: [
      {mark: {type: 'line'}},
      {mark: {type: 'point'}}
    ],
    data: {values}
  };
  equalSpec(t, layer2, spec2);

  t.end();
});

tape('Layer supports shared encodings', function(t) {
  const values = [{key: 'a'}, {key: 'b'}];

  // data provided within unit spec
  const layer = vl.data(values)
    .layer(
      vl.markLine(),
      vl.markPoint()
    ).encode(
      vl.x().fieldN('key'),
      vl.y().fieldO('key')
    );

  const spec = {
    layer: [
      {mark: {type: 'line'}},
      {mark: {type: 'point'}}
    ],
    data: {values},
    encoding: {
      x: {field: 'key', type: 'nominal'},
      y: {field: 'key', type: 'ordinal'}
    }
  };
  equalSpec(t, layer, spec);

  t.end();
});