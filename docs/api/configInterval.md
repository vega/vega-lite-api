vl.<b>configInterval</b>(<em>...values</em>)

Configure <code>interval</code> selections.

## <code>configInterval</code> Method Overview

* <a href="#clear">clear</a>
* <a href="#encodings">encodings</a>
* <a href="#fields">fields</a>
* <a href="#mark">mark</a>
* <a href="#on">on</a>
* <a href="#resolve">resolve</a>
* <a href="#translate">translate</a>
* <a href="#type">type</a>
* <a href="#zoom">zoom</a>

## <code>configInterval</code> API Reference

<a id="clear" href="#clear">#</a>
<em>configInterval</em>.<b>clear</b>(<em>value</em>)

Clears the selection, emptying it of all values. This property can be a [Event Stream](https://vega.github.io/vega/docs/event-streams/) or `false` to disable clear.

__Default value:__ `dblclick`.

__See also:__ [`clear` examples ](https://vega.github.io/vega-lite/docs/selection.html#clear) in the documentation.

<a id="encodings" href="#encodings">#</a>
<em>configInterval</em>.<b>encodings</b>(<em>...value</em>)

An array of encoding channels. The corresponding data field values must match for a data tuple to fall within the selection.

__See also:__ The [projection with `encodings` and `fields` section](https://vega.github.io/vega-lite/docs/selection.html#project) in the documentation.

<a id="fields" href="#fields">#</a>
<em>configInterval</em>.<b>fields</b>(<em>...value</em>)

An array of field names whose values must match for a data tuple to fall within the selection.

__See also:__ The [projection with `encodings` and `fields` section](https://vega.github.io/vega-lite/docs/selection.html#project) in the documentation.

<a id="mark" href="#mark">#</a>
<em>configInterval</em>.<b>mark</b>(<em>value</em>)

An interval selection also adds a rectangle mark to depict the extents of the interval. The `mark` property can be used to customize the appearance of the mark.

__See also:__ [`mark` examples](https://vega.github.io/vega-lite/docs/selection.html#mark) in the documentation.

<a id="on" href="#on">#</a>
<em>configInterval</em>.<b>on</b>(<em>value</em>)

A [Vega event stream](https://vega.github.io/vega/docs/event-streams/) (object or selector) that triggers the selection. For interval selections, the event stream must specify a [start and end](https://vega.github.io/vega/docs/event-streams/#between-filters).

__See also:__ [`on` examples](https://vega.github.io/vega-lite/docs/selection.html#on) in the documentation.

<a id="resolve" href="#resolve">#</a>
<em>configInterval</em>.<b>resolve</b>(<em>value</em>)

With layered and multi-view displays, a strategy that determines how selections' data queries are resolved when applied in a filter transform, conditional encoding rule, or scale domain.

One of: - `"global"` -- only one brush exists for the entire SPLOM. When the user begins to drag, any previous brushes are cleared, and a new one is constructed. - `"union"` -- each cell contains its own brush, and points are highlighted if they lie within _any_ of these individual brushes. - `"intersect"` -- each cell contains its own brush, and points are highlighted only if they fall within _all_ of these individual brushes.

__Default value:__ `global`.

__See also:__ [`resolve` examples](https://vega.github.io/vega-lite/docs/selection.html#resolve) in the documentation.

<a id="translate" href="#translate">#</a>
<em>configInterval</em>.<b>translate</b>(<em>value</em>)

When truthy, allows a user to interactively move an interval selection back-and-forth. Can be `true`, `false` (to disable panning), or a [Vega event stream definition](https://vega.github.io/vega/docs/event-streams/) which must include a start and end event to trigger continuous panning. Discrete panning (e.g., pressing the left/right arrow keys) will be supported in future versions.

__Default value:__ `true`, which corresponds to `[mousedown, window:mouseup] > window:mousemove!`. This default allows users to clicks and drags within an interval selection to reposition it.

__See also:__ [`translate` examples](https://vega.github.io/vega-lite/docs/selection.html#translate) in the documentation.

<a id="type" href="#type">#</a>
<em>configInterval</em>.<b>type</b>(<em>value</em>)

Determines the default event processing and data query for the selection. Vega-Lite currently supports two selection types:

- `"point"` -- to select multiple discrete data values; the first value is selected on `click` and additional values toggled on shift-click. - `"interval"` -- to select a continuous range of data values on `drag`.

<a id="zoom" href="#zoom">#</a>
<em>configInterval</em>.<b>zoom</b>(<em>value</em>)

When truthy, allows a user to interactively resize an interval selection. Can be `true`, `false` (to disable zooming), or a [Vega event stream definition](https://vega.github.io/vega/docs/event-streams/). Currently, only `wheel` events are supported, but custom event streams can still be used to specify filters, debouncing, and throttling. Future versions will expand the set of events that can trigger this transformation.

__Default value:__ `true`, which corresponds to `wheel!`. This default allows users to use the mouse wheel to resize an interval selection.

__See also:__ [`zoom` examples](https://vega.github.io/vega-lite/docs/selection.html#zoom) in the documentation.

