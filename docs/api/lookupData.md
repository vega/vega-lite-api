vl.<b>lookupData</b>(<em>data</em>)

Specify a lookup on a secondary data source.

The behavior of this method depends on the argument type:

- If the argument is an <code>array</code>, sets the <code>values</code> property.
- If the argument is a <code>string</code>, sets the <code>url</code> property.
- Otherwise, sets the properties defined on the input argument(s), if provided.

## <code>lookupData</code> Method Overview

* <a href="#data">data</a>
* <a href="#fields">fields</a>
* <a href="#key">key</a>

## <code>lookupData</code> API Reference

<a id="data" href="#data">#</a>
<em>lookupData</em>.<b>data</b>(<em>value</em>)

Secondary data source to lookup in.

<a id="fields" href="#fields">#</a>
<em>lookupData</em>.<b>fields</b>(<em>...value</em>)

Fields in foreign data or selection to lookup.
If not specified, the entire object is queried.

<a id="key" href="#key">#</a>
<em>lookupData</em>.<b>key</b>(<em>value</em>)

Key in data to lookup.

