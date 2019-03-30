# Vega-Lite API

![Gallery Image](https://vega.github.io/vega-lite/site/static/teaser.png)

A JavaScript API for creating Vega-Lite JSON specifications. [Vega-Lite](https://vega.github.io/vega-lite/) is a high-level grammar for visual analysis that generates complete [Vega](https://vega.github.io/) specifications.

To get started with the Vega-Lite API, see these Observable notebooks:

- [Introduction to Vega-Lite](https://observablehq.com/@uwdata/introduction-to-vega-lite)
- [Vega-Lite API](https://observablehq.com/@vega/vega-lite-api)

## Build Instructions

For a basic setup allowing you to build the API and run tests:

- Clone `https://github.com/vega/vega-lite-api`.
- Run `yarn` to install dependencies for all packages. If you don't have yarn installed, see https://yarnpkg.com/en/docs/install.
- Once installation is complete, run `yarn build` to build the API generator and generate API source code in the `src` directory. Run `yarn test` to additionally run the test suite.

## API Overview

### Chart Constructors

- vl.<b>data</b> - Create a new chart for the given data.
- vl.<b>layer</b> - Create a new layered chart.
- vl.<b>hconcat</b> - Horizontally concatenate charts.
- vl.<b>vconcat</b> - Vertically concatenate charts.
- vl.<b>mark</b> - Create a new mark.
- vl.<b>markArea</b> - Create a new <code>area</code> mark.
- vl.<b>markBar</b> - Create a new <code>bar</code> mark.
- vl.<b>markBoxplot</b> - Create a new <code>boxplot</code> mark.
- vl.<b>markCircle</b> - Create a new <code>circle</code> mark.
- vl.<b>markErrorband</b> - Create a new <code>errorband</code> mark.
- vl.<b>markErrorbar</b> - Create a new <code>errorbar</code> mark.
- vl.<b>markGeoshape</b> - Create a new <code>geoshape</code> mark.
- vl.<b>markLine</b> - Create a new <code>line</code> mark.
- vl.<b>markPoint</b> - Create a new <code>point</code> mark.
- vl.<b>markRect</b> - Create a new <code>rect</code> mark.
- vl.<b>markRule</b> - Create a new <code>rule</code> mark.
- vl.<b>markSquare</b> - Create a new <code>square</code> mark.
- vl.<b>markText</b> - Create a new <code>text</code> mark.
- vl.<b>markTick</b> - Create a new <code>tick</code> mark.
- vl.<b>markTrail</b> - Create a new <code>trail</code> mark.

### Utilities

- vl.<b>register</b> - Register Vega and Vega-Lite with the API.

### Encodings

- vl.<b>color</b> - Specify the <code>color</code> encoding channel.
- vl.<b>column</b> - Specify the <code>column</code> encoding channel.
- vl.<b>detail</b> - Specify the <code>detail</code> encoding channel.
- vl.<b>facet</b> - Specify the <code>facet</code> encoding channel.
- vl.<b>fill</b> - Specify the <code>fill</code> encoding channel.
- vl.<b>fillOpacity</b> - Specify the <code>fillOpacity</code> encoding channel.
- vl.<b>href</b> - Specify the <code>href</code> encoding channel.
- vl.<b>key</b> - Specify the <code>key</code> encoding channel.
- vl.<b>latitude</b> - Specify the <code>latitude</code> encoding channel.
- vl.<b>latitude2</b> - Specify the <code>latitude2</code> encoding channel.
- vl.<b>longitude</b> - Specify the <code>longitude</code> encoding channel.
- vl.<b>longitude2</b> - Specify the <code>longitude2</code> encoding channel.
- vl.<b>opacity</b> - Specify the <code>opacity</code> encoding channel.
- vl.<b>order</b> - Specify the <code>order</code> encoding channel.
- vl.<b>row</b> - Specify the <code>row</code> encoding channel.
- vl.<b>shape</b> - Specify the <code>shape</code> encoding channel.
- vl.<b>size</b> - Specify the <code>size</code> encoding channel.
- vl.<b>stroke</b> - Specify the <code>stroke</code> encoding channel.
- vl.<b>strokeOpacity</b> - Specify the <code>strokeOpacity</code> encoding channel.
- vl.<b>strokeWidth</b> - Specify the <code>strokeWidth</code> encoding channel.
- vl.<b>text</b> - Specify the <code>text</code> encoding channel.
- vl.<b>tooltip</b> - Specify the <code>tooltip</code> encoding channel.
- vl.<b>x</b> - Specify the <code>x</code> encoding channel.
- vl.<b>x2</b> - Specify the <code>x2</code> encoding channel.
- vl.<b>xError</b> - Specify the <code>xError</code> encoding channel.
- vl.<b>xError2</b> - Specify the <code>xError2</code> encoding channel.
- vl.<b>y</b> - Specify the <code>y</code> encoding channel.
- vl.<b>y2</b> - Specify the <code>y2</code> encoding channel.
- vl.<b>yError</b> - Specify the <code>yError</code> encoding channel.
- vl.<b>yError2</b> - Specify the <code>yError2</code> encoding channel.

### References

- vl.<b>field</b> - A reference to a data field.
- vl.<b>repeat</b> - A field variable reference for a repeated chart.
- vl.<b>encoding</b> - A reference to an encoding channel.

### Projections

- vl.<b>projection</b> - Define a projection to map longitude, latitude coordinates.

### Selections

- vl.<b>selectInterval</b> - Define a new <code>interval</code> selection.
- vl.<b>selectMulti</b> - Define a new <code>multi</code> selection.
- vl.<b>selectSingle</b> - Define a new <code>single</code> selection.

### Selection Bindings

- vl.<b>checkbox</b> - Define a new checkbox input element binding.
- vl.<b>radio</b> - Define a new radio input element binding.
- vl.<b>range</b> - Define a new range input element binding.
- vl.<b>select</b> - Define a new select input element binding.

### Logical Operations

- vl.<b>not</b> - Logical NOT operation.
- vl.<b>and</b> - Logical AND operation.
- vl.<b>or</b> - Logical OR operation.

### Data Transformations

- vl.<b>aggregate</b> - Group and summarize data as counts, sums, averages, etc.
- vl.<b>bin</b> - Discretize numeric values into uniform bins.
- vl.<b>calculate</b> - Calculate a new data field value.
- vl.<b>filter</b> - Remove data that does not match provided conditions.
- vl.<b>flatten</b> - Map array fields to new records, one per array entry.
- vl.<b>fold</b> - Collapses one or more data fields into two key, value fields.
- vl.<b>impute</b> - Replace missing values with imputed values.
- vl.<b>joinaggregate</b> - Extend input data with aggregate values as new fields.
- vl.<b>join</b> - A convenient shorthand for joinaggregate.
- vl.<b>sample</b> - Filters random records from the data limit its size.
- vl.<b>stack</b> - Computes running sums to stack groups of values.
- vl.<b>timeUnit</b> - Discretize date/time values into meaningful intervals.
- vl.<b>window</b> - Perform running calculations over sorted groups.
- vl.<b>groupby</b> - Group by fields for aggregate or window transforms.

### Aggregate Operations

- vl.<b>count</b> - A <code>count</code> aggregate operation.
- vl.<b>valid</b> - A <code>valid</code> aggregate operation.
- vl.<b>missing</b> - A <code>missing</code> aggregate operation.
- vl.<b>distinct</b> - A <code>distinct</code> aggregate operation.
- vl.<b>sum</b> - A <code>sum</code> aggregate operation.
- vl.<b>mean</b> - A <code>mean</code> aggregate operation.
- vl.<b>average</b> - A <code>average</code> aggregate operation.
- vl.<b>variance</b> - A <code>variance</code> aggregate operation.
- vl.<b>variancep</b> - A <code>variancep</code> aggregate operation.
- vl.<b>stdev</b> - A <code>stdev</code> aggregate operation.
- vl.<b>stdevp</b> - A <code>stdevp</code> aggregate operation.
- vl.<b>stderr</b> - A <code>stderr</code> aggregate operation.
- vl.<b>median</b> - A <code>median</code> aggregate operation.
- vl.<b>q1</b> - A <code>q1</code> aggregate operation.
- vl.<b>q3</b> - A <code>q3</code> aggregate operation.
- vl.<b>ci0</b> - A <code>ci0</code> aggregate operation.
- vl.<b>ci1</b> - A <code>ci1</code> aggregate operation.
- vl.<b>min</b> - A <code>min</code> aggregate operation.
- vl.<b>max</b> - A <code>max</code> aggregate operation.
- vl.<b>argmin</b> - A <code>argmin</code> aggregate operation.
- vl.<b>argmax</b> - A <code>argmax</code> aggregate operation.

### Window Operations

- vl.<b>row_number</b> - A <code>row_number</code> window operation.
- vl.<b>rank</b> - A <code>rank</code> window operation.
- vl.<b>dense_rank</b> - A <code>dense_rank</code> window operation.
- vl.<b>percent_rank</b> - A <code>percent_rank</code> window operation.
- vl.<b>cume_dist</b> - A <code>cume_dist</code> window operation.
- vl.<b>ntile</b> - A <code>ntile</code> window operation.
- vl.<b>lag</b> - A <code>lag</code> window operation.
- vl.<b>lead</b> - A <code>lead</code> window operation.
- vl.<b>first_value</b> - A <code>first_value</code> window operation.
- vl.<b>last_value</b> - A <code>last_Value</code> window operation.
- vl.<b>nth_value</b> - A <code>nth_value</code> window operation.

### TimeUnit Operations

- vl.<b>year</b> - A time unit operation for <code>year</code>.
- vl.<b>quarter</b> - A time unit operation for <code>quarter</code>.
- vl.<b>month</b> - A time unit operation for <code>month</code>.
- vl.<b>day</b> - A time unit operation for <code>day</code>.
- vl.<b>date</b> - A time unit operation for <code>date</code>.
- vl.<b>hours</b> - A time unit operation for <code>hours</code>.
- vl.<b>minutes</b> - A time unit operation for <code>minutes</code>.
- vl.<b>seconds</b> - A time unit operation for <code>seconds</code>.
- vl.<b>milliseconds</b> - A time unit operation for <code>milliseconds</code>.
- vl.<b>timeYQ</b> - A time unit operation for <code>yearquarter</code>.
- vl.<b>timeYQM</b> - A time unit operation for <code>yearquartermonth</code>.
- vl.<b>timeYM</b> - A time unit operation for <code>yearmonth</code>.
- vl.<b>timeYMD</b> - A time unit operation for <code>yearmonthdate</code>.
- vl.<b>timeYMDH</b> - A time unit operation for <code>yearmonthdatehours</code>.
- vl.<b>timeYMDHM</b> - A time unit operation for <code>yearmonthdatehoursminutes</code>.
- vl.<b>timeYMDHMS</b> - A time unit operation for <code>yearmonthdatehoursminutesseconds</code>.
- vl.<b>timeQM</b> - A time unit operation for <code>quartermonth</code>.
- vl.<b>timeMD</b> - A time unit operation for <code>monthdate</code>.
- vl.<b>timeMDH</b> - A time unit operation for <code>monthdatehours</code>.
- vl.<b>timeHM</b> - A time unit operation for <code>hoursminutes</code>.
- vl.<b>timeHMS</b> - A time unit operation for <code>hoursminutesseconds</code>.
- vl.<b>timeMS</b> - A time unit operation for <code>minutesseconds</code>.
- vl.<b>timeSMS</b> - A time unit operation for <code>secondsmilliseconds</code>.
- vl.<b>utcyear</b> - A time unit operation for <code>utcyear</code>.
- vl.<b>utcquarter</b> - A time unit operation for <code>utcquarter</code>.
- vl.<b>utcmonth</b> - A time unit operation for <code>utcmonth</code>.
- vl.<b>utcday</b> - A time unit operation for <code>utcday</code>.
- vl.<b>utcdate</b> - A time unit operation for <code>utcdate</code>.
- vl.<b>utchours</b> - A time unit operation for <code>utchours</code>.
- vl.<b>utcminutes</b> - A time unit operation for <code>utcminutes</code>.
- vl.<b>utcseconds</b> - A time unit operation for <code>utcseconds</code>.
- vl.<b>utcmilliseconds</b> - A time unit operation for <code>utcmilliseconds</code>.
- vl.<b>utcYQ</b> - A time unit operation for <code>utcyearquarter</code>.
- vl.<b>utcYQM</b> - A time unit operation for <code>utcyearquartermonth</code>.
- vl.<b>utcYM</b> - A time unit operation for <code>utcyearmonth</code>.
- vl.<b>utcYMD</b> - A time unit operation for <code>utcyearmonthdate</code>.
- vl.<b>utcYMDH</b> - A time unit operation for <code>utcyearmonthdatehours</code>.
- vl.<b>utcYMDHM</b> - A time unit operation for <code>utcyearmonthdatehoursminutes</code>.
- vl.<b>utcYMDHMS</b> - A time unit operation for <code>utcyearmonthdatehoursminutesseconds</code>.
- vl.<b>utcQM</b> - A time unit operation for <code>utcquartermonth</code>.
- vl.<b>utcMD</b> - A time unit operation for <code>utcmonthdate</code>.
- vl.<b>utcMDH</b> - A time unit operation for <code>utcmonthdatehours</code>.
- vl.<b>utcHM</b> - A time unit operation for <code>utchoursminutes</code>.
- vl.<b>utcHMS</b> - A time unit operation for <code>utchoursminutesseconds</code>.
- vl.<b>utcMS</b> - A time unit operation for <code>utcminutesseconds</code>.
- vl.<b>utcSMS</b> - A time unit operation for <code>utcsecondsmillisecond</code>.
