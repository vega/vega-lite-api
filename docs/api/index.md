## Vega-Lite API Reference

### Chart Constructors

- <a href="mark">vl.<b>mark</b></a> - Create a new mark of unspecified type.
- <a href="markArea">vl.<b>markArea</b></a> - Create a new <code>area</code> mark.
- <a href="markBar">vl.<b>markBar</b></a> - Create a new <code>bar</code> mark.
- <a href="markBoxplot">vl.<b>markBoxplot</b></a> - Create a new <code>boxplot</code> mark.
- <a href="markCircle">vl.<b>markCircle</b></a> - Create a new <code>circle</code> mark.
- <a href="markErrorband">vl.<b>markErrorband</b></a> - Create a new <code>errorband</code> mark.
- <a href="markErrorbar">vl.<b>markErrorbar</b></a> - Create a new <code>errorbar</code> mark.
- <a href="markGeoshape">vl.<b>markGeoshape</b></a> - Create a new <code>geoshape</code> mark.
- <a href="markImage">vl.<b>markImage</b></a> - Create a new <code>image</code> mark.
- <a href="markLine">vl.<b>markLine</b></a> - Create a new <code>line</code> mark.
- <a href="markPoint">vl.<b>markPoint</b></a> - Create a new <code>point</code> mark.
- <a href="markRect">vl.<b>markRect</b></a> - Create a new <code>rect</code> mark.
- <a href="markRule">vl.<b>markRule</b></a> - Create a new <code>rule</code> mark.
- <a href="markSquare">vl.<b>markSquare</b></a> - Create a new <code>square</code> mark.
- <a href="markText">vl.<b>markText</b></a> - Create a new <code>text</code> mark.
- <a href="markTick">vl.<b>markTick</b></a> - Create a new <code>tick</code> mark.
- <a href="markTrail">vl.<b>markTrail</b></a> - Create a new <code>trail</code> mark.
- <a href="layer">vl.<b>layer</b></a> - Create a new layered chart.
- <a href="hconcat">vl.<b>hconcat</b></a> - Horizontally concatenate charts.
- <a href="vconcat">vl.<b>vconcat</b></a> - Vertically concatenate charts.

### Utilities

- <a href="register">vl.<b>register</b></a> - Register Vega and Vega-Lite with the API.
- <a href="vega">vl.<b>vega</b></a> - Access the registered Vega instance.
- <a href="vegalite">vl.<b>vegalite</b></a> - Access the registered Vega-Lite instance.

### Data

- <a href="data">vl.<b>data</b></a> - Create a new data reference for a chart or lookup.
- <a href="urlData">vl.<b>urlData</b></a> - Define a url data source.
- <a href="inlineData">vl.<b>inlineData</b></a> - Define a inline data source.
- <a href="sequence">vl.<b>sequence</b></a> - Define a <code>sequence</code> data generator.
- <a href="sphere">vl.<b>sphere</b></a> - Define a <code>sphere</code> data generator.
- <a href="graticule">vl.<b>graticule</b></a> - Define a <code>graticule</code> data generator.
- <a href="csv">vl.<b>csv</b></a> - Define a data source for <code>csv</code> format data.
- <a href="dsv">vl.<b>dsv</b></a> - Define a data source for <code>dsv</code> format data.
- <a href="json">vl.<b>json</b></a> - Define a data source for <code>json</code> format data.
- <a href="topojson">vl.<b>topojson</b></a> - Define a data source for <code>topojson</code> format data.
- <a href="tsv">vl.<b>tsv</b></a> - Define a data source for <code>tsv</code> format data.
- <a href="csvFormat">vl.<b>csvFormat</b></a> - Specify parsing of <code>csv</code> format data.
- <a href="dsvFormat">vl.<b>dsvFormat</b></a> - Specify parsing of <code>dsv</code> format data.
- <a href="jsonFormat">vl.<b>jsonFormat</b></a> - Specify parsing of <code>json</code> format data.
- <a href="topojsonFormat">vl.<b>topojsonFormat</b></a> - Specify parsing of <code>topojson</code> format data.
- <a href="tsvFormat">vl.<b>tsvFormat</b></a> - Specify parsing of <code>tsv</code> format data.
- <a href="lookupData">vl.<b>lookupData</b></a> - Specify a lookup on a secondary data source.

