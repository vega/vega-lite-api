var tape = require('tape'),
    vl = require('../../');

tape('API output matches spec: parallel-coordinates', function(t) {
  t.equal(JSON.stringify(api()), JSON.stringify(spec));
  t.end();
});

function api() {
  // interactive selection for origin airport
  // select nearest airport to mouse cursor
  const origin = vl.selectSingle('sel')
    .fields('origin')
    .on('mouseover').nearest(true);

  // base map of the United States
  const map = vl.markGeoshape({fill: '#ddd', stroke: '#fff', strokeWidth: 1})
    .data(vl.topojson('data/us-10m.json').feature('states'));

  // shared data reference for lookup transforms
  const foreign = vl.data('data/airports.csv').key('iata').fields('latitude', 'longitude');

  // add route lines from selected origin airport to destination airports
  const routes = vl.markRule({color: '#000', opacity: 0.35})
    .data('data/flights-airport.csv')
    .transform(
      vl.filter(origin.empty(false)), // filter to selected origin only
      vl.lookup('origin').from(foreign), // origin lat/lon
      vl.lookup('destination').from(foreign).as('lat2', 'lon2') // dest lat/lon
    )
    .encode(
      vl.latitude().fieldQ('latitude'),
      vl.longitude().fieldQ('longitude'),
      vl.latitude2().field('lat2'),
      vl.longitude2().field('lon2')
    );

  // size airports by number of outgoing routes
  // 1. aggregate flights-airport data set
  // 2. lookup location data from airports data set
  // 3. remove Puerto Rico (PR) and Virgin Islands (VI)
  const points = vl.markCircle()
    .data('data/flights-airport.csv')
    .transform(
      vl.groupby('origin').aggregate(vl.count().as('routes')),
      vl.lookup('origin').from(foreign.fields('state', 'latitude', 'longitude')),
      vl.filter('datum.state !== "PR" && datum.state !== "VI"')
    )
    .select(origin)
    .encode(
      vl.latitude().fieldQ('latitude'),
      vl.longitude().fieldQ('longitude'),
      vl.size().fieldQ('routes').scale({range: [0, 1000]}).legend(null),
      vl.order().fieldQ('routes').sort('descending') // place smaller circles on top
    );

  return vl.layer(map, routes, points)
    .project(vl.projection('albersUsa'))
    .width(900).height(500)
    .config({view: {stroke: null}})
    .toObject();
}

var spec = {
  "layer": [
    {
      "mark": {
        "type": "geoshape",
        "fill": "#ddd",
        "stroke": "#fff",
        "strokeWidth": 1
      },
      "data": {
        "url": "data/us-10m.json",
        "format": { "type": "topojson", "feature": "states" }
      }
    },
    {
      "mark": {
        "type": "rule",
        "color": "#000",
        "opacity": 0.35
      },
      "data": { "url":"data/flights-airport.csv" },
      "transform": [
        { "filter": { "param": "sel", "empty": false } },
        { "lookup": "origin",
          "from": {
            "data": {"url": "data/airports.csv"},
            "key": "iata",
            "fields": ["latitude", "longitude"]
          }
        },
        { "lookup": "destination",
          "from": {
            "data": {
              "url": "data/airports.csv" },
              "key": "iata",
              "fields": ["latitude", "longitude"]
            },
            "as": [ "lat2", "lon2" ]
          }
        ],
        "encoding": {
          "latitude": {"field":"latitude","type":"quantitative"},
          "longitude": {"field":"longitude","type":"quantitative"},
          "latitude2": {"field":"lat2"},
          "longitude2": {"field":"lon2"}
        }
      },
      {
        "mark": {"type":"circle"},
        "data": {"url":"data/flights-airport.csv"},
        "transform": [
          { "aggregate": [{"op":"count","as":"routes"}], "groupby": ["origin"] },
          { "lookup": "origin",
            "from": {
              "data": { "url": "data/airports.csv" },
              "key": "iata",
              "fields": [ "state", "latitude", "longitude" ]
            }
          },
          { "filter": "datum.state !== \"PR\" && datum.state !== \"VI\"" }
        ],
        "params": [
          {
            "name": "sel",
            "select": {
              "type": "point",
              "toggle": false,
              "fields": ["origin"],
              "on": "mouseover",
              "nearest": true
            }
          }
        ],
        "encoding": {
          "latitude":{"field":"latitude","type":"quantitative"},
          "longitude":{"field":"longitude","type":"quantitative"},
          "size":{"field":"routes","type":"quantitative","scale":{"range":[0,1000]},"legend":null},
          "order":{"field":"routes","type":"quantitative","sort":"descending"}}
        }
      ],
      "projection": {"type":"albersUsa"},
      "width":900,
      "height":500,
      "config": { "view": { "stroke": null } }
    };