# Svelte-FroalaCharts

A simple and lightweight official Svelte component for FroalaCharts JavaScript charting library. `svelte-froalacharts` enables you to add JavaScript charts in your Svelte application or project without any hassle.

## [Demo](https://fusioncharts.github.io/svelte-fusioncharts/)

- Github Repo: [https://github.com/froala/svelte-froalacharts.git](https://github.com/froala/svelte-froalacharts.git)
- Support: [https://www.fusioncharts.com/contact-support](https://www.fusioncharts.com/contact-support)
- FroalaCharts
  - Official Website: [https://www.fusioncharts.com/](https://www.fusioncharts.com/)
  - Official NPM Package: [https://www.npmjs.com/package/fusioncharts](https://www.npmjs.com/package/fusioncharts)
- Issues: [https://github.com/fusioncharts/svelte-fusioncharts/issues](https://github.com/fusioncharts/svelte-fusioncharts/issues)

---

## Table of Contents

- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Working with chart API](#working-with-apis)
  - [Working with events](#working-with-events)
- [Quick Start](#quick-start)
- [Going Beyond Charts](#going-beyond-charts)
- [Usage and Integration of FroalaTime](#usage-and-integration-of-froalaTime)
- [For Contributors](#for-contributors)
- [Licensing](#licensing)

## Getting Started

### Requirements

- **Node.js**, **NPM/Yarn** installed globally in your OS.
- **FroalaCharts** and **Svelte** installed in your project, as detailed below:

### Installation

There are multiple ways to install `svelte-froalacharts` component.

**Install from NPM**

```
npm install --save svelte-froalacharts
```

See [npm documentation](https://docs.npmjs.com/) to know more about npm usage.

### Usage


Import `svelte-froalacharts` and FroalaCharts in your app:

```
<script>
  import FroalaCharts from 'froalacharts/core';
  import SvelteFC, { fcRoot } from 'svelte-froalacharts';

  fcRoot(FroalaCharts);
</script>
```

Note: This way of import will not work in IE11 and below.

## Quick Start

Here is a basic sample that shows how to create a chart using `svelte-froalacharts`:

```javascript
<script>
  import FroalaCharts from 'froalacharts';
  import FroalaTheme from 'froalacharts/themes/froalacharts.theme.froala';
  import SvelteFC, { fcRoot } from 'svelte-froalacharts';

  // Always set FroalaCharts as the first parameter
  fcRoot(FroalaCharts, FroalaTheme);

  const dataSource = {
    chart: {
      caption: 'Countries With Most Oil Reserves [2017-18]',
      subCaption: 'In MMbbl = One Million barrels',
      xAxisName: 'Country',
      yAxisName: 'Reserves (MMbbl)',
      numberSuffix: 'K',
      theme: 'froala'
    },
    data: [
      { label: 'Venezuela', value: '290' },
      { label: 'Saudi', value: '260' },
      { label: 'Canada', value: '180' },
      { label: 'Iran', value: '140' },
      { label: 'Russia', value: '115' },
      { label: 'UAE', value: '100' },
      { label: 'US', value: '30' },
      { label: 'China', value: '30' }
    ]
  };

  const chartConfigs = {
    type: 'pie',
    width: 600,
    height: 400,
    dataFormat: 'json',
    dataSource: dataSource
  };
</script>

<SvelteFC {...chartConfigs} />
```

## Working with Events

To attach event callbacks to a FroalaCharts component, follow the sample below.

```javascript
<script>
  import FroalaCharts from 'froalacharts';
  import FroalaTheme from 'froalacharts/themes/froalacharts.theme.froala';
  import SvelteFC, { fcRoot } from 'svelte-froalacharts';

  // Always set FroalaCharts as the first parameter
  fcRoot(FroalaCharts, FroalaTheme);

  const dataSource = {
      chart: {
        caption: 'Countries With Most Oil Reserves [2017-18]',
        subCaption: 'In MMbbl = One Million barrels',
        xAxisName: 'Country',
        yAxisName: 'Reserves (MMbbl)',
        numberSuffix: 'K',
        theme: 'froala'
      },
      data: [
        { label: 'Venezuela', value: '290' },
        { label: 'Saudi', value: '260' },
        { label: 'Canada', value: '180' },
        { label: 'Iran', value: '140' },
        { label: 'Russia', value: '115' },
        { label: 'UAE', value: '100' },
        { label: 'US', value: '30' },
        { label: 'China', value: '30' }
      ]
    },
    dataplotClickHandler = event => {
      // code for dataplotClick event handler
    },
    renderCompleteHandler = event => {
      // code for renderComplete event handler
    };

  const chartConfigs = {
    type: 'pie',
    width: 600,
    height: 400,
    dataFormat: 'json',
    dataSource: dataSource
  };
</script>

<SvelteFC
  {...chartConfigs}
  on:dataplotClick={dataplotClickHandler}
  on:renderComplete={renderCompleteHandler}
/>
```

## Working with APIs

To call APIs we will need the chart object. To get the chart object for an SvelteFC component, bind a variable with the <code>chart</code> property of SvelteFC component.

```javascript
<script>
  import FroalaCharts from 'froalacharts';

  import FroalaTheme from 'froalacharts/themes/froalacharts.theme.froala';
  import SvelteFC, { fcRoot } from 'svelte-froalacharts';

  fcRoot(FroalaCharts, FroalaTheme);

  let chartObj,
    dataSource = {
      "chart": {
        "caption": "Market Share of Web Servers",
        "plottooltext": "<b>$percentValue</b> of web servers run on $label servers",
        "showLegend": "1",
        "showPercentValues": "1",
        "legendPosition": "bottom",
        "useDataPlotColorForLabels": "1",
        "enablemultislicing": "0",
        "showlegend": "0",
        "theme": "froala",
      },
      "data": [{
        "label": "Apache",
        "value": "32647479"
      }, {
        "label": "Microsoft",
        "value": "22100932"
      }, {
        "label": "Zeus",
        "value": "14376"
      }, {
        "label": "Other",
        "value": "18674221"
      }]
    },
    chartConfig = {
      type: 'pie',
      width: '600',
      height: '400',
      renderAt: 'chart-container',
      dataSource 
    };

  const sliceDataPlot = (index, sliceOut = true) => {
    chartObj.slicePlotItem(index, sliceOut)
  };
</script>

<div id="chart-container" >
  <SvelteFC {...chartConfig} bind:chart={chartObj} />
</div>

<button on:click={() => {
  sliceDataPlot(1);
}}>
  Slice out
</button>
<button on:click={() => {
  sliceDataPlot(1, false);
}} >
  Slice in
</button>
```

links to help you get started:

- [Live samples with code](https://fusioncharts.github.io/svelte-fusioncharts/)
- [Documentation](https://www.fusioncharts.com/dev/getting-started/svelte/your-first-chart-using-svelte)
- [Use Chart API events & methods in Svelte](https://www.fusioncharts.com/dev/getting-started/svelte/configure-your-chart-using-svelte)
- [Chart gallery](https://www.fusioncharts.com/explore/chart-gallery)
- [FroalaCharts API](https://www.fusioncharts.com/dev/api/fusioncharts)

## Usage and integration of FroalaTime

From `froalacharts@1.0.0`, You can visualize timeseries data.

Learn more about FroalaTime [here](https://www.fusioncharts.com/fusiontime).

### Consider the example below for integration of FroalaTime

```javascript
<script>
  import FroalaCharts from 'froalacharts';
  import SvelteFC, { fcRoot } from 'svelte-froalacharts';

  fcRoot(FroalaCharts);

  let promise,
    jsonify = res => res.json(),
    dataFetch = fetch(
      'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/line-chart-with-time-axis-data.json'
    ).then(jsonify),
    schemaFetch = fetch(
      'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/line-chart-with-time-axis-schema.json'
    ).then(jsonify);

  promise = Promise.all([dataFetch, schemaFetch]);

  const getChartConfig = ([data, schema]) => {
    const froalaDataStore = new FroalaCharts.DataStore(),
      froalaTable = froalaDataStore.createDataTable(data, schema);

    return {
      type: 'timeseries',
      width: '100%',
      height: 450,
      renderAt: 'chart-container',
      dataSource: {
        data: froalaTable,
        caption: {
          text: 'Sales Analysis'
        },
        subcaption: {
          text: 'Grocery'
        },
        yAxis: [
          {
            plot: {
              value: 'Grocery Sales Value',
              type: 'line'
            },
            format: {
              prefix: '$'
            },
            title: 'Sale Value'
          }
        ]
      }
    };
  };
</script>

<div id="chart-container" >
  {#await promise}
    <p>Fetching data and schema...</p>
  {:then value}
    <SvelteFC
      {...getChartConfig(value)}
    />
  {:catch error}
    <p>Something went wrong: {error.message}</p>
  {/await}
</div>
```

Useful links for FroalaTime

- [How FroalaTime works](https://www.fusioncharts.com/dev/fusiontime/getting-started/how-fusion-time-works)
- [Create your first chart](https://www.fusioncharts.com/dev/fusiontime/getting-started/create-your-first-chart-in-froalatime)


## Going Beyond Charts

- Explore 20+ pre-built business specific dashboards for different industries like energy and manufacturing to business functions like sales, marketing and operations [here](https://www.fusioncharts.com/explore/dashboards).
- See [Data Stories](https://www.fusioncharts.com/explore/data-stories) built using FroalaCharts’ interactive JavaScript visualizations and learn how to communicate real-world narratives through underlying data to tell compelling stories.

## For Contributors

- Clone the repository and install dependencies

```
$ git clone https://github.com/froala/svelte-froalacharts.git
$ cd svelte-froalacharts
$ npm i
$ npm run dev
```

- Run `npm run build` to create a production build.

## Licensing

The FroalaCharts Svelte component is open-source and distributed under the terms of the MIT/X11 License. However, you will need to download and include FroalaCharts library in your page separately, which has a [separate license](https://www.fusioncharts.com/buy).
