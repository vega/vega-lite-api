vl.<b>flatten</b>(<em>...flatten</em>)

Map array fields to new records, one per array entry.

## <code>flatten</code> Method Overview

* <a href="#as">as</a>
* <a href="#flatten">flatten</a>

## <code>flatten</code> API Reference

<a id="as" href="#as">#</a>
<em>flatten</em>.<b>as</b>(<em>...value</em>)

The output field names for extracted array values.

__Default value:__ The field name of the corresponding array field

<a id="flatten" href="#flatten">#</a>
<em>flatten</em>.<b>flatten</b>(<em>...value</em>)

An array of one or more data fields containing arrays to flatten.
If multiple fields are specified, their array values should have a parallel structure, ideally with the same length.
If the lengths of parallel arrays do not match,
the longest array will be used with `null` values added for missing entries.

