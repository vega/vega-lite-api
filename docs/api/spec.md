vl.<b>spec</b>(<em>...values</em>)

Create an arbitrary Vega-Lite specification.

## <code>spec</code> Method Overview

* <a href="#align">align</a>
* <a href="#autosize">autosize</a>
* <a href="#background">background</a>
* <a href="#bounds">bounds</a>
* <a href="#center">center</a>
* <a href="#columns">columns</a>
* <a href="#concat">concat</a>
* <a href="#config">config</a>
* <a href="#data">data</a>
* <a href="#datasets">datasets</a>
* <a href="#description">description</a>
* <a href="#encoding">encoding</a>
* <a href="#facet">facet</a>
* <a href="#facet">facet</a>
* <a href="#hconcat">hconcat</a>
* <a href="#height">height</a>
* <a href="#layer">layer</a>
* <a href="#mark">mark</a>
* <a href="#name">name</a>
* <a href="#padding">padding</a>
* <a href="#params">params</a>
* <a href="#projection">projection</a>
* <a href="#render">render</a>
* <a href="#repeat">repeat</a>
* <a href="#repeat">repeat</a>
* <a href="#resolve">resolve</a>
* <a href="#spacing">spacing</a>
* <a href="#spec">spec</a>
* <a href="#title">title</a>
* <a href="#toSpec">toSpec</a>
* <a href="#toString">toString</a>
* <a href="#toView">toView</a>
* <a href="#transform">transform</a>
* <a href="#usermeta">usermeta</a>
* <a href="#vconcat">vconcat</a>
* <a href="#view">view</a>
* <a href="#width">width</a>

## <code>spec</code> API Reference

<a id="align" href="#align">#</a>
<em>spec</em>.<b>align</b>(<em>value</em>)

The alignment to apply to grid rows and columns. The supported string values are `"all"`, `"each"`, and `"none"`.

- For `"none"`, a flow layout will be used, in which adjacent subviews are simply placed one after the other.
- For `"each"`, subviews will be aligned into a clean grid structure, but each row or column may be of variable size.
- For `"all"`, subviews will be aligned and each row or column will be sized identically based on the maximum observed size. String values for this property will be applied to both grid rows and columns.

Alternatively, an object value of the form `{"row": string, "column": string}` can be used to supply different alignments for rows and columns.

__Default value:__ `"all"`.

<a id="autosize" href="#autosize">#</a>
<em>spec</em>.<b>autosize</b>(<em>value</em>)

How the visualization size should be determined. If a string, should be one of `"pad"`, `"fit"` or `"none"`. Object values can additionally specify parameters for content sizing and automatic resizing.

__Default value__: `pad`

<a id="background" href="#background">#</a>
<em>spec</em>.<b>background</b>(<em>value</em>)

CSS color property to use as the background of the entire view.

__Default value:__ `"white"`

<a id="bounds" href="#bounds">#</a>
<em>spec</em>.<b>bounds</b>(<em>value</em>)

The bounds calculation method to use for determining the extent of a sub-plot. One of `full` (the default) or `flush`.

- If set to `full`, the entire calculated bounds (including axes, title, and legend) will be used.
- If set to `flush`, only the specified width and height values for the sub-view will be used. The `flush` setting can be useful when attempting to place sub-plots without axes or legends into a uniform grid structure.

__Default value:__ `"full"`

<a id="center" href="#center">#</a>
<em>spec</em>.<b>center</b>(<em>value</em>)

Boolean flag indicating if subviews should be centered relative to their respective rows or columns.

__Default value:__ `false`

<a id="columns" href="#columns">#</a>
<em>spec</em>.<b>columns</b>(<em>value</em>)

The number of columns to include in the view composition layout.

__Default value__: `undefined` -- An infinite number of columns (a single row) will be assumed. This is equivalent to `hconcat` (for `concat`) and to using the `column` channel (for `facet` and `repeat`).

__Note__:

1) This property is only for:
- the general (wrappable) `concat` operator (not `hconcat`/`vconcat`)
- the `facet` and `repeat` operator with one field/repetition definition (without row/column nesting)

2) Setting the `columns` to `1` is equivalent to `vconcat` (for `concat`) and to using the `row` channel (for `facet` and `repeat`).

