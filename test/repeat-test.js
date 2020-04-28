const tape = require('tape'),
      vl = require('../');

function equalSpec(t, api, spec) {
  t.equal(JSON.stringify(api.toJSON()), JSON.stringify(spec));
}

tape('Repeating unit spec is supported', function(t) {
  const values = [{key: 'a'}, {key: 'b'}];

  // data provided within unit spec
  const repeat1 = vl.markLine().data(values).repeat({row: ['key']});
  const spec1 = {
    repeat: {row: ['key']},
    spec: {mark: {type: 'line'}, data: {values}}
  };
  equalSpec(t, repeat1, spec1);

  // data provided outside of unit spec
  const repeat2 = vl.markLine().repeat({row: ['key']}).data(values);
  const spec2 = {
    repeat: {row: ['key']},
    spec: {mark: {type: 'line'}},
    data: {values}
  };
  equalSpec(t, repeat2, spec2);

  t.end();
});

tape('Repeating faceted spec is supported', function(t) {
  const values = [{key: 'a'}, {key: 'b'}];

  // data provided to base mark
  const repeat1 = vl.data(values)
    .mark({type: 'line'})
    .encode(vl.x().fieldQ(vl.repeat('layer')))
    .facet(vl.fieldN('key'))
    .repeat({layer: ['layerA', 'layerB']});
  const spec1 = {
    repeat: {layer: ['layerA', 'layerB']},
    spec: {
      facet: {field: 'key', type: 'nominal'},
      spec: {
        mark: {type: 'line'},
        data: {values},
        encoding: {
          x: {field: {repeat: 'layer'}, type: 'quantitative'}
        }
      }
    }
  };
  equalSpec(t, repeat1, spec1);

  // data provided to faceted spec
  const repeat2 = vl.markLine()
    .encode(vl.x().fieldQ(vl.repeat('layer')))
    .facet(vl.fieldN('key'))
    .data(values)
    .repeat({ layer: ['layerA', 'layerB'] });
  const spec2 = {
    repeat: { layer: ['layerA', 'layerB'] },
    spec: {
      facet: {field: 'key', type: 'nominal'},
      spec: {
        mark: {type: 'line'},
        encoding: {
          x: {field: {repeat: 'layer'}, type: 'quantitative'}
        }
      },
      data: {values}
    }
  };
  equalSpec(t, repeat2, spec2);

  // data provided to repeated spec
  const repeat3 = vl.markLine()
    .encode(vl.x().fieldQ(vl.repeat('layer')))
    .facet(vl.fieldN('key'))
    .repeat({ layer: ['layerA', 'layerB'] })
    .data(values);
  const spec3 = {
    repeat: { layer: ['layerA', 'layerB'] },
    spec: {
      facet: {field: 'key', type: 'nominal'},
      spec: {
        mark: {type: 'line'},
        encoding: {
          x: {field: {repeat: 'layer'}, type: 'quantitative'}
        }
      }
    },
    data: {values}
  };
  equalSpec(t, repeat3, spec3);

  t.end();
});
