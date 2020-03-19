vl.<b>projection</b>(<em>type</em>)

Define a cartographic projection for longitude, latitude coordinates.

## <code>projection</code> Method Overview

* <a href="#center">center</a>
* <a href="#clipAngle">clipAngle</a>
* <a href="#clipExtent">clipExtent</a>
* <a href="#coefficient">coefficient</a>
* <a href="#distance">distance</a>
* <a href="#extent">extent</a>
* <a href="#fit">fit</a>
* <a href="#fraction">fraction</a>
* <a href="#lobes">lobes</a>
* <a href="#parallel">parallel</a>
* <a href="#parallels">parallels</a>
* <a href="#pointRadius">pointRadius</a>
* <a href="#precision">precision</a>
* <a href="#radius">radius</a>
* <a href="#ratio">ratio</a>
* <a href="#reflectX">reflectX</a>
* <a href="#reflectY">reflectY</a>
* <a href="#rotate">rotate</a>
* <a href="#scale">scale</a>
* <a href="#size">size</a>
* <a href="#spacing">spacing</a>
* <a href="#tilt">tilt</a>
* <a href="#translate">translate</a>
* <a href="#type">type</a>

## <code>projection</code> API Reference

<a id="center" href="#center">#</a>
<em>projection</em>.<b>center</b>(<em>...value</em>)

The projection's center, a two-element array of longitude and latitude in degrees.

__Default value:__ `[0, 0]`

<a id="clipAngle" href="#clipAngle">#</a>
<em>projection</em>.<b>clipAngle</b>(<em>value</em>)

The projection's clipping circle radius to the specified angle in degrees. If `null`, switches to [antimeridian](http://bl.ocks.org/mbostock/3788999) cutting rather than small-circle clipping.

<a id="clipExtent" href="#clipExtent">#</a>
<em>projection</em>.<b>clipExtent</b>(<em>...value</em>)

The projection's viewport clip extent to the specified bounds in pixels. The extent bounds are specified as an array `[[x0, y0], [x1, y1]]`, where `x0` is the left-side of the viewport, `y0` is the top, `x1` is the right and `y1` is the bottom. If `null`, no viewport clipping is performed.

<a id="coefficient" href="#coefficient">#</a>
<em>projection</em>.<b>coefficient</b>(<em>value</em>)

<a id="distance" href="#distance">#</a>
<em>projection</em>.<b>distance</b>(<em>value</em>)

<a id="extent" href="#extent">#</a>
<em>projection</em>.<b>extent</b>(<em>...value</em>)

<a id="fit" href="#fit">#</a>
<em>projection</em>.<b>fit</b>(<em>...value</em>)

<a id="fraction" href="#fraction">#</a>
<em>projection</em>.<b>fraction</b>(<em>value</em>)

<a id="lobes" href="#lobes">#</a>
<em>projection</em>.<b>lobes</b>(<em>value</em>)

<a id="parallel" href="#parallel">#</a>
<em>projection</em>.<b>parallel</b>(<em>value</em>)

<a id="parallels" href="#parallels">#</a>
<em>projection</em>.<b>parallels</b>(<em>...value</em>)

For conic projections, the [two standard parallels](https://en.wikipedia.org/wiki/Map_projection#Conic) that define the map layout. The default depends on the specific conic projection used.

<a id="pointRadius" href="#pointRadius">#</a>
<em>projection</em>.<b>pointRadius</b>(<em>value</em>)

The default radius (in pixels) to use when drawing GeoJSON `Point` and `MultiPoint` geometries. This parameter sets a constant default value. To modify the point radius in response to data, see the corresponding parameter of the GeoPath and GeoShape transforms.

__Default value:__ `4.5`

<a id="precision" href="#precision">#</a>
<em>projection</em>.<b>precision</b>(<em>value</em>)

The threshold for the projection's [adaptive resampling](http://bl.ocks.org/mbostock/3795544) to the specified value in pixels. This value corresponds to the [Douglas–Peucker distance](http://en.wikipedia.org/wiki/Ramer%E2%80%93Douglas%E2%80%93Peucker_algorithm). If precision is not specified, returns the projection's current resampling precision which defaults to `√0.5 ≅ 0.70710…`.

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

The projection's three-axis rotation to the specified angles, which must be a two- or three-element array of numbers [`lambda`, `phi`, `gamma`] specifying the rotation angles in degrees about each spherical axis. (These correspond to yaw, pitch and roll.)

__Default value:__ `[0, 0, 0]`

<a id="scale" href="#scale">#</a>
<em>projection</em>.<b>scale</b>(<em>value</em>)

The projection’s scale (zoom) factor, overriding automatic fitting. The default scale is projection-specific. The scale factor corresponds linearly to the distance between projected points; however, scale factor values are not equivalent across projections.

<a id="size" href="#size">#</a>
<em>projection</em>.<b>size</b>(<em>...value</em>)

<a id="spacing" href="#spacing">#</a>
<em>projection</em>.<b>spacing</b>(<em>value</em>)

<a id="tilt" href="#tilt">#</a>
<em>projection</em>.<b>tilt</b>(<em>value</em>)

<a id="translate" href="#translate">#</a>
<em>projection</em>.<b>translate</b>(<em>...value</em>)

The projection’s translation offset as a two-element array `[tx, ty]`.

<a id="type" href="#type">#</a>
<em>projection</em>.<b>type</b>(<em>value</em>)

The cartographic projection to use. This value is case-insensitive, for example `"albers"` and `"Albers"` indicate the same projection type. You can find all valid projection types [in the documentation](https://vega.github.io/vega-lite/docs/projection.html#projection-types).

__Default value:__ `mercator`

