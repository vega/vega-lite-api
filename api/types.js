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

export function transform(def, ...args) {
  return {
    def: def,
    arg: args
  };
}

export function aggregateOp(op, ...args) {
  return {
    def: 'AggregatedFieldDef',
    set: {op: op},
    arg: args,
    ext: {order: {arg: ['order']}} // to aid sorting
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
    switch: {
      aggregate:     'aggregate',
      join:          'joinaggregate',
      joinaggregate: 'joinaggregate',
      window:        'window'
    }
  };
}

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
      if: {arg: [':::condition'], flag: 0},
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

const extSpec = {
  transform: {arg: ['...transform']},
  selection: null,
  select:    {arg: [':::selection'], flag: 1}
};

const extUnit = {
  encode:   {arg: [':::encoding'], flag: 1},
  encoding: null,
  ...extSpec
};

export function mark(type) {
  let set = type ? {mark: {type: type}} : null;

  return {
    def: 'TopLevelUnitSpec',
    set: set,
    arg: [':::mark'],
    ext: extUnit
  };
}

export function data() {
  return {
    def: 'TopLevelUnitSpec',
    arg: ['data'],
    ext: extUnit,
    switch: {
      mark:    'mark',
      layer:   'layer',
      hconcat: 'hconcat',
      vconcat: 'vconcat',
      facet:   'facet',
      repeat:  'repeat'
    }
  };
}

export function unit(def, ...args) {
  return {
    def: def,
    arg: args,
    ext: extUnit
  };
}

export function spec(def, ...args) {
  return {
    def: def,
    arg: args,
    ext: extSpec
  };
}
