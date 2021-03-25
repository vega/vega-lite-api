var tape = require('tape'),
    vl = require('../../build/vega-lite-api');

tape('API output matches spec: weather-selection', function(t) {
  t.equal(JSON.stringify(api().toObject()), JSON.stringify(spec));
  t.end();
});

function api() {
  const brush = vl.selectInterval('sel1').encodings('x');
  const click = vl.selectPoint('sel2').encodings('color');

  const scale = {
    domain: ['sun', 'fog', 'drizzle', 'rain', 'snow'],
    range: ['#e7ba52', '#a7a7a7', '#aec7e8', '#1f77b4', '#9467bd']
  };

  const plot1 = vl.markPoint()
    .encode(
      vl.color().value('lightgray')
        .if(brush, vl.color().fieldN('weather').scale(scale).title('Weather')),
      vl.size().fieldQ('precipitation').scale({domain: [-1, 50]}).title('Precipitation'),
      vl.x().timeMD('date').axis({title: 'Date', format: '%b'}),
      vl.y().fieldQ('temp_max').scale({domain: [-5, 40]}).axis({title: 'Maximum Daily Temperature (C)'})
    )
    .width(600)
    .height(300)
    .params(brush)
    .transform(vl.filter(click));

  const plot2 = vl.markBar()
    .encode(
      vl.color().value('lightgray')
        .if(click, vl.color().fieldN('weather').scale(scale).title('Weather')),
      vl.x().count(),
      vl.y().fieldN('weather').title('Weather')
    )
    .width(600)
    .params(click)
    .transform(vl.filter(brush));

  return vl.data({url: 'data/seattle-weather.csv'}).vconcat(plot1, plot2);
}

var spec = {
  "vconcat": [
    {
      "mark": {"type": "point"},
      "encoding": {
        "color": {
          "value": "lightgray",
          "condition": {
            "test": {"param": "sel1"},
            "field": "weather",
            "type": "nominal",
            "scale": {
              "domain": ["sun", "fog", "drizzle", "rain", "snow"],
              "range": ["#e7ba52", "#a7a7a7", "#aec7e8", "#1f77b4", "#9467bd"]
            },
            "title": "Weather"
          }
        },
        "size": {
          "field": "precipitation",
          "type": "quantitative",
          "scale": {"domain": [-1, 50]},
          "title": "Precipitation"
        },
        "x": {
          "field": "date",
          "type": "temporal",
          "timeUnit": "monthdate",
          "axis": {"title": "Date", "format": "%b"}
        },
        "y": {
          "field": "temp_max",
          "type": "quantitative",
          "scale": {"domain": [-5, 40]},
          "axis": {"title": "Maximum Daily Temperature (C)"}
        }
      },
      "width": 600,
      "height": 300,
      "params": [
        {
          "name": "sel1",
          "select": {"type": "interval", "encodings": ["x"]}
        }
      ],
      "transform": [{"filter": {"param": "sel2"}}]
    },
    {
      "mark": {"type": "bar"},
      "encoding": {
        "color": {
          "value": "lightgray",
          "condition": {
            "test": {"param": "sel2"},
            "field": "weather",
            "type": "nominal",
            "scale": {
              "domain": ["sun", "fog", "drizzle", "rain", "snow"],
              "range": ["#e7ba52", "#a7a7a7", "#aec7e8", "#1f77b4", "#9467bd"]
            },
            "title": "Weather"
          }
        },
        "x": {"type": "quantitative", "aggregate": "count"},
        "y": {"field": "weather", "type": "nominal", "title": "Weather"}
      },
      "width": 600,
      "params": [
        {
          "name": "sel2",
          "select": {"type": "point", "encodings": ["color"]}
        }
      ],
      "transform": [{"filter": {"param": "sel1"}}]
    }
  ],
  "data": {
    "url": "data/seattle-weather.csv"
  }
};