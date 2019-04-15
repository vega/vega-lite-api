import {enums, props, types} from './generate/schema';
import {capitalize} from './generate/util';
import schema from './schema.json';
import {aggregateOps, timeUnitOps, windowOps} from './ops';
import {
  transform, groupby, aggregateOp, timeUnitOp, windowOp,
  field, fieldType, not, logical, repeat, value,
  selection, binding, projection, encoding, channel,
  source, generator, format, data, unit, mark, layer, spec
} from './types';

const markTypes = enums(schema, {$ref: '#/definitions/AnyMark'});

function apiOps(ops, method, ...params) {
  return Object.keys(ops)
    .reduce((api, o) => (api[o] = method(...ops[o], ...params), api), {});
}

function formats() {
  return types(schema, {$ref: '#/definitions/DataFormat'})
    .reduce((api, f) => (api[f] = format(f), api), {});
}

function generators() {
  const types = props(schema, {$ref: '#/definitions/Generator'});
  return Object.keys(types).filter(t => t !== 'name')
    .reduce((api, g) => (api[g] = generator(g), api), {});
}

function marks() {
  return markTypes
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
  mark:     unit(markTypes),
  ...marks(),
  data:     data(),
  layer:    layer('...layer'),
  hconcat:  spec('Horizontally concatenate', 'TopLevelHConcatSpec', '...hconcat'),
  vconcat:  spec('Vertically concatenate', 'TopLevelVConcatSpec', '...vconcat'),
  _repeat:  spec('Repeat', 'TopLevelRepeatSpec', 'repeat', 'spec'),
  _facet:   spec('Facet', 'TopLevelFacetSpec', 'facet', 'spec'),

  // externally defined exports
  $register: {
    desc: 'Register Vega and Vega-Lite with the API.',
    doc:  'Utilities',
    arg:  ['vega', 'vegalite', 'options'],
    src:  '__view__'
  },

  // data specification
  url: source('url', ['url']),
  values: source('inline', ['values']),
  ...generators(),
  ...formats(),

  // encoding channels
  ...channels(),
  field:    field(),
  fieldN:   fieldType('nominal'),
  fieldO:   fieldType('ordinal'),
  fieldQ:   fieldType('quantitative'),
  fieldT:   fieldType('temporal'),
  encoding: encoding(),
  repeat:   repeat(),
  value:    value(),

  // cartographic projection
  projection: projection(),

  // selections
  ...selections(),

  // bindings
  checkbox:  binding('BindCheckbox', 'checkbox'),
  menu:      binding('BindRadioSelect', 'select', ['...options']),
  radio:     binding('BindRadioSelect', 'radio', ['...options']),
  slider:    binding('BindRange', 'range', ['min', 'max', 'step']),

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
