import {enums, props, types} from './generate/schema';
import {capitalize} from './generate/util';
import schema from './schema.json';
import {aggregateOps, timeUnitOps, windowOps} from './ops';
import {
  transform, groupby, aggregateOp, timeUnitOp, windowOp, field,
  not, logical, repeat, selection, binding, projection,
  encoding, channel, mark, data, layer, spec
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
  data:     data(),
  layer:    layer('...layer'),
  hconcat:  spec('Horizontally concatenate', 'TopLevelHConcatSpec', '...hconcat'),
  vconcat:  spec('Vertically concatenate', 'TopLevelVConcatSpec', '...vconcat'),
  _repeat:  spec('Repeat', 'TopLevelRepeatSpec', 'repeat', 'spec'),
  _facet:   spec('Facet', 'TopLevelFacetSpec', 'facet', 'spec'),
  mark:     mark(),
  ...marks(),

  // externally defined exports
  $register: {
    desc: 'Register Vega and Vega-Lite with the API.',
    doc:  'Utilities',
    arg:  ['vega', 'vegalite', 'options'],
    src:  '__view__'
  },

  // encoding channels
  ...channels(),
  field:    field(),
  repeat:   repeat(),
  encoding: encoding(),

  // cartographic projection
  projection: projection(),

  // selections
  ...selections(),

  // bindings
  checkbox:  binding('BindCheckbox', 'checkbox'),
  radio:     binding('BindRadioSelect', 'radio', ['...options']),
  range:     binding('BindRange', 'range', ['min', 'max', 'step']),
  select:    binding('BindRadioSelect', 'select', ['...options']),

  // logical operations
  not: not(),
  and: logical('and'),
  or:  logical('or'),

  // tranforms
  aggregate:     transform('aggregate', 'AggregateTransform', '...aggregate'),
  bin:           transform('bin', 'BinTransform', 'field', ['bin', true]),
  calculate:     transform('calculate', 'CalculateTransform', 'calculate'),
  filter:        transform('filter', 'FilterTransform', 'filter'),
  flatten:       transform('flatten', 'FlattenTransform', '...flatten'),
  fold:          transform('fold', 'FoldTransform', '...fold'),
  impute:        transform('impute', 'ImputeTransform', 'impute', 'key'),
  joinaggregate: transform('joinaggregate', 'JoinAggregateTransform', '...joinaggregate'),
  join:          transform('join', 'JoinAggregateTransform', '...joinaggregate'),
  sample:        transform('sample', 'SampleTransform', 'sample'),
  stack:         transform('stack', 'StackTransform', 'stack'),
  timeUnit:      transform('timeUnit', 'TimeUnitTransform', 'timeUnit', 'field'),
  window:        transform('window', 'WindowTransform', '...window'),
  groupby:       groupby(),

  // operations
  ...apiOps(aggregateOps, aggregateOp, 'as'),
  ...apiOps(windowOps, windowOp, 'as'),
  ...apiOps(timeUnitOps, timeUnitOp, 'field', 'as')
};
