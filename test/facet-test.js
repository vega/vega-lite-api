import tape from 'tape';
import * as vl from '../src/index.js';

function equalSpec(t, api, spec) {
  t.equal(JSON.stringify(api.toObject()), JSON.stringify(spec));
}

tape('Faceting unit spec is supported', function(t) {
  const values = [{key: 'a'}, {key: 'b'}];

  // data provided within unit spec
  const facet1 = vl.markLine().data(values).facet(vl.fieldN('key'));
  const spec1 = {
    facet: {field: 'key', type: 'nominal'},
    spec: { mark: {type: 'line'}, data: {values} }
  };
  equalSpec(t, facet1, spec1);

  // data provided outside of unit spec
  const facet2 = vl.markLine().facet(vl.fieldN('key')).data(values);
  const spec2 = {
    facet: {field: 'key', type: 'nominal'},
    spec: { mark: {type: 'line'} },
    data: {values}
  };
  equalSpec(t, facet2, spec2);

  t.end();
});

tape('Faceting data spec is supported', function(t) {
  const values = [{key: 'a'}, {key: 'b'}];

  const facet = vl.data(values)
    .facet(vl.fieldN('key'))
    .spec(vl.markLine());

  const spec = {
    facet: {field: 'key', type: 'nominal'},
    data: {values},
    spec: { mark: {type: 'line'} }
  };

  equalSpec(t, facet, spec);

  t.end();
});

tape('Faceting layered spec is supported', function(t) {
  const values = [{key: 'a'}, {key: 'b'}];

  // data provided within composite spec
  const facet1 = vl.data(values)
    .layer(vl.markLine(), vl.markBar())
    .facet(vl.fieldN('key'));
  const spec1 = {
    facet: {field: 'key', type: 'nominal'},
    spec: {
      layer: [
        {mark: {type: 'line'}},
        {mark: {type: 'bar'}}
      ],
      data: {values},
    }
  };
  equalSpec(t, facet1, spec1);

  // data provided outside of composite spec
  const facet2 = vl.layer(vl.markLine(), vl.markBar())
    .facet(vl.fieldN('key'))
    .data(values);
  const spec2 = {
    facet: {field: 'key', type: 'nominal'},
    spec: {
      layer: [
        {mark: {type: 'line'}},
        {mark: {type: 'bar'}}
      ]
    },
    data: {values}
  };
  equalSpec(t, facet2, spec2);

  t.end();
});

tape('Faceting repeated spec is supported', function(t) {
  const values = [{key: 'a'}, {key: 'b'}];

  // data provided to base mark
  const facet1 = vl.data(values)
    .mark({type: 'line'})
    .encode(vl.x().fieldQ(vl.repeat('layer')))
    .repeat({layer: ['layerA', 'layerB']})
    .facet(vl.fieldN('key'));
  const spec1 = {
    facet: {field: 'key', type: 'nominal'},
    spec: {
      repeat: {layer: ['layerA', 'layerB']},
      spec: {
        mark: {type: 'line'},
        data: {values},
        encoding: {
          x: {field: {repeat: 'layer'}, type: 'quantitative'}
        }
      }
    }
  };
  equalSpec(t, facet1, spec1);

  // data provided to repeated spec
  const facet2 = vl.markLine()
    .encode(vl.x().fieldQ(vl.repeat('layer')))
    .repeat({ layer: ['layerA', 'layerB'] })
    .data(values)
    .facet(vl.fieldN('key'));
  const spec2 = {
    facet: {field: 'key', type: 'nominal'},
    spec: {
      repeat: { layer: ['layerA', 'layerB'] },
      spec: {
        mark: {type: 'line'},
        encoding: {
          x: {field: {repeat: 'layer'}, type: 'quantitative'}
        }
      },
      data: {values}
    }
  };
  equalSpec(t, facet2, spec2);

  // data provided to faceted spec
  const facet3 = vl.markLine()
    .encode(vl.x().fieldQ(vl.repeat('layer')))
    .repeat({ layer: ['layerA', 'layerB'] })
    .facet(vl.fieldN('key'))
    .data(values);
  const spec3 = {
    facet: {field: 'key', type: 'nominal'},
    spec: {
      repeat: { layer: ['layerA', 'layerB'] },
      spec: {
        mark: {type: 'line'},
        encoding: {
          x: {field: {repeat: 'layer'}, type: 'quantitative'}
        }
      }
    },
    data: {values}
  };
  equalSpec(t, facet3, spec3);

  t.end();
});