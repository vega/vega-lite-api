import {aggregateOps, timeUnitOps} from './ops';
import {capitalize} from './generate/util';

const N = 'nominal';
const O = 'ordinal';
const Q = 'quantitative';
const T = 'temporal';

const extLogic = {
  equals:  {arg: ['equal'], desc: 'Logical equals (==) comparison.'},
  gte:     {arg: ['gte'], desc: 'Logical greater than or equal to (>=) comparison.'},
  gt:      {arg: ['gt'], desc: 'Logical greater than (>) comparison.'},
  lte:     {arg: ['lte'], desc: 'Logical less than or equal to (<=) comparison.'},
  lt:      {arg: ['lt'], desc: 'Logical less than (<) comparison.'},
  oneOf:   {arg: ['...oneOf'], desc: 'Logical set membership test.'},
  inRange: {arg: ['...range'], desc: 'Logical value in range test.'},
  valid:   {arg: ['valid'], desc: 'Logical valid value test.'}
};

// -- Transforms --

const desc = {
  aggregate: 'Group and summarize data as counts, sums, averages, etc.',
  bin: 'Discretize numeric values into uniform bins.',
  calculate: 'Calculate a new data field value.',
  filter: 'Remove data that does not match provided conditions.',
  flatten: 'Map array fields to new records, one per array entry.',
  fold: 'Collapse one or more data fields into two key, value fields.',
  impute: 'Fill in missing values with imputed values.',
  joinaggregate: 'Extend input data with aggregate values as new fields.',
  join: 'A convenient shorthand for joinaggregate.',
  lookup: 'Extend input data with values from another data source.',
  sample: 'Filter random records from the data limit its size.',
  stack: 'Compute running sums to stack groups of values.',
  timeUnit: 'Discretize date/time values into meaningful intervals.',
  window: 'Perform running calculations over sorted groups.',
  groupby: 'Group by fields for aggregate or window transforms.'
};

export function transform(name, def, ...args) {
  return {
    desc: desc[name],
    doc:  'Data Transformations',
    def:  def,
    arg:  args
  };
}

export function groupby() {
  return {
    desc: desc.groupby,
    doc:  'Data Transformations',
    arg:  ['...groupby'],
    pass: {
      aggregate:     {call: 'aggregate', desc: 'Specify and return an [[aggregate]] transform.'},
      join:          {call: 'joinaggregate', desc: 'Specify and return a [[joinaggregate]] transform.'},
      joinaggregate: {call: 'joinaggregate', desc: 'Specify and return a [[joinaggregate]] transform.'},
      window:        {call: 'window', desc: 'Specify and return a [[window]] transform.'}
    }
  };
}

// -- Transform Operators --

export function aggregateOp(op, ...args) {
  return {
    desc: `A <code>${op}</code> aggregate operation.`,
    doc:  'Aggregate Operations',
    def:  'AggregatedFieldDef',
    set:  {op: op},
    arg:  args,
    ext:  {
      order: { // for sorting
        arg: ['order'],
        desc: 'Indicates the sort order. One of `"ascending"` or `"descending"`. Only applicable if the operation is being used as a sort parameter.'
      }
    }
  };
}

export function windowOp(op, ...args) {
  return {
    desc: `A <code>${op}</code> window operation.`,
    doc:  'Window Operations',
    def:  'WindowFieldDef',
    set:  {op: op},
    arg:  args
  };
}

export function timeUnitOp(op, ...args) {
  return {
    desc: `A time unit operation for <code>${op}</code>.`,
    doc:  'TimeUnit Operations',
    def:  'TimeUnitTransform',
    set:  {timeUnit: op},
    arg:  args,
    ext:  extLogic
  };
}

// -- Logical Operations --

export function field() {
  return {
    desc: 'A reference to a data field.',
    doc:  'References',
    arg:  ['field'],
    ext:  {
      order: {
        arg: ['order'],
        desc: 'Indicates the sort order. One of `"ascending"` or `"descending"`. Only applicable if the field is being used as a sort parameter.'
      },
      type:  {
        arg: ['type'],
        desc: 'The data type of the field. One of `"nominal"`, `"ordinal"`, `"quantitative"`, or `"temporal"`.'
      },
      ...extLogic
    }
  }
}

export function fieldType(type) {
  return {
    desc: `A reference to a ${type} data field.`,
    doc:  'References',
    ctr:  {call: 'field'},
    set:  {type: type}
  }
}

export function not() {
  return {
    desc: 'Logical NOT operation.',
    doc:  'Logical Operations',
    arg:  ['not']
  };
}

export function logical(op) {
  return {
    desc: `Logical ${op.toUpperCase()} operation.`,
    doc:  'Logical Operations',
    arg:  [`...${op}`]
  };
}

// -- Selections --

