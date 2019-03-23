import {aggregateOps, timeUnitOps} from './ops';

const N = 'nominal';
const O = 'ordinal';
const Q = 'quantitative';
const T = 'temporal';

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
    arg: args
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
    arg: args
  };
}

export function groupby() {
  return {
    def: '?',
    arg: ['...groupby'],
    switch: {
      aggregate:     'aggregate',
      join:          'joinaggregate',
      joinaggregate: 'joinaggregate',
      window:        'window'
    }
  };
}

const channelAggregate = {};
for (let key in aggregateOps) {
  const _ = aggregateOps[key];
  channelAggregate[key] = [_[1], {type: Q, aggregate: _[0]}];
}

const channelTimeUnit = {};
for (let key in timeUnitOps) {
  const _ = timeUnitOps[key];
  channelTimeUnit[key] = ['field', {type: T, timeUnit: _[0]}];
}

export function channel(type) {
  return {
    def: `FacetedEncoding/properties/${type}`,
    key: type,
    ext: {
      fieldN: ['field', {type: N}],
      fieldO: ['field', {type: O}],
      fieldQ: ['field', {type: Q}],
      fieldT: ['field', {type: T}],
      ...channelAggregate,
      ...channelTimeUnit
    }
  };
}

const specExt = {
  transform: ['...transform'],
  selection: null,
  select:    ['+++selection']
};

export function mark(type) {
  let set = type ? {mark: {type: type}} : null;

  return {
    def: 'TopLevelUnitSpec',
    set: set,
    arg: ['+++mark'],
    ext: {
      encode:   ['+++encoding'],
      encoding: null,
      ...specExt
    }
  };
}

export function data() {
  return {
    def: 'TopLevelSpec',
    arg: ['data'],
    ext: {
      layer:   ['...layer'],
      hconcat: ['...hconcat'],
      vconcat: ['...vconcat'],
      facet:   ['facet', 'spec'],
      repeat:  ['repeat', 'spec'],
      ...specExt
    }
  };
}

export function spec(def, ...args) {
  return {
    def: def,
    arg: args,
    ext: specExt
  };
}
