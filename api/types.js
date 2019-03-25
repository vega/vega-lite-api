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
      aggregate:     {to: 'aggregate'},
      join:          {to: 'joinaggregate'},
      joinaggregate: {to: 'joinaggregate'},
      window:        {to: 'window'}
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

export function binding(def, input, args) {
  const set = input ? {input: input} : null;

  return {
    def: def,
    set: set,
    arg: args
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

const extSpec = {
  transform:   {arg: ['...transform']},
  selection:   null,
  select:      {arg: [':::selection'], flag: 1}
};

const extUnit = {
  encode:   {arg: [':::encoding'], flag: 1},
  encoding: null,
  ...extSpec
};

const switchMulti = {
  facet:   {to: '_facet',  args: 1, self: 'spec'},
  repeat:  {to: '_repeat', args: 1, self: 'spec'}
}

export function mark(type) {
  const set = type ? {mark: {type: type}} : null;

  return {
    def: 'TopLevelUnitSpec',
    set: set,
    arg: [':::mark'],
    ext: extUnit,
    switch: switchMulti
  };
}

export function data() {
  return {
    def: 'TopLevelUnitSpec',
    arg: ['data'],
    ext: extUnit,
    switch: {
      mark:    {to: 'mark'},
      layer:   {to: 'layer'},
      hconcat: {to: 'hconcat'},
      vconcat: {to: 'vconcat'},
      ...switchMulti
    }
  };
}

export function unit(def, ...args) {
  return {
    def: 'TopLevelUnitSpec',
    arg: args,
    ext: extUnit,
    switch: switchMulti
  };
}

export function spec(def, ...args) {
  return {
    def: def,
    arg: args,
    ext: extSpec,
    switch: {
      facet:  def !== 'TopLevelLayerSpec'  ? undefined : switchMulti.facet,
      repeat: def === 'TopLevelRepeatSpec' ? undefined : switchMulti.repeat
    }
  };
}
