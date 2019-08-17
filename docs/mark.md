# mark

vl.<b>mark</b>(<em>...mark</em>)

Create a new mark of unspecified type.

## <code>mark</code> Method Overview

* <em>mark</em>.<a href="#align">align</a>
* <em>mark</em>.<a href="#autosize">autosize</a>
* <em>mark</em>.<a href="#background">background</a>
* <em>mark</em>.<a href="#bounds">bounds</a>
* <em>mark</em>.<a href="#center">center</a>
* <em>mark</em>.<a href="#columns">columns</a>
* <em>mark</em>.<a href="#config">config</a>
* <em>mark</em>.<a href="#data">data</a>
* <em>mark</em>.<a href="#datasets">datasets</a>
* <em>mark</em>.<a href="#description">description</a>
* <em>mark</em>.<a href="#encode">encode</a>
* <em>mark</em>.<a href="#facet">facet</a>
* <em>mark</em>.<a href="#height">height</a>
* <em>mark</em>.<a href="#mark">mark</a>
* <em>mark</em>.<a href="#markArea">markArea</a>
* <em>mark</em>.<a href="#markBar">markBar</a>
* <em>mark</em>.<a href="#markBoxplot">markBoxplot</a>
* <em>mark</em>.<a href="#markCircle">markCircle</a>
* <em>mark</em>.<a href="#markErrorband">markErrorband</a>
* <em>mark</em>.<a href="#markErrorbar">markErrorbar</a>
* <em>mark</em>.<a href="#markGeoshape">markGeoshape</a>
* <em>mark</em>.<a href="#markLine">markLine</a>
* <em>mark</em>.<a href="#markPoint">markPoint</a>
* <em>mark</em>.<a href="#markRect">markRect</a>
* <em>mark</em>.<a href="#markRule">markRule</a>
* <em>mark</em>.<a href="#markSquare">markSquare</a>
* <em>mark</em>.<a href="#markText">markText</a>
* <em>mark</em>.<a href="#markTick">markTick</a>
* <em>mark</em>.<a href="#markTrail">markTrail</a>
* <em>mark</em>.<a href="#name">name</a>
* <em>mark</em>.<a href="#padding">padding</a>
* <em>mark</em>.<a href="#project">project</a>
* <em>mark</em>.<a href="#render">render</a>
* <em>mark</em>.<a href="#repeat">repeat</a>
* <em>mark</em>.<a href="#resolve">resolve</a>
* <em>mark</em>.<a href="#select">select</a>
* <em>mark</em>.<a href="#spacing">spacing</a>
* <em>mark</em>.<a href="#title">title</a>
* <em>mark</em>.<a href="#toSpec">toSpec</a>
* <em>mark</em>.<a href="#toString">toString</a>
* <em>mark</em>.<a href="#toView">toView</a>
* <em>mark</em>.<a href="#transform">transform</a>
* <em>mark</em>.<a href="#usermeta">usermeta</a>
* <em>mark</em>.<a href="#view">view</a>
* <em>mark</em>.<a href="#width">width</a>

## <code>mark</code> API Reference

<a name="align">#</a>
<em>mark</em>.<b>align</b>(<em>value</em>)

The alignment to apply to grid rows and columns.
The supported string values are `"all"`, `"each"`, and `"none"`.

- For `"none"`, a flow layout will be used, in which adjacent subviews are simply placed one after the other.
- For `"each"`, subviews will be aligned into a clean grid structure, but each row or column may be of variable size.
- For `"all"`, subviews will be aligned and each row or column will be sized identically based on the maximum observed size. String values for this property will be applied to both grid rows and columns.

Alternatively, an object value of the form `{"row": string, "column": string}` can be used to supply different alignments for rows and columns.

__Default value:__ `"all"`.

<a name="autosize">#</a>
<em>mark</em>.<b>autosize</b>(<em>value</em>)

Sets how the visualization size should be determined. If a string, should be one of `"pad"`, `"fit"` or `"none"`.
Object values can additionally specify parameters for content sizing and automatic resizing.
`"fit"` is only supported for single and layered views that don't use `rangeStep`.

__Default value__: `pad`

<a name="background">#</a>
<em>mark</em>.<b>background</b>(<em>value</em>)

CSS color property to use as the background of the entire view.

__Default value:__ none (transparent)

<a name="bounds">#</a>
<em>mark</em>.<b>bounds</b>(<em>value</em>)

The bounds calculation method to use for determining the extent of a sub-plot. One of `full` (the default) or `flush`.

- If set to `full`, the entire calculated bounds (including axes, title, and legend) will be used.
- If set to `flush`, only the specified width and height values for the sub-view will be used. The `flush` setting can be useful when attempting to place sub-plots without axes or legends into a uniform grid structure.

