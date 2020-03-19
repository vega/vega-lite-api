const tape = require('tape'),
      vl = require('../');

function equalSpec(t, api, spec) {
  t.equal(JSON.stringify(api.toJSON()), JSON.stringify(spec));
}

tape('URL data sources are supported', function(t) {
  const mark1a = vl.markBar().data(
    vl.urlData('foo.csv')
  );
  const mark1b = vl.markBar().data('foo.csv');
  const spec1 = {
    mark: {type: 'bar'},
    data: { url: 'foo.csv' }
  };
  equalSpec(t, mark1a, spec1);
  equalSpec(t, mark1b, spec1);

  const mark2 = vl.markBar().data(
    vl.urlData('bar.json').name('baz').format({type: 'json'})
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
    vl.inlineData([1, 2, 3])
  );
  const mark1b = vl.markBar().data([1, 2, 3]);
  const spec1 = {
    mark: {type: 'bar'},
    data: {values: [1, 2, 3]}
  };
  equalSpec(t, mark1a, spec1);
  equalSpec(t, mark1b, spec1);

  const mark2 = vl.markBar().data(
    vl.inlineData([4, 5, 6]).name('zab').format({type: 'csv'})
  );
  const spec2 = {
    mark: {type: 'bar'},
    data: {values: [4, 5, 6], name: 'zab', format: {type: 'csv'} }
  };
  equalSpec(t, mark2, spec2);

  t.end();
});

tape('Format data sources are supported', function(t) {
  const types = ['json', 'csv', 'dsv', 'topojson', 'tsv'];

  types.forEach(f => {
    equalSpec(t, vl[f]('foo'), {url: 'foo', format: {type: f}});
    equalSpec(t, vl[f]([]), {values: [], format: {type: f}});
  });

  t.end();
});

tape('Lookup data sources are supported', function(t) {
  const data1 = vl.data('foo.csv').key('key');
  const spec1 = {
    data: {url: 'foo.csv'},
    key: 'key'
  };
  equalSpec(t, data1, spec1);

  const data2 = vl.data('foo.csv').fields('a', 'b');
  const spec2 = {
    data: {url: 'foo.csv'},
    fields: ['a', 'b']
  };
  equalSpec(t, data2, spec2);

  const data3a = vl.lookupData()
    .data({url: 'foo.csv'})
    .key('key')
    .fields('a', 'b');
  const data3b = vl.lookupData('foo.csv').key('key').fields('a', 'b');
  const spec3 = {
    data: {url: 'foo.csv'},
    key: 'key',
    fields: ['a', 'b']
  };
  equalSpec(t, data3a, spec3);
  equalSpec(t, data3b, spec3);

  t.end();
});
