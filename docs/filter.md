# filter

vl.<b>filter</b>(<em>filter</em>)

Remove data that does not match provided conditions.

## <code>filter</code> Method Overview

* <em>filter</em>.<a href="#filter">filter</a>

## <code>filter</code> API Reference

<a name="filter">#</a>
<em>filter</em>.<b>filter</b>(<em>value</em>)

The `filter` property must be one of the predicate definitions:

1) an [expression](https://vega.github.io/vega-lite/docs/types.html#expression) string,
where `datum` can be used to refer to the current data object

2) one of the field predicates: [`equal`](https://vega.github.io/vega-lite/docs/filter.html#equal-predicate),
[`lt`](https://vega.github.io/vega-lite/docs/filter.html#lt-predicate),
[`lte`](https://vega.github.io/vega-lite/docs/filter.html#lte-predicate),
[`gt`](https://vega.github.io/vega-lite/docs/filter.html#gt-predicate),
[`gte`](https://vega.github.io/vega-lite/docs/filter.html#gte-predicate),
[`range`](https://vega.github.io/vega-lite/docs/filter.html#range-predicate),
[`oneOf`](https://vega.github.io/vega-lite/docs/filter.html#one-of-predicate),
or [`valid`](https://vega.github.io/vega-lite/docs/filter.html#valid-predicate),

3) a [selection predicate](https://vega.github.io/vega-lite/docs/filter.html#selection-predicate)

4) a logical operand that combines (1), (2), or (3).

