import {enums, resolve} from './generate/schema';
import {capitalize} from './generate/util';
import {schema} from './vega-lite-schema';
import {aggregateOps, timeUnitOps, windowOps} from './ops';
import {
  transform, aggregateOp, timeUnitOp, windowOp,
  groupby, channel, mark, data, spec
} from './types';

function apiOps(ops, method, ...params) {
  return Object.keys(ops)
    .reduce((api, o) => (api[o] = method(...ops[o], ...params), api), {});
}

function channels() {
  return Object.keys(resolve(schema, {$ref: '#/definitions/FacetedEncoding'}))
    .reduce((api, c) => (api[c] = channel(c), api), {});
}

function marks() {
  return enums(schema, {$ref: '#/definitions/AnyMark'})
    .reduce((api, m) => (api[`mark${capitalize(m)}`] = mark(m), api), {});
}

export const api = {
  // top-level specifications
  chart:   spec('TopLevelUnitSpec', 'data'),
  layer:   spec('TopLevelLayerSpec', '...layer'),
  hconcat: spec('TopLevelHConcatSpec', '...hconcat'),
  vconcat: spec('TopLevelVConcatSpec', '...vconcat'),
  repeat:  spec('TopLevelRepeatSpec', 'repeat', 'spec'),
  facet:   spec('TopLevelFacetSpec', 'facet', 'spec'),

  // top-level entry points
  data: data(),
  mark: mark(),
  ...marks(),

  // encoding channels
  ...channels(),

  // tranforms
  aggregate:     transform('AggregateTransform', '...aggregate'),
  bin:           transform('BinTransform', 'field', ['bin', true]),
  calculate:     transform('CalculateTransform', 'calculate'),
  filter:        transform('FilterTransform', 'filter'),
  flatten:       transform('FlattenTransform', '...flatten'),
  fold:          transform('FoldTransform', '...fold'),
  impute:        transform('ImputeTransform', 'impute', 'key'),
  join:          transform('JoinAggregateTransform', '...joinaggregate'),
  joinaggregate: transform('JoinAggregateTransform', '...joinaggregate'),
  sample:        transform('SampleTransform', 'sample'),
  stack:         transform('StackTransform', 'stack'),
  timeUnit:      transform('TimeUnitTransform', 'timeUnit', 'field'),
  window:        transform('WindowTransform', '...window'),
  groupby:       groupby(),

  // operations
  ...apiOps(aggregateOps, aggregateOp, 'as'),
  ...apiOps(windowOps, windowOp, 'as'),
  ...apiOps(timeUnitOps, timeUnitOp, 'field', 'as')
};
