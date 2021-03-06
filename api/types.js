import {aggregateOps, timeUnitOps} from './ops';
import {article, capitalize, code, link, reduce, uppercase} from './generate/util';

const DEPRECATED = method =>
  'This method provides backwards compatiblity with earlier API versions; ' +
  'it is _deprecated_ and may be removed in future versions. ' +
  `Use ${code(method + '()')} instead.`;

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
  density: 'Estimate smoothed densities for numeric values.',
  filter: 'Remove data that does not match provided conditions.',
  flatten: 'Map array fields to new records, one per array entry.',
  fold: 'Collapse one or more data fields into two key, value fields.',
  impute: 'Fill in missing values with imputed values.',
  joinaggregate: 'Extend input data with aggregate values as new fields.',
  join: 'A convenient shorthand for joinaggregate.',
  loess: 'Fit a smoothed trend line using local regression.',
  lookup: 'Extend input data with values from another data source.',
  pivot: 'Pivot unique values to new aggregate fields.',
  quantile: 'Calculate sample quantile values for input data.',
  regression: 'Fit regression models to smooth and predict values.',
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
  const spec = name => ({
    call: name,
    desc: `Specify and return ${article(name)} ${link(name)} transform.`
  });

  const transforms = [
    'aggregate',
    'density',
    'join',
    'joinaggregate',
    'loess',
    'pivot',
    'quantile',
    'regression',
    'window'
  ];

  return {
    desc: desc.groupby,
    doc:  'Data Transformations',
    arg:  ['...groupby'],
    pass: reduce(transforms, v => spec(v))
  };
}

// -- Transform Operators --

export function aggregateOp(op, ...args) {
  return {
    desc: `Specify ${article(op)} ${code(op)} aggregate operation.`,
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
    desc: `A ${code(op)} window operation.`,
    doc:  'Window Operations',
    def:  'WindowFieldDef',
    set:  {op: op},
    arg:  args
  };
}

export function timeUnitOp(op, ...args) {
  return {
    desc: `A time unit operation for ${code(op)}.`,
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
    desc: `A reference to ${article(type)} ${type} data field.`,
    doc:  'References',
    ctr:  {call: 'field'},
    set:  {type: type}
  }
}

export function expr() {
  return {
    desc: 'An expression in the [Vega expression language](https://vega.github.io/vega/docs/expressions/).',
    doc:  'References',
    def:  'ExprRef',
    arg:  ['expr']
  };
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
    desc: `Logical ${uppercase(op)} operation.`,
    doc:  'Logical Operations',
    arg:  [`...${op}`]
  };
}

// -- Parameters --

export function binding(def, input, args) {
  const set = input ? {input: input} : null;

  return {
    desc: `Define a new HTML ${code(input)} input element binding.`,
    doc:  'Parameter Bindings',
    def:  def,
    set:  set,
    arg:  args
  };
}

const extParam = {
  bind: {
    arg: ['bind'],
    desc: 'Input element bindings for this parameter.\n\n__See:__ [`bind`](https://vega.github.io/vega-lite/docs/bind.html) documentation.',
    type: [{
      EventTarget: { key: 'element', raw: true }
    }]
  }
};

export function param() {
  return {
    desc: 'Define or reference a variable parameter.',
    doc:  'Parameters',
    def:  'VariableParameter',
    arg:  ['^name'],
    ext:  extParam,
    out: [
      { key: { param: 'name' } },
      null
    ]
  };
}

export function selection(type) {
  return {
    desc: `Define or reference a ${code(type)} selection parameter.`,
    doc:  'Parameters',
    def:  `${capitalize(type)}SelectionConfig`,
    arg:  ['^name'],
    set:  {type: type},
    out: [
      { key: { param: 'name' } },
      { nest: { keys: ['name', 'bind', 'value', 'views'], rest: 'select' } }
    ],
    ext:  {
      ...extParam,
      name:  {arg: ['name'], desc: 'A unique name for the selection parameter. Selection names should be valid JavaScript identifiers: they should contain only alphanumeric characters (or "$", or "_") and may not start with a digit. Reserved keywords that may not be used as parameter names are "datum", "event", "item", and "parent".'},
      value: {arg: ['value'], desc: 'Initialize the selection with a mapping between [projected channels or field names](https://vega.github.io/vega-lite/docs/project.html) and initial values.'},
      init:  {arg: ['value'], desc: `Initialize the selection with a mapping between [projected channels or field names](https://vega.github.io/vega-lite/docs/project.html) and initial values. ${DEPRECATED('values')}`},
      views: {arg: ['views'], desc: 'By default, top-level selections are applied to every view in the visualization. If this property is specified, selections will only be applied to views with the given names.'}
    },
    pass: {
      key: {
        call: '_selRef', init: 'name', prop: 'key',
        desc: 'Returns a selection reference including a key in data to lookup, when a selection is used within a lookup transform.'
      },
      field: {
        call: '_selRef', init: 'name', prop: 'field',
        desc: 'Returns a selection reference including a field name to extract selected values for, when a selection is projected over multiple fields or encodings.'
      },
      encoding:  {
        call: '_selRef', init: 'name', prop: 'encoding',
        desc: 'Returns a selection reference including an encoding channel to extract selected values for, when a selection is projected over multiple fields or encodings.'
      },
      empty:  {
        call: '_selRef', init: 'name', prop: 'empty',
        desc: 'Returns a selection reference including an empty predicate selection. If `false`, empty predicate will not select all values.'
      }
    }
  };
}

