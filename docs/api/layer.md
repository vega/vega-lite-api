vl.<b>layer</b>(<em>...layer</em>)

Create a new layered chart.

## <code>layer</code> Method Overview

* <a href="#autosize">autosize</a>
* <a href="#background">background</a>
* <a href="#config">config</a>
* <a href="#data">data</a>
* <a href="#datasets">datasets</a>
* <a href="#description">description</a>
* <a href="#encode">encode</a>
* <a href="#facet">facet</a>
* <a href="#height">height</a>
* <a href="#layer">layer</a>
* <a href="#name">name</a>
* <a href="#padding">padding</a>
* <a href="#params">params</a>
* <a href="#project">project</a>
* <a href="#render">render</a>
* <a href="#repeat">repeat</a>
* <a href="#resolve">resolve</a>
* <a href="#title">title</a>
* <a href="#toSpec">toSpec</a>
* <a href="#toString">toString</a>
* <a href="#toView">toView</a>
* <a href="#transform">transform</a>
* <a href="#usermeta">usermeta</a>
* <a href="#view">view</a>
* <a href="#width">width</a>

## <code>layer</code> API Reference

<a id="autosize" href="#autosize">#</a>
<em>layer</em>.<b>autosize</b>(<em>value</em>)

How the visualization size should be determined. If a string, should be one of `"pad"`, `"fit"` or `"none"`. Object values can additionally specify parameters for content sizing and automatic resizing.

__Default value__: `pad`

<a id="background" href="#background">#</a>
<em>layer</em>.<b>background</b>(<em>value</em>)

CSS color property to use as the background of the entire view.

__Default value:__ `"white"`

<a id="config" href="#config">#</a>
<em>layer</em>.<b>config</b>(<em>value</em>)

Vega-Lite configuration object. This property can only be defined at the top-level of a specification.

<a id="data" href="#data">#</a>
<em>layer</em>.<b>data</b>(<em>data</em>)

The input [data](data) specification.

The behavior of this method depends on the argument type:

- If the argument is an <code>Array</code>, sets the <code>data.values</code> property.
- If the argument is an <code>Iterable</code>, sets the <code>data.values</code> property.
- If the argument is a <code>String</code>, sets the <code>data.url</code> property.
- Otherwise, sets the <code>data</code> property.

<a id="datasets" href="#datasets">#</a>
<em>layer</em>.<b>datasets</b>(<em>value</em>)

A global data store for named datasets. This is a mapping from names to inline datasets. This can be an array of objects or primitive values or a string. Arrays of primitive values are ingested as objects with a `data` property.

<a id="description" href="#description">#</a>
<em>layer</em>.<b>description</b>(<em>value</em>)

Description of this mark for commenting purpose.

<a id="encode" href="#encode">#</a>
<em>layer</em>.<b>encode</b>(<em>...encoding</em>)

Specify visual encodings for the mark.

<a id="facet" href="#facet">#</a>
<em>layer</em>.<b>facet</b>(<em>...values</em>)

Facet a chart into sub-plots by partitioning data values.

<a id="height" href="#height">#</a>
<em>layer</em>.<b>height</b>(<em>value</em>)

The height of a visualization.

- For a plot with a continuous y-field, height should be a number. - For a plot with either a discrete y-field or no y-field, height can be either a number indicating a fixed height or an object in the form of `{step: number}` defining the height per discrete step. (No y-field is equivalent to having one discrete step.) - To enable responsive sizing on height, it should be set to `"container"`.

__Default value:__ Based on `config.view.continuousHeight` for a plot with a continuous y-field and `config.view.discreteHeight` otherwise.

