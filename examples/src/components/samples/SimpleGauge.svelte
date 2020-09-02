<script>
  import FroalaCharts from 'froalacharts';
  import SvelteFC, { fcRoot } from '../../../../index.mjs';

  fcRoot(FroalaCharts);

  let dataSource = {
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
    },
    chartConfig = {
      type: 'angulargauge',
      width: '100%',
      height: '450',
      renderAt: 'chart-container',
      dataSource
    };
</script>

<div id='chart-container' style='height: inherit;' >
  <SvelteFC {...chartConfig} />
</div>