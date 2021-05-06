import React, { useEffect, useRef } from 'react';

const ChartJsComponent = ({ field }) => {
  const chartRef = useRef();
  const colors =
    field.chartType == 'Pie chart' || field.chartType == 'Doughnut chart'
      ? [
          'rgba(205,220,57,1)',
          'rgba(255,235,59,1)',
          'rgba(255,193,7,1)',
          'rgba(255,152,0,1)',
          'rgba(255,87,34,1)',
          'rgba(244,67,54,1)',
          'rgba(233,30,99,1)',
          'rgba(156,39,176,1)',
          'rgba(103,58,183,1)',
          'rgba(63,81,181,1)',
          'rgba(96,125,139,1)',
          'rgba(121,85,72,1)',
        ]
      : field.chartType == 'Line chart' || field.chartType == 'Area chart'
      ? 'rgba(255,185,0 ,1 )'
      : [
          'rgba(255,185,0 ,1 )',
          'rgba(255,185,0 ,1 )',
          'rgba(255,185,0 ,1 )',
          'rgba(255,185,0 ,1 )',
          'rgba(255,185,0 ,1 )',
          'rgba(255,185,0 ,1 )',
          'rgba(255,185,0 ,1 )',
          'rgba(255,185,0 ,1 )',
          'rgba(255,185,0 ,1 )',
          'rgba(255,185,0 ,1 )',
          'rgba(255,185,0 ,1 )',
          'rgba(255,185,0 ,1 )',
        ];

  const colors1 =
    field.chartType == 'Pie chart' || field.chartType == 'Doughnut chart'
      ? [
          'rgba(205,220,57,1)',
          'rgba(255,235,59,1)',
          'rgba(255,193,7,1)',
          'rgba(255,152,0,1)',
          'rgba(255,87,34,1)',
          'rgba(244,67,54,1)',
          'rgba(233,30,99,1)',
          'rgba(156,39,176,1)',
          'rgba(103,58,183,1)',
          'rgba(63,81,181,1)',
          'rgba(96,125,139,1)',
          'rgba(121,85,72,1)',
        ]
      : field.chartType == 'Line chart' || field.chartType == 'Area chart'
      ? 'rgba(0,204,106 ,1 )'
      : [
          'rgba(0,204,106 ,1 )',
          'rgba(0,204,106 ,1 )',
          'rgba(0,204,106 ,1 )',
          'rgba(0,204,106 ,1 )',
          'rgba(0,204,106 ,1 )',
          'rgba(0,204,106 ,1 )',
          'rgba(0,204,106 ,1 )',
          'rgba(0,204,106 ,1 )',
          'rgba(0,204,106 ,1 )',
          'rgba(0,204,106 ,1 )',
          'rgba(0,204,106 ,1 )',
          'rgba(0,204,106 ,1 )',
        ];

  const colors2 =
    field.chartType == 'Pie chart' || field.chartType == 'Doughnut chart'
      ? [
          'rgba(205,220,57,1)',
          'rgba(255,235,59,1)',
          'rgba(255,193,7,1)',
          'rgba(255,152,0,1)',
          'rgba(255,87,34,1)',
          'rgba(244,67,54,1)',
          'rgba(233,30,99,1)',
          'rgba(156,39,176,1)',
          'rgba(103,58,183,1)',
          'rgba(63,81,181,1)',
          'rgba(96,125,139,1)',
          'rgba(121,85,72,1)',
        ]
      : field.chartType == 'Line chart' || field.chartType == 'Area chart'
      ? 'rgba(0,120,215 ,1 )'
      : [
          'rgba(0,120,215 ,1 )',
          'rgba(0,120,215 ,1 )',
          'rgba(0,120,215 ,1 )',
          'rgba(0,120,215 ,1 )',
          'rgba(0,120,215 ,1 )',
          'rgba(0,120,215 ,1 )',
          'rgba(0,120,215 ,1 )',
          'rgba(0,120,215 ,1 )',
          'rgba(0,120,215 ,1 )',
          'rgba(0,120,215 ,1 )',
          'rgba(0,120,215 ,1 )',
          'rgba(0,120,215 ,1 )',
        ];

  const colors3 =
    field.chartType == 'Pie chart' || field.chartType == 'Doughnut chart'
      ? [
          'rgba(205,220,57,1)',
          'rgba(255,235,59,1)',
          'rgba(255,193,7,1)',
          'rgba(255,152,0,1)',
          'rgba(255,87,34,1)',
          'rgba(244,67,54,1)',
          'rgba(233,30,99,1)',
          'rgba(156,39,176,1)',
          'rgba(103,58,183,1)',
          'rgba(63,81,181,1)',
          'rgba(96,125,139,1)',
          'rgba(121,85,72,1)',
        ]
      : field.chartType == 'Line chart' || field.chartType == 'Area chart'
      ? 'rgba(231,72,86 ,1 )'
      : [
          'rgba(231,72,86 ,1 )',
          'rgba(231,72,86 ,1 )',
          'rgba(231,72,86 ,1 )',
          'rgba(231,72,86 ,1 )',
          'rgba(231,72,86 ,1 )',
          'rgba(231,72,86 ,1 )',
          'rgba(231,72,86 ,1 )',
          'rgba(231,72,86 ,1 )',
          'rgba(231,72,86 ,1 )',
          'rgba(231,72,86 ,1 )',
          'rgba(231,72,86 ,1 )',
          'rgba(231,72,86 ,1 )',
        ];

  const colors4 =
    field.chartType == 'Pie chart' || field.chartType == 'Doughnut chart'
      ? [
          'rgba(205,220,57,1)',
          'rgba(255,235,59,1)',
          'rgba(255,193,7,1)',
          'rgba(255,152,0,1)',
          'rgba(255,87,34,1)',
          'rgba(244,67,54,1)',
          'rgba(233,30,99,1)',
          'rgba(156,39,176,1)',
          'rgba(103,58,183,1)',
          'rgba(63,81,181,1)',
          'rgba(96,125,139,1)',
          'rgba(121,85,72,1)',
        ]
      : field.chartType == 'Line chart' || field.chartType == 'Area chart'
      ? 'rgba(126,115,95 ,1 )'
      : [
          'rgba(126,115,95 ,1 )',
          'rgba(126,115,95 ,1 )',
          'rgba(126,115,95 ,1 )',
          'rgba(126,115,95 ,1 )',
          'rgba(126,115,95 ,1 )',
          'rgba(126,115,95 ,1 )',
          'rgba(126,115,95 ,1 )',
          'rgba(126,115,95 ,1 )',
          'rgba(126,115,95 ,1 )',
          'rgba(126,115,95 ,1 )',
          'rgba(126,115,95 ,1 )',
          'rgba(126,115,95 ,1 )',
        ];

  const colors5 =
    field.chartType == 'Pie chart' || field.chartType == 'Doughnut chart'
      ? [
          'rgba(205,220,57,1)',
          'rgba(255,235,59,1)',
          'rgba(255,193,7,1)',
          'rgba(255,152,0,1)',
          'rgba(255,87,34,1)',
          'rgba(244,67,54,1)',
          'rgba(233,30,99,1)',
          'rgba(156,39,176,1)',
          'rgba(103,58,183,1)',
          'rgba(63,81,181,1)',
          'rgba(96,125,139,1)',
          'rgba(121,85,72,1)',
        ]
      : field.chartType == 'Line chart' || field.chartType == 'Area chart'
      ? 'rgba(177,70,194 ,1 )'
      : [
          'rgba(177,70,194 ,1 )',
          'rgba(177,70,194 ,1 )',
          'rgba(177,70,194 ,1 )',
          'rgba(177,70,194 ,1 )',
          'rgba(177,70,194 ,1 )',
          'rgba(177,70,194 ,1 )',
          'rgba(177,70,194 ,1 )',
          'rgba(177,70,194 ,1 )',
          'rgba(177,70,194 ,1 )',
          'rgba(177,70,194 ,1 )',
          'rgba(177,70,194 ,1 )',
          'rgba(177,70,194 ,1 )',
        ];

  const data = {
    labels: field.labels && [
      ...field.labels.map((label) => {
        if (label !== '') {
          return label;
        } else {
          return '';
        }
      }),
    ],
    datasets: [
      // Dataset1
      {
        label: field.dataset1Label && field.dataset1Label,
        data:
          field.dataset1 &&
          field.dataset1.map((data) => {
            if (data !== '') {
              return data;
            }
          }),
        backgroundColor: colors,
        borderWidth: field.chartType == 'Area chart' ? 0 : field.chartType == 'Pie chart' || (field.chartType == 'Doughnut chart' && 2),
      },
      // Dataset2
      {
        label: field.dataset2Label && field.dataset2Label,
        data:
          field.dataset2 &&
          field.dataset2.map((data) => {
            if (data !== '') {
              return data;
            }
          }),
        backgroundColor: colors1,
        borderWidth: field.chartType == 'Area chart' ? 0 : field.chartType == 'Pie chart' || (field.chartType == 'Doughnut chart' && 2),
      },
      // Dataset3
      {
        label: field.dataset3Label && field.dataset3Label,
        data:
          field.dataset3 &&
          field.dataset3.map((data) => {
            if (data !== '') {
              return data;
            }
          }),
        backgroundColor: colors2,
        borderWidth: field.chartType == 'Area chart' ? 0 : field.chartType == 'Pie chart' || (field.chartType == 'Doughnut chart' && 2),
      },
      // Dataset4
      {
        label: field.dataset4Label && field.dataset4Label,
        data:
          field.dataset4 &&
          field.dataset4.map((data) => {
            if (data !== '') {
              return data;
            }
          }),
        backgroundColor: colors3,
        borderWidth: field.chartType == 'Area chart' ? 0 : field.chartType == 'Pie chart' || (field.chartType == 'Doughnut chart' && 2),
      },
      // Dataset5
      {
        label: field.dataset5Label && field.dataset5Label,
        data:
          field.dataset5 &&
          field.dataset5.map((data) => {
            if (data !== '') {
              return data;
            }
          }),
        backgroundColor: colors4,
        borderWidth: field.chartType == 'Area chart' ? 0 : field.chartType == 'Pie chart' || (field.chartType == 'Doughnut chart' && 2),
      },
      // Dataset6
      {
        label: field.dataset6Label && field.dataset6Label,
        data:
          field.dataset6 &&
          field.dataset6.map((data) => {
            if (data !== '') {
              return data;
            }
          }),
        backgroundColor: colors5,
        borderWidth: field.chartType == 'Area chart' ? 0 : field.chartType == 'Pie chart' || (field.chartType == 'Doughnut chart' && 2),
      },
    ],
  };

  useEffect(async () => {
    document.getElementById(`${field.index}chartContainer`).innerHTML = '&nbsp;';
    document.getElementById(`${field.index}chartContainer`).innerHTML = `<canvas id=${field.index} ref=${chartRef}></canvas>`;
    const myChartRef = document.getElementById(field.index).getContext('2d');

    console.log(data.datasets);
    const datas = data.datasets.map((dataset) => {
      console.log(dataset.data[0]);
      const test1 = dataset.data.map((datases) => {
        if (datases !== undefined) {
          return datases;
        } else {
          return '';
        }
      });
      const test = test1.map((datarer, index) => {
        if (data.labels[index] !== '') {
          return datarer;
        }
      });
      const test2 = test.filter((obj) => obj !== undefined);
      return test2;
    });

    const fill = field.chartType == 'Line chart' ? false : undefined;

    const newDatasets = [
      {
        label: data.datasets[0].label,
        data: datas[0],
        backgroundColor: data.datasets[0].backgroundColor,
        borderColor: field.chartType == 'Line chart' ? 'rgba(255,185,0 ,1 )' : 'rgb(255, 255, 255)',
        borderWidth: data.datasets[0].borderWidth,
        fill: fill,
      },
      {
        label: data.datasets[1].label,
        data: datas[1],
        backgroundColor: data.datasets[1].backgroundColor,
        borderColor: field.chartType == 'Line chart' ? 'rgba(0,204,106 ,1 )' : 'rgb(255, 255, 255)',
        borderWidth: data.datasets[1].borderWidth,
        fill: fill,
      },
      {
        label: data.datasets[2].label,
        data: datas[2],
        backgroundColor: data.datasets[2].backgroundColor,
        borderColor: field.chartType == 'Line chart' ? 'rgba(0,120,215 ,1 )' : 'rgb(255, 255, 255)',
        borderWidth: data.datasets[2].borderWidth,
        fill: fill,
      },
      {
        label: data.datasets[3].label,
        data: datas[3],
        backgroundColor: data.datasets[3].backgroundColor,
        borderColor: field.chartType == 'Line chart' ? 'rgba(231,72,86 ,1 )' : 'rgb(255, 255, 255)',
        borderWidth: data.datasets[3].borderWidth,
        fill: fill,
      },
      {
        label: data.datasets[4].label,
        data: datas[4],
        backgroundColor: data.datasets[4].backgroundColor,
        borderColor: field.chartType == 'Line chart' ? 'rgba(126,115,95 ,1 )' : 'rgb(255, 255, 255)',
        borderWidth: data.datasets[4].borderWidth,
        fill: fill,
      },
      {
        label: data.datasets[5].label,
        data: datas[5],
        backgroundColor: data.datasets[5].backgroundColor,
        borderColor: field.chartType == 'Line chart' ? 'rgba(177,70,194 ,1 )' : 'rgb(255, 255, 255)',
        borderWidth: data.datasets[5].borderWidth,
        fill: fill,
      },
    ];
    console.log(newDatasets);

    const chartType = [
      field.chartType == 'Bar chart' ? 'bar' : '',
      field.chartType == 'Reverse chart' ? 'horizontalBar' : '',
      field.chartType == 'Line chart' ? 'line' : '',
      field.chartType == 'Pie chart' ? 'pie' : '',
      field.chartType == 'Doughnut chart' ? 'doughnut' : '',
      field.chartType == 'Area chart' ? 'line' : '',
    ];

    window.id = new Chart(myChartRef, {
      type: chartType.filter((type) => type !== ''),
      data: {
        labels: data.labels.filter((label) => label !== ''),
        datasets: newDatasets.filter((dataset) => dataset.label !== ''),
      },
      options: {
        skipNull: true,
        responsive: true,
        legend: {
          position: 'bottom',
        },
        // defaultFontFamily: (Chart.defaults.global.defaultFontFamily =
        //   'Comfortaa'),
        scales: {
          yAxes: [
            {
              stacked: field.stacked == true ? true : false,
              ticks: {
                beginAtZero: true,
              },
            },
          ],
          xAxes: [
            {
              stacked: field.stacked == true ? true : false,
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }, [data.labels, data.datasets, data]);

  return (
    <div className="w-full grid grid-cols-12fr justify-items-center items-center mt-6">
      <div
        id={`${field.index}container`}
        className="col-start-2 col-end-12 relative flex flex-col h-full w-full flex px-8 py-8 rounded-2xl bg-white dark:bg-background"
      >
        <div className="w-full h-full">
          <div id={`${field.index}chartContainer`}></div>
        </div>
      </div>
    </div>
  );
};

export default ChartJsComponent;
