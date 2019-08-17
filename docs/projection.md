# projection

vl.<b>projection</b>(<em>type</em>)

Define a cartographic projection for longitude, latitude coordinates.

## <code>projection</code> Method Overview

* <a href="#center">center</a>
* <a href="#clipAngle">clipAngle</a>
* <a href="#clipExtent">clipExtent</a>
* <a href="#coefficient">coefficient</a>
* <a href="#distance">distance</a>
* <a href="#fraction">fraction</a>
* <a href="#lobes">lobes</a>
* <a href="#parallel">parallel</a>
* <a href="#precision">precision</a>
* <a href="#radius">radius</a>
* <a href="#ratio">ratio</a>
* <a href="#reflectX">reflectX</a>
* <a href="#reflectY">reflectY</a>
* <a href="#rotate">rotate</a>
* <a href="#scale">scale</a>
* <a href="#spacing">spacing</a>
* <a href="#tilt">tilt</a>
* <a href="#translate">translate</a>
* <a href="#type">type</a>

## <code>projection</code> API Reference

<a id="center" href="#center">#</a>
<em>projection</em>.<b>center</b>(<em>...value</em>)

Sets the projection’s center to the specified center, a two-element array of longitude and latitude in degrees.

__Default value:__ `[0, 0]`

<a id="clipAngle" href="#clipAngle">#</a>
<em>projection</em>.<b>clipAngle</b>(<em>value</em>)

Sets the projection’s clipping circle radius to the specified angle in degrees. If `null`, switches to [antimeridian](http://bl.ocks.org/mbostock/3788999) cutting rather than small-circle clipping.

<a id="clipExtent" href="#clipExtent">#</a>
<em>projection</em>.<b>clipExtent</b>(<em>...value</em>)

Sets the projection’s viewport clip extent to the specified bounds in pixels. The extent bounds are specified as an array `[x0, y0], [x1, y1](x0, y0], [x1, y1)`, where `x0` is the left-side of the viewport, `y0` is the top, `x1` is the right and `y1` is the bottom. If `null`, no viewport clipping is performed.

<a id="coefficient" href="#coefficient">#</a>
<em>projection</em>.<b>coefficient</b>(<em>value</em>)

<a id="distance" href="#distance">#</a>
<em>projection</em>.<b>distance</b>(<em>value</em>)

<a id="fraction" href="#fraction">#</a>
<em>projection</em>.<b>fraction</b>(<em>value</em>)

<a id="lobes" href="#lobes">#</a>
<em>projection</em>.<b>lobes</b>(<em>value</em>)

<a id="parallel" href="#parallel">#</a>
<em>projection</em>.<b>parallel</b>(<em>value</em>)

<a id="precision" href="#precision">#</a>
<em>projection</em>.<b>precision</b>(<em>value</em>)

Sets the threshold for the projection’s [adaptive resampling](http://bl.ocks.org/mbostock/3795544) to the specified value in pixels. This value corresponds to the [Douglas–Peucker distance](http://en.wikipedia.org/wiki/Ramer%E2%80%93Douglas%E2%80%93Peucker_algorithm). If precision is not specified, returns the projection’s current resampling precision which defaults to `√0.5 ≅ 0.70710…`.

<a id="radius" href="#radius">#</a>
<em>projection</em>.<b>radius</b>(<em>value</em>)

<a id="ratio" href="#ratio">#</a>
<em>projection</em>.<b>ratio</b>(<em>value</em>)

<a id="reflectX" href="#reflectX">#</a>
<em>projection</em>.<b>reflectX</b>(<em>value</em>)

<a id="reflectY" href="#reflectY">#</a>
<em>projection</em>.<b>reflectY</b>(<em>value</em>)

<a id="rotate" href="#rotate">#</a>
<em>projection</em>.<b>rotate</b>(<em>...value</em>)

Sets the projection’s three-axis rotation to the specified angles, which must be a two- or three-element array of numbers [`lambda`, `phi`, `gamma`] specifying the rotation angles in degrees about each spherical axis. (These correspond to yaw, pitch and roll.)

__Default value:__ `[0, 0, 0]`

<a id="scale" href="#scale">#</a>
<em>projection</em>.<b>scale</b>(<em>value</em>)

Sets the projection's scale (zoom) value, overriding automatic fitting.

<a id="spacing" href="#spacing">#</a>
<em>projection</em>.<b>spacing</b>(<em>value</em>)

<a id="tilt" href="#tilt">#</a>
<em>projection</em>.<b>tilt</b>(<em>value</em>)

<a id="translate" href="#translate">#</a>
<em>projection</em>.<b>translate</b>(<em>...value</em>)

Sets the projection's translation (pan) value, overriding automatic fitting.

<a id="type" href="#type">#</a>
<em>projection</em>.<b>type</b>(<em>value</em>)

The cartographic projection to use. This value is case-insensitive, for example `"albers"` and `"Albers"` indicate the same projection type. You can find all valid projection types [in the documentation](https://vega.github.io/vega-lite/docs/projection.html#projection-types).

__Default value:__ `mercator`

