# stack

vl.<b>stack</b>(<em>stack</em>)

Compute running sums to stack groups of values.

## <code>stack</code> Method Overview

* <a href="#as">as</a>
* <a href="#groupby">groupby</a>
* <a href="#offset">offset</a>
* <a href="#sort">sort</a>
* <a href="#stack">stack</a>

## <code>stack</code> API Reference

<a id="as" href="#as">#</a>
<em>stack</em>.<b>as</b>(<em>...value</em>)

Output field names. This can be either a string or an array of strings with
two elements denoting the name for the fields for stack start and stack end
respectively.
If a single string(eg."val") is provided, the end field will be "val_end".

<a id="groupby" href="#groupby">#</a>
<em>stack</em>.<b>groupby</b>(<em>...value</em>)

The data fields to group by.

<a id="offset" href="#offset">#</a>
<em>stack</em>.<b>offset</b>(<em>value</em>)

Mode for stacking marks.
__Default value:__ `"zero"`

<a id="sort" href="#sort">#</a>
<em>stack</em>.<b>sort</b>(<em>...value</em>)

Field that determines the order of leaves in the stacked charts.

<a id="stack" href="#stack">#</a>
<em>stack</em>.<b>stack</b>(<em>value</em>)

The field which is stacked.