export function selectionConfig(type) {
  return {
    desc: `Configure ${code(type)} selections.`,
    doc:  'Parameters',
    def:  `${capitalize(type)}SelectionConfig`,
    set:  {type: type}
  };
}

export function selectionRef() {
  return {
    desc: 'Create a new selection reference.',
    doc:  'Parameters',
    arg:  ['param'],
    ext:  {
      key: {
        arg: ['key'],
        desc: 'Key in data to lookup, when a selection is used with a lookup transform.'
      },
      fields: {
        arg: ['...fields'],
        desc: 'Fields in data to lookup, when a selection is used with a lookup transform. If not specified, the entire object is queried.'
      },
      field: {
        arg: ['field'],
        desc: 'A field name to extract selected values for, when a parameter is projected over multiple fields or encodings.'
      },
      encoding:  {
        arg: ['encoding'],
        desc: 'An encoding channel to extract selected values for, when a parameter is projected over multiple fields or encodings.'
      },
      empty: {
        arg: ['empty'],
        desc: 'For selection parameters, the predicate of empty selections returns true by default. Override this behavior by setting this property `false`.'
      },
    }
  };
}

export function selectionDeprecated(values) {
  return {
    desc: `Define or reference a ${code('point')} selection parameter. ${DEPRECATED('selectPoint')}`,
    doc:  'Parameters',
    ctr:  { call: 'selectPoint' },
    set:  values
  };
}

// -- Encodings --

const channelAggregate = {};
for (const key in aggregateOps) {
  const _ = aggregateOps[key];
  channelAggregate[key] = {
    arg: [_[1]],
    set: {type: Q, aggregate: _[0]},
    desc: `Apply the ${code(_[0])} aggregate operation prior to encoding.`
  };
}

const channelTimeUnit = {};
for (const key in timeUnitOps) {
  const _ = timeUnitOps[key];
  channelTimeUnit[key] = {
    arg: ['field'],
    set: {type: T, timeUnit: _[0]},
    desc: `Apply the ${code(_[0])} timeUnit operation prior to encoding.`
  };
}

export function channel(type) {
  const spec = {
    desc: `Specify the ${code(type)} encoding channel.`,
    doc:  'Encodings',
    def:  `FacetedEncoding/properties/${type}`,
    out:  [null, { key: type }],
    ext:  {
      fieldN: {arg: ['field'], set: {type: N}, desc: 'Encode the field as a nominal data type.'},
      fieldO: {arg: ['field'], set: {type: O}, desc: 'Encode the field as an ordinal data type.'},
      fieldQ: {arg: ['field'], set: {type: Q}, desc: 'Encode the field as a quantitative data type.'},
      fieldT: {arg: ['field'], set: {type: T}, desc: 'Encode the field as a temporal data type.'},
      if: {arg: ['+++condition'], flag: 0, nest: ['test'], desc: 'Perform a conditional encoding. If the provided condition (first argument) evaluates to true, apply the provided encoding (second argument).'},
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
      fields:  {call: 'lookupData', prop: 'fields', desc: `Fields to retrieve in a ${link('lookupData')} reference.`},
      key:     {call: 'lookupData', prop: 'key', desc: `Key field to lookup in a ${link('lookupData')} reference.`},
      mark:    {call: 'mark', desc: `Create a new ${link('mark')} that visualizes this data reference.`},
      layer:   {call: 'layer', desc: `Create a ${link('layer')} chart that visualizes this data reference.`},
      hconcat: {call: 'hconcat', desc: `Create a ${link('hconcat')} chart that visualizes this data reference.`},
      vconcat: {call: 'vconcat', desc: `Create a ${link('vconcat')} chart that visualizes this data reference.`},
      facet:   {call: '_facet',  desc: 'Facet into sub-plots by partitioning data values.'},
      repeat:  {call: '_repeat', desc: 'Repeat a chart template to generate multiple plots.'}
    }
  };
}

