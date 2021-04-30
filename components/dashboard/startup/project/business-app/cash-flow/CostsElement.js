import React, { useState, useEffect, useCallback, useRef } from 'react';
import Router from 'next/router';
import Image from 'next/image';
import debounce from '../../../../../../utils/helpers';
import { db } from '../../../../../../lib/firebase';
import gsap, { Linear } from 'gsap';
import DatePicker from 'react-datepicker';
import { addYears, format } from 'date-fns';
import moment from 'moment';
import { CirclePicker } from 'react-color';

import 'react-datepicker/dist/react-datepicker.css';

const CostsElement = ({ provided, setCostsElements, mainDocument, projectId, documentId, costsElements, element, index }) => {
  const [costsTitle, setCostsTitle] = useState('');
  const [costsType, setCostsType] = useState('');
  const [costsValue, setCostsValue] = useState('');

  useEffect(() => {
    setCostsTitle(element.title);
    setCostsType(element.type);
    setCostsValue(element.value);
    setBoxColor(element.color);
    setStartDate(element.start.seconds ? element.start.seconds * 1000 : element.start);
    setEndDate(element.end.seconds ? element.end.seconds * 1000 : element.end);
  }, []);

  const revenueElementsValueUpdate = (value, index, helper) => {
    helper == 'title' && setCostsTitle(value);
    helper == 'value' && setCostsValue(value);
    console.log(costsElements);
    const newElementsArray = [...costsElements];
    newElementsArray[index] = {
      title: helper == 'title' ? value : element.title,
      type: helper == 'type' ? value : element.type,
      start: helper == 'start' ? value : element.start,
      end: helper == 'end' ? value : element.end,
      value: helper == 'value' ? value : element.value,
      periods: helper == 'periods' ? value : element.periods,
      color: helper == 'color' ? value : element.color,
      index: helper == 'index' ? value : element.index,
    };
    dataUpdate(newElementsArray);
  };

  const dataUpdate = useCallback(
    debounce(async (newElementsArray) => {
      // console.log(costsElements);
      // const newElementsArray = [...costsElements];
      // setCostsTitle(newElementsArray);
      console.log(newElementsArray);
      // Database update
      await db
        .collection('projects')
        .doc(projectId)
        .collection('cashFlow')
        .doc(Router.query.project)
        .collection('inputs')
        .doc(documentId)
        // .set({
        //     budgetElements: mainDocument.budgetElements,
        //     costsElements: mainDocument.costsElements,
        //     pathName: mainDocument.pathName,
        //     projectId: mainDocument.projectId,
        //     uid: mainDocument.uid,
        //     costsElements: newElementsArray
        // })
        .update({ costsElements: newElementsArray });
    }, 300),
    []
  );

  useEffect(() => {
    console.log(costsElements);
  }, [costsElements]);

  const [show, setShow] = useState(false);
  const valueRef = useRef();
  const onTypeShow = () => {
    if (!show) {
      setShow(true);
      gsap.to(valueRef.current, { height: '40px', duration: 0.3, ease: Linear });
    } else if (show) {
      setShow(false);
      gsap.to(valueRef.current, { height: '20px', duration: 0.3, ease: Linear });
    }
  };

  const onValueOptionSelect = async (type) => {
    setCostsType(type);
    const newElementsArray = [...costsElements];
    newElementsArray[index] = {
      title: element.title,
      type: type,
      start: element.start,
      end: element.end,
      value: element.value,
      periods: element.periods,
      color: element.color,
      index: element.index,
    };
    // Database update
    await db
      .collection('projects')
      .doc(projectId)
      .collection('cashFlow')
      .doc(Router.query.project)
      .collection('inputs')
      .doc(documentId)
      .update({ costsElements: newElementsArray });
  };

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const onStartDateUpdate = async (date) => {
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
    // New elements array
    const newElementsArray = [...costsElements];
    newElementsArray[index] = {
      title: element.title,
      type: element.type,
      start: date,
      periods: dates,
      end: element.end,
      value: element.value,
      color: element.color,
      index: element.index,
      // period: element.period,
    };
    // Firebase update
    await db
      .collection('projects')
      .doc(projectId)
      .collection('cashFlow')
      .doc(Router.query.project)
      .collection('inputs')
      .doc(documentId)
      .update({ costsElements: newElementsArray });
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
    // New elements array
    const newElementsArray = [...costsElements];
    newElementsArray[index] = {
      title: element.title,
      type: element.type,
      start: element.start,
      periods: dates,
      end: date,
      value: element.value,
      color: element.color,
      index: element.index,
      // period: element.period,
    };
    // Firebase update
    await db
      .collection('projects')
      .doc(projectId)
      .collection('cashFlow')
      .doc(Router.query.project)
      .collection('inputs')
      .doc(documentId)
      .update({ costsElements: newElementsArray });
  };

  // const circleContainer = document.querySelector('.circle-picker');
  // circleContainer && element.index && circleContainer.setAttribute('id', `colorPicker${element.index}`);
  const circleContainerId = document.getElementById(`${element.index}colorPickerContainer`);
  const [circlePickerHelper, setCirclePickerHelper] = useState(false);
  const circlePickerRef = useRef();
  const onCirclePickerClick = () => {
    if (!circlePickerHelper) {
      setCirclePickerHelper(true);
      gsap.to(circleContainerId, {
        transform: 'scale(1)',
        transformOrigin: 'bottom right',
        duration: 1,
        ease: Linear,
      });
    } else if (circlePickerHelper) {
      setCirclePickerHelper(false);
      gsap.to(circleContainerId, {
        transform: 'scale(0)',
        transformOrigin: 'bottom right',
        duration: 1,
        ease: Linear,
      });
    }
  };

  const [boxColor, setBoxColor] = useState('');

  const onColorPick = async (color) => {
    setBoxColor(color);
    console.log(color);
    // New elements array
    const newElementsArray = [...costsElements];
    newElementsArray[index] = {
      title: element.title,
      type: element.type,
      start: element.start,
      periods: element.periods,
      end: element.end,
      value: element.value,
      index: element.index,
      color: color,
      // period: element.period,
    };
    // Firebase update
    await db
      .collection('projects')
      .doc(projectId)
      .collection('cashFlow')
      .doc(Router.query.project)
      .collection('inputs')
      .doc(documentId)
      .update({ costsElements: newElementsArray });
  };

  const onElementDelete = async (index) => {
    const newElements = costsElements.filter((element) => index !== element.index);
    // Firebase update
    await db
      .collection('projects')
      .doc(projectId)
      .collection('cashFlow')
      .doc(Router.query.project)
      .collection('inputs')
      .doc(documentId)
      .update({ costsElements: newElements });
  };

  return (
    <div>
      <div ref={provided.innerRef} {...provided.draggableProps} className="w-full grid grid-cols-6fr py-3 items-start text-sm">
        <input
          placeholder="name"
          className="w-4/5 bg-background focus:outline-none"
          value={costsTitle}
          onChange={(e) => revenueElementsValueUpdate(e.target.value, index, 'title')}
        />
        <div ref={valueRef} style={{ height: '20px' }} className="overflow-hidden flex flex-col flex-wrap">
          <div className="w-full flex flex-row flex-nowrap">
            <p className="cursor-default">{costsType}</p>
            <img onClick={onTypeShow} className="ml-2 cursor-pointer" src="/cash-flow/down-arrow.svg" height={14} width={14} />
          </div>
          {
            <div>
              {element.type === 'Recurring' ? (
                <p className="cursor-pointer" onClick={() => onValueOptionSelect('One time')}>
                  One time
                </p>
              ) : (
                <p className="cursor-pointer" onClick={() => onValueOptionSelect('Recurring')}>
                  Recurring
                </p>
              )}
            </div>
          }
        </div>
        <div>
          <input
            placeholder="amount"
            className="w-4/5 bg-background focus:outline-none"
            value={costsValue}
            onChange={(e) => revenueElementsValueUpdate(e.target.value, index, 'value')}
          />
        </div>
        <div>
          <DatePicker
            selected={startDate}
            onChange={(date) => onStartDateUpdate(date)}
            dateFormat="MMMM yyyy"
            showMonthYearPicker
            maxDate={addYears(new Date(), 3)}
            minDate={new Date()}
          />
        </div>
        <div>
          {element.type == 'Recurring' ? (
            <DatePicker
              selected={endDate}
              onChange={(date) => onEndDateUpdate(date)}
              dateFormat="MMMM yyyy"
              showMonthYearPicker
              maxDate={addYears(new Date(), 3)}
              minDate={new Date()}
            />
          ) : (
            <hr className="text-primarydark mr-8 mt-2" />
          )}
        </div>
        <div>
          <div className="relative justify-items-center items-center flex flex-nowrap">
            <div
              onClick={onCirclePickerClick}
              style={{
                backgroundColor: `${boxColor}`,
                height: '16px',
                width: '16px',
              }}
              className="rounded-3xl"
            >
              <div
                style={{ transform: 'scale(0)' }}
                id={`${element.index}colorPickerContainer`}
                className="colorPickerContainer grid grid-cols-6fr grid-rows-3fr bg-white w-min shadow rounded-2xl p-2"
              >
                <span
                  onClick={() => onColorPick('#f44336')}
                  className="rounded-3xl transform hover:scale-125 transition duration-100 ease-linear cursor-pointer"
                  style={{
                    height: '14px',
                    width: '14px',
                    backgroundColor: '#f44336',
                    margin: '6px',
                  }}
                ></span>
                <span
                  onClick={() => onColorPick('#e91e63')}
                  className="rounded-3xl transform hover:scale-125 transition duration-100 ease-linear cursor-pointer"
                  style={{
                    height: '14px',
                    width: '14px',
                    backgroundColor: '#e91e63',
                    margin: '6px',
                  }}
                ></span>
                <span
                  onClick={() => onColorPick('#9c27b0')}
                  className="rounded-3xl transform hover:scale-125 transition duration-100 ease-linear cursor-pointer"
                  style={{
                    height: '14px',
                    width: '14px',
                    backgroundColor: '#9c27b0',
                    margin: '6px',
                  }}
                ></span>
                <span
                  onClick={() => onColorPick('#673ab7')}
                  className="rounded-3xl transform hover:scale-125 transition duration-100 ease-linear cursor-pointer"
                  style={{
                    height: '14px',
                    width: '14px',
                    backgroundColor: '#673ab7',
                    margin: '6px',
                  }}
                ></span>
                <span
                  onClick={() => onColorPick('#3f51b5')}
                  className="rounded-3xl transform hover:scale-125 transition duration-100 ease-linear cursor-pointer"
                  style={{
                    height: '14px',
                    width: '14px',
                    backgroundColor: '#3f51b5',
                    margin: '6px',
                  }}
                ></span>
                <span
                  onClick={() => onColorPick('#2196f3')}
                  className="rounded-3xl transform hover:scale-125 transition duration-100 ease-linear cursor-pointer"
                  style={{
                    height: '14px',
                    width: '14px',
                    backgroundColor: '#2196f3',
                    margin: '6px',
                  }}
                ></span>
                <span
                  onClick={() => onColorPick('#03a9f4')}
                  className="rounded-3xl transform hover:scale-125 transition duration-100 ease-linear cursor-pointer"
                  style={{
                    height: '14px',
                    width: '14px',
                    backgroundColor: '#03a9f4',
                    margin: '6px',
                  }}
                ></span>
                <span
                  onClick={() => onColorPick('#00bcd4')}
                  className="rounded-3xl transform hover:scale-125 transition duration-100 ease-linear cursor-pointer"
                  style={{
                    height: '14px',
                    width: '14px',
                    backgroundColor: '#00bcd4',
                    margin: '6px',
                  }}
                ></span>
                <span
                  onClick={() => onColorPick('#009688')}
                  className="rounded-3xl transform hover:scale-125 transition duration-100 ease-linear cursor-pointer"
                  style={{
                    height: '14px',
                    width: '14px',
                    backgroundColor: '#009688',
                    margin: '6px',
                  }}
                ></span>
                <span
                  onClick={() => onColorPick('#4caf50')}
                  className="rounded-3xl transform hover:scale-125 transition duration-100 ease-linear cursor-pointer"
                  style={{
                    height: '14px',
                    width: '14px',
                    backgroundColor: '#4caf50',
                    margin: '6px',
                  }}
                ></span>
                <span
                  onClick={() => onColorPick('#8bc34a')}
                  className="rounded-3xl transform hover:scale-125 transition duration-100 ease-linear cursor-pointer"
                  style={{
                    height: '14px',
                    width: '14px',
                    backgroundColor: '#8bc34a',
                    margin: '6px',
                  }}
                ></span>
                <span
                  onClick={() => onColorPick('#cddc39')}
                  className="rounded-3xl transform hover:scale-125 transition duration-100 ease-linear cursor-pointer"
                  style={{
                    height: '14px',
                    width: '14px',
                    backgroundColor: '#cddc39',
                    margin: '6px',
                  }}
                ></span>
                <span
                  onClick={() => onColorPick('#ffeb3b')}
                  className="rounded-3xl transform hover:scale-125 transition duration-100 ease-linear cursor-pointer"
                  style={{
                    height: '14px',
                    width: '14px',
                    backgroundColor: '#ffeb3b',
                    margin: '6px',
                  }}
                ></span>
                <span
                  onClick={() => onColorPick('#ffc107')}
                  className="rounded-3xl transform hover:scale-125 transition duration-100 ease-linear cursor-pointer"
                  style={{
                    height: '14px',
                    width: '14px',
                    backgroundColor: '#ffc107',
                    margin: '6px',
                  }}
                ></span>
                <span
                  onClick={() => onColorPick('#ff9800')}
                  className="rounded-3xl transform hover:scale-125 transition duration-100 ease-linear cursor-pointer"
                  style={{
                    height: '14px',
                    width: '14px',
                    backgroundColor: '#ff9800',
                    margin: '6px',
                  }}
                ></span>
                <span
                  onClick={() => onColorPick('#ff5722')}
                  className="rounded-3xl transform hover:scale-125 transition duration-100 ease-linear cursor-pointer"
                  style={{
                    height: '14px',
                    width: '14px',
                    backgroundColor: '#ff5722',
                    margin: '6px',
                  }}
                ></span>
                <span
                  onClick={() => onColorPick('#795548')}
                  className="rounded-3xl transform hover:scale-125 transition duration-100 ease-linear cursor-pointer"
                  style={{
                    height: '14px',
                    width: '14px',
                    backgroundColor: '#795548',
                    margin: '6px',
                  }}
                ></span>
                <span
                  onClick={() => onColorPick('#607d8b')}
                  className="rounded-3xl transform hover:scale-125 transition duration-100 ease-linear cursor-pointer"
                  style={{
                    height: '14px',
                    width: '14px',
                    backgroundColor: '#607d8b',
                    margin: '6px',
                  }}
                ></span>
              </div>
            </div>
            <img {...provided.dragHandleProps} className="ml-4" src="/cash-flow/drag.svg" height={18} width={18} />
            <img
              onClick={() => onElementDelete(element.index)}
              className="ml-4 cursor-pointer"
              src="/cash-flow/remove.svg"
              height={18}
              width={18}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostsElement;
