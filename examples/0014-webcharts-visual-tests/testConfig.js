var testConfig = [
  {
    label: 'Testing Axis Types - linear vs. linear',
    notes: '',
    tests: [
      "Confirm that both axis are renderering with numeric values",
           "Confirm that points are being drawn",
            "Confirm that labels are being created as specified",
            "Confirm that there is one circle per element being drawn"
           ],
    settings: {
      max_width:500,
      x: {
        column: 'Melt',
        type: 'linear',
        label: 'Melting Point (K)'
      },
      y: {
        column: 'Boil',
        type: 'linear',
        label: 'Boiling Point (K)'
      },
      marks: [
        {
          type: 'circle',
          per: ['Element']
        }
      ]
    },
    dataPath: '../../data/elements.csv'
  },
  {
    label: 'Testing Axis Types - linear vs. ordinal',
    notes:'',
    settings: {
      max_width:500,
      x: {
        column: 'Period',
        type: 'ordinal',
        label: 'Period'
      },
      y: {
        column: 'Boil',
        type: 'linear',
        label: 'Boiling Point (K)'
      },
      marks: [
        {
          type: 'circle',
          per: ['Element']
        }
      ]
    },
    dataPath: '../../data/elements.csv'
  },
  {
    label: 'Testing Axis Types - ordinal vs. ordinal',
    notes:'Opacity set to identify overlapping points. As shown, ordinal axis treat missing values as just another level to be plotted. (e.g. `group=""` or  `group=" "`)',
    settings: {
      max_width:500,
      x: {
        column: 'Period',
        type: 'ordinal',
        label: 'Period'
      },
      y: {
        column: 'Group',
        type: 'ordinal',
        label: 'Group'
      },
      marks: [
        {
          type: 'circle',
          per: ['Element'],
          attributes:{"fill-opacity":0.2,"stroke-opacity":1}
        }
      ]
    },
    dataPath: '../../data/elements.csv'
  },
  {
    label: 'Testing Axis Types - log vs. log',
    notes: 'log axes are buggy as of 1.7.1.',
    settings: {
      max_width:500,
      x: {
        column: 'Melt',
        type: 'log',
        label: 'Melting Point (K)'
      },
      y: {
        column: 'Boil',
        type: 'log',
        label: 'Boiling Point (K)'
      },
      marks: [
        {
          type: 'circle',
          per: ['Element']
        }
      ]
    },
    dataPath: '../../data/elements.csv'
  },
  {
    label: 'Testing Axis Types - date vs. linear ',
    notes: 'This charts shows the number of records at each given date. Note that no `y.column` is specified; instead, marks.summarizeY specifies a simple calculation.',
    settings: {
      max_width:500,
      x: {
        column: 'Query Open Date',
        type: 'time',
        format:'%y-%m'
      },
      y: {
        type:'linear',
        label:'count',
        domain:[0]
      },
      date_format:"%Y-%m-%d",
      marks: [
        {
          type: 'circle',
          per: ['Query Open Date'],
          summarizeY:'count'
        }
      ]
    },
    dataPath: '../../data/queries/queries.csv'
  },
    {
    label: 'Testing Axis Types - linear vs. date ',
    notes: 'This charts shows the number of records at each given date. Note that no `y.column` is specified; instead, marks.summarizeY specifies a simple calculation.',
    settings: {
      max_width:500,
      y: {
        column: 'Query Open Date',
        type: 'time',
        format:'%y-%m'
      },
      x: {
        type:'linear',
        label:'count',
        domain:[0]
      },
      date_format:"%Y-%m-%d",
      marks: [
        {
          type: 'circle',
          per: ['Query Open Date'],
          summarizeX:'count'
        }
      ]
    },
    dataPath: '../../data/queries/queries.csv'
  },

//-------------------------------LINE----------------------------------------

    {
    label: 'Testing Axis Types - linear vs. linear',
    notes: 'This chart compares the element number to its weight.',
    settings: {
      max_width:1000,
      y: {
        column: 'Weight',
        type: 'linear',
      },
      x: {
        type:'linear',
        label:'Element',
      },
      marks: [
        {
          type: 'line',
          per: ['Weight'],
        }
      ]
    },
    dataPath: '../../data/element.csv'
  },

//-------------------------------Bar----------------------------------------


    {
    label: 'Testing Axis Types - linear vs. linear',
    notes: 'This chart compares the element number to its weight.',
    settings: {
      max_width:1000,
      y: {
        column: 'Weight',
        type: 'linear',
      },
      x: {
        type:'linear',
        label:'Element',
      },
      marks: [
        {
          type: 'bar',
          per: ['Weight'],
        }
      ]
    },
    dataPath: '../../data/element.csv'
  },

//-------------------------------text----------------------------------------


    {
    label: 'Testing Axis Types - linear vs. linear',
    notes: 'This chart compares the element number to its weight.',
    settings: {
      max_width:1000,
      y: {
        column: 'Weight',
        type: 'linear',
      },
      x: {
        type:'linear',
        label:'Element',
      },
      marks: [
        {
          type: 'text',
          per: ['Weight'],
	  text: '$y',
        }
      ]
    },
    dataPath: '../../data/element.csv'
  }

];
