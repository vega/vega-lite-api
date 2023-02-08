vl.<b>param</b>(<em>name</em>)

Define or reference a variable parameter.

## <code>param</code> Method Overview

* <a href="#bind">bind</a>
* <a href="#expr">expr</a>
* <a href="#name">name</a>
* <a href="#value">value</a>

## <code>param</code> API Reference

<a id="bind" href="#bind">#</a>
<em>param</em>.<b>bind</b>(<em>bind</em>)

Input element bindings for this parameter.

__See:__ [`bind`](https://vega.github.io/vega-lite/docs/bind.html) documentation.

The behavior of this method depends on the argument type:

- If the argument is an <code>EventTarget</code>, sets the <code>bind.element</code> property.
- Otherwise, sets the <code>bind</code> property.

<a id="expr" href="#expr">#</a>
<em>param</em>.<b>expr</b>(<em>value</em>)

An expression for the value of the parameter. This expression may include other parameters, in which case the parameter will automatically update in response to upstream parameter changes.

<a id="name" href="#name">#</a>
<em>param</em>.<b>name</b>(<em>value</em>)

A unique name for the variable parameter. Parameter names should be valid JavaScript identifiers: they should contain only alphanumeric characters (or "$", or "_") and may not start with a digit. Reserved keywords that may not be used as parameter names are "datum", "event", "item", and "parent".

<a id="value" href="#value">#</a>
<em>param</em>.<b>value</b>(<em>value</em>)

The [initial value](http://vega.github.io/vega-lite/docs/value.html) of the parameter.

__Default value:__ `undefined`

