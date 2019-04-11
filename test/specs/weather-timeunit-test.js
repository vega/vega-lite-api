var tape = require('tape'),
    vl = require('../../');

tape('API output matches spec: weather-timeunit', function(t) {
  t.equal(JSON.stringify(api()), JSON.stringify(spec));
  t.end();
});

function api() {
  return vl.markLine()
    .data({url: "data/seattle-weather.csv"})
    .transform(
      vl.month('date').as('month'))
    .encode(
      vl.x().fieldT('month').axis({format: '%b'}),
      vl.y().max('temp_max'))
    .toJSON()
}

var spec = {
  "mark": {"type": "line"},
  "data": {"url": "data/seattle-weather.csv"},
  "transform": [{
    "timeUnit": "month",
    "field": "date",
    "as": "month"
  }],
  "encoding": {
    "x": {
      "field": "month",
      "type": "temporal",
      "axis": {
        "format": "%b"
      }
    },
    "y": {
      "field": "temp_max",
      "type": "quantitative",
      "aggregate": "max"
    }
  }
};