export function source(type, args, raw) {
  return {
    desc: `Define a ${type} data source.`,
    doc:  'Data',
    def:  `${capitalize(type)}Data`,
    arg:  args,
    ...(raw ? {
      type: typeRaw,
      ext: {
        values: { arg: ['values'], type: typeRaw }
      }
    } : null)
  };
}

const formatDefs = {
  tsv: 'csv',
  topojson: 'topo'
};

export function sourceFormat(type) {
  return {
    desc: `Define a data source for ${code(type)} format data.`,
    doc:  'Data',
    def:  `${capitalize(formatDefs[type] || type)}DataFormat`,
    type: {Object: {key: 'values'}, ...typeData[0]},
    out:  {nest: {keys: ['url', 'values', 'name'], rest: 'format'}},
    set:  {type: type},
    ext:  {
      url:    {arg: ['url'], desc: 'A URL from which to load the data.'},
      values: {arg: ['values'], type: typeRaw, desc: 'Provide loaded data values directly.'},
      name:   {arg: ['name'], desc: 'A name for this data source. Use this name to update the data via the runtime API.'}
    }
  };
}

export function lookupData() {
  return {
    desc: 'Specify a lookup on a secondary data source.',
    doc:  'Data',
    def:  'LookupData',
    arg:  ['data'],
    type: typeData,
  };
}

export function lookupSelection() {
  return {
    desc: 'Specify a lookup on an interactive selection.',
    doc:  'Data',
    def:  'LookupSelection',
    arg:  ['param'],
    type: [
      {
        Object: {prop: 'name'},
        String: {}
      }
    ]
  };
}

export function format(type) {
  return {
    desc: `Specify parsing of ${code(type)} format data.`,
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
    desc: `Define a ${code(type)} data generator.`,
    doc:  'Data',
    def:  `${capitalize(type)}Params`,
    out:  {key: type},
    arg:  generatorArgs[type]
  };
}

// -- Top-Level Specifications --

const typeData = [
  {
    Array:    {key: 'values', raw: true},
    Iterable: {key: 'values', raw: true},
    String:   {key: 'url'}
  }
];

const typeRaw = [
  {
    Array:  {raw: true},
    Object: {raw: true}
  }
];

const extSpec = {
  data:        {arg: ['data'], type: typeData, desc: `The input ${link('data')} specification.`},
  params:      {arg: ['...params'], flag: 1, desc: 'An array of parameters that may be simple variables or more complex selections that map user input to data queries.'},
  transform:   {arg: ['...transform'], desc: 'The data transformations to apply.'},
  $schema:     null // suppress!
};

const extLayer = {
  projection:  null,
  project:     {arg: ['projection'], desc: `The cartographic ${link('projection')} to apply to geographical data.`},
  encoding:    null,
  encode:      {arg: ['+::encoding'], flag: 1, desc: 'Specify visual encodings for the mark.'},
  ...extSpec
};

const extUnit = {
  mark:   {arg: [':::mark'], type: [{String: {key: 'type'}}], desc: 'Set the mark type and default visual properties.'},
  select: {arg: ['...params'], flag: 1, desc: `An array of parameters that may be simple variables or more complex selections that map user input to data queries. ${DEPRECATED('params')}`},
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
  const extMark = reduce(types,
    type => ({
      desc: `Create a new ${code(type)} mark based on this mark.`,
      arg: [':::mark'],
      pre: [{type}]
    }),
    k => `mark${capitalize(k)}`
  );

  return {
    desc: `Create a new mark of unspecified type.`,
    doc:  'Chart Constructors',
    def:  'TopLevelUnitSpec',
    arg:  [':::mark'],
    type: [{String: {key: 'type'}}],
    ext:  {...extUnit, ...extMark},
    call: callSpec,
    pass: passMulti
  };
}

export function mark(type) {
  return {
    desc: `Create a new ${code(type)} mark.`,
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

export function spec(desc, def, ...args) {
  return {
    desc,
    doc:  'Chart Constructors',
    def:  def,
    arg:  args.length ? args : undefined,
    ext:  extSpec,
    call: callSpec,
    pass: {
      facet: def === 'TopLevelFacetSpec' ? undefined : passMulti.facet,
      repeat: def === 'TopLevelRepeatSpec' ? undefined : passMulti.repeat
    }
  };
}
