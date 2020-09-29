vl.<b>bin</b>(<em>field, bin</em>)

Discretize numeric values into uniform bins.

## <code>bin</code> Method Overview

* <a href="#as">as</a>
* <a href="#bin">bin</a>
* <a href="#field">field</a>

## <code>bin</code> API Reference

<a id="as" href="#as">#</a>
<em>bin</em>.<b>as</b>(<em>...value</em>)

The output fields at which to write the start and end bin values. This can be either a string or an array of strings with two elements denoting the name for the fields for bin start and bin end respectively. If a single string (e.g., `"val"`) is provided, the end field will be `"val_end"`.

<a id="bin" href="#bin">#</a>
<em>bin</em>.<b>bin</b>(<em>value</em>)

An object indicating bin properties, or simply `true` for using default bin parameters.

<a id="field" href="#field">#</a>
<em>bin</em>.<b>field</b>(<em>value</em>)

The data field to bin.

