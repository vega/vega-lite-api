vl.<b>inlineData</b>(<em>values</em>)

Define a inline data source.

## <code>inlineData</code> Method Overview

* <a href="#format">format</a>
* <a href="#name">name</a>
* <a href="#values">values</a>

## <code>inlineData</code> API Reference

<a id="format" href="#format">#</a>
<em>inlineData</em>.<b>format</b>(<em>value</em>)

An object that specifies the format for parsing the data.

<a id="name" href="#name">#</a>
<em>inlineData</em>.<b>name</b>(<em>value</em>)

Provide a placeholder name and bind data at runtime.

<a id="values" href="#values">#</a>
<em>inlineData</em>.<b>values</b>(<em>value</em>)

The full data set, included inline. This can be an array of objects or primitive values, an object, or a string.
Arrays of primitive values are ingested as objects with a `data` property. Strings are parsed according to the specified format type.

