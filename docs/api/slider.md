vl.<b>slider</b>(<em>min, max, step</em>)

Define a new HTML <code>range</code> input element binding.

## <code>slider</code> Method Overview

* <a href="#debounce">debounce</a>
* <a href="#element">element</a>
* <a href="#input">input</a>
* <a href="#max">max</a>
* <a href="#min">min</a>
* <a href="#name">name</a>
* <a href="#step">step</a>

## <code>slider</code> API Reference

<a id="debounce" href="#debounce">#</a>
<em>slider</em>.<b>debounce</b>(<em>value</em>)

If defined, delays event handling until the specified milliseconds have elapsed since the last event was fired.

<a id="element" href="#element">#</a>
<em>slider</em>.<b>element</b>(<em>value</em>)

An optional CSS selector string indicating the parent element to which the input element should be added. By default, all input elements are added within the parent container of the Vega view.

<a id="input" href="#input">#</a>
<em>slider</em>.<b>input</b>(<em>value</em>)

The type of input element to use. The valid values are `"checkbox"`, `"radio"`, `"range"`, `"select"`, and any other legal [HTML form input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input).

<a id="max" href="#max">#</a>
<em>slider</em>.<b>max</b>(<em>value</em>)

Sets the maximum slider value. Defaults to the larger of the signal value and `100`.

<a id="min" href="#min">#</a>
<em>slider</em>.<b>min</b>(<em>value</em>)

Sets the minimum slider value. Defaults to the smaller of the signal value and `0`.

<a id="name" href="#name">#</a>
<em>slider</em>.<b>name</b>(<em>value</em>)

By default, the signal name is used to label input elements. This `name` property can be used instead to specify a custom label for the bound signal.

<a id="step" href="#step">#</a>
<em>slider</em>.<b>step</b>(<em>value</em>)

Sets the minimum slider increment. If undefined, the step size will be automatically determined based on the `min` and `max` values.

