vl.<b>selectPoint</b>(<em>name</em>)

Define or reference a <code>point</code> selection parameter.

## <code>selectPoint</code> Method Overview

* <a href="#bind">bind</a>
* <a href="#clear">clear</a>
* <a href="#empty">empty</a>
* <a href="#encoding">encoding</a>
* <a href="#encodings">encodings</a>
* <a href="#field">field</a>
* <a href="#fields">fields</a>
* <a href="#key">key</a>
* <a href="#name">name</a>
* <a href="#nearest">nearest</a>
* <a href="#on">on</a>
* <a href="#resolve">resolve</a>
* <a href="#toggle">toggle</a>
* <a href="#type">type</a>
* <a href="#value">value</a>
* <a href="#views">views</a>

## <code>selectPoint</code> API Reference

<a id="bind" href="#bind">#</a>
<em>selectPoint</em>.<b>bind</b>(<em>bind</em>)

Input element bindings for this selection. 

__See:__ [`bind`](https://vega.github.io/vega-lite/docs/bind.html) documentation.

The behavior of this method depends on the argument type:

- If the argument is an <code>EventTarget</code>, sets the <code>bind.element</code> property.
- Otherwise, sets the <code>bind</code> property.

<a id="clear" href="#clear">#</a>
<em>selectPoint</em>.<b>clear</b>(<em>value</em>)

Clears the selection, emptying it of all values. This property can be a [Event Stream](https://vega.github.io/vega/docs/event-streams/) or `false` to disable clear.

__Default value:__ `dblclick`.

__See also:__ [`clear` examples ](https://vega.github.io/vega-lite/docs/selection.html#clear) in the documentation.

<a id="empty" href="#empty">#</a>
<em>selectPoint</em>.<b>empty</b>(<em>...values</em>)

Returns a selection reference including an empty predicate selection. If `false`, empty predicate will not select all values.

<a id="encoding" href="#encoding">#</a>
<em>selectPoint</em>.<b>encoding</b>(<em>...values</em>)

Returns a selection reference including an encoding channel to extract selected values for, when a selection is projected over multiple fields or encodings.

<a id="encodings" href="#encodings">#</a>
<em>selectPoint</em>.<b>encodings</b>(<em>...value</em>)

An array of encoding channels. The corresponding data field values must match for a data tuple to fall within the selection.

__See also:__ The [projection with `encodings` and `fields` section](https://vega.github.io/vega-lite/docs/selection.html#project) in the documentation.

<a id="field" href="#field">#</a>
<em>selectPoint</em>.<b>field</b>(<em>...values</em>)

Returns a selection reference including a field name to extract selected values for, when a selection is projected over multiple fields or encodings.

<a id="fields" href="#fields">#</a>
<em>selectPoint</em>.<b>fields</b>(<em>...value</em>)

An array of field names whose values must match for a data tuple to fall within the selection.

__See also:__ The [projection with `encodings` and `fields` section](https://vega.github.io/vega-lite/docs/selection.html#project) in the documentation.

<a id="key" href="#key">#</a>
<em>selectPoint</em>.<b>key</b>(<em>...values</em>)

Returns a selection reference including a key in data to lookup, when a selection is used within a lookup transform.

<a id="name" href="#name">#</a>
<em>selectPoint</em>.<b>name</b>(<em>name</em>)

A unique name for the selection parameter. Selection names should be valid JavaScript identifiers: they should contain only alphanumeric characters (or "$", or "_") and may not start with a digit. Reserved keywords that may not be used as parameter names are "datum", "event", "item", and "parent".

<a id="nearest" href="#nearest">#</a>
<em>selectPoint</em>.<b>nearest</b>(<em>value</em>)

When true, an invisible voronoi diagram is computed to accelerate discrete selection. The data value _nearest_ the mouse cursor is added to the selection.

__Default value:__ `false`, which means that data values must be interacted with directly (e.g., clicked on) to be added to the selection.

__See also:__ [`nearest` examples](https://vega.github.io/vega-lite/docs/selection.html#nearest) documentation.

<a id="on" href="#on">#</a>
<em>selectPoint</em>.<b>on</b>(<em>value</em>)

A [Vega event stream](https://vega.github.io/vega/docs/event-streams/) (object or selector) that triggers the selection. For interval selections, the event stream must specify a [start and end](https://vega.github.io/vega/docs/event-streams/#between-filters).

__See also:__ [`on` examples](https://vega.github.io/vega-lite/docs/selection.html#on) in the documentation.

<a id="resolve" href="#resolve">#</a>
<em>selectPoint</em>.<b>resolve</b>(<em>value</em>)

With layered and multi-view displays, a strategy that determines how selections' data queries are resolved when applied in a filter transform, conditional encoding rule, or scale domain.

One of: - `"global"` -- only one brush exists for the entire SPLOM. When the user begins to drag, any previous brushes are cleared, and a new one is constructed. - `"union"` -- each cell contains its own brush, and points are highlighted if they lie within _any_ of these individual brushes. - `"intersect"` -- each cell contains its own brush, and points are highlighted only if they fall within _all_ of these individual brushes.

__Default value:__ `global`.

__See also:__ [`resolve` examples](https://vega.github.io/vega-lite/docs/selection.html#resolve) in the documentation.

<a id="toggle" href="#toggle">#</a>
<em>selectPoint</em>.<b>toggle</b>(<em>value</em>)

Controls whether data values should be toggled (inserted or removed from a point selection) or only ever inserted into multi selections.

One of: - `true` -- the default behavior, which corresponds to `"event.shiftKey"`.  As a result, data values are toggled when the user interacts with the shift-key pressed. - `false` -- disables toggling behaviour; as the user interacts, data values are only inserted into the multi selection and never removed. - A [Vega expression](https://vega.github.io/vega/docs/expressions/) which is re-evaluated as the user interacts. If the expression evaluates to `true`, the data value is toggled into or out of the multi selection. If the expression evaluates to `false`, the multi selection is first clear, and the data value is then inserted. For example, setting the value to the Vega expression `"true"` will toggle data values without the user pressing the shift-key.

__Default value:__ `true`

__See also:__ [`toggle` examples](https://vega.github.io/vega-lite/docs/selection.html#toggle) in the documentation.

<a id="type" href="#type">#</a>
<em>selectPoint</em>.<b>type</b>(<em>value</em>)

Determines the default event processing and data query for the selection. Vega-Lite currently supports two selection types:

- `"point"` -- to select multiple discrete data values; the first value is selected on `click` and additional values toggled on shift-click. - `"interval"` -- to select a continuous range of data values on `drag`.

<a id="value" href="#value">#</a>
<em>selectPoint</em>.<b>value</b>(<em>value</em>)

Initialize the selection with a mapping between [projected channels or field names](https://vega.github.io/vega-lite/docs/project.html) and initial values.

<a id="views" href="#views">#</a>
<em>selectPoint</em>.<b>views</b>(<em>views</em>)

By default, top-level selections are applied to every view in the visualization. If this property is specified, selections will only be applied to views with the given names.

