var examples = [
  {
    dir: "0001-density-lattice",
    files: [
      "0001-density-lattice.png",
      "0001-density-lattice.R",
      "0001-density-lattice_thumb.png",
      "index.html",
      "README.md",
      "thumb.png"
    ],
    paths: {
      root: "./examples/0001-density-lattice/",
      readme: "README.md",
      index: "index.html",
      thumb: "thumb.png",
      data: "../../data/ChickWeight.csv",
      code: "0001-density-lattice.R",
      example: "0001-density-lattice.png"
    },
    readme: {},
    title: "Density Plot",
    languages: "R",
    libraries: ["lattice"],
    description:
      "Customized density plot created using lattice combining paneling, grouping, custom annotations and some simple data manipulation.",
    data: "../../data/ChickWeight.csv",
    code: "0001-density-lattice.R",
    results: "0001-density-lattice.png",
    tags: "density plot, lattice, r, groups, means, annotated, faceted",
    langages: ["R"],
    makeIndex: true
  },
  {
    dir: "0002-dotplot-ggplot",
    files: [
      "0002-dotplot-ggplot.png",
      "0002-dotplot-ggplot.R",
      "index.html",
      "README.md",
      "thumb.png"
    ],
    paths: {
      root: "./examples/0002-dotplot-ggplot/",
      readme: "README.md",
      index: "index.html",
      thumb: "thumb.png",
      data: "../../data/discrete_scores.csv",
      code: "0002-dotplot-ggplot.R",
      example: "0002-dotplot-ggplot.png"
    },
    readme: {},
    title: "Stacked Dot Plot #1",
    languages: "R",
    libraries: ["ggplot2"],
    description:
      "Stacked dot plot created using ggplot2 combining paneling, custom annotations and some simple data manipulation.",
    data: "../../data/discrete_scores.csv",
    code: "0002-dotplot-ggplot.R",
    results: "0002-dotplot-ggplot.png",
    tags:
      "dotplot, r, ggplot2, facet, median, highlight, stack points, discrete",
    langages: ["R"],
    makeIndex: true
  },
  {
    dir: "0003-dotplot-lattice",
    files: [
      "0003-dotplot-lattice.png",
      "0003-dotplot-lattice.R",
      "0003-dotplot-lattice_tags.txt",
      "index.html",
      "README.md",
      "thumb.png"
    ],
    paths: {
      root: "./examples/0003-dotplot-lattice/",
      readme: "README.md",
      index: "index.html",
      thumb: "thumb.png",
      data: "../../data/discrete_scores.csv",
      code: "0003-dotplot-lattice.R",
      example: "0003-dotplot-lattice.png"
    },
    readme: {},
    title: "Stacked Dot Plot #2",
    languages: "R",
    libraries: ["lattice"],
    description:
      'Stacked dot plot created using ggplot2 combining paneling, custom annotations and simple data manipulation. Similar to <a href="../0002-dotplot-lattice">this example</a> made with lattice.',
    data: "../../data/discrete_scores.csv",
    code: "0003-dotplot-lattice.R",
    results: "0003-dotplot-lattice.png",
    tags:
      "dotplot, r, lattice, facet, median, highlight, stack points, discrete",
    langages: ["R"],
    makeIndex: true
  },
  {
    dir: "0004-pirateplot-yarrr",
    files: [
      "0004-pirateplot-yarrr.png",
      "0004-pirateplot-yarrr.R",
      "0004-pirateplot-yarrr_tags.txt",
      "index.html",
      "README.md",
      "thumb.png"
    ],
    paths: {
      root: "./examples/0004-pirateplot-yarrr/",
      readme: "README.md",
      index: "index.html",
      thumb: "thumb.png",
      data:
        "https://vincentarelbundock.github.io/Rdatasets/csv/datasets/chickwts.csv",
      code: "0004-pirateplot-yarrr.R",
      example: "0004-pirateplot-yarrr.png"
    },
    readme: {},
    title: "Pirate plot using Yarrr",
    languages: "R",
    libraries: ["yarrr"],
    description:
      "Combines a box-and-whisker plot with overlaid density plots to show clear comparisons of distributions across groups; a good choice for  displaying the relationship between 1 or two categorical independent variables, and one continuous dependent variable.",
    data:
      "https://vincentarelbundock.github.io/Rdatasets/csv/datasets/chickwts.csv",
    code: "0004-pirateplot-yarrr.R",
    results: "0004-pirateplot-yarrr.png",
    tags: "pirateplot, boxplot, density plot, violin plot",
    langages: ["R"],
    makeIndex: true
  },
  {
    dir: "0005-unemploy-mvtsplot",
    files: [
      "0005-unemploy-mvtsplot.png",
      "0005-unemploy-mvtsplot.R",
      "blsunemployment.csv",
      "index.html",
      "README.md",
      "thumb.png"
    ],
    paths: {
      root: "./examples/0005-unemploy-mvtsplot/",
      readme: "README.md",
      index: "index.html",
      thumb: "thumb.png",
      data: "Precipitations.csv",
      code: "0005-unemploy-mvtsplot.R",
      example: "0005-unemploy-mvtsplot.png"
    },
    readme: {},
    title: "Unemployment Trends with a Multivariate Time Series",
    languages: "R",
    libraries: ["mvtsplot"],
    description:
      "Mutivariate time series plot using MVTSPLOT package and Unemployment data",
    data: "Precipitations.csv",
    code: "0005-unemploy-mvtsplot.R",
    results: "0005-unemploy-mvtsplot.png",
    tags: "multivariate, time series, heatmap, monthly",
    langages: ["R"],
    makeIndex: true
  },
  {
    dir: "0006-precip-levelplot-lattice",
    files: [
      "0006-precip-levelplot-lattice.png",
      "0006-precip-levelplot-lattice.R",
      "index.html",
      "Precipitations.csv",
      "README.md",
      "thumb.png"
    ],
    paths: {
      root: "./examples/0006-precip-levelplot-lattice/",
      readme: "README.md",
      index: "index.html",
      thumb: "thumb.png",
      data: "blsunemployment.csv",
      code: "0006-precip-levelplot-lattice.R",
      example: "0006-precip-levelplot-lattice.png"
    },
    readme: {},
    title: "Orderered Precipitation Heatmap",
    languages: "R",
    libraries: ["lattice"],
    description:
      "Heatmap with ordered columns and rows using monthly precipitation data",
    data: "blsunemployment.csv",
    code: "0006-precip-levelplot-lattice.R",
    results: "0006-precip-levelplot-lattice.png",
    tags: "Ordered, heatmap, annotation",
    langages: ["R"],
    makeIndex: true
  },
  {
    dir: "0007-simple-barchart-webcharts",
    files: [
      "example.html",
      "index.html",
      "OlympicMedals2012.csv",
      "README.md",
      "simpleBarChart.js",
      "thumb.png"
    ],
    paths: {
      root: "./examples/0007-simple-barchart-webcharts/",
      readme: "README.md",
      index: "index.html",
      thumb: "thumb.png",
      data: "OlympicMedals2012.csv",
      code: "simpleBarChart.js",
      example: "example.html"
    },
    readme: {},
    title: "Simple Interactive Bar Chart",
    languages: "javascript",
    libraries: ["webcharts"],
    description:
      "This is a simple bar chart showing counts of medals won by country at the 2012 summer Olympics. Made with Webcharts.",
    data: "OlympicMedals2012.csv",
    code: "simpleBarChart.js",
    results: null,
    tags: "interactive, bar chart",
    langages: ["javascript"],
    makeIndex: true
  },
  {
    dir: "0008-safetyExplorer-default",
    files: [
      "ae-table",
      "ae-timelines",
      "chart.html",
      "index.html",
      "README.md",
      "safety-histogram",
      "safety-outlier-explorer",
      "safety-results-over-time",
      "safety-shift-plot",
      "safetyExplorer.css",
      "thumb.png",
      "timeline.png"
    ],
    paths: {
      root: "./examples/0008-safetyExplorer-default/",
      readme: "README.md",
      index: "index.html",
      thumb: "thumb.png",
      data: "../../data/safetyData/",
      code: "ae-table/index.html",
      example: "ae-table/index.html"
    },
    readme: {},
    title: "Safety Explorer - Default Configuration",
    languages: "javascript",
    libraries: [
      "webcharts",
      "safety-histogram",
      "safety-results-over-time",
      "safety-shift-plot",
      "safety-outlier-explorer",
      "ae-timeline",
      "ae-explorer"
    ],
    description:
      "The safety explorer is a collection of interactive graphics visualizing adverse event, lab, and vital sign data captured in clinical trials.  This instance demonstrates each graphic with default settings.",
    data: "../../data/safetyData/",
    code: "ae-table/index.html",
    results: "ae-table/index.html",
    tags: "interactive, webcharts, adverse events, safety explorer",
    langages: ["javascript"],
    makeIndex: true
  },
  {
    dir: "0009-web-codebook-demo",
    files: [
      "example.html",
      "GitHub-Mark-32px.png",
      "index.html",
      "README.md",
      "screen.PNG",
      "thumb.PNG",
      "webCodebookDemo.js"
    ],
    paths: {
      root: "./examples/0009-web-codebook-demo/",
      readme: "README.md",
      index: "index.html",
      thumb: "thumb.png",
      data: "../../data/safetyData/",
      code: "webCodebookDemo.js",
      example: "example.html"
    },
    readme: {},
    title: "Web Codebook Demo",
    languages: "javascript",
    libraries: ["web-codebook"],
    description:
      "Demonstration of the web-based data summaries using web-codebook.",
    data: "../../data/safetyData/",
    code: "webCodebookDemo.js",
    results: "example.html",
    tags: "interactive, codebook",
    langages: ["javascript"],
    makeIndex: true
  },
  {
    dir: "0010-spike-histogram",
    files: [
      "example.html",
      "index.html",
      "paneledSpikeHistogram.js",
      "README.md",
      "spikeHistogram.js",
      "thumb.png"
    ],
    paths: {
      root: "./examples/0010-spike-histogram/",
      readme: "README.md",
      index: "index.html",
      thumb: "thumb.png",
      data: "../../data/safetyData/",
      code: "paneledSpikeHistogram.js",
      example: "example.html"
    },
    readme: {},
    title: "Spike Histogram Demo",
    languages: "javascript",
    libraries: ["spike-histogram"],
    description:
      "Demonstration of a web-based spike histogram with paneling capability and modals.",
    data: "../../data/safetyData/",
    code: "paneledSpikeHistogram.js",
    results: "example.html",
    tags: "interactive, histogram, spike",
    langages: ["javascript"],
    makeIndex: true
  },
  {
    dir: "0011-safetyExplorer-queries",
    files: [
      "ae-table",
      "ae-timelines",
      "chart.html",
      "index.html",
      "README.md",
      "safety-histogram",
      "safety-outlier-explorer",
      "safety-results-over-time",
      "safety-shift-plot",
      "safetyExplorer.css",
      "screenshot.png",
      "thumb.png"
    ],
    paths: {
      root: "./examples/0011-safetyExplorer-queries/",
      readme: "README.md",
      index: "index.html",
      thumb: "thumb.png",
      data: "../../data/safetyData-queries/",
      code: "ae-table/index.html",
      example: "ae-table/index.html"
    },
    readme: {},
    title: "Safety Explorer with Query Data",
    languages: "javascript",
    libraries: [
      "webcharts",
      "safety-histogram",
      "safety-results-over-time",
      "safety-shift-plot",
      "safety-outlier-explorer",
      "ae-timeline",
      "ae-explorer"
    ],
    description:
      "The safety explorer is a collection of interactive graphics visualizing adverse event, lab, and vital sign data captured in clinical trials.  This instance demonstrates customized versions of each graphic including added filters and/or highlights for query data.",
    data: "../../data/safetyData-queries/",
    code: "ae-table/index.html",
    results: "ae-table/index.html",
    tags: "interactive, webcharts, adverse events, safety explorer, queries",
    langages: ["javascript"],
    makeIndex: true
  },
  {
    dir: "0012-web-codebook-explorer",
    files: [
      "example.html",
      "GitHub-Mark-32px.png",
      "index.html",
      "README.md",
      "screen.png",
      "thumb.png"
    ],
    paths: {
      root: "./examples/0012-web-codebook-explorer/",
      readme: "README.md",
      index: "index.html",
      thumb: "thumb.png",
      data: "../../data/safetyData/",
      code: "example.html",
      example: "example.html"
    },
    readme: {},
    title: "Web Codebook Explorer",
    languages: "javascript",
    libraries: ["web-codebook"],
    description:
      "Demonstration of the web-based data summaries using web-codebook.",
    data: "../../data/safetyData/",
    code: "example.html",
    results: "example.html",
    tags: "interactive, codebook",
    langages: ["javascript"],
    makeIndex: true
  },
  {
    dir: "0013-query-overview",
    files: [
      "example.html",
      "GitHub-Mark-32px.png",
      "index.html",
      "README.md",
      "screen.png",
      "thumb.png",
      "webCodebookExplorer.js"
    ],
    paths: {
      root: "./examples/0013-query-overview/",
      readme: "README.md",
      index: "index.html",
      thumb: "thumb.png",
      data: "../../data/queries/queries.csv",
      code: "example.html",
      example: "example.html"
    },
    readme: {},
    title: "Query Overview",
    languages: "javascript",
    libraries: ["query-overview"],
    description:
      "Explorer clinical trial query data using the query-overview library.",
    data: "../../data/queries/queries.csv",
    code: "example.html",
    results: "example.html",
    tags: "interactive, queries",
    langages: ["javascript"],
    makeIndex: true
  },
  {
    dir: "0015-safety-explorer-single-page",
    files: [
      "example.html",
      "index.html",
      "README.md",
      "Screenshot.png",
      "thumb.png"
    ],
    paths: {
      root: "./examples/0015-safety-explorer-single-page/",
      readme: "README.md",
      index: "index.html",
      thumb: "thumb.png",
      data: "../../data/safetyData-queries/",
      code: "example.html",
      example: "example.html"
    },
    readme: {},
    title: "Safety Explorer Suite - Single Page",
    languages: "javascript",
    libraries: [
      "safety-explorer-suite",
      "webcharts",
      "safety-histogram",
      "safety-results-over-time",
      "safety-shift-plot",
      "safety-outlier-explorer",
      "ae-timeline",
      "ae-explorer"
    ],
    description:
      "Example of the safety explorer suite, a simple framework combining 6 interactive safety charts in to a single page.",
    data: "../../data/safetyData-queries/",
    code: "example.html",
    results: "example.html",
    tags: "interactive, queries",
    langages: ["javascript"],
    makeIndex: true
  },
  {
    dir: "0016-safety-outlier-explorer-hys-law",
    files: [
      "example.html",
      "hy.csv",
      "index.html",
      "README.md",
      "screen.png",
      "thumb.png"
    ],
    paths: {
      root: "./examples/0016-safety-outlier-explorer-hys-law/",
      readme: "README.md",
      index: "index.html",
      thumb: "thumb.png",
      data: "hy.csv",
      code: "example.html",
      example: "example.html"
    },
    readme: {},
    title: "Safety Outlier Explorer - Hy's Law",
    languages: "javascript",
    libraries: ["webcharts", "safety-outlier-explorer"],
    description:
      "Example of the safety outlier explorer chart for a small mock study where a single participant meets the criteria for Hy's law.",
    data: "hy.csv",
    code: "example.html",
    results: "example.html",
    tags: "interactive, queries",
    langages: ["javascript"],
    makeIndex: true
  },
  {
    dir: "0017-population-explorer",
    files: [
      "example.html",
      "index.html",
      "primary_outcome_determination_24NOV.csv",
      "README.md",
      "screen.png",
      "thumb.png"
    ],
    paths: {
      root: "./examples/0017-population-explorer/",
      readme: "README.md",
      index: "index.html",
      thumb: "thumb.png",
      data: "primary_outcome_determination_24NOV.csv",
      code: "example.html",
      example: "example.html"
    },
    readme: {},
    title: "Population Explorer for LEAP and LEAP-ON",
    languages: "javascript",
    libraries: ["population explorer"],
    description:
      "Example of the population explorer graphic using public data from the LEAP and LEAP-on Clinical Trials.",
    data: "primary_outcome_determination_24NOV.csv",
    code: "example.html",
    results: "example.html",
    tags: "interactive, data explorer",
    langages: ["javascript"],
    makeIndex: true
  },
  {
    dir: "0018-scatter-plot-matrix",
    files: [
      "example.html",
      "index.html",
      "index.js",
      "README.md",
      "scatterPlotMatrix.js",
      "screen.png",
      "thumb.png"
    ],
    paths: {
      root: "./examples/0018-scatter-plot-matrix/",
      readme: "README.md",
      index: "index.html",
      thumb: "thumb.png",
      data:
        "../../data/iris.csv, ../../data/safetyData/VS.csv, ../0016-safety-outlier-explorer-hys-law/hy.csv",
      code: "index.js",
      example: "example.html"
    },
    readme: {},
    title: "Interactive Scatter Plot Lattice with Vital Signs Data",
    languages: "javascript",
    libraries: ["scatterPlotMatrix"],
    description:
      "A paneled series of scatter plots plotting every measure against every other measure",
    data:
      "../../data/iris.csv, ../../data/safetyData/VS.csv, ../0016-safety-outlier-explorer-hys-law/hy.csv",
    code: "index.js",
    results: "example.html",
    tags: "interactive, scatter plot, lattice, matrix, bivariate",
    langages: ["javascript"],
    makeIndex: true
  },
  {
    dir: "0019-paneled-outlier-explorer",
    files: [
      "example.html",
      "index.html",
      "README.md",
      "screen.png",
      "thumb.png"
    ],
    paths: {
      root: "./examples/0019-paneled-outlier-explorer/",
      readme: "README.md",
      index: "index.html",
      thumb: "thumb.png",
      data: "../../data/safetyData/ADBDS.csv",
      code: "example.html",
      example: "example.html"
    },
    readme: {},
    title: "Brushable paneled outlier explorer",
    languages: "javascript",
    libraries: ["webCharts"],
    description:
      "Example of the a brushable paneled outlier explorer that allows brushing of lines and points",
    data: "../../data/safetyData/ADBDS.csv",
    code: "example.html",
    results: "example.html",
    tags: "interactive, outlier explorer, brushable, paneled",
    langages: ["javascript"],
    makeIndex: true
  },
  {
    dir: "0020-webcharts-table",
    files: [
      "example.html",
      "index.html",
      "README.md",
      "Screen Shot 2017-09-19 at 8.12.29 AM.png",
      "simpleTable.js",
      "thumb.png",
      "xlsx.full.min.js"
    ],
    paths: {
      root: "./examples/0020-webcharts-table/",
      readme: "README.md",
      index: "index.html",
      thumb: "thumb.png",
      data: "elements.csv",
      code: "simpleTable.js",
      example: "example.html"
    },
    readme: {},
    title: "Webcharts Table",
    languages: "javascript",
    libraries: ["webcharts"],
    description:
      "This is a simple listing of elemental data. Created using the improved table functionality in webcharts v1.9.0",
    data: "elements.csv",
    code: "simpleTable.js",
    results: null,
    tags: "interactive, table",
    langages: ["javascript"],
    makeIndex: true
  },
  {
    dir: "0021-webcharts-destroy-table",
    files: [
      "example.html",
      "index.html",
      "README.md",
      "Screen Shot 2017-09-21 at 8.25.55 AM.png",
      "thumb.png"
    ],
    paths: {
      root: "./examples/0021-webcharts-destroy-table/",
      readme: "README.md",
      index: "index.html",
      thumb: "thumb.png",
      data: "elements.csv",
      code: "example.html",
      example: "example.html"
    },
    readme: {},
    title: "Destroy a Webcharts Table",
    languages: "javascript",
    libraries: ["webcharts"],
    description: ".",
    data: "elements.csv",
    code: "example.html",
    results: null,
    tags: "interactive, table, destroy",
    langages: ["javascript"],
    makeIndex: true
  },
  {
    dir: "0022-clinical-timelines",
    files: [
      "example.html",
      "GitHub-Mark-32px.png",
      "index.html",
      "README.md",
      "screen.png",
      "thumb.png"
    ],
    paths: {
      root: "./examples/0022-clinical-timelines/",
      readme: "README.md",
      index: "index.html",
      thumb: "thumb.png",
      data: "../../data/safetyData/ADTIMELINES.csv",
      code: "example.html",
      example: "example.html"
    },
    readme: {},
    title: "Clinical Timelines",
    languages: "javascript",
    libraries: ["clinical-timelines"],
    description: "Explorer clinical timelines by participant",
    data: "../../data/safetyData/ADTIMELINES.csv",
    code: "example.html",
    results: "example.html",
    tags: "interactive, timelines, clinical trials",
    langages: ["javascript"],
    makeIndex: true
  }
];
