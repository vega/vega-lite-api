vl.<b>lookup</b>(<em>lookup</em>)

Extend input data with values from another data source.

## <code>lookup</code> Method Overview

* <a href="#as">as</a>
* <a href="#default">default</a>
* <a href="#from">from</a>
* <a href="#lookup">lookup</a>

## <code>lookup</code> API Reference

<a id="as" href="#as">#</a>
<em>lookup</em>.<b>as</b>(<em>...value</em>)

The output fields on which to store the looked up data values.

For data lookups, this property may be left blank if `from.fields` has been specified (those field names will be used); if `from.fields` has not been specified, `as` must be a string.

For selection lookups, this property is optional: if unspecified, looked up values will be stored under a property named for the selection; and if specified, it must correspond to `from.fields`.

<a id="default" href="#default">#</a>
<em>lookup</em>.<b>default</b>(<em>value</em>)

The default value to use if lookup fails.

__Default value:__ `null`

<a id="from" href="#from">#</a>
<em>lookup</em>.<b>from</b>(<em>value</em>)

Data source or selection for secondary data reference.

<a id="lookup" href="#lookup">#</a>
<em>lookup</em>.<b>lookup</b>(<em>value</em>)

Key in primary data source.

