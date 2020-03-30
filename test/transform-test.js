const tape = require('tape'),
      vl = require('../');

function equalSpec(t, api, spec) {
  t.equal(JSON.stringify(api.toJSON()), JSON.stringify(spec));
}

tape('Lookup transform is supported', function(t) {
  const data = vl.data('foo.csv');

  const tran1 = vl.lookup('id').from(data).as('bar');
  const spec1 = {
    lookup: 'id',
    from: {data: {url: 'foo.csv'}},
    as: 'bar'
  };
  equalSpec(t, tran1, spec1);

  const tran2a = vl.lookup('id').from(data).as(['bar', 'baz']);
  const tran2b = vl.lookup('id').from(data).as('bar', 'baz');
  const spec2 = {
    lookup: 'id',
    from: {data: {url: 'foo.csv'}},
    as: ['bar', 'baz']
  };
  equalSpec(t, tran2a, spec2);
  equalSpec(t, tran2b, spec2);

  t.end();
});