__Note:__ For plots with [`row` and `column` channels](https://vega.github.io/vega-lite/docs/encoding.html#facet), this represents the height of a single view and the `"container"` option cannot be used.

__See also:__ [`height`](https://vega.github.io/vega-lite/docs/size.html) documentation.

<a id="layer" href="#layer">#</a>
<em>layer</em>.<b>layer</b>(<em>...value</em>)

Layer or single view specifications to be layered.

__Note__: Specifications inside `layer` cannot use `row` and `column` channels as layering facet specifications is not allowed. Instead, use the [facet operator](https://vega.github.io/vega-lite/docs/facet.html) and place a layer inside a facet.

<a id="name" href="#name">#</a>
<em>layer</em>.<b>name</b>(<em>value</em>)

Name of the visualization for later reference.

<a id="padding" href="#padding">#</a>
<em>layer</em>.<b>padding</b>(<em>value</em>)

The default visualization padding, in pixels, from the edge of the visualization canvas to the data rectangle. If a number, specifies padding for all sides. If an object, the value should have the format `{"left": 5, "top": 5, "right": 5, "bottom": 5}` to specify padding for each side of the visualization.

__Default value__: `5`

<a id="params" href="#params">#</a>
<em>layer</em>.<b>params</b>(<em>...params</em>)

An array of parameters that may be simple variables or more complex selections that map user input to data queries.

<a id="project" href="#project">#</a>
<em>layer</em>.<b>project</b>(<em>projection</em>)

The cartographic [projection](projection) to apply to geographical data.

<a id="render" href="#render">#</a>
<em>layer</em>.<b>render</b>(<em>...values</em>)

Compile and render the Vega-Lite visualization and return the DOM element containing the Vega View.

<a id="repeat" href="#repeat">#</a>
<em>layer</em>.<b>repeat</b>(<em>...values</em>)

Repeat a chart template to generate multiple plots.

<a id="resolve" href="#resolve">#</a>
<em>layer</em>.<b>resolve</b>(<em>value</em>)

Scale, axis, and legend resolutions for view composition specifications.

<a id="title" href="#title">#</a>
<em>layer</em>.<b>title</b>(<em>value</em>)

Title for the plot.

<a id="toSpec" href="#toSpec">#</a>
<em>layer</em>.<b>toSpec</b>(<em>...values</em>)

Return the Vega-Lite specification as a JavaScript object.

<a id="toString" href="#toString">#</a>
<em>layer</em>.<b>toString</b>(<em>...values</em>)

Return the Vega-Lite specification as a JSON string.

<a id="toView" href="#toView">#</a>
<em>layer</em>.<b>toView</b>(<em>...values</em>)

Compile the Vega-Lite specification and return the resulting Vega View object.

<a id="transform" href="#transform">#</a>
<em>layer</em>.<b>transform</b>(<em>...transform</em>)

The data transformations to apply.

<a id="usermeta" href="#usermeta">#</a>
<em>layer</em>.<b>usermeta</b>(<em>value</em>)

Optional metadata that will be passed to Vega. This object is completely ignored by Vega and Vega-Lite and can be used for custom metadata.

<a id="view" href="#view">#</a>
<em>layer</em>.<b>view</b>(<em>value</em>)

An object defining the view background's fill and stroke.

__Default value:__ none (transparent)

<a id="width" href="#width">#</a>
<em>layer</em>.<b>width</b>(<em>value</em>)

The width of a visualization.

- For a plot with a continuous x-field, width should be a number. - For a plot with either a discrete x-field or no x-field, width can be either a number indicating a fixed width or an object in the form of `{step: number}` defining the width per discrete step. (No x-field is equivalent to having one discrete step.) - To enable responsive sizing on width, it should be set to `"container"`.

__Default value:__ Based on `config.view.continuousWidth` for a plot with a continuous x-field and `config.view.discreteWidth` otherwise.

__Note:__ For plots with [`row` and `column` channels](https://vega.github.io/vega-lite/docs/encoding.html#facet), this represents the width of a single view and the `"container"` option cannot be used.

__See also:__ [`width`](https://vega.github.io/vega-lite/docs/size.html) documentation.

