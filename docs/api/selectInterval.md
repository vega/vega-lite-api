vl.<b>selectInterval</b>(<em>sel</em>)

Define a new <code>interval</code> selection.

## <code>selectInterval</code> Method Overview

* <a href="#bind">bind</a>
* <a href="#clear">clear</a>
* <a href="#empty">empty</a>
* <a href="#encodings">encodings</a>
* <a href="#fields">fields</a>
* <a href="#init">init</a>
* <a href="#mark">mark</a>
* <a href="#on">on</a>
* <a href="#resolve">resolve</a>
* <a href="#translate">translate</a>
* <a href="#type">type</a>
* <a href="#zoom">zoom</a>

## <code>selectInterval</code> API Reference

<a id="bind" href="#bind">#</a>
<em>selectInterval</em>.<b>bind</b>(<em>value</em>)

Establishes a two-way binding between the interval selection and the scales
used within the same view. This allows a user to interactively pan and
zoom the view.

__See also:__ [`bind`](https://vega.github.io/vega-lite/docs/bind.html) documentation.

<a id="clear" href="#clear">#</a>
<em>selectInterval</em>.<b>clear</b>(<em>value</em>)

Clears the selection, emptying it of all values. Can be a
[Event Stream](https://vega.github.io/vega/docs/event-streams/) or `false` to disable.

__Default value:__ `dblclick`.

__See also:__ [`clear`](https://vega.github.io/vega-lite/docs/clear.html) documentation.

<a id="empty" href="#empty">#</a>
<em>selectInterval</em>.<b>empty</b>(<em>value</em>)

By default, `all` data values are considered to lie within an empty selection.
When set to `none`, empty selections contain no data values.

<a id="encodings" href="#encodings">#</a>
<em>selectInterval</em>.<b>encodings</b>(<em>...value</em>)

An array of encoding channels. The corresponding data field values
must match for a data tuple to fall within the selection.

__See also:__ [`encodings`](https://vega.github.io/vega-lite/docs/project.html) documentation.

<a id="fields" href="#fields">#</a>
<em>selectInterval</em>.<b>fields</b>(<em>...value</em>)

An array of field names whose values must match for a data tuple to
fall within the selection.

__See also:__ [`fields`](https://vega.github.io/vega-lite/docs/project.html) documentation.

<a id="init" href="#init">#</a>
<em>selectInterval</em>.<b>init</b>(<em>value</em>)

Initialize the selection with a mapping between [projected channels or field names](https://vega.github.io/vega-lite/docs/project.html) and arrays of
initial values.

__See also:__ [`init`](https://vega.github.io/vega-lite/docs/init.html) documentation.

<a id="mark" href="#mark">#</a>
<em>selectInterval</em>.<b>mark</b>(<em>value</em>)

An interval selection also adds a rectangle mark to depict the
extents of the interval. The `mark` property can be used to customize the
appearance of the mark.

__See also:__ [`mark`](https://vega.github.io/vega-lite/docs/selection-mark.html) documentation.

<a id="on" href="#on">#</a>
<em>selectInterval</em>.<b>on</b>(<em>value</em>)

A [Vega event stream](https://vega.github.io/vega/docs/event-streams/) (object or selector) that triggers the selection.
For interval selections, the event stream must specify a [start and end](https://vega.github.io/vega/docs/event-streams/#between-filters).

<a id="resolve" href="#resolve">#</a>
<em>selectInterval</em>.<b>resolve</b>(<em>value</em>)

With layered and multi-view displays, a strategy that determines how
selections' data queries are resolved when applied in a filter transform,
conditional encoding rule, or scale domain.

__See also:__ [`resolve`](https://vega.github.io/vega-lite/docs/selection-resolve.html) documentation.

<a id="translate" href="#translate">#</a>
<em>selectInterval</em>.<b>translate</b>(<em>value</em>)

When truthy, allows a user to interactively move an interval selection
back-and-forth. Can be `true`, `false` (to disable panning), or a
[Vega event stream definition](https://vega.github.io/vega/docs/event-streams/)
which must include a start and end event to trigger continuous panning.

__Default value:__ `true`, which corresponds to
`[mousedown, window:mouseup] > window:mousemove!` which corresponds to
clicks and dragging within an interval selection to reposition it.

__See also:__ [`translate`](https://vega.github.io/vega-lite/docs/translate.html) documentation.

<a id="type" href="#type">#</a>
<em>selectInterval</em>.<b>type</b>(<em>value</em>)

Determines the default event processing and data query for the selection. Vega-Lite currently supports three selection types:

- `"single"` -- to select a single discrete data value on `click`.
- `"multi"` -- to select multiple discrete data value; the first value is selected on `click` and additional values toggled on shift-`click`.
- `"interval"` -- to select a continuous range of data values on `drag`.

<a id="zoom" href="#zoom">#</a>
<em>selectInterval</em>.<b>zoom</b>(<em>value</em>)

When truthy, allows a user to interactively resize an interval selection.
Can be `true`, `false` (to disable zooming), or a [Vega event stream
definition](https://vega.github.io/vega/docs/event-streams/). Currently,
only `wheel` events are supported.

__Default value:__ `true`, which corresponds to `wheel!`.

__See also:__ [`zoom`](https://vega.github.io/vega-lite/docs/zoom.html) documentation.

