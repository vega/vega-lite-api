vl.<b>tsv</b>(<em>...values</em>)

Define a data source for <code>tsv</code> format data.

The behavior of this method depends on the argument type:

- If the argument is an <code>array</code>, sets the <code>values</code> property.
- If the argument is an <code>object</code>, sets the <code>values</code> property.
- If the argument is a <code>string</code>, sets the <code>url</code> property.
- Otherwise, sets the properties defined on the input argument(s), if provided.

## <code>tsv</code> Method Overview

* <a href="#name">name</a>
* <a href="#parse">parse</a>
* <a href="#type">type</a>
* <a href="#url">url</a>
* <a href="#values">values</a>

## <code>tsv</code> API Reference

<a id="name" href="#name">#</a>
<em>tsv</em>.<b>name</b>(<em>name</em>)

A name for this data source. Use this name to update the data via the runtime API.

<a id="parse" href="#parse">#</a>
<em>tsv</em>.<b>parse</b>(<em>value</em>)

If set to `null`, disable type inference based on the spec and only use type inference based on the data.
Alternatively, a parsing directive object can be provided for explicit data types. Each property of the object corresponds to a field name, and the value to the desired data type (one of `"number"`, `"boolean"`, `"date"`, or null (do not parse the field)).
For example, `"parse": {"modified_on": "date"}` parses the `modified_on` field in each input record a Date value.

For `"date"`, we parse data based using Javascript's [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse).
For Specific date formats can be provided (e.g., `{foo: "date:'%m%d%Y'"}`), using the [d3-time-format syntax](https://github.com/d3/d3-time-format#locale_format). UTC date format parsing is supported similarly (e.g., `{foo: "utc:'%m%d%Y'"}`). See more about [UTC time](https://vega.github.io/vega-lite/docs/timeunit.html#utc)

<a id="type" href="#type">#</a>
<em>tsv</em>.<b>type</b>(<em>value</em>)

Type of input data: `"json"`, `"csv"`, `"tsv"`, `"dsv"`.

__Default value:__  The default format type is determined by the extension of the file URL.
If no extension is detected, `"json"` will be used by default.

<a id="url" href="#url">#</a>
<em>tsv</em>.<b>url</b>(<em>url</em>)

A URL from which to load the data.

<a id="values" href="#values">#</a>
<em>tsv</em>.<b>values</b>(<em>values</em>)

Provide loaded data values directly.

