const tape = require('tape'),
      vl = require('../');

function equalSpec(t, api, spec) {
  t.equal(JSON.stringify(api.toJSON()), JSON.stringify(spec));
}

tape('Mark types can be defined by method, string, or object', function(t) {
  const spec = { mark: {type: 'bar'} };

  [
    vl.markBar(),
    vl.mark('bar'),
    vl.mark({type: 'bar'})
  ].forEach(mark => equalSpec(t, mark, spec));

  t.end();
});

tape('Mark constructors accept multiple arguments', function(t) {
  const spec = { mark: {type: 'bar', width: 5} };

  [
    vl.markBar({width: 5}),
    vl.mark('bar', {width: 5}),
    vl.mark({type: 'bar'}, {width: 5})
  ].forEach(mark => equalSpec(t, mark, spec));

  t.end();
});

tape('Marks can be converted by method, string, or object', function(t) {
  const spec = { mark: {type: 'bar'} };
  const base = vl.markCircle();

  [
    base.markBar(),
    base.mark('bar'),
    base.mark({type: 'bar'})
  ].forEach(mark => equalSpec(t, mark, spec));

  t.end();
});

tape('Mark converters accept multiple arguments', function(t) {
  const spec = { mark: {type: 'bar', width: 5} };
  const base = vl.markCircle();

  [
    base.markBar({width: 5}),
    base.mark('bar', {width: 5}),
    base.mark({type: 'bar'}, {width: 5})
  ].forEach(mark => equalSpec(t, mark, spec));

  t.end();
});
