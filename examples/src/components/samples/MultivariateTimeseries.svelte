<script>
  import FroalaCharts from 'froalacharts';
  import SvelteFC, { fcRoot } from '../../../../index.mjs';

  fcRoot(FroalaCharts);

  let promise,
    jsonify = res => res.json(),
    dataFetch = fetch(
      'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/plotting-two-variable-measures-data.json'
    ).then(jsonify),
    schemaFetch = fetch(
      'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/plotting-two-variable-measures-schema.json'
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
          text: 'Cariaco Basin Sampling'
        },
        subcaption: {
          text: 'Analysis of O₂ Concentration and Surface Temperature'
        },
        yAxis: [
          {
            plot: 'O2 concentration',
            min: '3',
            max: '6',
            title: 'O₂ Concentration (mg/L)'
          },
          {
            plot: 'Surface Temperature',
            min: '18',
            max: '30',
            title: 'Surface Temperature (°C)'
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