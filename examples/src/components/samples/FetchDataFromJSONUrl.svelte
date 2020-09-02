<script>
  import FroalaCharts from 'froalacharts';
  import SvelteFC, { fcRoot } from '../../../../index.mjs';

  fcRoot(FroalaCharts);

  let jsonUrl = 'https://static.fusioncharts.com/sample/oilReserves.json',
    chartConfig = {
      type: 'pie',
      renderAt: 'chart-container',
      width: '100%',
      height: 450,
      dataFormat: 'jsonurl',
      dataSource: jsonUrl
    };
</script>

<div id='chart-container' style='height: inherit;' >
  <SvelteFC {...chartConfig} />
</div>