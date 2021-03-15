vl.<b>mark</b>(<em>...mark</em>)

Create a new mark of unspecified type.

The behavior of this method depends on the argument type:

- If the argument is a <code>String</code>, sets the <code>type</code> property.
- Otherwise, sets the properties defined on the input argument(s), if provided.

## <code>mark</code> Method Overview

* <a href="#align">align</a>
* <a href="#autosize">autosize</a>
* <a href="#background">background</a>
* <a href="#bounds">bounds</a>
* <a href="#center">center</a>
* <a href="#config">config</a>
* <a href="#data">data</a>
* <a href="#datasets">datasets</a>
* <a href="#description">description</a>
* <a href="#encode">encode</a>
* <a href="#facet">facet</a>
* <a href="#height">height</a>
* <a href="#mark">mark</a>
* <a href="#markArc">markArc</a>
* <a href="#markArea">markArea</a>
* <a href="#markBar">markBar</a>
* <a href="#markBoxplot">markBoxplot</a>
* <a href="#markCircle">markCircle</a>
* <a href="#markErrorband">markErrorband</a>
* <a href="#markErrorbar">markErrorbar</a>
* <a href="#markGeoshape">markGeoshape</a>
* <a href="#markImage">markImage</a>
* <a href="#markLine">markLine</a>
* <a href="#markPoint">markPoint</a>
* <a href="#markRect">markRect</a>
* <a href="#markRule">markRule</a>
* <a href="#markSquare">markSquare</a>
* <a href="#markText">markText</a>
* <a href="#markTick">markTick</a>
* <a href="#markTrail">markTrail</a>
* <a href="#name">name</a>
* <a href="#padding">padding</a>
* <a href="#params">params</a>
* <a href="#project">project</a>
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
* <a href="#view">view</a>
* <a href="#width">width</a>

## <code>mark</code> API Reference

<a id="align" href="#align">#</a>
<em>mark</em>.<b>align</b>(<em>value</em>)

The alignment to apply to grid rows and columns. The supported string values are `"all"`, `"each"`, and `"none"`.

- For `"none"`, a flow layout will be used, in which adjacent subviews are simply placed one after the other. - For `"each"`, subviews will be aligned into a clean grid structure, but each row or column may be of variable size. - For `"all"`, subviews will be aligned and each row or column will be sized identically based on the maximum observed size. String values for this property will be applied to both grid rows and columns.

Alternatively, an object value of the form `{"row": string, "column": string}` can be used to supply different alignments for rows and columns.

__Default value:__ `"all"`.

<a id="autosize" href="#autosize">#</a>
<em>mark</em>.<b>autosize</b>(<em>value</em>)

How the visualization size should be determined. If a string, should be one of `"pad"`, `"fit"` or `"none"`. Object values can additionally specify parameters for content sizing and automatic resizing.

__Default value__: `pad`

<a id="background" href="#background">#</a>
<em>mark</em>.<b>background</b>(<em>value</em>)

CSS color property to use as the background of the entire view.

__Default value:__ `"white"`

<a id="bounds" href="#bounds">#</a>
<em>mark</em>.<b>bounds</b>(<em>value</em>)

The bounds calculation method to use for determining the extent of a sub-plot. One of `full` (the default) or `flush`.

- If set to `full`, the entire calculated bounds (including axes, title, and legend) will be used. - If set to `flush`, only the specified width and height values for the sub-view will be used. The `flush` setting can be useful when attempting to place sub-plots without axes or legends into a uniform grid structure.

__Default value:__ `"full"`

<a id="center" href="#center">#</a>
<em>mark</em>.<b>center</b>(<em>value</em>)

Boolean flag indicating if subviews should be centered relative to their respective rows or columns.

An object value of the form `{"row": boolean, "column": boolean}` can be used to supply different centering values for rows and columns.

__Default value:__ `false`

<a id="config" href="#config">#</a>
<em>mark</em>.<b>config</b>(<em>value</em>)

Vega-Lite configuration object. This property can only be defined at the top-level of a specification.

<a id="data" href="#data">#</a>
<em>mark</em>.<b>data</b>(<em>data</em>)

The input [data](data) specification.

The behavior of this method depends on the argument type:

