import {aggregateOps, timeUnitOps} from './ops';
import {capitalize} from './generate/util';

const N = 'nominal';
const O = 'ordinal';
const Q = 'quantitative';
const T = 'temporal';

const extLogic = {
  equals:  {arg: ['equal']},
  gte:     {arg: ['gte']},
  gt:      {arg: ['gt']},
  lte:     {arg: ['lte']},
  lt:      {arg: ['lt']},
  oneOf:   {arg: ['...oneOf']},
  inRange: {arg: ['...range']},
  valid:   {arg: ['valid']}
};

// -- Transforms --

export function transform(def, ...args) {
  return {
    def: def,
    arg: args
  };
}

// -- Transform Operators --

export function aggregateOp(op, ...args) {
  return {
    def: 'AggregatedFieldDef',
    set: {op: op},
    arg: args,
    ext: {order: {arg: ['order']}} // call aid sorting
  };
}

export function windowOp(op, ...args) {
  return {
    def: 'WindowFieldDef',
    set: {op: op},
    arg: args
  };
}

export function timeUnitOp(op, ...args) {
  return {
    def: 'TimeUnitTransform',
    set: {timeUnit: op},
    arg: args,
    ext: extLogic
  };
}

export function groupby() {
  return {
    arg: ['...groupby'],
    pass: {
      aggregate:     {call: 'aggregate'},
      join:          {call: 'joinaggregate'},
      joinaggregate: {call: 'joinaggregate'},
      window:        {call: 'window'}
    }
  };
}

// -- Logical Operators --

export function field() {
  return {
    arg: ['field'],
    ext: extLogic
  }
}

export function not() {
  return {
    arg: ['not']
  };
}

export function logical(op) {
  return {
    arg: [`...${op}`]
  };
}

// -- Selections --

export function selection(type) {
  return {
    def: `${capitalize(type)}Selection`,
    set: {type: type},
    arg: ['^_sel'],
    key: [
      {selection: '_sel'},
      '_sel'
    ]
  };
}

export function binding(def, input, args) {
  const set = input ? {input: input} : null;

  return {
    def: def,
    set: set,
    arg: args
  };
}

// -- Encodings --

const channelAggregate = {};
for (let key in aggregateOps) {
  const _ = aggregateOps[key];
  channelAggregate[key] = {
    arg: [_[1]],
    set: {type: Q, aggregate: _[0]}
  };
}

const channelTimeUnit = {};
for (let key in timeUnitOps) {
  const _ = timeUnitOps[key];
  channelTimeUnit[key] = {
    arg: ['field'],
    set: {type: T, timeUnit: _[0]}
  };
}

export function channel(type) {
  return {
    def: `FacetedEncoding/properties/${type}`,
    key: [null, type],
    ext: {
      fieldN: {arg: ['field'], set: {type: N}},
      fieldO: {arg: ['field'], set: {type: O}},
      fieldQ: {arg: ['field'], set: {type: Q}},
      fieldT: {arg: ['field'], set: {type: T}},
      if: {arg: ['+++condition'], flag: 0},
      ...channelAggregate,
      ...channelTimeUnit
    }
  };
}

export function encoding() {
  return {
    arg: ['encoding']
  };
}

export function sort() {
  return {
    def: 'Sort'
  };
}

export function repeat() {
  return {
    def: 'RepeatRef',
    arg: ['repeat']
  }
}

export function projection() {
  return {
    def: 'Projection',
    arg: ['type']
  }
}

// -- Top-Level Specifications --

const extSpec = {
  transform:   {arg: ['...transform']}
};

const extLayer = {
  projection:  null,
  project:     {arg: ['projection']},
  ...extSpec
};

const extUnit = {
  encoding:    null,
  encode:      {arg: ['+::encoding'], flag: 1},
  selection:   null,
  select:      {arg: ['+::selection'], flag: 1},
  ...extLayer
};

const passMulti = {
  facet:   {call: '_facet',  args: 1, self: 'spec'},
  repeat:  {call: '_repeat', args: 1, self: 'spec'}
};

const callSpec = {
  'render': {call: 'render', from: '__view__'},
  'toView': {call: 'toView', from: '__view__'}
};

export function mark(type) {
  const set = type ? {mark: {type: type}} : null;

  return {
    def:  'TopLevelUnitSpec',
    set:  set,
    arg:  [':::mark'],
    ext:  extUnit,
    call: callSpec,
    pass: passMulti
  };
}

export function data() {
  return {
    def:  'TopLevelUnitSpec',
    arg:  ['data'],
    ext:  extUnit,
    call: callSpec,
    pass: {
      mark:    {call: 'mark'},
      layer:   {call: 'layer'},
      hconcat: {call: 'hconcat'},
      vconcat: {call: 'vconcat'},
      ...passMulti,
    }
  };
}

export function unit(...args) {
  return {
    def:  'TopLevelUnitSpec',
    arg:  args,
    ext:  extUnit,
    call: callSpec,
    pass: passMulti
  };
}

export function layer(...args) {
  return {
    def:  'TopLevelLayerSpec',
    arg:  args,
    ext:  extLayer,
    call: callSpec,
    pass: passMulti
  };
}

export function spec(def, ...args) {
  return {
    def:  def,
    arg:  args,
    ext:  extSpec,
    call: callSpec,
    pass: {
      repeat: def === 'TopLevelRepeatSpec' ? undefined : passMulti.repeat
    }
  };
}