### Encodings

- <a href="color">vl.<b>color</b></a> - Specify the <code>color</code> encoding channel.
- <a href="column">vl.<b>column</b></a> - Specify the <code>column</code> encoding channel.
- <a href="detail">vl.<b>detail</b></a> - Specify the <code>detail</code> encoding channel.
- <a href="facet">vl.<b>facet</b></a> - Specify the <code>facet</code> encoding channel.
- <a href="fill">vl.<b>fill</b></a> - Specify the <code>fill</code> encoding channel.
- <a href="fillOpacity">vl.<b>fillOpacity</b></a> - Specify the <code>fillOpacity</code> encoding channel.
- <a href="href">vl.<b>href</b></a> - Specify the <code>href</code> encoding channel.
- <a href="key">vl.<b>key</b></a> - Specify the <code>key</code> encoding channel.
- <a href="latitude">vl.<b>latitude</b></a> - Specify the <code>latitude</code> encoding channel.
- <a href="latitude2">vl.<b>latitude2</b></a> - Specify the <code>latitude2</code> encoding channel.
- <a href="longitude">vl.<b>longitude</b></a> - Specify the <code>longitude</code> encoding channel.
- <a href="longitude2">vl.<b>longitude2</b></a> - Specify the <code>longitude2</code> encoding channel.
- <a href="opacity">vl.<b>opacity</b></a> - Specify the <code>opacity</code> encoding channel.
- <a href="order">vl.<b>order</b></a> - Specify the <code>order</code> encoding channel.
- <a href="row">vl.<b>row</b></a> - Specify the <code>row</code> encoding channel.
- <a href="shape">vl.<b>shape</b></a> - Specify the <code>shape</code> encoding channel.
- <a href="size">vl.<b>size</b></a> - Specify the <code>size</code> encoding channel.
- <a href="stroke">vl.<b>stroke</b></a> - Specify the <code>stroke</code> encoding channel.
- <a href="strokeOpacity">vl.<b>strokeOpacity</b></a> - Specify the <code>strokeOpacity</code> encoding channel.
- <a href="strokeWidth">vl.<b>strokeWidth</b></a> - Specify the <code>strokeWidth</code> encoding channel.
- <a href="text">vl.<b>text</b></a> - Specify the <code>text</code> encoding channel.
- <a href="tooltip">vl.<b>tooltip</b></a> - Specify the <code>tooltip</code> encoding channel.
- <a href="url">vl.<b>url</b></a> - Specify the <code>url</code> encoding channel.
- <a href="x">vl.<b>x</b></a> - Specify the <code>x</code> encoding channel.
- <a href="x2">vl.<b>x2</b></a> - Specify the <code>x2</code> encoding channel.
- <a href="xError">vl.<b>xError</b></a> - Specify the <code>xError</code> encoding channel.
- <a href="xError2">vl.<b>xError2</b></a> - Specify the <code>xError2</code> encoding channel.
- <a href="y">vl.<b>y</b></a> - Specify the <code>y</code> encoding channel.
- <a href="y2">vl.<b>y2</b></a> - Specify the <code>y2</code> encoding channel.
- <a href="yError">vl.<b>yError</b></a> - Specify the <code>yError</code> encoding channel.
- <a href="yError2">vl.<b>yError2</b></a> - Specify the <code>yError2</code> encoding channel.

### References

- <a href="field">vl.<b>field</b></a> - A reference to a data field.
- <a href="fieldN">vl.<b>fieldN</b></a> - A reference to a nominal data field.
- <a href="fieldO">vl.<b>fieldO</b></a> - A reference to an ordinal data field.
- <a href="fieldQ">vl.<b>fieldQ</b></a> - A reference to a quantitative data field.
- <a href="fieldT">vl.<b>fieldT</b></a> - A reference to a temporal data field.
- <a href="encoding">vl.<b>encoding</b></a> - A reference to an encoding channel.
- <a href="repeat">vl.<b>repeat</b></a> - A field variable reference for a repeated chart.
- <a href="value">vl.<b>value</b></a> - A constant encoding value.

