# Vega-Lite API <a href="https://vega.github.io/vega-lite/"><img align="right" src="https://github.com/vega/logos/blob/master/assets/VL_Color@64.png?raw=true" height="38" /></a>

[![Build Status](https://github.com/vega/vega-lite-api/workflows/Test/badge.svg)](https://github.com/vega/vega-lite-api/actions)

![Gallery Image](https://vega.github.io/vega-lite/static/teaser.png)

A JavaScript API for creating Vega-Lite JSON specifications. [Vega-Lite](https://vega.github.io/vega-lite/) is a high-level grammar for visual analysis that generates complete [Vega](https://vega.github.io/) specifications.

With the Vega-Lite API, you can write JavaScript code like this:

```js
vl.markBar().data('data/movies.json').encode(
  vl.x().fieldQ('IMDB_Rating').bin(true),
  vl.y().count()
)
```

To produce Vega-Lite JSON like this:

```json
{
  "mark": "bar",
  "data": {"url": "data/movies.json"},
  "encoding": {
    "x": {
      "bin": true,
      "field": "IMDB_Rating",
      "type": "quantitative"
    },
    "y": {
      "aggregate": "count",
      "type": "quantitative"
    }
  }
}
```

To get started with the Vega-Lite API, see these Observable notebooks:

- [Introduction to Vega-Lite](https://observablehq.com/@uwdata/introduction-to-vega-lite)
- [Vega-Lite API](https://observablehq.com/@vega/vega-lite-api)
- [Vega-Lite API Collection](https://observablehq.com/collection/@vega/vega-lite-api)

## Build Instructions

For a basic setup allowing you to build the API and run tests:

- Clone `https://github.com/vega/vega-lite-api`.
- Run `yarn` to install dependencies for all packages. If you don't have yarn installed, see https://yarnpkg.com/en/docs/install.
- Once installation is complete, run `yarn build` to build the API generator and generate API source code in the `src` directory. Run `yarn test` to additionally run the test suite.

## API Reference

See the [Vega-Lite JavaScript API Reference](https://vega.github.io/vega-lite-api/api).
