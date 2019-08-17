# sum

vl.<b>sum</b>(<em>field, as</em>)

A <code>sum</code> aggregate operation.

## <code>sum</code> Method Overview

* <em>sum</em>.<a href="#as">as</a>
* <em>sum</em>.<a href="#field">field</a>
* <em>sum</em>.<a href="#op">op</a>
* <em>sum</em>.<a href="#order">order</a>

## <code>sum</code> API Reference

<a name="as">#</a>
<em>sum</em>.<b>as</b>(<em>value</em>)

The output field names to use for each aggregated field.

<a name="field">#</a>
<em>sum</em>.<b>field</b>(<em>value</em>)

The data field for which to compute aggregate function. This is required for all aggregation operations except `"count"`.

<a name="op">#</a>
<em>sum</em>.<b>op</b>(<em>value</em>)

The aggregation operation to apply to the fields (e.g., sum, average or count).
See the [full list of supported aggregation operations](https://vega.github.io/vega-lite/docs/aggregate.html#ops)
for more information.

<a name="order">#</a>
<em>sum</em>.<b>order</b>(<em>order</em>)

Indicates the sort order. One of `"ascending"` or `"descending"`. Only applicable if the operation is being used as a sort parameter.

