vl.<b>fillOpacity</b>(<em>...values</em>)

Specify the <code>fillOpacity</code> encoding channel.

## <code>fillOpacity</code> Method Overview

* <a href="#aggregate">aggregate</a>
* <a href="#argmax">argmax</a>
* <a href="#argmin">argmin</a>
* <a href="#average">average</a>
* <a href="#bin">bin</a>
* <a href="#ci0">ci0</a>
* <a href="#ci1">ci1</a>
* <a href="#condition">condition</a>
* <a href="#count">count</a>
* <a href="#date">date</a>
* <a href="#day">day</a>
* <a href="#distinct">distinct</a>
* <a href="#field">field</a>
* <a href="#fieldN">fieldN</a>
* <a href="#fieldO">fieldO</a>
* <a href="#fieldQ">fieldQ</a>
* <a href="#fieldT">fieldT</a>
* <a href="#hours">hours</a>
* <a href="#if">if</a>
* <a href="#legend">legend</a>
* <a href="#max">max</a>
* <a href="#mean">mean</a>
* <a href="#median">median</a>
* <a href="#milliseconds">milliseconds</a>
* <a href="#min">min</a>
* <a href="#minutes">minutes</a>
* <a href="#missing">missing</a>
* <a href="#month">month</a>
* <a href="#q1">q1</a>
* <a href="#q3">q3</a>
* <a href="#quarter">quarter</a>
* <a href="#scale">scale</a>
* <a href="#seconds">seconds</a>
* <a href="#sort">sort</a>
* <a href="#stderr">stderr</a>
* <a href="#stdev">stdev</a>
* <a href="#stdevp">stdevp</a>
* <a href="#sum">sum</a>
* <a href="#timeHM">timeHM</a>
* <a href="#timeHMS">timeHMS</a>
* <a href="#timeMD">timeMD</a>
* <a href="#timeMDH">timeMDH</a>
* <a href="#timeMS">timeMS</a>
* <a href="#timeQM">timeQM</a>
* <a href="#timeSMS">timeSMS</a>
* <a href="#timeUnit">timeUnit</a>
* <a href="#timeYM">timeYM</a>
* <a href="#timeYMD">timeYMD</a>
* <a href="#timeYMDH">timeYMDH</a>
* <a href="#timeYMDHM">timeYMDHM</a>
* <a href="#timeYMDHMS">timeYMDHMS</a>
* <a href="#timeYQ">timeYQ</a>
* <a href="#timeYQM">timeYQM</a>
* <a href="#title">title</a>
* <a href="#type">type</a>
* <a href="#utcHM">utcHM</a>
* <a href="#utcHMS">utcHMS</a>
* <a href="#utcMD">utcMD</a>
* <a href="#utcMDH">utcMDH</a>
* <a href="#utcMS">utcMS</a>
* <a href="#utcQM">utcQM</a>
* <a href="#utcSMS">utcSMS</a>
* <a href="#utcYM">utcYM</a>
* <a href="#utcYMD">utcYMD</a>
* <a href="#utcYMDH">utcYMDH</a>
* <a href="#utcYMDHM">utcYMDHM</a>
* <a href="#utcYMDHMS">utcYMDHMS</a>
* <a href="#utcYQ">utcYQ</a>
* <a href="#utcYQM">utcYQM</a>
* <a href="#utcdate">utcdate</a>
* <a href="#utcday">utcday</a>
* <a href="#utchours">utchours</a>
* <a href="#utcmilliseconds">utcmilliseconds</a>
* <a href="#utcminutes">utcminutes</a>
* <a href="#utcmonth">utcmonth</a>
* <a href="#utcquarter">utcquarter</a>
* <a href="#utcseconds">utcseconds</a>
* <a href="#utcyear">utcyear</a>
* <a href="#utcyearmonth">utcyearmonth</a>
* <a href="#valid">valid</a>
* <a href="#value">value</a>
* <a href="#variance">variance</a>
* <a href="#variancep">variancep</a>
* <a href="#year">year</a>
* <a href="#yearmonth">yearmonth</a>

