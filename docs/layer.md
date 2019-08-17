# layer

vl.<b>layer</b>(<em>...layer</em>)

Create a new layered chart.

## <code>layer</code> Method Overview

* <em>layer</em>.<a href="#autosize">autosize</a>
* <em>layer</em>.<a href="#background">background</a>
* <em>layer</em>.<a href="#config">config</a>
* <em>layer</em>.<a href="#data">data</a>
* <em>layer</em>.<a href="#datasets">datasets</a>
* <em>layer</em>.<a href="#description">description</a>
* <em>layer</em>.<a href="#encoding">encoding</a>
* <em>layer</em>.<a href="#facet">facet</a>
* <em>layer</em>.<a href="#height">height</a>
* <em>layer</em>.<a href="#layer">layer</a>
* <em>layer</em>.<a href="#name">name</a>
* <em>layer</em>.<a href="#padding">padding</a>
* <em>layer</em>.<a href="#project">project</a>
* <em>layer</em>.<a href="#render">render</a>
* <em>layer</em>.<a href="#repeat">repeat</a>
* <em>layer</em>.<a href="#resolve">resolve</a>
* <em>layer</em>.<a href="#title">title</a>
* <em>layer</em>.<a href="#toSpec">toSpec</a>
* <em>layer</em>.<a href="#toString">toString</a>
* <em>layer</em>.<a href="#toView">toView</a>
* <em>layer</em>.<a href="#transform">transform</a>
* <em>layer</em>.<a href="#usermeta">usermeta</a>
* <em>layer</em>.<a href="#view">view</a>
* <em>layer</em>.<a href="#width">width</a>

## <code>layer</code> API Reference

<a name="autosize">#</a>
<em>layer</em>.<b>autosize</b>(<em>value</em>)

Sets how the visualization size should be determined. If a string, should be one of `"pad"`, `"fit"` or `"none"`.
Object values can additionally specify parameters for content sizing and automatic resizing.
`"fit"` is only supported for single and layered views that don't use `rangeStep`.

__Default value__: `pad`

<a name="background">#</a>
<em>layer</em>.<b>background</b>(<em>value</em>)

CSS color property to use as the background of the entire view.

__Default value:__ none (transparent)

<a name="config">#</a>
<em>layer</em>.<b>config</b>(<em>value</em>)

Vega-Lite configuration object.  This property can only be defined at the top-level of a specification.

<a name="data">#</a>
<em>layer</em>.<b>data</b>(<em>data</em>)

The input [[data]] specification.

<a name="datasets">#</a>
<em>layer</em>.<b>datasets</b>(<em>value</em>)

A global data store for named datasets. This is a mapping from names to inline datasets.
This can be an array of objects or primitive values or a string. Arrays of primitive values are ingested as objects with a `data` property.

<a name="description">#</a>
<em>layer</em>.<b>description</b>(<em>value</em>)

Description of this mark for commenting purpose.

<a name="encoding">#</a>
<em>layer</em>.<b>encoding</b>(<em>value</em>)

A shared key-value mapping between encoding channels and definition of fields in the underlying layers.

<a name="facet">#</a>
<em>layer</em>.<b>facet</b>(<em>...values</em>)

Facet a chart into sub-plots by partitioning data values.

<a name="height">#</a>
<em>layer</em>.<b>height</b>(<em>value</em>)

The height of a visualization.

