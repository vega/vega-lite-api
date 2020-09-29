const tape = require('tape'),
      vl = require('../');

function equalSpec(t, api, spec) {
  t.equal(JSON.stringify(api.toObject()), JSON.stringify(spec));
}

tape('URL data sources are supported', function(t) {
  const mark1a = vl.markBar().data(
    vl.urlData('foo.csv')
  );
  const mark1b = vl.markBar().data('foo.csv');
  const spec1 = {
    mark: {type: 'bar'},
    data: {url: 'foo.csv'}
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
  const values = [1, 2, 3];
  const mark1a = vl.markBar().data(
    vl.inlineData(values)
  );
  const mark1b = vl.markBar().data(values);
  const spec1 = {
    mark: {type: 'bar'},
    data: {values}
  };
  equalSpec(t, mark1a, spec1);
  equalSpec(t, mark1b, spec1);

  const mark2 = vl.markBar().data(
    vl.inlineData(values).name('zab').format({type: 'csv'})
  );
  const spec2 = {
    mark: {type: 'bar'},
    data: {values, name: 'zab', format: {type: 'csv'} }
  };
  equalSpec(t, mark2, spec2);

  // pass raw data values through
  t.equal(mark1a.toObject().data.values, values);
  t.equal(mark1b.toObject().data.values, values);
  t.equal(mark2.toObject().data.values, values);
  t.equal(vl.data(values).toObject().data.values, values);
  t.equal(vl.data([]).data(values).toObject().data.values, values);

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

  const values = [1, 2, 3];

  const data4 = vl.data(values).key('key');
  const spec4 = {
    data: {values},
    key: 'key'
  };
  equalSpec(t, data4, spec4);

  const data5 = vl.data(values).fields('a', 'b');
  const spec5 = {
    data: {values},
    fields: ['a', 'b']
  };
  equalSpec(t, data5, spec5);

  const data6a = vl.lookupData()
    .data(vl.inlineData(values))
    .key('key')
    .fields('a', 'b');
  const data6b = vl.lookupData(values).key('key').fields('a', 'b');
  const spec6 = {
    data: {values},
    key: 'key',
    fields: ['a', 'b']
  };
  equalSpec(t, data6a, spec6);
  equalSpec(t, data6b, spec6);

  // pass raw data values through
  t.equal(data4.toObject().data.values, values);
  t.equal(data5.toObject().data.values, values);
  t.equal(data6a.toObject().data.values, values);
  t.equal(data6b.toObject().data.values, values);

  t.end();
});