## <code>fillOpacity</code> API Reference

<a id="aggregate" href="#aggregate">#</a>
<em>fillOpacity</em>.<b>aggregate</b>(<em>value</em>)

Aggregation function for the field
(e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).

__Default value:__ `undefined` (None)

__See also:__ [`aggregate`](https://vega.github.io/vega-lite/docs/aggregate.html) documentation.

<a id="argmax" href="#argmax">#</a>
<em>fillOpacity</em>.<b>argmax</b>(<em>field</em>)

Apply the <code>argmax</code> aggregate operation prior to encoding.

<a id="argmin" href="#argmin">#</a>
<em>fillOpacity</em>.<b>argmin</b>(<em>field</em>)

Apply the <code>argmin</code> aggregate operation prior to encoding.

<a id="average" href="#average">#</a>
<em>fillOpacity</em>.<b>average</b>(<em>field</em>)

Apply the <code>average</code> aggregate operation prior to encoding.

<a id="bin" href="#bin">#</a>
<em>fillOpacity</em>.<b>bin</b>(<em>value</em>)

A flag for binning a `quantitative` field, [an object defining binning parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that the data for `x` or `y` channel are binned before they are imported into Vega-Lite (`"binned"`).

- If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html) will be applied.

- If `"binned"`, this indicates that the data for the `x` (or `y`) channel are already binned. You can map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust the axis ticks based on the bin step, you can also set the axis's [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.

__Default value:__ `false`

__See also:__ [`bin`](https://vega.github.io/vega-lite/docs/bin.html) documentation.

<a id="ci0" href="#ci0">#</a>
<em>fillOpacity</em>.<b>ci0</b>(<em>field</em>)

Apply the <code>ci0</code> aggregate operation prior to encoding.

<a id="ci1" href="#ci1">#</a>
<em>fillOpacity</em>.<b>ci1</b>(<em>field</em>)

Apply the <code>ci1</code> aggregate operation prior to encoding.

<a id="condition" href="#condition">#</a>
<em>fillOpacity</em>.<b>condition</b>(<em>value</em>)

A field definition or one or more value definition(s) with a selection predicate.

<a id="count" href="#count">#</a>
<em>fillOpacity</em>.<b>count</b>(<em></em>)

Apply the <code>count</code> aggregate operation prior to encoding.

<a id="date" href="#date">#</a>
<em>fillOpacity</em>.<b>date</b>(<em>field</em>)

Apply the <code>date</code> timeUnit operation prior to encoding.

<a id="day" href="#day">#</a>
<em>fillOpacity</em>.<b>day</b>(<em>field</em>)

Apply the <code>day</code> timeUnit operation prior to encoding.

<a id="distinct" href="#distinct">#</a>
<em>fillOpacity</em>.<b>distinct</b>(<em>field</em>)

Apply the <code>distinct</code> aggregate operation prior to encoding.

<a id="field" href="#field">#</a>
<em>fillOpacity</em>.<b>field</b>(<em>value</em>)

__Required.__ A string defining the name of the field from which to pull a data value
or an object defining iterated values from the [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.

__See also:__ [`field`](https://vega.github.io/vega-lite/docs/field.html) documentation.

__Notes:__
1)  Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects (e.g., `"field": "foo.bar"` and `"field": "foo['bar']"`).
If field names contain dots or brackets but are not nested, you can use `\\` to escape dots and brackets (e.g., `"a\\.b"` and `"a\\[0\\]"`).
See more details about escaping in the [field documentation](https://vega.github.io/vega-lite/docs/field.html).
2) `field` is not required if `aggregate` is `count`.

<a id="fieldN" href="#fieldN">#</a>
<em>fillOpacity</em>.<b>fieldN</b>(<em>field</em>)

Encode the field as a nominal data type.

<a id="fieldO" href="#fieldO">#</a>
<em>fillOpacity</em>.<b>fieldO</b>(<em>field</em>)

Encode the field as an ordinal data type.

<a id="fieldQ" href="#fieldQ">#</a>
<em>fillOpacity</em>.<b>fieldQ</b>(<em>field</em>)

Encode the field as a quantitative data type.

<a id="fieldT" href="#fieldT">#</a>
<em>fillOpacity</em>.<b>fieldT</b>(<em>field</em>)

Encode the field as a temporal data type.

<a id="hours" href="#hours">#</a>
<em>fillOpacity</em>.<b>hours</b>(<em>field</em>)

Apply the <code>hours</code> timeUnit operation prior to encoding.

<a id="if" href="#if">#</a>
<em>fillOpacity</em>.<b>if</b>(<em>...condition</em>)

Perform a conditional encoding. If the provided condition (first argument) evaluates to true, apply the provided encoding (second argument).

<a id="legend" href="#legend">#</a>
<em>fillOpacity</em>.<b>legend</b>(<em>value</em>)

An object defining properties of the legend.
If `null`, the legend for the encoding channel will be removed.

__Default value:__ If undefined, default [legend properties](https://vega.github.io/vega-lite/docs/legend.html) are applied.

__See also:__ [`legend`](https://vega.github.io/vega-lite/docs/legend.html) documentation.

<a id="max" href="#max">#</a>
<em>fillOpacity</em>.<b>max</b>(<em>field</em>)

Apply the <code>max</code> aggregate operation prior to encoding.

<a id="mean" href="#mean">#</a>
<em>fillOpacity</em>.<b>mean</b>(<em>field</em>)

Apply the <code>mean</code> aggregate operation prior to encoding.

<a id="median" href="#median">#</a>
<em>fillOpacity</em>.<b>median</b>(<em>field</em>)

Apply the <code>median</code> aggregate operation prior to encoding.

<a id="milliseconds" href="#milliseconds">#</a>
<em>fillOpacity</em>.<b>milliseconds</b>(<em>field</em>)

Apply the <code>milliseconds</code> timeUnit operation prior to encoding.

<a id="min" href="#min">#</a>
<em>fillOpacity</em>.<b>min</b>(<em>field</em>)

Apply the <code>min</code> aggregate operation prior to encoding.

<a id="minutes" href="#minutes">#</a>
<em>fillOpacity</em>.<b>minutes</b>(<em>field</em>)

Apply the <code>minutes</code> timeUnit operation prior to encoding.

<a id="missing" href="#missing">#</a>
<em>fillOpacity</em>.<b>missing</b>(<em>field</em>)

Apply the <code>missing</code> aggregate operation prior to encoding.

<a id="month" href="#month">#</a>
<em>fillOpacity</em>.<b>month</b>(<em>field</em>)

Apply the <code>month</code> timeUnit operation prior to encoding.

<a id="q1" href="#q1">#</a>
<em>fillOpacity</em>.<b>q1</b>(<em>field</em>)

Apply the <code>q1</code> aggregate operation prior to encoding.

<a id="q3" href="#q3">#</a>
<em>fillOpacity</em>.<b>q3</b>(<em>field</em>)

Apply the <code>q3</code> aggregate operation prior to encoding.

<a id="quarter" href="#quarter">#</a>
<em>fillOpacity</em>.<b>quarter</b>(<em>field</em>)

Apply the <code>quarter</code> timeUnit operation prior to encoding.

<a id="scale" href="#scale">#</a>
<em>fillOpacity</em>.<b>scale</b>(<em>value</em>)

An object defining properties of the channel's scale, which is the function that transforms values in the data domain (numbers, dates, strings, etc) to visual values (pixels, colors, sizes) of the encoding channels.

If `null`, the scale will be [disabled and the data value will be directly encoded](https://vega.github.io/vega-lite/docs/scale.html#disable).

__Default value:__ If undefined, default [scale properties](https://vega.github.io/vega-lite/docs/scale.html) are applied.

__See also:__ [`scale`](https://vega.github.io/vega-lite/docs/scale.html) documentation.

<a id="seconds" href="#seconds">#</a>
<em>fillOpacity</em>.<b>seconds</b>(<em>field</em>)

Apply the <code>seconds</code> timeUnit operation prior to encoding.

<a id="sort" href="#sort">#</a>
<em>fillOpacity</em>.<b>sort</b>(<em>value</em>)

Sort order for the encoded field.

For continuous fields (quantitative or temporal), `sort` can be either `"ascending"` or `"descending"`.

For discrete fields, `sort` can be one of the following:
- `"ascending"` or `"descending"` -- for sorting by the values' natural order in JavaScript.
- [A string indicating an encoding channel name to sort by](https://vega.github.io/vega-lite/docs/sort.html#sort-by-encoding) (e.g., `"x"` or `"y"`) with an optional minus prefix for descending sort (e.g., `"-x"` to sort by x-field, descending).  This channel string is short-form of [a sort-by-encoding definition](https://vega.github.io/vega-lite/docs/sort.html#sort-by-encoding). For example, `"sort": "-x"` is equivalent to `"sort": {"encoding": "x", "order": "descending"}`.
- [A sort field definition](https://vega.github.io/vega-lite/docs/sort.html#sort-field) for sorting by another field.
- [An array specifying the field values in preferred order](https://vega.github.io/vega-lite/docs/sort.html#sort-array). In this case, the sort order will obey the values in the array, followed by any unspecified values in their original order.  For discrete time field, values in the sort array can be [date-time definition objects](types#datetime). In addition, for time units `"month"` and `"day"`, the values can be the month or day names (case insensitive) or their 3-letter initials (e.g., `"Mon"`, `"Tue"`).
- `null` indicating no sort.

__Default value:__ `"ascending"`

__Note:__ `null` and sorting by another channel is not supported for `row` and `column`.

__See also:__ [`sort`](https://vega.github.io/vega-lite/docs/sort.html) documentation.

<a id="stderr" href="#stderr">#</a>
<em>fillOpacity</em>.<b>stderr</b>(<em>field</em>)

Apply the <code>stderr</code> aggregate operation prior to encoding.

<a id="stdev" href="#stdev">#</a>
<em>fillOpacity</em>.<b>stdev</b>(<em>field</em>)

Apply the <code>stdev</code> aggregate operation prior to encoding.

<a id="stdevp" href="#stdevp">#</a>
<em>fillOpacity</em>.<b>stdevp</b>(<em>field</em>)

Apply the <code>stdevp</code> aggregate operation prior to encoding.

<a id="sum" href="#sum">#</a>
<em>fillOpacity</em>.<b>sum</b>(<em>field</em>)

Apply the <code>sum</code> aggregate operation prior to encoding.

<a id="timeHM" href="#timeHM">#</a>
<em>fillOpacity</em>.<b>timeHM</b>(<em>field</em>)

Apply the <code>hoursminutes</code> timeUnit operation prior to encoding.

<a id="timeHMS" href="#timeHMS">#</a>
<em>fillOpacity</em>.<b>timeHMS</b>(<em>field</em>)

Apply the <code>hoursminutesseconds</code> timeUnit operation prior to encoding.

<a id="timeMD" href="#timeMD">#</a>
<em>fillOpacity</em>.<b>timeMD</b>(<em>field</em>)

Apply the <code>monthdate</code> timeUnit operation prior to encoding.

<a id="timeMDH" href="#timeMDH">#</a>
<em>fillOpacity</em>.<b>timeMDH</b>(<em>field</em>)

Apply the <code>monthdatehours</code> timeUnit operation prior to encoding.

<a id="timeMS" href="#timeMS">#</a>
<em>fillOpacity</em>.<b>timeMS</b>(<em>field</em>)

Apply the <code>minutesseconds</code> timeUnit operation prior to encoding.

<a id="timeQM" href="#timeQM">#</a>
<em>fillOpacity</em>.<b>timeQM</b>(<em>field</em>)

Apply the <code>quartermonth</code> timeUnit operation prior to encoding.

<a id="timeSMS" href="#timeSMS">#</a>
<em>fillOpacity</em>.<b>timeSMS</b>(<em>field</em>)

Apply the <code>secondsmilliseconds</code> timeUnit operation prior to encoding.

<a id="timeUnit" href="#timeUnit">#</a>
<em>fillOpacity</em>.<b>timeUnit</b>(<em>value</em>)

Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.
or [a temporal field that gets casted as ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).

__Default value:__ `undefined` (None)

__See also:__ [`timeUnit`](https://vega.github.io/vega-lite/docs/timeunit.html) documentation.

<a id="timeYM" href="#timeYM">#</a>
<em>fillOpacity</em>.<b>timeYM</b>(<em>field</em>)

Apply the <code>yearmonth</code> timeUnit operation prior to encoding.

<a id="timeYMD" href="#timeYMD">#</a>
<em>fillOpacity</em>.<b>timeYMD</b>(<em>field</em>)

Apply the <code>yearmonthdate</code> timeUnit operation prior to encoding.

<a id="timeYMDH" href="#timeYMDH">#</a>
<em>fillOpacity</em>.<b>timeYMDH</b>(<em>field</em>)

Apply the <code>yearmonthdatehours</code> timeUnit operation prior to encoding.

<a id="timeYMDHM" href="#timeYMDHM">#</a>
<em>fillOpacity</em>.<b>timeYMDHM</b>(<em>field</em>)

Apply the <code>yearmonthdatehoursminutes</code> timeUnit operation prior to encoding.

<a id="timeYMDHMS" href="#timeYMDHMS">#</a>
<em>fillOpacity</em>.<b>timeYMDHMS</b>(<em>field</em>)

Apply the <code>yearmonthdatehoursminutesseconds</code> timeUnit operation prior to encoding.

<a id="timeYQ" href="#timeYQ">#</a>
<em>fillOpacity</em>.<b>timeYQ</b>(<em>field</em>)

Apply the <code>yearquarter</code> timeUnit operation prior to encoding.

<a id="timeYQM" href="#timeYQM">#</a>
<em>fillOpacity</em>.<b>timeYQM</b>(<em>field</em>)

Apply the <code>yearquartermonth</code> timeUnit operation prior to encoding.

<a id="title" href="#title">#</a>
<em>fillOpacity</em>.<b>title</b>(<em>value</em>)

A title for the field. If `null`, the title will be removed.

__Default value:__  derived from the field's name and transformation function (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the function is displayed as part of the title (e.g., `"Sum of Profit"`). If the field is binned or has a time unit applied, the applied function is shown in parentheses (e.g., `"Profit (binned)"`, `"Transaction Date (year-month)"`).  Otherwise, the title is simply the field name.

__Notes__:

1) You can customize the default field title format by providing the [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config) property in the [config](https://vega.github.io/vega-lite/docs/config.html) or [`fieldTitle` function via the `compile` function's options](https://vega.github.io/vega-lite/docs/compile.html#field-title).

2) If both field definition's `title` and axis, header, or legend `title` are defined, axis/header/legend title will be used.

<a id="type" href="#type">#</a>
<em>fillOpacity</em>.<b>type</b>(<em>value</em>)

The encoded field's type of measurement (`"quantitative"`, `"temporal"`, `"ordinal"`, or `"nominal"`).
It can also be a `"geojson"` type for encoding ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).


__Note:__

- Data values for a temporal field can be either a date-time string (e.g., `"2015-03-07 12:32:17"`, `"17:01"`, `"2015-03-16"`. `"2015"`) or a timestamp number (e.g., `1552199579097`).
- Data `type` describes the semantics of the data rather than the primitive data types (`number`, `string`, etc.). The same primitive data type can have different types of measurement. For example, numeric data can represent quantitative, ordinal, or nominal data.
- When using with [`bin`](https://vega.github.io/vega-lite/docs/bin.html), the `type` property can be either `"quantitative"` (for using a linear bin scale) or [`"ordinal"` (for using an ordinal bin scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
- When using with [`timeUnit`](https://vega.github.io/vega-lite/docs/timeunit.html), the `type` property can be either `"temporal"` (for using a temporal scale) or [`"ordinal"` (for using an ordinal scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
- When using with [`aggregate`](https://vega.github.io/vega-lite/docs/aggregate.html), the `type` property refers to the post-aggregation data type. For example, we can calculate count `distinct` of a categorical field `"cat"` using `{"aggregate": "distinct", "field": "cat", "type": "quantitative"}`. The `"type"` of the aggregate output is `"quantitative"`.
- Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they have exactly the same type as their primary channels (e.g., `x`, `y`).

__See also:__ [`type`](https://vega.github.io/vega-lite/docs/type.html) documentation.

<a id="utcHM" href="#utcHM">#</a>
<em>fillOpacity</em>.<b>utcHM</b>(<em>field</em>)

Apply the <code>utchoursminutes</code> timeUnit operation prior to encoding.

<a id="utcHMS" href="#utcHMS">#</a>
<em>fillOpacity</em>.<b>utcHMS</b>(<em>field</em>)

Apply the <code>utchoursminutesseconds</code> timeUnit operation prior to encoding.

<a id="utcMD" href="#utcMD">#</a>
<em>fillOpacity</em>.<b>utcMD</b>(<em>field</em>)

Apply the <code>utcmonthdate</code> timeUnit operation prior to encoding.

<a id="utcMDH" href="#utcMDH">#</a>
<em>fillOpacity</em>.<b>utcMDH</b>(<em>field</em>)

Apply the <code>utcmonthdatehours</code> timeUnit operation prior to encoding.

<a id="utcMS" href="#utcMS">#</a>
<em>fillOpacity</em>.<b>utcMS</b>(<em>field</em>)

Apply the <code>utcminutesseconds</code> timeUnit operation prior to encoding.

<a id="utcQM" href="#utcQM">#</a>
<em>fillOpacity</em>.<b>utcQM</b>(<em>field</em>)

Apply the <code>utcquartermonth</code> timeUnit operation prior to encoding.

<a id="utcSMS" href="#utcSMS">#</a>
<em>fillOpacity</em>.<b>utcSMS</b>(<em>field</em>)

Apply the <code>utcsecondsmilliseconds</code> timeUnit operation prior to encoding.

<a id="utcYM" href="#utcYM">#</a>
<em>fillOpacity</em>.<b>utcYM</b>(<em>field</em>)

Apply the <code>utcyearmonth</code> timeUnit operation prior to encoding.

<a id="utcYMD" href="#utcYMD">#</a>
<em>fillOpacity</em>.<b>utcYMD</b>(<em>field</em>)

Apply the <code>utcyearmonthdate</code> timeUnit operation prior to encoding.

<a id="utcYMDH" href="#utcYMDH">#</a>
<em>fillOpacity</em>.<b>utcYMDH</b>(<em>field</em>)

Apply the <code>utcyearmonthdatehours</code> timeUnit operation prior to encoding.

<a id="utcYMDHM" href="#utcYMDHM">#</a>
<em>fillOpacity</em>.<b>utcYMDHM</b>(<em>field</em>)

Apply the <code>utcyearmonthdatehoursminutes</code> timeUnit operation prior to encoding.

<a id="utcYMDHMS" href="#utcYMDHMS">#</a>
<em>fillOpacity</em>.<b>utcYMDHMS</b>(<em>field</em>)

Apply the <code>utcyearmonthdatehoursminutesseconds</code> timeUnit operation prior to encoding.

<a id="utcYQ" href="#utcYQ">#</a>
<em>fillOpacity</em>.<b>utcYQ</b>(<em>field</em>)

Apply the <code>utcyearquarter</code> timeUnit operation prior to encoding.

<a id="utcYQM" href="#utcYQM">#</a>
<em>fillOpacity</em>.<b>utcYQM</b>(<em>field</em>)

Apply the <code>utcyearquartermonth</code> timeUnit operation prior to encoding.

<a id="utcdate" href="#utcdate">#</a>
<em>fillOpacity</em>.<b>utcdate</b>(<em>field</em>)

Apply the <code>utcdate</code> timeUnit operation prior to encoding.

<a id="utcday" href="#utcday">#</a>
<em>fillOpacity</em>.<b>utcday</b>(<em>field</em>)

Apply the <code>utcday</code> timeUnit operation prior to encoding.

<a id="utchours" href="#utchours">#</a>
<em>fillOpacity</em>.<b>utchours</b>(<em>field</em>)

Apply the <code>utchours</code> timeUnit operation prior to encoding.

<a id="utcmilliseconds" href="#utcmilliseconds">#</a>
<em>fillOpacity</em>.<b>utcmilliseconds</b>(<em>field</em>)

Apply the <code>utcmilliseconds</code> timeUnit operation prior to encoding.

<a id="utcminutes" href="#utcminutes">#</a>
<em>fillOpacity</em>.<b>utcminutes</b>(<em>field</em>)

Apply the <code>utcminutes</code> timeUnit operation prior to encoding.

<a id="utcmonth" href="#utcmonth">#</a>
<em>fillOpacity</em>.<b>utcmonth</b>(<em>field</em>)

Apply the <code>utcmonth</code> timeUnit operation prior to encoding.

<a id="utcquarter" href="#utcquarter">#</a>
<em>fillOpacity</em>.<b>utcquarter</b>(<em>field</em>)

Apply the <code>utcquarter</code> timeUnit operation prior to encoding.

<a id="utcseconds" href="#utcseconds">#</a>
<em>fillOpacity</em>.<b>utcseconds</b>(<em>field</em>)

Apply the <code>utcseconds</code> timeUnit operation prior to encoding.

<a id="utcyear" href="#utcyear">#</a>
<em>fillOpacity</em>.<b>utcyear</b>(<em>field</em>)

Apply the <code>utcyear</code> timeUnit operation prior to encoding.

<a id="utcyearmonth" href="#utcyearmonth">#</a>
<em>fillOpacity</em>.<b>utcyearmonth</b>(<em>field</em>)

Apply the <code>utcyearmonth</code> timeUnit operation prior to encoding.

<a id="valid" href="#valid">#</a>
<em>fillOpacity</em>.<b>valid</b>(<em>field</em>)

Apply the <code>valid</code> aggregate operation prior to encoding.

<a id="value" href="#value">#</a>
<em>fillOpacity</em>.<b>value</b>(<em>value</em>)

A constant value in visual domain (e.g., `"red"` / `"#0099ff"` / [gradient definition](https://vega.github.io/vega-lite/docs/types.html#gradient) for color, values between `0` to `1` for opacity).

<a id="variance" href="#variance">#</a>
<em>fillOpacity</em>.<b>variance</b>(<em>field</em>)

Apply the <code>variance</code> aggregate operation prior to encoding.

<a id="variancep" href="#variancep">#</a>
<em>fillOpacity</em>.<b>variancep</b>(<em>field</em>)

Apply the <code>variancep</code> aggregate operation prior to encoding.

<a id="year" href="#year">#</a>
<em>fillOpacity</em>.<b>year</b>(<em>field</em>)

Apply the <code>year</code> timeUnit operation prior to encoding.

<a id="yearmonth" href="#yearmonth">#</a>
<em>fillOpacity</em>.<b>yearmonth</b>(<em>field</em>)

Apply the <code>yearmonth</code> timeUnit operation prior to encoding.

