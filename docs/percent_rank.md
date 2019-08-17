# percent_rank

vl.<b>percent_rank</b>(<em>as</em>)

A <code>percent_rank</code> window operation.

## <code>percent_rank</code> Method Overview

* <em>percent_rank</em>.<a href="#as">as</a>
* <em>percent_rank</em>.<a href="#field">field</a>
* <em>percent_rank</em>.<a href="#op">op</a>
* <em>percent_rank</em>.<a href="#param">param</a>

## <code>percent_rank</code> API Reference

<a name="as">#</a>
<em>percent_rank</em>.<b>as</b>(<em>value</em>)

The output name for the window operation.

<a name="field">#</a>
<em>percent_rank</em>.<b>field</b>(<em>value</em>)

The data field for which to compute the aggregate or window function. This can be omitted for window functions that do not operate over a field such as `count`, `rank`, `dense_rank`.

<a name="op">#</a>
<em>percent_rank</em>.<b>op</b>(<em>value</em>)

The window or aggregation operation to apply within a window (e.g.,`rank`, `lead`, `sum`, `average` or `count`). See the list of all supported operations [here](https://vega.github.io/vega-lite/docs/window.html#ops).

<a name="param">#</a>
<em>percent_rank</em>.<b>param</b>(<em>value</em>)

Parameter values for the window functions. Parameter values can be omitted for operations that do not accept a parameter.

See the list of all supported operations and their parameters [here](https://vega.github.io/vega-lite/docs/transforms/window.html).

