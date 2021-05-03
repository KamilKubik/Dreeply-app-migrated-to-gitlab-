import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { db } from '../../../../../../lib/firebase';
import NavbarTemplate from '../../../../NavbarTemplate';
import PDFDocument from '../PDFDocument';
import Cookies from 'js-cookie';
import Router from 'next/router';
import RevenueElement from './RevenueElement';
// Date picker
import DatePicker from 'react-datepicker';
import { addYears, format } from 'date-fns';
import moment from 'moment';
// uuidv4
import { v4 as uuidv4 } from 'uuid';
// gsap
import gsap, { Linear, TweenMax } from 'gsap';
// Drag & drop
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import 'react-datepicker/dist/react-datepicker.css';
import CostsElement from './CostsElement';
import CashFlowPDF from './CashFlowPDF';
// Mobile friendly
import { isMobile } from 'react-device-detect';
import { useWindowSize } from '../../../../../../utils/useWindowSize';
import TippyMonster from '../../../../Tippy';
import ExitComponent from '../../../ExitComponent';

const CashFlowPage = () => {
  // const size = useWindowSize();
  // console.log(size);
  const [mainDocument, setMainDocument] = useState('');
  const [projectId, setProjectId] = useState('');
  const [documentId, setDocumentId] = useState('');
  const [revenueElements, setRevenueElements] = useState();
  const [costsElements, setCostsElements] = useState();
  const [budgetElements, setBudgetElements] = useState();
  const chartRef = useRef();
  const [periods, setPeriods] = useState();
  const [tax, setTax] = useState();
  // Sum data
  const [totalRevenue, setTotalRevenue] = useState();
  const [monthlyRevenue, setMonthlyRevenue] = useState();
  const [totalCosts, setTotalCosts] = useState();
  const [monthlyCosts, setMonthlyCosts] = useState();
  const [grossProfit, setGrossProfit] = useState();
  const [netProfit, setNetProfit] = useState();
  // Mobile friendly
  // const size = useWindowSize();

  useEffect(async () => {
    const userUid = await Cookies.get('uid');
    // console.log(Router.query.project);
    if (userUid && Router.query.project) {
      console.log(userUid);
      const data = await db.collection('projects').where('uid', '==', userUid);
      data
        .where('projectName', '==', Router.query.project)
        .get()
        .then((querySnapshot) => {
          console.log(querySnapshot);
          querySnapshot.forEach(async (doc1) => {
            setProjectId(doc1.data().projectId);

            await db
              .collection('projects')
              .doc(doc1.data().projectId)
              .collection('cashFlow')
              .doc(Router.query.project)
              .collection('inputs')
              .onSnapshot((serverUpdate) => {
                serverUpdate.docs.map((doc) => {
                  console.log(doc.data());
                  setMainDocument(doc.data());
                  setDocumentId(doc.id);
                  setRevenueElements(doc.data().revenueElements);
                  setCostsElements(doc.data().costsElements);
                  setBudgetElements(doc.data().budgetElements);
                  setTax(doc.data().tax);
                  // Global start date
                  const changedStartDate = doc.data().globalStartDate.seconds * 1000;
                  doc.data().globalStartDate !== '' && setStartDate(new Date(changedStartDate));
                  const changedEndDate = doc.data().globalEndDate.seconds * 1000;
                  // Global end date
                  doc.data().globalEndDate !== '' && setEndDate(new Date(changedEndDate));
                  // Periods
                  setPeriods(doc.data().periods);
                  // Total revenue
                  const totalRevenueArray = doc.data().revenueElements.map((element) => parseInt(element.value * element.periods.length));
                  const totalRevenue = totalRevenueArray.reduce((a, b) => {
                    return a + b;
                  }, 0);
                  setTotalRevenue(Number.isNaN(totalRevenue) ? 0 : Math.round(totalRevenue));
                  // Monthly revenue
                  const periodLength = doc.data().periods.length;
                  const monthlyRevenue = totalRevenue / periodLength;
                  setMonthlyRevenue(Number.isNaN(monthlyRevenue) ? 0 : Math.round(monthlyRevenue));
                  // Total costs
                  const totalCostsArray = doc.data().costsElements.map((element) => parseInt(element.value * element.periods.length));
                  const totalCosts = totalCostsArray.reduce((a, b) => {
                    return a + b;
                  }, 0);
                  console.log(totalCosts);
                  // const filteredTotalCosts =
                  //   typeof totalCosts == 'number' ? Math.round(totalCosts) : 0;
                  // console.log(filteredTotalCosts);
                  setTotalCosts(Number.isFinite(totalCosts) ? Math.round(totalCosts) : 0);
                  // Monthly costs
                  const monthlyCosts = totalCosts / periodLength;
                  setMonthlyCosts(Number.isFinite(monthlyCosts) ? Math.round(monthlyCosts) : 0);
                  // Gross profit
                  const grossProfit = totalRevenue - totalCosts;
                  setGrossProfit(Number.isFinite(grossProfit) ? Math.round(grossProfit) : 0);
                  // Net profit
                  const tax = parseInt(doc.data().tax);
                  const netProfit = grossProfit - (tax / 100) * grossProfit;
                  setNetProfit(Number.isFinite(netProfit) ? Math.round(netProfit) : 0);
                });
              });
          });
        });
    }
  }, [Router.query.project]);

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
    // const testArray = [];
    // const monthData = periods && periods.map(() => null);
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
    // Net worth
    console.log(revenueDataset);
    console.log(costsDataset);
    // const netWorth =
    //   revenueDataset.length !== 0 &&
    //   costsDataset.length !== 0 &&
    //   revenueDataset[0].data &&
    //   revenueDataset[0].data.map((revenueElement, index) => {
    //     if (revenueElement !== null && costsDataset[0].data[index] !== null) {
    //       const grossProfit = revenueElement - -costsDataset[0].data[index];
    //       return grossProfit - (tax / 100) * grossProfit;
    //     } else if (revenueElement !== null) {
    //       return revenueElement - (tax / 100) * revenueElement;
    //     } else if (costsDataset[0].data[index] !== null) {
    //       return costsDataset[0].data[index];
    //     } else {
    //       return null;
    //     }
    //   });
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
    console.log(netWorthArray);

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
              beginAtZero: true,
              font: {
                size: size.width < 680 ? 8 : 12,
              },
            },
            // beginAtZero: true,
          },
          //   defaultFontFamily: (Chart.defaults.global.defaultFontFamily =
          //     'Comfortaa'),
          //   scales: {
          //     yAxes: [
          //         {
          //           stacked: true,
          //           ticks: {
          //             beginAtZero: true,
          //           },
          //         },
          //       ],
          //       xAxes: [
          //         {
          //           stacked: true,
          //           ticks: {
          //             beginAtZero: true,
          //           },
          //         },
          //       ],
          //   },
        },
      },
    });
  }, [periods, revenueElements, costsElements, tax]);

  const onRevenueElementAdd = async () => {
    console.log(revenueElements);
    const wholeArray = [...revenueElements];
    const newRevenueElements = {
      title: '',
      type: 'One time',
      start: new Date(),
      end: new Date(),
      value: '',
      periods: [],
      color: 'rgba(244, 67, 54, 1)',
      index: uuidv4(),
    };
    wholeArray.push(newRevenueElements);
    console.log(wholeArray);
    setRevenueElements(wholeArray);

    await db
      .collection('projects')
      .doc(projectId)
      .collection('cashFlow')
      .doc(Router.query.project)
      .collection('inputs')
      .doc(documentId)
      .update({ revenueElements: wholeArray });
  };

  // Costs
  const onCostsElementAdd = async () => {
    console.log(costsElements);
    const wholeArray = [...costsElements];
    const newCostsElements = {
      title: '',
      type: 'One time',
      start: new Date(),
      end: new Date(),
      value: '',
      periods: [],
      color: 'rgba(244, 67, 54, 1)',
      index: uuidv4(),
    };
    wholeArray.push(newCostsElements);
    console.log(wholeArray);
    setCostsElements(wholeArray);

    await db
      .collection('projects')
      .doc(projectId)
      .collection('cashFlow')
      .doc(Router.query.project)
      .collection('inputs')
      .doc(documentId)
      .update({ costsElements: wholeArray });
  };

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const onStartDateUpdate = async (date) => {
    console.log(date);
    setStartDate(date);
    // Get months
    const newStartDate = format(date, 'yyyy-MM-dd');
    const newEndDate = format(endDate, 'yyyy-MM-dd');

    const startDater = moment(newStartDate);
    const endDater = moment(newEndDate);

    const dates = [];
    startDater.subtract(1, 'month'); //Substract one month to exclude endDater itself

    const month = moment(startDater); //clone the startDate
    while (month < endDater) {
      month.add(1, 'month');
      dates.push(month.format('MMM yyyy'));
    }
    // Local update
    setPeriods(dates);
    // Firebase update
    await db
      .collection('projects')
      .doc(projectId)
      .collection('cashFlow')
      .doc(Router.query.project)
      .collection('inputs')
      .doc(documentId)
      .update({ periods: dates, globalStartDate: date });
  };

  const onEndDateUpdate = async (date) => {
    setEndDate(date);
    // Get months
    const newStartDate = format(startDate, 'yyyy-MM-dd');
    const newEndDate = format(date, 'yyyy-MM-dd');

    const startDater = moment(newStartDate);
    const endDater = moment(newEndDate);

    const dates = [];
    startDater.subtract(1, 'month'); //Substract one month to exclude endDater itself
    // endDater.subtract(1, "month"); //Substract one month to exclude endDater itself

    const month = moment(startDater); //clone the startDate
    while (month < endDater) {
      month.add(1, 'month');
      dates.push(month.format('MMM yyyy'));
    }
    // Local update
    setPeriods(dates);
    // Firebase update
    await db
      .collection('projects')
      .doc(projectId)
      .collection('cashFlow')
      .doc(Router.query.project)
      .collection('inputs')
      .doc(documentId)
      .update({ periods: dates, globalEndDate: date });
  };

  console.log('Running');

  const revenueRef = useRef();
  const innerContainerRevenueRef = useRef();
  const dropDownIcon = useRef();
  const [isRevenueShown, setIsRevenueShown] = useState(false);

  const onRevenueShow = () => {
    const margins = size.width < 1280 ? 68 : 96;
    const revenueContainerHeight = innerContainerRevenueRef.current.offsetHeight + margins;
    console.log(innerContainerRevenueRef.current.offsetHeight);
    if (!isRevenueShown) {
      gsap.to(revenueRef.current, {
        height: revenueContainerHeight,
        duration: 1,
        ease: Linear,
      });
      gsap.to(dropDownIcon.current, {
        rotation: '90_cw',
        duration: 1,
        ease: Linear,
      });
      gsap.set(revenueRef.current, {
        height: '100%',
        delay: 1,
      });
      gsap.set(revenueRef.current, { overflow: 'visible', delay: 1 });
      setIsRevenueShown(true);
    } else if (isRevenueShown) {
      gsap.set(revenueRef.current, {
        height: revenueContainerHeight,
      });
      gsap.set(revenueRef.current, { overflow: 'hidden' });
      gsap.to(revenueRef.current, {
        height: 55,
        duration: 1,
        ease: Linear,
      });
      gsap.to(dropDownIcon.current, {
        rotation: '0_cw',
        duration: 1,
        ease: Linear,
      });
      setIsRevenueShown(false);
    }
  };

  // Costs
  const costsRef = useRef();
  const innerContainerCostsRef = useRef();
  const dropDownIconCosts = useRef();
  const [isCostsShown, setIsCostsShown] = useState(false);

  const onCostsShow = () => {
    const revenueContainerHeight = innerContainerCostsRef.current.offsetHeight + 96;
    console.log(innerContainerCostsRef.current.offsetHeight);
    if (!isCostsShown) {
      gsap.to(costsRef.current, {
        height: revenueContainerHeight,
        duration: 1,
        ease: Linear,
      });
      gsap.to(dropDownIconCosts.current, {
        rotation: '90_cw',
        duration: 1,
        ease: Linear,
      });
      gsap.set(costsRef.current, {
        height: '100%',
        delay: 1,
      });
      gsap.set(costsRef.current, { overflow: 'visible', delay: 1 });
      setIsCostsShown(true);
    } else if (isCostsShown) {
      gsap.set(costsRef.current, { overflow: 'hidden' });
      gsap.set(costsRef.current, {
        height: revenueContainerHeight,
      });
      gsap.to(costsRef.current, {
        height: 55,
        duration: 1,
        ease: Linear,
      });
      gsap.to(dropDownIconCosts.current, {
        rotation: '0_cw',
        duration: 1,
        ease: Linear,
      });
      setIsCostsShown(false);
    }
  };

  const handleOnDragEnd = async (result) => {
    if (!result.destination) return;
    const items = Array.from(revenueElements);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    console.log(result);
    setRevenueElements(items);
    // Firebase update
    await db
      .collection('projects')
      .doc(projectId)
      .collection('cashFlow')
      .doc(Router.query.project)
      .collection('inputs')
      .doc(documentId)
      .update({ revenueElements: items });
  };

  // Costs
  const costsHandleOnDragEnd = async (result) => {
    if (!result.destination) return;
    const items = Array.from(costsElements);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    console.log(result);
    setRevenueElements(items);
    // Firebase update
    await db
      .collection('projects')
      .doc(projectId)
      .collection('cashFlow')
      .doc(Router.query.project)
      .collection('inputs')
      .doc(documentId)
      .update({ costsElements: items });
  };

  // Tax
  const onTaxChange = async (value) => {
    // Local update
    setTax(value);
    // Firebase update
    await db
      .collection('projects')
      .doc(projectId)
      .collection('cashFlow')
      .doc(Router.query.project)
      .collection('inputs')
      .doc(documentId)
      .update({ tax: value });
  };

  const data = {
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
    startDate: format(startDate, 'MMM / yyyy'),
    endDate: format(endDate, 'MMM / yyyy'),
  };

  const size = { width: window.innerWidth };
  console.log((size.width > 860 && 30) || (size.width < 860 && size.width > 680 && 26) || (size.width < 680 && 22));

  return (
    <>
      <TippyMonster
        cashFlow
        contentClass="h-40 w-80 shadow-lg rounded-2xl bg-primary flex justify-center items-center"
        contentText="I'm glad you made it all the way here! Analyzing your startup's liquidity is one of the most important parts of planning your entire business. If you need any help, please feel free to contact our team! "
      />
      <ExitComponent />
      <div className="min-h-screen w-full relative flex flex-col items-center">
        <div className="w-full max-w-full relative mt-12 lg1Container:mt-16 mb-16 px-32">
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
                  onChange={(date) => onStartDateUpdate(date)}
                  dateFormat="MMMM yyyy"
                  showMonthYearPicker
                  maxDate={addYears(new Date(), 3)}
                  minDate={new Date()}
                />
              ) : (
                <DatePicker
                  selected={startDate}
                  onChange={(date) => onStartDateUpdate(date)}
                  dateFormat="MMMM yyyy"
                  showMonthYearPicker
                  maxDate={addYears(new Date(), 3)}
                  minDate={new Date()}
                  withPortal
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
                  onChange={(date) => onEndDateUpdate(date)}
                  dateFormat="MMMM yyyy"
                  showMonthYearPicker
                  maxDate={addYears(new Date(), 3)}
                  minDate={new Date()}
                />
              ) : (
                <DatePicker
                  selected={endDate}
                  onChange={(date) => onEndDateUpdate(date)}
                  dateFormat="MMMM yyyy"
                  showMonthYearPicker
                  maxDate={addYears(new Date(), 3)}
                  minDate={new Date()}
                  withPortal
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
                <input
                  id="tax-input"
                  value={tax}
                  onChange={(e) => onTaxChange(e.target.value)}
                  className="w-full bg-white focus:outline-none"
                />
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
            ref={revenueRef}
            style={{ height: 55 }}
            className="overflow-hidden relative w-full rounded-2xl bg-white dark:bg-background px-4 py-4 flex justify-center items-center mt-12 flex flex-wrap shadow-md"
          >
            <div className="w-full flex justify-between items-center">
              <div className="lgContainer:ml-2">
                <p className="text-sm lgContainer:text-base">Revenue</p>
              </div>
              <div className="lgContainer:mr-2 flex flex-nowrap items-center">
                <img
                  onClick={onRevenueElementAdd}
                  className="cursor-pointer"
                  src="/cash-flow/add.svg"
                  height={(size.width > 860 && 22) || (size.width < 860 && size.width > 680 && 18) || (size.width < 680 && 16)}
                  width={(size.width > 860 && 22) || (size.width < 860 && size.width > 680 && 18) || (size.width < 680 && 16)}
                />
                <img
                  ref={dropDownIcon}
                  onClick={onRevenueShow}
                  className="ml-2 cursor-pointer"
                  src="/cash-flow/dropdown.svg"
                  height={(size.width > 860 && 22) || (size.width < 860 && size.width > 680 && 18) || (size.width < 680 && 16)}
                  width={(size.width > 860 && 22) || (size.width < 860 && size.width > 680 && 18) || (size.width < 680 && 16)}
                />
              </div>
            </div>
            <div
              ref={innerContainerRevenueRef}
              className={`w-full ${
                size.width < 1120
                  ? 'text-sm mdContainer:text-base lg1Container:mx-8 lg1Container:mb-6 mt-4  bg-background rounded-2xl px-4 mdContainer:px-6 py-4'
                  : 'w-full mx-8 mb-6 mt-4  bg-background rounded-2xl px-4 mdContainer:px-6 py-4'
              }`}
            >
              {/* <hr className="text-primary w-full" /> */}
              <div
                style={{ fontSize: size.width < 520 && '0.6rem' }}
                className="w-full grid grid-cols-6fr items-center text-xs mdContainer:text-sm lg1Container:text-base"
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
                <DragDropContext onDragEnd={handleOnDragEnd}>
                  <Droppable droppableId="elements">
                    {(provided) => (
                      <div className="elements" {...provided.droppableProps} ref={provided.innerRef}>
                        {revenueElements &&
                          revenueElements.map((element, index) => {
                            console.log(element);
                            return (
                              <Draggable key={element.index} draggableId={element.index} index={index}>
                                {(provided) => (
                                  <RevenueElement
                                    provided={provided}
                                    setRevenueElements={setRevenueElements}
                                    mainDocument={mainDocument}
                                    projectId={projectId}
                                    documentId={documentId}
                                    revenueElements={revenueElements}
                                    element={element}
                                    index={index}
                                  />
                                )}
                              </Draggable>
                            );
                          })}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
              </div>
            </div>
          </div>
          {/* Costs */}
          <div
            ref={costsRef}
            style={{ height: 55 }}
            className="overflow-hidden relative w-full rounded-2xl bg-white dark:bg-background px-4 py-4 flex justify-center items-center mt-8 flex flex-wrap shadow-md"
          >
            <div className="w-full flex justify-between items-center">
              <div className="lgContainer:ml-2">
                <p className="text-sm lgContainer:text-base">Costs</p>
              </div>
              <div className="lgContainer:mr-2 flex flex-nowrap items-center">
                <img
                  onClick={onCostsElementAdd}
                  className="cursor-pointer"
                  src="/cash-flow/add.svg"
                  height={(size.width > 860 && 22) || (size.width < 860 && size.width > 680 && 18) || (size.width < 680 && 16)}
                  width={(size.width > 860 && 22) || (size.width < 860 && size.width > 680 && 18) || (size.width < 680 && 16)}
                />
                <img
                  ref={dropDownIconCosts}
                  onClick={onCostsShow}
                  className="ml-2 cursor-pointer"
                  src="/cash-flow/dropdown.svg"
                  height={(size.width > 860 && 22) || (size.width < 860 && size.width > 680 && 18) || (size.width < 680 && 16)}
                  width={(size.width > 860 && 22) || (size.width < 860 && size.width > 680 && 18) || (size.width < 680 && 16)}
                />
              </div>
            </div>
            <div
              ref={innerContainerCostsRef}
              className={`w-full ${
                size.width < 1120
                  ? 'text-sm mdContainer:text-base lg1Container:mx-8 lg1Container:mb-6 mt-4  bg-background rounded-2xl px-4 mdContainer:px-6 py-4'
                  : 'w-full mx-8 mb-6 mt-4  bg-background rounded-2xl px-4 mdContainer:px-6 py-4'
              }`}
            >
              {/* <hr className="text-primary w-full" /> */}
              <div className="w-full grid grid-cols-6fr items-center">
                <div>name</div>
                <div>type</div>
                <div>amount</div>
                <div>start</div>
                <div>end</div>
                <div></div>
              </div>
              <hr className="text-primary w-full" />
              <div className="h-full w-full rounded-2xl flex flex-wrap flex-col">
                <DragDropContext onDragEnd={costsHandleOnDragEnd}>
                  <Droppable droppableId="elements">
                    {(provided) => (
                      <div className="elements" {...provided.droppableProps} ref={provided.innerRef}>
                        {costsElements &&
                          costsElements.map((element, index) => {
                            console.log(element);
                            return (
                              <Draggable key={element.index} draggableId={element.index} index={index}>
                                {(provided) => (
                                  <CostsElement
                                    provided={provided}
                                    setCostsElements={setCostsElements}
                                    mainDocument={mainDocument}
                                    projectId={projectId}
                                    documentId={documentId}
                                    costsElements={costsElements}
                                    element={element}
                                    index={index}
                                  />
                                )}
                              </Draggable>
                            );
                          })}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CashFlowPage;
