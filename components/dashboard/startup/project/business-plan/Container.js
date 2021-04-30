import React, { useEffect, useMemo, useRef, useState } from 'react';
import gsap, { Power4 } from 'gsap';
import NavbarTemplate from '../../../NavbarTemplate';
import SectionManager from './SectionManager';
import fetcher from '../../../../../utils/fetcher';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useAuth } from '../../../../../lib/newAuth';
import firebase, { db } from '../../../../../lib/firebase';
import InputElement from './InputElement';
import DisplayedData from './DisplayedData';
import { v4 as uuidv4 } from 'uuid';

const BusinessPlanContainer = () => {
  const [activeSection, setActiveSection] = useState('Startup overview');

  const [businessPlan, setBusinessPlan] = useState();
  const [projectId, setProjectId] = useState();
  const containerRef = useRef();

  const [particularSection, setParticularSection] = useState();

  // PROJECT
  const [ProjectPathName, setProjectPathName] = useState();

  const { currentUser } = useAuth();
  const router = useRouter();

  const [sections, setSections] = useState();
  const [sections1, setSections1] = useState();

  const ref = db.collection('currentBusinessPlan');

  useEffect(() => {
    // PROJECT ID
    // const gcp = async () => {
    //   // const gcpdata = await db.collection('currentProject').doc('uid', '==', currentUser.uid).get();
    //   await db
    //     .collection('projects')
    //     .where('uid', '==', currentUser.uid)
    //     .where('projectName', '==', router.query.project)
    //     .get()
    //     .then((querySnapshot) => {
    //       querySnapshot.forEach((doc) => {
    //         return setProjectId(doc.data().projectId);
    //       });
    //     });
    // };

    // gcp()

    ref
      .doc(currentUser.uid)
      .collection('data')
      .where('name', '==', activeSection)
      .onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          items.push(...doc.data().values);
          // setSections1(doc.data());
        });
        setSections1(items);
      });

    // GSAP
    gsap.fromTo(
      containerRef.current,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 2, ease: Power4.easeOut }
    );
  }, [activeSection]);

  // useEffect(() => {
  //   // PARTICULAR SECTION
  //   const item = sections && sections.find((doc) => doc.name == activeSection);
  //   setParticularSection(item);
  // }, [activeSection]);

  console.log('CONTAINER SECTIONS - ', sections);

  const doingMyBest = () => {
    const { data } = useSWR(
      currentUser && projectId
        ? [`/api/business-plan/${projectId}`, currentUser.token]
        : null,
      fetcher
    );
    // return setBusinessPlan(data);
    // console.log(data);
    useMemo(
      () =>
        data &&
        data.map((project) => {
          // useMemo jest po to, żeby nie było rerenderów (w sensie wyskakuje wtedy błąd, że za dużo renderowań)
          setBusinessPlan(project);
          setProjectPathName(project.pathName);
        }),
      [data]
    );
  };
  doingMyBest();

  // console.log('PROJECT ID --> ', projectId);
  console.log('OFFICIAL DATA --> ', businessPlan);
  // console.log('PROJECT PATHNAME FROM SWR --> ', ProjectPathName);

  console.log('ACTIVE SECTION', activeSection);
  console.log('PARTICULAR SECTION --> ', particularSection);
  const [dataFromInput, setDataFromInput] = useState();
  const [changedData, setChangedData] = useState();
  console.log('DATA FROM INPUT --> ', dataFromInput);

  // ON ADD NEW INPUT
  const addNewInput = async () => {
    // Add new section to data collection

    const dataToUpload = dataFromInput ? dataFromInput : { inputs: [] };
    //   setSections1(null);

    //   await sections1.sections.push({ blocks: [] });

    //   await db
    //     .collection('currentBusinessPlan')
    //     .doc(currentUser.uid)
    //     .collection('data')
    //     .doc(activeSection)
    //     .update({
    //       sections1
    //     })
    // };
    setSections1(null);

    await db
      .collection('currentBusinessPlan')
      .doc(currentUser.uid)
      .collection('data')
      .doc(activeSection)
      .update({
        values: firebase.firestore.FieldValue.arrayUnion({
          blocks: [],
          id: uuidv4(),
          type: 'textarea',
        }),
      });
  };

  console.log('SECTIONS1', sections1);

  return (
    <>
      <NavbarTemplate>
        <div
          ref={containerRef}
          className='min-h-screen w-full relative flex flex-col items-center'
        >
          <div className='w-full max-w-full relative mt-16 px-32'>
            <div className='grid grid-cols-2 grid-rows-1 grid-flow-col'>
              <div className='flex items-center'>
                <svg
                  height='30'
                  width='30'
                  className='fill-current text-primary dark:text-primarydark'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 128 128'
                >
                  <title>Landing Success</title>
                  <g id='Landing_Success' data-name='Landing Success'>
                    <path
                      className='cls-1'
                      d='M109.3,90.1A46,46,0,0,0,65,36V20.08c1.78-.62,7.21-2.14,12.57.23a19.33,19.33,0,0,0,14.82,0c.87-.38.61.31.61-17.93a1,1,0,0,0-1.43-.93c-.07,0-6.69,2.87-13.18,0A19.41,19.41,0,0,0,65,.93,1,1,0,0,0,63,1V36a45.86,45.86,0,0,0-28.66,10.8C16.18,40.48,4,40,.79,45.51-2.29,50.86,3.94,59.3,10,65.68A11,11,0,0,0,18,83c.81,38.41,46.08,59.2,75.66,34.21,8.53,3,29,9.15,33.55,1.31C130.39,113,123.86,102.65,109.3,90.1ZM77.59,3.31A19.39,19.39,0,0,0,91,3.83V18.68c-1.79.62-7.22,2.13-12.57-.23A19.19,19.19,0,0,0,65,17.93V3.08C66.81,2.46,72.24,1,77.59,3.31ZM65,45v-7c39.69.91,58,50.27,28.21,76.81C71.32,107,46,92.66,27.77,78.64a11,11,0,0,0-3.2-16.13A43.88,43.88,0,0,1,63,38.06V45A1,1,0,0,0,65,45ZM32.55,48.36a46.21,46.21,0,0,0-9.83,13.28,10.93,10.93,0,0,0-11.4,2.47C-8.39,43.23,5.23,39.08,32.55,48.36ZM10,72a9,9,0,1,1,9,9A9,9,0,0,1,10,72Zm10,11a11,11,0,0,0,6.34-2.82c18.45,14.21,43.45,28.35,65.05,36.22C63,139.16,20.83,119.1,20.05,83Zm105.4,34.5c-2.51,4.35-14,3.62-30-1.85a45.61,45.61,0,0,0,13.42-23.21C121.59,103.58,128,113.12,125.45,117.47Z'
                    />
                  </g>
                </svg>
                <p className='text-primarydark text-2xl mt-2 pl-2 dark:text-background'>
                  Business plan
                </p>
              </div>
              <div className='flex justify-end mt-4'>
                <button className='hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-8 rounded-2xl mt-2 dark:text-primarydark dark:border-primarydark'>
                  Settings
                </button>
              </div>
            </div>
            <div>
              <h1 className='text-secondary text-md text-gray'>
                Create your business plan any way you want
              </h1>
            </div>
            {/* SECTIONS */}
            <div className='grid grid-cols-8fr grid-flow-col'>
              <div className='col-start-1 col-end-7 w-full mt-12'>
                <h1 className='text-primarydark text-base dark:text-background'>
                  Manage your input
                </h1>
                <div className='relative flex flex-col h-full w-full flex px-8 pt-8 pb-4 rounded-2xl bg-white dark:bg-background mt-1'>
                  {/* ACTIVE SECTION */}
                  {sections1 &&
                    sections1.map((section) => {
                      return (
                        <div>
                          <p>Sections below:</p>
                          <InputElement
                            setDataFromInput={setDataFromInput}
                            data={section}
                          />
                        </div>
                      );
                    })}
                  <div>
                    <button onClick={addNewInput}>Add Item</button>
                  </div>
                </div>
              </div>
              <SectionManager
                setSections1={setSections1}
                setDataFromInput={setDataFromInput}
                dataFromInput={dataFromInput}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              />
            </div>
          </div>
        </div>
      </NavbarTemplate>
    </>
  );
};

export default BusinessPlanContainer;
