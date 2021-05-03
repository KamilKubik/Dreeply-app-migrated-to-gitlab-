import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { db } from '../../../lib/firebase';
import { useAuth } from '../../../lib/newAuth';
import ProgressBar from './ProgressBar';
import { useRouter } from 'next/router';
import gsap, { Power4, Linear } from 'gsap';
import TippyMonster from '../Tippy';
import NavbarTemplate from '../NavbarTemplate';
import TippyGuide from './TippyGuide';
import Cookies from 'js-cookie';
import ExitComponent from './ExitComponent';

const StartupProductModal = () => {
  const [projectId, setProjectId] = useState();

  const [onLoadOpacity4, setOnLoadOpacity4] = useState(true);

  // OVERVIEW
  const [marketProblemSection, setMarketProblemSection] = useState('');
  const [marketSolutionSection, setMarketSolutionSection] = useState('');
  const [foundersSection, setFoundersSection] = useState('');
  // PRODUCT
  const [productOverviewSection, setProductOverviewSection] = useState('');
  const [productPromotionSection, setProductPromotionSection] = useState('');
  const [productBenefitsSection, setProductBenefitsSection] = useState('');
  // MARKET
  const [marketOverviewSection, setMarketOverviewSection] = useState('');
  const [competitorsSection, setCompetitorsSection] = useState('');
  const [targetCustomersSection, setTargetCustomersSection] = useState('');
  const [competitionDistinguishSection, setCompetitionDistinguishSection] = useState('');
  // FINANCES
  const [startupCostsSection, setStartupCostsSection] = useState('');
  const [runningCostsSection, setRunningCostsSection] = useState('');
  const [financingSection, setFinancingSection] = useState('');
  // BUSINESS MODEL
  const [businessModelOverviewSection, setBusinessModelOverviewSection] = useState('');
  const [businessGrowSection, setBusinessGrowSection] = useState('');
  const [whySuccessSection, setWhySuccessSection] = useState('');

  const { currentUser } = useAuth();
  const router = useRouter();
  const contentRef = useRef();

  // TIPPY
  const [tippyMonster, setTippyMonster] = useState(false);
  const [currentTippy, setCurrentTippy] = useState(null);

  console.log('business model - ', businessModelOverviewSection);
  console.log('business grow - ', businessGrowSection);
  console.log('business success - ', whySuccessSection);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      // OVERVIEW
      !marketProblemSection ||
      !marketSolutionSection ||
      !foundersSection ||
      // PRODUCT
      !productOverviewSection ||
      !productPromotionSection ||
      !productBenefitsSection ||
      // MARKET
      !marketOverviewSection ||
      !competitorsSection ||
      !targetCustomersSection ||
      !competitionDistinguishSection ||
      // FINANCES
      !startupCostsSection ||
      !runningCostsSection ||
      !financingSection ||
      // BUSINESS MODEL
      !businessModelOverviewSection ||
      !businessGrowSection ||
      !whySuccessSection ||
      // -----------------------
      // OVERVIEW
      marketProblemSection == 'blank' ||
      marketSolutionSection == 'blank' ||
      foundersSection == 'blank' ||
      // PRODUCT
      productOverviewSection == 'blank' ||
      productPromotionSection == 'blank' ||
      productBenefitsSection == 'blank' ||
      // MARKET
      marketOverviewSection == 'blank' ||
      competitorsSection == 'blank' ||
      targetCustomersSection == 'blank' ||
      competitionDistinguishSection == 'blank' ||
      // FINANCES
      startupCostsSection == 'blank' ||
      runningCostsSection == 'blank' ||
      financingSection == 'blank' ||
      // BUSINESS MODEL
      businessModelOverviewSection == 'blank' ||
      businessGrowSection == 'blank' ||
      whySuccessSection == 'blank'
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
      router.push(`/dashboard/projects/${router.query.project}/startup-idea/success`);
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
          businessModelOverviewSectionData,
          businessGrowSectionData,
          whySuccessSectionData,
          filledSection4: true,
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
                  // OVERVIEW;
                  setMarketProblemSection(data.marketProblemSectionData),
                    setMarketSolutionSection(data.marketSolutionSectionData),
                    setFoundersSection(data.foundersSectionData),
                    // PRODUCT
                    setProductOverviewSection(data.productOverviewSectionData),
                    setProductPromotionSection(data.productPromotionSectionData),
                    setProductBenefitsSection(data.productBenefitsSectionData),
                    // MARKET
                    setMarketOverviewSection(data.marketOverviewSectionData),
                    setCompetitorsSection(data.competitorsSectionData),
                    setTargetCustomersSection(data.targetCustomersSectionData),
                    setCompetitionDistinguishSection(data.competitionDistinguishSectionData),
                    // FINANCES
                    setStartupCostsSection(data.startupCostsSectionData),
                    setRunningCostsSection(data.runningCostsSectionData),
                    setFinancingSection(data.financingSectionData),
                    // BUSINESS MODEL
                    setBusinessModelOverviewSection(data.businessModelOverviewSectionData),
                    setBusinessGrowSection(data.businessGrowSectionData),
                    setWhySuccessSection(data.whySuccessSectionData);
                  setLoadingHelper(false);
                });
              });
          });
        });
    } else {
      console.log('Loading failed');
      setLoadingHelper(true);
    }

    return () => setOnLoadOpacity4(false);
  }, [loadingHelper, router.query.project]);

  const businessModelOverviewSectionData = businessModelOverviewSection ? businessModelOverviewSection : 'blank';
  const businessGrowSectionData = businessGrowSection ? businessGrowSection : 'blank';
  const whySuccessSectionData = whySuccessSection ? whySuccessSection : 'blank';

  const onProjectLeave = async (e) => {
    e.preventDefault();
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
          businessModelOverviewSectionData,
          businessGrowSectionData,
          whySuccessSectionData,
          filledSection4:
            businessModelOverviewSection &&
            businessModelOverviewSection != 'blank' &&
            businessGrowSection &&
            businessGrowSection != 'blank' &&
            whySuccessSection &&
            whySuccessSection != 'blank'
              ? true
              : (!businessModelOverviewSection ||
                  !businessGrowSection ||
                  !whySuccessSection ||
                  businessModelOverviewSection == 'blank' ||
                  businessGrowSection == 'blank' ||
                  whySuccessSection == 'blank') &&
                false,
        },
        { merge: true }
      );
    await db
      .collection('projects')
      .doc(projectId)
      .set(
        {
          businessModelOverviewSectionData,
          businessGrowSectionData,
          whySuccessSectionData,
          filledSection4:
            businessModelOverviewSection &&
            businessModelOverviewSection != 'blank' &&
            businessGrowSection &&
            businessGrowSection != 'blank' &&
            whySuccessSection &&
            whySuccessSection != 'blank'
              ? true
              : (!businessModelOverviewSection ||
                  !businessGrowSection ||
                  !whySuccessSection ||
                  businessModelOverviewSection == 'blank' ||
                  businessGrowSection == 'blank' ||
                  whySuccessSection == 'blank') &&
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
        model
        contentClass="h-40 w-96 shadow-lg rounded-2xl bg-primary flex justify-center items-center"
        contentText="It used to be that pirates had to work out their plunder plans in great details. Their future depended on the success of their mission "
        contentText1=" In this section, introduce your startup's operating model and tell the world why it is your startup that will be successful "
      />
      <NavbarTemplate>
        <div ref={contentRef} className="h-full w-full relative flex flex-col items-center justify-center">
          <div className="w-full max-w-mdStarter lg:max-w-lgContainer 2xl:max-w-xlContainer relative pl-6 pr-6 mt-16 pb-24">
            <p className="text-primarydark text-2xl normal:text-3xl mt-2 pl-2 dark:text-background text-center">
              It is a high time to get into the numbers
            </p>
            <p className="text-primarydark text-base normal:text-lg mt-2 pl-2 dark:text-background text-center">
              Startup idea creator will help you create the initial mockup of your future startup
              <img src="/gifs/rocket.gif" height={35} width={35} className="inline-block relative bottom-0.5" />
              {/* <img
                src='/emojis/palm.svg'
                height={35}
                width={35}
                className='inline-block relative bottom-2'
              /> */}
            </p>
            <ProgressBar onLoadOpacity4={onLoadOpacity4} />
            <div>
              <h1 className="text-primarydark text-lg mt-10 -mb-6 dark:text-background">Business model</h1>
            </div>
            <div className="w-full flex flex-col justify-center items-center border-r-6 rounded-2xl bg-white mt-8 dark:bg-background">
              <div className="relative flex flex-col h-full w-full flex px-8 pt-8 pb-4">
                <div>
                  <label className="block text-sm font-medium flex justify-between items-end" htmlFor="businessModelOverview">
                    Overview of your startup business model.
                    <TippyGuide
                      contentClass="w-80 shadow-lg rounded-2xl bg-primary"
                      contentText={
                        ' Questions that can guide you:\n- How does your business model look like?\n- What will be the legal structure of your startup?\n- How will your startup generate income?'
                      }
                    />
                  </label>
                  <textarea
                    autoComplete="none"
                    id="businessModelOverview"
                    onChange={(e) => setBusinessModelOverviewSection(e.target.value)}
                    value={businessModelOverviewSection == 'blank' ? '' : businessModelOverviewSection}
                    className="pb-24 shadow appearance-none rounded w-full py-3 px-4 text-primarydark leading-tight focus:outline-none focus:shadow-outline text-sm bg-white rounded-2xl mt-2"
                    type="textarea"
                    placeholder={'“I never dreamed about success, I worked for it.”\n\n~ Estee Lauder'}
                  />
                </div>
                <div className="mt-12">
                  <label className="block text-sm font-medium flex justify-between items-end" htmlFor="businessGrow">
                    Predictions and milestones about the growth of your startup.
                    <TippyGuide
                      contentClass="w-80 shadow-lg rounded-2xl bg-primary"
                      contentText={
                        " Questions that can guide you:\n- How do you predict your startup grow?\n- How are you going to achieve the projected growth of your startup?\n- What are the milestones for each stage of your startup's development?"
                      }
                    />
                  </label>
                  <textarea
                    autoComplete="none"
                    id="businessGrow"
                    onChange={(e) => setBusinessGrowSection(e.target.value)}
                    value={businessGrowSection == 'blank' ? '' : businessGrowSection}
                    className="pb-24 px-3 shadow appearance-none rounded w-full py-3 px-4 text-primarydark leading-tight focus:outline-none focus:shadow-outline text-sm bg-white rounded-2xl mt-2"
                    type="textarea"
                    placeholder={'“See things in the present, even if they are in the future.”\n\n~ Larry Ellison'}
                  />
                </div>
                <div className="mt-12 pb-8">
                  <label className="block text-sm font-medium flex justify-between items-end" htmlFor="success">
                    Why is it your idea that will be successful?
                    <TippyGuide
                      angry
                      contentClass="w-80 shadow-lg rounded-2xl bg-primary"
                      contentText={
                        ' What else are you waiting for? Get it off your chest and tell the whole world, how strong your motivation is to build a new startup!'
                      }
                    />
                  </label>
                  <textarea
                    autoComplete="none"
                    id="success"
                    onChange={(e) => setWhySuccessSection(e.target.value)}
                    value={whySuccessSection == 'blank' ? '' : whySuccessSection}
                    className="pb-24 px-3 shadow appearance-none rounded w-full py-3 px-4 text-primarydark leading-tight focus:outline-none focus:shadow-outline text-sm bg-white rounded-2xl mt-2"
                    type="textarea"
                    placeholder={'“Whether you think you can, or think you can’t – you’re right.”\n\n~ Henry Ford'}
                  />
                </div>
              </div>
              <hr style={{ width: '90%', color: '#a0aec0' }} />
              <div className="w-full grid grid-cols-3fr grid-flow-column px-8 py-4">
                <div className="flex items-center mt-1 text-primarydark text-sm">
                  <button onClick={onProjectLeave}>Back</button>
                </div>
                <div className="flex items-center mt-1 justify-self-center">
                  <p className="text-sm text-gray">Step 5 of 5</p>
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
      </NavbarTemplate>
    </>
  );
};

export default StartupProductModal;
