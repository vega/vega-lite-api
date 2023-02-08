vl.<b>radio</b>(<em>...options</em>)

Define a new HTML <code>radio</code> input element binding.

## <code>radio</code> Method Overview

* <a href="#debounce">debounce</a>
* <a href="#element">element</a>
* <a href="#input">input</a>
* <a href="#labels">labels</a>
* <a href="#name">name</a>
* <a href="#options">options</a>

## <code>radio</code> API Reference

<a id="debounce" href="#debounce">#</a>
<em>radio</em>.<b>debounce</b>(<em>value</em>)

If defined, delays event handling until the specified milliseconds have elapsed since the last event was fired.

<a id="element" href="#element">#</a>
<em>radio</em>.<b>element</b>(<em>value</em>)

An optional CSS selector string indicating the parent element to which the input element should be added. By default, all input elements are added within the parent container of the Vega view.

<a id="input" href="#input">#</a>
<em>radio</em>.<b>input</b>(<em>value</em>)

<a id="labels" href="#labels">#</a>
<em>radio</em>.<b>labels</b>(<em>...value</em>)

An array of label strings to represent the `options` values. If unspecified, the `options` value will be coerced to a string and used as the label.

<a id="name" href="#name">#</a>
<em>radio</em>.<b>name</b>(<em>value</em>)

By default, the signal name is used to label input elements. This `name` property can be used instead to specify a custom label for the bound signal.

<a id="options" href="#options">#</a>
<em>radio</em>.<b>options</b>(<em>...value</em>)

An array of options to select from.