- If the argument is an <code>Array</code>, sets the <code>data.values</code> property.
- If the argument is an <code>Iterable</code>, sets the <code>data.values</code> property.
- If the argument is a <code>String</code>, sets the <code>data.url</code> property.
- Otherwise, sets the <code>data</code> property.

<a id="datasets" href="#datasets">#</a>
<em>mark</em>.<b>datasets</b>(<em>value</em>)

A global data store for named datasets. This is a mapping from names to inline datasets. This can be an array of objects or primitive values or a string. Arrays of primitive values are ingested as objects with a `data` property.

<a id="description" href="#description">#</a>
<em>mark</em>.<b>description</b>(<em>value</em>)

Description of this mark for commenting purpose.

<a id="encode" href="#encode">#</a>
<em>mark</em>.<b>encode</b>(<em>...encoding</em>)

Specify visual encodings for the mark.

<a id="facet" href="#facet">#</a>
<em>mark</em>.<b>facet</b>(<em>...values</em>)

Facet a chart into sub-plots by partitioning data values.

<a id="height" href="#height">#</a>
<em>mark</em>.<b>height</b>(<em>value</em>)

The height of a visualization.

- For a plot with a continuous y-field, height should be a number. - For a plot with either a discrete y-field or no y-field, height can be either a number indicating a fixed height or an object in the form of `{step: number}` defining the height per discrete step. (No y-field is equivalent to having one discrete step.) - To enable responsive sizing on height, it should be set to `"container"`.

__Default value:__ Based on `config.view.continuousHeight` for a plot with a continuous y-field and `config.view.discreteHeight` otherwise.

