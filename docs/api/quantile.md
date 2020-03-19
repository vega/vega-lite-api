vl.<b>quantile</b>(<em>quantile</em>)

Calculate sample quantile values for input data.

## <code>quantile</code> Method Overview

* <a href="#as">as</a>
* <a href="#groupby">groupby</a>
* <a href="#probs">probs</a>
* <a href="#quantile">quantile</a>
* <a href="#step">step</a>

## <code>quantile</code> API Reference

<a id="as" href="#as">#</a>
<em>quantile</em>.<b>as</b>(<em>...value</em>)

The output field names for the probability and quantile values.

__Default value:__ `["prob", "value"]`

<a id="groupby" href="#groupby">#</a>
<em>quantile</em>.<b>groupby</b>(<em>...value</em>)

The data fields to group by. If not specified, a single group containing all data objects will be used.

<a id="probs" href="#probs">#</a>
<em>quantile</em>.<b>probs</b>(<em>...value</em>)

An array of probabilities in the range (0, 1) for which to compute quantile values. If not specified, the *step* parameter will be used.

<a id="quantile" href="#quantile">#</a>
<em>quantile</em>.<b>quantile</b>(<em>value</em>)

The data field for which to perform quantile estimation.

<a id="step" href="#step">#</a>
<em>quantile</em>.<b>step</b>(<em>value</em>)

A probability step size (default 0.01) for sampling quantile values. All values from one-half the step size up to 1 (exclusive) will be sampled. This parameter is only used if the *probs* parameter is not provided.

