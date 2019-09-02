const tape = require('tape'),
      vl = require('../');

function equalSpec(t, api, spec) {
  t.equal(JSON.stringify(api.toJSON()), JSON.stringify(spec));
}

tape('JSON data format is supported', function(t) {
  equalSpec(t, vl.jsonFormat(), {type: 'json'});
  equalSpec(t, vl.jsonFormat().property('p'), {type: 'json', property: 'p'});
  equalSpec(t, vl.jsonFormat().parse({date: 'date'}), {type: 'json', parse: {date: 'date'}});
  t.end();
});

tape('CSV data format is supported', function(t) {
  equalSpec(t, vl.csvFormat(), {type: 'csv'});
  equalSpec(t, vl.csvFormat().parse({date: 'date'}), {type: 'csv', parse: {date: 'date'}});
  t.end();
});

tape('TSV data format is supported', function(t) {
  equalSpec(t, vl.tsvFormat(), {type: 'tsv'});
  equalSpec(t, vl.tsvFormat().parse({date: 'date'}), {type: 'tsv', parse: {date: 'date'}});
  t.end();
});

tape('DSV data format is supported', function(t) {
  equalSpec(t, vl.dsvFormat(), {type: 'dsv'});
  equalSpec(t, vl.dsvFormat().delimiter('|'), {type: 'dsv', delimiter: '|'});
  equalSpec(t, vl.dsvFormat().parse({date: 'date'}), {type: 'dsv', parse: {date: 'date'}});
  t.end();
});

tape('TopoJSON data format is supported', function(t) {
  equalSpec(t, vl.topojsonFormat(), {type: 'topojson'});
  equalSpec(t, vl.topojsonFormat().feature('f'), {type: 'topojson', feature: 'f'});
  equalSpec(t, vl.topojsonFormat().mesh('m'), {type: 'topojson', mesh: 'm'});
  t.end();
});
