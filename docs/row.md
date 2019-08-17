# row

vl.<b>row</b>(<em>...values</em>)

Specify the <code>row</code> encoding channel.

## <code>row</code> Method Overview

* <em>row</em>.<a href="#aggregate">aggregate</a>
* <em>row</em>.<a href="#argmax">argmax</a>
* <em>row</em>.<a href="#argmin">argmin</a>
* <em>row</em>.<a href="#average">average</a>
* <em>row</em>.<a href="#bin">bin</a>
* <em>row</em>.<a href="#ci0">ci0</a>
* <em>row</em>.<a href="#ci1">ci1</a>
* <em>row</em>.<a href="#count">count</a>
* <em>row</em>.<a href="#date">date</a>
* <em>row</em>.<a href="#day">day</a>
* <em>row</em>.<a href="#distinct">distinct</a>
* <em>row</em>.<a href="#field">field</a>
* <em>row</em>.<a href="#fieldN">fieldN</a>
* <em>row</em>.<a href="#fieldO">fieldO</a>
* <em>row</em>.<a href="#fieldQ">fieldQ</a>
* <em>row</em>.<a href="#fieldT">fieldT</a>
* <em>row</em>.<a href="#header">header</a>
* <em>row</em>.<a href="#hours">hours</a>
* <em>row</em>.<a href="#if">if</a>
* <em>row</em>.<a href="#max">max</a>
* <em>row</em>.<a href="#mean">mean</a>
* <em>row</em>.<a href="#median">median</a>
* <em>row</em>.<a href="#milliseconds">milliseconds</a>
* <em>row</em>.<a href="#min">min</a>
* <em>row</em>.<a href="#minutes">minutes</a>
* <em>row</em>.<a href="#missing">missing</a>
* <em>row</em>.<a href="#month">month</a>
* <em>row</em>.<a href="#q1">q1</a>
* <em>row</em>.<a href="#q3">q3</a>
* <em>row</em>.<a href="#quarter">quarter</a>
* <em>row</em>.<a href="#seconds">seconds</a>
* <em>row</em>.<a href="#sort">sort</a>
* <em>row</em>.<a href="#stderr">stderr</a>
* <em>row</em>.<a href="#stdev">stdev</a>
* <em>row</em>.<a href="#stdevp">stdevp</a>
* <em>row</em>.<a href="#sum">sum</a>
* <em>row</em>.<a href="#timeHM">timeHM</a>
* <em>row</em>.<a href="#timeHMS">timeHMS</a>
* <em>row</em>.<a href="#timeMD">timeMD</a>
* <em>row</em>.<a href="#timeMDH">timeMDH</a>
* <em>row</em>.<a href="#timeMS">timeMS</a>
* <em>row</em>.<a href="#timeQM">timeQM</a>
* <em>row</em>.<a href="#timeSMS">timeSMS</a>
* <em>row</em>.<a href="#timeUnit">timeUnit</a>
* <em>row</em>.<a href="#timeYM">timeYM</a>
* <em>row</em>.<a href="#timeYMD">timeYMD</a>
* <em>row</em>.<a href="#timeYMDH">timeYMDH</a>
* <em>row</em>.<a href="#timeYMDHM">timeYMDHM</a>
* <em>row</em>.<a href="#timeYMDHMS">timeYMDHMS</a>
* <em>row</em>.<a href="#timeYQ">timeYQ</a>
* <em>row</em>.<a href="#timeYQM">timeYQM</a>
* <em>row</em>.<a href="#title">title</a>
* <em>row</em>.<a href="#type">type</a>
* <em>row</em>.<a href="#utcHM">utcHM</a>
* <em>row</em>.<a href="#utcHMS">utcHMS</a>
* <em>row</em>.<a href="#utcMD">utcMD</a>
* <em>row</em>.<a href="#utcMDH">utcMDH</a>
* <em>row</em>.<a href="#utcMS">utcMS</a>
* <em>row</em>.<a href="#utcQM">utcQM</a>
* <em>row</em>.<a href="#utcSMS">utcSMS</a>
* <em>row</em>.<a href="#utcYM">utcYM</a>
* <em>row</em>.<a href="#utcYMD">utcYMD</a>
* <em>row</em>.<a href="#utcYMDH">utcYMDH</a>
* <em>row</em>.<a href="#utcYMDHM">utcYMDHM</a>
* <em>row</em>.<a href="#utcYMDHMS">utcYMDHMS</a>
* <em>row</em>.<a href="#utcYQ">utcYQ</a>
* <em>row</em>.<a href="#utcYQM">utcYQM</a>
* <em>row</em>.<a href="#utcdate">utcdate</a>
* <em>row</em>.<a href="#utcday">utcday</a>
* <em>row</em>.<a href="#utchours">utchours</a>
* <em>row</em>.<a href="#utcmilliseconds">utcmilliseconds</a>
* <em>row</em>.<a href="#utcminutes">utcminutes</a>
* <em>row</em>.<a href="#utcmonth">utcmonth</a>
* <em>row</em>.<a href="#utcquarter">utcquarter</a>
* <em>row</em>.<a href="#utcseconds">utcseconds</a>
* <em>row</em>.<a href="#utcyear">utcyear</a>
* <em>row</em>.<a href="#utcyearmonth">utcyearmonth</a>
* <em>row</em>.<a href="#valid">valid</a>
* <em>row</em>.<a href="#variance">variance</a>
* <em>row</em>.<a href="#variancep">variancep</a>
* <em>row</em>.<a href="#year">year</a>
* <em>row</em>.<a href="#yearmonth">yearmonth</a>