<a id="concat" href="#concat">#</a>
<em>spec</em>.<b>concat</b>(<em>...value</em>)

A list of views to be concatenated.

<a id="config" href="#config">#</a>
<em>spec</em>.<b>config</b>(<em>value</em>)

Vega-Lite configuration object. This property can only be defined at the top-level of a specification.

<a id="data" href="#data">#</a>
<em>spec</em>.<b>data</b>(<em>data</em>)

The input [data](data) specification.

The behavior of this method depends on the argument type:

- If the argument is an <code>Array</code>, sets the <code>data.values</code> property.
- If the argument is an <code>Iterable</code>, sets the <code>data.values</code> property.
- If the argument is a <code>String</code>, sets the <code>data.url</code> property.
- Otherwise, sets the <code>data</code> property.

<a id="datasets" href="#datasets">#</a>
<em>spec</em>.<b>datasets</b>(<em>value</em>)

A global data store for named datasets. This is a mapping from names to inline datasets. This can be an array of objects or primitive values or a string. Arrays of primitive values are ingested as objects with a `data` property.

<a id="description" href="#description">#</a>
<em>spec</em>.<b>description</b>(<em>value</em>)

Description of this mark for commenting purpose.

<a id="encoding" href="#encoding">#</a>
<em>spec</em>.<b>encoding</b>(<em>value</em>)

A shared key-value mapping between encoding channels and definition of fields in the underlying layers.

<a id="facet" href="#facet">#</a>
<em>spec</em>.<b>facet</b>(<em>...values</em>)

Facet a chart into sub-plots by partitioning data values.

<a id="facet" href="#facet">#</a>
<em>spec</em>.<b>facet</b>(<em>value</em>)

