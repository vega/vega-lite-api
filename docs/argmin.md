# argmin

vl.<b>argmin</b>(<em>field, as</em>)

A <code>argmin</code> aggregate operation.

## <code>argmin</code> Method Overview

* <em>argmin</em>.<a href="#as">as</a>
* <em>argmin</em>.<a href="#field">field</a>
* <em>argmin</em>.<a href="#op">op</a>
* <em>argmin</em>.<a href="#order">order</a>

## <code>argmin</code> API Reference

<a name="as">#</a>
<em>argmin</em>.<b>as</b>(<em>value</em>)

The output field names to use for each aggregated field.

<a name="field">#</a>
<em>argmin</em>.<b>field</b>(<em>value</em>)

The data field for which to compute aggregate function. This is required for all aggregation operations except `"count"`.

<a name="op">#</a>
<em>argmin</em>.<b>op</b>(<em>value</em>)

The aggregation operation to apply to the fields (e.g., sum, average or count).
See the [full list of supported aggregation operations](https://vega.github.io/vega-lite/docs/aggregate.html#ops)
for more information.

<a name="order">#</a>
<em>argmin</em>.<b>order</b>(<em>order</em>)

Indicates the sort order. One of `"ascending"` or `"descending"`. Only applicable if the operation is being used as a sort parameter.

