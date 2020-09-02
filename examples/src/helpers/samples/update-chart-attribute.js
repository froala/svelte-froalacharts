const code =
`<script>
  import FroalaCharts from 'froalacharts';
  import SvelteFC, { fcRoot } from 'svelte-froalacharts';
  import dataSource from './data.js';

  fcRoot(FroalaCharts);

  let chartConfig = {
    type: 'pie',
    width: '600',
    height: '400',
    renderAt: 'chart-container',
    dataSource
  };

  const changeBgHandler = () => {
      let dataSource = chartConfig.dataSource;

      dataSource.chart.bgColor = 'efefef';

      chartConfig = {
        ...chartConfig,
        dataSource
      };
    },
    changeCaptionHandler = () => {
      let dataSource = chartConfig.dataSource;

      dataSource.chart.captionAlignment = 'left';

      chartConfig = {
        ...chartConfig,
        dataSource
      };
    },
    resetHandler = () => {
      let dataSource = chartConfig.dataSource;

      delete dataSource.chart.captionAlignment;
      delete dataSource.chart.bgColor;

      chartConfig = {
        ...chartConfig,
        dataSource
      };
    };
</script>`,
html =
`<div id="chart-container" >
  <SvelteFC {...chartConfig} />
</div>
<div style="text-align: center; padding-top: 10px;">
  <button class="btn btn-outline-secondary btn-sm" on:click={changeBgHandler}>Change Background</button>
  <button class="btn btn-outline-secondary btn-sm" on:click={changeCaptionHandler}>Change Caption Alignment</button>
  <button class="btn btn-outline-secondary btn-sm" on:click={resetHandler}>Reset</button>
</div>`,
data =
`export default {
  "chart": {
    "caption": "Countries With Most Oil Reserves [2017-18]",
    "subCaption": "In MMbbl = One Million barrels",
    "xAxisName": "Country",
    "yAxisName": "Reserves (MMbbl)",
    "numberSuffix": "K",
    "theme": "froala"
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
