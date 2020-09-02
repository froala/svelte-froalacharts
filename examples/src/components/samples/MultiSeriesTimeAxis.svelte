<script>
  import FroalaCharts from 'froalacharts';
  import SvelteFC, { fcRoot } from '../../../../index.mjs';

  fcRoot(FroalaCharts);

  let promise,
    jsonify = res => res.json(),
    dataFetch = fetch(
      'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/plotting-multiple-series-on-time-axis-data.json'
    ).then(jsonify),
    schemaFetch = fetch(
      'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/plotting-multiple-series-on-time-axis-schema.json'
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
          text: 'Grocery & Footwear'
        },
        series: 'Type',
        yAxis: [
          {
            plot: 'Sales Value',
            title: 'Sale Value',
            format: {
              prefix: '$'
            }
          }
        ]
      }
    };
  };
</script>

<div id='chart-container' style='height: inherit;' >
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