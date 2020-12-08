var tape = require('tape');
var vl = require('../../');

tape('API output matches spec: parallel-coordinates', function(t) {
  t.equal(JSON.stringify(api()), JSON.stringify(spec));
  t.end();
});

function api() {
  const axis = {
    domain: false,
    ticks: false,
    title: false,
    grid: true,
    gridColor: '#888',
    labelAngle: 0,
    labelPadding: 8,
    labelFontWeight: 'bold'
  };

  const lines = vl.markLine({
      strokeWidth: 1.5,
      opacity: 0.5 })
    .encode(
      vl.color().fieldN('species'),
      vl.detail().fieldN('index'),
      vl.x().fieldO('key').scale({type: 'point', padding: 0}).axis(axis),
      vl.y().fieldQ('fraction').axis(null));

  const labels = vl.markText({
      dx: -2,
      align: 'right',
      baseline: 'middle' })
    .transform(
      vl.groupby('key').aggregate(vl.min('value').as('min'), vl.max('value').as('max')),
      vl.fold('min', 'max').as('op', 'value'),
      vl.groupby('key').window(vl.percent_rank().as('fraction')))
    .encode(
      vl.x().fieldN('key'),
      vl.y().fieldQ('fraction').axis(null),
      vl.text().field('value'));

  const plot = vl.data({url: 'data/iris.json'})
    .width(500)
    .height(300)
    .transform(
      vl.window(vl.row_number().as('index')),
      vl.fold('petalLength', 'petalWidth', 'sepalLength', 'sepalWidth'),
      vl.groupby('key').join(vl.min('value').as('min'), vl.max('value').as('max')),
      vl.calculate('(datum.value - datum.min) / (datum.max - datum.min)').as('fraction'))
    .layer(
      lines,
      labels);

  return plot.toObject();
}

var spec = {
  "layer": [
    {
      "mark": {"type": "line", "strokeWidth": 1.5, "opacity": 0.5},
      "encoding": {
        "color": {"field": "species", "type": "nominal"},
        "detail": {"field": "index", "type": "nominal"},
        "x": {
          "field": "key",
          "type": "ordinal",
          "scale": {"type": "point", "padding": 0},
          "axis": {
            "domain": false,
            "ticks": false,
            "title": false,
            "grid": true,
            "gridColor": '#888',
            "labelAngle": 0,
            "labelPadding": 8,
            "labelFontWeight": 'bold'
          }
        },
        "y": {"field": "fraction", "type": "quantitative", "axis": null}
      }
    },
    {
      "mark": {
        "type": "text",
        "dx": -2, "align": "right", "baseline": "middle"
      },
      "transform": [
        {
          "aggregate": [
            {"op": "min", "field": "value", "as": "min"},
            {"op": "max", "field": "value", "as": "max"}
          ],
          "groupby": ["key"]
        },
        {
          "fold": ["min", "max"],
          "as": ["op", "value"]
        },
        {
          "window": [{"op": "percent_rank", "as": "fraction"}],
          "groupby": ["key"]
        }
      ],
      "encoding": {
        "x": {"field": "key", "type": "nominal"},
        "y": {"field": "fraction", "type": "quantitative", "axis": null},
        "text": {"field": "value"}
      }
    }
  ],
  "data": {"url": "data/iris.json"},
  "width": 500,
  "height": 300,
  "transform": [
    { "window": [{"op": "row_number", "as": "index"}] },
    { "fold": ["petalLength", "petalWidth", "sepalLength", "sepalWidth"] },
    {
      "joinaggregate": [
        {"op": "min", "field": "value", "as": "min"},
        {"op": "max", "field": "value", "as": "max"}
      ],
      "groupby": ["key"]
    },
    {
      "calculate": "(datum.value - datum.min) / (datum.max - datum.min)",
      "as": "fraction"
    }
  ]
};
