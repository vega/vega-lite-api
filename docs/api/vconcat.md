vl.<b>vconcat</b>(<em>...vconcat</em>)

Vertically concatenate charts.

## <code>vconcat</code> Method Overview

* <a href="#autosize">autosize</a>
* <a href="#background">background</a>
* <a href="#bounds">bounds</a>
* <a href="#center">center</a>
* <a href="#config">config</a>
* <a href="#data">data</a>
* <a href="#datasets">datasets</a>
* <a href="#description">description</a>
* <a href="#facet">facet</a>
* <a href="#name">name</a>
* <a href="#padding">padding</a>
* <a href="#params">params</a>
* <a href="#render">render</a>
* <a href="#repeat">repeat</a>
* <a href="#resolve">resolve</a>
* <a href="#spacing">spacing</a>
* <a href="#title">title</a>
* <a href="#toSpec">toSpec</a>
* <a href="#toString">toString</a>
* <a href="#toView">toView</a>
* <a href="#transform">transform</a>
* <a href="#usermeta">usermeta</a>
* <a href="#vconcat">vconcat</a>

## <code>vconcat</code> API Reference

<a id="autosize" href="#autosize">#</a>
<em>vconcat</em>.<b>autosize</b>(<em>value</em>)

How the visualization size should be determined. If a string, should be one of `"pad"`, `"fit"` or `"none"`. Object values can additionally specify parameters for content sizing and automatic resizing.

__Default value__: `pad`

<a id="background" href="#background">#</a>
<em>vconcat</em>.<b>background</b>(<em>value</em>)

CSS color property to use as the background of the entire view.

__Default value:__ `"white"`

<a id="bounds" href="#bounds">#</a>
<em>vconcat</em>.<b>bounds</b>(<em>value</em>)

The bounds calculation method to use for determining the extent of a sub-plot. One of `full` (the default) or `flush`.

- If set to `full`, the entire calculated bounds (including axes, title, and legend) will be used. - If set to `flush`, only the specified width and height values for the sub-view will be used. The `flush` setting can be useful when attempting to place sub-plots without axes or legends into a uniform grid structure.

__Default value:__ `"full"`

<a id="center" href="#center">#</a>
<em>vconcat</em>.<b>center</b>(<em>value</em>)

Boolean flag indicating if subviews should be centered relative to their respective rows or columns.

__Default value:__ `false`

<a id="config" href="#config">#</a>
<em>vconcat</em>.<b>config</b>(<em>value</em>)

Vega-Lite configuration object. This property can only be defined at the top-level of a specification.

<a id="data" href="#data">#</a>
<em>vconcat</em>.<b>data</b>(<em>data</em>)

The input [data](data) specification.

The behavior of this method depends on the argument type:

- If the argument is an <code>Array</code>, sets the <code>data.values</code> property.
- If the argument is an <code>Iterable</code>, sets the <code>data.values</code> property.
- If the argument is a <code>String</code>, sets the <code>data.url</code> property.
- Otherwise, sets the <code>data</code> property.

<a id="datasets" href="#datasets">#</a>
<em>vconcat</em>.<b>datasets</b>(<em>value</em>)

A global data store for named datasets. This is a mapping from names to inline datasets. This can be an array of objects or primitive values or a string. Arrays of primitive values are ingested as objects with a `data` property.

<a id="description" href="#description">#</a>
<em>vconcat</em>.<b>description</b>(<em>value</em>)

Description of this mark for commenting purpose.

<a id="facet" href="#facet">#</a>
<em>vconcat</em>.<b>facet</b>(<em>...values</em>)

Facet a chart into sub-plots by partitioning data values.

<a id="name" href="#name">#</a>
<em>vconcat</em>.<b>name</b>(<em>value</em>)

Name of the visualization for later reference.

<a id="padding" href="#padding">#</a>
<em>vconcat</em>.<b>padding</b>(<em>value</em>)

The default visualization padding, in pixels, from the edge of the visualization canvas to the data rectangle. If a number, specifies padding for all sides. If an object, the value should have the format `{"left": 5, "top": 5, "right": 5, "bottom": 5}` to specify padding for each side of the visualization.

__Default value__: `5`

<a id="params" href="#params">#</a>
<em>vconcat</em>.<b>params</b>(<em>...params</em>)

An array of parameters that may be simple variables or more complex selections that map user input to data queries.

<a id="render" href="#render">#</a>
<em>vconcat</em>.<b>render</b>(<em>...values</em>)

Compile and render the Vega-Lite visualization and return the DOM element containing the Vega View.

<a id="repeat" href="#repeat">#</a>
<em>vconcat</em>.<b>repeat</b>(<em>...values</em>)

Repeat a chart template to generate multiple plots.

<a id="resolve" href="#resolve">#</a>
<em>vconcat</em>.<b>resolve</b>(<em>value</em>)

Scale, axis, and legend resolutions for view composition specifications.

<a id="spacing" href="#spacing">#</a>
<em>vconcat</em>.<b>spacing</b>(<em>value</em>)

The spacing in pixels between sub-views of the concat operator.

__Default value__: `10`

<a id="title" href="#title">#</a>
<em>vconcat</em>.<b>title</b>(<em>value</em>)

Title for the plot.

<a id="toSpec" href="#toSpec">#</a>
<em>vconcat</em>.<b>toSpec</b>(<em>...values</em>)

Return the Vega-Lite specification as a JavaScript object.

<a id="toString" href="#toString">#</a>
<em>vconcat</em>.<b>toString</b>(<em>...values</em>)

Return the Vega-Lite specification as a JSON string.

<a id="toView" href="#toView">#</a>
<em>vconcat</em>.<b>toView</b>(<em>...values</em>)

Compile the Vega-Lite specification and return the resulting Vega View object.

<a id="transform" href="#transform">#</a>
<em>vconcat</em>.<b>transform</b>(<em>...transform</em>)

The data transformations to apply.

<a id="usermeta" href="#usermeta">#</a>
<em>vconcat</em>.<b>usermeta</b>(<em>value</em>)

Optional metadata that will be passed to Vega. This object is completely ignored by Vega and Vega-Lite and can be used for custom metadata.

<a id="vconcat" href="#vconcat">#</a>
<em>vconcat</em>.<b>vconcat</b>(<em>...value</em>)

A list of views to be concatenated and put into a column.

