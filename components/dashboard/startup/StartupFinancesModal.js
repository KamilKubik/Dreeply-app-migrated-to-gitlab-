import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { db } from '../../../lib/firebase';
import { useAuth } from '../../../lib/newAuth';
import ProgressBar from './ProgressBar';
import { useRouter } from 'next/router';
import gsap, { Linear } from 'gsap';
import TippyMonster from '../Tippy';
import NavbarTemplate from '../NavbarTemplate';
import TippyGuide from './TippyGuide';
import Cookies from 'js-cookie';
import ExitComponent from './ExitComponent';

const StartupProductModal = () => {
  const [projectId, setProjectId] = useState();

  const [startupCostsSection, setStartupCostsSection] = useState('');
  const [runningCostsSection, setRunningCostsSection] = useState('');
  const [financingSection, setFinancingSection] = useState('');

  const [onLoadOpacity3, setOnLoadOpacity3] = useState(true);

  console.log('startup costs - ', startupCostsSection);
  console.log('running costs - ', runningCostsSection);
  console.log('financing - ', financingSection);

  const { currentUser } = useAuth();
  const router = useRouter();
  const contentRef = useRef();

  // TIPPY
  const [tippyMonster, setTippyMonster] = useState(false);
  const [currentTippy, setCurrentTippy] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    // const username = e.target.username.value; // To jest ważny punkt, bo jeśli nie ma użytkownika, to url zdjęcia się nie zapisze!
    // if (!username || !fileUrl) {
    //   return;
    // }
    if (
      !startupCostsSection ||
      !runningCostsSection ||
      !financingSection ||
      startupCostsSection == 'blank' ||
      runningCostsSection == 'blank' ||
      financingSection == 'blank'
    ) {
      if (currentTippy) {
        setTimeout(() => {
          !tippyMonster && setTippyMonster(true);
        }, 1000);
        return;
      } else {
        !tippyMonster && setTippyMonster(true);
        return;
      }
    }
    gsap.to(contentRef.current, {
      autoAlpha: 0,
      duration: 1,
      ease: Linear.easeOut,
    });
    setTimeout(() => {
      router.push(`/dashboard/projects/${router.query.project}/startup-idea/business-model`);
    }, 1200);

    await db
      .collection('projects')
      .doc(projectId)
      .collection('startupIdea')
      .doc(router.query.project)
      .collection('inputs')
      .doc(documentId)
      .set(
        {
          startupCostsSectionData,
          runningCostsSectionData,
          financingSectionData,
          filledSection3: true,
        },
        { merge: true }
      );
    return;
  };

  // Data fetch
  const [loadingHelper, setLoadingHelper] = useState(false);
  const [documentId, setDocumentId] = useState('');
  useEffect(() => {
    const userUid = Cookies.get('uid');
    gsap.fromTo(contentRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1, ease: Linear.easeIn });
    if (userUid && router.query.project) {
      const data = db.collection('projects').where('uid', '==', userUid);
      data
        .where('projectName', '==', router.query.project)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach(async (doc1) => {
            setProjectId(doc1.data().projectId);

            db.collection('projects')
              .doc(doc1.data().projectId)
              .collection('startupIdea')
              .doc(router.query.project)
              .collection('inputs')
              .onSnapshot((serverUpdate) => {
                serverUpdate.docs.map((doc) => {
                  console.log(doc.data());
                  const data = doc.data();
                  setDocumentId(doc.id);
                  setProjectId(data.projectId);
                  setStartupCostsSection(data.startupCostsSectionData);
                  setRunningCostsSection(data.runningCostsSectionData);
                  setFinancingSection(data.financingSectionData);
                  setLoadingHelper(false);
                });
              });
          });
        });
    } else {
      console.log('Loading failed');
      setLoadingHelper(true);
    }

    return () => setOnLoadOpacity3(false);
  }, [loadingHelper, router.query.project]);

  const startupCostsSectionData = startupCostsSection ? startupCostsSection : 'blank';
  const runningCostsSectionData = runningCostsSection ? runningCostsSection : 'blank';
  const financingSectionData = financingSection ? financingSection : 'blank';

  const onProjectLeave = async (e) => {
    e.preventDefault();
    gsap.to(contentRef.current, {
      autoAlpha: 0,
      duration: 1,
      ease: Linear.easeOut,
    });
    setTimeout(() => {
      router.push(`/dashboard/projects/${router.query.project}/startup-idea/market`);
    }, 1200);
    await db
      .collection('projects')
      .doc(projectId)
      .collection('startupIdea')
      .doc(router.query.project)
      .collection('inputs')
      .doc(documentId)
      .set(
        {
          startupCostsSectionData,
          runningCostsSectionData,
          financingSectionData,
          filledSection3:
            startupCostsSection &&
            startupCostsSection != 'blank' &&
            runningCostsSection &&
            runningCostsSection != 'blank' &&
            financingSection &&
            financingSection != 'blank'
              ? true
              : (!startupCostsSection ||
                  !runningCostsSection ||
                  !financingSection ||
                  startupCostsSection == 'blank' ||
                  runningCostsSection == 'blank' ||
                  financingSection == 'blank') &&
                false,
        },
        { merge: true }
      );
    await db
      .collection('projects')
      .doc(projectId)
      .set(
        {
          startupCostsSectionData,
          runningCostsSectionData,
          financingSectionData,
          filledSection3:
            startupCostsSection &&
            startupCostsSection != 'blank' &&
            runningCostsSection &&
            runningCostsSection != 'blank' &&
            financingSection &&
            financingSection != 'blank'
              ? true
              : (!startupCostsSection ||
                  !runningCostsSection ||
                  !financingSection ||
                  startupCostsSection == 'blank' ||
                  runningCostsSection == 'blank' ||
                  financingSection == 'blank') &&
                false,
        },
        { merge: true }
      );
  };

  return (
    <>
      <ExitComponent />
      <TippyMonster
        setCurrentTippy={setCurrentTippy}
        emptyInput
        setTippyMonster={setTippyMonster}
        tippyMonster={tippyMonster}
        finances
        contentClass="h-36 w-80 shadow-lg rounded-2xl bg-primary flex justify-center items-center"
        contentText="They say that entrepreneurs plan for three generations. Isn't Amsterdam the right place to plan your finances "
        contentText1=" In this section, try to describe a spending model based on the growth of your startup "
      />
      <div ref={contentRef} className="h-full w-full relative flex flex-col items-center justify-center">
        <div className="w-full max-w-mdStarter lg:max-w-lgContainer 2xl:max-w-xlContainer relative pl-6 pr-6 mt-16 pb-24">
          <p className="text-primarydark text-2xl normal:text-3xl mt-2 pl-2 dark:text-background text-center">
            It is a high time to get into the numbers
          </p>
          <p className="text-gray text-base normal:text-lg pl-2 dark:text-background text-center">
            Startup idea creator will help you create the initial mockup of your future startup
            <img src="/gifs/rocket.gif" height={35} width={35} className="inline-block relative bottom-0.5" />
            {/* <img
                src='/emojis/palm.svg'
                height={35}
                width={35}
                className='inline-block relative bottom-2'
              /> */}
          </p>
          <ProgressBar onLoadOpacity3={onLoadOpacity3} />
          <div>
            <h1 className="text-primarydark text-lg mt-10 -mb-6 dark:text-background">Finances</h1>
          </div>
          <div className="w-full flex flex-col justify-center items-center border-r-6 rounded-2xl bg-white mt-8 dark:bg-background">
            <div className="relative flex flex-col h-full w-full flex px-8 pt-8 pb-4">
              <div>
                <label className="block text-sm font-medium flex justify-between items-end" htmlFor="startupCosts">
                  Costs of launching your startup idea.
                  <TippyGuide
                    contentClass="w-80 shadow-lg rounded-2xl bg-primary"
                    contentText={
                      ' Questions that can guide you:\n- How much money will it take to launch your startup?\n- How would you price the various components that are needed for launching your startup?'
                    }
                  />
                </label>
                <textarea
                  autoComplete="none"
                  id="startupCosts"
                  onChange={(e) => setStartupCostsSection(e.target.value)}
                  value={startupCostsSection == 'blank' ? '' : startupCostsSection}
                  className="pb-24 shadow appearance-none rounded w-full py-3 px-4 text-primarydark leading-tight focus:outline-none focus:shadow-outline text-sm bg-white rounded-2xl mt-2"
                  type="textarea"
                  placeholder={
                    '“What do you need to start a business? Three simple things: know your product better than anyone, know your customer, and have a burning desire to succeed.”\n\n~ Dave Thomas'
                  }
                />
              </div>
              <div className="mt-12">
                <label className="block text-sm font-medium flex justify-between items-end" htmlFor="runningCosts">
                  Costs of running your startup.
                  <TippyGuide
                    contentClass="w-80 shadow-lg rounded-2xl bg-primary"
                    contentText={
                      " Questions that can guide you:\n- What costs do you anticipate to keep your startup alive?\n- How much money will you spend on marketing campaigns / employee payouts / office rent / other overheads?\n- What will be the development costs of the different stages of your startup's growth?"
                    }
                  />
                </label>
                <textarea
                  autoComplete="none"
                  id="runningCosts"
                  onChange={(e) => setRunningCostsSection(e.target.value)}
                  value={runningCostsSection == 'blank' ? '' : runningCostsSection}
                  className="pb-24 px-3 shadow appearance-none rounded w-full py-3 px-4 text-primarydark leading-tight focus:outline-none focus:shadow-outline text-sm bg-white rounded-2xl mt-2"
                  type="textarea"
                  placeholder={
                    '“The most dangerous poison is the feeling of achievement. The antidote is to every evening think what can be done better tomorrow.”\n\n~ Ingvar Kamprad'
                  }
                />
              </div>
              <div className="mt-12 pb-8">
                <label className="block text-sm font-medium flex justify-between items-end" htmlFor="financing">
                  The way your startup idea will be funded.
                  <TippyGuide
                    contentClass="w-80 shadow-lg rounded-2xl bg-primary"
                    contentText={
                      ' Questions that can guide you:\n- How does your startup will be fund?\n- Who will bear the cost of launching your startup?\n- What are all of your startup financing sources?'
                    }
                  />
                </label>
                <textarea
                  autoComplete="none"
                  id="financing"
                  onChange={(e) => setFinancingSection(e.target.value)}
                  value={financingSection == 'blank' ? '' : financingSection}
                  className="pb-24 px-3 shadow appearance-none rounded w-full py-3 px-4 text-primarydark leading-tight focus:outline-none focus:shadow-outline text-sm bg-white rounded-2xl mt-2"
                  type="textarea"
                  placeholder={
                    '“Don’t worry about funding if you don’t need it. Today it’s cheaper to start a business than ever.”\n\n~ Noah Everett'
                  }
                />
              </div>
            </div>
            <hr style={{ width: '90%', color: '#a0aec0' }} />
            <div className="w-full grid grid-cols-3fr grid-flow-column px-8 py-4">
              <div className="flex items-center mt-1 text-primarydark text-sm">
                <button onClick={onProjectLeave}>Back</button>
              </div>
              <div className="flex items-center mt-1 justify-self-center">
                <p className="text-sm text-gray">Step 4 of 5</p>
              </div>
              <div className="flex justify-end items-center">
                <button
                  disabled={tippyMonster}
                  onClick={onSubmit}
                  className="hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-8 rounded-2xl dark:text-primarydark dark:border-primarydark"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartupProductModal;