### Projections

- <a href="projection">vl.<b>projection</b></a> - Define a cartographic projection for longitude, latitude coordinates.

### Selections

- <a href="selectInterval">vl.<b>selectInterval</b></a> - Define a new <code>interval</code> selection.
- <a href="selectMulti">vl.<b>selectMulti</b></a> - Define a new <code>multi</code> selection.
- <a href="selectSingle">vl.<b>selectSingle</b></a> - Define a new <code>single</code> selection.

### Selection Bindings

- <a href="checkbox">vl.<b>checkbox</b></a> - Define a new HTML <code>checkbox</code> input element binding.
- <a href="menu">vl.<b>menu</b></a> - Define a new HTML <code>select</code> input element binding.
- <a href="radio">vl.<b>radio</b></a> - Define a new HTML <code>radio</code> input element binding.
- <a href="slider">vl.<b>slider</b></a> - Define a new HTML <code>range</code> input element binding.

### Logical Operations

- <a href="not">vl.<b>not</b></a> - Logical NOT operation.
- <a href="and">vl.<b>and</b></a> - Logical AND operation.
- <a href="or">vl.<b>or</b></a> - Logical OR operation.

### Data Transformations

- <a href="aggregate">vl.<b>aggregate</b></a> - Group and summarize data as counts, sums, averages, etc.
- <a href="bin">vl.<b>bin</b></a> - Discretize numeric values into uniform bins.
- <a href="calculate">vl.<b>calculate</b></a> - Calculate a new data field value.
- <a href="filter">vl.<b>filter</b></a> - Remove data that does not match provided conditions.
- <a href="flatten">vl.<b>flatten</b></a> - Map array fields to new records, one per array entry.
- <a href="fold">vl.<b>fold</b></a> - Collapse one or more data fields into two key, value fields.
- <a href="impute">vl.<b>impute</b></a> - Fill in missing values with imputed values.
- <a href="joinaggregate">vl.<b>joinaggregate</b></a> - Extend input data with aggregate values as new fields.
- <a href="join">vl.<b>join</b></a> - A convenient shorthand for joinaggregate.
- <a href="lookup">vl.<b>lookup</b></a> - Extend input data with values from another data source.
- <a href="sample">vl.<b>sample</b></a> - Filter random records from the data limit its size.
- <a href="stack">vl.<b>stack</b></a> - Compute running sums to stack groups of values.
- <a href="timeUnit">vl.<b>timeUnit</b></a> - Discretize date/time values into meaningful intervals.
- <a href="window">vl.<b>window</b></a> - Perform running calculations over sorted groups.
- <a href="groupby">vl.<b>groupby</b></a> - Group by fields for aggregate or window transforms.

### Aggregate Operations

- <a href="count">vl.<b>count</b></a> - Specify a <code>count</code> aggregate operation.
- <a href="valid">vl.<b>valid</b></a> - Specify a <code>valid</code> aggregate operation.
- <a href="missing">vl.<b>missing</b></a> - Specify a <code>missing</code> aggregate operation.
- <a href="distinct">vl.<b>distinct</b></a> - Specify a <code>distinct</code> aggregate operation.
- <a href="sum">vl.<b>sum</b></a> - Specify a <code>sum</code> aggregate operation.
- <a href="mean">vl.<b>mean</b></a> - Specify a <code>mean</code> aggregate operation.
- <a href="average">vl.<b>average</b></a> - Specify an <code>average</code> aggregate operation.
- <a href="variance">vl.<b>variance</b></a> - Specify a <code>variance</code> aggregate operation.
- <a href="variancep">vl.<b>variancep</b></a> - Specify a <code>variancep</code> aggregate operation.
- <a href="stdev">vl.<b>stdev</b></a> - Specify a <code>stdev</code> aggregate operation.
- <a href="stdevp">vl.<b>stdevp</b></a> - Specify a <code>stdevp</code> aggregate operation.
- <a href="stderr">vl.<b>stderr</b></a> - Specify a <code>stderr</code> aggregate operation.
- <a href="median">vl.<b>median</b></a> - Specify a <code>median</code> aggregate operation.
- <a href="q1">vl.<b>q1</b></a> - Specify a <code>q1</code> aggregate operation.
- <a href="q3">vl.<b>q3</b></a> - Specify a <code>q3</code> aggregate operation.
- <a href="ci0">vl.<b>ci0</b></a> - Specify a <code>ci0</code> aggregate operation.
- <a href="ci1">vl.<b>ci1</b></a> - Specify a <code>ci1</code> aggregate operation.
- <a href="min">vl.<b>min</b></a> - Specify a <code>min</code> aggregate operation.
- <a href="max">vl.<b>max</b></a> - Specify a <code>max</code> aggregate operation.
- <a href="argmin">vl.<b>argmin</b></a> - Specify an <code>argmin</code> aggregate operation.
- <a href="argmax">vl.<b>argmax</b></a> - Specify an <code>argmax</code> aggregate operation.

