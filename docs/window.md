# window

vl.<b>window</b>(<em>...window</em>)

Perform running calculations over sorted groups.

## <code>window</code> Method Overview

* <em>window</em>.<a href="#frame">frame</a>
* <em>window</em>.<a href="#groupby">groupby</a>
* <em>window</em>.<a href="#ignorePeers">ignorePeers</a>
* <em>window</em>.<a href="#sort">sort</a>
* <em>window</em>.<a href="#window">window</a>

## <code>window</code> API Reference

<a name="frame">#</a>
<em>window</em>.<b>frame</b>(<em>...value</em>)

A frame specification as a two-element array indicating how the sliding window should proceed. The array entries should either be a number indicating the offset from the current data object, or null to indicate unbounded rows preceding or following the current data object. The default value is `[null, 0]`, indicating that the sliding window includes the current object and all preceding objects. The value `[-5, 5]` indicates that the window should include five objects preceding and five objects following the current object. Finally, `[null, null]` indicates that the window frame should always include all data objects. If you this frame and want to assign the same value to add objects, you can use the simpler [join aggregate transform](https://vega.github.io/vega-lite/docs/joinaggregate.html). The only operators affected are the aggregation operations and the `first_value`, `last_value`, and `nth_value` window operations. The other window operations are not affected by this.

__Default value:__:  `[null, 0]` (includes the current object and all preceding objects)

<a name="groupby">#</a>
<em>window</em>.<b>groupby</b>(<em>...value</em>)

The data fields for partitioning the data objects into separate windows. If unspecified, all data points will be in a single window.

<a name="ignorePeers">#</a>
<em>window</em>.<b>ignorePeers</b>(<em>value</em>)

Indicates if the sliding window frame should ignore peer values (data that are considered identical by the sort criteria). The default is false, causing the window frame to expand to include all peer values. If set to true, the window frame will be defined by offset values only. This setting only affects those operations that depend on the window frame, namely aggregation operations and the first_value, last_value, and nth_value window operations.

__Default value:__ `false`

<a name="sort">#</a>
<em>window</em>.<b>sort</b>(<em>...value</em>)

A sort field definition for sorting data objects within a window. If two data objects are considered equal by the comparator, they are considered “peer” values of equal rank. If sort is not specified, the order is undefined: data objects are processed in the order they are observed and none are considered peers (the ignorePeers parameter is ignored and treated as if set to `true`).

<a name="window">#</a>
<em>window</em>.<b>window</b>(<em>...value</em>)

The definition of the fields in the window, and what calculations to use.

