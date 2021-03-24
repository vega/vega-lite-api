const tape = require('tape'),
      vl = require('../');

function equalSpec(t, api, spec) {
  t.equal(JSON.stringify(api.toObject()), JSON.stringify(spec));
}

tape('Encoding channels are supported', function(t) {
  const channels = [
    'x', 'y', 'x2', 'y2', 'row', 'column',
    'xError', 'xError2', 'yError', 'yError2',
    'angle', 'radius', 'radius2', 'theta', 'theta2',
    'color', 'opacity', 'fill', 'fillOpacity',
    'stroke', 'strokeDash', 'strokeOpacity', 'strokeWidth',
    'shape', 'size',
    'detail', 'href', 'tooltip',
    'latitude', 'latitude2', 'longitude', 'longitude2'
  ];

  channels.forEach(ch => {
    // test channel reference (not definition)
    equalSpec(t,
      vl[ch]().fieldN('foo'),
      { field: 'foo', type: 'nominal' }
    );

    // test channel definition
    equalSpec(t,
      vl.markBar().encode(vl[ch]().fieldN('foo')),
      {
        mark: { type: 'bar' },
        encoding: { [ch]: { field: 'foo', type: 'nominal' } }
      }
    );
  });

  t.end();
});

tape('Multi-field tooltip channel is supported', function(t) {
  const fields = [
    { field: 'totalMortality', format: '.2f', title: 'Total Martality' },
    { field: 'zoneName', title: 'Zone' },
    { field: 'crudeDeathRate', format: '.2%', title: 'Death Rate' },
    { field: 'morbidity', format: '.1f', title: 'Morbidity' }
  ];

  equalSpec(t,
    vl.markPoint().encode(vl.tooltip(fields)),
    {
      mark: { type: 'point' },
      encoding: { tooltip: fields }
    }
  );

  t.end();
});
