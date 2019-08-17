# hconcat

vl.<b>hconcat</b>(<em>...hconcat</em>)

Horizontally concatenate charts.

## <code>hconcat</code> Method Overview

* <em>hconcat</em>.<a href="#autosize">autosize</a>
* <em>hconcat</em>.<a href="#background">background</a>
* <em>hconcat</em>.<a href="#bounds">bounds</a>
* <em>hconcat</em>.<a href="#center">center</a>
* <em>hconcat</em>.<a href="#config">config</a>
* <em>hconcat</em>.<a href="#data">data</a>
* <em>hconcat</em>.<a href="#datasets">datasets</a>
* <em>hconcat</em>.<a href="#description">description</a>
* <em>hconcat</em>.<a href="#hconcat">hconcat</a>
* <em>hconcat</em>.<a href="#name">name</a>
* <em>hconcat</em>.<a href="#padding">padding</a>
* <em>hconcat</em>.<a href="#render">render</a>
* <em>hconcat</em>.<a href="#repeat">repeat</a>
* <em>hconcat</em>.<a href="#resolve">resolve</a>
* <em>hconcat</em>.<a href="#spacing">spacing</a>
* <em>hconcat</em>.<a href="#title">title</a>
* <em>hconcat</em>.<a href="#toSpec">toSpec</a>
* <em>hconcat</em>.<a href="#toString">toString</a>
* <em>hconcat</em>.<a href="#toView">toView</a>
* <em>hconcat</em>.<a href="#transform">transform</a>
* <em>hconcat</em>.<a href="#usermeta">usermeta</a>

## <code>hconcat</code> API Reference

<a name="autosize">#</a>
<em>hconcat</em>.<b>autosize</b>(<em>value</em>)

Sets how the visualization size should be determined. If a string, should be one of `"pad"`, `"fit"` or `"none"`.
Object values can additionally specify parameters for content sizing and automatic resizing.
`"fit"` is only supported for single and layered views that don't use `rangeStep`.

__Default value__: `pad`

<a name="background">#</a>
<em>hconcat</em>.<b>background</b>(<em>value</em>)

CSS color property to use as the background of the entire view.

__Default value:__ none (transparent)

<a name="bounds">#</a>
<em>hconcat</em>.<b>bounds</b>(<em>value</em>)

The bounds calculation method to use for determining the extent of a sub-plot. One of `full` (the default) or `flush`.

- If set to `full`, the entire calculated bounds (including axes, title, and legend) will be used.
- If set to `flush`, only the specified width and height values for the sub-view will be used. The `flush` setting can be useful when attempting to place sub-plots without axes or legends into a uniform grid structure.

__Default value:__ `"full"`

<a name="center">#</a>
<em>hconcat</em>.<b>center</b>(<em>value</em>)

Boolean flag indicating if subviews should be centered relative to their respective rows or columns.

__Default value:__ `false`

<a name="config">#</a>
<em>hconcat</em>.<b>config</b>(<em>value</em>)

Vega-Lite configuration object.  This property can only be defined at the top-level of a specification.

<a name="data">#</a>
<em>hconcat</em>.<b>data</b>(<em>data</em>)

The input [[data]] specification.

<a name="datasets">#</a>
<em>hconcat</em>.<b>datasets</b>(<em>value</em>)

A global data store for named datasets. This is a mapping from names to inline datasets.
This can be an array of objects or primitive values or a string. Arrays of primitive values are ingested as objects with a `data` property.

<a name="description">#</a>
<em>hconcat</em>.<b>description</b>(<em>value</em>)

Description of this mark for commenting purpose.

<a name="hconcat">#</a>
<em>hconcat</em>.<b>hconcat</b>(<em>...value</em>)

A list of views to be concatenated and put into a row.

<a name="name">#</a>
<em>hconcat</em>.<b>name</b>(<em>value</em>)

Name of the visualization for later reference.

<a name="padding">#</a>
<em>hconcat</em>.<b>padding</b>(<em>value</em>)

The default visualization padding, in pixels, from the edge of the visualization canvas to the data rectangle.  If a number, specifies padding for all sides.
If an object, the value should have the format `{"left": 5, "top": 5, "right": 5, "bottom": 5}` to specify padding for each side of the visualization.

__Default value__: `5`

<a name="render">#</a>
<em>hconcat</em>.<b>render</b>(<em>...values</em>)

Compile and render the Vega-Lite visualization and return the DOM element containing the Vega View.

<a name="repeat">#</a>
<em>hconcat</em>.<b>repeat</b>(<em>...values</em>)

Repeat a chart template to generate multiple plots.

<a name="resolve">#</a>
<em>hconcat</em>.<b>resolve</b>(<em>value</em>)

Scale, axis, and legend resolutions for view composition specifications.

<a name="spacing">#</a>
<em>hconcat</em>.<b>spacing</b>(<em>value</em>)

The spacing in pixels between sub-views of the concat operator.

__Default value__: `10`

<a name="title">#</a>
<em>hconcat</em>.<b>title</b>(<em>value</em>)

Title for the plot.

<a name="toSpec">#</a>
<em>hconcat</em>.<b>toSpec</b>(<em>...values</em>)

Return the Vega-Lite specification as a JavaScript object.

<a name="toString">#</a>
<em>hconcat</em>.<b>toString</b>(<em>...values</em>)

Return the Vega-Lite specification as a JSON string.

<a name="toView">#</a>
<em>hconcat</em>.<b>toView</b>(<em>...values</em>)

Compile the Vega-Lite specification and return the resulting Vega View object.

<a name="transform">#</a>
<em>hconcat</em>.<b>transform</b>(<em>...transform</em>)

The data transformations to apply.

<a name="usermeta">#</a>
<em>hconcat</em>.<b>usermeta</b>(<em>value</em>)

Optional metadata that will be passed to Vega.
This object is completely ignored by Vega and Vega-Lite and can be used for custom metadata.

