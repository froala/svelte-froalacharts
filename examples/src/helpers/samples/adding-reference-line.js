const code =
`<script>
  import FroalaCharts from 'froalacharts';
  import SvelteFC, { fcRoot } from 'svelte-froalacharts';

  fcRoot(FroalaCharts);

  let promise,
    jsonify = res => res.json(),
    dataFetch = fetch(
      'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/adding-a-reference-line-data.json'
    ).then(jsonify),
    schemaFetch = fetch(
      'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/adding-a-reference-line-schema.json'
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
          text: 'Temperature readings in Italy'
        },
        yAxis: [
          {
            plot: 'Temperature',
            title: 'Temperature',
            format: {
              suffix: '°C'
            },
            style: {
              title: {
                'font-size': '14px'
              }
            },
            referenceLine: [
              {
                label: 'Controlled Temperature',
                value: '10'
              }
            ]
          }
        ]
      }
    };
  };
</script>`,
html =
`<div id="chart-container" >
  {#await promise}
    <p>Fetching data and schema...</p>
  {:then value}
    <SvelteFC
      {...getChartConfig(value)}
    />
  {:catch error}
    <p>Something went wrong: {error.message}</p>
  {/await}
</div>`,
data =
`// A shortened version of the data is given here.
// Please check the link below to see the complete data:
// https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/adding-a-reference-line-data.json
[
  [
    "3/10/2004 18:00:00",
    2.6,
    150,
    11.9,
    113,
    13.6
  ],
  [
    "3/10/2004 19:00:00",
    2,
    112,
    9.4,
    92,
    13.3
  ],
  [
    "3/10/2004 20:00:00",
    2.2,
    88,
    9,
    114,
    11.9
  ],
  [
    "3/10/2004 21:00:00",
    2.2,
    80,
    9.2,
    122,
    11
  ],
  [
    "3/10/2004 22:00:00",
    1.6,
    51,
    6.5,
    116,
    11.2
  ],
  [
    "3/10/2004 23:00:00",
    1.2,
    38,
    4.7,
    96,
    11.2
  ],
  [
    "3/11/2004 0:00:00",
    1.2,
    31,
    3.6,
    77,
    11.3
  ],
  [
    "3/11/2004 1:00:00",
    1,
    31,
    3.3,
    76,
    10.7
  ],
  [
    "3/11/2004 2:00:00",
    0.9,
    24,
    2.3,
    60,
    10.7
  ],
  [
    "3/11/2004 3:00:00",
    0.6,
    19,
    1.7,
    45,
    10.3
  ],
  [
    "3/11/2004 4:00:00",
    2,
    14,
    1.3,
    34,
    10.1
  ],
  [
    "3/11/2004 5:00:00",
    0.7,
    8,
    1.1,
    28,
    11
  ],
  [
    "3/11/2004 6:00:00",
    0.7,
    16,
    1.6,
    48,
    10.5
  ],
  [
    "3/11/2004 7:00:00",
    1.1,
    29,
    3.2,
    82,
    10.2
  ],
  [
    "3/11/2004 8:00:00",
    2,
    64,
    8,
    112,
    10.8
  ],
  [
    "3/11/2004 9:00:00",
    2.2,
    87,
    9.5,
    101,
    10.5
  ],
  [
    "3/11/2004 10:00:00",
    1.7,
    77,
    6.3,
    98,
    10.8
  ],
  [
    "3/11/2004 11:00:00",
    1.5,
    43,
    5,
    92,
    10.5
  ],
  [
    "3/11/2004 12:00:00",
    1.6,
    61,
    5.2,
    95,
    9.5
  ],
  [
    "3/11/2004 13:00:00",
    1.9,
    63,
    7.3,
    112,
    8.3
  ],
  [
    "3/11/2004 14:00:00",
    2.9,
    164,
    11.5,
    128,
    8
  ],
  [
    "3/11/2004 15:00:00",
    2.2,
    79,
    8.8,
    126,
    8.3
  ],
  [
    "3/11/2004 16:00:00",
    2.2,
    95,
    8.3,
    131,
    9.7
  ],
  [
    "3/11/2004 17:00:00",
    2.9,
    150,
    11.2,
    135,
    9.8
  ],
  [
    "3/11/2004 18:00:00",
    4.8,
    307,
    20.8,
    151,
    10.3
  ],
  [
    "3/11/2004 19:00:00",
    6.9,
    461,
    27.4,
    172,
    9.7
  ],
  [
    "3/11/2004 20:00:00",
    6.1,
    401,
    24,
    165,
    9.6
  ],
  [
    "3/11/2004 21:00:00",
    3.9,
    197,
    12.8,
    136,
    9.1
  ],
  [
    "3/11/2004 22:00:00",
    1.5,
    61,
    4.7,
    85,
    8.2
  ],
  [
    "3/11/2004 23:00:00",
    1,
    26,
    2.6,
    53,
    8.2
  ],
  [
    "3/12/2004 0:00:00",
    1.7,
    55,
    5.9,
    97,
    8.3
  ],
  [
    "3/12/2004 1:00:00",
    1.9,
    53,
    6.4,
    110,
    7.7
  ],
  [
    "3/12/2004 2:00:00",
    1.4,
    40,
    4.1,
    91,
    7.1
  ],
  [
    "3/12/2004 3:00:00",
    0.8,
    21,
    1.9,
    70,
    7
  ],
  [
    "3/12/2004 4:00:00",
    5,
    10,
    1.1,
    32,
    6.1
  ],
  [
    "3/12/2004 5:00:00",
    0.6,
    7,
    1,
    44,
    6.3
  ],
  [
    "3/12/2004 6:00:00",
    0.8,
    17,
    1.8,
    71,
    6.8
  ],
  [
    "3/12/2004 7:00:00",
    1.4,
    33,
    4.4,
    104,
    6.4
  ],
  [
    "3/14/2004 1:00:00",
    2.8,
    131,
    11.9,
    119,
    14.6
  ],
  [
    "3/14/2004 2:00:00",
    2.5,
    92,
    8.6,
    104,
    12.5
  ],
  [
    "3/14/2004 3:00:00",
    2.4,
    132,
    9.7,
    97,
    11.6
  ],
  [
    "3/14/2004 4:00:00",
    3,
    56,
    5.2,
    82,
    12.1
  ],
  [
    "3/14/2004 5:00:00",
    1.2,
    32,
    3.7,
    70,
    11.5
  ],
  [
    "3/14/2004 6:00:00",
    1,
    29,
    2.5,
    63,
    11.6
  ],
  [
    "3/14/2004 7:00:00",
    0.9,
    27,
    2.4,
    67,
    10.4
  ],
  [
    "3/14/2004 8:00:00",
    1.4,
    36,
    4.2,
    84,
    11.6
  ],
  [
    "3/14/2004 9:00:00",
    1.6,
    57,
    6.4,
    83,
    12.4
  ],
  [
    "3/14/2004 10:00:00",
    2.2,
    129,
    8.6,
    98,
    14.5
  ],
  [
    "3/14/2004 11:00:00",
    2.8,
    148,
    10.9,
    114,
    16.9
  ],
  [
    "3/14/2004 12:00:00",
    2.8,
    145,
    10.7,
    119,
    19.3
  ],
  [
    "3/14/2004 13:00:00",
    2,
    93,
    7.5,
    104,
    21.2
  ],
  [
    "3/14/2004 14:00:00",
    1.8,
    84,
    7.5,
    102,
    21.4
  ],
  [
    "3/14/2004 15:00:00",
    1.9,
    99,
    8.2,
    107,
    21.9
  ],
  [
    "3/14/2004 16:00:00",
    3,
    150,
    11.9,
    129,
    22.2
  ],
  [
    "3/14/2004 17:00:00",
    2.9,
    156,
    12,
    128,
    21.3
  ],
  [
    "3/14/2004 18:00:00",
    2.5,
    122,
    12.2,
    121,
    19.7
  ],
  [
    "3/14/2004 19:00:00",
    4.6,
    262,
    20.6,
    157,
    18.4
  ],
  [
    "3/14/2004 20:00:00",
    5.9,
    341,
    23.1,
    173,
    17.6
  ],
  [
    "3/14/2004 21:00:00",
    3.4,
    214,
    14.7,
    146,
    16.7
  ],
  [
    "3/14/2004 22:00:00",
    2.1,
    100,
    9,
    121,
    16.3
  ],
  [
    "3/14/2004 23:00:00",
    2.2,
    79,
    8.8,
    119,
    14.7
  ],
  [
    "3/15/2004 0:00:00",
    1.8,
    66,
    7.4,
    99,
    14.8
  ],
  [
    "3/15/2004 1:00:00",
    1.8,
    73,
    6.9,
    93,
    14
  ],
  [
    "3/15/2004 2:00:00",
    1.8,
    66,
    7,
    88,
    13.4
  ],
  [
    "3/15/2004 3:00:00",
    1.1,
    44,
    4.4,
    80,
    12.6
  ],
  [
    "3/15/2004 4:00:00",
    9,
    44,
    4,
    71,
    12.3
  ],
  [
    "3/15/2004 5:00:00",
    1,
    39,
    3.9,
    74,
    11.9
  ],
  [
    "3/15/2004 6:00:00",
    1.4,
    51,
    6.4,
    80,
    11.4
  ],
  [
    "3/15/2004 7:00:00",
    2.2,
    107,
    9.7,
    89,
    11.3
  ],
  [
    "3/15/2004 8:00:00",
    5.5,
    336,
    25.9,
    114,
    12.4
  ],
  [
    "3/15/2004 9:00:00",
    8.1,
    618,
    36.7,
    149,
    14.8
  ],
  [
    "3/15/2004 10:00:00",
    5.8,
    438,
    26.6,
    157,
    17.4
  ],
  [
    "3/15/2004 11:00:00",
    4.2,
    334,
    20.1,
    155,
    19.8
  ],
  [
    "3/15/2004 12:00:00",
    3.1,
    221,
    14.1,
    134,
    22
  ],
  [
    "3/15/2004 13:00:00",
    2.9,
    207,
    14.9,
    119,
    23.3
  ],
  [
    "3/15/2004 14:00:00",
    2.9,
    191,
    15.4,
    111,
    23.9
  ],
  [
    "3/15/2004 15:00:00",
    2.5,
    185,
    12.1,
    104,
    24.4
  ],
  [
    "3/15/2004 16:00:00",
    2.3,
    141,
    11.5,
    99,
    24.4
  ],
  [
    "3/15/2004 17:00:00",
    2.8,
    214,
    14.8,
    110,
    23.8
  ],
  [
    "3/15/2004 18:00:00",
    6.1,
    471,
    32.1,
    162,
    22.5
  ],
  [
    "3/15/2004 19:00:00",
    8,
    685,
    39.2,
    187,
    20.4
  ],
  [
    "3/15/2004 20:00:00",
    6.5,
    538,
    31,
    165,
    18.3
  ],
  [
    "3/15/2004 21:00:00",
    4.2,
    319,
    19.9,
    145,
    16.7
  ],
  [
    "3/15/2004 22:00:00",
    3.2,
    224,
    15.3,
    125,
    15.7
  ],
  [
    "3/15/2004 23:00:00",
    1.4,
    67,
    6.9,
    101,
    15.3
  ],
  [
    "3/16/2004 0:00:00",
    2.1,
    155,
    11.1,
    103,
    14.1
  ],
  [
    "3/16/2004 1:00:00",
    1.2,
    49,
    5.4,
    88,
    14.8
  ],
  [
    "3/16/2004 2:00:00",
    0.8,
    29,
    2.8,
    61,
    14.8
  ],
  [
    "3/16/2004 3:00:00",
    0.7,
    25,
    2.3,
    60,
    13.6
  ],
  [
    "3/16/2004 4:00:00",
    10,
    25,
    2.6,
    59,
    12.3
  ],
  [
    "3/16/2004 5:00:00",
    0.6,
    17,
    2,
    52,
    12.8
  ],
  [
    "3/16/2004 6:00:00",
    0.9,
    27,
    3.5,
    64,
    11.2
  ],
  [
    "3/16/2004 7:00:00",
    1.3,
    50,
    5.1,
    70,
    11
  ],
  [
    "3/16/2004 8:00:00",
    3.4,
    218,
    16.2,
    97,
    11.7
  ],
  [
    "3/16/2004 9:00:00",
    3.7,
    285,
    19.7,
    95,
    13.6
  ],
  [
    "3/16/2004 10:00:00",
    5.3,
    437,
    25.1,
    150,
    17.8
  ],
  [
    "3/16/2004 11:00:00",
    4.1,
    327,
    20,
    162,
    21.4
  ],
  [
    "3/16/2004 12:00:00",
    3.3,
    283,
    18.3,
    154,
    24.4
  ]
]`,
schema =
`[
  {
    "name": "Time",
    "type": "date",
    "format": "%-m/%-d/%Y %H:%M:%S"
  },
  {
    "name": "Carbon mono-oxide (mg/m^3)",
    "type": "number"
  },
  {
    "name": "Non methane hydrocarbons (microg/m^3)",
    "type": "number"
  },
  {
    "name": "Benzene",
    "type": "number"
  },
  {
    "name": "Nitrogen dioxide",
    "type": "number"
  },
  {
    "name": "Temperature",
    "type": "number"
  }
]`;

export default {
  code,
  html,
  data,
  schema
};
