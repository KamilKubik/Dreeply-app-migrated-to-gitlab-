import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
// import debounce from 'lodash/debounce';
// import debounce from '../../../../../utils/helpers';
// import debounce from 'lodash/debounce';
import debounce from '../../../../../utils/helpers';
import { useStateWithPromise } from '../../../../../utils/useStateWithPromise';
import { useCustomState } from '../../../../../utils/useCustomState';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import '../../../../../node_modules/react-quill/dist/quill.snow.css';
import '../../../../../node_modules/react-quill/dist/quill.bubble.css';
import '../../../../../node_modules/react-quill/dist/quill.core.css';
import Image from 'next/image';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// import { useRechartToPng } from 'recharts-to-png';
import FileSaver from 'file-saver';
import ChartJsComponent from './Chartjs';
// import ReactChart from './ReachChart';
import gsap, { Power4, Linear } from 'gsap';
import HeaderComponent from './Header';
import TextElement from './Text';
import TableElement from './Table';
import SpacingElement from './Spacing';

const EditorInputElement = ({
  sectionTitleUpdate,
  tableUpdate,
  headerUpdate,
  reorderElements,
  projectId,
  addChart,
  addNewHeader,
  chartTypeUpdate,
  onDatasetLabel6Update,
  onDatasetLabel5Update,
  onDatasetLabel4Update,
  onDatasetLabel3Update,
  onDatasetLabel2Update,
  onDatasetLabel1Update,
  onDataset6Update,
  onDataset5Update,
  onDataset4Update,
  onDataset3Update,
  onDataset2Update,
  onDataset1Update,
  chartLabelsUpdate,
  chartValueUpdate,
  addNewChart,
  deleteParticularField,
  addNewField,
  fieldUpdate,
  sectionUpdate,
  selectedSection,
  selectedSectionIndex,
  sections,
}) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [id, setId] = useState('');
  const [currentIndex, setCurrentIndex] = useState(null);
  const [lastSectionIndex, setLastSectionIndex] = useState(null);
  // const [currentSectionIndex, setCurrentSectionIndex] = useState(null);

  const onLeftBarShow = () => {
    // --- VERSION 1 ---
    // gsap.to(document.getElementById('left-bar'), {width: '160px', transformOrigin: 'left', duration: 1, ease: Linear });
    // // EXIT
    // gsap.to(document.getElementById('exit'), { autoAlpha: 1, duration: 1, ease: Linear, delay: 2 })
    // // IMAGES
    // gsap.to(document.getElementById('left-element'), { scale: 1, duration: 1, ease: Linear, delay: 1 });
    // gsap.to(document.getElementById('left-element1'), { scale: 1, duration: 1, ease: Linear, delay: 1 });
    // gsap.to(document.getElementById('left-element2'), { scale: 1, duration: 1, ease: Linear, delay: 1 });
    // // TEXT
    // gsap.to(document.getElementById('left-text'), { scale: 1, duration: 1, ease: Linear, delay: 1 });
    // gsap.to(document.getElementById('left-text1'), { scale: 1, duration: 1, ease: Linear, delay: 1 });
    // gsap.to(document.getElementById('left-text2'), { scale: 1, duration: 1, ease: Linear, delay: 1 });

    // --- VERSION 2 ---
    // CONTAINERS
    gsap.to(document.getElementById('container'), { autoAlpha: 1 });
    gsap.to(document.getElementById('container1'), { autoAlpha: 1 });
    gsap.to(document.getElementById('container2'), { autoAlpha: 1 });
    gsap.to(document.getElementById('container3'), { autoAlpha: 1 });
    gsap.to(document.getElementById('container4'), { autoAlpha: 1 });
    // LEFT BAR
    gsap.to(document.getElementById('left-bar'), { height: '100vh', transformOrigin: 'top', duration: 2, ease: Linear });
    // EXIT
    gsap.to(document.getElementById('exit'), { autoAlpha: 1, duration: 1, ease: Linear, delay: 2 });
    // IMAGES
    gsap.to(document.getElementById('left-element'), {
      zIndex: 50,
      scale: 1,
      transformOrigin: 'top',
      duration: 1,
      ease: Linear,
      delay: 0.3,
    });
    gsap.to(document.getElementById('left-element1'), {
      zIndex: 50,
      scale: 1,
      transformOrigin: 'top',
      duration: 1,
      ease: Linear,
      delay: 0.5,
    });
    gsap.to(document.getElementById('left-element2'), {
      zIndex: 50,
      scale: 1,
      transformOrigin: 'top',
      duration: 1,
      ease: Linear,
      delay: 0.7,
    });
    gsap.to(document.getElementById('left-element3'), {
      zIndex: 50,
      scale: 1,
      transformOrigin: 'top',
      duration: 1,
      ease: Linear,
      delay: 0.9,
    });
    gsap.to(document.getElementById('left-element4'), {
      zIndex: 50,
      scale: 1,
      transformOrigin: 'top',
      duration: 1,
      ease: Linear,
      delay: 1.1,
    });
    // TEXT
    gsap.to(document.getElementById('left-text'), { zIndex: 50, scale: 1, transformOrigin: 'top', duration: 1, ease: Linear, delay: 0.3 });
    gsap.to(document.getElementById('left-text1'), { zIndex: 50, scale: 1, transformOrigin: 'top', duration: 1, ease: Linear, delay: 0.5 });
    gsap.to(document.getElementById('left-text2'), { zIndex: 50, scale: 1, transformOrigin: 'top', duration: 1, ease: Linear, delay: 0.7 });
    gsap.to(document.getElementById('left-text3'), { zIndex: 50, scale: 1, transformOrigin: 'top', duration: 1, ease: Linear, delay: 0.9 });
    gsap.to(document.getElementById('left-text4'), { zIndex: 50, scale: 1, transformOrigin: 'top', duration: 1, ease: Linear, delay: 1.1 });
  };

  const deleteField = (index) => {
    deleteParticularField(index);
  };

  const updateTitle = async (title) => {
    await setTitle(title);
    onSectionTitleUpdate(title);
  };

  const onSectionTitleUpdate = useCallback(
    debounce((data) => {
      sectionTitleUpdate(data);
    }, 500),
    []
  );

  const labelUpdate = useCallback(
    debounce(async (data) => {
      const currentSectionIndex = await data.selSection.fields.findIndex((field) => field.index == data.index);
      console.log(data);
      chartLabelsUpdate(data, data.index, currentSectionIndex, data.selSection);
    }, 500),
    []
  );

  // Dataset1 update
  const dataset1Update = useCallback(
    debounce(async (data) => {
      const currentSectionIndex = await data.selSection.fields.findIndex((field) => field.index == data.index);
      console.log(data);
      onDataset1Update(data, data.index, currentSectionIndex, data.selSection);
    }, 500),
    []
  );

  // Dataset2 update
  const dataset2Update = useCallback(
    debounce(async (data) => {
      const currentSectionIndex = await data.selSection.fields.findIndex((field) => field.index == data.index);
      console.log(data);
      onDataset2Update(data, data.index, currentSectionIndex, data.selSection);
    }, 500),
    []
  );

  // Dataset3 update
  const dataset3Update = useCallback(
    debounce(async (data) => {
      const currentSectionIndex = await data.selSection.fields.findIndex((field) => field.index == data.index);
      console.log(data);
      onDataset3Update(data, data.index, currentSectionIndex, data.selSection);
    }, 500),
    []
  );

  // Dataset4 update
  const dataset4Update = useCallback(
    debounce(async (data) => {
      const currentSectionIndex = await data.selSection.fields.findIndex((field) => field.index == data.index);
      console.log(data);
      onDataset4Update(data, data.index, currentSectionIndex, data.selSection);
    }, 500),
    []
  );

  // Dataset5 update
  const dataset5Update = useCallback(
    debounce(async (data) => {
      const currentSectionIndex = await data.selSection.fields.findIndex((field) => field.index == data.index);
      console.log(data);
      onDataset5Update(data, data.index, currentSectionIndex, data.selSection);
    }, 500),
    []
  );

  // Dataset6 update
  const dataset6Update = useCallback(
    debounce(async (data) => {
      const currentSectionIndex = await data.selSection.fields.findIndex((field) => field.index == data.index);
      console.log(data);
      onDataset6Update(data, data.index, currentSectionIndex, data.selSection);
    }, 500),
    []
  );

  // Dataset labels update
  const datasetLabel1Update = useCallback(
    debounce(async (data) => {
      const currentSectionIndex = await data.selSection.fields.findIndex((field) => field.index == data.index);
      console.log(data);
      onDatasetLabel1Update(data, data.index, currentSectionIndex, data.selSection);
    }, 500),
    []
  );

  const datasetLabel2Update = useCallback(
    debounce(async (data) => {
      const currentSectionIndex = await data.selSection.fields.findIndex((field) => field.index == data.index);
      console.log(data);
      onDatasetLabel2Update(data, data.index, currentSectionIndex, data.selSection);
    }, 500),
    []
  );

  const datasetLabel3Update = useCallback(
    debounce(async (data) => {
      const currentSectionIndex = await data.selSection.fields.findIndex((field) => field.index == data.index);
      console.log(data);
      onDatasetLabel3Update(data, data.index, currentSectionIndex, data.selSection);
    }, 500),
    []
  );

  const datasetLabel4Update = useCallback(
    debounce(async (data) => {
      const currentSectionIndex = await data.selSection.fields.findIndex((field) => field.index == data.index);
      console.log(data);
      onDatasetLabel4Update(data, data.index, currentSectionIndex, data.selSection);
    }, 500),
    []
  );

  const datasetLabel5Update = useCallback(
    debounce(async (data) => {
      const currentSectionIndex = await data.selSection.fields.findIndex((field) => field.index == data.index);
      console.log(data);
      onDatasetLabel5Update(data, data.index, currentSectionIndex, data.selSection);
    }, 500),
    []
  );

  const datasetLabel6Update = useCallback(
    debounce(async (data) => {
      const currentSectionIndex = await data.selSection.fields.findIndex((field) => field.index == data.index);
      console.log(data);
      onDatasetLabel6Update(data, data.index, currentSectionIndex, data.selSection);
    }, 500),
    []
  );

  useEffect(() => {
    setCurrentIndex(null);
    // selectedSection.fields możesz wyrzucić
  }, [selectedSection.id, selectedSection.fields]);

  useEffect(() => {
    if (selectedSection.id !== id) {
      setTitle(selectedSection.title);
      // setText(selectedSection.body);
      // setId(selectedSection.id);
    }
  }, [selectedSection.id]);

  // useEffect(() => {
  //   setCurrentIndex()
  // }, [currentIndex])
  // console.log(selectedSection);
  // console.log(currentIndex);

  console.log(selectedSection);

  // const [png, ref] = useRechartToPng();
  // const fn = useCallback(async () => {
  //   FileSaver.saveAs(png, 'myChart.png');
  //   console.log(png);
  // }, [png]);

  const containerRef = useRef();

  console.log('Selected section --> ', selectedSection);

  // Elements manager
  const [elementsArray, setElementsArray] = useState();

  useEffect(() => {
    // elementsArray !== selectedSection.fields
    if (!elementsArray || elementsArray !== selectedSection.fields) {
      console.log('Yeeeeep');
      setElementsArray(selectedSection.fields);
    }
  }, [selectedSection]);
  console.log('Elements array after reorder ==> ', elementsArray);
  console.log('Selected section after reorder ==> ', selectedSection);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(elementsArray);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    console.log(result);
    setElementsArray(items);
    reorderElements(items);
  };

  console.log(elementsArray);

  return (
    <>
      {/* <ChartComponent /> */}
      <div className="relative flex flex-col h-full w-full flex px-2 py-2 rounded-2xl bg-white dark:bg-background mt-1">
        <div>
          <div className="w-full px-3 bg-white py-3 rounded-2xl flex items-center justify-between">
            <input
              className="text-lg bg-white focus:outline-none w-3/5 text-primarydark"
              placeholder="Section title..."
              value={title ? title : ''}
              onChange={(e) => updateTitle(e.target.value)}
            />
            {/* <div className="flex justify-end items-center w-2/5">
              <p className="text-primarydark text-basae mr-4 pl-2">New element</p>
              <img onClick={onLeftBarShow} src="/chart/pencil.svg" height={40} width={40} />
            </div> */}
          </div>
        </div>
      </div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="elements">
          {(provided) => (
            <div
              className="elements"
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="w-full flex justify-center items-center flex-col"
            >
              {elementsArray &&
                elementsArray.length !== 0 &&
                elementsArray.map((field, currentIndex) => {
                  console.log('FIELD --> ', field);
                  return (
                    <Draggable key={field.index} draggableId={field.index} index={currentIndex}>
                      {(provided) =>
                        (field.type == 'text' && (
                          <TextElement
                            fieldUpdate={fieldUpdate}
                            currentIndex={currentIndex}
                            selectedSection={selectedSection}
                            provided={provided}
                            field={field}
                            deleteField={deleteField}
                            setCurrentIndex={setCurrentIndex}
                          />
                        )) ||
                        (field.type == 'chart' && (
                          <ChartJsComponent
                            provided={provided}
                            projectId={projectId}
                            addChart={addChart}
                            chartTypeUpdate={chartTypeUpdate}
                            currentIndex={currentIndex}
                            deleteField={deleteField}
                            containerRef={containerRef}
                            datasetLabel6Update={datasetLabel6Update}
                            datasetLabel5Update={datasetLabel5Update}
                            datasetLabel4Update={datasetLabel4Update}
                            datasetLabel3Update={datasetLabel3Update}
                            datasetLabel2Update={datasetLabel2Update}
                            datasetLabel1Update={datasetLabel1Update}
                            dataset6Update={dataset6Update}
                            dataset5Update={dataset5Update}
                            dataset4Update={dataset4Update}
                            dataset3Update={dataset3Update}
                            dataset2Update={dataset2Update}
                            dataset1Update={dataset1Update}
                            labelUpdate={labelUpdate}
                            chartLabelsUpdate={chartLabelsUpdate}
                            field={field}
                            selectedSection={selectedSection}
                            index={field.index}
                            chartValueUpdate={chartValueUpdate}
                            selectedSection={selectedSection}
                          />
                        )) ||
                        (field.type == 'header' && (
                          <HeaderComponent
                            fieldUpdate={fieldUpdate}
                            currentIndex={currentIndex}
                            headerUpdate={headerUpdate}
                            provided={provided}
                            deleteField={deleteField}
                            field={field}
                          />
                        )) ||
                        (field.type == 'table' && (
                          <TableElement
                            currentIndex={currentIndex}
                            tableUpdate={tableUpdate}
                            deleteField={deleteField}
                            provided={provided}
                            field={field}
                          />
                        )) ||
                        (field.type == 'spacing' && <SpacingElement deleteField={deleteField} provided={provided} field={field} />)
                      }
                    </Draggable>
                  );
                })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default EditorInputElement;
