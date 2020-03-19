vl.<b>pivot</b>(<em>pivot</em>)

Pivot unique values to new aggregate fields.

## <code>pivot</code> Method Overview

* <a href="#groupby">groupby</a>
* <a href="#limit">limit</a>
* <a href="#op">op</a>
* <a href="#pivot">pivot</a>
* <a href="#value">value</a>

## <code>pivot</code> API Reference

<a id="groupby" href="#groupby">#</a>
<em>pivot</em>.<b>groupby</b>(<em>...value</em>)

The optional data fields to group by. If not specified, a single group containing all data objects will be used.

<a id="limit" href="#limit">#</a>
<em>pivot</em>.<b>limit</b>(<em>value</em>)

An optional parameter indicating the maximum number of pivoted fields to generate.
The default (`0`) applies no limit. The pivoted `pivot` names are sorted in ascending order prior to enforcing the limit.
__Default value:__ `0`

<a id="op" href="#op">#</a>
<em>pivot</em>.<b>op</b>(<em>value</em>)

The aggregation operation to apply to grouped `value` field values.
__Default value:__ `sum`

<a id="pivot" href="#pivot">#</a>
<em>pivot</em>.<b>pivot</b>(<em>value</em>)

The data field to pivot on. The unique values of this field become new field names in the output stream.

<a id="value" href="#value">#</a>
<em>pivot</em>.<b>value</b>(<em>value</em>)

The data field to populate pivoted fields. The aggregate values of this field become the values of the new pivoted fields.

