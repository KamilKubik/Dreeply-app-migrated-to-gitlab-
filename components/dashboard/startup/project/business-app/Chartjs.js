import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import ChartJsImage from 'chartjs-to-image';
// import ChartJSImage from 'chart.js-image';
import MyDocument1 from './PDFChart';
import {
  pdf,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  BlobProvider,
  PDFDownloadLink,
} from '@react-pdf/renderer';
import { v4 as uuidv4 } from 'uuid';
import debounce from '../../../../../utils/helpers';
import { db } from '../../../../../lib/firebase';
import gsap, { Power4, Linear } from 'gsap';
import Image from 'next/image';
import Router from 'next/router';

// Chart functions
// import { chartLabelsUpdate } from '../../../../../utils/chart';

// const MyDocument = ({ imageUrl }) => {
//   // console.log(imageUrl);
//   return (
//     <Document>
//       <Page size='A4'>
//         <View>
//           <Text>Section #1</Text>
//         </View>
//         <View>
//           <Image src={imageUrl && imageUrl} />
//         </View>
//       </Page>
//     </Document>
//   );
// };

const ChartJsComponent = ({
  chartImageUpdate,
  provided,
  projectId,
  addChart,
  chartTypeUpdate,
  currentIndex,
  deleteField,
  containerRef,
  datasetLabel6Update,
  datasetLabel5Update,
  datasetLabel4Update,
  datasetLabel3Update,
  datasetLabel2Update,
  datasetLabel1Update,
  dataset6Update,
  dataset5Update,
  dataset4Update,
  dataset3Update,
  dataset2Update,
  dataset1Update,
  labelUpdate,
  chartLabelsUpdate,
  field,
  selectedSection,
  chartValueUpdate,
  index,
}) => {
  console.log('FIELD --> ', field);
  const chartRef = useRef();

  const [inputData, setInputData] = useState('Simple legend');

  const toSaveChart = new ChartJsImage();
  toSaveChart.setConfig({
    type: 'bar',
    data: data,
    options: {
      responsive: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  const [imageUrl, setImageUrl] = useState();

  const onChartSave = async () => {
    console.log(await toSaveChart.toDataUrl());
    // setImageUrl(await toSaveChart.toDataUrl());
  };

  useEffect(async () => {
    setImageUrl(await toSaveChart.toDataUrl());
    console.log(imageUrl);
  }, []);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setOpen(true);
    return () => setOpen(false);
  });

  // -------------------------------- VALUES -------------------------------------
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [value, setValue] = useState('');
  const [color, setColor] = useState('');

  const update = useCallback(
    debounce(async (data) => {
      const currentSectionIndex = await data.selSection.fields.findIndex(
        (field) => field.index == data.index
      );
      chartValueUpdate(data, data.index, currentSectionIndex);
    }, 500),
    []
  );

  const updateName = (val) => {
    const data = {
      name: val,
      index,
      selSection: selectedSection,
    };
    // update(data);
    setName(val);
  };
  const updateType = (val) => {
    const data = {
      type: val,
      index,
      selSection: selectedSection,
    };
    // update(data);
    setType(val);
  };
  const updateValue = (val) => {
    const data = {
      value: val,
      index,
      selSection: selectedSection,
    };
    // update(data);
    setValue(val);
  };
  const updateColor = (val) => {
    const data = {
      color: val,
      index,
      selSection: selectedSection,
    };
    // update(data);
    setColor(val);
  };

  // -------------------------------- New Chart Values ------------------------------------
  const onNewDataChartAdd = async () => {
    const newData = {
      name,
      type,
      value,
      color,
    };
    const currentChartIndex = await selectedSection.fields.findIndex(
      (field) => field.index == index
    );
    // let newFieldsArray = [...selectedSection.fields];
    const newSelectedSection = selectedSection;
    newSelectedSection.fields[currentChartIndex].data.push(newData);
    console.log(newSelectedSection);

    // newFieldsArray[currentChartIndex] = {
    //   index,
    //   type: 'chart',
    //   data: 'D'
    // }

    db.collection('projects')
      .doc(projectId)
      .collection('businessPlan')
      .doc(Router.query.project)
      .collection('inputs')
    // .collection('currentBusinessPlan')
    //   .doc('GrcvhyJwvlWVy31QsiudoQKdKI72')
    //   .collection('inputs')
      .doc(selectedSection.id)
      .update({
        fields: newSelectedSection.fields,
      });
  };

  // Chart Data fetching
  const [chartData, setChartData] = useState();

  useEffect(async () => {
    const currentChartIndex = await selectedSection.fields.findIndex(
      (field) => field.index == index
    );
    db.collection('projects')
      .doc(projectId)
      .collection('businessPlan')
      .doc(Router.query.project)
      .collection('inputs')
    // .collection('currentBusinessPlan')
    //   .doc('GrcvhyJwvlWVy31QsiudoQKdKI72')
    //   .collection('inputs')
      .doc(selectedSection.id)
      .onSnapshot((serverUpdate) => {
        const fields = serverUpdate.data().fields.map((field) => {
          return field;
        });
        setChartData(fields[currentChartIndex]);
        console.log(fields[currentChartIndex]);
        // sections.sort((a, b) => b.createdAt - a.createdAt);
        // this.setState({ sections: sections });
      });
  }, []);
  console.log(field);

  useEffect(() => {
    field.labels[0] && setLabel1(field.labels[0]);
    field.labels[1] && setLabel2(field.labels[1]);
    field.labels[2] && setLabel3(field.labels[2]);
    field.labels[3] && setLabel4(field.labels[3]);
    field.labels[4] && setLabel5(field.labels[4]);
    field.labels[5] && setLabel6(field.labels[5]);
    field.labels[6] && setLabel7(field.labels[6]);
    field.labels[7] && setLabel8(field.labels[7]);
    field.labels[8] && setLabel9(field.labels[8]);
    field.labels[9] && setLabel10(field.labels[9]);
    field.labels[10] && setLabel11(field.labels[10]);
    field.labels[11] && setLabel12(field.labels[11]);
  }, [field]);

  // Dataset1
  useEffect(() => {
    field.dataset1[0] && setDataset1Value1(field.dataset1[0]);
    field.dataset1[1] && setDataset1Value2(field.dataset1[1]);
    field.dataset1[2] && setDataset1Value3(field.dataset1[2]);
    field.dataset1[3] && setDataset1Value4(field.dataset1[3]);
    field.dataset1[4] && setDataset1Value5(field.dataset1[4]);
    field.dataset1[5] && setDataset1Value6(field.dataset1[5]);
    field.dataset1[6] && setDataset1Value7(field.dataset1[6]);
    field.dataset1[7] && setDataset1Value8(field.dataset1[7]);
    field.dataset1[8] && setDataset1Value9(field.dataset1[8]);
    field.dataset1[9] && setDataset1Value10(field.dataset1[9]);
    field.dataset1[10] && setDataset1Value11(field.dataset1[10]);
    field.dataset1[11] && setDataset1Value12(field.dataset1[11]);
  }, [field]);

  // Dataset2
  useEffect(() => {
    field.dataset2[0] && setDataset2Value1(field.dataset2[0]);
    field.dataset2[1] && setDataset2Value2(field.dataset2[1]);
    field.dataset2[2] && setDataset2Value3(field.dataset2[2]);
    field.dataset2[3] && setDataset2Value4(field.dataset2[3]);
    field.dataset2[4] && setDataset2Value5(field.dataset2[4]);
    field.dataset2[5] && setDataset2Value6(field.dataset2[5]);
    field.dataset2[6] && setDataset2Value7(field.dataset2[6]);
    field.dataset2[7] && setDataset2Value8(field.dataset2[7]);
    field.dataset2[8] && setDataset2Value9(field.dataset2[8]);
    field.dataset2[9] && setDataset2Value10(field.dataset2[9]);
    field.dataset2[10] && setDataset2Value11(field.dataset2[10]);
    field.dataset2[11] && setDataset2Value12(field.dataset2[11]);
  }, [field]);

  // Dataset3
  useEffect(() => {
    field.dataset3[0] && setDataset3Value1(field.dataset3[0]);
    field.dataset3[1] && setDataset3Value2(field.dataset3[1]);
    field.dataset3[2] && setDataset3Value3(field.dataset3[2]);
    field.dataset3[3] && setDataset3Value4(field.dataset3[3]);
    field.dataset3[4] && setDataset3Value5(field.dataset3[4]);
    field.dataset3[5] && setDataset3Value6(field.dataset3[5]);
    field.dataset3[6] && setDataset3Value7(field.dataset3[6]);
    field.dataset3[7] && setDataset3Value8(field.dataset3[7]);
    field.dataset3[8] && setDataset3Value9(field.dataset3[8]);
    field.dataset3[9] && setDataset3Value10(field.dataset3[9]);
    field.dataset3[10] && setDataset3Value11(field.dataset3[10]);
    field.dataset3[11] && setDataset3Value12(field.dataset3[11]);
  }, [field]);

  // Dataset4
  useEffect(() => {
    field.dataset4[0] && setDataset4Value1(field.dataset4[0]);
    field.dataset4[1] && setDataset4Value2(field.dataset4[1]);
    field.dataset4[2] && setDataset4Value3(field.dataset4[2]);
    field.dataset4[3] && setDataset4Value4(field.dataset4[3]);
    field.dataset4[4] && setDataset4Value5(field.dataset4[4]);
    field.dataset4[5] && setDataset4Value6(field.dataset4[5]);
    field.dataset4[6] && setDataset4Value7(field.dataset4[6]);
    field.dataset4[7] && setDataset4Value8(field.dataset4[7]);
    field.dataset4[8] && setDataset4Value9(field.dataset4[8]);
    field.dataset4[9] && setDataset4Value10(field.dataset4[9]);
    field.dataset4[10] && setDataset4Value11(field.dataset4[10]);
    field.dataset4[11] && setDataset4Value12(field.dataset4[11]);
  }, [field]);

  // Dataset5
  useEffect(() => {
    field.dataset5[0] && setDataset5Value1(field.dataset5[0]);
    field.dataset5[1] && setDataset5Value2(field.dataset5[1]);
    field.dataset5[2] && setDataset5Value3(field.dataset5[2]);
    field.dataset5[3] && setDataset5Value4(field.dataset5[3]);
    field.dataset5[4] && setDataset5Value5(field.dataset5[4]);
    field.dataset5[5] && setDataset5Value6(field.dataset5[5]);
    field.dataset5[6] && setDataset5Value7(field.dataset5[6]);
    field.dataset5[7] && setDataset5Value8(field.dataset5[7]);
    field.dataset5[8] && setDataset5Value9(field.dataset5[8]);
    field.dataset5[9] && setDataset5Value10(field.dataset5[9]);
    field.dataset5[10] && setDataset5Value11(field.dataset5[10]);
    field.dataset5[11] && setDataset5Value12(field.dataset5[11]);
  }, [field]);

  // Dataset6
  useEffect(() => {
    field.dataset6[0] && setDataset6Value1(field.dataset6[0]);
    field.dataset6[1] && setDataset6Value2(field.dataset6[1]);
    field.dataset6[2] && setDataset6Value3(field.dataset6[2]);
    field.dataset6[3] && setDataset6Value4(field.dataset6[3]);
    field.dataset6[4] && setDataset6Value5(field.dataset6[4]);
    field.dataset6[5] && setDataset6Value6(field.dataset6[5]);
    field.dataset6[6] && setDataset6Value7(field.dataset6[6]);
    field.dataset6[7] && setDataset6Value8(field.dataset6[7]);
    field.dataset6[8] && setDataset6Value9(field.dataset6[8]);
    field.dataset6[9] && setDataset6Value10(field.dataset6[9]);
    field.dataset6[10] && setDataset6Value11(field.dataset6[10]);
    field.dataset6[11] && setDataset6Value12(field.dataset6[11]);
  }, [field]);

  // Dataset labels
  useEffect(() => {
    field.dataset1Label && setDataset1Label(field.dataset1Label);
    field.dataset2Label && setDataset2Label(field.dataset2Label);
    field.dataset3Label && setDataset3Label(field.dataset3Label);
    field.dataset4Label && setDataset4Label(field.dataset4Label);
    field.dataset5Label && setDataset5Label(field.dataset5Label);
    field.dataset6Label && setDataset6Label(field.dataset6Label);
  }, [field]);

  // CHART
  // field.dataset1.map((data) => {
  //   console.log('data --> ', field.dataset1.indexOf(data));
  // });

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
        data: field.dataset1 && 
          field.dataset1.map((data) => {
            if (data !== '') {
              return data;
            }
          }),
        backgroundColor: colors,
        borderWidth:
          field.chartType == 'Area chart'
            ? 0
            : field.chartType == 'Pie chart' ||
              (field.chartType == 'Doughnut chart' && 2),
      },
      // Dataset2
      {
        label: field.dataset2Label && field.dataset2Label,
        data: field.dataset2 && 
          field.dataset2.map((data) => {
            if (data !== '') {
              return data;
            }
          }),
        backgroundColor: colors1,
        borderWidth:
          field.chartType == 'Area chart'
            ? 0
            : field.chartType == 'Pie chart' ||
              (field.chartType == 'Doughnut chart' && 2),
      },
      // Dataset3
      {
        label: field.dataset3Label && field.dataset3Label,
        data: field.dataset3 && 
          field.dataset3.map((data) => {
            if (data !== '') {
              return data;
            }
          }),
        backgroundColor: colors2,
        borderWidth:
          field.chartType == 'Area chart'
            ? 0
            : field.chartType == 'Pie chart' ||
              (field.chartType == 'Doughnut chart' && 2),
      },
      // Dataset4
      {
        label: field.dataset4Label && field.dataset4Label,
        data: field.dataset4 && 
          field.dataset4.map((data) => {
            if (data !== '') {
              return data;
            }
          }),
        backgroundColor: colors3,
        borderWidth:
          field.chartType == 'Area chart'
            ? 0
            : field.chartType == 'Pie chart' ||
              (field.chartType == 'Doughnut chart' && 2),
      },
      // Dataset5
      {
        label: field.dataset5Label && field.dataset5Label,
        data: field.dataset5 &&
          field.dataset5.map((data) => {
            if (data !== '') {
              return data;
            }
          }),
        backgroundColor: colors4,
        borderWidth:
          field.chartType == 'Area chart'
            ? 0
            : field.chartType == 'Pie chart' ||
              (field.chartType == 'Doughnut chart' && 2),
      },
      // Dataset6
      {
        label: field.dataset6Label && field.dataset6Label,
        data: field.dataset6 &&
          field.dataset6.map((data) => {
            if (data !== '') {
              return data;
            }
          }),
        backgroundColor: colors5,
        borderWidth:
          field.chartType == 'Area chart'
            ? 0
            : field.chartType == 'Pie chart' ||
              (field.chartType == 'Doughnut chart' && 2),
      },
    ],
  };

  console.log(data);

  const [newChart, setNewChart] = useState();
  const [datasets, setDatasets] = useState([]);
  useEffect(async () => {
    // console.log('-------- DESTROY --------');
    // newChart && await newChart.destroy() && console.log('-------- DESTROY --------');
    // const id = field.chartId;
    // if (window.id && window.id !== null) {
    //   window.id.destroy();
    // }
    // const myChartRef = chartRef.current.getContext('2d');
    // const myChartRef = field.chartId;
    document.getElementById(`${field.index}chartContainer`).innerHTML = '&nbsp;';
    document.getElementById(`${field.index}chartContainer`).innerHTML = `<canvas id=${field.index} ref=${chartRef}></canvas>`;
    const myChartRef = document.getElementById(field.index).getContext("2d");

    // data.datasets.map((dataset) => {
    //   data.labels.map((label) => {
    //     if (label !== '' && dataset.label !== '') {
    //       setDatasets(dataset);
    //     }
    //   })
    // })

    // const datas = data.datasets.map((dataset) => {
    //   const test = dataset.data.filter((datarer, index) => {
    //     if (data.labels[index] !== '') {
    //       return datarer
    //     }
    //   })
    //   return test
    // })
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
    console.log('DATAS --> ', datas);

    // const data1 = datas[0][0] ? datas[0][0].map((datarr) => datarr) : [];
    // const data2 = datas[1][0] ? datas[1][0].map((datarr) => datarr) : [];
    // const data3 = datas[2][0] ? datas[2][0].map((datarr) => datarr) : [];
    // const data4 = datas[3][0] ? datas[3][0].map((datarr) => datarr) : [];
    // const data5 = datas[4][0] ? datas[4][0].map((datarr) => datarr) : [];
    // const data6 = datas[5][0] ? datas[5][0].map((datarr) => datarr) : [];

    const fill = field.chartType == 'Line chart' ? false : undefined;

    const newDatasets = [
      {
        label: data.datasets[0].label,
        data: datas[0],
        backgroundColor: data.datasets[0].backgroundColor,
        borderColor:
          field.chartType == 'Line chart'
            ? 'rgba(255,185,0 ,1 )'
            : 'rgb(255, 255, 255)',
        borderWidth: data.datasets[0].borderWidth,
        fill: fill,
      },
      {
        label: data.datasets[1].label,
        data: datas[1],
        backgroundColor: data.datasets[1].backgroundColor,
        borderColor:
          field.chartType == 'Line chart'
            ? 'rgba(0,204,106 ,1 )'
            : 'rgb(255, 255, 255)',
        borderWidth: data.datasets[1].borderWidth,
        fill: fill,
      },
      {
        label: data.datasets[2].label,
        data: datas[2],
        backgroundColor: data.datasets[2].backgroundColor,
        borderColor:
          field.chartType == 'Line chart'
            ? 'rgba(0,120,215 ,1 )'
            : 'rgb(255, 255, 255)',
        borderWidth: data.datasets[2].borderWidth,
        fill: fill,
      },
      {
        label: data.datasets[3].label,
        data: datas[3],
        backgroundColor: data.datasets[3].backgroundColor,
        borderColor:
          field.chartType == 'Line chart'
            ? 'rgba(231,72,86 ,1 )'
            : 'rgb(255, 255, 255)',
        borderWidth: data.datasets[3].borderWidth,
        fill: fill,
      },
      {
        label: data.datasets[4].label,
        data: datas[4],
        backgroundColor: data.datasets[4].backgroundColor,
        borderColor:
          field.chartType == 'Line chart'
            ? 'rgba(126,115,95 ,1 )'
            : 'rgb(255, 255, 255)',
        borderWidth: data.datasets[4].borderWidth,
        fill: fill,
      },
      {
        label: data.datasets[5].label,
        data: datas[5],
        backgroundColor: data.datasets[5].backgroundColor,
        borderColor:
          field.chartType == 'Line chart'
            ? 'rgba(177,70,194 ,1 )'
            : 'rgb(255, 255, 255)',
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
        responsive: true,
        legend: {
          position: 'bottom',
        },
        defaultFontFamily: (Chart.defaults.global.defaultFontFamily =
          'Comfortaa'),
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
    // addChart(chart, currentIndex, index, selectedSection);
  }, [data.labels, data.datasets, data]);

  const [label1, setLabel1] = useState('');
  const [label2, setLabel2] = useState('');
  const [label3, setLabel3] = useState('');
  const [label4, setLabel4] = useState('');
  const [label5, setLabel5] = useState('');
  const [label6, setLabel6] = useState('');
  const [label7, setLabel7] = useState('');
  const [label8, setLabel8] = useState('');
  const [label9, setLabel9] = useState('');
  const [label10, setLabel10] = useState('');
  const [label11, setLabel11] = useState('');
  const [label12, setLabel12] = useState('');

  const onLabelChange1 = (label) => {
    setLabel1(label);
    const data = {
      labelOne: 'true',
      label1: label,
      index,
      selSection: selectedSection,
    };
    labelUpdate(data);
  };
  const onLabelChange2 = (label) => {
    setLabel2(label);
    const data = {
      label22: 'true',
      label2: label,
      index,
      selSection: selectedSection,
    };
    labelUpdate(data);
  };
  const onLabelChange3 = (label) => {
    setLabel3(label);
    const data = {
      label33: 'true',
      label3: label,
      index,
      selSection: selectedSection,
    };
    labelUpdate(data);
  };
  const onLabelChange4 = (label) => {
    setLabel4(label);
    const data = {
      label44: 'true',
      label4: label,
      index,
      selSection: selectedSection,
    };
    labelUpdate(data);
  };
  const onLabelChange5 = (label) => {
    setLabel5(label);
    const data = {
      label55: 'true',
      label5: label,
      index,
      selSection: selectedSection,
    };
    labelUpdate(data);
  };
  const onLabelChange6 = (label) => {
    setLabel6(label);
    const data = {
      label66: 'true',
      label6: label,
      index,
      selSection: selectedSection,
    };
    labelUpdate(data);
  };
  const onLabelChange7 = (label) => {
    setLabel7(label);
    const data = {
      label77: 'true',
      label7: label,
      index,
      selSection: selectedSection,
    };
    labelUpdate(data);
  };
  const onLabelChange8 = (label) => {
    setLabel8(label);
    const data = {
      label88: 'true',
      label8: label,
      index,
      selSection: selectedSection,
    };
    labelUpdate(data);
  };
  const onLabelChange9 = (label) => {
    setLabel9(label);
    const data = {
      label99: 'true',
      label9: label,
      index,
      selSection: selectedSection,
    };
    labelUpdate(data);
  };
  const onLabelChange10 = (label) => {
    setLabel10(label);
    const data = {
      label100: 'true',
      label10: label,
      index,
      selSection: selectedSection,
    };
    labelUpdate(data);
  };
  const onLabelChange11 = (label) => {
    setLabel11(label);
    const data = {
      label111: 'true',
      label11: label,
      index,
      selSection: selectedSection,
    };
    labelUpdate(data);
  };
  const onLabelChange12 = (label) => {
    setLabel12(label);
    const data = {
      label120: 'true',
      label12: label,
      index,
      selSection: selectedSection,
    };
    labelUpdate(data);
  };

  console.log(field);

  // DATASETS
  const [dataset1Label, setDataset1Label] = useState('');
  const [dataset2Label, setDataset2Label] = useState('');
  const [dataset3Label, setDataset3Label] = useState('');
  const [dataset4Label, setDataset4Label] = useState('');
  const [dataset5Label, setDataset5Label] = useState('');
  const [dataset6Label, setDataset6Label] = useState('');

  // DATASET 1 --- START ---
  const [dataset1Value1, setDataset1Value1] = useState('');
  const [dataset1Value2, setDataset1Value2] = useState('');
  const [dataset1Value3, setDataset1Value3] = useState('');
  const [dataset1Value4, setDataset1Value4] = useState('');
  const [dataset1Value5, setDataset1Value5] = useState('');
  const [dataset1Value6, setDataset1Value6] = useState('');
  const [dataset1Value7, setDataset1Value7] = useState('');
  const [dataset1Value8, setDataset1Value8] = useState('');
  const [dataset1Value9, setDataset1Value9] = useState('');
  const [dataset1Value10, setDataset1Value10] = useState('');
  const [dataset1Value11, setDataset1Value11] = useState('');
  const [dataset1Value12, setDataset1Value12] = useState('');

  const onDataset1Value1Change = (datasetValue) => {
    setDataset1Value1(datasetValue);
    const data = {
      dataset1ValueOne: 'true',
      dataset1Value1: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset1Update(data);
  };

  const onDataset1Value2Change = (datasetValue) => {
    setDataset1Value2(datasetValue);
    const data = {
      dataset1Value22: 'true',
      dataset1Value2: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset1Update(data);
  };

  const onDataset1Value3Change = (datasetValue) => {
    setDataset1Value3(datasetValue);
    const data = {
      dataset1Value33: 'true',
      dataset1Value3: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset1Update(data);
  };

  const onDataset1Value4Change = (datasetValue) => {
    setDataset1Value4(datasetValue);
    const data = {
      dataset1Value44: 'true',
      dataset1Value4: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset1Update(data);
  };

  const onDataset1Value5Change = (datasetValue) => {
    setDataset1Value5(datasetValue);
    const data = {
      dataset1Value55: 'true',
      dataset1Value5: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset1Update(data);
  };

  const onDataset1Value6Change = (datasetValue) => {
    setDataset1Value6(datasetValue);
    const data = {
      dataset1Value66: 'true',
      dataset1Value6: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset1Update(data);
  };

  const onDataset1Value7Change = (datasetValue) => {
    setDataset1Value7(datasetValue);
    const data = {
      dataset1Value77: 'true',
      dataset1Value7: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset1Update(data);
  };

  const onDataset1Value8Change = (datasetValue) => {
    setDataset1Value8(datasetValue);
    const data = {
      dataset1Value88: 'true',
      dataset1Value8: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset1Update(data);
  };

  const onDataset1Value9Change = (datasetValue) => {
    setDataset1Value9(datasetValue);
    const data = {
      dataset1Value99: 'true',
      dataset1Value9: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset1Update(data);
  };

  const onDataset1Value10Change = (datasetValue) => {
    setDataset1Value10(datasetValue);
    const data = {
      dataset1Value100: 'true',
      dataset1Value10: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset1Update(data);
  };

  const onDataset1Value11Change = (datasetValue) => {
    setDataset1Value11(datasetValue);
    const data = {
      dataset1Value111: 'true',
      dataset1Value11: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset1Update(data);
  };

  const onDataset1Value12Change = (datasetValue) => {
    setDataset1Value12(datasetValue);
    const data = {
      dataset1Value120: 'true',
      dataset1Value12: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset1Update(data);
  };

  // DATASET 1 --- END ---
  // DATASET 2 --- START ---
  const [dataset2Value1, setDataset2Value1] = useState('');
  const [dataset2Value2, setDataset2Value2] = useState('');
  const [dataset2Value3, setDataset2Value3] = useState('');
  const [dataset2Value4, setDataset2Value4] = useState('');
  const [dataset2Value5, setDataset2Value5] = useState('');
  const [dataset2Value6, setDataset2Value6] = useState('');
  const [dataset2Value7, setDataset2Value7] = useState('');
  const [dataset2Value8, setDataset2Value8] = useState('');
  const [dataset2Value9, setDataset2Value9] = useState('');
  const [dataset2Value10, setDataset2Value10] = useState('');
  const [dataset2Value11, setDataset2Value11] = useState('');
  const [dataset2Value12, setDataset2Value12] = useState('');

  const onDataset2Value1Change = (datasetValue) => {
    setDataset2Value1(datasetValue);
    const data = {
      dataset2ValueOne: 'true',
      dataset2Value1: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset2Update(data);
  };

  const onDataset2Value2Change = (datasetValue) => {
    setDataset2Value2(datasetValue);
    const data = {
      dataset2Value22: 'true',
      dataset2Value2: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset2Update(data);
  };

  const onDataset2Value3Change = (datasetValue) => {
    setDataset2Value3(datasetValue);
    const data = {
      dataset2Value33: 'true',
      dataset2Value3: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset2Update(data);
  };

  const onDataset2Value4Change = (datasetValue) => {
    setDataset2Value4(datasetValue);
    const data = {
      dataset2Value44: 'true',
      dataset2Value4: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset2Update(data);
  };

  const onDataset2Value5Change = (datasetValue) => {
    setDataset2Value5(datasetValue);
    const data = {
      dataset2Value55: 'true',
      dataset2Value5: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset2Update(data);
  };

  const onDataset2Value6Change = (datasetValue) => {
    setDataset2Value6(datasetValue);
    const data = {
      dataset2Value66: 'true',
      dataset2Value6: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset2Update(data);
  };

  const onDataset2Value7Change = (datasetValue) => {
    setDataset2Value7(datasetValue);
    const data = {
      dataset2Value77: 'true',
      dataset2Value7: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset2Update(data);
  };

  const onDataset2Value8Change = (datasetValue) => {
    setDataset2Value8(datasetValue);
    const data = {
      dataset2Value88: 'true',
      dataset2Value8: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset2Update(data);
  };

  const onDataset2Value9Change = (datasetValue) => {
    setDataset2Value9(datasetValue);
    const data = {
      dataset2Value99: 'true',
      dataset2Value9: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset2Update(data);
  };

  const onDataset2Value10Change = (datasetValue) => {
    setDataset2Value10(datasetValue);
    const data = {
      dataset2Value100: 'true',
      dataset2Value10: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset2Update(data);
  };

  const onDataset2Value11Change = (datasetValue) => {
    setDataset2Value11(datasetValue);
    const data = {
      dataset2Value111: 'true',
      dataset2Value11: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset2Update(data);
  };

  const onDataset2Value12Change = (datasetValue) => {
    setDataset2Value12(datasetValue);
    const data = {
      dataset2Value120: 'true',
      dataset2Value12: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset2Update(data);
  };
  // DATASET 2 --- END ---
  // DATASET 3 --- START ---
  const [dataset3Value1, setDataset3Value1] = useState('');
  const [dataset3Value2, setDataset3Value2] = useState('');
  const [dataset3Value3, setDataset3Value3] = useState('');
  const [dataset3Value4, setDataset3Value4] = useState('');
  const [dataset3Value5, setDataset3Value5] = useState('');
  const [dataset3Value6, setDataset3Value6] = useState('');
  const [dataset3Value7, setDataset3Value7] = useState('');
  const [dataset3Value8, setDataset3Value8] = useState('');
  const [dataset3Value9, setDataset3Value9] = useState('');
  const [dataset3Value10, setDataset3Value10] = useState('');
  const [dataset3Value11, setDataset3Value11] = useState('');
  const [dataset3Value12, setDataset3Value12] = useState('');

  const onDataset3Value1Change = (datasetValue) => {
    setDataset3Value1(datasetValue);
    const data = {
      dataset3ValueOne: 'true',
      dataset3Value1: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset3Update(data);
  };

  const onDataset3Value2Change = (datasetValue) => {
    setDataset3Value2(datasetValue);
    const data = {
      dataset3Value22: 'true',
      dataset3Value2: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset3Update(data);
  };

  const onDataset3Value3Change = (datasetValue) => {
    setDataset3Value3(datasetValue);
    const data = {
      dataset3Value33: 'true',
      dataset3Value3: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset3Update(data);
  };

  const onDataset3Value4Change = (datasetValue) => {
    setDataset3Value4(datasetValue);
    const data = {
      dataset3Value44: 'true',
      dataset3Value4: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset3Update(data);
  };

  const onDataset3Value5Change = (datasetValue) => {
    setDataset3Value5(datasetValue);
    const data = {
      dataset3Value55: 'true',
      dataset3Value5: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset3Update(data);
  };

  const onDataset3Value6Change = (datasetValue) => {
    setDataset3Value6(datasetValue);
    const data = {
      dataset3Value66: 'true',
      dataset3Value6: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset3Update(data);
  };

  const onDataset3Value7Change = (datasetValue) => {
    setDataset3Value7(datasetValue);
    const data = {
      dataset3Value77: 'true',
      dataset3Value7: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset3Update(data);
  };

  const onDataset3Value8Change = (datasetValue) => {
    setDataset3Value8(datasetValue);
    const data = {
      dataset3Value88: 'true',
      dataset3Value8: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset3Update(data);
  };

  const onDataset3Value9Change = (datasetValue) => {
    setDataset3Value9(datasetValue);
    const data = {
      dataset3Value99: 'true',
      dataset3Value9: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset3Update(data);
  };

  const onDataset3Value10Change = (datasetValue) => {
    setDataset3Value10(datasetValue);
    const data = {
      dataset3Value100: 'true',
      dataset3Value10: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset3Update(data);
  };

  const onDataset3Value11Change = (datasetValue) => {
    setDataset3Value11(datasetValue);
    const data = {
      dataset3Value111: 'true',
      dataset3Value11: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset3Update(data);
  };

  const onDataset3Value12Change = (datasetValue) => {
    setDataset3Value12(datasetValue);
    const data = {
      dataset3Value120: 'true',
      dataset3Value12: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset3Update(data);
  };
  // DATASET 3 --- END ---
  // DATASET 4 --- START ---
  const [dataset4Value1, setDataset4Value1] = useState('');
  const [dataset4Value2, setDataset4Value2] = useState('');
  const [dataset4Value3, setDataset4Value3] = useState('');
  const [dataset4Value4, setDataset4Value4] = useState('');
  const [dataset4Value5, setDataset4Value5] = useState('');
  const [dataset4Value6, setDataset4Value6] = useState('');
  const [dataset4Value7, setDataset4Value7] = useState('');
  const [dataset4Value8, setDataset4Value8] = useState('');
  const [dataset4Value9, setDataset4Value9] = useState('');
  const [dataset4Value10, setDataset4Value10] = useState('');
  const [dataset4Value11, setDataset4Value11] = useState('');
  const [dataset4Value12, setDataset4Value12] = useState('');

  const onDataset4Value1Change = (datasetValue) => {
    setDataset4Value1(datasetValue);
    const data = {
      dataset4ValueOne: 'true',
      dataset4Value1: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset4Update(data);
  };

  const onDataset4Value2Change = (datasetValue) => {
    setDataset4Value2(datasetValue);
    const data = {
      dataset4Value22: 'true',
      dataset4Value2: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset4Update(data);
  };

  const onDataset4Value3Change = (datasetValue) => {
    setDataset4Value3(datasetValue);
    const data = {
      dataset4Value33: 'true',
      dataset4Value3: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset4Update(data);
  };

  const onDataset4Value4Change = (datasetValue) => {
    setDataset4Value4(datasetValue);
    const data = {
      dataset4Value44: 'true',
      dataset4Value4: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset4Update(data);
  };

  const onDataset4Value5Change = (datasetValue) => {
    setDataset4Value5(datasetValue);
    const data = {
      dataset4Value55: 'true',
      dataset4Value5: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset4Update(data);
  };

  const onDataset4Value6Change = (datasetValue) => {
    setDataset4Value6(datasetValue);
    const data = {
      dataset4Value66: 'true',
      dataset4Value6: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset4Update(data);
  };

  const onDataset4Value7Change = (datasetValue) => {
    setDataset4Value7(datasetValue);
    const data = {
      dataset4Value77: 'true',
      dataset4Value7: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset4Update(data);
  };

  const onDataset4Value8Change = (datasetValue) => {
    setDataset4Value8(datasetValue);
    const data = {
      dataset4Value88: 'true',
      dataset4Value8: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset4Update(data);
  };

  const onDataset4Value9Change = (datasetValue) => {
    setDataset4Value9(datasetValue);
    const data = {
      dataset4Value99: 'true',
      dataset4Value9: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset4Update(data);
  };

  const onDataset4Value10Change = (datasetValue) => {
    setDataset4Value10(datasetValue);
    const data = {
      dataset4Value100: 'true',
      dataset4Value10: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset4Update(data);
  };

  const onDataset4Value11Change = (datasetValue) => {
    setDataset4Value11(datasetValue);
    const data = {
      dataset4Value111: 'true',
      dataset4Value11: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset4Update(data);
  };

  const onDataset4Value12Change = (datasetValue) => {
    setDataset4Value12(datasetValue);
    const data = {
      dataset4Value120: 'true',
      dataset4Value12: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset4Update(data);
  };
  // DATASET 4 --- END ---
  // DATASET 5 --- START ---
  const [dataset5Value1, setDataset5Value1] = useState('');
  const [dataset5Value2, setDataset5Value2] = useState('');
  const [dataset5Value3, setDataset5Value3] = useState('');
  const [dataset5Value4, setDataset5Value4] = useState('');
  const [dataset5Value5, setDataset5Value5] = useState('');
  const [dataset5Value6, setDataset5Value6] = useState('');
  const [dataset5Value7, setDataset5Value7] = useState('');
  const [dataset5Value8, setDataset5Value8] = useState('');
  const [dataset5Value9, setDataset5Value9] = useState('');
  const [dataset5Value10, setDataset5Value10] = useState('');
  const [dataset5Value11, setDataset5Value11] = useState('');
  const [dataset5Value12, setDataset5Value12] = useState('');

  const onDataset5Value1Change = (datasetValue) => {
    setDataset5Value1(datasetValue);
    const data = {
      dataset5ValueOne: 'true',
      dataset5Value1: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset5Update(data);
  };

  const onDataset5Value2Change = (datasetValue) => {
    setDataset5Value2(datasetValue);
    const data = {
      dataset5Value22: 'true',
      dataset5Value2: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset5Update(data);
  };

  const onDataset5Value3Change = (datasetValue) => {
    setDataset5Value3(datasetValue);
    const data = {
      dataset5Value33: 'true',
      dataset5Value3: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset5Update(data);
  };

  const onDataset5Value4Change = (datasetValue) => {
    setDataset5Value4(datasetValue);
    const data = {
      dataset5Value44: 'true',
      dataset5Value4: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset5Update(data);
  };

  const onDataset5Value5Change = (datasetValue) => {
    setDataset5Value5(datasetValue);
    const data = {
      dataset5Value55: 'true',
      dataset5Value5: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset5Update(data);
  };

  const onDataset5Value6Change = (datasetValue) => {
    setDataset5Value6(datasetValue);
    const data = {
      dataset5Value66: 'true',
      dataset5Value6: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset5Update(data);
  };

  const onDataset5Value7Change = (datasetValue) => {
    setDataset5Value7(datasetValue);
    const data = {
      dataset5Value77: 'true',
      dataset5Value7: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset5Update(data);
  };

  const onDataset5Value8Change = (datasetValue) => {
    setDataset5Value8(datasetValue);
    const data = {
      dataset5Value88: 'true',
      dataset5Value8: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset5Update(data);
  };

  const onDataset5Value9Change = (datasetValue) => {
    setDataset5Value9(datasetValue);
    const data = {
      dataset5Value99: 'true',
      dataset5Value9: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset5Update(data);
  };

  const onDataset5Value10Change = (datasetValue) => {
    setDataset5Value10(datasetValue);
    const data = {
      dataset5Value100: 'true',
      dataset5Value10: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset5Update(data);
  };

  const onDataset5Value11Change = (datasetValue) => {
    setDataset5Value11(datasetValue);
    const data = {
      dataset5Value111: 'true',
      dataset5Value11: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset5Update(data);
  };

  const onDataset5Value12Change = (datasetValue) => {
    setDataset5Value12(datasetValue);
    const data = {
      dataset5Value120: 'true',
      dataset5Value12: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset5Update(data);
  };
  // DATASET 5 --- END ---
  // DATASET 3 --- START ---
  const [dataset6Value1, setDataset6Value1] = useState('');
  const [dataset6Value2, setDataset6Value2] = useState('');
  const [dataset6Value3, setDataset6Value3] = useState('');
  const [dataset6Value4, setDataset6Value4] = useState('');
  const [dataset6Value5, setDataset6Value5] = useState('');
  const [dataset6Value6, setDataset6Value6] = useState('');
  const [dataset6Value7, setDataset6Value7] = useState('');
  const [dataset6Value8, setDataset6Value8] = useState('');
  const [dataset6Value9, setDataset6Value9] = useState('');
  const [dataset6Value10, setDataset6Value10] = useState('');
  const [dataset6Value11, setDataset6Value11] = useState('');
  const [dataset6Value12, setDataset6Value12] = useState('');

  const onDataset6Value1Change = (datasetValue) => {
    setDataset6Value1(datasetValue);
    const data = {
      dataset6ValueOne: 'true',
      dataset6Value1: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset6Update(data);
  };

  const onDataset6Value2Change = (datasetValue) => {
    setDataset6Value2(datasetValue);
    const data = {
      dataset6Value22: 'true',
      dataset6Value2: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset6Update(data);
  };

  const onDataset6Value3Change = (datasetValue) => {
    setDataset6Value3(datasetValue);
    const data = {
      dataset6Value33: 'true',
      dataset6Value3: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset6Update(data);
  };

  const onDataset6Value4Change = (datasetValue) => {
    setDataset6Value4(datasetValue);
    const data = {
      dataset6Value44: 'true',
      dataset6Value4: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset6Update(data);
  };

  const onDataset6Value5Change = (datasetValue) => {
    setDataset6Value5(datasetValue);
    const data = {
      dataset6Value55: 'true',
      dataset6Value5: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset6Update(data);
  };

  const onDataset6Value6Change = (datasetValue) => {
    setDataset6Value6(datasetValue);
    const data = {
      dataset6Value66: 'true',
      dataset6Value6: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset6Update(data);
  };

  const onDataset6Value7Change = (datasetValue) => {
    setDataset6Value7(datasetValue);
    const data = {
      dataset6Value77: 'true',
      dataset6Value7: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset6Update(data);
  };

  const onDataset6Value8Change = (datasetValue) => {
    setDataset6Value8(datasetValue);
    const data = {
      dataset6Value88: 'true',
      dataset6Value8: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset6Update(data);
  };

  const onDataset6Value9Change = (datasetValue) => {
    setDataset6Value9(datasetValue);
    const data = {
      dataset6Value99: 'true',
      dataset6Value9: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset6Update(data);
  };

  const onDataset6Value10Change = (datasetValue) => {
    setDataset6Value10(datasetValue);
    const data = {
      dataset6Value100: 'true',
      dataset6Value10: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset6Update(data);
  };

  const onDataset6Value11Change = (datasetValue) => {
    setDataset6Value11(datasetValue);
    const data = {
      dataset6Value111: 'true',
      dataset6Value11: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset6Update(data);
  };

  const onDataset6Value12Change = (datasetValue) => {
    setDataset6Value12(datasetValue);
    const data = {
      dataset6Value120: 'true',
      dataset6Value12: datasetValue,
      index,
      selSection: selectedSection,
    };
    dataset6Update(data);
  };
  // DATASET 6 --- END ---
  const onDatasetLabelChange1 = (datasetLabel) => {
    setDataset1Label(datasetLabel);
    const data = {
      dataset1Label: datasetLabel,
      index,
      selSection: selectedSection,
    };
    datasetLabel1Update(data);
  };

  const onDatasetLabelChange2 = (datasetLabel) => {
    setDataset2Label(datasetLabel);
    const data = {
      dataset2Label: datasetLabel,
      index,
      selSection: selectedSection,
    };
    datasetLabel2Update(data);
  };

  const onDatasetLabelChange3 = (datasetLabel) => {
    setDataset3Label(datasetLabel);
    const data = {
      dataset3Label: datasetLabel,
      index,
      selSection: selectedSection,
    };
    datasetLabel3Update(data);
  };

  const onDatasetLabelChange4 = (datasetLabel) => {
    setDataset4Label(datasetLabel);
    const data = {
      dataset4Label: datasetLabel,
      index,
      selSection: selectedSection,
    };
    datasetLabel4Update(data);
  };

  const onDatasetLabelChange5 = (datasetLabel) => {
    setDataset5Label(datasetLabel);
    const data = {
      dataset5Label: datasetLabel,
      index,
      selSection: selectedSection,
    };
    datasetLabel5Update(data);
  };

  const onDatasetLabelChange6 = (datasetLabel) => {
    setDataset6Label(datasetLabel);
    const data = {
      dataset6Label: datasetLabel,
      index,
      selSection: selectedSection,
    };
    datasetLabel6Update(data);
  };

  const tableRef = useRef();

  useEffect(() => {
    document.getElementById(`${field.index}container`) &&
      document.getElementById(`${field.index}container`).addEventListener('mouseenter', () => {
        gsap.to(document.getElementById(`${field.index}table`), {
          height: 200,
          duration: 0.8,
          transformOrigin: 'top',
          ease: Linear,
        });
      });
      document.getElementById(`${field.index}container`) &&
      document.getElementById(`${field.index}container`).addEventListener('mouseleave', () => {
        gsap.to(document.getElementById(`${field.index}table`), {
          height: '0',
          duration: 0.8,
          transformOrigin: 'top',
          ease: Linear,
        });
      });
  }, []);

  const [activeChartType, setActiveChartType] = useState(false);
  const chartFormat = useRef();

  console.log(index);

  const onChartChange = (value) => {
    if (!activeChartType) {
      gsap.to(chartFormat.current, {
        height: 216,
        transformOrigin: 'top',
        ease: Linear,
      });
      setActiveChartType(true);
    }
    if (activeChartType) {
      gsap.to(chartFormat.current, {
        height: 36,
        transformOrigin: 'bottom',
        ease: Linear,
      });
      setActiveChartType(false);
    }
    // Take current array copy
    if (value) {
      let newFieldsArray = [...selectedSection.fields];
      newFieldsArray[currentIndex] = {
        stacked: selectedSection.fields[currentIndex].stacked,
        chartType: value,
        index,
        type: 'chart',
        labels: selectedSection.fields[currentIndex].labels,
        dataset1: selectedSection.fields[currentIndex].dataset1,
        dataset2: selectedSection.fields[currentIndex].dataset2,
        dataset3: selectedSection.fields[currentIndex].dataset3,
        dataset4: selectedSection.fields[currentIndex].dataset4,
        dataset5: selectedSection.fields[currentIndex].dataset5,
        dataset6: selectedSection.fields[currentIndex].dataset6,
        // Dataset labels
        dataset1Label: selectedSection.fields[currentIndex].dataset1Label,
        dataset2Label: selectedSection.fields[currentIndex].dataset2Label,
        dataset3Label: selectedSection.fields[currentIndex].dataset3Label,
        dataset4Label: selectedSection.fields[currentIndex].dataset4Label,
        dataset5Label: selectedSection.fields[currentIndex].dataset5Label,
        dataset6Label: selectedSection.fields[currentIndex].dataset6Label,
      };

      const newSection = {
        title: selectedSection.title,
        createdAt: selectedSection.createdAt,
        fields: newFieldsArray,
        id: selectedSection.id,
      };

      // await this.setState({ selectedSection: newSection });
      chartTypeUpdate(newSection);
      console.log(newFieldsArray);
      console.log(value);

      // Update database
      db.collection('projects')
        .doc(projectId)
        .collection('businessPlan')
        .doc(Router.query.project)
        .collection('inputs')
      // .collection('currentBusinessPlan')
      //   .doc('GrcvhyJwvlWVy31QsiudoQKdKI72')
      //   .collection('inputs')
        .doc(selectedSection.id)
        .update({
          fields: newFieldsArray,
        });
    }
  };

  const onStackedChange = (stacked) => {
    let newFieldsArray = [...selectedSection.fields];
    newFieldsArray[currentIndex] = {
      stacked: !stacked,
      chartType: selectedSection.fields[currentIndex].chartType,
      index,
      type: 'chart',
      labels: selectedSection.fields[currentIndex].labels,
      dataset1: selectedSection.fields[currentIndex].dataset1,
      dataset2: selectedSection.fields[currentIndex].dataset2,
      dataset3: selectedSection.fields[currentIndex].dataset3,
      dataset4: selectedSection.fields[currentIndex].dataset4,
      dataset5: selectedSection.fields[currentIndex].dataset5,
      dataset6: selectedSection.fields[currentIndex].dataset6,
      // Dataset labels
      dataset1Label: selectedSection.fields[currentIndex].dataset1Label,
      dataset2Label: selectedSection.fields[currentIndex].dataset2Label,
      dataset3Label: selectedSection.fields[currentIndex].dataset3Label,
      dataset4Label: selectedSection.fields[currentIndex].dataset4Label,
      dataset5Label: selectedSection.fields[currentIndex].dataset5Label,
      dataset6Label: selectedSection.fields[currentIndex].dataset6Label,
    };

    const newSection = {
      title: selectedSection.title,
      createdAt: selectedSection.createdAt,
      fields: newFieldsArray,
      id: selectedSection.id,
    };

    // await this.setState({ selectedSection: newSection });
    chartTypeUpdate(newSection);
    console.log(newFieldsArray);
    console.log(value);

    // Update database
    db.collection('projects')
      .doc(projectId)
      .collection('businessPlan')
      .doc(Router.query.project)
      .collection('inputs')
    // .collection('currentBusinessPlan')
    //   .doc('GrcvhyJwvlWVy31QsiudoQKdKI72')
    //   .collection('inputs')
      .doc(selectedSection.id)
      .update({
        fields: newFieldsArray,
      });
  };

  return (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        className='w-full grid grid-cols-12fr justify-items-center items-center mt-6'
      >
        <div id={`${field.index}container`} className='col-start-2 col-end-12 relative flex flex-col h-full w-full flex px-8 py-8 rounded-2xl bg-white dark:bg-background'>
        <div className='w-full h-full'>
          <div id={`${field.index}chartContainer`}></div>
          {/* <canvas id={field.index} ref={chartRef} className='mt-4'></canvas> */}
          {/* <hr className='text-primary mt-4' /> */}
          <div id={`${field.index}table`} ref={tableRef} className='w-full overflow-auto h-0'>
            <table class='content-table'>
              <thead>
                <tr>
                  <th></th>
                  <th>
                    <input
                      onChange={(e) => onLabelChange1(e.target.value)}
                      value={label1}
                      className='w-full bg-secondBackground focus:outline-none'
                    />
                  </th>
                  <th>
                    <input
                      onChange={(e) => onLabelChange2(e.target.value)}
                      value={label2}
                      className='w-full bg-secondBackground focus:outline-none'
                    />
                  </th>
                  <th>
                    <input
                      onChange={(e) => onLabelChange3(e.target.value)}
                      value={label3}
                      className='w-full bg-secondBackground focus:outline-none'
                    />
                  </th>
                  <th>
                    <input
                      onChange={(e) => onLabelChange4(e.target.value)}
                      value={label4}
                      className='w-full bg-secondBackground focus:outline-none'
                    />
                  </th>
                  <th>
                    <input
                      onChange={(e) => onLabelChange5(e.target.value)}
                      value={label5}
                      className='w-full bg-secondBackground focus:outline-none'
                    />
                  </th>
                  <th>
                    <input
                      onChange={(e) => onLabelChange6(e.target.value)}
                      value={label6}
                      className='w-full bg-secondBackground focus:outline-none'
                    />
                  </th>
                  <th>
                    <input
                      onChange={(e) => onLabelChange7(e.target.value)}
                      value={label7}
                      className='w-full bg-secondBackground focus:outline-none'
                    />
                  </th>
                  <th>
                    <input
                      onChange={(e) => onLabelChange8(e.target.value)}
                      value={label8}
                      className='w-full bg-secondBackground focus:outline-none'
                    />
                  </th>
                  <th>
                    <input
                      onChange={(e) => onLabelChange9(e.target.value)}
                      value={label9}
                      className='w-full bg-secondBackground focus:outline-none'
                    />
                  </th>
                  <th>
                    <input
                      onChange={(e) => onLabelChange10(e.target.value)}
                      value={label10}
                      className='w-full bg-secondBackground focus:outline-none'
                    />
                  </th>
                  <th>
                    <input
                      onChange={(e) => onLabelChange11(e.target.value)}
                      value={label11}
                      className='w-full bg-secondBackground focus:outline-none'
                    />
                  </th>
                  <th>
                    <input
                      onChange={(e) => onLabelChange12(e.target.value)}
                      value={label12}
                      className='w-full bg-secondBackground focus:outline-none'
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='left-block'>
                    <input
                      onChange={(e) => onDatasetLabelChange1(e.target.value)}
                      value={dataset1Label}
                      className='w-full bg-secondBackground focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset1Value1Change(e.target.value)}
                      value={dataset1Value1}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset1Value2Change(e.target.value)}
                      value={dataset1Value2}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset1Value3Change(e.target.value)}
                      value={dataset1Value3}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset1Value4Change(e.target.value)}
                      value={dataset1Value4}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset1Value5Change(e.target.value)}
                      value={dataset1Value5}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset1Value6Change(e.target.value)}
                      value={dataset1Value6}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset1Value7Change(e.target.value)}
                      value={dataset1Value7}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset1Value8Change(e.target.value)}
                      value={dataset1Value8}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset1Value9Change(e.target.value)}
                      value={dataset1Value9}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset1Value10Change(e.target.value)}
                      value={dataset1Value10}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset1Value11Change(e.target.value)}
                      value={dataset1Value11}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset1Value12Change(e.target.value)}
                      value={dataset1Value12}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td className='left-block'>
                    <input
                      onChange={(e) => onDatasetLabelChange2(e.target.value)}
                      value={dataset2Label}
                      className='w-full bg-secondBackground focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset2Value1Change(e.target.value)}
                      value={dataset2Value1}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset2Value2Change(e.target.value)}
                      value={dataset2Value2}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset2Value3Change(e.target.value)}
                      value={dataset2Value3}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset2Value4Change(e.target.value)}
                      value={dataset2Value4}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset2Value5Change(e.target.value)}
                      value={dataset2Value5}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset2Value6Change(e.target.value)}
                      value={dataset2Value6}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset2Value7Change(e.target.value)}
                      value={dataset2Value7}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset2Value8Change(e.target.value)}
                      value={dataset2Value8}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset2Value9Change(e.target.value)}
                      value={dataset2Value9}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset2Value10Change(e.target.value)}
                      value={dataset2Value10}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset2Value11Change(e.target.value)}
                      value={dataset2Value11}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset2Value12Change(e.target.value)}
                      value={dataset2Value12}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td className='left-block'>
                    <input
                      onChange={(e) => onDatasetLabelChange3(e.target.value)}
                      value={dataset3Label}
                      className='w-full bg-secondBackground focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset3Value1Change(e.target.value)}
                      value={dataset3Value1}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset3Value2Change(e.target.value)}
                      value={dataset3Value2}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset3Value3Change(e.target.value)}
                      value={dataset3Value3}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset3Value4Change(e.target.value)}
                      value={dataset3Value4}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset3Value5Change(e.target.value)}
                      value={dataset3Value5}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset3Value6Change(e.target.value)}
                      value={dataset3Value6}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset3Value7Change(e.target.value)}
                      value={dataset3Value7}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset3Value8Change(e.target.value)}
                      value={dataset3Value8}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset3Value9Change(e.target.value)}
                      value={dataset3Value9}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset3Value10Change(e.target.value)}
                      value={dataset3Value10}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset3Value11Change(e.target.value)}
                      value={dataset3Value11}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset3Value12Change(e.target.value)}
                      value={dataset3Value12}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td className='left-block'>
                    <input
                      onChange={(e) => onDatasetLabelChange4(e.target.value)}
                      value={dataset4Label}
                      className='w-full bg-secondBackground focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset4Value1Change(e.target.value)}
                      value={dataset4Value1}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset4Value2Change(e.target.value)}
                      value={dataset4Value2}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset4Value3Change(e.target.value)}
                      value={dataset4Value3}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset4Value4Change(e.target.value)}
                      value={dataset4Value4}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset4Value5Change(e.target.value)}
                      value={dataset4Value5}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset4Value6Change(e.target.value)}
                      value={dataset4Value6}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset4Value7Change(e.target.value)}
                      value={dataset4Value7}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset4Value8Change(e.target.value)}
                      value={dataset4Value8}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset4Value9Change(e.target.value)}
                      value={dataset4Value9}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset4Value10Change(e.target.value)}
                      value={dataset4Value10}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset4Value11Change(e.target.value)}
                      value={dataset4Value11}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset4Value12Change(e.target.value)}
                      value={dataset4Value12}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td className='left-block'>
                    <input
                      onChange={(e) => onDatasetLabelChange5(e.target.value)}
                      value={dataset5Label}
                      className='w-full bg-secondBackground focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset5Value1Change(e.target.value)}
                      value={dataset5Value1}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset5Value2Change(e.target.value)}
                      value={dataset5Value2}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset5Value3Change(e.target.value)}
                      value={dataset5Value3}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset5Value4Change(e.target.value)}
                      value={dataset5Value4}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset5Value5Change(e.target.value)}
                      value={dataset5Value5}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset5Value6Change(e.target.value)}
                      value={dataset5Value6}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset5Value7Change(e.target.value)}
                      value={dataset5Value7}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset5Value8Change(e.target.value)}
                      value={dataset5Value8}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset5Value9Change(e.target.value)}
                      value={dataset5Value9}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset5Value10Change(e.target.value)}
                      value={dataset5Value10}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset5Value11Change(e.target.value)}
                      value={dataset5Value11}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset5Value12Change(e.target.value)}
                      value={dataset5Value12}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td className='left-block-radius'>
                    <input
                      onChange={(e) => onDatasetLabelChange6(e.target.value)}
                      value={dataset6Label}
                      className='w-full bg-secondBackground focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset6Value1Change(e.target.value)}
                      value={dataset6Value1}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset6Value2Change(e.target.value)}
                      value={dataset6Value2}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset6Value3Change(e.target.value)}
                      value={dataset6Value3}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset6Value4Change(e.target.value)}
                      value={dataset6Value4}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset6Value5Change(e.target.value)}
                      value={dataset6Value5}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset6Value6Change(e.target.value)}
                      value={dataset6Value6}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset6Value7Change(e.target.value)}
                      value={dataset6Value7}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset6Value8Change(e.target.value)}
                      value={dataset6Value8}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset6Value9Change(e.target.value)}
                      value={dataset6Value9}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset6Value10Change(e.target.value)}
                      value={dataset6Value10}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset6Value11Change(e.target.value)}
                      value={dataset6Value11}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                  <td>
                    <input
                      onChange={(e) => onDataset6Value12Change(e.target.value)}
                      value={dataset6Value12}
                      className='w-full bg-white focus:outline-none'
                    ></input>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <button
        className='z-10 ml-4 mt-6 hover:bg-primary hover:text-white focus:outline-none dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-8 rounded-2xl dark:text-primarydark dark:border-primarydark'
        onClick={async (e) => {
          e.preventDefault();
          const doc = <MyDocument imageUrl={imageUrl} />;
          const asPdf = pdf([]); // {} is important, throws without an argument
          asPdf.updateContainer(doc);
          const blob = await asPdf.toBlob();
          saveAs(blob, `random-name.pdf`);
        }}
      >
        Save
      </button> */}
        </div>
        </div>
        {/* Side manager bar */}
        <div className='col-start-12 col-end-13 justify-self-center self-start flex flex-col flex-wrap gap-2 overflow-hidden'>
          <Image
            onClick={() => deleteField(field.index)}
            className='cursor-pointer'
            src={`/plan-bar/exit4.svg`}
            height={36}
            width={36}
          />
          <Image
            {...provided.dragHandleProps}
            className='cursor-pointer'
            src={`/plan-bar/drag2.svg`}
            height={36}
            width={36}
          />
          <Image
            onClick={() => onStackedChange(field.stacked)}
            className='cursor-pointer'
            src={`/plan-bar/layers.svg`}
            height={36}
            width={36}
          />
        <div
          style={{ height: '36px', width: '36px' }}
          ref={chartFormat}
          className='overflow-hidden bg-background focus:outline-none rounded-lg'
        >
            <Image
              onClick={() => onChartChange(false)}
              className='cursor-pointer'
              src={`/chart/${field.chartType}.svg`}
              height={36}
              width={36}
            />
            {/* <div
              style={{ height: '36px' }}
              onClick={() => onChartChange(false)}
              className='px-2 py-1 text-sm ease-in-out flex items-center justify-between cursor-pointer'
            >
              {field.chartType}
            </div> */}
          {field.chartType !== 'Bar chart' && (
            <>
            <Image
              className='cursor-pointer'
              onClick={() => onChartChange('Bar chart')}
              src={`/chart/${
                field.chartType == 'Bar chart' ? field.chartType : 'Bar chart'
              }.svg`}
              height={27}
              width={27}
            />
            {/* <div
              onClick={() => onChartChange('Bar chart')}
              className='px-2 py-1 text-sm flex items-center justify-between cursor-pointer'
            >
              Bar chart
            </div> */}
            </>
          )}
          {field.chartType !== 'Reverse chart' && (
            <>
            <Image
              className='cursor-pointer'
              onClick={() => onChartChange('Reverse chart')}
              src={`/chart/${
                field.chartType == 'Reverse chart'
                  ? field.chartType
                  : 'Reverse chart'
              }.svg`}
              height={27}
              width={27}
            />
            {/* <div
              onClick={() => onChartChange('Reverse chart')}
              className='px-2 py-1 text-sm flex items-center justify-between cursor-pointer'
            >
              Reverse chart
            </div> */}
            </>
          )}
          {field.chartType !== 'Line chart' && (
            <>
            <Image
              className='cursor-pointer'
              onClick={() => onChartChange('Line chart')}
              src={`/chart/${
                field.chartType == 'Line chart'
                  ? field.chartType
                  : 'Line chart'
              }.svg`}
              height={27}
              width={27}
            />
            {/* <div
              onClick={() => onChartChange('Line chart')}
              className='px-2 py-1 text-sm flex items-center justify-between cursor-pointer'
            >
              Line chart
            </div> */}
            </>
          )}
          {field.chartType !== 'Pie chart' && (
            <>
            <Image
              className='cursor-pointer'
              onClick={() => onChartChange('Pie chart')}
              src={`/chart/${
                field.chartType == 'Pie chart' ? field.chartType : 'Pie chart'
              }.svg`}
              height={27}
              width={27}
            />
            {/* <div
              onClick={() => onChartChange('Pie chart')}
              className='px-2 py-1 text-sm flex items-center justify-between cursor-pointer'
            >
              Pie chart
            </div> */}
            </>
          )}
          {field.chartType !== 'Doughnut chart' && (
            <>
              <Image
                className='cursor-pointer'
                onClick={() => onChartChange('Doughnut chart')}
                src={`/chart/${
                  field.chartType == 'Doughnut chart'
                    ? field.chartType
                    : 'Doughnut chart'
                }.svg`}
                height={27}
                width={27}
              />
            {/* <div
              onClick={() => onChartChange('Doughnut chart')}
              className='px-2 py-1 text-sm flex items-center justify-between cursor-pointer'
            >
              Doughnut chart
            </div> */}
            </>
          )}
          {field.chartType !== 'Area chart' && (
            <>
              <Image
                className='cursor-pointer'
                onClick={() => onChartChange('Area chart')}
                src={`/chart/${
                  field.chartType == 'Area chart'
                    ? field.chartType
                    : 'Area chart'
                }.svg`}
                height={27}
                width={27}
              />
            {/* <div
              onClick={() => onChartChange('Area chart')}
              className='px-2 py-1 text-sm flex items-center justify-between cursor-pointer'
            >
              Area chart
            </div> */}
            </>
          )}
        </div>
        </div>
      </div>
  );
};

export default ChartJsComponent;

{
  /* <div className='mt-4 w-full flex w-max text-sm'>
<div className='flex justify-center items-center w-1/12 border-r border-primary'>
  <input placeholder='blablabla' className='w-full' />
</div>
<div className='flex justify-center items-center w-1/12 border-r border-primary'>
  <input placeholder='blablabla' className='w-full' />
</div>
<div className='flex justify-center items-center w-1/12 border-r border-primary'>
  <input placeholder='blablabla' className='w-full' />
</div>
<div className='flex justify-center items-center w-1/12 border-r border-primary'>
  <input placeholder='blablabla' className='w-full' />
</div>
<div className='flex justify-center items-center w-1/12 border-r border-primary'>
  <input placeholder='blablabla' className='w-full' />
</div>
<div className='flex justify-center items-center w-1/12 border-r border-primary'>
  <input placeholder='blablabla' className='w-full' />
</div>
<div className='flex justify-center items-center w-1/12 border-r border-primary'>
  <input placeholder='blablabla' className='w-full' />
</div>
<div className='flex justify-center items-center w-1/12 border-r border-primary'>
  <input placeholder='blablabla' className='w-full' />
</div>
<div className='flex justify-center items-center w-1/12 border-r border-primary'>
  <input placeholder='blablabla' className='w-full' />
</div>
<div className='flex justify-center items-center w-1/12 border-r border-primary'>
  <input placeholder='blablabla' className='w-full' />
</div>
<div className='flex justify-center items-center w-1/12 border-r border-primary'>
  <input placeholder='blablabla' className='w-full' />
</div>
<div className='flex justify-center items-center w-1/12 border-r border-primary'>
  <input placeholder='blablabla' className='w-full' />
</div>
</div> */
}
