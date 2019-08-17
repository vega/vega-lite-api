vl.<b>impute</b>(<em>impute, key</em>)

Fill in missing values with imputed values.

## <code>impute</code> Method Overview

* <a href="#frame">frame</a>
* <a href="#groupby">groupby</a>
* <a href="#impute">impute</a>
* <a href="#key">key</a>
* <a href="#keyvals">keyvals</a>
* <a href="#method">method</a>
* <a href="#value">value</a>

## <code>impute</code> API Reference

<a id="frame" href="#frame">#</a>
<em>impute</em>.<b>frame</b>(<em>...value</em>)

A frame specification as a two-element array used to control the window over which the specified method is applied. The array entries should either be a number indicating the offset from the current data object, or null to indicate unbounded rows preceding or following the current data object.  For example, the value `[-5, 5]` indicates that the window should include five objects preceding and five objects following the current object.

__Default value:__:  `[null, null]` indicating that the window includes all objects.

<a id="groupby" href="#groupby">#</a>
<em>impute</em>.<b>groupby</b>(<em>...value</em>)

An optional array of fields by which to group the values.
Imputation will then be performed on a per-group basis.

<a id="impute" href="#impute">#</a>
<em>impute</em>.<b>impute</b>(<em>value</em>)

The data field for which the missing values should be imputed.

<a id="key" href="#key">#</a>
<em>impute</em>.<b>key</b>(<em>value</em>)

A key field that uniquely identifies data objects within a group.
Missing key values (those occurring in the data but not in the current group) will be imputed.

<a id="keyvals" href="#keyvals">#</a>
<em>impute</em>.<b>keyvals</b>(<em>...value</em>)

Defines the key values that should be considered for imputation.
An array of key values or an object defining a [number sequence](https://vega.github.io/vega-lite/docs/impute.html#sequence-def).

If provided, this will be used in addition to the key values observed within the input data.  If not provided, the values will be derived from all unique values of the `key` field. For `impute` in `encoding`, the key field is the x-field if the y-field is imputed, or vice versa.

If there is no impute grouping, this property _must_ be specified.

<a id="method" href="#method">#</a>
<em>impute</em>.<b>method</b>(<em>value</em>)

The imputation method to use for the field value of imputed data objects.
One of `value`, `mean`, `median`, `max` or `min`.

__Default value:__  `"value"`

<a id="value" href="#value">#</a>
<em>impute</em>.<b>value</b>(<em>value</em>)

The field value to use when the imputation `method` is `"value"`.

