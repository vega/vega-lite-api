vl.<b>param</b>(<em>name</em>)

Define or reference a variable parameter.

## <code>param</code> Method Overview

* <a href="#bind">bind</a>
* <a href="#empty">empty</a>
* <a href="#encoding">encoding</a>
* <a href="#expr">expr</a>
* <a href="#field">field</a>
* <a href="#key">key</a>
* <a href="#name">name</a>
* <a href="#select">select</a>
* <a href="#value">value</a>
* <a href="#views">views</a>

## <code>param</code> API Reference

<a id="bind" href="#bind">#</a>
<em>param</em>.<b>bind</b>(<em>value</em>)

Binds the parameter to an external input element such as a slider, selection list or radio button group.

<a id="empty" href="#empty">#</a>
<em>param</em>.<b>empty</b>(<em>...values</em>)

Returns a selection reference including an empty predicate selection. If `false`, empty predicate will not select all values.

<a id="encoding" href="#encoding">#</a>
<em>param</em>.<b>encoding</b>(<em>...values</em>)

Returns a selection reference including an encoding channel to extract selected values for, when a selection is projected over multiple fields or encodings.

<a id="expr" href="#expr">#</a>
<em>param</em>.<b>expr</b>(<em>value</em>)

An expression for the value of the parameter. This expression may include other parameters, in which case the parameter will automatically update in response to upstream parameter changes.

<a id="field" href="#field">#</a>
<em>param</em>.<b>field</b>(<em>...values</em>)

Returns a selection reference including a field name to extract selected values for, when a selection is projected over multiple fields or encodings.

<a id="key" href="#key">#</a>
<em>param</em>.<b>key</b>(<em>...values</em>)

Returns a selection reference including a key in data to lookup, when a selection is used within a lookup transform.

<a id="name" href="#name">#</a>
<em>param</em>.<b>name</b>(<em>value</em>)

A unique name for the variable parameter. Parameter names should be valid JavaScript identifiers: they should contain only alphanumeric characters (or "$", or "_") and may not start with a digit. Reserved keywords that may not be used as parameter names are "datum", "event", "item", and "parent".

<a id="select" href="#select">#</a>
<em>param</em>.<b>select</b>(<em>value</em>)

Determines the default event processing and data query for the selection. Vega-Lite currently supports two selection types:

- `"point"` -- to select multiple discrete data values; the first value is selected on `click` and additional values toggled on shift-click. - `"interval"` -- to select a continuous range of data values on `drag`.

<a id="value" href="#value">#</a>
<em>param</em>.<b>value</b>(<em>value</em>)

The [initial value](http://vega.github.io/vega-lite/docs/init.html) of the parameter.

__Default value:__ `undefined`

<a id="views" href="#views">#</a>
<em>param</em>.<b>views</b>(<em>...value</em>)

By default, top-level selections are applied to every view in the visualization. If this property is specified, selections will only be applied to views with the given names.

