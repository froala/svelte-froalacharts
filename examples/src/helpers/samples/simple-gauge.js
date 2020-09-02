const code =
`<script>
  import FroalaCharts from 'froalacharts';
  import SvelteFC, { fcRoot } from 'svelte-froalacharts';
  import dataSource from './data.js';

  fcRoot(FroalaCharts);

  let dataSource,
    chartConfig = {
      type: 'angulargauge',
      width: '600',
      height: '400',
      renderAt: 'chart-container',
      dataSource
    };
</script>`,
html =
`<div id="chart-container" >
  <SvelteFC {...chartConfig} />
</div>`,
data =
`export default {
  "chart": {
    "caption": "Nordstorm's Customer Satisfaction Score for 2017",
    "lowerLimit": "0",
    "upperLimit": "100",
    "showValue": "1",
    "numberSuffix": "%",
    "theme": "froala",
    "showToolTip": "0"
  },
  "colorRange": {
    "color": [{
      "minValue": "0",
      "maxValue": "50",
      "code": "#F2726F"
    }, {
      "minValue": "50",
      "maxValue": "75",
      "code": "#FFC533"
    }, {
      "minValue": "75",
      "maxValue": "100",
      "code": "#62B58F"
    }]
  },
  "dials": {
    "dial": [{
      "value": "81"
    }]
  }
}`;

export default {
  code,
  html,
  data
};