### Window Operations

- <a href="row_number">vl.<b>row_number</b></a> - A <code>row_number</code> window operation.
- <a href="rank">vl.<b>rank</b></a> - A <code>rank</code> window operation.
- <a href="dense_rank">vl.<b>dense_rank</b></a> - A <code>dense_rank</code> window operation.
- <a href="percent_rank">vl.<b>percent_rank</b></a> - A <code>percent_rank</code> window operation.
- <a href="cume_dist">vl.<b>cume_dist</b></a> - A <code>cume_dist</code> window operation.
- <a href="ntile">vl.<b>ntile</b></a> - A <code>ntile</code> window operation.
- <a href="lag">vl.<b>lag</b></a> - A <code>lag</code> window operation.
- <a href="lead">vl.<b>lead</b></a> - A <code>lead</code> window operation.
- <a href="first_value">vl.<b>first_value</b></a> - A <code>first_value</code> window operation.
- <a href="last_value">vl.<b>last_value</b></a> - A <code>last_Value</code> window operation.
- <a href="nth_value">vl.<b>nth_value</b></a> - A <code>nth_value</code> window operation.

### TimeUnit Operations

- <a href="year">vl.<b>year</b></a> - A time unit operation for <code>year</code>.
- <a href="quarter">vl.<b>quarter</b></a> - A time unit operation for <code>quarter</code>.
- <a href="month">vl.<b>month</b></a> - A time unit operation for <code>month</code>.
- <a href="day">vl.<b>day</b></a> - A time unit operation for <code>day</code>.
- <a href="date">vl.<b>date</b></a> - A time unit operation for <code>date</code>.
- <a href="hours">vl.<b>hours</b></a> - A time unit operation for <code>hours</code>.
- <a href="minutes">vl.<b>minutes</b></a> - A time unit operation for <code>minutes</code>.
- <a href="seconds">vl.<b>seconds</b></a> - A time unit operation for <code>seconds</code>.
- <a href="milliseconds">vl.<b>milliseconds</b></a> - A time unit operation for <code>milliseconds</code>.
- <a href="yearmonth">vl.<b>yearmonth</b></a> - A time unit operation for <code>yearmonth</code>.
- <a href="timeYQ">vl.<b>timeYQ</b></a> - A time unit operation for <code>yearquarter</code>.
- <a href="timeYQM">vl.<b>timeYQM</b></a> - A time unit operation for <code>yearquartermonth</code>.
- <a href="timeYM">vl.<b>timeYM</b></a> - A time unit operation for <code>yearmonth</code>.
- <a href="timeYMD">vl.<b>timeYMD</b></a> - A time unit operation for <code>yearmonthdate</code>.
- <a href="timeYMDH">vl.<b>timeYMDH</b></a> - A time unit operation for <code>yearmonthdatehours</code>.
- <a href="timeYMDHM">vl.<b>timeYMDHM</b></a> - A time unit operation for <code>yearmonthdatehoursminutes</code>.
- <a href="timeYMDHMS">vl.<b>timeYMDHMS</b></a> - A time unit operation for <code>yearmonthdatehoursminutesseconds</code>.
- <a href="timeQM">vl.<b>timeQM</b></a> - A time unit operation for <code>quartermonth</code>.
- <a href="timeMD">vl.<b>timeMD</b></a> - A time unit operation for <code>monthdate</code>.
- <a href="timeMDH">vl.<b>timeMDH</b></a> - A time unit operation for <code>monthdatehours</code>.
- <a href="timeHM">vl.<b>timeHM</b></a> - A time unit operation for <code>hoursminutes</code>.
- <a href="timeHMS">vl.<b>timeHMS</b></a> - A time unit operation for <code>hoursminutesseconds</code>.
- <a href="timeMS">vl.<b>timeMS</b></a> - A time unit operation for <code>minutesseconds</code>.
- <a href="timeSMS">vl.<b>timeSMS</b></a> - A time unit operation for <code>secondsmilliseconds</code>.
- <a href="utcyear">vl.<b>utcyear</b></a> - A time unit operation for <code>utcyear</code>.
- <a href="utcquarter">vl.<b>utcquarter</b></a> - A time unit operation for <code>utcquarter</code>.
- <a href="utcmonth">vl.<b>utcmonth</b></a> - A time unit operation for <code>utcmonth</code>.
- <a href="utcday">vl.<b>utcday</b></a> - A time unit operation for <code>utcday</code>.
- <a href="utcdate">vl.<b>utcdate</b></a> - A time unit operation for <code>utcdate</code>.
- <a href="utchours">vl.<b>utchours</b></a> - A time unit operation for <code>utchours</code>.
- <a href="utcminutes">vl.<b>utcminutes</b></a> - A time unit operation for <code>utcminutes</code>.
- <a href="utcseconds">vl.<b>utcseconds</b></a> - A time unit operation for <code>utcseconds</code>.
- <a href="utcmilliseconds">vl.<b>utcmilliseconds</b></a> - A time unit operation for <code>utcmilliseconds</code>.
- <a href="utcyearmonth">vl.<b>utcyearmonth</b></a> - A time unit operation for <code>utcyearmonth</code>.
- <a href="utcYQ">vl.<b>utcYQ</b></a> - A time unit operation for <code>utcyearquarter</code>.
- <a href="utcYQM">vl.<b>utcYQM</b></a> - A time unit operation for <code>utcyearquartermonth</code>.
- <a href="utcYM">vl.<b>utcYM</b></a> - A time unit operation for <code>utcyearmonth</code>.
- <a href="utcYMD">vl.<b>utcYMD</b></a> - A time unit operation for <code>utcyearmonthdate</code>.
- <a href="utcYMDH">vl.<b>utcYMDH</b></a> - A time unit operation for <code>utcyearmonthdatehours</code>.
- <a href="utcYMDHM">vl.<b>utcYMDHM</b></a> - A time unit operation for <code>utcyearmonthdatehoursminutes</code>.
- <a href="utcYMDHMS">vl.<b>utcYMDHMS</b></a> - A time unit operation for <code>utcyearmonthdatehoursminutesseconds</code>.
- <a href="utcQM">vl.<b>utcQM</b></a> - A time unit operation for <code>utcquartermonth</code>.
- <a href="utcMD">vl.<b>utcMD</b></a> - A time unit operation for <code>utcmonthdate</code>.
- <a href="utcMDH">vl.<b>utcMDH</b></a> - A time unit operation for <code>utcmonthdatehours</code>.
- <a href="utcHM">vl.<b>utcHM</b></a> - A time unit operation for <code>utchoursminutes</code>.
- <a href="utcHMS">vl.<b>utcHMS</b></a> - A time unit operation for <code>utchoursminutesseconds</code>.
- <a href="utcMS">vl.<b>utcMS</b></a> - A time unit operation for <code>utcminutesseconds</code>.
- <a href="utcSMS">vl.<b>utcSMS</b></a> - A time unit operation for <code>utcsecondsmilliseconds</code>.
