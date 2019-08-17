# csvFormat

vl.<b>csvFormat</b>(<em>...values</em>)

Specify parsing of <code>csv</code> format data.

## <code>csvFormat</code> Method Overview

* <a href="#parse">parse</a>
* <a href="#type">type</a>

## <code>csvFormat</code> API Reference

<a id="parse" href="#parse">#</a>
<em>csvFormat</em>.<b>parse</b>(<em>value</em>)

If set to `null`, disable type inference based on the spec and only use type inference based on the data.
Alternatively, a parsing directive object can be provided for explicit data types. Each property of the object corresponds to a field name, and the value to the desired data type (one of `"number"`, `"boolean"`, `"date"`, or null (do not parse the field)).
For example, `"parse": {"modified_on": "date"}` parses the `modified_on` field in each input record a Date value.

For `"date"`, we parse data based using Javascript's [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse).
For Specific date formats can be provided (e.g., `{foo: "date:'%m%d%Y'"}`), using the [d3-time-format syntax](https://github.com/d3/d3-time-format#locale_format). UTC date format parsing is supported similarly (e.g., `{foo: "utc:'%m%d%Y'"}`). See more about [UTC time](https://vega.github.io/vega-lite/docs/timeunit.html#utc)

<a id="type" href="#type">#</a>
<em>csvFormat</em>.<b>type</b>(<em>value</em>)

Type of input data: `"json"`, `"csv"`, `"tsv"`, `"dsv"`.

__Default value:__  The default format type is determined by the extension of the file URL.
If no extension is detected, `"json"` will be used by default.

