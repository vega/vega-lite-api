import {enums, props, types} from './generate/schema';
import {capitalize, reduce} from './generate/util';
import schema from 'vega-lite/build/vega-lite-schema';
import {aggregateOps, timeUnitOps, windowOps} from './ops';
import {
  transform, groupby, aggregateOp, timeUnitOp, windowOp,
  field, fieldType, not, logical, repeat, value,
  selection, selref, binding, projection, encoding, channel,
  source, sourceFormat, generator, format, lookupData, data,
  unit, mark, layer, spec
} from './types';

const markTypes = enums(schema, {$ref: '#/definitions/AnyMark'});
const dataFormats = types(schema, {$ref: '#/definitions/DataFormat'});

function apiOps(ops, method, ...params) {
  return reduce(ops, v => method(...ops[v], ...params));
}

function formats() {
  return reduce(dataFormats, v => format(v), k => `${k}Format`);
}

function sources() {
  return reduce(dataFormats, v => sourceFormat(v));
}

function generators() {
  const types = props(schema, {$ref: '#/definitions/Generator'});
  const items = Object.keys(types).filter(t => t !== 'name');
  return reduce(items, v => generator(v));
}

function marks() {
  return reduce(markTypes, v => mark(v), k => `mark${capitalize(k)}`);
}

function channels() {
  const items = props(schema, {$ref: '#/definitions/FacetedEncoding'});
  return reduce(items, v => channel(v));
}

function selections() {
  const items = types(schema, {$ref: '#/definitions/SelectionDef'});
  return reduce(items, v => selection(v), k => `select${capitalize(k)}`);
}

export const api = {
  // top-level specifications
  mark:     unit(markTypes),
  ...marks(),
  layer:    layer('...layer'),
  concat:   spec('Concatenate', 'TopLevelNormalizedConcatSpec<GenericSpec>', '...concat'),
  hconcat:  spec('Horizontally concatenate', 'TopLevelNormalizedHConcatSpec<GenericSpec>', '...hconcat'),
  vconcat:  spec('Vertically concatenate', 'TopLevelNormalizedVConcatSpec<GenericSpec>', '...vconcat'),
  _repeat:  spec('Repeat', 'TopLevelRepeatSpec', 'repeat', 'spec'),
  _facet:   spec('Facet', 'TopLevelFacetSpec', 'facet', 'spec'),

  // externally defined exports
  $register: {
    desc: 'Register Vega and Vega-Lite with the API.',
    doc:  'Utilities',
    arg:  ['vega', 'vegalite', 'options'],
    src:  '__view__'
  },
  $vega: {
    desc: 'Access the registered Vega instance.',
    doc:  'Utilities',
    src:  '__view__',
    name: '_vega'
  },
  $vegalite: {
    desc: 'Access the registered Vega-Lite instance.',
    doc:  'Utilities',
    src:  '__view__',
    name: '_vegalite'
  },

  // data specification
  data: data(),
  urlData: source('url', ['url']),
  inlineData: source('inline', ['values'], true),
  ...generators(),
  ...sources(),
  ...formats(),
  lookupData: lookupData(),

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
  _selref: selref(),

  // bindings
  checkbox:  binding('BindCheckbox', 'checkbox'),
  menu:      binding('BindRadioSelect', 'select', ['...options']),
  radio:     binding('BindRadioSelect', 'radio', ['...options']),
  slider:    binding('BindRange', 'range', ['min', 'max', 'step']),

  // logical operations
  not: not(),
  and: logical('and'),
  or:  logical('or'),

  // transforms
  aggregate:     transform('aggregate', 'AggregateTransform', '...aggregate'),
  bin:           transform('bin', 'BinTransform', 'field', ['bin', true]),
  calculate:     transform('calculate', 'CalculateTransform', 'calculate'),
  density:       transform('density', 'DensityTransform', 'density'),
  filter:        transform('filter', 'FilterTransform', 'filter'),
  flatten:       transform('flatten', 'FlattenTransform', '...flatten'),
  fold:          transform('fold', 'FoldTransform', '...fold'),
  impute:        transform('impute', 'ImputeTransform', 'impute', 'key'),
  joinaggregate: transform('joinaggregate', 'JoinAggregateTransform', '...joinaggregate'),
  join:          transform('join', 'JoinAggregateTransform', '...joinaggregate'),
  loess:         transform('loess', 'LoessTransform', 'loess'),
  lookup:        transform('lookup', 'LookupTransform', 'lookup'),
  pivot:         transform('pivot', 'PivotTransform', 'pivot'),
  quantile:      transform('quantile', 'QuantileTransform', 'quantile'),
  regression:    transform('regression', 'RegressionTransform', 'regression'),
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
