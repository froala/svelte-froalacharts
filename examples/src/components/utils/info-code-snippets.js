const wrapperInstall = `$ npm install svelte-froalacharts --save`,
fcInstall = `$ npm install froalacharts --save`,
addDependency =
`import FroalaCharts from 'froalacharts';
import { fcRoot } from 'svelte-froalacharts';

// Add dependencies
fcRoot(FroalaCharts);`,
renderFcCode =
`<script>
  import FroalaCharts from 'froalacharts';
  import SvelteFC, { fcRoot } from 'svelte-froalacharts';

  fcRoot(FroalaCharts);

  let dataSource = {
      "chart": {
        "caption": "Recommended Portfolio Split",
        "subCaption": "For a net-worth of $1M",
        "showValues": "1",
        "showPercentInTooltip": "0",
        "numberPrefix": "$",
        "enableMultiSlicing": "1",
        "theme": "froala"
      },
      "data": [{
        "label": "Equity",
        "value": "300000"
      }, {
        "label": "Debt",
        "value": "230000"
      }, {
        "label": "Bullion",
        "value": "180000"
      }, {
        "label": "Real-estate",
        "value": "270000"
      }, {
        "label": "Insurance",
        "value": "20000"
      }]
    },
    chartConfig = {
      type: 'pie2d',
      width: '600',
      height: '400',
      renderAt: 'chart-container',
      dataSource
    };
</script>`,
renderFcHTML =
`<div id="chart-container" >
  <SvelteFC {...chartConfig} />
</div>`,
renderFtCode =
`<script>
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
</script>`,
renderFtHTML =
`{#await promise}
  <p>Fetching data and schema...</p>
{:then value}
  <SvelteFC
    {...getChartConfig(value)}
  />
{:catch error}
  <p>Something went wrong: {error.message}</p>
{/await}`

export default {
  wrapperInstall,
  fcInstall,
  addDependency,
  renderFcCode,
  renderFcHTML,
  renderFtCode,
  renderFtHTML
};
