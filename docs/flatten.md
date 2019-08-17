# flatten

vl.<b>flatten</b>(<em>...flatten</em>)

Map array fields to new records, one per array entry.

## <code>flatten</code> Method Overview

* <em>flatten</em>.<a href="#as">as</a>
* <em>flatten</em>.<a href="#flatten">flatten</a>

## <code>flatten</code> API Reference

<a name="as">#</a>
<em>flatten</em>.<b>as</b>(<em>...value</em>)

The output field names for extracted array values.

__Default value:__ The field name of the corresponding array field

<a name="flatten">#</a>
<em>flatten</em>.<b>flatten</b>(<em>...value</em>)

An array of one or more data fields containing arrays to flatten.
If multiple fields are specified, their array values should have a parallel structure, ideally with the same length.
If the lengths of parallel arrays do not match,
the longest array will be used with `null` values added for missing entries.

