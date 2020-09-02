const code =
`<script>
  import FroalaCharts from 'froalacharts';
  import SvelteFC, {fcRoot} from 'svelte-froalacharts';
  import dataSource from './data.js';

  fcRoot(FroalaCharts);

  const chartConfigs = {
    type: 'pie',
    width: '600',
    height: '400',
    dataFormat: 'json',
    dataSource
  };
</script>`,

html =
`<div id="container">
  <SvelteFC {...chartConfigs} />
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
  "data": [
    {
      "label": "Venezuela",
      "value": "290"
    },
    {
      "label": "Saudi",
      "value": "260"
    },
    {
      "label": "Canada",
      "value": "180"
    },
    {
      "label": "Iran",
      "value": "140"
    },
    {
      "label": "Russia",
      "value": "115"
    },
    {
      "label": "UAE",
      "value": "100"
    },
    {
      "label": "US",
      "value": "30"
    },
    {
      "label": "China",
      "value": "30"
    }
  ]
}`;

export default {
  code,
  html,
  data
};
