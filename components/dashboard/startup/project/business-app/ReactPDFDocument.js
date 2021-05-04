import React, { useState, useEffect, useRef } from 'react';
import { saveAs } from 'file-saver';
import ChartJsImage from 'chartjs-to-image';
import { format } from 'date-fns';
import gsap, { Linear } from 'gsap';
import { Font, pdf, Page, Text, View, Image, Document, StyleSheet, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import Router from 'next/router';
import splitHtml from 'split-html';
import $ from 'jquery';
import { useWindowSize } from '../../../../../utils/useWindowSize';

Font.register({ src: '/fonts/poppins.ttf', family: 'Poppins' });
Font.register({ src: '/fonts/comfortaa.ttf', family: 'Comfortaa' });
Font.register({ src: '/fonts/comfortaa-Bold.ttf', family: 'Comfortaa-Bold' });
Font.register({ src: '/fonts/Montserrat-Regular.ttf', family: 'Montserrat-Regular' });
Font.register({ src: '/fonts/Montserrat-SemiBold.ttf', family: 'Montserrat-SemiBold' });
Font.register({ src: '/fonts/Montserrat-SemiBoldItalic.ttf', family: 'Montserrat-SemiBoldItalic' });
Font.register({ src: '/fonts/Montserrat-Italic.ttf', family: 'Montserrat-Italic' });

const styles = StyleSheet.create({
  homePage: {
    padding: 36,
    // fontFamily: 'Comfortaa',
    fontFamily: 'Montserrat-Regular',
    backgroundColor: '#f8f9fb',
    color: '#0a1230',
  },
  mainTitle: {
    fontSize: 22,
    color: '#0a1230',
    textAlign: 'center',
  },
  table: { display: 'table', width: '100%', marginTop: 16 },
  tableHeadRow: { flexDirection: 'row', backgroundColor: '#6C63FF', color: '#f8f9fb', borderTopLeftRadius: 8, borderTopRightRadius: 8 },
  tableRow: { flexDirection: 'row' },
  tableCol: { padding: 8 },
  tableHeadCell: { marginTop: 5, fontSize: 10 },
  tableCell: { marginTop: 5, fontSize: 9, borderLeft: '1px solid #0a1230', paddingLeft: 4 },
});

const MyDocument = ({ imagesUrl, sections }) => {
  console.log('PDF Sections --> ', sections);
  console.log('PDF ImagesUrl --> ', imagesUrl);
  return (
    <Document scale={96 / 72} renderMode="svg">
      <Page size="A4" style={styles.homePage}>
        <View>
          <Text style={styles.mainTitle}>Business plan</Text>
        </View>
      </Page>
      {sections.map((section) => {
        return (
          <Page size="A4" style={styles.homePage}>
            <View style={{ marginBottom: 8 }}>
              <Text style={{ fontSize: 18 }}>{section.title}</Text>
            </View>
            {section.fields.map((field) => {
              console.log(field);
              switch (field.type) {
                case 'table':
                  return (
                    field.type == 'table' && (
                      <View style={styles.table}>
                        {/* TableHeader */}
                        <View style={styles.tableHeadRow}>
                          {field.headRows.map((headRow) => {
                            const headRowsQuantity = field.headRows.length;
                            switch (headRowsQuantity) {
                              case 1:
                                return (
                                  <View style={{ width: '100%', padding: 8 }}>
                                    <Text style={styles.tableHeadCell}>{headRow}</Text>
                                  </View>
                                );
                              case 2:
                                return (
                                  <View style={{ width: '50%', padding: 8 }}>
                                    <Text style={styles.tableHeadCell}>{headRow}</Text>
                                  </View>
                                );
                              case 3:
                                return (
                                  <View style={{ width: '33.33%', padding: 8 }}>
                                    <Text style={styles.tableHeadCell}>{headRow}</Text>
                                  </View>
                                );
                              case 4:
                                return (
                                  <View style={{ width: '25%', padding: 8 }}>
                                    <Text style={styles.tableHeadCell}>{headRow}</Text>
                                  </View>
                                );
                              case 5:
                                return (
                                  <View style={{ width: '20%', padding: 8 }}>
                                    <Text style={styles.tableHeadCell}>{headRow}</Text>
                                  </View>
                                );
                              case 6:
                                return (
                                  <View style={{ width: '16.66%', padding: 8 }}>
                                    <Text style={styles.tableHeadCell}>{headRow}</Text>
                                  </View>
                                );
                              case 7:
                                return (
                                  <View style={{ width: '14.28%', padding: 8 }}>
                                    <Text style={styles.tableHeadCell}>{headRow}</Text>
                                  </View>
                                );
                              case 8:
                                return (
                                  <View style={{ width: '12.5%', padding: 8 }}>
                                    <Text style={styles.tableHeadCell}>{headRow}</Text>
                                  </View>
                                );
                              case 9:
                                return (
                                  <View style={{ width: '11.11%', padding: 8 }}>
                                    <Text style={styles.tableHeadCell}>{headRow}</Text>
                                  </View>
                                );
                              case 10:
                                return (
                                  <View style={{ width: '10%', padding: 8 }}>
                                    <Text style={styles.tableHeadCell}>{headRow}</Text>
                                  </View>
                                );
                              case 11:
                                return (
                                  <View style={{ width: '9.09%', padding: 8 }}>
                                    <Text style={styles.tableHeadCell}>{headRow}</Text>
                                  </View>
                                );
                              case 12:
                                return (
                                  <View style={{ width: '8.33%', padding: 8 }}>
                                    <Text style={styles.tableHeadCell}>{headRow}</Text>
                                  </View>
                                );
                            }
                          })}
                        </View>
                        {/* TableBody */}
                        {field.rows.map((row) => {
                          return (
                            <View style={styles.tableRow}>
                              {row.row.map((rowName) => {
                                const BodyRowsQuantity = field.rows.length;
                                switch (BodyRowsQuantity) {
                                  case 1:
                                    return (
                                      <View style={{ width: '100%', padding: 8 }}>
                                        <Text style={styles.tableCell}>{rowName}</Text>
                                      </View>
                                    );
                                  case 2:
                                    return (
                                      <View style={{ width: '50%', padding: 8 }}>
                                        <Text style={styles.tableCell}>{rowName}</Text>
                                      </View>
                                    );
                                  case 3:
                                    return (
                                      <View style={{ width: '33.33%', padding: 8 }}>
                                        <Text style={styles.tableCell}>{rowName}</Text>
                                      </View>
                                    );
                                  case 4:
                                    return (
                                      <View style={{ width: '25%', padding: 8 }}>
                                        <Text style={styles.tableCell}>{rowName}</Text>
                                      </View>
                                    );
                                  case 5:
                                    return (
                                      <View style={{ width: '20%', padding: 8 }}>
                                        <Text style={styles.tableCell}>{rowName}</Text>
                                      </View>
                                    );
                                  case 6:
                                    return (
                                      <View style={{ width: '16.66%', padding: 8 }}>
                                        <Text style={styles.tableCell}>{rowName}</Text>
                                      </View>
                                    );
                                  case 7:
                                    return (
                                      <View style={{ width: '14.28%', padding: 8 }}>
                                        <Text style={styles.tableCell}>{rowName}</Text>
                                      </View>
                                    );
                                  case 8:
                                    return (
                                      <View style={{ width: '12.5%', padding: 8 }}>
                                        <Text style={styles.tableCell}>{rowName}</Text>
                                      </View>
                                    );
                                  case 9:
                                    return (
                                      <View style={{ width: '11.11%', padding: 8 }}>
                                        <Text style={styles.tableCell}>{rowName}</Text>
                                      </View>
                                    );
                                  case 10:
                                    return (
                                      <View style={{ width: '10%', padding: 8 }}>
                                        <Text style={styles.tableCell}>{rowName}</Text>
                                      </View>
                                    );
                                  case 11:
                                    return (
                                      <View style={{ width: '9.09%', padding: 8 }}>
                                        <Text style={styles.tableCell}>{rowName}</Text>
                                      </View>
                                    );
                                  case 12:
                                    return (
                                      <View style={{ width: '8.33%', padding: 8 }}>
                                        <Text style={styles.tableCell}>{rowName}</Text>
                                      </View>
                                    );
                                }
                              })}
                            </View>
                          );
                        })}
                      </View>
                    )
                  );
                case 'header':
                  return (
                    <View style={{ marginTop: 16 }}>
                      <Text style={{ fontSize: 14 }}>{field.title}</Text>
                    </View>
                  );
                case 'spacing':
                  return <View style={{ marginTop: 12, marginBottom: 12 }}></View>;
                case 'chart':
                  return imagesUrl.map((doc) => {
                    if (doc.imageIndex === field.index) {
                      return (
                        <View style={{ marginTop: 16 }}>
                          <Image style={{ width: '100%' }} src={doc.imageUrl} />
                        </View>
                      );
                    }
                  });
                case 'text':
                  let formattedText = $(field.body).map(function () {
                    return $('<div>').append(this).html();
                  });
                  console.log(formattedText);
                  return (
                    <View style={{ marginTop: 16 }}>
                      {$.map(formattedText, (res) => {
                        console.log(res.toString().includes('<p></p>'));
                        console.log(res.includes('<strong>'));
                        // START --> <p></p>
                        if (res.startsWith('<p>') && !res.includes('<strong>') && !res.includes('<em>') && !res.includes('<s>')) {
                          return <Text style={{ fontSize: 12 }}>{res.replace(/(<([^>]+)>)/gi, '')}</Text>;
                        }
                        // <p>STRONG</p>
                        else if (res.startsWith('<p>') && res.includes('<strong>') && !res.includes('<em>') && !res.includes('<s>')) {
                          return (
                            <Text style={{ fontSize: 12, fontFamily: 'Montserrat-SemiBold' }}>{res.replace(/(<([^>]+)>)/gi, '')}</Text>
                          );
                        }
                        // <p>EM</p>
                        else if (res.startsWith('<p>') && !res.includes('<strong>') && res.includes('<em>') && !res.includes('<s>')) {
                          return <Text style={{ fontSize: 12, fontFamily: 'Montserrat-Italic' }}>{res.replace(/(<([^>]+)>)/gi, '')}</Text>;
                        }
                        // <p>EM + STRONG</p>
                        else if (res.startsWith('<p>') && res.includes('<strong>') && res.includes('<em>') && !res.includes('<s>')) {
                          return (
                            <Text style={{ fontSize: 12, fontFamily: 'Montserrat-SemiBoldItalic' }}>
                              {res.replace(/(<([^>]+)>)/gi, '')}
                            </Text>
                          );
                        }
                        // <p>S</p>
                        else if (res.startsWith('<p>') && res.includes('<s>') && !res.includes('<strong>') && !res.includes('<em>')) {
                          return <Text style={{ fontSize: 12, textDecoration: 'line-through' }}>{res.replace(/(<([^>]+)>)/gi, '')}</Text>;
                        }
                        // <p>S + EM</p>
                        else if (res.startsWith('<p>') && res.includes('<s>') && res.includes('<em>') && !res.includes('<strong>')) {
                          return (
                            <Text style={{ fontSize: 12, fontFamily: 'Montserrat-Italic', textDecoration: 'line-through' }}>
                              {res.replace(/(<([^>]+)>)/gi, '')}
                            </Text>
                          );
                        }
                        // <p>S + EM + STRONG</p>
                        else if (res.startsWith('<p>') && res.includes('<s>') && res.includes('<em>') && res.includes('<strong>')) {
                          return (
                            <Text style={{ fontSize: 12, fontFamily: 'Montserrat-SemiBoldItalic', textDecoration: 'line-through' }}>
                              {res.replace(/(<([^>]+)>)/gi, '')}
                            </Text>
                          );
                        }
                        // END --> <p></p>
                        // <h2></h2>
                        else if (res.startsWith('<h2>')) {
                          return <Text style={{ fontSize: 14 }}>{res.replace(/(<([^>]+)>)/gi, '')}</Text>;
                        }
                        // <h1></h1>
                        else if (res.startsWith('<h1>')) {
                          return <Text style={{ fontSize: 16 }}>{res.replace(/(<([^>]+)>)/gi, '')}</Text>;
                        }
                      })}
                    </View>
                  );
              }
            })}
          </Page>
        );
      })}
    </Document>
  );
};

const ReactPDFDocument = ({ sections }) => {
  const size = useWindowSize();

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

  const [imagesUrl, setImagesUrl] = useState();
  useEffect(() => {
    console.log(sections);
    const imagesArray = [];
    setImagesUrl(imagesArray);
    sections &&
      sections.map((section) => {
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
                  labels: {
                    boxWidth: 30,
                    boxHeight: 5,
                    fontFamily: 'Comfortaa',
                    fontSize: 12,
                  },
                },
                // defaultFontFamily: (Chart.defaults.global.defaultFontFamily = 'Comfortaa'),
                scales: {
                  yAxes: [
                    {
                      stacked: field.stacked == true ? true : false,
                      ticks: {
                        beginAtZero: true,
                        fontFamily: 'Comfortaa',
                        fontSize: 10,
                      },
                    },
                  ],
                  xAxes: [
                    {
                      stacked: field.stacked == true ? true : false,
                      ticks: {
                        beginAtZero: true,
                        fontFamily: 'Comfortaa',
                        fontSize: 10,
                      },
                    },
                  ],
                },
              },
            });

            toSaveChart.setFormat('png').setDevicePixelRatio(3.0).setBackgroundColor('#f8f9fb');
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
  }, [sections]);

  console.log(imagesUrl);

  return (
    <div ref={saveContainer} className="relative flex justify-start">
      {size.width < 680 ? (
        <div className="flex mt-4">
          <img
            onClick={async (e) => {
              e.preventDefault();
              const doc = (
                <MyDocument
                  image={imageUrl}
                  data={data}
                  periods={periods}
                  revenueElements={revenueElements}
                  costsElements={costsElements}
                  tax={tax}
                  totalRevenue={totalRevenue}
                  monthlyRevenue={monthlyRevenue}
                  totalCosts={totalCosts}
                  monthlyCosts={monthlyCosts}
                  grossProfit={grossProfit}
                  netProfit={netProfit}
                  startDate={startDate}
                  endDate={endDate}
                />
              );
              const asPdf = pdf([]); // {} is important, throws without an argument
              asPdf.updateContainer(doc);
              const blob = await asPdf.toBlob();
              saveAs(blob, `${Router.query.project}/cash-flow.pdf`);
            }}
            src="/mobile-navbar/pdf.svg"
            height={30}
            width={30}
          />
        </div>
      ) : (
        <div className="relative w-full flex justify-end items-center">
          <button
            ref={dropdownButton}
            onClick={onSaveDropdownShow}
            className={`hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-8 rounded-2xl mt-2 dark:text-primarydark dark:border-primarydark ${
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
                <img
                  onClick={async (e) => {
                    e.preventDefault();
                    const doc = <MyDocument imagesUrl={imagesUrl} sections={sections} />;
                    const asPdf = pdf([]);
                    asPdf.updateContainer(doc);
                    const blob = await asPdf.toBlob();
                    saveAs(blob, `${Router.query.project}/competitors-analysis.pdf`);
                  }}
                  src="/mobile-navbar/pdf.svg"
                  height={30}
                  width={30}
                  className="mt-2 cursor-pointer"
                />
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
      )}
    </div>
  );
};

export default ReactPDFDocument;
