const code =
`<script>
  import FroalaCharts from 'froalacharts';
  import SvelteFC, { fcRoot } from 'svelte-froalacharts';
  import dataSource from './data.js';

  fcRoot(FroalaCharts);

  let chartObj,
    chartConfig = {
      id: 'column-chart',
      type: 'pie',
      width: '600',
      height: '400',
      renderAt: 'chart-container',
      dataSource
    };

  const updateDataHandler = (arg, val) => {
    chartObj.setChartAttribute(arg, val);
  };
</script>`,
html =
`<div id="chart-container" >
  <SvelteFC {...chartConfig} bind:chart={chartObj} />
</div>
<div style="text-align: center; padding-top: 5px;">
  <button class="btn btn-outline-secondary btn-sm" on:click={() => { updateDataHandler('caption', 'CAPTION'); }}>
    Change caption to: caption
  </button>
  <button class="btn btn-outline-secondary btn-sm" on:click={() => { updateDataHandler('xaxisname', 'X-AXIS NAME'); }}>
    Change x_axis name to: x-axis name
  </button>
  <button class="btn btn-outline-secondary btn-sm" on:click={() => { updateDataHandler('yaxisname', 'Y-AXIS NAME'); }}>
    Change y_axis name to: y-axis name
  </button>
  <button
    class="btn btn-outline-secondary btn-sm"
    on:click={() => {
      updateDataHandler('caption', 'Countries With Most Oil Reserves [2017-18]');
      updateDataHandler('xaxisname', 'Country');
      updateDataHandler('yaxisname', 'Reserves (MMbbbl)');
    }}
  >
    reset
  </button>
</div>`,
data =
`export default {
  "chart": {
    "caption": "Countries With Most Oil Reserves [2017-18]",
    "subCaption": "In MMbbl = One Million barrels",
    "xAxisName": "Country",
    "yAxisName": "Reserves (MMbbl)",
    "numberSuffix": "K",
    "theme": "froala",
    "updateAnimduration": "0.4"
  },
  "data": [{
    "label": "Venezuela",
    "value": "290"
  }, {
    "label": "Saudi",
    "value": "260"
  }, {
    "label": "Canada",
    "value": "180"
  }, {
    "label": "Iran",
    "value": "140"
  }, {
    "label": "Russia",
    "value": "115"
  }, {
    "label": "UAE",
    "value": "100"
  }, {
    "label": "US",
    "value": "30"
  }, {
    "label": "China",
    "value": "30"
  }]
}`;

export default {
  code,
  html,
  data
};
