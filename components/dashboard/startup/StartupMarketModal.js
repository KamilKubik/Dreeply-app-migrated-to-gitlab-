import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { db } from '../../../lib/firebase';
import { useAuth } from '../../../lib/newAuth';
import ProgressBar from './ProgressBar';
import { useRouter } from 'next/router';
import gsap, { Linear } from 'gsap';
import NavbarTemplate from '../NavbarTemplate';
import TippyMonster from '../Tippy';
import TippyGuide from './TippyGuide';
import Cookies from 'js-cookie';
import ExitComponent from './ExitComponent';

const StartupMarketModal = () => {
  const [projectId, setProjectId] = useState();

  const [marketOverviewSection, setMarketOverviewSection] = useState('');
  const [competitorsSection, setCompetitorsSection] = useState('');
  const [targetCustomersSection, setTargetCustomersSection] = useState('');
  const [competitionDistinguishSection, setCompetitionDistinguishSection] = useState('');

  const [onLoadOpacity2, setOnLoadOpacity2] = useState(true);

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
      !marketOverviewSection ||
      !competitorsSection ||
      !targetCustomersSection ||
      !competitionDistinguishSection ||
      marketOverviewSection == 'blank' ||
      competitorsSection == 'blank' ||
      targetCustomersSection == 'blank' ||
      competitionDistinguishSection == 'blank'
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
      router.push(`/dashboard/projects/${router.query.project}/startup-idea/finances`);
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
          marketOverviewSectionData,
          competitorsSectionData,
          targetCustomersSectionData,
          competitionDistinguishSectionData,
          filledSection2: true,
        },
        { merge: true }
      );
    // await db.collection('projects').doc(projectId).set(
    //   {
    //     marketOverviewSectionData,
    //     competitorsSectionData,
    //     targetCustomersSectionData,
    //     competitionDistinguishSectionData,
    //     filledSection2: true,
    //   },
    //   { merge: true }
    // );
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
                  setMarketOverviewSection(data.marketOverviewSectionData);
                  setCompetitorsSection(data.competitorsSectionData);
                  setTargetCustomersSection(data.targetCustomersSectionData);
                  setCompetitionDistinguishSection(data.competitionDistinguishSectionData);
                  setLoadingHelper(false);
                });
              });
          });
        });
    } else {
      console.log('Loading failed');
      setLoadingHelper(true);
    }
    return () => setOnLoadOpacity2(false);
  }, [loadingHelper, router.query.project]);

  const marketOverviewSectionData = marketOverviewSection ? marketOverviewSection : 'blank';
  const competitorsSectionData = competitorsSection ? competitorsSection : 'blank';
  const targetCustomersSectionData = targetCustomersSection ? targetCustomersSection : 'blank';
  const competitionDistinguishSectionData = competitionDistinguishSection ? competitionDistinguishSection : 'blank';

  const onProjectLeave = async (e) => {
    e.preventDefault();
    gsap.to(contentRef.current, {
      autoAlpha: 0,
      duration: 1,
      ease: Linear.easeOut,
    });
    setTimeout(() => {
      router.push(`/dashboard/projects/${router.query.project}/startup-idea/product`);
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
          marketOverviewSectionData,
          competitorsSectionData,
          targetCustomersSectionData,
          competitionDistinguishSectionData,
          filledSection2:
            marketOverviewSection &&
            marketOverviewSection != 'blank' &&
            targetCustomersSection &&
            targetCustomersSection != 'blank' &&
            competitionDistinguishSection &&
            competitionDistinguishSection != 'blank'
              ? true
              : (!marketOverviewSection ||
                  !competitorsSection ||
                  !targetCustomersSection ||
                  !competitionDistinguishSection ||
                  marketOverviewSection == 'blank' ||
                  competitorsSection == 'blank' ||
                  targetCustomersSection == 'blank' ||
                  competitionDistinguishSection == 'blank') &&
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
        market
        contentClass="h-40 w-96 shadow-lg rounded-2xl bg-primary flex justify-center items-center"
        contentText="Did you know that as humans, we have only quarried 20% of the ocean floor "
        contentText1=" Remember that lack of in-depth market insights, often contributes to the downfall of many startups. In this section, try to analyze the market you would like to conquer "
      />
      <div ref={contentRef} className="h-full w-full relative flex flex-col items-center justify-center">
        <div className="w-full max-w-mdStarter lg:max-w-lgContainer 2xl:max-w-xlContainer relative pl-6 pr-6 mt-16 pb-24">
          <p className="text-primarydark text-2xl normal:text-3xl mt-2 pl-2 dark:text-background text-center">
            In-depth market analysis is the key to success
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
          <ProgressBar onLoadOpacity2={onLoadOpacity2} />
          <div>
            <h1 className="text-primarydark text-lg mt-10 -mb-6 dark:text-background">Market analysis</h1>
          </div>
          <div className="w-full flex flex-col justify-center items-center border-r-6 rounded-2xl bg-white mt-8 dark:bg-background">
            <div className="relative flex flex-col h-full w-full flex px-8 pt-8 pb-4">
              <div>
                <label className="block text-sm font-medium flex justify-between items-end" htmlFor="marketOverview">
                  Insight into the market you would like to conquer.
                  <TippyGuide
                    contentClass="w-80 shadow-lg rounded-2xl bg-primary"
                    contentText={
                      ' Questions that can guide you:\n- What does the market you intend to launch your startup in look like and how big is it?\n- What is the current state of the industry you intend to operate in and what direction is it headed?\n- What are the trends and projections in the market you would like to conquer?'
                    }
                  />
                </label>
                <textarea
                  autoComplete="none"
                  id="marketOverview"
                  onChange={(e) => setMarketOverviewSection(e.target.value)}
                  value={marketOverviewSection == 'blank' ? '' : marketOverviewSection}
                  className="pb-24 shadow appearance-none rounded w-full py-3 px-4 text-primarydark leading-tight focus:outline-none focus:shadow-outline text-sm bg-white rounded-2xl mt-2"
                  type="textarea"
                  placeholder={'“Make every detail perfect and limit the number of details to perfect.”\n\n~ Jack Dorsey'}
                />
              </div>
              <div className="mt-12">
                <label className="block text-sm font-medium flex justify-between items-end" htmlFor="competitors">
                  Major competitors in your upcoming market.
                  <TippyGuide
                    contentClass="w-80 shadow-lg rounded-2xl bg-primary"
                    contentText={
                      ' Questions that can guide you:\n- Who are the major competitors you will compete with?\n- How do your main competitors rank in the market?\n- What strategies/business models are your competitors using\n- What are the strengths and weaknesses of your competitors?'
                    }
                  />
                </label>
                <textarea
                  autoComplete="none"
                  id="competitors"
                  onChange={(e) => setCompetitorsSection(e.target.value)}
                  value={competitorsSection == 'blank' ? '' : competitorsSection}
                  className="pb-24 px-3 shadow appearance-none rounded w-full py-3 px-4 text-primarydark leading-tight focus:outline-none focus:shadow-outline text-sm bg-white rounded-2xl mt-2"
                  type="textarea"
                  placeholder={'“Get big quietly, so you don’t tip off potential competitors.”\n\n~ Chris Dixon'}
                />
              </div>
              <div className="mt-12 pb-8">
                <label className="block text-sm font-medium flex justify-between items-end" htmlFor="distinguish">
                  Factors that differentiate your product from the competition.
                  <TippyGuide
                    contentClass="w-80 shadow-lg rounded-2xl bg-primary"
                    contentText={
                      " Questions that can guide you:\n- What makes your product stand out from the competition?\n- Why will customers abandon a competitor's product in favor of yours?\n- How will you exploit your competitors strengths and weaknesses to gain an advantage in the marketplace?"
                    }
                  />
                </label>
                <textarea
                  autoComplete="none"
                  id="distinguish"
                  onChange={(e) => setCompetitionDistinguishSection(e.target.value)}
                  value={competitionDistinguishSection == 'blank' ? '' : competitionDistinguishSection}
                  className="pb-24 px-3 shadow appearance-none rounded w-full py-3 px-4 text-primarydark leading-tight focus:outline-none focus:shadow-outline text-sm bg-white rounded-2xl mt-2"
                  type="textarea"
                  placeholder={
                    '“If you define yourself by how you differ from the competition, you’re probably in trouble.”\n\n~ Omar Hamoui'
                  }
                />
              </div>
              <div className="mt-12 pb-8">
                <label className="block text-sm font-medium flex justify-between items-center" htmlFor="customers">
                  Your startup's target customers.
                  <TippyGuide
                    contentClass="w-80 shadow-lg rounded-2xl bg-primary"
                    contentText={
                      " Questions that can guide you:\n- What is the main segment of your startup's target customers?\n- What are the needs of your future customers?\n- Why would your target customers be willing to pay for your product?"
                    }
                  />
                </label>
                <textarea
                  autoComplete="none"
                  id="customers"
                  onChange={(e) => setTargetCustomersSection(e.target.value)}
                  value={targetCustomersSection == 'blank' ? '' : targetCustomersSection}
                  className="pb-24 px-3 shadow appearance-none rounded w-full py-3 px-4 text-primarydark leading-tight focus:outline-none focus:shadow-outline text-sm bg-white rounded-2xl mt-2"
                  type="textarea"
                  placeholder={'“Your most unhappy customers are your greatest source of learning.”\n\n~ Bill Gates'}
                />
              </div>
            </div>
            <hr style={{ width: '90%', color: '#a0aec0' }} />
            <div className="w-full grid grid-cols-3fr grid-flow-column px-8 py-4">
              <div className="flex items-center mt-1 text-primarydark text-sm">
                <button onClick={onProjectLeave}>Back</button>
              </div>
              <div className="flex items-center mt-1 justify-self-center">
                <p className="text-sm text-gray">Step 3 of 5</p>
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

export default StartupMarketModal;
