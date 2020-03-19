vl.<b>facet</b>(<em>...values</em>)

Specify the <code>facet</code> encoding channel.

The behavior of this method depends on the argument type:

- If the argument is a <code>string</code>, sets the <code>field</code> property.
- Otherwise, sets the properties defined on the input argument(s), if provided.

## <code>facet</code> Method Overview

* <a href="#aggregate">aggregate</a>
* <a href="#align">align</a>
* <a href="#argmax">argmax</a>
* <a href="#argmin">argmin</a>
* <a href="#average">average</a>
* <a href="#bin">bin</a>
* <a href="#bounds">bounds</a>
* <a href="#center">center</a>
* <a href="#ci0">ci0</a>
* <a href="#ci1">ci1</a>
* <a href="#columns">columns</a>
* <a href="#count">count</a>
* <a href="#date">date</a>
* <a href="#day">day</a>
* <a href="#distinct">distinct</a>
* <a href="#field">field</a>
* <a href="#fieldN">fieldN</a>
* <a href="#fieldO">fieldO</a>
* <a href="#fieldQ">fieldQ</a>
* <a href="#fieldT">fieldT</a>
* <a href="#header">header</a>
* <a href="#hours">hours</a>
* <a href="#if">if</a>
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
* <a href="#seconds">seconds</a>
* <a href="#sort">sort</a>
* <a href="#spacing">spacing</a>
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
* <a href="#variance">variance</a>
* <a href="#variancep">variancep</a>
* <a href="#year">year</a>
* <a href="#yearmonth">yearmonth</a>

## <code>facet</code> API Reference

<a id="aggregate" href="#aggregate">#</a>
<em>facet</em>.<b>aggregate</b>(<em>value</em>)

Aggregation function for the field
(e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).

__Default value:__ `undefined` (None)

__See also:__ [`aggregate`](https://vega.github.io/vega-lite/docs/aggregate.html) documentation.

<a id="align" href="#align">#</a>
<em>facet</em>.<b>align</b>(<em>value</em>)

The alignment to apply to grid rows and columns.
The supported string values are `"all"`, `"each"`, and `"none"`.

- For `"none"`, a flow layout will be used, in which adjacent subviews are simply placed one after the other.
- For `"each"`, subviews will be aligned into a clean grid structure, but each row or column may be of variable size.
- For `"all"`, subviews will be aligned and each row or column will be sized identically based on the maximum observed size. String values for this property will be applied to both grid rows and columns.

Alternatively, an object value of the form `{"row": string, "column": string}` can be used to supply different alignments for rows and columns.

__Default value:__ `"all"`.

<a id="argmax" href="#argmax">#</a>
<em>facet</em>.<b>argmax</b>(<em>field</em>)

Apply the <code>argmax</code> aggregate operation prior to encoding.

<a id="argmin" href="#argmin">#</a>
<em>facet</em>.<b>argmin</b>(<em>field</em>)

Apply the <code>argmin</code> aggregate operation prior to encoding.

<a id="average" href="#average">#</a>
<em>facet</em>.<b>average</b>(<em>field</em>)

Apply the <code>average</code> aggregate operation prior to encoding.

<a id="bin" href="#bin">#</a>
<em>facet</em>.<b>bin</b>(<em>value</em>)

A flag for binning a `quantitative` field, [an object defining binning parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that the data for `x` or `y` channel are binned before they are imported into Vega-Lite (`"binned"`).

- If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html) will be applied.

- If `"binned"`, this indicates that the data for the `x` (or `y`) channel are already binned. You can map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust the axis ticks based on the bin step, you can also set the axis's [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.

__Default value:__ `false`

__See also:__ [`bin`](https://vega.github.io/vega-lite/docs/bin.html) documentation.

<a id="bounds" href="#bounds">#</a>
<em>facet</em>.<b>bounds</b>(<em>value</em>)

The bounds calculation method to use for determining the extent of a sub-plot. One of `full` (the default) or `flush`.

- If set to `full`, the entire calculated bounds (including axes, title, and legend) will be used.
- If set to `flush`, only the specified width and height values for the sub-view will be used. The `flush` setting can be useful when attempting to place sub-plots without axes or legends into a uniform grid structure.

__Default value:__ `"full"`

<a id="center" href="#center">#</a>
<em>facet</em>.<b>center</b>(<em>value</em>)

Boolean flag indicating if subviews should be centered relative to their respective rows or columns.

An object value of the form `{"row": boolean, "column": boolean}` can be used to supply different centering values for rows and columns.

__Default value:__ `false`

<a id="ci0" href="#ci0">#</a>
<em>facet</em>.<b>ci0</b>(<em>field</em>)

Apply the <code>ci0</code> aggregate operation prior to encoding.

<a id="ci1" href="#ci1">#</a>
<em>facet</em>.<b>ci1</b>(<em>field</em>)

Apply the <code>ci1</code> aggregate operation prior to encoding.

<a id="columns" href="#columns">#</a>
<em>facet</em>.<b>columns</b>(<em>value</em>)

The number of columns to include in the view composition layout.

__Default value__: `undefined` -- An infinite number of columns (a single row) will be assumed. This is equivalent to
`hconcat` (for `concat`) and to using the `column` channel (for `facet` and `repeat`).

__Note__:

1) This property is only for:
- the general (wrappable) `concat` operator (not `hconcat`/`vconcat`)
- the `facet` and `repeat` operator with one field/repetition definition (without row/column nesting)

2) Setting the `columns` to `1` is equivalent to `vconcat` (for `concat`) and to using the `row` channel (for `facet` and `repeat`).

