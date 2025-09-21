import tape from 'tape';
import * as vl from '../src/index.js';

function equalSpec(t, api, spec) {
  t.equal(JSON.stringify(api.toObject()), JSON.stringify(spec));
}

tape('Graticule generators are supported', function(t) {
  const mark1 = vl.markBar().data(
    vl.graticule()
  );
  const spec1 = {
    mark: {type: 'bar'},
    data: { graticule: {} }
  };
  equalSpec(t, mark1, spec1);

  const mark2 = vl.markBar().data(
    vl.graticule().step([30, 30])
  );
  const spec2 = {
    mark: {type: 'bar'},
    data: { graticule: {step: [30, 30]} }
  };
  equalSpec(t, mark2, spec2);

  t.end();
});

tape('Sphere generators are supported', function(t) {
  const mark = vl.markBar().data(vl.sphere());
  const spec = { mark: {type: 'bar'}, data: { sphere: {} } };
  equalSpec(t, mark, spec);

  t.end();
});

tape('Sequence generators are supported', function(t) {
  const mark1a = vl.markBar().data(
    vl.sequence().start(0).stop(10)
  );
  const mark1b = vl.markBar().data(
    vl.sequence(0, 10)
  );
  const spec1 = {
    mark: {type: 'bar'},
    data: { sequence: {start: 0, stop: 10} }
  };
  equalSpec(t, mark1a, spec1);
  equalSpec(t, mark1b, spec1);

  const mark2a = vl.markBar().data(
    vl.sequence().start(2).stop(5).step(0.5).as('seq')
  );
  const mark2b = vl.markBar().data(
    vl.sequence(2, 5, 0.5).as('seq')
  );
  const spec2 = {
    mark: {type: 'bar'},
    data: { sequence: {start: 2, stop: 5, step: 0.5, as: 'seq'} }
  };
  equalSpec(t, mark2a, spec2);
  equalSpec(t, mark2b, spec2);

  t.end();
});
