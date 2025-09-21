import tape from 'tape';
import * as vl from '../src/index.js';

function equalSpec(t, api, spec) {
  t.equal(JSON.stringify(api.toObject()), JSON.stringify(spec));
}

tape('Reference types are supported', function(t) {
  equalSpec(t, vl.encoding('x'), { encoding: 'x' });
  equalSpec(t, vl.encoding('y'), { encoding: 'y' });

  equalSpec(t, vl.repeat('column'), { repeat: 'column' });
  equalSpec(t, vl.repeat('row'), { repeat: 'row' });

  equalSpec(t, vl.value('foo'), { value: 'foo' });

  equalSpec(t, vl.field('name'), { field: 'name' });
  equalSpec(t, vl.fieldN('name'), { field: 'name', type: 'nominal' });
  equalSpec(t, vl.fieldO('name'), { field: 'name', type: 'ordinal' });
  equalSpec(t, vl.fieldQ('name'), { field: 'name', type: 'quantitative' });
  equalSpec(t, vl.fieldT('name'), { field: 'name', type: 'temporal' });

  t.end();
});
