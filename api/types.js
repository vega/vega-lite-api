// const schema = {
//   $schema: 'https://vega.github.io/schema/vega-lite/v3.json'
// };

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

export function timeUnitOp(op) {
  return {
    def: 'TimeUnitTransform',
    set: {timeUnit: op},
    arg: ['field']
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

export function channel(type) {
  return {
    def: `FacetedEncoding/properties/${type}`,
    key: type
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
