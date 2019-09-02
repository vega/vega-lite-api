vl.<b>selectMulti</b>(<em>sel</em>)

Define a new <code>multi</code> selection.

## <code>selectMulti</code> Method Overview

* <a href="#clear">clear</a>
* <a href="#empty">empty</a>
* <a href="#encodings">encodings</a>
* <a href="#fields">fields</a>
* <a href="#init">init</a>
* <a href="#nearest">nearest</a>
* <a href="#on">on</a>
* <a href="#resolve">resolve</a>
* <a href="#toggle">toggle</a>
* <a href="#type">type</a>

## <code>selectMulti</code> API Reference

<a id="clear" href="#clear">#</a>
<em>selectMulti</em>.<b>clear</b>(<em>value</em>)

Clears the selection, emptying it of all values. Can be a
[Event Stream](https://vega.github.io/vega/docs/event-streams/) or `false` to disable.

__Default value:__ `dblclick`.

__See also:__ [`clear`](https://vega.github.io/vega-lite/docs/clear.html) documentation.

<a id="empty" href="#empty">#</a>
<em>selectMulti</em>.<b>empty</b>(<em>value</em>)

By default, `all` data values are considered to lie within an empty selection.
When set to `none`, empty selections contain no data values.

<a id="encodings" href="#encodings">#</a>
<em>selectMulti</em>.<b>encodings</b>(<em>...value</em>)

An array of encoding channels. The corresponding data field values
must match for a data tuple to fall within the selection.

__See also:__ [`encodings`](https://vega.github.io/vega-lite/docs/project.html) documentation.

<a id="fields" href="#fields">#</a>
<em>selectMulti</em>.<b>fields</b>(<em>...value</em>)

An array of field names whose values must match for a data tuple to
fall within the selection.

__See also:__ [`fields`](https://vega.github.io/vega-lite/docs/project.html) documentation.

<a id="init" href="#init">#</a>
<em>selectMulti</em>.<b>init</b>(<em>...value</em>)

Initialize the selection with a mapping between [projected channels or field names](https://vega.github.io/vega-lite/docs/project.html) and an initial
value (or array of values).

__See also:__ [`init`](https://vega.github.io/vega-lite/docs/init.html) documentation.

<a id="nearest" href="#nearest">#</a>
<em>selectMulti</em>.<b>nearest</b>(<em>value</em>)

When true, an invisible voronoi diagram is computed to accelerate discrete
selection. The data value _nearest_ the mouse cursor is added to the selection.

__See also:__ [`nearest`](https://vega.github.io/vega-lite/docs/nearest.html) documentation.

<a id="on" href="#on">#</a>
<em>selectMulti</em>.<b>on</b>(<em>value</em>)

A [Vega event stream](https://vega.github.io/vega/docs/event-streams/) (object or selector) that triggers the selection.
For interval selections, the event stream must specify a [start and end](https://vega.github.io/vega/docs/event-streams/#between-filters).

<a id="resolve" href="#resolve">#</a>
<em>selectMulti</em>.<b>resolve</b>(<em>value</em>)

With layered and multi-view displays, a strategy that determines how
selections' data queries are resolved when applied in a filter transform,
conditional encoding rule, or scale domain.

__See also:__ [`resolve`](https://vega.github.io/vega-lite/docs/selection-resolve.html) documentation.

<a id="toggle" href="#toggle">#</a>
<em>selectMulti</em>.<b>toggle</b>(<em>value</em>)

Controls whether data values should be toggled or only ever inserted into
multi selections. Can be `true`, `false` (for insertion only), or a
[Vega expression](https://vega.github.io/vega/docs/expressions/).

__Default value:__ `true`, which corresponds to `event.shiftKey` (i.e.,
data values are toggled when a user interacts with the shift-key pressed).

__See also:__ [`toggle`](https://vega.github.io/vega-lite/docs/toggle.html) documentation.

<a id="type" href="#type">#</a>
<em>selectMulti</em>.<b>type</b>(<em>value</em>)

Determines the default event processing and data query for the selection. Vega-Lite currently supports three selection types:

- `single` -- to select a single discrete data value on `click`.
- `multi` -- to select multiple discrete data value; the first value is selected on `click` and additional values toggled on shift-`click`.
- `interval` -- to select a continuous range of data values on `drag`.

