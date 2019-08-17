# missing

vl.<b>missing</b>(<em>field, as</em>)

A <code>missing</code> aggregate operation.

## <code>missing</code> Method Overview

* <em>missing</em>.<a href="#as">as</a>
* <em>missing</em>.<a href="#field">field</a>
* <em>missing</em>.<a href="#op">op</a>
* <em>missing</em>.<a href="#order">order</a>

## <code>missing</code> API Reference

<a name="as">#</a>
<em>missing</em>.<b>as</b>(<em>value</em>)

The output field names to use for each aggregated field.

<a name="field">#</a>
<em>missing</em>.<b>field</b>(<em>value</em>)

The data field for which to compute aggregate function. This is required for all aggregation operations except `"count"`.

<a name="op">#</a>
<em>missing</em>.<b>op</b>(<em>value</em>)

The aggregation operation to apply to the fields (e.g., sum, average or count).
See the [full list of supported aggregation operations](https://vega.github.io/vega-lite/docs/aggregate.html#ops)
for more information.

<a name="order">#</a>
<em>missing</em>.<b>order</b>(<em>order</em>)

Indicates the sort order. One of `"ascending"` or `"descending"`. Only applicable if the operation is being used as a sort parameter.

