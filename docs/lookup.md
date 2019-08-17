# lookup

vl.<b>lookup</b>(<em>lookup</em>)

Extend input data with values from another data source.

## <code>lookup</code> Method Overview

* <em>lookup</em>.<a href="#as">as</a>
* <em>lookup</em>.<a href="#default">default</a>
* <em>lookup</em>.<a href="#from">from</a>
* <em>lookup</em>.<a href="#lookup">lookup</a>

## <code>lookup</code> API Reference

<a name="as">#</a>
<em>lookup</em>.<b>as</b>(<em>...value</em>)

The field or fields for storing the computed formula value.
If `from.fields` is specified, the transform will use the same names for `as`.
If `from.fields` is not specified, `as` has to be a string and we put the whole object into the data under the specified name.

<a name="default">#</a>
<em>lookup</em>.<b>default</b>(<em>value</em>)

The default value to use if lookup fails.

__Default value:__ `null`

<a name="from">#</a>
<em>lookup</em>.<b>from</b>(<em>value</em>)

Secondary data reference.

<a name="lookup">#</a>
<em>lookup</em>.<b>lookup</b>(<em>value</em>)

Key in primary data source.

