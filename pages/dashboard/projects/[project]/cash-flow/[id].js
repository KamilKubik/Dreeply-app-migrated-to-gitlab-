import React, { useEffect, useState, useRef } from 'react';
import { db } from '../../../../../lib/firebase-admin';
import { db as dbClient } from '../../../../../lib/firebase';
import { isMobile } from 'react-device-detect';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import UniqueElement from '../../../../../components/dashboard/startup/project/business-app/competitors/UniqueElement';
import BounceLoaderComponent from '../../../../../components/BounceLoader';
const safeJsonStringify = require('safe-json-stringify');
import { useWindowSize } from '../../../../../utils/useWindowSize';

import DatePicker from 'react-datepicker';
import { addYears, format } from 'date-fns';
import moment from 'moment';

const UniqueCashflowPage = ({ project }) => {
  console.log('Particular project --> ', project);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedProject, setSelectedProject] = useState(null);
  const [revenueElements, setRevenueElements] = useState();
  const [costsElements, setCostsElements] = useState();
  const [periods, setPeriods] = useState();
  const [tax, setTax] = useState();
  const size = useWindowSize();
  // Sum data
  const [totalRevenue, setTotalRevenue] = useState();
  const [monthlyRevenue, setMonthlyRevenue] = useState();
  const [totalCosts, setTotalCosts] = useState();
  const [monthlyCosts, setMonthlyCosts] = useState();
  const [grossProfit, setGrossProfit] = useState();
  const [netProfit, setNetProfit] = useState();

  const router = useRouter();

  useEffect(() => {
    project && setSelectedProject(project[0]);
    project && setRevenueElements(project[0].revenueElements);
    project && setCostsElements(project[0].costsElements);
    project && setPeriods(project[0].periods);
    project && setTax(project[0].tax);
    // Sum data
    // Global start date
    const changedStartDate = project[0].globalStartDate._seconds * 1000;
    console.log(changedStartDate);
    project[0].globalStartDate !== '' && setStartDate(new Date(changedStartDate));
    const changedEndDate = project[0].globalEndDate._seconds * 1000;
    // Global end date
    project[0].globalEndDate !== '' && setEndDate(new Date(changedEndDate));
    // Periods
    setPeriods(project[0].periods);
    // Total revenue
    const totalRevenueArray = project[0].revenueElements.map((element) => parseInt(element.value * element.periods.length));
    const totalRevenue = totalRevenueArray.reduce((a, b) => {
      return a + b;
    }, 0);
    setTotalRevenue(Number.isNaN(totalRevenue) ? 0 : Math.round(totalRevenue));
    // Monthly revenue
    const periodLength = project[0].periods.length;
    const monthlyRevenue = totalRevenue / periodLength;
    setMonthlyRevenue(Number.isNaN(monthlyRevenue) ? 0 : Math.round(monthlyRevenue));
    // Total costs
    const totalCostsArray = project[0].costsElements.map((element) => parseInt(element.value * element.periods.length));
    const totalCosts = totalCostsArray.reduce((a, b) => {
      return a + b;
    }, 0);
    setTotalCosts(Number.isFinite(totalCosts) ? Math.round(totalCosts) : 0);
    // Monthly costs
    const monthlyCosts = totalCosts / periodLength;
    setMonthlyCosts(Number.isFinite(monthlyCosts) ? Math.round(monthlyCosts) : 0);
    // Gross profit
    const grossProfit = totalRevenue - totalCosts;
    setGrossProfit(Number.isFinite(grossProfit) ? Math.round(grossProfit) : 0);
    // Net profit
    const tax = parseInt(project[0].tax);
    const netProfit = grossProfit - (tax / 100) * grossProfit;
    setNetProfit(Number.isFinite(netProfit) ? Math.round(netProfit) : 0);
  }, [project]);
  //   const [competitors, setCompetitors] = useState([]);

  // Chart
  useEffect(() => {
    // const myChartRef = chartRef.current.getContext('2d');
    document.getElementById(`chartContainer`).innerHTML = '&nbsp;';
    document.getElementById(`chartContainer`).innerHTML = `<canvas height='${size.width > 680 ? 75 : 'unset'}' id='chart'></canvas>`;
    const myChartRef = document.getElementById('chart').getContext('2d');

    // Revenue datasets
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
    console.log(revenueArray);
    const calculatedRevenueArray =
      revenueArray.length !== 0 && revenueArray[0] !== undefined && revenueArray.reduce((a, b) => a.map((c, i) => c + b[i]));
    console.log(calculatedRevenueArray);
    // Costs
    const costsArray = [];
    console.log(costsDataset);
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
    console.log(costsArray);
    const calculatedCostsArray =
      costsArray.length !== 0 && costsArray[0] !== undefined && costsArray.reduce((a, b) => a.map((c, i) => c + b[i]));
    console.log(calculatedCostsArray);
    // Final value
    const finalArray = [calculatedRevenueArray, calculatedCostsArray];
    console.log(finalArray);
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
    console.log(calculatedFinalArray);
    const finalDataBeforeTax =
      calculatedFinalArray.length !== 0 && calculatedFinalArray.reduce((a, b) => a && b && a.map((c, i) => c + b[i]));
    const finalDataAfterTax = finalDataBeforeTax && finalDataBeforeTax.map((data) => data - (tax / 100) * data);
    console.log(finalDataAfterTax);

    const netWorthArray = [];
    const netWorth =
      revenueDataset.length !== 0 &&
      costsDataset.length !== 0 &&
      revenueDataset &&
      revenueDataset.map((revenueElement, index) => {
        const value =
          revenueElement.data &&
          revenueElement.data.map((dataElement, revenueElementIndex) => {
            console.log(dataElement);
            if (dataElement !== null && costsDataset[index]) {
              if (costsDataset[index].data[revenueElementIndex]) {
                const grossProfit = dataElement - -costsDataset[0].data[revenueElementIndex];
                netWorthArray.push(grossProfit - (tax / 100) * grossProfit);
                // return grossProfit - (tax / 100) * grossProfit;
              }
            }
          });
        return value;
      });

    new Chart(myChartRef, {
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
            borderWidth: size.width < 680 ? 1 : 3,
            pointRadius: size.width < 680 ? 2 : 3,
          },
          ...revenueDataset,
          ...costsDataset,
        ],
      },
      options: {
        skipNull: true,
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              fontFamily: 'Comfortaa',
              font: {
                size: size.width < 680 ? 8 : 12,
              },
              boxWidth: size.width < 680 ? 10 : 40,
            },
          },
        },
        scales: {
          x: {
            stacked: true,
            ticks: {
              fontFamily: 'Comfortaa',
              beginAtZero: true,
              font: {
                size: size.width < 680 ? 8 : 12,
              },
            },
            // beginAtZero: true,
          },
          y: {
            stacked: true,
            ticks: {
              fontFamily: 'Comfortaa',
              beginAtZero: true,
              font: {
                size: size.width < 680 ? 8 : 12,
              },
            },
            // beginAtZero: true,
          },
        },
      },
    });
  }, [periods, revenueElements, costsElements, tax]);

  if (router.isFallback) {
    return <BounceLoaderComponent />;
  }

  console.log(startDate);
  console.log(endDate);
  return (
    <div className="min-h-screen w-full relative flex flex-col items-center">
      <div className="w-full max-w-full relative mt-8 lg1Container:mt-8 mb-16 px-32">
        <div className="relative grid grid-cols-2 grid-rows-1 grid-flow-col">
          <div className="flex items-center">
            <svg
              height={(size.width > 860 && 30) || (size.width < 860 && size.width > 680 && 26) || (size.width < 680 && 22)}
              width={(size.width > 860 && 30) || (size.width < 860 && size.width > 680 && 26) || (size.width < 680 && 22)}
              className="fill-current text-primary dark:text-primarydark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
            >
              <title>Landing Success</title>
              <g id="Landing_Success" data-name="Landing Success">
                <path
                  className="cls-1"
                  d="M109.3,90.1A46,46,0,0,0,65,36V20.08c1.78-.62,7.21-2.14,12.57.23a19.33,19.33,0,0,0,14.82,0c.87-.38.61.31.61-17.93a1,1,0,0,0-1.43-.93c-.07,0-6.69,2.87-13.18,0A19.41,19.41,0,0,0,65,.93,1,1,0,0,0,63,1V36a45.86,45.86,0,0,0-28.66,10.8C16.18,40.48,4,40,.79,45.51-2.29,50.86,3.94,59.3,10,65.68A11,11,0,0,0,18,83c.81,38.41,46.08,59.2,75.66,34.21,8.53,3,29,9.15,33.55,1.31C130.39,113,123.86,102.65,109.3,90.1ZM77.59,3.31A19.39,19.39,0,0,0,91,3.83V18.68c-1.79.62-7.22,2.13-12.57-.23A19.19,19.19,0,0,0,65,17.93V3.08C66.81,2.46,72.24,1,77.59,3.31ZM65,45v-7c39.69.91,58,50.27,28.21,76.81C71.32,107,46,92.66,27.77,78.64a11,11,0,0,0-3.2-16.13A43.88,43.88,0,0,1,63,38.06V45A1,1,0,0,0,65,45ZM32.55,48.36a46.21,46.21,0,0,0-9.83,13.28,10.93,10.93,0,0,0-11.4,2.47C-8.39,43.23,5.23,39.08,32.55,48.36ZM10,72a9,9,0,1,1,9,9A9,9,0,0,1,10,72Zm10,11a11,11,0,0,0,6.34-2.82c18.45,14.21,43.45,28.35,65.05,36.22C63,139.16,20.83,119.1,20.05,83Zm105.4,34.5c-2.51,4.35-14,3.62-30-1.85a45.61,45.61,0,0,0,13.42-23.21C121.59,103.58,128,113.12,125.45,117.47Z"
                />
              </g>
            </svg>
            <p className="text-primarydark text-lg mdContainer:text-xl lgContainer:text-2xl mt-2 pl-2 dark:text-background">
              Cash flow analysis
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-secondary text-xs mdContainer:text-sm lgContainer:text-base text-gray relative -top-1 lgContainer:top-0">
            Manage your startup cash flow
          </h1>
        </div>
        <div className="w-full grid grid-cols-2fr grid-rows-1fr lgContainer:grid-cols-3fr lgContainer:grid-rows-1fr gap-y-8 gap-x-6 smContainer:gap-x-32 mdContainer:gap-x-12 mt-12">
          <div
            id="main-datepicker"
            className="w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md grid grid-cols-2fr items-center text-xs mdContainer:text-sm lgContainer:text-base"
          >
            <div className="flex items-center">
              <img
                src="/cash-flow/calendar.svg"
                height={(size.width > 860 && 25) || (size.width < 860 && size.width > 680 && 22) || (size.width < 680 && 18)}
                width={(size.width > 860 && 25) || (size.width < 860 && size.width > 680 && 22) || (size.width < 680 && 18)}
              />
              <p className="ml-2 text-primarydark">Start:</p>
            </div>
            {startDate && !isMobile ? (
              <DatePicker
                selected={startDate}
                // onChange={(date) => onStartDateUpdate(date)}
                dateFormat="MMMM yyyy"
                showMonthYearPicker
                maxDate={addYears(new Date(), 3)}
                minDate={new Date()}
                readOnly={true}
              />
            ) : (
              <DatePicker
                selected={startDate}
                // onChange={(date) => onStartDateUpdate(date)}
                dateFormat="MMMM yyyy"
                showMonthYearPicker
                maxDate={addYears(new Date(), 3)}
                minDate={new Date()}
                withPortal
                readOnly={true}
              />
            )}
          </div>
          <div
            id="main-datepicker"
            className="w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md grid grid-cols-2fr items-center text-xs mdContainer:text-sm lgContainer:text-base"
          >
            <div className="flex items-center">
              <img
                src="/cash-flow/hourglass1.svg"
                height={(size.width > 860 && 25) || (size.width < 860 && size.width > 680 && 22) || (size.width < 680 && 18)}
                width={(size.width > 860 && 25) || (size.width < 860 && size.width > 680 && 22) || (size.width < 680 && 18)}
              />
              <p className="ml-2 text-primarydark">End:</p>
            </div>
            {endDate && !isMobile ? (
              <DatePicker
                selected={endDate}
                // onChange={(date) => onEndDateUpdate(date)}
                dateFormat="MMMM yyyy"
                showMonthYearPicker
                maxDate={addYears(new Date(), 3)}
                minDate={new Date()}
                readOnly={true}
              />
            ) : (
              <DatePicker
                selected={endDate}
                // onChange={(date) => onEndDateUpdate(date)}
                dateFormat="MMMM yyyy"
                showMonthYearPicker
                maxDate={addYears(new Date(), 3)}
                minDate={new Date()}
                withPortal
                readOnly={true}
              />
            )}
          </div>
          <div
            style={{
              width:
                (size.width > 860 && '100%') ||
                (size.width < 860 && size.width > 680 && '47%') ||
                (size.width < 680 && size.width > 520 && '40%') ||
                (size.width < 520 && '47%'),
              gridColumnStart: size.width < 860 ? '1' : 'unset',
              gridColumnEnd: size.width < 860 ? '3' : 'unset',
            }}
            className="place-self-center bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md grid grid-cols-2fr items-center text-xs mdContainer:text-sm lgContainer:text-base"
          >
            <div className="flex items-center">
              <img
                src="/cash-flow/tax.svg"
                height={(size.width > 860 && 25) || (size.width < 860 && size.width > 680 && 22) || (size.width < 680 && 18)}
                width={(size.width > 860 && 25) || (size.width < 860 && size.width > 680 && 22) || (size.width < 680 && 18)}
              />
              <p className="ml-2">Tax:</p>
            </div>
            <div className="flex" style={{ textAlignLast: 'right' }}>
              <input id="tax-input" value={tax} className="w-full bg-white focus:outline-none" />
              <p>%</p>
            </div>
          </div>
        </div>
        <div id="chartContainer" className="w-full h-1/2 p-4 mdContainer:p-8 bg-white rounded-2xl mt-12 shadow-md">
          {/* <canvas ref={chartRef} height={75}></canvas> */}
        </div>
        <div className="w-full grid grid-cols-2fr grid-rows-3fr lg1Container:grid-cols-3fr lg1Container:grid-rows-2fr gap-x-6 smContainer:gap-x-12 gap-y-8 mt-12">
          <div className="w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md flex justify-between items-center text-xs mdContainer:text-sm lgContainer:text-base">
            <div className="flex items-center">
              <img
                src="/cash-flow/revenue.svg"
                height={(size.width > 860 && 25) || (size.width < 860 && size.width > 680 && 22) || (size.width < 680 && 18)}
                width={(size.width > 860 && 25) || (size.width < 860 && size.width > 680 && 22) || (size.width < 680 && 18)}
              />
              <p className="ml-2">Total revenue:</p>
            </div>
            <p>${totalRevenue}</p>
          </div>
          <div className="w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md flex justify-between items-center text-xs mdContainer:text-sm lgContainer:text-base">
            <div className="flex items-center">
              <img
                src="/cash-flow/monthly.svg"
                height={(size.width > 860 && 25) || (size.width < 860 && size.width > 680 && 22) || (size.width < 680 && 18)}
                width={(size.width > 860 && 25) || (size.width < 860 && size.width > 680 && 22) || (size.width < 680 && 18)}
              />
              <p className="ml-2">Monthly revenue:</p>
            </div>
            <p>${monthlyRevenue}</p>
          </div>
          <div className="w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md flex justify-between items-center text-xs mdContainer:text-sm lgContainer:text-base">
            <div className="flex items-center">
              <img
                src="/cash-flow/costs.svg"
                height={(size.width > 860 && 25) || (size.width < 860 && size.width > 680 && 22) || (size.width < 680 && 18)}
                width={(size.width > 860 && 25) || (size.width < 860 && size.width > 680 && 22) || (size.width < 680 && 18)}
              />
              <p className="ml-2">Total costs:</p>
            </div>
            <p>${totalCosts}</p>
          </div>
          <div className="w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md flex justify-between items-center text-xs mdContainer:text-sm lgContainer:text-base">
            <div className="flex items-center">
              <img
                src="/cash-flow/monthly-costs.svg"
                height={(size.width > 860 && 25) || (size.width < 860 && size.width > 680 && 22) || (size.width < 680 && 18)}
                width={(size.width > 860 && 25) || (size.width < 860 && size.width > 680 && 22) || (size.width < 680 && 18)}
              />
              <p className="ml-2">Monthly costs:</p>
            </div>
            <p>${monthlyCosts}</p>
          </div>
          <div className="w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md flex justify-between items-center text-xs mdContainer:text-sm lgContainer:text-base">
            <div className="flex items-center">
              <img
                src="/cash-flow/megaphone.svg"
                height={(size.width > 860 && 25) || (size.width < 860 && size.width > 680 && 22) || (size.width < 680 && 18)}
                width={(size.width > 860 && 25) || (size.width < 860 && size.width > 680 && 22) || (size.width < 680 && 18)}
              />
              <p className="ml-2">Gross profit:</p>
            </div>
            <p>${grossProfit}</p>
          </div>
          <div className="w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md flex justify-between items-center text-xs mdContainer:text-sm lgContainer:text-base">
            <div className="flex items-center">
              <img
                src="/cash-flow/net-worth.svg"
                height={(size.width > 860 && 25) || (size.width < 860 && size.width > 680 && 22) || (size.width < 680 && 18)}
                width={(size.width > 860 && 25) || (size.width < 860 && size.width > 680 && 22) || (size.width < 680 && 18)}
              />
              <p className="ml-2">Net profit:</p>
            </div>
            <p>${netProfit}</p>
          </div>
        </div>
        {/* Revenue */}
        <div
          // style={{ height: 55 }}
          className="overflow-hidden relative w-full rounded-2xl bg-white dark:bg-background px-4 py-4 flex justify-center items-center mt-12 flex flex-wrap shadow-md"
        >
          <div className="w-full flex justify-between items-center">
            <div className="lgContainer:ml-2">
              <p className="text-sm lgContainer:text-base">Revenue</p>
            </div>
            {/* <div className="lgContainer:mr-2 flex flex-nowrap items-center">
              <img
                className="cursor-pointer"
                src="/cash-flow/add.svg"
                height={(size.width > 860 && 22) || (size.width < 860 && size.width > 680 && 18) || (size.width < 680 && 16)}
                width={(size.width > 860 && 22) || (size.width < 860 && size.width > 680 && 18) || (size.width < 680 && 16)}
              />
              <img
                // ref={dropDownIcon}
                // onClick={onRevenueShow}
                className="ml-2 cursor-pointer"
                src="/cash-flow/dropdown.svg"
                height={(size.width > 860 && 22) || (size.width < 860 && size.width > 680 && 18) || (size.width < 680 && 16)}
                width={(size.width > 860 && 22) || (size.width < 860 && size.width > 680 && 18) || (size.width < 680 && 16)}
              />
            </div> */}
          </div>
          <div
            className={`w-full ${
              size.width < 1120
                ? 'text-sm mdContainer:text-base lg1Container:mx-8 lg1Container:mb-6 mt-4  bg-background rounded-2xl px-4 mdContainer:px-6 py-4'
                : 'w-full mx-8 mb-6 mt-4  bg-background rounded-2xl px-4 mdContainer:px-6 py-4'
            }`}
          >
            {/* <hr className="text-primary w-full" /> */}
            <div
              style={{ fontSize: size.width < 520 && '0.6rem' }}
              className="w-full grid grid-cols-5fr items-center text-xs mdContainer:text-sm lg1Container:text-base"
            >
              <div>name</div>
              <div>type</div>
              <div>amount</div>
              <div>start</div>
              <div>end</div>
              <div></div>
            </div>
            <hr className="text-primary w-full" />
            <div className="h-full w-full rounded-2xl flex flex-wrap flex-col">
              {revenueElements &&
                revenueElements.map((element, index) => {
                  console.log(element);
                  return (
                    <div className="w-full grid grid-cols-5fr py-3 items-start text-sm">
                      <input placeholder="name" className="w-4/5 bg-background focus:outline-none" value={element.title} />
                      <div style={{ height: '20px' }} className="overflow-hidden flex flex-col flex-wrap">
                        <div className="w-full flex flex-row flex-nowrap">
                          <p className="cursor-default">{element.type}</p>
                        </div>
                      </div>
                      <div>
                        <input className="w-4/5 bg-background focus:outline-none" value={element.value} placeholder="amount" />
                      </div>
                      <div>
                        <DatePicker
                          popperPlacement="top-start"
                          popperProps={{
                            positionFixed: true,
                          }}
                          selected={element.start._seconds * 1000}
                          dateFormat="MMMM yyyy"
                          showMonthYearPicker
                          maxDate={addYears(new Date(), 3)}
                          minDate={new Date()}
                          readOnly={true}
                        />
                      </div>
                      <div>
                        {element.type == 'Recurring' ? (
                          <DatePicker
                            popperPlacement="top-start"
                            popperProps={{
                              positionFixed: true,
                            }}
                            selected={element.end._seconds * 1000}
                            dateFormat="MMMM yyyy"
                            showMonthYearPicker
                            maxDate={addYears(new Date(), 3)}
                            minDate={new Date()}
                            readOnly={true}
                          />
                        ) : (
                          <hr className="text-primarydark mr-8 mt-2" />
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        {/* Costs */}
        <div className="overflow-hidden relative w-full rounded-2xl bg-white dark:bg-background px-4 py-4 flex justify-center items-center mt-8 flex flex-wrap shadow-md">
          <div className="w-full flex justify-between items-center">
            <div className="lgContainer:ml-2">
              <p className="text-sm lgContainer:text-base">Costs</p>
            </div>
          </div>
          <div
            className={`w-full ${
              size.width < 1120
                ? 'text-sm mdContainer:text-base lg1Container:mx-8 lg1Container:mb-6 mt-4  bg-background rounded-2xl px-4 mdContainer:px-6 py-4'
                : 'w-full mx-8 mb-6 mt-4  bg-background rounded-2xl px-4 mdContainer:px-6 py-4'
            }`}
          >
            {/* <hr className="text-primary w-full" /> */}
            <div className="w-full grid grid-cols-5fr items-center">
              <div>name</div>
              <div>type</div>
              <div>amount</div>
              <div>start</div>
              <div>end</div>
              <div></div>
            </div>
            <hr className="text-primary w-full" />
            <div className="h-full w-full rounded-2xl flex flex-wrap flex-col">
              {costsElements &&
                costsElements.map((element, index) => {
                  return (
                    <div className="w-full grid grid-cols-5fr py-3 items-start text-sm">
                      <input placeholder="name" className="w-4/5 bg-background focus:outline-none" value={element.title} />
                      <div style={{ height: '20px' }} className="overflow-hidden flex flex-col flex-wrap">
                        <div className="w-full flex flex-row flex-nowrap">
                          <p className="cursor-default">{element.type}</p>
                        </div>
                      </div>
                      <div>
                        <input className="w-4/5 bg-background focus:outline-none" value={element.value} placeholder="amount" />
                      </div>
                      <div>
                        <DatePicker
                          popperPlacement="top-start"
                          popperProps={{
                            positionFixed: true,
                          }}
                          selected={element.start._seconds * 1000}
                          dateFormat="MMMM yyyy"
                          showMonthYearPicker
                          maxDate={addYears(new Date(), 3)}
                          minDate={new Date()}
                          readOnly={true}
                        />
                      </div>
                      <div>
                        {element.type == 'Recurring' ? (
                          <DatePicker
                            popperPlacement="top-start"
                            popperProps={{
                              positionFixed: true,
                            }}
                            selected={element.end._seconds * 1000}
                            dateFormat="MMMM yyyy"
                            showMonthYearPicker
                            maxDate={addYears(new Date(), 3)}
                            minDate={new Date()}
                            readOnly={true}
                          />
                        ) : (
                          <hr className="text-primarydark mr-8 mt-2" />
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const snapshot = await db.collection('projects').get();

  const projects = [];
  snapshot.forEach((doc) => {
    projects.push(doc.data());
  });

  const paths = projects.map((project) => ({
    params: {
      project: project.projectName.toString(),
      id: project.projectId.toString(),
    },
  }));

  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  console.log(params);
  // let ref = db.collection('projects').where('projectName', '==', params.project);
  let ref = db
    .collection('projects')
    .doc(params.id)
    .collection('cashFlow')
    .doc(params.project)
    .collection('inputs')
    .where('projectId', '==', params.id);

  const snapshot = await ref.get();
  const project = [];

  snapshot.forEach((doc) => {
    const data = JSON.parse(safeJsonStringify(doc.data()));
    project.push({ ...data });
  });

  return {
    props: { project },
    revalidate: 1,
  };
};

export default UniqueCashflowPage;
