var tape = require('tape'),
    vl = require('../');

function equalSpec(t, api, spec) {
  t.equal(JSON.stringify(api.toJSON()), JSON.stringify(spec));
}

tape('JSON data format is supported', function(t) {
  equalSpec(t, vl.json(), {type: 'json'});
  equalSpec(t, vl.json().property('p'), {type: 'json', property: 'p'});
  equalSpec(t, vl.json().parse({date: 'date'}), {type: 'json', parse: {date: 'date'}});
  t.end();
});

tape('CSV data format is supported', function(t) {
  equalSpec(t, vl.csv(), {type: 'csv'});
  equalSpec(t, vl.csv().parse({date: 'date'}), {type: 'csv', parse: {date: 'date'}});
  t.end();
});

tape('TSV data format is supported', function(t) {
  equalSpec(t, vl.tsv(), {type: 'tsv'});
  equalSpec(t, vl.tsv().parse({date: 'date'}), {type: 'tsv', parse: {date: 'date'}});
  t.end();
});

tape('DSV data format is supported', function(t) {
  equalSpec(t, vl.dsv(), {type: 'dsv'});
  equalSpec(t, vl.dsv().delimiter('|'), {type: 'dsv', delimiter: '|'});
  equalSpec(t, vl.dsv().parse({date: 'date'}), {type: 'dsv', parse: {date: 'date'}});
  t.end();
});

tape('TopoJSON data format is supported', function(t) {
  equalSpec(t, vl.topojson(), {type: 'topojson'});
  equalSpec(t, vl.topojson().feature('f'), {type: 'topojson', feature: 'f'});
  equalSpec(t, vl.topojson().mesh('m'), {type: 'topojson', mesh: 'm'});
  t.end();
});