Definition for how to facet the data. One of: 1) [a field definition for faceting the plot by one field](https://vega.github.io/vega-lite/docs/facet.html#field-def) 2) [An object that maps `row` and `column` channels to their field definitions](https://vega.github.io/vega-lite/docs/facet.html#mapping)

<a id="hconcat" href="#hconcat">#</a>
<em>spec</em>.<b>hconcat</b>(<em>...value</em>)

A list of views to be concatenated and put into a row.

<a id="height" href="#height">#</a>
<em>spec</em>.<b>height</b>(<em>value</em>)

The height of a visualization.

- For a plot with a continuous y-field, height should be a number.
- For a plot with either a discrete y-field or no y-field, height can be either a number indicating a fixed height or an object in the form of `{step: number}` defining the height per discrete step. (No y-field is equivalent to having one discrete step.)
- To enable responsive sizing on height, it should be set to `"container"`.

__Default value:__ Based on `config.view.continuousHeight` for a plot with a continuous y-field and `config.view.discreteHeight` otherwise.

__Note:__ For plots with [`row` and `column` channels](https://vega.github.io/vega-lite/docs/encoding.html#facet), this represents the height of a single view and the `"container"` option cannot be used.

__See also:__ [`height`](https://vega.github.io/vega-lite/docs/size.html) documentation.

<a id="layer" href="#layer">#</a>
<em>spec</em>.<b>layer</b>(<em>...value</em>)

Layer or single view specifications to be layered.

__Note__: Specifications inside `layer` cannot use `row` and `column` channels as layering facet specifications is not allowed. Instead, use the [facet operator](https://vega.github.io/vega-lite/docs/facet.html) and place a layer inside a facet.

<a id="mark" href="#mark">#</a>
<em>spec</em>.<b>mark</b>(<em>value</em>)

A string describing the mark type (one of `"bar"`, `"circle"`, `"square"`, `"tick"`, `"line"`, `"area"`, `"point"`, `"rule"`, `"geoshape"`, and `"text"`) or a [mark definition object](https://vega.github.io/vega-lite/docs/mark.html#mark-def).

<a id="name" href="#name">#</a>
<em>spec</em>.<b>name</b>(<em>value</em>)

Name of the visualization for later reference.

<a id="padding" href="#padding">#</a>
<em>spec</em>.<b>padding</b>(<em>value</em>)

The default visualization padding, in pixels, from the edge of the visualization canvas to the data rectangle. If a number, specifies padding for all sides. If an object, the value should have the format `{"left": 5, "top": 5, "right": 5, "bottom": 5}` to specify padding for each side of the visualization.

__Default value__: `5`

<a id="params" href="#params">#</a>
<em>spec</em>.<b>params</b>(<em>...params</em>)

An array of parameters that may be simple variables or more complex selections that map user input to data queries.

<a id="projection" href="#projection">#</a>
<em>spec</em>.<b>projection</b>(<em>value</em>)

An object defining properties of the geographic projection shared by underlying layers.

<a id="render" href="#render">#</a>
<em>spec</em>.<b>render</b>(<em>...values</em>)

Compile and render the Vega-Lite visualization and return the DOM element containing the Vega View.

<a id="repeat" href="#repeat">#</a>
<em>spec</em>.<b>repeat</b>(<em>...values</em>)

Repeat a chart template to generate multiple plots.

<a id="repeat" href="#repeat">#</a>
<em>spec</em>.<b>repeat</b>(<em>value</em>)

Definition for fields to be repeated. One of: 1) An array of fields to be repeated. If `"repeat"` is an array, the field can be referred to as `{"repeat": "repeat"}`. The repeated views are laid out in a wrapped row. You can set the number of columns to control the wrapping. 2) An object that maps `"row"` and/or `"column"` to the listed fields to be repeated along the particular orientations. The objects `{"repeat": "row"}` and `{"repeat": "column"}` can be used to refer to the repeated field respectively.

<a id="resolve" href="#resolve">#</a>
<em>spec</em>.<b>resolve</b>(<em>value</em>)

Scale, axis, and legend resolutions for view composition specifications.

<a id="spacing" href="#spacing">#</a>
<em>spec</em>.<b>spacing</b>(<em>value</em>)

The spacing in pixels between sub-views of the concat operator.

__Default value__: `10`

<a id="spec" href="#spec">#</a>
<em>spec</em>.<b>spec</b>(<em>value</em>)

A specification of the view that gets repeated.

<a id="title" href="#title">#</a>
<em>spec</em>.<b>title</b>(<em>value</em>)

Title for the plot.

<a id="toSpec" href="#toSpec">#</a>
<em>spec</em>.<b>toSpec</b>(<em>...values</em>)

Return the Vega-Lite specification as a JavaScript object.

<a id="toString" href="#toString">#</a>
<em>spec</em>.<b>toString</b>(<em>...values</em>)

Return the Vega-Lite specification as a JSON string.

<a id="toView" href="#toView">#</a>
<em>spec</em>.<b>toView</b>(<em>...values</em>)

Compile the Vega-Lite specification and return the resulting Vega View object.

<a id="transform" href="#transform">#</a>
<em>spec</em>.<b>transform</b>(<em>...transform</em>)

The data transformations to apply.

<a id="usermeta" href="#usermeta">#</a>
<em>spec</em>.<b>usermeta</b>(<em>value</em>)

Optional metadata that will be passed to Vega. This object is completely ignored by Vega and Vega-Lite and can be used for custom metadata.

<a id="vconcat" href="#vconcat">#</a>
<em>spec</em>.<b>vconcat</b>(<em>...value</em>)

A list of views to be concatenated and put into a column.

<a id="view" href="#view">#</a>
<em>spec</em>.<b>view</b>(<em>value</em>)

An object defining the view background's fill and stroke.

__Default value:__ none (transparent)

<a id="width" href="#width">#</a>
<em>spec</em>.<b>width</b>(<em>value</em>)

The width of a visualization.

- For a plot with a continuous x-field, width should be a number.
- For a plot with either a discrete x-field or no x-field, width can be either a number indicating a fixed width or an object in the form of `{step: number}` defining the width per discrete step. (No x-field is equivalent to having one discrete step.)
- To enable responsive sizing on width, it should be set to `"container"`.

__Default value:__ Based on `config.view.continuousWidth` for a plot with a continuous x-field and `config.view.discreteWidth` otherwise.

__Note:__ For plots with [`row` and `column` channels](https://vega.github.io/vega-lite/docs/encoding.html#facet), this represents the width of a single view and the `"container"` option cannot be used.

__See also:__ [`width`](https://vega.github.io/vega-lite/docs/size.html) documentation.

