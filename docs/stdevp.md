# stdevp

vl.<b>stdevp</b>(<em>field, as</em>)

A <code>stdevp</code> aggregate operation.

## <code>stdevp</code> Method Overview

* <em>stdevp</em>.<a href="#as">as</a>
* <em>stdevp</em>.<a href="#field">field</a>
* <em>stdevp</em>.<a href="#op">op</a>
* <em>stdevp</em>.<a href="#order">order</a>

## <code>stdevp</code> API Reference

<a name="as">#</a>
<em>stdevp</em>.<b>as</b>(<em>value</em>)

The output field names to use for each aggregated field.

<a name="field">#</a>
<em>stdevp</em>.<b>field</b>(<em>value</em>)

The data field for which to compute aggregate function. This is required for all aggregation operations except `"count"`.

<a name="op">#</a>
<em>stdevp</em>.<b>op</b>(<em>value</em>)

The aggregation operation to apply to the fields (e.g., sum, average or count).
See the [full list of supported aggregation operations](https://vega.github.io/vega-lite/docs/aggregate.html#ops)
for more information.

<a name="order">#</a>
<em>stdevp</em>.<b>order</b>(<em>order</em>)

Indicates the sort order. One of `"ascending"` or `"descending"`. Only applicable if the operation is being used as a sort parameter.

