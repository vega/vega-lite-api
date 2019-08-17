# argmax

vl.<b>argmax</b>(<em>field, as</em>)

A <code>argmax</code> aggregate operation.

## <code>argmax</code> Method Overview

* <em>argmax</em>.<a href="#as">as</a>
* <em>argmax</em>.<a href="#field">field</a>
* <em>argmax</em>.<a href="#op">op</a>
* <em>argmax</em>.<a href="#order">order</a>

## <code>argmax</code> API Reference

<a name="as">#</a>
<em>argmax</em>.<b>as</b>(<em>value</em>)

The output field names to use for each aggregated field.

<a name="field">#</a>
<em>argmax</em>.<b>field</b>(<em>value</em>)

The data field for which to compute aggregate function. This is required for all aggregation operations except `"count"`.

<a name="op">#</a>
<em>argmax</em>.<b>op</b>(<em>value</em>)

The aggregation operation to apply to the fields (e.g., sum, average or count).
See the [full list of supported aggregation operations](https://vega.github.io/vega-lite/docs/aggregate.html#ops)
for more information.

<a name="order">#</a>
<em>argmax</em>.<b>order</b>(<em>order</em>)

Indicates the sort order. One of `"ascending"` or `"descending"`. Only applicable if the operation is being used as a sort parameter.

