import React, { useRef, useState, useEffect } from 'react';
// import { html2pdf } from 'html2pdf.js';
import htmlToPdfmake from 'html-to-pdfmake';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { db } from '../../../../../lib/firebase';
import Router from 'next/router';
import ChartJsImage from 'chartjs-to-image';
import ChartPDF from './ChartPDF';
import gsap, { Linear } from 'gsap';
// import fs from 'fs';

const fs = require('fs');

const PDFDocument = ({ projectId, pdfChartsCreate }) => {
  // const containerRef = useRef();
  const [sections, setSections] = useState();
  const [document1, setDocument] = useState();
  const [imagesUrl, setImagesUrl] = useState();

  console.log(projectId);

  useEffect(async () => {
    if (projectId) {
      await db
        .collection('projects')
        .doc(projectId)
        .collection('businessPlan')
        .doc(Router.query.project)
        .collection('inputs')
        .onSnapshot((querySnapshot) => {
          const sectionsData = querySnapshot.docs.map((doc) => {
            const data = doc.data();
            // data['id'] = doc.id;
            return data;
          });
          sectionsData.sort((a, b) => a.position - b.position);
          console.log('Sections data --> ', sectionsData);
          setSections(sectionsData);
          // pdfChartsCreate(sectionsData);
          const imagesArray = [];
          setImagesUrl(imagesArray);
          sectionsData.map((section) => {
            section.fields.map((field) => {
              if (field.type == 'chart') {
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
                      borderWidth:
                        field.chartType == 'Area chart' ? 0 : field.chartType == 'Pie chart' || (field.chartType == 'Doughnut chart' && 2),
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
                      borderWidth:
                        field.chartType == 'Area chart' ? 0 : field.chartType == 'Pie chart' || (field.chartType == 'Doughnut chart' && 2),
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
                      borderWidth:
                        field.chartType == 'Area chart' ? 0 : field.chartType == 'Pie chart' || (field.chartType == 'Doughnut chart' && 2),
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
                      borderWidth:
                        field.chartType == 'Area chart' ? 0 : field.chartType == 'Pie chart' || (field.chartType == 'Doughnut chart' && 2),
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
                      borderWidth:
                        field.chartType == 'Area chart' ? 0 : field.chartType == 'Pie chart' || (field.chartType == 'Doughnut chart' && 2),
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
                      borderWidth:
                        field.chartType == 'Area chart' ? 0 : field.chartType == 'Pie chart' || (field.chartType == 'Doughnut chart' && 2),
                    },
                  ],
                };

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

                const chartType = [
                  field.chartType == 'Bar chart' ? 'bar' : '',
                  field.chartType == 'Reverse chart' ? 'horizontalBar' : '',
                  field.chartType == 'Line chart' ? 'line' : '',
                  field.chartType == 'Pie chart' ? 'pie' : '',
                  field.chartType == 'Doughnut chart' ? 'doughnut' : '',
                  field.chartType == 'Area chart' ? 'line' : '',
                ];

                const toSaveChart = new ChartJsImage();
                toSaveChart.setConfig({
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
                    // defaultFontFamily: (Chart.defaults.global.defaultFontFamily = 'Comfortaa'),
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

                toSaveChart.setFormat('png').setDevicePixelRatio(2.0);
                const imageUrl = toSaveChart.toDataUrl();
                imageUrl.then((image) => {
                  console.log(image);
                  imagesArray.push({ imageUrl: image, imageIndex: field.index });
                  console.log(imagesArray);
                  setImagesUrl(imagesArray);
                });
              }
            });
          });
        });
    }
  }, [projectId]);

  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  const onDocumentSave1 = () => {
    // Deleting commas between the array elements
    console.log(sections);
    const pdfContent = htmlToPdfmake(
      // `<div><p style='color: #6C63FF'>Hello from pdf document1<br />${helper ? '<p>Hello from helper</p>' : ''}</p></div>`
      `<div>
          <div>
            <h2 style='text-align: center; color: green'>First page</h2>
            <p class='red'>Some more random text below...</p>
            <br />
            <br />
            <br />
            <br />
            <p style='text-align: center'>Some more random text below...</p>
            <div class='test'></div>
            <p>normal</p><p style='text-align: center'>center</p><p class="ql-align-right">right</p><p class="ql-align-justify">justify</p>
          </div>
          <div>${sections
            .map((section) => {
              return `<h2 class='pdf-pagebreak-before' style='margin-bottom: 50px'>${section.title}</h2>
              ${section.fields
                .map((field) => {
                  console.log(field.type);
                  if (field.type == 'header') {
                    return `<h5>${field.title}</h5>`;
                  }
                  if (field.type == 'text') {
                    console.log(field.body.includes('ql-align-center'));
                    if (field.body.includes('ql-align-center')) {
                      const newFieldBody = field.body.replace('class="ql-align-center"', "style='text-align: center'");
                      return `<div>${newFieldBody}</div>`;
                    }
                    if (field.body.includes('ql-align-right')) {
                      const newFieldBody = field.body.replace('class="ql-align-right"', "style='text-align: right'");
                      return `<div>${newFieldBody}</div>`;
                    }
                    if (field.body.includes('ql-align-justify')) {
                      const newFieldBody = field.body.replace('class="ql-align-justify"', "style='text-align: justify'");
                      return `<div>${newFieldBody}</div>`;
                    }
                    return `<div>${field.body}</div>`;
                  }
                  if (field.type == 'chart') {
                    const imagesData =
                      imagesUrl &&
                      imagesUrl
                        .map((image) => {
                          console.log('Images url --> ', imagesUrl);
                          console.log('Field --> ', field);
                          if (image.imageIndex == field.index) {
                            return `<img src='${image.imageUrl}' style='margin-top: 30px; margin-bottom: 30px; width: '80%'; height: '80%';' />`;
                          }
                        })
                        .join('');
                    return imagesData;
                  }
                  if (field.type == 'spacing') {
                    return `<br />`;
                  }
                  if (field.type == 'table') {
                    console.log('Table --> ', field);
                    return `<table style="margin-top: 30px; margin-bottom: 30px;">
                      <thead>
                          <tr>
                              ${field.headRows
                                .map(
                                  (row, headRowIndex) =>
                                    `<th class="thstyle" style="background-color: #6C63FF; margin-top: 8px; margin-bottom: 8px; margin-left: 10px; margin-right: 10px; color: #FCFEFE;">${row}</th>`
                                )
                                .join('')}
                          </tr>
                      </thead>
                      <tbody>
                        ${field.rows
                          .map(
                            (row, rowIndex) =>
                              `<tr">${row.row
                                .map(
                                  (rowData, rowDataIndex) =>
                                    `<td style="margin-top: 8px; margin-bottom: 8px; margin-left: 10px; margin-right: 10px; color: #0a1230;">${rowData}</td>`
                                )
                                .join('')}</tr>`
                          )
                          .join('')}
                    </tbody>
                    </table>`;
                  }
                })
                .join('')}
              `;
            })
            .join('')}</div>
      </div>`,
      { defaultStyles: { p: '' } },
      { tableAutoSize: true }
    );
    const pdfDocument = {
      content: pdfContent,
      styles: {
        red: {
          // font: 'Comfortaa',
          color: 'red',
          marginLeft: 200,
        },
        // Insert
        'html-p': {
          marginBottom: 15,
        },
        'ql-indent-1': {
          marginLeft: 15,
        },
        'ql-indent-2': {
          marginLeft: 30,
        },
        'ql-indent-3': {
          marginLeft: 45,
        },
        'ql-indent-4': {
          marginLeft: 60,
        },
        'ql-indent-5': {
          marginLeft: 75,
        },
        'ql-indent-6': {
          marginLeft: 90,
        },
        'ql-indent-7': {
          marginLeft: 105,
        },
        'ql-indent-8': {
          marginLeft: 120,
        },
        'html-table': {
          'border-radius': '25px',
          'margin-top': '30px',
          'margin-bottom': '30px',
        },
      },
      pageBreakBefore: function (currentNode) {
        return currentNode.style && currentNode.style.indexOf('pdf-pagebreak-before') > -1;
      },
    };
    const pdfDocGenerator = pdfMake.createPdf(pdfDocument);
    pdfDocGenerator.download(`${Router.query.project}/business-plan.pdf`);
  };

  const saveContainer = useRef();

  const dropdownButton = useRef();
  const dropdownContainer = useRef();
  const [dropdownButtonColorHelper, setDropdownButtonColorHelper] = useState(false);
  const [dropdownContainerHelper, setDropdownContainerHelper] = useState(false);
  const onSaveDropdownShow = () => {
    if (!dropdownContainerHelper) {
      gsap.to(dropdownContainer.current, { autoAlpha: 1, duration: 1, ease: Linear });
      // gsap.to(dropdownButton.current, { backgroundColor: '#6C63FF', color: '#f8f9fb', duration: 1, ease: Linear });
      setDropdownContainerHelper(true);
      setDropdownButtonColorHelper(true);
    } else if (dropdownContainerHelper) {
      gsap.to(dropdownContainer.current, { autoAlpha: 0, duration: 1, ease: Linear });
      // gsap.to(dropdownButton.current, { backgroundColor: '#f8f9fb', color: '#6C63FF', duration: 1, ease: Linear });
      setDropdownContainerHelper(false);
      setDropdownButtonColorHelper(false);
    }
  };

  return (
    <div ref={saveContainer} className="relative flex justify-start">
      <div className="relative w-full flex justify-end items-center">
        <button
          ref={dropdownButton}
          onClick={onSaveDropdownShow}
          className={`hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm screenLarge:text-base font-light py-2 px-8 rounded-2xl mt-2 dark:text-primarydark dark:border-primarydark ${
            dropdownButtonColorHelper ? 'bg-primary text-background dark:bg-primarydark dark:text-background' : ''
          }`}
        >
          Save my work
        </button>
        <div ref={dropdownContainer} className="absolute bg-white rounded-2xl shadow-xl p-6 top-14 z-50 invisible opacity-0">
          <div className="flex items-center justify-start">
            <img src="/mobile-navbar/success.svg" height={26} width={26} />
            <p className="text-lg ml-2">Show the world your work!</p>
          </div>
          <div className="px-6 py-4 bg-background rounded-2xl mt-2 pr-6">
            <div>
              <p className="flex">Save as PDF:</p>
              <img onClick={onDocumentSave1} src="/mobile-navbar/pdf.svg" height={30} width={30} className="mt-2 cursor-pointer" />
            </div>
            <div className="w-full justify-start items-center mt-4">
              <p>Share your competitors analysis with this public link:</p>
              <div className="w-full flex mt-2">
                <input value="www.project.com" className="bg-linkBackground text-sm px-2 py-1 dark:text-primarydark" />
                <img src="/mobile-navbar/foreign.svg" height={28} width={28} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFDocument;
