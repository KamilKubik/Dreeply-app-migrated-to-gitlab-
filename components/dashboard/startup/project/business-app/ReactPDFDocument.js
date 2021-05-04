import React, { useState, useEffect, useRef } from 'react';
import { saveAs } from 'file-saver';
import ChartJsImage from 'chartjs-to-image';
import { format } from 'date-fns';
import gsap, { Linear } from 'gsap';
import { Font, pdf, Page, Text, View, Image, Document, StyleSheet, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import Router from 'next/router';
import { useWindowSize } from '../../../../../utils/useWindowSize';

Font.register({ src: '/fonts/poppins.ttf', family: 'Poppins' });
Font.register({ src: '/fonts/comfortaa.ttf', family: 'Comfortaa' });

const styles = StyleSheet.create({
  homePage: {
    padding: 36,
    fontFamily: 'Comfortaa',
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

const MyDocument = ({ sections }) => {
  console.log('PDF Sections --> ', sections);
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
                    const doc = <MyDocument sections={sections} />;
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