__Default value:__ `"full"`

<a name="center">#</a>
<em>mark</em>.<b>center</b>(<em>value</em>)

Boolean flag indicating if subviews should be centered relative to their respective rows or columns.

An object value of the form `{"row": boolean, "column": boolean}` can be used to supply different centering values for rows and columns.

__Default value:__ `false`

<a name="columns">#</a>
<em>mark</em>.<b>columns</b>(<em>value</em>)

The number of columns to include in the view composition layout.

__Default value__: `undefined` -- An infinite number of columns (a single row) will be assumed. This is equivalent to
`hconcat` (for `concat`) and to using the `column` channel (for `facet` and `repeat`).

__Note__:

1) This property is only for:
- the general (wrappable) `concat` operator (not `hconcat`/`vconcat`)
- the `facet` and `repeat` operator with one field/repetition definition (without row/column nesting)

2) Setting the `columns` to `1` is equivalent to `vconcat` (for `concat`) and to using the `row` channel (for `facet` and `repeat`).

<a name="config">#</a>
<em>mark</em>.<b>config</b>(<em>value</em>)

Vega-Lite configuration object.  This property can only be defined at the top-level of a specification.

<a name="data">#</a>
<em>mark</em>.<b>data</b>(<em>data</em>)

The input [[data]] specification.

<a name="datasets">#</a>
<em>mark</em>.<b>datasets</b>(<em>value</em>)

A global data store for named datasets. This is a mapping from names to inline datasets.
This can be an array of objects or primitive values or a string. Arrays of primitive values are ingested as objects with a `data` property.

<a name="description">#</a>
<em>mark</em>.<b>description</b>(<em>value</em>)

Description of this mark for commenting purpose.

<a name="encode">#</a>
<em>mark</em>.<b>encode</b>(<em>...encoding</em>)

Specify visual encodings for the mark.

<a name="facet">#</a>
<em>mark</em>.<b>facet</b>(<em>...values</em>)

Facet a chart into sub-plots by partitioning data values.

<a name="height">#</a>
<em>mark</em>.<b>height</b>(<em>value</em>)

The height of a visualization.