export function selection(type) {
  return {
    desc: `Define a new <code>${type}</code> selection.`,
    doc:  'Selections',
    def:  `${capitalize(type)}Selection`,
    set:  {type: type},
    arg:  ['^_sel'],
    key: [
      {selection: '_sel'},
      '_sel'
    ]
  };
}

export function binding(def, input, args) {
  const set = input ? {input: input} : null;

  return {
    desc: `Define a new HTML <code>${input}</code> input element binding.`,
    doc:  'Selection Bindings',
    def:  def,
    set:  set,
    arg:  args
  };
}

// -- Encodings --

const channelAggregate = {};
for (let key in aggregateOps) {
  const _ = aggregateOps[key];
  channelAggregate[key] = {
    arg: [_[1]],
    set: {type: Q, aggregate: _[0]},
    desc: `Apply the <code>${_[0]}</code> aggregate operation prior to encoding.`
  };
}

const channelTimeUnit = {};
for (let key in timeUnitOps) {
  const _ = timeUnitOps[key];
  channelTimeUnit[key] = {
    arg: ['field'],
    set: {type: T, timeUnit: _[0]},
    desc: `Apply the <code>${_[0]}</code> timeUnit operation prior to encoding.`
  };
}

export function channel(type) {
  const spec = {
    desc: `Specify the <code>${type}</code> encoding channel.`,
    doc:  'Encodings',
    def:  `FacetedEncoding/properties/${type}`,
    key:  [null, type],
    ext:  {
      fieldN: {arg: ['field'], set: {type: N}, desc: 'Encode the field as a nominal data type.'},
      fieldO: {arg: ['field'], set: {type: O}, desc: 'Encode the field as an ordinal data type.'},
      fieldQ: {arg: ['field'], set: {type: Q}, desc: 'Encode the field as a quantitative data type.'},
      fieldT: {arg: ['field'], set: {type: T}, desc: 'Encode the field as a temporal data type.'},
      if: {arg: ['+++condition'], flag: 0, desc: 'Perform a conditional encoding. If the provided condition (first argument) evaluates to true, apply the provided encoding (second argument).'},
      ...channelAggregate,
      ...channelTimeUnit
    }
  };

  const fieldN = {key: 'field', set: {type: N}},
        fieldO = {key: 'field', set: {type: O}},
        fieldQ = {key: 'field', set: {type: Q}};

  switch (type) {
    case 'detail':
    case 'tooltip':
      spec.type = {
        array:  {map: {string: fieldN}},
        string: fieldN
      };
      break;
    case 'href':
    case 'key':
    case 'shape':
    case 'text':
      spec.type = {string: fieldN};
      break;
    case 'column':
    case 'facet':
    case 'order':
    case 'row':
      spec.type = {string: fieldO};
      break;
    case 'latitude':
    case 'longitude':
    case 'latitude2':
    case 'longitude2':
      spec.type = {string: fieldQ};
      break;
  }

  return spec;
}

export function encoding() {
  return {
    desc: 'A reference to an encoding channel.',
    doc:  'References',
    arg:  ['encoding'],
    ext: {
      order: {
        arg: ['encoding'],
        desc: 'Indicates a sort order for encoded values. One of `"ascending"` or `"descending"`.'
      }
    }
  };
}

export function value() {
  return {
    desc: 'A constant encoding value.',
    doc:  'References',
    arg:  ['value']
  };
}

export function repeat() {
  return {
    desc: 'A field variable reference for a repeated chart.',
    doc:  'References',
    def:  'RepeatRef',
    arg:  ['repeat']
  }
}

export function projection() {
  return {
    desc: 'Define a cartographic projection for longitude, latitude coordinates.',
    doc:  'Projections',
    def:  'Projection',
    arg:  ['type']
  }
}

// -- Data Specification --

export function data() {
  return {
    desc: 'Create a new data reference for a chart or lookup.',
    doc:  'Data',
    def:  'TopLevelUnitSpec',
    arg:  ['data'],
    type: typeData,
    ext:  extUnit,
    call: callSpec,
    pass: {
      fields:  {call: 'lookupData', prop: 'fields', desc: 'Fields to retrieve in a [[lookupData]] reference.'},
      key:     {call: 'lookupData', prop: 'key', desc: 'Key field to lookup in a [[lookupData]] reference.'},
      mark:    {call: 'mark', desc: 'Create a new [[mark]] that visualizes this data reference.'},
      layer:   {call: 'layer', desc: 'Create a [[layer]] chart that visualizes this data reference.'},
      hconcat: {call: 'hconcat', desc: 'Create a [[hconcat]] chart that visualizes this data reference.'},
      vconcat: {call: 'vconcat', desc: 'Create a [[vconcat]] chart that visualizes this data reference.'},
      ...passMulti
    }
  };
}

