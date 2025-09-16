vl.<b>density</b>(<em>density</em>)

Estimate smoothed densities for numeric values.

## <code>density</code> Method Overview

* <a href="#as">as</a>
* <a href="#bandwidth">bandwidth</a>
* <a href="#counts">counts</a>
* <a href="#cumulative">cumulative</a>
* <a href="#density">density</a>
* <a href="#extent">extent</a>
* <a href="#groupby">groupby</a>
* <a href="#maxsteps">maxsteps</a>
* <a href="#minsteps">minsteps</a>
* <a href="#resolve">resolve</a>
* <a href="#steps">steps</a>

## <code>density</code> API Reference

<a id="as" href="#as">#</a>
<em>density</em>.<b>as</b>(<em>...value</em>)

The output fields for the sample value and corresponding density estimate.

__Default value:__ `["value", "density"]`

<a id="bandwidth" href="#bandwidth">#</a>
<em>density</em>.<b>bandwidth</b>(<em>value</em>)

The bandwidth (standard deviation) of the Gaussian kernel. If unspecified or set to zero, the bandwidth value is automatically estimated from the input data using Scott’s rule.

<a id="counts" href="#counts">#</a>
<em>density</em>.<b>counts</b>(<em>value</em>)

A boolean flag indicating if the output values should be probability estimates (false) or smoothed counts (true).

__Default value:__ `false`

<a id="cumulative" href="#cumulative">#</a>
<em>density</em>.<b>cumulative</b>(<em>value</em>)

A boolean flag indicating whether to produce density estimates (false) or cumulative density estimates (true).

__Default value:__ `false`

<a id="density" href="#density">#</a>
<em>density</em>.<b>density</b>(<em>value</em>)

The data field for which to perform density estimation.

<a id="extent" href="#extent">#</a>
<em>density</em>.<b>extent</b>(<em>...value</em>)

A [min, max] domain from which to sample the distribution. If unspecified, the extent will be determined by the observed minimum and maximum values of the density value field.

<a id="groupby" href="#groupby">#</a>
<em>density</em>.<b>groupby</b>(<em>...value</em>)

The data fields to group by. If not specified, a single group containing all data objects will be used.

<a id="maxsteps" href="#maxsteps">#</a>
<em>density</em>.<b>maxsteps</b>(<em>value</em>)

The maximum number of samples to take along the extent domain for plotting the density.

__Default value:__ `200`

<a id="minsteps" href="#minsteps">#</a>
<em>density</em>.<b>minsteps</b>(<em>value</em>)

The minimum number of samples to take along the extent domain for plotting the density.

__Default value:__ `25`

<a id="resolve" href="#resolve">#</a>
<em>density</em>.<b>resolve</b>(<em>value</em>)

Indicates how parameters for multiple densities should be resolved. If `"independent"`, each density may have its own domain extent and dynamic number of curve sample steps. If `"shared"`, the KDE transform will ensure that all densities are defined over a shared domain and curve steps, enabling stacking.

__Default value:__ `"shared"`

<a id="steps" href="#steps">#</a>
<em>density</em>.<b>steps</b>(<em>value</em>)

The exact number of samples to take along the extent domain for plotting the density. If specified, overrides both minsteps and maxsteps to set an exact number of uniform samples. Potentially useful in conjunction with a fixed extent to ensure consistent sample points for stacked densities.

