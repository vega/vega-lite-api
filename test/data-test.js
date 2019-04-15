var tape = require('tape'),
    vl = require('../');

function equalSpec(t, api, spec) {
  t.equal(JSON.stringify(api.toJSON()), JSON.stringify(spec));
}

tape('URL data sources are supported', function(t) {
  const mark1a = vl.markBar().data(
    vl.url('foo.csv')
  );
  const mark1b = vl.markBar().data('foo.csv');
  const spec1 = {
    mark: {type: 'bar'},
    data: { url: 'foo.csv' }
  };
  equalSpec(t, mark1a, spec1);
  equalSpec(t, mark1b, spec1);

  const mark2 = vl.markBar().data(
    vl.url('bar.json').name('baz').format({type: 'json'})
  );
  const spec2 = {
    mark: {type: 'bar'},
    data: {url: 'bar.json', name: 'baz', format: {type: 'json'}}
  };
  equalSpec(t, mark2, spec2);

  t.end();
});

tape('Inline data sources are supported', function(t) {
  const mark1a = vl.markBar().data(
    vl.values([1, 2, 3])
  );
  const mark1b = vl.markBar().data([1, 2, 3]);
  const spec1 = {
    mark: {type: 'bar'},
    data: {values: [1, 2, 3]}
  };
  equalSpec(t, mark1a, spec1);
  equalSpec(t, mark1b, spec1);

  const mark2 = vl.markBar().data(
    vl.values([4, 5, 6]).name('zab').format({type: 'csv'})
  );
  const spec2 = {
    mark: {type: 'bar'},
    data: {values: [4, 5, 6], name: 'zab', format: {type: 'csv'} }
  };
  equalSpec(t, mark2, spec2);

  t.end();
});
