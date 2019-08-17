vl.<b>median</b>(<em>field, as</em>)

A <code>median</code> aggregate operation.

## <code>median</code> Method Overview

* <a href="#as">as</a>
* <a href="#field">field</a>
* <a href="#op">op</a>
* <a href="#order">order</a>

## <code>median</code> API Reference

<a id="as" href="#as">#</a>
<em>median</em>.<b>as</b>(<em>value</em>)

The output field names to use for each aggregated field.

<a id="field" href="#field">#</a>
<em>median</em>.<b>field</b>(<em>value</em>)

The data field for which to compute aggregate function. This is required for all aggregation operations except `"count"`.

<a id="op" href="#op">#</a>
<em>median</em>.<b>op</b>(<em>value</em>)

The aggregation operation to apply to the fields (e.g., sum, average or count).
See the [full list of supported aggregation operations](https://vega.github.io/vega-lite/docs/aggregate.html#ops)
for more information.

<a id="order" href="#order">#</a>
<em>median</em>.<b>order</b>(<em>order</em>)

Indicates the sort order. One of `"ascending"` or `"descending"`. Only applicable if the operation is being used as a sort parameter.

