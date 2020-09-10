const code =
`<script>
  import FroalaCharts from 'froalacharts';
  import SvelteFC, { fcRoot } from 'svelte-froalacharts';

  import { sampleNames } from '../utils/constants.js';
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
<div style="display: flex; position: absolute; bottom: 15px;">
  <div id="select-text">Choose a theme:</div>
  <div class="change-type">
    <div id="radio1">
      <input
        name="theme-selecter"
        id="radioButton1"
        type="radio"
        on:change={() => {
          updateDataHandler('theme', 'froala');
        }}
        checked="checked"
      >
      <label for="radioButton1">Froala</label>
    </div>
    <div id="radio2">
      <input
        name="theme-selecter"
        id="radioButton2"
        type="radio"
        on:change={() => {
          updateDataHandler('theme', 'gammel');
        }}
      >
      <label for="radioButton2">Gammel</label>
    </div>
    <div id="radio3">
      <input
        name="theme-selecter"
        id="radioButton3"
        type="radio"
        on:change={() => {
          updateDataHandler('theme', 'candy');
        }}
      >
      <label for="radioButton3">Candy</label>
    </div>
    <div id="radio4">
      <input
        name="theme-selecter"
        id="radioButton4"
        type="radio"
        on:change={() => {
          updateDataHandler('theme', 'zune');
        }}
      >
      <label for="radioButton4">Zune</label>
    </div>
    <div id="radio5">
      <input
        name="theme-selecter"
        id="radioButton5"
        type="radio"
        on:change={() => {
          updateDataHandler('theme', 'ocean');
        }}
      >
      <label for="radioButton5">Ocean</label>
    </div>
    <div id="radio6">
      <input
        name="theme-selecter"
        id="radioButton6"
        type="radio"
        on:change={() => {
          updateDataHandler('theme', 'carbon');
        }}
      >
      <label for="radioButton6">Carbon</label>
    </div>
  </div>
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