export function source(type, args) {
  return {
    desc: `Define a ${type} data source.`,
    doc:  'Data',
    def:  `${capitalize(type)}Data`,
    arg:  args
  };
}

const formatDefs = {
  tsv: 'csv',
  topojson: 'topo'
};

export function sourceFormat(type) {
  return {
    desc: `Define a data source for <code>${type}</code> format data.`,
    doc:  'Data',
    def:  `${capitalize(formatDefs[type] || type)}DataFormat`,
    type: {object: {key: 'values'}, ...typeData[0]},
    set:  {type: type},
    nest: {keys: ['url', 'values', 'name'], rest: 'format'},
    ext:  {
      url:    {arg: ['url'], desc: 'A URL from which to load the data.'},
      values: {arg: ['values'], desc: 'Provide loaded data values directly.'},
      name:   {arg: ['name'], desc: 'A name for this data source. Use this name to update the data via the runtime API.'}
    }
  };
}

export function lookupData() {
  return {
    desc: `Specify a lookup on a secondary data source.`,
    doc:  'Data',
    def:  `LookupData`,
    arg:  ['data'],
    type: typeData,
  };
}

export function format(type) {
  return {
    desc: `Specify parsing of <code>${type}</code> format data.`,
    doc:  'Data',
    def:  `${capitalize(formatDefs[type] || type)}DataFormat`,
    set:  {type: type}
  };
}

const generatorArgs = {
  sequence: ['start', 'stop', 'step']
};

export function generator(type) {
  return {
    desc: `Define a <code>${type}</code> data generator.`,
    doc:  'Data',
    def:  `${capitalize(type)}Params`,
    key:  type,
    arg:  generatorArgs[type]
  };
}

// -- Top-Level Specifications --

const typeData = [
  {
    array:  {key: 'values'},
    string: {key: 'url'}
  }
];

const extSpec = {
  data:        {arg: ['data'], type: typeData, desc: 'The input [[data]] specification.'},
  transform:   {arg: ['...transform'], desc: 'The data transformations to apply.'},
  $schema:     null // suppress!
};

const extLayer = {
  projection:  null,
  project:     {arg: ['projection'], desc: 'The cartographic [[projection]] to apply to geographical data.'},
  ...extSpec
};

const extUnit = {
  mark:        {arg: [':::mark'], type: [{string: {key: 'type'}}], desc: 'Set the mark type and default visual properties.'},
  encoding:    null,
  encode:      {arg: ['+::encoding'], flag: 1, desc: 'Specify visual encodings for the mark.'},
  selection:   null,
  select:      {arg: ['+::selection'], flag: 1, desc: 'Register interactive selections on the mark.'},
  ...extLayer
};

const passMulti = {
  facet:   {call: '_facet',  args: 1, self: 'spec', desc: 'Facet a chart into sub-plots by partitioning data values.'},
  repeat:  {call: '_repeat', args: 1, self: 'spec', desc: 'Repeat a chart template to generate multiple plots.'}
};

const callSpec = {
  render:   {call: 'render', from: '__view__', desc: 'Compile and render the Vega-Lite visualization and return the DOM element containing the Vega View.'},
  toView:   {call: 'toView', from: '__view__', desc: 'Compile the Vega-Lite specification and return the resulting Vega View object.'},
  toSpec:   {call: 'toSpec', from: '__view__', desc: 'Return the Vega-Lite specification as a JavaScript object.'},
  toString: {call: 'toString', from: '__view__', desc: 'Return the Vega-Lite specification as a JSON string.'}
};

export function unit(types) {
  const extMark = types.reduce((o, m) => {
    o[`mark${capitalize(m)}`] = {arg: [':::mark'], pre: [{type: m}]};
    return o;
  }, {});

  return {
    desc: `Create a new mark of unspecified type.`,
    doc:  'Chart Constructors',
    def:  'TopLevelUnitSpec',
    arg:  [':::mark'],
    type: [{string: {key: 'type'}}],
    ext:  {...extUnit, ...extMark},
    call: callSpec,
    pass: passMulti
  };
}

export function mark(type) {
  return {
    desc: `Create a new <code>${type}</code> mark.`,
    doc:  'Chart Constructors',
    ctr:  {call: 'mark', arg: {type: type}}
  };
}

export function layer(...args) {
  return {
    desc: 'Create a new layered chart.',
    doc:  'Chart Constructors',
    def:  'TopLevelLayerSpec',
    arg:  args,
    ext:  extLayer,
    call: callSpec,
    pass: passMulti
  };
}

export function spec(verb, def, ...args) {
  return {
    desc: `${verb} charts.`,
    doc:  'Chart Constructors',
    def:  def,
    arg:  args,
    ext:  extSpec,
    call: callSpec,
    pass: {
      repeat: def === 'TopLevelRepeatSpec' ? undefined : passMulti.repeat
    }
  };
}
