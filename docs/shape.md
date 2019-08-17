# shape

vl.<b>shape</b>(<em>...values</em>)

Specify the <code>shape</code> encoding channel.

## <code>shape</code> Method Overview

* <em>shape</em>.<a href="#aggregate">aggregate</a>
* <em>shape</em>.<a href="#argmax">argmax</a>
* <em>shape</em>.<a href="#argmin">argmin</a>
* <em>shape</em>.<a href="#average">average</a>
* <em>shape</em>.<a href="#bin">bin</a>
* <em>shape</em>.<a href="#ci0">ci0</a>
* <em>shape</em>.<a href="#ci1">ci1</a>
* <em>shape</em>.<a href="#condition">condition</a>
* <em>shape</em>.<a href="#count">count</a>
* <em>shape</em>.<a href="#date">date</a>
* <em>shape</em>.<a href="#day">day</a>
* <em>shape</em>.<a href="#distinct">distinct</a>
* <em>shape</em>.<a href="#field">field</a>
* <em>shape</em>.<a href="#fieldN">fieldN</a>
* <em>shape</em>.<a href="#fieldO">fieldO</a>
* <em>shape</em>.<a href="#fieldQ">fieldQ</a>
* <em>shape</em>.<a href="#fieldT">fieldT</a>
* <em>shape</em>.<a href="#hours">hours</a>
* <em>shape</em>.<a href="#if">if</a>
* <em>shape</em>.<a href="#legend">legend</a>
* <em>shape</em>.<a href="#max">max</a>
* <em>shape</em>.<a href="#mean">mean</a>
* <em>shape</em>.<a href="#median">median</a>
* <em>shape</em>.<a href="#milliseconds">milliseconds</a>
* <em>shape</em>.<a href="#min">min</a>
* <em>shape</em>.<a href="#minutes">minutes</a>
* <em>shape</em>.<a href="#missing">missing</a>
* <em>shape</em>.<a href="#month">month</a>
* <em>shape</em>.<a href="#q1">q1</a>
* <em>shape</em>.<a href="#q3">q3</a>
* <em>shape</em>.<a href="#quarter">quarter</a>
* <em>shape</em>.<a href="#scale">scale</a>
* <em>shape</em>.<a href="#seconds">seconds</a>
* <em>shape</em>.<a href="#sort">sort</a>
* <em>shape</em>.<a href="#stderr">stderr</a>
* <em>shape</em>.<a href="#stdev">stdev</a>
* <em>shape</em>.<a href="#stdevp">stdevp</a>
* <em>shape</em>.<a href="#sum">sum</a>
* <em>shape</em>.<a href="#timeHM">timeHM</a>
* <em>shape</em>.<a href="#timeHMS">timeHMS</a>
* <em>shape</em>.<a href="#timeMD">timeMD</a>
* <em>shape</em>.<a href="#timeMDH">timeMDH</a>
* <em>shape</em>.<a href="#timeMS">timeMS</a>
* <em>shape</em>.<a href="#timeQM">timeQM</a>
* <em>shape</em>.<a href="#timeSMS">timeSMS</a>
* <em>shape</em>.<a href="#timeUnit">timeUnit</a>
* <em>shape</em>.<a href="#timeYM">timeYM</a>
* <em>shape</em>.<a href="#timeYMD">timeYMD</a>
* <em>shape</em>.<a href="#timeYMDH">timeYMDH</a>
* <em>shape</em>.<a href="#timeYMDHM">timeYMDHM</a>
* <em>shape</em>.<a href="#timeYMDHMS">timeYMDHMS</a>
* <em>shape</em>.<a href="#timeYQ">timeYQ</a>
* <em>shape</em>.<a href="#timeYQM">timeYQM</a>
* <em>shape</em>.<a href="#title">title</a>
* <em>shape</em>.<a href="#type">type</a>
* <em>shape</em>.<a href="#utcHM">utcHM</a>
* <em>shape</em>.<a href="#utcHMS">utcHMS</a>
* <em>shape</em>.<a href="#utcMD">utcMD</a>
* <em>shape</em>.<a href="#utcMDH">utcMDH</a>
* <em>shape</em>.<a href="#utcMS">utcMS</a>
* <em>shape</em>.<a href="#utcQM">utcQM</a>
* <em>shape</em>.<a href="#utcSMS">utcSMS</a>
* <em>shape</em>.<a href="#utcYM">utcYM</a>
* <em>shape</em>.<a href="#utcYMD">utcYMD</a>
* <em>shape</em>.<a href="#utcYMDH">utcYMDH</a>
* <em>shape</em>.<a href="#utcYMDHM">utcYMDHM</a>
* <em>shape</em>.<a href="#utcYMDHMS">utcYMDHMS</a>
* <em>shape</em>.<a href="#utcYQ">utcYQ</a>
* <em>shape</em>.<a href="#utcYQM">utcYQM</a>
* <em>shape</em>.<a href="#utcdate">utcdate</a>
* <em>shape</em>.<a href="#utcday">utcday</a>
* <em>shape</em>.<a href="#utchours">utchours</a>
* <em>shape</em>.<a href="#utcmilliseconds">utcmilliseconds</a>
* <em>shape</em>.<a href="#utcminutes">utcminutes</a>
* <em>shape</em>.<a href="#utcmonth">utcmonth</a>
* <em>shape</em>.<a href="#utcquarter">utcquarter</a>
* <em>shape</em>.<a href="#utcseconds">utcseconds</a>
* <em>shape</em>.<a href="#utcyear">utcyear</a>
* <em>shape</em>.<a href="#utcyearmonth">utcyearmonth</a>
* <em>shape</em>.<a href="#valid">valid</a>
* <em>shape</em>.<a href="#value">value</a>
* <em>shape</em>.<a href="#variance">variance</a>
* <em>shape</em>.<a href="#variancep">variancep</a>
* <em>shape</em>.<a href="#year">year</a>
* <em>shape</em>.<a href="#yearmonth">yearmonth</a>

