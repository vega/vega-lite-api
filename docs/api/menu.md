vl.<b>menu</b>(<em>...options</em>)

Define a new HTML <code>select</code> input element binding.

## <code>menu</code> Method Overview

* <a href="#debounce">debounce</a>
* <a href="#element">element</a>
* <a href="#input">input</a>
* <a href="#labels">labels</a>
* <a href="#name">name</a>
* <a href="#options">options</a>

## <code>menu</code> API Reference

<a id="debounce" href="#debounce">#</a>
<em>menu</em>.<b>debounce</b>(<em>value</em>)

If defined, delays event handling until the specified milliseconds have elapsed since the last event was fired.

<a id="element" href="#element">#</a>
<em>menu</em>.<b>element</b>(<em>value</em>)

An optional CSS selector string indicating the parent element to which the input element should be added. By default, all input elements are added within the parent container of the Vega view.

<a id="input" href="#input">#</a>
<em>menu</em>.<b>input</b>(<em>value</em>)

The type of input element to use. The valid values are `"checkbox"`, `"radio"`, `"range"`, `"select"`, and any other legal [HTML form input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input).

<a id="labels" href="#labels">#</a>
<em>menu</em>.<b>labels</b>(<em>...value</em>)

An array of label strings to represent the `options` values. If unspecified, the `options` value will be coerced to a string and used as the label.

<a id="name" href="#name">#</a>
<em>menu</em>.<b>name</b>(<em>value</em>)

By default, the signal name is used to label input elements. This `name` property can be used instead to specify a custom label for the bound signal.

<a id="options" href="#options">#</a>
<em>menu</em>.<b>options</b>(<em>...value</em>)

An array of options to select from.