<a id="count" href="#count">#</a>
<em>facet</em>.<b>count</b>(<em></em>)

Apply the <code>count</code> aggregate operation prior to encoding.

<a id="date" href="#date">#</a>
<em>facet</em>.<b>date</b>(<em>field</em>)

Apply the <code>date</code> timeUnit operation prior to encoding.

<a id="day" href="#day">#</a>
<em>facet</em>.<b>day</b>(<em>field</em>)

Apply the <code>day</code> timeUnit operation prior to encoding.

<a id="distinct" href="#distinct">#</a>
<em>facet</em>.<b>distinct</b>(<em>field</em>)

Apply the <code>distinct</code> aggregate operation prior to encoding.

<a id="field" href="#field">#</a>
<em>facet</em>.<b>field</b>(<em>value</em>)

__Required.__ A string defining the name of the field from which to pull a data value
or an object defining iterated values from the [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.

__See also:__ [`field`](https://vega.github.io/vega-lite/docs/field.html) documentation.

__Notes:__
1)  Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects (e.g., `"field": "foo.bar"` and `"field": "foo['bar']"`).
If field names contain dots or brackets but are not nested, you can use `\\` to escape dots and brackets (e.g., `"a\\.b"` and `"a\\[0\\]"`).
See more details about escaping in the [field documentation](https://vega.github.io/vega-lite/docs/field.html).
2) `field` is not required if `aggregate` is `count`.

<a id="fieldN" href="#fieldN">#</a>
<em>facet</em>.<b>fieldN</b>(<em>field</em>)

Encode the field as a nominal data type.

<a id="fieldO" href="#fieldO">#</a>
<em>facet</em>.<b>fieldO</b>(<em>field</em>)

Encode the field as an ordinal data type.

<a id="fieldQ" href="#fieldQ">#</a>
<em>facet</em>.<b>fieldQ</b>(<em>field</em>)

Encode the field as a quantitative data type.

<a id="fieldT" href="#fieldT">#</a>
<em>facet</em>.<b>fieldT</b>(<em>field</em>)

Encode the field as a temporal data type.

<a id="header" href="#header">#</a>
<em>facet</em>.<b>header</b>(<em>value</em>)

An object defining properties of a facet's header.

<a id="hours" href="#hours">#</a>
<em>facet</em>.<b>hours</b>(<em>field</em>)

Apply the <code>hours</code> timeUnit operation prior to encoding.

<a id="if" href="#if">#</a>
<em>facet</em>.<b>if</b>(<em>...condition</em>)

Perform a conditional encoding. If the provided condition (first argument) evaluates to true, apply the provided encoding (second argument).

<a id="max" href="#max">#</a>
<em>facet</em>.<b>max</b>(<em>field</em>)

Apply the <code>max</code> aggregate operation prior to encoding.

<a id="mean" href="#mean">#</a>
<em>facet</em>.<b>mean</b>(<em>field</em>)

Apply the <code>mean</code> aggregate operation prior to encoding.

<a id="median" href="#median">#</a>
<em>facet</em>.<b>median</b>(<em>field</em>)

Apply the <code>median</code> aggregate operation prior to encoding.

<a id="milliseconds" href="#milliseconds">#</a>
<em>facet</em>.<b>milliseconds</b>(<em>field</em>)

Apply the <code>milliseconds</code> timeUnit operation prior to encoding.

<a id="min" href="#min">#</a>
<em>facet</em>.<b>min</b>(<em>field</em>)

Apply the <code>min</code> aggregate operation prior to encoding.

<a id="minutes" href="#minutes">#</a>
<em>facet</em>.<b>minutes</b>(<em>field</em>)

Apply the <code>minutes</code> timeUnit operation prior to encoding.

<a id="missing" href="#missing">#</a>
<em>facet</em>.<b>missing</b>(<em>field</em>)

Apply the <code>missing</code> aggregate operation prior to encoding.

<a id="month" href="#month">#</a>
<em>facet</em>.<b>month</b>(<em>field</em>)

Apply the <code>month</code> timeUnit operation prior to encoding.

<a id="q1" href="#q1">#</a>
<em>facet</em>.<b>q1</b>(<em>field</em>)

Apply the <code>q1</code> aggregate operation prior to encoding.

<a id="q3" href="#q3">#</a>
<em>facet</em>.<b>q3</b>(<em>field</em>)

Apply the <code>q3</code> aggregate operation prior to encoding.

<a id="quarter" href="#quarter">#</a>
<em>facet</em>.<b>quarter</b>(<em>field</em>)

Apply the <code>quarter</code> timeUnit operation prior to encoding.

<a id="seconds" href="#seconds">#</a>
<em>facet</em>.<b>seconds</b>(<em>field</em>)

Apply the <code>seconds</code> timeUnit operation prior to encoding.

<a id="sort" href="#sort">#</a>
<em>facet</em>.<b>sort</b>(<em>value</em>)

Sort order for the encoded field.

For continuous fields (quantitative or temporal), `sort` can be either `"ascending"` or `"descending"`.

For discrete fields, `sort` can be one of the following:
- `"ascending"` or `"descending"` -- for sorting by the values' natural order in JavaScript.
- [A sort field definition](https://vega.github.io/vega-lite/docs/sort.html#sort-field) for sorting by another field.
- [An array specifying the field values in preferred order](https://vega.github.io/vega-lite/docs/sort.html#sort-array). In this case, the sort order will obey the values in the array, followed by any unspecified values in their original order.  For discrete time field, values in the sort array can be [date-time definition objects](types#datetime). In addition, for time units `"month"` and `"day"`, the values can be the month or day names (case insensitive) or their 3-letter initials (e.g., `"Mon"`, `"Tue"`).
- `null` indicating no sort.

__Default value:__ `"ascending"`

__Note:__ `null` is not supported for `row` and `column`.

<a id="spacing" href="#spacing">#</a>
<em>facet</em>.<b>spacing</b>(<em>value</em>)

The spacing in pixels between sub-views of the composition operator.
An object of the form `{"row": number, "column": number}` can be used to set
different spacing values for rows and columns.

__Default value__: Depends on `"spacing"` property of [the view composition configuration](https://vega.github.io/vega-lite/docs/config.html#view-config) (`20` by default)

<a id="stderr" href="#stderr">#</a>
<em>facet</em>.<b>stderr</b>(<em>field</em>)

Apply the <code>stderr</code> aggregate operation prior to encoding.

<a id="stdev" href="#stdev">#</a>
<em>facet</em>.<b>stdev</b>(<em>field</em>)

Apply the <code>stdev</code> aggregate operation prior to encoding.

<a id="stdevp" href="#stdevp">#</a>
<em>facet</em>.<b>stdevp</b>(<em>field</em>)

Apply the <code>stdevp</code> aggregate operation prior to encoding.

<a id="sum" href="#sum">#</a>
<em>facet</em>.<b>sum</b>(<em>field</em>)

Apply the <code>sum</code> aggregate operation prior to encoding.

<a id="timeHM" href="#timeHM">#</a>
<em>facet</em>.<b>timeHM</b>(<em>field</em>)

Apply the <code>hoursminutes</code> timeUnit operation prior to encoding.

<a id="timeHMS" href="#timeHMS">#</a>
<em>facet</em>.<b>timeHMS</b>(<em>field</em>)

Apply the <code>hoursminutesseconds</code> timeUnit operation prior to encoding.

<a id="timeMD" href="#timeMD">#</a>
<em>facet</em>.<b>timeMD</b>(<em>field</em>)

Apply the <code>monthdate</code> timeUnit operation prior to encoding.

<a id="timeMDH" href="#timeMDH">#</a>
<em>facet</em>.<b>timeMDH</b>(<em>field</em>)

Apply the <code>monthdatehours</code> timeUnit operation prior to encoding.

<a id="timeMS" href="#timeMS">#</a>
<em>facet</em>.<b>timeMS</b>(<em>field</em>)

Apply the <code>minutesseconds</code> timeUnit operation prior to encoding.

<a id="timeQM" href="#timeQM">#</a>
<em>facet</em>.<b>timeQM</b>(<em>field</em>)

Apply the <code>quartermonth</code> timeUnit operation prior to encoding.

<a id="timeSMS" href="#timeSMS">#</a>
<em>facet</em>.<b>timeSMS</b>(<em>field</em>)

Apply the <code>secondsmilliseconds</code> timeUnit operation prior to encoding.

<a id="timeUnit" href="#timeUnit">#</a>
<em>facet</em>.<b>timeUnit</b>(<em>value</em>)

Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.
or [a temporal field that gets casted as ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).

__Default value:__ `undefined` (None)

__See also:__ [`timeUnit`](https://vega.github.io/vega-lite/docs/timeunit.html) documentation.

<a id="timeYM" href="#timeYM">#</a>
<em>facet</em>.<b>timeYM</b>(<em>field</em>)

Apply the <code>yearmonth</code> timeUnit operation prior to encoding.

<a id="timeYMD" href="#timeYMD">#</a>
<em>facet</em>.<b>timeYMD</b>(<em>field</em>)

Apply the <code>yearmonthdate</code> timeUnit operation prior to encoding.

<a id="timeYMDH" href="#timeYMDH">#</a>
<em>facet</em>.<b>timeYMDH</b>(<em>field</em>)

Apply the <code>yearmonthdatehours</code> timeUnit operation prior to encoding.

<a id="timeYMDHM" href="#timeYMDHM">#</a>
<em>facet</em>.<b>timeYMDHM</b>(<em>field</em>)

Apply the <code>yearmonthdatehoursminutes</code> timeUnit operation prior to encoding.

<a id="timeYMDHMS" href="#timeYMDHMS">#</a>
<em>facet</em>.<b>timeYMDHMS</b>(<em>field</em>)

Apply the <code>yearmonthdatehoursminutesseconds</code> timeUnit operation prior to encoding.

<a id="timeYQ" href="#timeYQ">#</a>
<em>facet</em>.<b>timeYQ</b>(<em>field</em>)

Apply the <code>yearquarter</code> timeUnit operation prior to encoding.

<a id="timeYQM" href="#timeYQM">#</a>
<em>facet</em>.<b>timeYQM</b>(<em>field</em>)

Apply the <code>yearquartermonth</code> timeUnit operation prior to encoding.

<a id="title" href="#title">#</a>
<em>facet</em>.<b>title</b>(<em>value</em>)

A title for the field. If `null`, the title will be removed.

__Default value:__  derived from the field's name and transformation function (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the function is displayed as part of the title (e.g., `"Sum of Profit"`). If the field is binned or has a time unit applied, the applied function is shown in parentheses (e.g., `"Profit (binned)"`, `"Transaction Date (year-month)"`).  Otherwise, the title is simply the field name.

__Notes__:

1) You can customize the default field title format by providing the [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config) property in the [config](https://vega.github.io/vega-lite/docs/config.html) or [`fieldTitle` function via the `compile` function's options](https://vega.github.io/vega-lite/docs/compile.html#field-title).

2) If both field definition's `title` and axis, header, or legend `title` are defined, axis/header/legend title will be used.

<a id="type" href="#type">#</a>
<em>facet</em>.<b>type</b>(<em>value</em>)

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
<em>facet</em>.<b>utcHM</b>(<em>field</em>)

Apply the <code>utchoursminutes</code> timeUnit operation prior to encoding.

<a id="utcHMS" href="#utcHMS">#</a>
<em>facet</em>.<b>utcHMS</b>(<em>field</em>)

Apply the <code>utchoursminutesseconds</code> timeUnit operation prior to encoding.

<a id="utcMD" href="#utcMD">#</a>
<em>facet</em>.<b>utcMD</b>(<em>field</em>)

Apply the <code>utcmonthdate</code> timeUnit operation prior to encoding.

<a id="utcMDH" href="#utcMDH">#</a>
<em>facet</em>.<b>utcMDH</b>(<em>field</em>)

Apply the <code>utcmonthdatehours</code> timeUnit operation prior to encoding.

<a id="utcMS" href="#utcMS">#</a>
<em>facet</em>.<b>utcMS</b>(<em>field</em>)

Apply the <code>utcminutesseconds</code> timeUnit operation prior to encoding.

<a id="utcQM" href="#utcQM">#</a>
<em>facet</em>.<b>utcQM</b>(<em>field</em>)

Apply the <code>utcquartermonth</code> timeUnit operation prior to encoding.

<a id="utcSMS" href="#utcSMS">#</a>
<em>facet</em>.<b>utcSMS</b>(<em>field</em>)

Apply the <code>utcsecondsmilliseconds</code> timeUnit operation prior to encoding.

<a id="utcYM" href="#utcYM">#</a>
<em>facet</em>.<b>utcYM</b>(<em>field</em>)

Apply the <code>utcyearmonth</code> timeUnit operation prior to encoding.

<a id="utcYMD" href="#utcYMD">#</a>
<em>facet</em>.<b>utcYMD</b>(<em>field</em>)

Apply the <code>utcyearmonthdate</code> timeUnit operation prior to encoding.

<a id="utcYMDH" href="#utcYMDH">#</a>
<em>facet</em>.<b>utcYMDH</b>(<em>field</em>)

Apply the <code>utcyearmonthdatehours</code> timeUnit operation prior to encoding.

<a id="utcYMDHM" href="#utcYMDHM">#</a>
<em>facet</em>.<b>utcYMDHM</b>(<em>field</em>)

Apply the <code>utcyearmonthdatehoursminutes</code> timeUnit operation prior to encoding.

<a id="utcYMDHMS" href="#utcYMDHMS">#</a>
<em>facet</em>.<b>utcYMDHMS</b>(<em>field</em>)

Apply the <code>utcyearmonthdatehoursminutesseconds</code> timeUnit operation prior to encoding.

<a id="utcYQ" href="#utcYQ">#</a>
<em>facet</em>.<b>utcYQ</b>(<em>field</em>)

Apply the <code>utcyearquarter</code> timeUnit operation prior to encoding.

<a id="utcYQM" href="#utcYQM">#</a>
<em>facet</em>.<b>utcYQM</b>(<em>field</em>)

Apply the <code>utcyearquartermonth</code> timeUnit operation prior to encoding.

<a id="utcdate" href="#utcdate">#</a>
<em>facet</em>.<b>utcdate</b>(<em>field</em>)

Apply the <code>utcdate</code> timeUnit operation prior to encoding.

<a id="utcday" href="#utcday">#</a>
<em>facet</em>.<b>utcday</b>(<em>field</em>)

Apply the <code>utcday</code> timeUnit operation prior to encoding.

<a id="utchours" href="#utchours">#</a>
<em>facet</em>.<b>utchours</b>(<em>field</em>)

Apply the <code>utchours</code> timeUnit operation prior to encoding.

<a id="utcmilliseconds" href="#utcmilliseconds">#</a>
<em>facet</em>.<b>utcmilliseconds</b>(<em>field</em>)

Apply the <code>utcmilliseconds</code> timeUnit operation prior to encoding.

<a id="utcminutes" href="#utcminutes">#</a>
<em>facet</em>.<b>utcminutes</b>(<em>field</em>)

Apply the <code>utcminutes</code> timeUnit operation prior to encoding.

<a id="utcmonth" href="#utcmonth">#</a>
<em>facet</em>.<b>utcmonth</b>(<em>field</em>)

Apply the <code>utcmonth</code> timeUnit operation prior to encoding.

<a id="utcquarter" href="#utcquarter">#</a>
<em>facet</em>.<b>utcquarter</b>(<em>field</em>)

Apply the <code>utcquarter</code> timeUnit operation prior to encoding.

<a id="utcseconds" href="#utcseconds">#</a>
<em>facet</em>.<b>utcseconds</b>(<em>field</em>)

Apply the <code>utcseconds</code> timeUnit operation prior to encoding.

<a id="utcyear" href="#utcyear">#</a>
<em>facet</em>.<b>utcyear</b>(<em>field</em>)

Apply the <code>utcyear</code> timeUnit operation prior to encoding.

<a id="utcyearmonth" href="#utcyearmonth">#</a>
<em>facet</em>.<b>utcyearmonth</b>(<em>field</em>)

Apply the <code>utcyearmonth</code> timeUnit operation prior to encoding.

<a id="valid" href="#valid">#</a>
<em>facet</em>.<b>valid</b>(<em>field</em>)

Apply the <code>valid</code> aggregate operation prior to encoding.

<a id="variance" href="#variance">#</a>
<em>facet</em>.<b>variance</b>(<em>field</em>)

Apply the <code>variance</code> aggregate operation prior to encoding.

<a id="variancep" href="#variancep">#</a>
<em>facet</em>.<b>variancep</b>(<em>field</em>)

Apply the <code>variancep</code> aggregate operation prior to encoding.

<a id="year" href="#year">#</a>
<em>facet</em>.<b>year</b>(<em>field</em>)

Apply the <code>year</code> timeUnit operation prior to encoding.

<a id="yearmonth" href="#yearmonth">#</a>
<em>facet</em>.<b>yearmonth</b>(<em>field</em>)

Apply the <code>yearmonth</code> timeUnit operation prior to encoding.

