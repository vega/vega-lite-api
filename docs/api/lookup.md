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

The field or fields for storing the computed formula value.
If `from.fields` is specified, the transform will use the same names for `as`.
If `from.fields` is not specified, `as` has to be a string and we put the whole object into the data under the specified name.

<a id="default" href="#default">#</a>
<em>lookup</em>.<b>default</b>(<em>value</em>)

The default value to use if lookup fails.

__Default value:__ `null`

<a id="from" href="#from">#</a>
<em>lookup</em>.<b>from</b>(<em>value</em>)

Secondary data reference.

<a id="lookup" href="#lookup">#</a>
<em>lookup</em>.<b>lookup</b>(<em>value</em>)

Key in primary data source.

