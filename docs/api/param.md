vl.<b>param</b>(<em>name</em>)

Define or reference a variable parameter.

## <code>param</code> Method Overview

* <a href="#bind">bind</a>
* <a href="#expr">expr</a>
* <a href="#name">name</a>
* <a href="#value">value</a>

## <code>param</code> API Reference

<a id="bind" href="#bind">#</a>
<em>param</em>.<b>bind</b>(<em>value</em>)

Binds the parameter to an external input element such as a slider, selection list or radio button group.

<a id="expr" href="#expr">#</a>
<em>param</em>.<b>expr</b>(<em>value</em>)

An expression for the value of the parameter. This expression may include other parameters, in which case the parameter will automatically update in response to upstream parameter changes.

<a id="name" href="#name">#</a>
<em>param</em>.<b>name</b>(<em>value</em>)

A unique name for the variable parameter. Parameter names should be valid JavaScript identifiers: they should contain only alphanumeric characters (or "$", or "_") and may not start with a digit. Reserved keywords that may not be used as parameter names are "datum", "event", "item", and "parent".

<a id="value" href="#value">#</a>
<em>param</em>.<b>value</b>(<em>value</em>)

The [initial value](http://vega.github.io/vega-lite/docs/init.html) of the parameter.

__Default value:__ `undefined`

