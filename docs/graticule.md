# graticule

vl.<b>graticule</b>(<em>...values</em>)

Define a <code>graticule</code> data generator.

## <code>graticule</code> Method Overview

* <em>graticule</em>.<a href="#extent">extent</a>
* <em>graticule</em>.<a href="#extentMajor">extentMajor</a>
* <em>graticule</em>.<a href="#extentMinor">extentMinor</a>
* <em>graticule</em>.<a href="#precision">precision</a>
* <em>graticule</em>.<a href="#step">step</a>
* <em>graticule</em>.<a href="#stepMajor">stepMajor</a>
* <em>graticule</em>.<a href="#stepMinor">stepMinor</a>

## <code>graticule</code> API Reference

<a name="extent">#</a>
<em>graticule</em>.<b>extent</b>(<em>...value</em>)

Sets both the major and minor extents to the same values.

<a name="extentMajor">#</a>
<em>graticule</em>.<b>extentMajor</b>(<em>...value</em>)

The major extent of the graticule as a two-element array of coordinates.

<a name="extentMinor">#</a>
<em>graticule</em>.<b>extentMinor</b>(<em>...value</em>)

The minor extent of the graticule as a two-element array of coordinates.

<a name="precision">#</a>
<em>graticule</em>.<b>precision</b>(<em>value</em>)

The precision of the graticule in degrees.

__Default value:__ `2.5`

<a name="step">#</a>
<em>graticule</em>.<b>step</b>(<em>...value</em>)

Sets both the major and minor step angles to the same values.

<a name="stepMajor">#</a>
<em>graticule</em>.<b>stepMajor</b>(<em>...value</em>)

The major step angles of the graticule.


__Default value:__ `[90, 360]`

<a name="stepMinor">#</a>
<em>graticule</em>.<b>stepMinor</b>(<em>...value</em>)

The minor step angles of the graticule.

__Default value:__ `[10, 10]`

