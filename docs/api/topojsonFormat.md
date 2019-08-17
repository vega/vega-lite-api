vl.<b>topojsonFormat</b>(<em>...values</em>)

Specify parsing of <code>topojson</code> format data.

## <code>topojsonFormat</code> Method Overview

* <a href="#feature">feature</a>
* <a href="#mesh">mesh</a>
* <a href="#parse">parse</a>
* <a href="#type">type</a>

## <code>topojsonFormat</code> API Reference

<a id="feature" href="#feature">#</a>
<em>topojsonFormat</em>.<b>feature</b>(<em>value</em>)

The name of the TopoJSON object set to convert to a GeoJSON feature collection.
For example, in a map of the world, there may be an object set named `"countries"`.
Using the feature property, we can extract this set and generate a GeoJSON feature object for each country.

<a id="mesh" href="#mesh">#</a>
<em>topojsonFormat</em>.<b>mesh</b>(<em>value</em>)

The name of the TopoJSON object set to convert to mesh.
Similar to the `feature` option, `mesh` extracts a named TopoJSON object set.
  Unlike the `feature` option, the corresponding geo data is returned as a single, unified mesh instance, not as individual GeoJSON features.
Extracting a mesh is useful for more efficiently drawing borders or other geographic elements that you do not need to associate with specific regions such as individual countries, states or counties.

<a id="parse" href="#parse">#</a>
<em>topojsonFormat</em>.<b>parse</b>(<em>value</em>)

If set to `null`, disable type inference based on the spec and only use type inference based on the data.
Alternatively, a parsing directive object can be provided for explicit data types. Each property of the object corresponds to a field name, and the value to the desired data type (one of `"number"`, `"boolean"`, `"date"`, or null (do not parse the field)).
For example, `"parse": {"modified_on": "date"}` parses the `modified_on` field in each input record a Date value.

For `"date"`, we parse data based using Javascript's [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse).
For Specific date formats can be provided (e.g., `{foo: "date:'%m%d%Y'"}`), using the [d3-time-format syntax](https://github.com/d3/d3-time-format#locale_format). UTC date format parsing is supported similarly (e.g., `{foo: "utc:'%m%d%Y'"}`). See more about [UTC time](https://vega.github.io/vega-lite/docs/timeunit.html#utc)

<a id="type" href="#type">#</a>
<em>topojsonFormat</em>.<b>type</b>(<em>value</em>)

Type of input data: `"json"`, `"csv"`, `"tsv"`, `"dsv"`.

__Default value:__  The default format type is determined by the extension of the file URL.
If no extension is detected, `"json"` will be used by default.

