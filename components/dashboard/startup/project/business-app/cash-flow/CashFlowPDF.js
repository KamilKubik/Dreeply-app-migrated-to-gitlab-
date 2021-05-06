import React, { useEffect, useState, useRef } from 'react';
import { saveAs } from 'file-saver';
import ChartJsImage from 'chartjs-to-image';
import { format } from 'date-fns';
import Router from 'next/router';
import Link from 'next/link';
import gsap, { Linear } from 'gsap';
import { useWindowSize } from '../../../../../../utils/useWindowSize';

import { Font, pdf, Page, Text, View, Image, Document, StyleSheet, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';

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
  mainGridData: {
    color: '#0a1230',
    fontSize: 12,
    width: '100%',
    marginTop: 52,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondGridData: {
    color: '#0a1230',
    fontSize: 12,
    width: '100%',
    marginTop: 18,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const MyDocument = ({
  image,
  data,
  periods,
  revenueElements,
  costsElements,
  tax,
  totalRevenue,
  monthlyRevenue,
  totalCosts,
  monthlyCosts,
  grossProfit,
  netProfit,
  startDate,
  endDate,
}) => {
  return (
    <Document scale={96 / 72} renderMode="svg">
      <Page size="A4" style={styles.homePage}>
        <View>
          <Text style={styles.mainTitle}>Cash flow analysis</Text>
        </View>
        {/* <View style={{ width: '80%', marginLeft: '10%', height: 1, backgroundColor: '#6C63FF' }}></View> */}
        <View style={styles.mainGridData}>
          <View>
            <View
              style={{
                backgroundColor: '#fcfefe',
                padding: 14,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: 16,
                width: 155,
              }}
            >
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Image src="/cash-flow/png/calendar.png" style={{ height: 16, width: 16 }} />
                <Text style={{ marginLeft: 4 }}>Start:</Text>
              </View>
              <Text>{data.startDate}</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#fcfefe',
              marginLeft: 30,
              marginRight: 30,
              padding: 14,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 16,
              width: 155,
            }}
          >
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Image src="/cash-flow/png/hourglass.png" style={{ height: 16, width: 16 }} />
              <Text style={{ marginLeft: 4 }}>End:</Text>
            </View>
            <Text>{data.endDate}</Text>
          </View>
          <View
            style={{
              backgroundColor: '#fcfefe',
              padding: 14,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 16,
              width: 155,
            }}
          >
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Image src="/cash-flow/png/tax.png" style={{ height: 16, width: 16 }} />
              <Text style={{ marginLeft: 4 }}>Tax:</Text>
            </View>
            <Text>{data.tax}%</Text>
          </View>
        </View>
        {/* Chart */}
        <View style={{ marginTop: 18, backgroundColor: '#fcfefe', padding: 12, borderRadius: 16 }}>
          <Image src={image} />
        </View>
        {/* Calculations section */}
        <View style={styles.secondGridData}>
          <View>
            <View
              style={{
                backgroundColor: '#fcfefe',
                padding: 14,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: 16,
                width: 232.5,
              }}
            >
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Image src="/cash-flow/png/gross-profit.png" style={{ height: 16, width: 16 }} />
                <Text style={{ marginLeft: 4 }}>Gross profit:</Text>
              </View>
              <Text>${grossProfit}</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#fcfefe',
              marginLeft: 60,
              padding: 14,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 16,
              width: 232.5,
            }}
          >
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Image src="/cash-flow/png/net-profit.png" style={{ height: 16, width: 16 }} />
              <Text style={{ marginLeft: 4 }}>Net profit</Text>
            </View>
            <Text>${netProfit}</Text>
          </View>
        </View>
        <View style={styles.secondGridData}>
          <View>
            <View
              style={{
                backgroundColor: '#fcfefe',
                padding: 14,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: 16,
                width: 232.5,
              }}
            >
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Image src="/cash-flow/png/total-revenue.png" style={{ height: 16, width: 16 }} />
                <Text style={{ marginLeft: 4 }}>Total revenue:</Text>
              </View>
              <Text>${totalRevenue}</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#fcfefe',
              marginLeft: 60,
              padding: 14,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 16,
              width: 232.5,
            }}
          >
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Image src="/cash-flow/png/monthly-revenue.png" style={{ height: 16, width: 16 }} />
              <Text style={{ marginLeft: 4 }}>Monthly revenue:</Text>
            </View>
            <Text>${monthlyRevenue}</Text>
          </View>
        </View>
        <View style={styles.secondGridData}>
          <View>
            <View
              style={{
                backgroundColor: '#fcfefe',
                padding: 14,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: 16,
                width: 232.5,
              }}
            >
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Image src="/cash-flow/png/total-costs.png" style={{ height: 16, width: 16 }} />
                <Text style={{ marginLeft: 4 }}>Total costs:</Text>
              </View>
              <Text>${totalCosts}</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#fcfefe',
              marginLeft: 60,
              padding: 14,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 16,
              width: 232.5,
            }}
          >
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Image src="/cash-flow/png/monthly-costs.png" style={{ height: 16, width: 16 }} />
              <Text style={{ marginLeft: 4 }}>Monthly costs:</Text>
            </View>
            <Text>${monthlyCosts}</Text>
          </View>
        </View>
        {/* Revenue */}
        <View wrap={false} style={{ backgroundColor: '#fcfefe', borderRadius: 16, padding: 16, marginTop: 18 }}>
          <Text style={{ fontSize: 14 }}>Revenue</Text>
          <View style={{ backgroundColor: '#f8f9fb', borderRadius: 16, padding: 16, marginTop: 8 }}>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <View style={{ width: 145 }}>
                <Text style={{ fontSize: 12 }}>name</Text>
              </View>
              <View style={{ width: 87 }}>
                <Text style={{ fontSize: 12 }}>type</Text>
              </View>
              <View style={{ width: 87 }}>
                <Text style={{ fontSize: 12 }}>amount</Text>
              </View>
              <View style={{ width: 87 }}>
                <Text style={{ fontSize: 12 }}>start</Text>
              </View>
              <View style={{ width: 87 }}>
                <Text style={{ fontSize: 12 }}>end</Text>
              </View>
            </View>
            <View style={{ width: '100%', height: 1, backgroundColor: '#6C63FF', marginTop: 6 }}></View>
            {/* Revenues */}
            {revenueElements &&
              revenueElements.map((revenueElement) => {
                console.log(revenueElement);
                const startDate = format(revenueElement.start.seconds * 1000, 'MMM / yyyy');
                const endDate = format(revenueElement.end.seconds * 1000, 'MMM / yyyy');
                return (
                  <View style={{ display: 'flex', flexDirection: 'row', marginTop: 6 }}>
                    <View style={{ width: 145, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                      <View
                        style={{
                          width: 8,
                          height: 8,
                          backgroundColor: revenueElement.color,
                          position: 'relative',
                          right: 12,
                          borderRadius: 16,
                        }}
                      ></View>
                      <Text style={{ fontSize: 10, position: 'relative', right: 8 }}>{revenueElement.title}</Text>
                    </View>
                    <View style={{ width: 87 }}>
                      <Text style={{ fontSize: 10 }}>{revenueElement.type}</Text>
                    </View>
                    <View style={{ width: 87 }}>
                      <Text style={{ fontSize: 10 }}>{revenueElement.value}</Text>
                    </View>
                    <View style={{ width: 87 }}>
                      <Text style={{ fontSize: 10 }}>{startDate}</Text>
                    </View>
                    <View style={{ width: 87 }}>
                      {revenueElement.type === 'Recurring' ? (
                        <Text style={{ fontSize: 10 }}>{endDate}</Text>
                      ) : (
                        <View style={{ width: 50, height: '0.5px', backgroundColor: '#0a1230', marginTop: 5 }}></View>
                      )}
                    </View>
                  </View>
                );
              })}
          </View>
        </View>
        {/* Costs */}
        <View wrap={false} style={{ backgroundColor: '#fcfefe', borderRadius: 16, padding: 16, marginTop: 18 }}>
          <Text style={{ fontSize: 14 }}>Costs</Text>
          <View style={{ backgroundColor: '#f8f9fb', borderRadius: 16, padding: 16, marginTop: 8 }}>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <View style={{ width: 145 }}>
                <Text style={{ fontSize: 12 }}>name</Text>
              </View>
              <View style={{ width: 87 }}>
                <Text style={{ fontSize: 12 }}>type</Text>
              </View>
              <View style={{ width: 87 }}>
                <Text style={{ fontSize: 12 }}>amount</Text>
              </View>
              <View style={{ width: 87 }}>
                <Text style={{ fontSize: 12 }}>start</Text>
              </View>
              <View style={{ width: 87 }}>
                <Text style={{ fontSize: 12 }}>end</Text>
              </View>
            </View>
            <View style={{ width: '100%', height: 1, backgroundColor: '#6C63FF', marginTop: 6 }}></View>
            {costsElements &&
              costsElements.map((costsElement) => {
                console.log(costsElement);
                const startDate = format(costsElement.start.seconds * 1000, 'MMM / yyyy');
                const endDate = format(costsElement.end.seconds * 1000, 'MMM / yyyy');
                return (
                  <View style={{ display: 'flex', flexDirection: 'row', marginTop: 6 }}>
                    <View style={{ width: 145, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                      <View
                        style={{
                          width: 8,
                          height: 8,
                          backgroundColor: costsElement.color,
                          position: 'relative',
                          right: 12,
                          borderRadius: 16,
                        }}
                      ></View>
                      <Text style={{ fontSize: 10, position: 'relative', right: 8 }}>{costsElement.title}</Text>
                    </View>
                    <View style={{ width: 87 }}>
                      <Text style={{ fontSize: 10 }}>{costsElement.type}</Text>
                    </View>
                    <View style={{ width: 87 }}>
                      <Text style={{ fontSize: 10 }}>{costsElement.value}</Text>
                    </View>
                    <View style={{ width: 87 }}>
                      <Text style={{ fontSize: 10 }}>{startDate}</Text>
                    </View>
                    <View style={{ width: 87 }}>
                      <Text style={{ fontSize: 10 }}>{endDate}</Text>
                    </View>
                  </View>
                );
              })}
          </View>
        </View>
      </Page>
    </Document>
  );
};

const CashFlowPDF = ({
  projectName,
  projectId,
  data,
  periods,
  revenueElements,
  costsElements,
  tax,
  totalRevenue,
  monthlyRevenue,
  totalCosts,
  monthlyCosts,
  grossProfit,
  netProfit,
  startDate,
  endDate,
}) => {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    const revenueDataset = [];
    const testArray = [];
    // const monthData = periods && periods.map(() => null);
    revenueElements &&
      revenueElements.map((revenueElement, index) => {
        const monthData = periods && periods.map(() => null);
        console.log(revenueElement);
        periods &&
          periods.map((period, periodIndex) => {
            revenueElement.periods.map((revenuePeriod) => {
              if (period == revenuePeriod) {
                if (monthData[periodIndex] == null) {
                  monthData[periodIndex] = revenueElement.value;
                }
              }
            });
          });
        console.log(monthData);
        testArray.push(monthData);
        revenueDataset.push({
          label: `revenue / ${revenueElement.title}`,
          data: monthData,
          backgroundColor: revenueElement.color,
          borderColor: revenueElement.color,
        });
      });

    // Costs datasets
    const costsDataset = [];
    costsElements &&
      costsElements.map((costsElement, index) => {
        const monthData = periods && periods.map(() => null);
        console.log(costsElement);
        periods &&
          periods.map((period, periodIndex) => {
            costsElement.periods.map((costsPeriod) => {
              if (period == costsPeriod) {
                if (monthData[periodIndex] == null) {
                  monthData[periodIndex] = -costsElement.value;
                }
              }
            });
          });
        console.log(monthData);
        testArray.push(monthData);
        costsDataset.push({
          label: `costs / ${costsElement.title}`,
          data: monthData,
          backgroundColor: costsElement.color,
          borderColor: costsElement.color,
        });
      });
    // ----------------------
    // Revenue
    const revenueArray = [];
    revenueDataset.length !== 0 &&
      revenueDataset.length !== 0 &&
      revenueDataset.map((element) =>
        revenueArray.push(
          element.data &&
            element.data.map((data) => {
              if (data !== null) {
                return parseInt(data);
              } else {
                return 0;
              }
            })
        )
      );
    const calculatedRevenueArray =
      revenueArray.length !== 0 && revenueArray[0] !== undefined && revenueArray.reduce((a, b) => a.map((c, i) => c + b[i]));
    // Costs
    const costsArray = [];
    costsDataset.length !== 0 &&
      costsDataset.length !== 0 &&
      costsDataset.map((element) =>
        costsArray.push(
          element.data &&
            element.data.map((data) => {
              if (data !== null) {
                return parseInt(data);
              } else {
                return 0;
              }
            })
        )
      );
    const calculatedCostsArray =
      costsArray.length !== 0 && costsArray[0] !== undefined && costsArray.reduce((a, b) => a.map((c, i) => c + b[i]));
    // Final value
    const finalArray = [calculatedRevenueArray, calculatedCostsArray];
    // Check if any array is falsy
    const calculatedFinalArray =
      finalArray &&
      finalArray.map((array) => {
        if (!array) {
          const zeroArray = [];
          periods && periods.map((period) => zeroArray.push(0));
          return zeroArray;
        } else {
          return array;
        }
      });
    const finalDataBeforeTax =
      calculatedFinalArray.length !== 0 && calculatedFinalArray.reduce((a, b) => a && b && a.map((c, i) => c + b[i]));
    const finalDataAfterTax = finalDataBeforeTax && finalDataBeforeTax.map((data) => data - (tax / 100) * data);

    console.log(finalDataAfterTax);

    const toSaveChart = new ChartJsImage();
    toSaveChart.setConfig({
      type: 'bar',
      data: {
        labels: periods && periods,
        datasets: [
          {
            type: 'line',
            label: 'Net profit',
            data: finalDataAfterTax,
            backgroundColor: 'rgba(10, 18, 48, 1)',
            borderColor: 'rgba(10, 18, 48, 1)',
            fill: 0,
            lineTension: 0,
            borderWidth: 1,
            pointRadius: 2,
          },
          ...revenueDataset,
          ...costsDataset,
        ],
      },
      options: {
        skipNull: true,
        responsive: true,
        maintainAspectRatio: false,
        bezierCurve: false,
        legend: {
          labels: {
            boxWidth: 30,
            boxHeight: 5,
            fontFamily: 'Comfortaa',
            fontSize: 12,
          },
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              ticks: {
                fontFamily: 'Comfortaa',
                fontSize: 10,
                beginAtZero: true,
              },
            },
          ],
          yAxes: [
            {
              stacked: true,
              ticks: {
                fontFamily: 'Comfortaa',
                fontSize: 10,
                beginAtZero: true,
                callback: function (value) {
                  return '$' + value;
                },
              },
            },
          ],
        },
      },
    });

    toSaveChart.setHeight(200).setFormat('png').setDevicePixelRatio(2.0).setBackgroundColor('#fcfefe');
    const imageUrl = toSaveChart.toDataUrl();
    imageUrl.then((image) => setImageUrl(image));
  }, [
    data,
    periods,
    revenueElements,
    costsElements,
    tax,
    totalRevenue,
    monthlyRevenue,
    totalCosts,
    monthlyCosts,
    grossProfit,
    netProfit,
    startDate,
    endDate,
  ]);
  const saveContainer = useRef();

  const size = useWindowSize();

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
                  <input
                    value={`http://localhost:3000/dashboard/projects/${projectName}/cash-flow/${projectId}`}
                    className="w-full bg-linkBackground text-sm px-2 py-1 dark:text-primarydark"
                  />
                  <Link href={`/dashboard/projects/${projectName}/cash-flow/${projectId}`} passHref>
                    <a target="_blank" rel="noreferrer">
                      <img className="cursor-pointer" src="/mobile-navbar/foreign.svg" height={28} width={28} className="h-full" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CashFlowPDF;