__Default value:__
- If a view's [`autosize`](https://vega.github.io/vega-lite/docs/size.html#autosize) type is `"fit"` or its y-channel has a [continuous scale](https://vega.github.io/vega-lite/docs/scale.html#continuous), the height will be the value of [`config.view.height`](https://vega.github.io/vega-lite/docs/spec.html#config).
- For y-axis with a band or point scale: if [`rangeStep`](https://vega.github.io/vega-lite/docs/scale.html#band) is a numeric value or unspecified, the height is [determined by the range step, paddings, and the cardinality of the field mapped to y-channel](https://vega.github.io/vega-lite/docs/scale.html#band). Otherwise, if the `rangeStep` is `null`, the height will be the value of [`config.view.height`](https://vega.github.io/vega-lite/docs/spec.html#config).
- If no field is mapped to `y` channel, the `height` will be the value of `rangeStep`.

__Note__: For plots with [`row` and `column` channels](https://vega.github.io/vega-lite/docs/encoding.html#facet), this represents the height of a single view.

__See also:__ The documentation for [width and height](https://vega.github.io/vega-lite/docs/size.html) contains more examples.

<a name="mark">#</a>
<em>mark</em>.<b>mark</b>(<em>...mark</em>)

Set the mark type and default visual properties.

<a name="markArea">#</a>
<em>mark</em>.<b>markArea</b>(<em>...mark</em>)

<a name="markBar">#</a>
<em>mark</em>.<b>markBar</b>(<em>...mark</em>)

<a name="markBoxplot">#</a>
<em>mark</em>.<b>markBoxplot</b>(<em>...mark</em>)

<a name="markCircle">#</a>
<em>mark</em>.<b>markCircle</b>(<em>...mark</em>)

<a name="markErrorband">#</a>
<em>mark</em>.<b>markErrorband</b>(<em>...mark</em>)

<a name="markErrorbar">#</a>
<em>mark</em>.<b>markErrorbar</b>(<em>...mark</em>)

<a name="markGeoshape">#</a>
<em>mark</em>.<b>markGeoshape</b>(<em>...mark</em>)

<a name="markLine">#</a>
<em>mark</em>.<b>markLine</b>(<em>...mark</em>)

<a name="markPoint">#</a>
<em>mark</em>.<b>markPoint</b>(<em>...mark</em>)

<a name="markRect">#</a>
<em>mark</em>.<b>markRect</b>(<em>...mark</em>)

<a name="markRule">#</a>
<em>mark</em>.<b>markRule</b>(<em>...mark</em>)

<a name="markSquare">#</a>
<em>mark</em>.<b>markSquare</b>(<em>...mark</em>)

<a name="markText">#</a>
<em>mark</em>.<b>markText</b>(<em>...mark</em>)

<a name="markTick">#</a>
<em>mark</em>.<b>markTick</b>(<em>...mark</em>)

<a name="markTrail">#</a>
<em>mark</em>.<b>markTrail</b>(<em>...mark</em>)

<a name="name">#</a>
<em>mark</em>.<b>name</b>(<em>value</em>)

Name of the visualization for later reference.

<a name="padding">#</a>
<em>mark</em>.<b>padding</b>(<em>value</em>)

The default visualization padding, in pixels, from the edge of the visualization canvas to the data rectangle.  If a number, specifies padding for all sides.
If an object, the value should have the format `{"left": 5, "top": 5, "right": 5, "bottom": 5}` to specify padding for each side of the visualization.

__Default value__: `5`

<a name="project">#</a>
<em>mark</em>.<b>project</b>(<em>projection</em>)

The cartographic [[projection]] to apply to geographical data.

<a name="render">#</a>
<em>mark</em>.<b>render</b>(<em>...values</em>)

Compile and render the Vega-Lite visualization and return the DOM element containing the Vega View.

<a name="repeat">#</a>
<em>mark</em>.<b>repeat</b>(<em>...values</em>)

Repeat a chart template to generate multiple plots.

<a name="resolve">#</a>
<em>mark</em>.<b>resolve</b>(<em>value</em>)

Scale, axis, and legend resolutions for view composition specifications.

<a name="select">#</a>
<em>mark</em>.<b>select</b>(<em>...selection</em>)

Register interactive selections on the mark.

<a name="spacing">#</a>
<em>mark</em>.<b>spacing</b>(<em>value</em>)

The spacing in pixels between sub-views of the composition operator.
An object of the form `{"row": number, "column": number}` can be used to set
different spacing values for rows and columns.

__Default value__: Depends on `"spacing"` property of [the view composition configuration](https://vega.github.io/vega-lite/docs/config.html#view-config) (`20` by default)

<a name="title">#</a>
<em>mark</em>.<b>title</b>(<em>value</em>)

Title for the plot.

<a name="toSpec">#</a>
<em>mark</em>.<b>toSpec</b>(<em>...values</em>)

Return the Vega-Lite specification as a JavaScript object.

<a name="toString">#</a>
<em>mark</em>.<b>toString</b>(<em>...values</em>)

Return the Vega-Lite specification as a JSON string.

<a name="toView">#</a>
<em>mark</em>.<b>toView</b>(<em>...values</em>)

Compile the Vega-Lite specification and return the resulting Vega View object.

<a name="transform">#</a>
<em>mark</em>.<b>transform</b>(<em>...transform</em>)

The data transformations to apply.

<a name="usermeta">#</a>
<em>mark</em>.<b>usermeta</b>(<em>value</em>)

Optional metadata that will be passed to Vega.
This object is completely ignored by Vega and Vega-Lite and can be used for custom metadata.

<a name="view">#</a>
<em>mark</em>.<b>view</b>(<em>value</em>)

An object defining the view background's fill and stroke.

__Default value:__ none (transparent)

<a name="width">#</a>
<em>mark</em>.<b>width</b>(<em>value</em>)

The width of a visualization.

__Default value:__ This will be determined by the following rules:

- If a view's [`autosize`](https://vega.github.io/vega-lite/docs/size.html#autosize) type is `"fit"` or its x-channel has a [continuous scale](https://vega.github.io/vega-lite/docs/scale.html#continuous), the width will be the value of [`config.view.width`](https://vega.github.io/vega-lite/docs/spec.html#config).
- For x-axis with a band or point scale: if [`rangeStep`](https://vega.github.io/vega-lite/docs/scale.html#band) is a numeric value or unspecified, the width is [determined by the range step, paddings, and the cardinality of the field mapped to x-channel](https://vega.github.io/vega-lite/docs/scale.html#band).   Otherwise, if the `rangeStep` is `null`, the width will be the value of [`config.view.width`](https://vega.github.io/vega-lite/docs/spec.html#config).
- If no field is mapped to `x` channel, the `width` will be the value of [`config.scale.textXRangeStep`](https://vega.github.io/vega-lite/docs/size.html#default-width-and-height) for `text` mark and the value of `rangeStep` for other marks.

__Note:__ For plots with [`row` and `column` channels](https://vega.github.io/vega-lite/docs/encoding.html#facet), this represents the width of a single view.

__See also:__ The documentation for [width and height](https://vega.github.io/vega-lite/docs/size.html) contains more examples.

