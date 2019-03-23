import {aggregateOps, timeUnitOps, windowOps} from './ops';

import {
  transform, aggregateOp, timeUnitOp, windowOp,
  groupby, channel, mark, data, spec
} from './types';

function apiOps(ops, method, ...params) {
  const api = {};
  for (let key in ops) {
    api[key] = method(...ops[key], ...params);
  }
  return api;
}

export const api = {
  // tranforms
  aggregate:       transform('AggregateTransform', '...aggregate'),
  bin:             transform('BinTransform', 'field', ['bin', true]),
  calculate:       transform('CalculateTransform', 'calculate'),
  filter:          transform('FilterTransform', 'filter'),
  flatten:         transform('FlattenTransform', '...flatten'),
  fold:            transform('FoldTransform', '...fold'),
  impute:          transform('ImputeTransform', 'impute', 'key'),
  join:            transform('JoinAggregateTransform', '...joinaggregate'),
  joinaggregate:   transform('JoinAggregateTransform', '...joinaggregate'),
  sample:          transform('SampleTransform', 'sample'),
  stack:           transform('StackTransform', 'stack'),
  timeUnit:        transform('TimeUnitTransform', 'timeUnit', 'field'),
  window:          transform('WindowTransform', '...window'),
  groupby:         groupby(),

  // operations
  ...apiOps(aggregateOps, aggregateOp, 'as'),
  ...apiOps(windowOps, windowOp, 'as'),
  ...apiOps(timeUnitOps, timeUnitOp, 'field', 'as'),

  // mark types
  mark:            mark(),
  markArea:        mark('area'),
  markBar:         mark('bar'),
  markLine:        mark('line'),
  markTrail:       mark('trail'),
  markPoint:       mark('point'),
  markText:        mark('text'),
  markTick:        mark('tick'),
  markRect:        mark('rect'),
  markRule:        mark('rule'),
  markCircle:      mark('circle'),
  markSquare:      mark('square'),
  markGeoshape:    mark('geoshape'),
  markBoxplot:     mark('boxplot'),
  markErrorbar:    mark('errorbar'),
  markErrorband:   mark('errorband'),

  // encoding channels
  color:           channel('color'),
  column:          channel('column'),
  detail:          channel('detail'),
  fill:            channel('fill'),
  fillOpacity:     channel('fillOpacity'),
  href:            channel('href'),
  key:             channel('key'),
  latitude:        channel('latitude'),
  latitude2:       channel('latitude2'),
  longitude:       channel('longitude'),
  longitude2:      channel('longitude2'),
  opacity:         channel('opacity'),
  order:           channel('order'),
  row:             channel('row'),
  shape:           channel('shape'),
  size:            channel('size'),
  stroke:          channel('stroke'),
  strokeOpacity:   channel('strokeOpacity'),
  strokeWidth:     channel('strokeWidth'),
  text:            channel('text'),
  tooltip:         channel('tooltip'),
  x:               channel('x'),
  x2:              channel('x2'),
  xError:          channel('xError'),
  xError2:         channel('xError2'),
  y:               channel('y'),
  y2:              channel('y2'),
  yError:          channel('yError'),
  yError2:         channel('yError2'),

  // top-level data
  data:            data(),

  // top-level specifications
  layer:           spec('TopLevelLayerSpec', '...layer'),
  hconcat:         spec('TopLevelHConcatSpec', '...hconcat'),
  vconcat:         spec('TopLevelVConcatSpec', '...vconcat'),
  facet:           spec('TopLevelFacetSpec', 'facet', 'spec'),
  repeat:          spec('TopLevelRepeatSpec', 'repeat', 'spec'),
  chart:           spec('TopLevelUnitSpec', 'data')
};