__Note:__ For plots with [`row` and `column` channels](https://vega.github.io/vega-lite/docs/encoding.html#facet), this represents the height of a single view and the `"container"` option cannot be used.

__See also:__ [`height`](https://vega.github.io/vega-lite/docs/size.html) documentation.

<a id="mark" href="#mark">#</a>
<em>mark</em>.<b>mark</b>(<em>...mark</em>)

Set the mark type and default visual properties.

The behavior of this method depends on the argument type:

- If the argument is a <code>String</code>, sets the <code>mark.type</code> property.
- Otherwise, sets the <code>mark</code> property.

<a id="markArc" href="#markArc">#</a>
<em>mark</em>.<b>markArc</b>(<em>...mark</em>)

<a id="markArea" href="#markArea">#</a>
<em>mark</em>.<b>markArea</b>(<em>...mark</em>)

<a id="markBar" href="#markBar">#</a>
<em>mark</em>.<b>markBar</b>(<em>...mark</em>)

<a id="markBoxplot" href="#markBoxplot">#</a>
<em>mark</em>.<b>markBoxplot</b>(<em>...mark</em>)

<a id="markCircle" href="#markCircle">#</a>
<em>mark</em>.<b>markCircle</b>(<em>...mark</em>)

<a id="markErrorband" href="#markErrorband">#</a>
<em>mark</em>.<b>markErrorband</b>(<em>...mark</em>)

<a id="markErrorbar" href="#markErrorbar">#</a>
<em>mark</em>.<b>markErrorbar</b>(<em>...mark</em>)

<a id="markGeoshape" href="#markGeoshape">#</a>
<em>mark</em>.<b>markGeoshape</b>(<em>...mark</em>)

<a id="markImage" href="#markImage">#</a>
<em>mark</em>.<b>markImage</b>(<em>...mark</em>)

<a id="markLine" href="#markLine">#</a>
<em>mark</em>.<b>markLine</b>(<em>...mark</em>)

<a id="markPoint" href="#markPoint">#</a>
<em>mark</em>.<b>markPoint</b>(<em>...mark</em>)

<a id="markRect" href="#markRect">#</a>
<em>mark</em>.<b>markRect</b>(<em>...mark</em>)

<a id="markRule" href="#markRule">#</a>
<em>mark</em>.<b>markRule</b>(<em>...mark</em>)

<a id="markSquare" href="#markSquare">#</a>
<em>mark</em>.<b>markSquare</b>(<em>...mark</em>)

<a id="markText" href="#markText">#</a>
<em>mark</em>.<b>markText</b>(<em>...mark</em>)

<a id="markTick" href="#markTick">#</a>
<em>mark</em>.<b>markTick</b>(<em>...mark</em>)

<a id="markTrail" href="#markTrail">#</a>
<em>mark</em>.<b>markTrail</b>(<em>...mark</em>)

<a id="name" href="#name">#</a>
<em>mark</em>.<b>name</b>(<em>value</em>)

Name of the visualization for later reference.

<a id="padding" href="#padding">#</a>
<em>mark</em>.<b>padding</b>(<em>value</em>)

The default visualization padding, in pixels, from the edge of the visualization canvas to the data rectangle. If a number, specifies padding for all sides. If an object, the value should have the format `{"left": 5, "top": 5, "right": 5, "bottom": 5}` to specify padding for each side of the visualization.

__Default value__: `5`

<a id="params" href="#params">#</a>
<em>mark</em>.<b>params</b>(<em>...params</em>)

An array of parameters that may be simple variables or more complex selections that map user input to data queries.

<a id="project" href="#project">#</a>
<em>mark</em>.<b>project</b>(<em>projection</em>)

The cartographic [projection](projection) to apply to geographical data.

<a id="render" href="#render">#</a>
<em>mark</em>.<b>render</b>(<em>...values</em>)

Compile and render the Vega-Lite visualization and return the DOM element containing the Vega View.

<a id="repeat" href="#repeat">#</a>
<em>mark</em>.<b>repeat</b>(<em>...values</em>)

Repeat a chart template to generate multiple plots.

<a id="resolve" href="#resolve">#</a>
<em>mark</em>.<b>resolve</b>(<em>value</em>)

Scale, axis, and legend resolutions for view composition specifications.

<a id="spacing" href="#spacing">#</a>
<em>mark</em>.<b>spacing</b>(<em>value</em>)

The spacing in pixels between sub-views of the composition operator. An object of the form `{"row": number, "column": number}` can be used to set different spacing values for rows and columns.

__Default value__: Depends on `"spacing"` property of [the view composition configuration](https://vega.github.io/vega-lite/docs/config.html#view-config) (`20` by default)

<a id="title" href="#title">#</a>
<em>mark</em>.<b>title</b>(<em>value</em>)

Title for the plot.

<a id="toSpec" href="#toSpec">#</a>
<em>mark</em>.<b>toSpec</b>(<em>...values</em>)

Return the Vega-Lite specification as a JavaScript object.

<a id="toString" href="#toString">#</a>
<em>mark</em>.<b>toString</b>(<em>...values</em>)

Return the Vega-Lite specification as a JSON string.

<a id="toView" href="#toView">#</a>
<em>mark</em>.<b>toView</b>(<em>...values</em>)

Compile the Vega-Lite specification and return the resulting Vega View object.

<a id="transform" href="#transform">#</a>
<em>mark</em>.<b>transform</b>(<em>...transform</em>)

The data transformations to apply.

<a id="usermeta" href="#usermeta">#</a>
<em>mark</em>.<b>usermeta</b>(<em>value</em>)

Optional metadata that will be passed to Vega. This object is completely ignored by Vega and Vega-Lite and can be used for custom metadata.

<a id="view" href="#view">#</a>
<em>mark</em>.<b>view</b>(<em>value</em>)

An object defining the view background's fill and stroke.

__Default value:__ none (transparent)

<a id="width" href="#width">#</a>
<em>mark</em>.<b>width</b>(<em>value</em>)

The width of a visualization.

- For a plot with a continuous x-field, width should be a number. - For a plot with either a discrete x-field or no x-field, width can be either a number indicating a fixed width or an object in the form of `{step: number}` defining the width per discrete step. (No x-field is equivalent to having one discrete step.) - To enable responsive sizing on width, it should be set to `"container"`.

__Default value:__ Based on `config.view.continuousWidth` for a plot with a continuous x-field and `config.view.discreteWidth` otherwise.

__Note:__ For plots with [`row` and `column` channels](https://vega.github.io/vega-lite/docs/encoding.html#facet), this represents the width of a single view and the `"container"` option cannot be used.

__See also:__ [`width`](https://vega.github.io/vega-lite/docs/size.html) documentation.

