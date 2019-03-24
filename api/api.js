import {enums, props, types} from './generate/schema';
import {capitalize} from './generate/util';
import {schema} from './vega-lite-schema';
import {aggregateOps, timeUnitOps, windowOps} from './ops';
import {
  transform, groupby, aggregateOp, timeUnitOp, windowOp,
  selection, sort, encoding, channel, mark, data, unit, spec
} from './types';

function apiOps(ops, method, ...params) {
  return Object.keys(ops)
    .reduce((api, o) => (api[o] = method(...ops[o], ...params), api), {});
}

function marks() {
  return enums(schema, {$ref: '#/definitions/AnyMark'})
    .reduce((api, m) => (api[`mark${capitalize(m)}`] = mark(m), api), {});
}

function channels() {
  return Object.keys(props(schema, {$ref: '#/definitions/FacetedEncoding'}))
    .reduce((api, c) => (api[c] = channel(c), api), {});
}

function selections() {
  return types(schema, {$ref: '#/definitions/SelectionDef'})
    .reduce((api, t) => (api[`select${capitalize(t)}`] = selection(t), api), {});
}

export const api = {
  // top-level specifications
  chart:   unit('TopLevelUnitSpec', 'data'),
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
  sort:     sort(),
  encoding: encoding(),

  // selections
  ...selections(),

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