## <code>row</code> API Reference

<a name="aggregate">#</a>
<em>row</em>.<b>aggregate</b>(<em>value</em>)

Aggregation function for the field
(e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).

__Default value:__ `undefined` (None)

__See also:__ [`aggregate`](https://vega.github.io/vega-lite/docs/aggregate.html) documentation.

<a name="argmax">#</a>
<em>row</em>.<b>argmax</b>(<em>field</em>)

Apply the <code>argmax</code> aggregate operation prior to encoding.

<a name="argmin">#</a>
<em>row</em>.<b>argmin</b>(<em>field</em>)

Apply the <code>argmin</code> aggregate operation prior to encoding.

<a name="average">#</a>
<em>row</em>.<b>average</b>(<em>field</em>)

Apply the <code>average</code> aggregate operation prior to encoding.

<a name="bin">#</a>
<em>row</em>.<b>bin</b>(<em>value</em>)

A flag for binning a `quantitative` field, [an object defining binning parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that the data for `x` or `y` channel are binned before they are imported into Vega-Lite (`"binned"`).

- If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html) will be applied.

- If `"binned"`, this indicates that the data for the `x` (or `y`) channel are already binned. You can map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust the axis ticks based on the bin step, you can also set the axis's [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.

__Default value:__ `false`

__See also:__ [`bin`](https://vega.github.io/vega-lite/docs/bin.html) documentation.

<a name="ci0">#</a>
<em>row</em>.<b>ci0</b>(<em>field</em>)

Apply the <code>ci0</code> aggregate operation prior to encoding.

<a name="ci1">#</a>
<em>row</em>.<b>ci1</b>(<em>field</em>)

Apply the <code>ci1</code> aggregate operation prior to encoding.

<a name="count">#</a>
<em>row</em>.<b>count</b>(<em></em>)

Apply the <code>count</code> aggregate operation prior to encoding.

<a name="date">#</a>
<em>row</em>.<b>date</b>(<em>field</em>)

Apply the <code>date</code> timeUnit operation prior to encoding.

<a name="day">#</a>
<em>row</em>.<b>day</b>(<em>field</em>)

Apply the <code>day</code> timeUnit operation prior to encoding.

<a name="distinct">#</a>
<em>row</em>.<b>distinct</b>(<em>field</em>)

Apply the <code>distinct</code> aggregate operation prior to encoding.

<a name="field">#</a>
<em>row</em>.<b>field</b>(<em>value</em>)

__Required.__ A string defining the name of the field from which to pull a data value
or an object defining iterated values from the [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.

__See also:__ [`field`](https://vega.github.io/vega-lite/docs/field.html) documentation.

__Notes:__
1)  Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects (e.g., `"field": "foo.bar"` and `"field": "foo['bar']"`).
If field names contain dots or brackets but are not nested, you can use `\\` to escape dots and brackets (e.g., `"a\\.b"` and `"a\\[0\\]"`).
See more details about escaping in the [field documentation](https://vega.github.io/vega-lite/docs/field.html).
2) `field` is not required if `aggregate` is `count`.

<a name="fieldN">#</a>
<em>row</em>.<b>fieldN</b>(<em>field</em>)

Encode the field as a nominal data type.

<a name="fieldO">#</a>
<em>row</em>.<b>fieldO</b>(<em>field</em>)

Encode the field as an ordinal data type.

<a name="fieldQ">#</a>
<em>row</em>.<b>fieldQ</b>(<em>field</em>)

Encode the field as a quantitative data type.

<a name="fieldT">#</a>
<em>row</em>.<b>fieldT</b>(<em>field</em>)

Encode the field as a temporal data type.

<a name="header">#</a>
<em>row</em>.<b>header</b>(<em>value</em>)

An object defining properties of a facet's header.

<a name="hours">#</a>
<em>row</em>.<b>hours</b>(<em>field</em>)

Apply the <code>hours</code> timeUnit operation prior to encoding.

<a name="if">#</a>
<em>row</em>.<b>if</b>(<em>...condition</em>)

Perform a conditional encoding. If the provided condition (first argument) evaluates to true, apply the provided encoding (second argument).

<a name="max">#</a>
<em>row</em>.<b>max</b>(<em>field</em>)

Apply the <code>max</code> aggregate operation prior to encoding.

<a name="mean">#</a>
<em>row</em>.<b>mean</b>(<em>field</em>)

Apply the <code>mean</code> aggregate operation prior to encoding.

<a name="median">#</a>
<em>row</em>.<b>median</b>(<em>field</em>)

Apply the <code>median</code> aggregate operation prior to encoding.

<a name="milliseconds">#</a>
<em>row</em>.<b>milliseconds</b>(<em>field</em>)

Apply the <code>milliseconds</code> timeUnit operation prior to encoding.

<a name="min">#</a>
<em>row</em>.<b>min</b>(<em>field</em>)

Apply the <code>min</code> aggregate operation prior to encoding.

<a name="minutes">#</a>
<em>row</em>.<b>minutes</b>(<em>field</em>)

Apply the <code>minutes</code> timeUnit operation prior to encoding.

<a name="missing">#</a>
<em>row</em>.<b>missing</b>(<em>field</em>)

Apply the <code>missing</code> aggregate operation prior to encoding.

<a name="month">#</a>
<em>row</em>.<b>month</b>(<em>field</em>)

Apply the <code>month</code> timeUnit operation prior to encoding.

<a name="q1">#</a>
<em>row</em>.<b>q1</b>(<em>field</em>)

Apply the <code>q1</code> aggregate operation prior to encoding.

<a name="q3">#</a>
<em>row</em>.<b>q3</b>(<em>field</em>)

Apply the <code>q3</code> aggregate operation prior to encoding.

<a name="quarter">#</a>
<em>row</em>.<b>quarter</b>(<em>field</em>)

Apply the <code>quarter</code> timeUnit operation prior to encoding.

<a name="seconds">#</a>
<em>row</em>.<b>seconds</b>(<em>field</em>)

Apply the <code>seconds</code> timeUnit operation prior to encoding.

<a name="sort">#</a>
<em>row</em>.<b>sort</b>(<em>value</em>)

Sort order for the encoded field.

For continuous fields (quantitative or temporal), `sort` can be either `"ascending"` or `"descending"`.

For discrete fields, `sort` can be one of the following:
- `"ascending"` or `"descending"` -- for sorting by the values' natural order in Javascript.
- [A sort field definition](https://vega.github.io/vega-lite/docs/sort.html#sort-field) for sorting by another field.
- [An array specifying the field values in preferred order](https://vega.github.io/vega-lite/docs/sort.html#sort-array). In this case, the sort order will obey the values in the array, followed by any unspecified values in their original order.  For discrete time field, values in the sort array can be [date-time definition objects](types#datetime). In addition, for time units `"month"` and `"day"`, the values can be the month or day names (case insensitive) or their 3-letter initials (e.g., `"Mon"`, `"Tue"`).
- `null` indicating no sort.

__Default value:__ `"ascending"`

__Note:__ `null` is not supported for `row` and `column`.

<a name="stderr">#</a>
<em>row</em>.<b>stderr</b>(<em>field</em>)

Apply the <code>stderr</code> aggregate operation prior to encoding.

<a name="stdev">#</a>
<em>row</em>.<b>stdev</b>(<em>field</em>)

Apply the <code>stdev</code> aggregate operation prior to encoding.

<a name="stdevp">#</a>
<em>row</em>.<b>stdevp</b>(<em>field</em>)

Apply the <code>stdevp</code> aggregate operation prior to encoding.

<a name="sum">#</a>
<em>row</em>.<b>sum</b>(<em>field</em>)

Apply the <code>sum</code> aggregate operation prior to encoding.

<a name="timeHM">#</a>
<em>row</em>.<b>timeHM</b>(<em>field</em>)

Apply the <code>hoursminutes</code> timeUnit operation prior to encoding.

<a name="timeHMS">#</a>
<em>row</em>.<b>timeHMS</b>(<em>field</em>)

Apply the <code>hoursminutesseconds</code> timeUnit operation prior to encoding.

<a name="timeMD">#</a>
<em>row</em>.<b>timeMD</b>(<em>field</em>)

Apply the <code>monthdate</code> timeUnit operation prior to encoding.

<a name="timeMDH">#</a>
<em>row</em>.<b>timeMDH</b>(<em>field</em>)

Apply the <code>monthdatehours</code> timeUnit operation prior to encoding.

<a name="timeMS">#</a>
<em>row</em>.<b>timeMS</b>(<em>field</em>)

Apply the <code>minutesseconds</code> timeUnit operation prior to encoding.

<a name="timeQM">#</a>
<em>row</em>.<b>timeQM</b>(<em>field</em>)

Apply the <code>quartermonth</code> timeUnit operation prior to encoding.

<a name="timeSMS">#</a>
<em>row</em>.<b>timeSMS</b>(<em>field</em>)

Apply the <code>secondsmilliseconds</code> timeUnit operation prior to encoding.

<a name="timeUnit">#</a>
<em>row</em>.<b>timeUnit</b>(<em>value</em>)

Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.
or [a temporal field that gets casted as ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).

__Default value:__ `undefined` (None)

__See also:__ [`timeUnit`](https://vega.github.io/vega-lite/docs/timeunit.html) documentation.

<a name="timeYM">#</a>
<em>row</em>.<b>timeYM</b>(<em>field</em>)

Apply the <code>yearmonth</code> timeUnit operation prior to encoding.

<a name="timeYMD">#</a>
<em>row</em>.<b>timeYMD</b>(<em>field</em>)

Apply the <code>yearmonthdate</code> timeUnit operation prior to encoding.

<a name="timeYMDH">#</a>
<em>row</em>.<b>timeYMDH</b>(<em>field</em>)

Apply the <code>yearmonthdatehours</code> timeUnit operation prior to encoding.

<a name="timeYMDHM">#</a>
<em>row</em>.<b>timeYMDHM</b>(<em>field</em>)

Apply the <code>yearmonthdatehoursminutes</code> timeUnit operation prior to encoding.

<a name="timeYMDHMS">#</a>
<em>row</em>.<b>timeYMDHMS</b>(<em>field</em>)

Apply the <code>yearmonthdatehoursminutesseconds</code> timeUnit operation prior to encoding.

<a name="timeYQ">#</a>
<em>row</em>.<b>timeYQ</b>(<em>field</em>)

Apply the <code>yearquarter</code> timeUnit operation prior to encoding.

<a name="timeYQM">#</a>
<em>row</em>.<b>timeYQM</b>(<em>field</em>)

Apply the <code>yearquartermonth</code> timeUnit operation prior to encoding.

<a name="title">#</a>
<em>row</em>.<b>title</b>(<em>value</em>)

A title for the field. If `null`, the title will be removed.

__Default value:__  derived from the field's name and transformation function (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the function is displayed as part of the title (e.g., `"Sum of Profit"`). If the field is binned or has a time unit applied, the applied function is shown in parentheses (e.g., `"Profit (binned)"`, `"Transaction Date (year-month)"`).  Otherwise, the title is simply the field name.

__Notes__:

1) You can customize the default field title format by providing the [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config) property in the [config](https://vega.github.io/vega-lite/docs/config.html) or [`fieldTitle` function via the `compile` function's options](https://vega.github.io/vega-lite/docs/compile.html#field-title).

2) If both field definition's `title` and axis, header, or legend `title` are defined, axis/header/legend title will be used.

<a name="type">#</a>
<em>row</em>.<b>type</b>(<em>value</em>)

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
<em>row</em>.<b>utcHM</b>(<em>field</em>)

Apply the <code>utchoursminutes</code> timeUnit operation prior to encoding.

<a name="utcHMS">#</a>
<em>row</em>.<b>utcHMS</b>(<em>field</em>)

Apply the <code>utchoursminutesseconds</code> timeUnit operation prior to encoding.

<a name="utcMD">#</a>
<em>row</em>.<b>utcMD</b>(<em>field</em>)

Apply the <code>utcmonthdate</code> timeUnit operation prior to encoding.

<a name="utcMDH">#</a>
<em>row</em>.<b>utcMDH</b>(<em>field</em>)

Apply the <code>utcmonthdatehours</code> timeUnit operation prior to encoding.

<a name="utcMS">#</a>
<em>row</em>.<b>utcMS</b>(<em>field</em>)

Apply the <code>utcminutesseconds</code> timeUnit operation prior to encoding.

<a name="utcQM">#</a>
<em>row</em>.<b>utcQM</b>(<em>field</em>)

Apply the <code>utcquartermonth</code> timeUnit operation prior to encoding.

<a name="utcSMS">#</a>
<em>row</em>.<b>utcSMS</b>(<em>field</em>)

Apply the <code>utcsecondsmilliseconds</code> timeUnit operation prior to encoding.

<a name="utcYM">#</a>
<em>row</em>.<b>utcYM</b>(<em>field</em>)

Apply the <code>utcyearmonth</code> timeUnit operation prior to encoding.

<a name="utcYMD">#</a>
<em>row</em>.<b>utcYMD</b>(<em>field</em>)

Apply the <code>utcyearmonthdate</code> timeUnit operation prior to encoding.

<a name="utcYMDH">#</a>
<em>row</em>.<b>utcYMDH</b>(<em>field</em>)

Apply the <code>utcyearmonthdatehours</code> timeUnit operation prior to encoding.

<a name="utcYMDHM">#</a>
<em>row</em>.<b>utcYMDHM</b>(<em>field</em>)

Apply the <code>utcyearmonthdatehoursminutes</code> timeUnit operation prior to encoding.

<a name="utcYMDHMS">#</a>
<em>row</em>.<b>utcYMDHMS</b>(<em>field</em>)

Apply the <code>utcyearmonthdatehoursminutesseconds</code> timeUnit operation prior to encoding.

<a name="utcYQ">#</a>
<em>row</em>.<b>utcYQ</b>(<em>field</em>)

Apply the <code>utcyearquarter</code> timeUnit operation prior to encoding.

<a name="utcYQM">#</a>
<em>row</em>.<b>utcYQM</b>(<em>field</em>)

Apply the <code>utcyearquartermonth</code> timeUnit operation prior to encoding.

<a name="utcdate">#</a>
<em>row</em>.<b>utcdate</b>(<em>field</em>)

Apply the <code>utcdate</code> timeUnit operation prior to encoding.

<a name="utcday">#</a>
<em>row</em>.<b>utcday</b>(<em>field</em>)

Apply the <code>utcday</code> timeUnit operation prior to encoding.

<a name="utchours">#</a>
<em>row</em>.<b>utchours</b>(<em>field</em>)

Apply the <code>utchours</code> timeUnit operation prior to encoding.

<a name="utcmilliseconds">#</a>
<em>row</em>.<b>utcmilliseconds</b>(<em>field</em>)

Apply the <code>utcmilliseconds</code> timeUnit operation prior to encoding.

<a name="utcminutes">#</a>
<em>row</em>.<b>utcminutes</b>(<em>field</em>)

Apply the <code>utcminutes</code> timeUnit operation prior to encoding.

<a name="utcmonth">#</a>
<em>row</em>.<b>utcmonth</b>(<em>field</em>)

Apply the <code>utcmonth</code> timeUnit operation prior to encoding.

<a name="utcquarter">#</a>
<em>row</em>.<b>utcquarter</b>(<em>field</em>)

Apply the <code>utcquarter</code> timeUnit operation prior to encoding.

<a name="utcseconds">#</a>
<em>row</em>.<b>utcseconds</b>(<em>field</em>)

Apply the <code>utcseconds</code> timeUnit operation prior to encoding.

<a name="utcyear">#</a>
<em>row</em>.<b>utcyear</b>(<em>field</em>)

Apply the <code>utcyear</code> timeUnit operation prior to encoding.

<a name="utcyearmonth">#</a>
<em>row</em>.<b>utcyearmonth</b>(<em>field</em>)

Apply the <code>utcyearmonth</code> timeUnit operation prior to encoding.

<a name="valid">#</a>
<em>row</em>.<b>valid</b>(<em>field</em>)

Apply the <code>valid</code> aggregate operation prior to encoding.

<a name="variance">#</a>
<em>row</em>.<b>variance</b>(<em>field</em>)

Apply the <code>variance</code> aggregate operation prior to encoding.

<a name="variancep">#</a>
<em>row</em>.<b>variancep</b>(<em>field</em>)

Apply the <code>variancep</code> aggregate operation prior to encoding.

<a name="year">#</a>
<em>row</em>.<b>year</b>(<em>field</em>)

Apply the <code>year</code> timeUnit operation prior to encoding.

<a name="yearmonth">#</a>
<em>row</em>.<b>yearmonth</b>(<em>field</em>)

Apply the <code>yearmonth</code> timeUnit operation prior to encoding.