## <code>shape</code> API Reference

<a name="aggregate">#</a>
<em>shape</em>.<b>aggregate</b>(<em>value</em>)

Aggregation function for the field
(e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).

__Default value:__ `undefined` (None)

__See also:__ [`aggregate`](https://vega.github.io/vega-lite/docs/aggregate.html) documentation.

<a name="argmax">#</a>
<em>shape</em>.<b>argmax</b>(<em>field</em>)

Apply the <code>argmax</code> aggregate operation prior to encoding.

<a name="argmin">#</a>
<em>shape</em>.<b>argmin</b>(<em>field</em>)

Apply the <code>argmin</code> aggregate operation prior to encoding.

<a name="average">#</a>
<em>shape</em>.<b>average</b>(<em>field</em>)

Apply the <code>average</code> aggregate operation prior to encoding.

<a name="bin">#</a>
<em>shape</em>.<b>bin</b>(<em>value</em>)

A flag for binning a `quantitative` field, [an object defining binning parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that the data for `x` or `y` channel are binned before they are imported into Vega-Lite (`"binned"`).

- If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html) will be applied.

- If `"binned"`, this indicates that the data for the `x` (or `y`) channel are already binned. You can map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust the axis ticks based on the bin step, you can also set the axis's [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.

__Default value:__ `false`

__See also:__ [`bin`](https://vega.github.io/vega-lite/docs/bin.html) documentation.

<a name="ci0">#</a>
<em>shape</em>.<b>ci0</b>(<em>field</em>)

Apply the <code>ci0</code> aggregate operation prior to encoding.

<a name="ci1">#</a>
<em>shape</em>.<b>ci1</b>(<em>field</em>)

Apply the <code>ci1</code> aggregate operation prior to encoding.

<a name="condition">#</a>
<em>shape</em>.<b>condition</b>(<em>value</em>)

A field definition or one or more value definition(s) with a selection predicate.

<a name="count">#</a>
<em>shape</em>.<b>count</b>(<em></em>)

Apply the <code>count</code> aggregate operation prior to encoding.

<a name="date">#</a>
<em>shape</em>.<b>date</b>(<em>field</em>)

Apply the <code>date</code> timeUnit operation prior to encoding.

<a name="day">#</a>
<em>shape</em>.<b>day</b>(<em>field</em>)

Apply the <code>day</code> timeUnit operation prior to encoding.

<a name="distinct">#</a>
<em>shape</em>.<b>distinct</b>(<em>field</em>)

Apply the <code>distinct</code> aggregate operation prior to encoding.

<a name="field">#</a>
<em>shape</em>.<b>field</b>(<em>value</em>)

__Required.__ A string defining the name of the field from which to pull a data value
or an object defining iterated values from the [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.

__See also:__ [`field`](https://vega.github.io/vega-lite/docs/field.html) documentation.

__Notes:__
1)  Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects (e.g., `"field": "foo.bar"` and `"field": "foo['bar']"`).
If field names contain dots or brackets but are not nested, you can use `\\` to escape dots and brackets (e.g., `"a\\.b"` and `"a\\[0\\]"`).
See more details about escaping in the [field documentation](https://vega.github.io/vega-lite/docs/field.html).
2) `field` is not required if `aggregate` is `count`.

<a name="fieldN">#</a>
<em>shape</em>.<b>fieldN</b>(<em>field</em>)

Encode the field as a nominal data type.

<a name="fieldO">#</a>
<em>shape</em>.<b>fieldO</b>(<em>field</em>)

Encode the field as an ordinal data type.

<a name="fieldQ">#</a>
<em>shape</em>.<b>fieldQ</b>(<em>field</em>)

Encode the field as a quantitative data type.

<a name="fieldT">#</a>
<em>shape</em>.<b>fieldT</b>(<em>field</em>)

Encode the field as a temporal data type.

<a name="hours">#</a>
<em>shape</em>.<b>hours</b>(<em>field</em>)

Apply the <code>hours</code> timeUnit operation prior to encoding.

<a name="if">#</a>
<em>shape</em>.<b>if</b>(<em>...condition</em>)

Perform a conditional encoding. If the provided condition (first argument) evaluates to true, apply the provided encoding (second argument).

<a name="legend">#</a>
<em>shape</em>.<b>legend</b>(<em>value</em>)

An object defining properties of the legend.
If `null`, the legend for the encoding channel will be removed.

__Default value:__ If undefined, default [legend properties](https://vega.github.io/vega-lite/docs/legend.html) are applied.

__See also:__ [`legend`](https://vega.github.io/vega-lite/docs/legend.html) documentation.

<a name="max">#</a>
<em>shape</em>.<b>max</b>(<em>field</em>)

Apply the <code>max</code> aggregate operation prior to encoding.

<a name="mean">#</a>
<em>shape</em>.<b>mean</b>(<em>field</em>)

Apply the <code>mean</code> aggregate operation prior to encoding.

<a name="median">#</a>
<em>shape</em>.<b>median</b>(<em>field</em>)

Apply the <code>median</code> aggregate operation prior to encoding.

<a name="milliseconds">#</a>
<em>shape</em>.<b>milliseconds</b>(<em>field</em>)

Apply the <code>milliseconds</code> timeUnit operation prior to encoding.

<a name="min">#</a>
<em>shape</em>.<b>min</b>(<em>field</em>)

Apply the <code>min</code> aggregate operation prior to encoding.

<a name="minutes">#</a>
<em>shape</em>.<b>minutes</b>(<em>field</em>)

Apply the <code>minutes</code> timeUnit operation prior to encoding.

<a name="missing">#</a>
<em>shape</em>.<b>missing</b>(<em>field</em>)

Apply the <code>missing</code> aggregate operation prior to encoding.

<a name="month">#</a>
<em>shape</em>.<b>month</b>(<em>field</em>)

Apply the <code>month</code> timeUnit operation prior to encoding.

<a name="q1">#</a>
<em>shape</em>.<b>q1</b>(<em>field</em>)

Apply the <code>q1</code> aggregate operation prior to encoding.

<a name="q3">#</a>
<em>shape</em>.<b>q3</b>(<em>field</em>)

Apply the <code>q3</code> aggregate operation prior to encoding.

<a name="quarter">#</a>
<em>shape</em>.<b>quarter</b>(<em>field</em>)

Apply the <code>quarter</code> timeUnit operation prior to encoding.

<a name="scale">#</a>
<em>shape</em>.<b>scale</b>(<em>value</em>)

An object defining properties of the channel's scale, which is the function that transforms values in the data domain (numbers, dates, strings, etc) to visual values (pixels, colors, sizes) of the encoding channels.

If `null`, the scale will be [disabled and the data value will be directly encoded](https://vega.github.io/vega-lite/docs/scale.html#disable).

__Default value:__ If undefined, default [scale properties](https://vega.github.io/vega-lite/docs/scale.html) are applied.

__See also:__ [`scale`](https://vega.github.io/vega-lite/docs/scale.html) documentation.

<a name="seconds">#</a>
<em>shape</em>.<b>seconds</b>(<em>field</em>)

Apply the <code>seconds</code> timeUnit operation prior to encoding.

<a name="sort">#</a>
<em>shape</em>.<b>sort</b>(<em>value</em>)

Sort order for the encoded field.

For continuous fields (quantitative or temporal), `sort` can be either `"ascending"` or `"descending"`.

For discrete fields, `sort` can be one of the following:
- `"ascending"` or `"descending"` -- for sorting by the values' natural order in Javascript.
- [A sort-by-encoding definition](https://vega.github.io/vega-lite/docs/sort.html#sort-by-encoding) for sorting by another encoding channel. (This type of sort definition is not available for `row` and `column` channels.)
- [A sort field definition](https://vega.github.io/vega-lite/docs/sort.html#sort-field) for sorting by another field.
- [An array specifying the field values in preferred order](https://vega.github.io/vega-lite/docs/sort.html#sort-array). In this case, the sort order will obey the values in the array, followed by any unspecified values in their original order.  For discrete time field, values in the sort array can be [date-time definition objects](types#datetime). In addition, for time units `"month"` and `"day"`, the values can be the month or day names (case insensitive) or their 3-letter initials (e.g., `"Mon"`, `"Tue"`).
- `null` indicating no sort.

__Default value:__ `"ascending"`

__Note:__ `null` is not supported for `row` and `column`.

__See also:__ [`sort`](https://vega.github.io/vega-lite/docs/sort.html) documentation.

<a name="stderr">#</a>
<em>shape</em>.<b>stderr</b>(<em>field</em>)

Apply the <code>stderr</code> aggregate operation prior to encoding.

<a name="stdev">#</a>
<em>shape</em>.<b>stdev</b>(<em>field</em>)

Apply the <code>stdev</code> aggregate operation prior to encoding.

<a name="stdevp">#</a>
<em>shape</em>.<b>stdevp</b>(<em>field</em>)

Apply the <code>stdevp</code> aggregate operation prior to encoding.

<a name="sum">#</a>
<em>shape</em>.<b>sum</b>(<em>field</em>)

Apply the <code>sum</code> aggregate operation prior to encoding.

<a name="timeHM">#</a>
<em>shape</em>.<b>timeHM</b>(<em>field</em>)

Apply the <code>hoursminutes</code> timeUnit operation prior to encoding.

<a name="timeHMS">#</a>
<em>shape</em>.<b>timeHMS</b>(<em>field</em>)

Apply the <code>hoursminutesseconds</code> timeUnit operation prior to encoding.

<a name="timeMD">#</a>
<em>shape</em>.<b>timeMD</b>(<em>field</em>)

Apply the <code>monthdate</code> timeUnit operation prior to encoding.

<a name="timeMDH">#</a>
<em>shape</em>.<b>timeMDH</b>(<em>field</em>)

Apply the <code>monthdatehours</code> timeUnit operation prior to encoding.

<a name="timeMS">#</a>
<em>shape</em>.<b>timeMS</b>(<em>field</em>)

Apply the <code>minutesseconds</code> timeUnit operation prior to encoding.

<a name="timeQM">#</a>
<em>shape</em>.<b>timeQM</b>(<em>field</em>)

Apply the <code>quartermonth</code> timeUnit operation prior to encoding.

<a name="timeSMS">#</a>
<em>shape</em>.<b>timeSMS</b>(<em>field</em>)

Apply the <code>secondsmilliseconds</code> timeUnit operation prior to encoding.

<a name="timeUnit">#</a>
<em>shape</em>.<b>timeUnit</b>(<em>value</em>)

Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.
or [a temporal field that gets casted as ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).

__Default value:__ `undefined` (None)

__See also:__ [`timeUnit`](https://vega.github.io/vega-lite/docs/timeunit.html) documentation.

<a name="timeYM">#</a>
<em>shape</em>.<b>timeYM</b>(<em>field</em>)

Apply the <code>yearmonth</code> timeUnit operation prior to encoding.

<a name="timeYMD">#</a>
<em>shape</em>.<b>timeYMD</b>(<em>field</em>)

Apply the <code>yearmonthdate</code> timeUnit operation prior to encoding.

<a name="timeYMDH">#</a>
<em>shape</em>.<b>timeYMDH</b>(<em>field</em>)

Apply the <code>yearmonthdatehours</code> timeUnit operation prior to encoding.

<a name="timeYMDHM">#</a>
<em>shape</em>.<b>timeYMDHM</b>(<em>field</em>)

Apply the <code>yearmonthdatehoursminutes</code> timeUnit operation prior to encoding.

<a name="timeYMDHMS">#</a>
<em>shape</em>.<b>timeYMDHMS</b>(<em>field</em>)

Apply the <code>yearmonthdatehoursminutesseconds</code> timeUnit operation prior to encoding.

<a name="timeYQ">#</a>
<em>shape</em>.<b>timeYQ</b>(<em>field</em>)

Apply the <code>yearquarter</code> timeUnit operation prior to encoding.

<a name="timeYQM">#</a>
<em>shape</em>.<b>timeYQM</b>(<em>field</em>)

Apply the <code>yearquartermonth</code> timeUnit operation prior to encoding.

<a name="title">#</a>
<em>shape</em>.<b>title</b>(<em>value</em>)

A title for the field. If `null`, the title will be removed.

__Default value:__  derived from the field's name and transformation function (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the function is displayed as part of the title (e.g., `"Sum of Profit"`). If the field is binned or has a time unit applied, the applied function is shown in parentheses (e.g., `"Profit (binned)"`, `"Transaction Date (year-month)"`).  Otherwise, the title is simply the field name.

__Notes__:

1) You can customize the default field title format by providing the [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config) property in the [config](https://vega.github.io/vega-lite/docs/config.html) or [`fieldTitle` function via the `compile` function's options](https://vega.github.io/vega-lite/docs/compile.html#field-title).

2) If both field definition's `title` and axis, header, or legend `title` are defined, axis/header/legend title will be used.

<a name="type">#</a>
<em>shape</em>.<b>type</b>(<em>value</em>)

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

<a name="utcHM">#</a>
<em>shape</em>.<b>utcHM</b>(<em>field</em>)

Apply the <code>utchoursminutes</code> timeUnit operation prior to encoding.

<a name="utcHMS">#</a>
<em>shape</em>.<b>utcHMS</b>(<em>field</em>)

Apply the <code>utchoursminutesseconds</code> timeUnit operation prior to encoding.

<a name="utcMD">#</a>
<em>shape</em>.<b>utcMD</b>(<em>field</em>)

Apply the <code>utcmonthdate</code> timeUnit operation prior to encoding.

<a name="utcMDH">#</a>
<em>shape</em>.<b>utcMDH</b>(<em>field</em>)

Apply the <code>utcmonthdatehours</code> timeUnit operation prior to encoding.

<a name="utcMS">#</a>
<em>shape</em>.<b>utcMS</b>(<em>field</em>)

Apply the <code>utcminutesseconds</code> timeUnit operation prior to encoding.

<a name="utcQM">#</a>
<em>shape</em>.<b>utcQM</b>(<em>field</em>)

Apply the <code>utcquartermonth</code> timeUnit operation prior to encoding.

<a name="utcSMS">#</a>
<em>shape</em>.<b>utcSMS</b>(<em>field</em>)

Apply the <code>utcsecondsmilliseconds</code> timeUnit operation prior to encoding.

<a name="utcYM">#</a>
<em>shape</em>.<b>utcYM</b>(<em>field</em>)

Apply the <code>utcyearmonth</code> timeUnit operation prior to encoding.

<a name="utcYMD">#</a>
<em>shape</em>.<b>utcYMD</b>(<em>field</em>)

Apply the <code>utcyearmonthdate</code> timeUnit operation prior to encoding.

<a name="utcYMDH">#</a>
<em>shape</em>.<b>utcYMDH</b>(<em>field</em>)

Apply the <code>utcyearmonthdatehours</code> timeUnit operation prior to encoding.

<a name="utcYMDHM">#</a>
<em>shape</em>.<b>utcYMDHM</b>(<em>field</em>)

Apply the <code>utcyearmonthdatehoursminutes</code> timeUnit operation prior to encoding.

<a name="utcYMDHMS">#</a>
<em>shape</em>.<b>utcYMDHMS</b>(<em>field</em>)

Apply the <code>utcyearmonthdatehoursminutesseconds</code> timeUnit operation prior to encoding.

<a name="utcYQ">#</a>
<em>shape</em>.<b>utcYQ</b>(<em>field</em>)

Apply the <code>utcyearquarter</code> timeUnit operation prior to encoding.

<a name="utcYQM">#</a>
<em>shape</em>.<b>utcYQM</b>(<em>field</em>)

Apply the <code>utcyearquartermonth</code> timeUnit operation prior to encoding.

<a name="utcdate">#</a>
<em>shape</em>.<b>utcdate</b>(<em>field</em>)

Apply the <code>utcdate</code> timeUnit operation prior to encoding.

<a name="utcday">#</a>
<em>shape</em>.<b>utcday</b>(<em>field</em>)

Apply the <code>utcday</code> timeUnit operation prior to encoding.

<a name="utchours">#</a>
<em>shape</em>.<b>utchours</b>(<em>field</em>)

Apply the <code>utchours</code> timeUnit operation prior to encoding.

<a name="utcmilliseconds">#</a>
<em>shape</em>.<b>utcmilliseconds</b>(<em>field</em>)

Apply the <code>utcmilliseconds</code> timeUnit operation prior to encoding.

<a name="utcminutes">#</a>
<em>shape</em>.<b>utcminutes</b>(<em>field</em>)

Apply the <code>utcminutes</code> timeUnit operation prior to encoding.

<a name="utcmonth">#</a>
<em>shape</em>.<b>utcmonth</b>(<em>field</em>)

Apply the <code>utcmonth</code> timeUnit operation prior to encoding.

<a name="utcquarter">#</a>
<em>shape</em>.<b>utcquarter</b>(<em>field</em>)

Apply the <code>utcquarter</code> timeUnit operation prior to encoding.

<a name="utcseconds">#</a>
<em>shape</em>.<b>utcseconds</b>(<em>field</em>)

Apply the <code>utcseconds</code> timeUnit operation prior to encoding.

<a name="utcyear">#</a>
<em>shape</em>.<b>utcyear</b>(<em>field</em>)

Apply the <code>utcyear</code> timeUnit operation prior to encoding.

<a name="utcyearmonth">#</a>
<em>shape</em>.<b>utcyearmonth</b>(<em>field</em>)

Apply the <code>utcyearmonth</code> timeUnit operation prior to encoding.

<a name="valid">#</a>
<em>shape</em>.<b>valid</b>(<em>field</em>)

Apply the <code>valid</code> aggregate operation prior to encoding.

<a name="value">#</a>
<em>shape</em>.<b>value</b>(<em>value</em>)

A constant value in visual domain (e.g., `"red"` / "#0099ff" for color, values between `0` to `1` for opacity).

<a name="variance">#</a>
<em>shape</em>.<b>variance</b>(<em>field</em>)

Apply the <code>variance</code> aggregate operation prior to encoding.

<a name="variancep">#</a>
<em>shape</em>.<b>variancep</b>(<em>field</em>)

Apply the <code>variancep</code> aggregate operation prior to encoding.

<a name="year">#</a>
<em>shape</em>.<b>year</b>(<em>field</em>)

Apply the <code>year</code> timeUnit operation prior to encoding.

<a name="yearmonth">#</a>
<em>shape</em>.<b>yearmonth</b>(<em>field</em>)

Apply the <code>yearmonth</code> timeUnit operation prior to encoding.

