var tape = require('tape'),
    vl = require('../../');

tape('API output matches spec: query-widgets', function(t) {
  t.equal(JSON.stringify(api()), JSON.stringify(spec));
  t.end();
});

function api() {
  const cylYear = vl.selectSingle('CylYr')
    .fields('Cylinders', 'Year')
    .init({Cylinders: 4, Year: 1977})
    .bind({
      Cylinders: vl.slider().min(3).max(8).step(1),
      Year: vl.slider().min(1969).max(1981).step(1)
    });

  return vl.data({url: 'data/cars.json'})
    .transform(
      vl.calculate('year(datum.Year)').as('Year')
    )
    .layer(
      vl.markCircle()
        .select(cylYear)
        .encode(
          vl.x().fieldQ('Horsepower'),
          vl.y().fieldQ('Miles_per_Gallon'),
          vl.color().value('grey').if(cylYear, vl.color().fieldN('Origin'))
        ),
      vl.markCircle()
        .transform(vl.filter(cylYear))
        .encode(
          vl.x().fieldQ('Horsepower'),
          vl.y().fieldQ('Miles_per_Gallon'),
          vl.color().fieldN('Origin'),
          vl.size().value(100)
        )
    )
    .toJSON()
}

var spec = {
  "layer": [
    {
      "mark": {"type": "circle"},
      "selection": {
        "CylYr": {
          "type": "single", "fields": ["Cylinders", "Year"],
          "init": {"Cylinders": 4, "Year": 1977},
          "bind": {
            "Cylinders": {"input": "range", "min": 3, "max": 8, "step": 1},
            "Year": {"input": "range", "min": 1969, "max": 1981, "step": 1}
          }
        }
      },
      "encoding": {
        "x": {"field": "Horsepower", "type": "quantitative"},
        "y": {"field": "Miles_per_Gallon", "type": "quantitative"},
        "color": {
          "value": "grey",
          "condition": {"test": {"selection": "CylYr"}, "field": "Origin", "type": "nominal"}
        }
      }
    },
    {
      "mark": {"type": "circle"},
      "transform": [{"filter": {"selection": "CylYr"}}],
      "encoding": {
        "x": {"field": "Horsepower", "type": "quantitative"},
        "y": {"field": "Miles_per_Gallon", "type": "quantitative"},
        "color": {"field": "Origin", "type": "nominal"},
        "size": {"value": 100}
      }
    }
  ],
  "data": {"url": "data/cars.json"},
  "transform": [{"calculate": "year(datum.Year)", "as": "Year"}],
};