__Default value:__
- If a view's [`autosize`](https://vega.github.io/vega-lite/docs/size.html#autosize) type is `"fit"` or its y-channel has a [continuous scale](https://vega.github.io/vega-lite/docs/scale.html#continuous), the height will be the value of [`config.view.height`](https://vega.github.io/vega-lite/docs/spec.html#config).
- For y-axis with a band or point scale: if [`rangeStep`](https://vega.github.io/vega-lite/docs/scale.html#band) is a numeric value or unspecified, the height is [determined by the range step, paddings, and the cardinality of the field mapped to y-channel](https://vega.github.io/vega-lite/docs/scale.html#band). Otherwise, if the `rangeStep` is `null`, the height will be the value of [`config.view.height`](https://vega.github.io/vega-lite/docs/spec.html#config).
- If no field is mapped to `y` channel, the `height` will be the value of `rangeStep`.

__Note__: For plots with [`row` and `column` channels](https://vega.github.io/vega-lite/docs/encoding.html#facet), this represents the height of a single view.

__See also:__ The documentation for [width and height](https://vega.github.io/vega-lite/docs/size.html) contains more examples.

<a name="layer">#</a>
<em>layer</em>.<b>layer</b>(<em>...value</em>)

Layer or single view specifications to be layered.

__Note__: Specifications inside `layer` cannot use `row` and `column` channels as layering facet specifications is not allowed. Instead, use the [facet operator](https://vega.github.io/vega-lite/docs/facet.html) and place a layer inside a facet.

<a name="name">#</a>
<em>layer</em>.<b>name</b>(<em>value</em>)

Name of the visualization for later reference.

<a name="padding">#</a>
<em>layer</em>.<b>padding</b>(<em>value</em>)

The default visualization padding, in pixels, from the edge of the visualization canvas to the data rectangle.  If a number, specifies padding for all sides.
If an object, the value should have the format `{"left": 5, "top": 5, "right": 5, "bottom": 5}` to specify padding for each side of the visualization.

__Default value__: `5`

<a name="project">#</a>
<em>layer</em>.<b>project</b>(<em>projection</em>)

The cartographic [[projection]] to apply to geographical data.

<a name="render">#</a>
<em>layer</em>.<b>render</b>(<em>...values</em>)

Compile and render the Vega-Lite visualization and return the DOM element containing the Vega View.

<a name="repeat">#</a>
<em>layer</em>.<b>repeat</b>(<em>...values</em>)

Repeat a chart template to generate multiple plots.

<a name="resolve">#</a>
<em>layer</em>.<b>resolve</b>(<em>value</em>)

Scale, axis, and legend resolutions for view composition specifications.

<a name="title">#</a>
<em>layer</em>.<b>title</b>(<em>value</em>)

Title for the plot.

<a name="toSpec">#</a>
<em>layer</em>.<b>toSpec</b>(<em>...values</em>)

Return the Vega-Lite specification as a JavaScript object.

<a name="toString">#</a>
<em>layer</em>.<b>toString</b>(<em>...values</em>)

Return the Vega-Lite specification as a JSON string.

<a name="toView">#</a>
<em>layer</em>.<b>toView</b>(<em>...values</em>)

Compile the Vega-Lite specification and return the resulting Vega View object.

<a name="transform">#</a>
<em>layer</em>.<b>transform</b>(<em>...transform</em>)

The data transformations to apply.

<a name="usermeta">#</a>
<em>layer</em>.<b>usermeta</b>(<em>value</em>)

Optional metadata that will be passed to Vega.
This object is completely ignored by Vega and Vega-Lite and can be used for custom metadata.

<a name="view">#</a>
<em>layer</em>.<b>view</b>(<em>value</em>)

An object defining the view background's fill and stroke.

__Default value:__ none (transparent)

<a name="width">#</a>
<em>layer</em>.<b>width</b>(<em>value</em>)

The width of a visualization.

__Default value:__ This will be determined by the following rules:

- If a view's [`autosize`](https://vega.github.io/vega-lite/docs/size.html#autosize) type is `"fit"` or its x-channel has a [continuous scale](https://vega.github.io/vega-lite/docs/scale.html#continuous), the width will be the value of [`config.view.width`](https://vega.github.io/vega-lite/docs/spec.html#config).
- For x-axis with a band or point scale: if [`rangeStep`](https://vega.github.io/vega-lite/docs/scale.html#band) is a numeric value or unspecified, the width is [determined by the range step, paddings, and the cardinality of the field mapped to x-channel](https://vega.github.io/vega-lite/docs/scale.html#band).   Otherwise, if the `rangeStep` is `null`, the width will be the value of [`config.view.width`](https://vega.github.io/vega-lite/docs/spec.html#config).
- If no field is mapped to `x` channel, the `width` will be the value of [`config.scale.textXRangeStep`](https://vega.github.io/vega-lite/docs/size.html#default-width-and-height) for `text` mark and the value of `rangeStep` for other marks.

__Note:__ For plots with [`row` and `column` channels](https://vega.github.io/vega-lite/docs/encoding.html#facet), this represents the width of a single view.

__See also:__ The documentation for [width and height](https://vega.github.io/vega-lite/docs/size.html) contains more examples.

