# projection

vl.<b>projection</b>(<em>type</em>)

Define a cartographic projection for longitude, latitude coordinates.

## <code>projection</code> Method Overview

* <em>projection</em>.<a href="#center">center</a>
* <em>projection</em>.<a href="#clipAngle">clipAngle</a>
* <em>projection</em>.<a href="#clipExtent">clipExtent</a>
* <em>projection</em>.<a href="#coefficient">coefficient</a>
* <em>projection</em>.<a href="#distance">distance</a>
* <em>projection</em>.<a href="#fraction">fraction</a>
* <em>projection</em>.<a href="#lobes">lobes</a>
* <em>projection</em>.<a href="#parallel">parallel</a>
* <em>projection</em>.<a href="#precision">precision</a>
* <em>projection</em>.<a href="#radius">radius</a>
* <em>projection</em>.<a href="#ratio">ratio</a>
* <em>projection</em>.<a href="#reflectX">reflectX</a>
* <em>projection</em>.<a href="#reflectY">reflectY</a>
* <em>projection</em>.<a href="#rotate">rotate</a>
* <em>projection</em>.<a href="#scale">scale</a>
* <em>projection</em>.<a href="#spacing">spacing</a>
* <em>projection</em>.<a href="#tilt">tilt</a>
* <em>projection</em>.<a href="#translate">translate</a>
* <em>projection</em>.<a href="#type">type</a>

## <code>projection</code> API Reference

<a name="center">#</a>
<em>projection</em>.<b>center</b>(<em>...value</em>)

Sets the projection’s center to the specified center, a two-element array of longitude and latitude in degrees.

__Default value:__ `[0, 0]`

<a name="clipAngle">#</a>
<em>projection</em>.<b>clipAngle</b>(<em>value</em>)

Sets the projection’s clipping circle radius to the specified angle in degrees. If `null`, switches to [antimeridian](http://bl.ocks.org/mbostock/3788999) cutting rather than small-circle clipping.

<a name="clipExtent">#</a>
<em>projection</em>.<b>clipExtent</b>(<em>...value</em>)

Sets the projection’s viewport clip extent to the specified bounds in pixels. The extent bounds are specified as an array `[[x0, y0], [x1, y1]]`, where `x0` is the left-side of the viewport, `y0` is the top, `x1` is the right and `y1` is the bottom. If `null`, no viewport clipping is performed.

<a name="coefficient">#</a>
<em>projection</em>.<b>coefficient</b>(<em>value</em>)

<a name="distance">#</a>
<em>projection</em>.<b>distance</b>(<em>value</em>)

<a name="fraction">#</a>
<em>projection</em>.<b>fraction</b>(<em>value</em>)

<a name="lobes">#</a>
<em>projection</em>.<b>lobes</b>(<em>value</em>)

<a name="parallel">#</a>
<em>projection</em>.<b>parallel</b>(<em>value</em>)

<a name="precision">#</a>
<em>projection</em>.<b>precision</b>(<em>value</em>)

Sets the threshold for the projection’s [adaptive resampling](http://bl.ocks.org/mbostock/3795544) to the specified value in pixels. This value corresponds to the [Douglas–Peucker distance](http://en.wikipedia.org/wiki/Ramer%E2%80%93Douglas%E2%80%93Peucker_algorithm). If precision is not specified, returns the projection’s current resampling precision which defaults to `√0.5 ≅ 0.70710…`.

<a name="radius">#</a>
<em>projection</em>.<b>radius</b>(<em>value</em>)

<a name="ratio">#</a>
<em>projection</em>.<b>ratio</b>(<em>value</em>)

<a name="reflectX">#</a>
<em>projection</em>.<b>reflectX</b>(<em>value</em>)

<a name="reflectY">#</a>
<em>projection</em>.<b>reflectY</b>(<em>value</em>)

<a name="rotate">#</a>
<em>projection</em>.<b>rotate</b>(<em>...value</em>)

Sets the projection’s three-axis rotation to the specified angles, which must be a two- or three-element array of numbers [`lambda`, `phi`, `gamma`] specifying the rotation angles in degrees about each spherical axis. (These correspond to yaw, pitch and roll.)

__Default value:__ `[0, 0, 0]`

<a name="scale">#</a>
<em>projection</em>.<b>scale</b>(<em>value</em>)

Sets the projection's scale (zoom) value, overriding automatic fitting.

<a name="spacing">#</a>
<em>projection</em>.<b>spacing</b>(<em>value</em>)

<a name="tilt">#</a>
<em>projection</em>.<b>tilt</b>(<em>value</em>)

<a name="translate">#</a>
<em>projection</em>.<b>translate</b>(<em>...value</em>)

Sets the projection's translation (pan) value, overriding automatic fitting.

<a name="type">#</a>
<em>projection</em>.<b>type</b>(<em>value</em>)

The cartographic projection to use. This value is case-insensitive, for example `"albers"` and `"Albers"` indicate the same projection type. You can find all valid projection types [in the documentation](https://vega.github.io/vega-lite/docs/projection.html#projection-types).

__Default value:__ `mercator`

