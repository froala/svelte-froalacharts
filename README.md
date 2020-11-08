# svelte-froalacharts

Simple and lightweight Svelte component for FroalaCharts. `svelte-froalacharts` enables you to add JavaScript charts in your Svelte application or project without any hassle.

- Github Repo: [https://github.com/froala/svelte-froalacharts](https://github.com/froala/svelte-froalacharts)
- Documentation: [https://froala.com/charts/docs/frameworks/svelte/](https://froala.com/charts/docs/frameworks/svelte/)
- Support: [support@froala.com](support@froala.com)
- FroalaCharts
  - Official Website: [https://froala.com/](https://froala.com/)
  - Official NPM Package: [https://www.npmjs.com/package/froalacharts](https://www.npmjs.com/package/froalacharts)
- Issues: [https://github.com/froala/svelte-froalacharts/issues](https://github.com/froala/svelte-froalacharts/issues)

---

## Table of Contents

- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Usage](#usage)
- [Quick Start](#quick-start)
- [For Contributors](#for-contributors)
- [Licensing](#licensing)

## Getting Started

### Requirements

- **Node.js**, **NPM/Yarn** installed globally in your OS.
- **FroalaCharts** and **Svelte** installed in your project, as detailed below:

### Installation

There are multiple ways to install `svelte-froalacharts` component.

**Install from NPM**

```
npm install --save svelte-froalacharts
```

See [npm documentation](https://docs.npmjs.com/) to know more about npm usage.

### Usage


Import `svelte-froalacharts` and FroalaCharts in your app:

```
<script>
  import FroalaCharts from 'froalacharts/core';
  import SvelteFC, { fcRoot } from 'svelte-froalacharts';

  fcRoot(FroalaCharts);
</script>
```

Note: This way of import will not work in IE11 and below.

## Quick Start

Here is a basic sample that shows how to create a chart using `svelte-froalacharts`:

```javascript
<script>
  import FroalaCharts from 'froalacharts';
  import FroalaTheme from 'froalacharts/themes/froalacharts.theme.froala';
  import SvelteFC, { fcRoot } from 'svelte-froalacharts';

  // Always set FroalaCharts as the first parameter
  fcRoot(FroalaCharts, FroalaTheme);

  const dataSource = {
    chart: {
      caption: 'Countries With Most Oil Reserves [2017-18]',
      subCaption: 'In MMbbl = One Million barrels',
      xAxisName: 'Country',
      yAxisName: 'Reserves (MMbbl)',
      numberSuffix: 'K',
      theme: 'froala'
    },
    data: [
      { label: 'Venezuela', value: '290' },
      { label: 'Saudi', value: '260' },
      { label: 'Canada', value: '180' },
      { label: 'Iran', value: '140' },
      { label: 'Russia', value: '115' },
      { label: 'UAE', value: '100' },
      { label: 'US', value: '30' },
      { label: 'China', value: '30' }
    ]
  };

  const chartConfigs = {
    type: 'pie',
    width: 600,
    height: 400,
    dataFormat: 'json',
    dataSource: dataSource
  };
</script>

<SvelteFC {...chartConfigs} />
```

Links to help you get started:

- [Documentation](https://froala.com/charts/docs/frameworks/svelte/)
- [Chart gallery](https://froala.com/charts/tour/)
- [FroalaCharts API](https://froala.com/charts/docs/api/options/)

## For Contributors

- Clone the repository and install dependencies

```
$ git clone https://github.com/froala/svelte-froalacharts.git
$ cd svelte-froalacharts
$ npm i
$ npm run dev
```

- Run `npm run build` to create a production build.

## Licensing

The FroalaCharts Svelte component is open-source and distributed under the terms of the MIT/X11 License. However, you will need to download and include FroalaCharts library in your page separately, which has a [separate license](https://www.ideracorp.com/Legal/Froala/FroalaChartsLicenseAgreement).