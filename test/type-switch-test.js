const tape = require('tape');
const vl = require('../');

tape('Type check switches map arrays', function(t) {
  const objects = vl.tooltip([
    vl.tooltip().fieldN('country'),
    vl.tooltip().fieldN('fertility'),
    vl.tooltip().fieldN('life_expect')
  ]);

  const strings = vl.tooltip([
    'country',
    'fertility',
    'life_expect'
  ]);

  const spec = [
    {field: 'country', type: 'nominal'},
    {field: 'fertility', type: 'nominal'},
    {field: 'life_expect', type: 'nominal'}
  ];

  t.equal(JSON.stringify(objects.toObject()), JSON.stringify(spec));
  t.equal(JSON.stringify(strings.toObject()), JSON.stringify(spec));
  t.end();
});
