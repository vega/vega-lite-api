vl.<b>selectSingle</b>(<em>sel</em>)

Define a new <code>single</code> selection.

## <code>selectSingle</code> Method Overview

* <a href="#bind">bind</a>
* <a href="#clear">clear</a>
* <a href="#empty">empty</a>
* <a href="#encoding">encoding</a>
* <a href="#encodings">encodings</a>
* <a href="#field">field</a>
* <a href="#fields">fields</a>
* <a href="#init">init</a>
* <a href="#key">key</a>
* <a href="#nearest">nearest</a>
* <a href="#on">on</a>
* <a href="#resolve">resolve</a>
* <a href="#type">type</a>

## <code>selectSingle</code> API Reference

<a id="bind" href="#bind">#</a>
<em>selectSingle</em>.<b>bind</b>(<em>value</em>)

When set, a selection is populated by input elements (also known as dynamic query widgets)
or by interacting with the corresponding legend. Direct manipulation interaction is disabled by default;
to re-enable it, set the selection's [`on`](https://vega.github.io/vega-lite/docs/selection.html#common-selection-properties) property.

Legend bindings are restricted to selections that only specify a single field or encoding.

Query widget binding takes the form of Vega's [input element binding definition](https://vega.github.io/vega/docs/signals/#bind)
or can be a mapping between projected field/encodings and binding definitions.

__See also:__ [`bind`](https://vega.github.io/vega-lite/docs/bind.html) documentation.

<a id="clear" href="#clear">#</a>
<em>selectSingle</em>.<b>clear</b>(<em>value</em>)

Clears the selection, emptying it of all values. Can be a
[Event Stream](https://vega.github.io/vega/docs/event-streams/) or `false` to disable.

__Default value:__ `dblclick`.

__See also:__ [`clear`](https://vega.github.io/vega-lite/docs/clear.html) documentation.

<a id="empty" href="#empty">#</a>
<em>selectSingle</em>.<b>empty</b>(<em>value</em>)

By default, `all` data values are considered to lie within an empty selection.
When set to `none`, empty selections contain no data values.

<a id="encoding" href="#encoding">#</a>
<em>selectSingle</em>.<b>encoding</b>(<em>...values</em>)

Returns a selection reference including an encoding channel to extract selected values for, when a selection is projected over multiple fields or encodings.

<a id="encodings" href="#encodings">#</a>
<em>selectSingle</em>.<b>encodings</b>(<em>...value</em>)

An array of encoding channels. The corresponding data field values
must match for a data tuple to fall within the selection.

__See also:__ [`encodings`](https://vega.github.io/vega-lite/docs/project.html) documentation.

<a id="field" href="#field">#</a>
<em>selectSingle</em>.<b>field</b>(<em>...values</em>)

Returns a selection reference including a field name to extract selected values for, when a selection is projected over multiple fields or encodings.

<a id="fields" href="#fields">#</a>
<em>selectSingle</em>.<b>fields</b>(<em>...value</em>)

An array of field names whose values must match for a data tuple to
fall within the selection.

__See also:__ [`fields`](https://vega.github.io/vega-lite/docs/project.html) documentation.

<a id="init" href="#init">#</a>
<em>selectSingle</em>.<b>init</b>(<em>value</em>)

Initialize the selection with a mapping between [projected channels or field names](https://vega.github.io/vega-lite/docs/project.html) and initial values.

__See also:__ [`init`](https://vega.github.io/vega-lite/docs/init.html) documentation.

<a id="key" href="#key">#</a>
<em>selectSingle</em>.<b>key</b>(<em>...values</em>)

Returns a selection reference including a key in data to lookup, when a selection is used within a lookup transform.

<a id="nearest" href="#nearest">#</a>
<em>selectSingle</em>.<b>nearest</b>(<em>value</em>)

When true, an invisible voronoi diagram is computed to accelerate discrete
selection. The data value _nearest_ the mouse cursor is added to the selection.

__See also:__ [`nearest`](https://vega.github.io/vega-lite/docs/nearest.html) documentation.

<a id="on" href="#on">#</a>
<em>selectSingle</em>.<b>on</b>(<em>value</em>)

A [Vega event stream](https://vega.github.io/vega/docs/event-streams/) (object or selector) that triggers the selection.
For interval selections, the event stream must specify a [start and end](https://vega.github.io/vega/docs/event-streams/#between-filters).

<a id="resolve" href="#resolve">#</a>
<em>selectSingle</em>.<b>resolve</b>(<em>value</em>)

With layered and multi-view displays, a strategy that determines how
selections' data queries are resolved when applied in a filter transform,
conditional encoding rule, or scale domain.

__See also:__ [`resolve`](https://vega.github.io/vega-lite/docs/selection-resolve.html) documentation.

<a id="type" href="#type">#</a>
<em>selectSingle</em>.<b>type</b>(<em>value</em>)

Determines the default event processing and data query for the selection. Vega-Lite currently supports three selection types:

- `"single"` -- to select a single discrete data value on `click`.
- `"multi"` -- to select multiple discrete data value; the first value is selected on `click` and additional values toggled on shift-`click`.
- `"interval"` -- to select a continuous range of data values on `drag`.

