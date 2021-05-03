import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { db } from '../../../lib/firebase';
import { useAuth } from '../../../lib/newAuth';
import ProgressBar from './ProgressBar';
import { useRouter } from 'next/router';
import gsap, { Power4, Linear } from 'gsap';
import TippyMonster from '../Tippy';
import NavbarTemplate from '../NavbarTemplate';
import Image from 'next/image';
import TippyGuide from './TippyGuide';
import Cookies from 'js-cookie';
import ExitComponent from './ExitComponent';

const StartupVisionModal = () => {
  const [projectId, setProjectId] = useState();

  const [marketProblemSection, setMarketProblemSection] = useState('');
  const [marketSolutionSection, setMarketSolutionSection] = useState('');
  const [foundersSection, setFoundersSection] = useState('');

  const [onLoadOpacity, setOnLoadOpacity] = useState(true);

  console.log('market problem - ', marketProblemSection);
  console.log('market solution - ', marketSolutionSection);
  console.log('founders - ', foundersSection);

  const { currentUser } = useAuth();
  const router = useRouter();
  const contentRef = useRef();

  const [filledSection, setFilledSection] = useState(false);

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
      !marketProblemSection ||
      !marketSolutionSection ||
      !foundersSection ||
      marketProblemSection == 'blank' ||
      marketSolutionSection == 'blank' ||
      foundersSection == 'blank'
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
          marketProblemSectionData,
          marketSolutionSectionData,
          foundersSectionData,
          filledSection: true,
        },
        { merge: true }
      );
    // await db.collection('projects').doc(projectId).set(
    //   {
    //     marketProblemSectionData,
    //     marketSolutionSectionData,
    //     foundersSectionData,
    //     filledSection: true,
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
    gsap.fromTo(contentRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 2, ease: Linear.easeIn });
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
                  setMarketProblemSection(data.marketProblemSectionData);
                  setMarketSolutionSection(data.marketSolutionSectionData);
                  setFoundersSection(data.foundersSectionData);
                  setLoadingHelper(false);
                });
              });
          });
        });
    } else {
      console.log('Loading failed');
      setLoadingHelper(true);
    }

    return () => setOnLoadOpacity(false);
  }, [loadingHelper, router.query.project]);

  const marketProblemSectionData = marketProblemSection ? marketProblemSection : 'blank';
  const marketSolutionSectionData = marketSolutionSection ? marketSolutionSection : 'blank';
  const foundersSectionData = foundersSection ? foundersSection : 'blank';

  const onProjectLeave = async (e) => {
    e.preventDefault();
    gsap.to(contentRef.current, {
      autoAlpha: 0,
      duration: 1,
      ease: Linear.easeOut,
    });
    setTimeout(() => {
      router.push(`/dashboard/projects/${router.query.project}`);
    }, 1200);

    // await db.collection('currentProject').doc(currentUser.uid).delete();
    await db
      .collection('projects')
      .doc(projectId)
      .collection('startupIdea')
      .doc(router.query.project)
      .collection('inputs')
      .doc(documentId)
      .set(
        {
          marketProblemSectionData,
          marketSolutionSectionData,
          foundersSectionData,
          filledSection:
            marketProblemSection &&
            marketProblemSection != 'blank' &&
            marketSolutionSection &&
            marketSolutionSection != 'blank' &&
            foundersSection &&
            foundersSection != 'blank'
              ? true
              : (!marketProblemSection ||
                  !marketSolutionSection ||
                  !foundersSection ||
                  marketProblemSection == 'blank' ||
                  marketSolutionSection == 'blank' ||
                  foundersSection == 'blank') &&
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
        vision
        setTippyMonster={setTippyMonster}
        tippyMonster={tippyMonster}
        contentClass="h-36 w-80 shadow-lg rounded-2xl bg-primary flex justify-center items-center"
        contentText="Let's begin this journey in the middle of the desert "
        contentText1=" In this section, describe the main concepts of your startup creation and tell the world, who stands behind its founding "
      />
      <div ref={contentRef} className="h-full w-full relative flex flex-col items-center justify-center">
        <div className="w-full max-w-mdStarter lg:max-w-lgContainer 2xl:max-w-xlContainer normal:max-w-xxlContainer relative pl-2 pr-2 mt-16 pb-24">
          <p className="text-primarydark text-2xl normal:text-3xl mt-2 pl-2 dark:text-background text-center">
            Briefly describe the main assumptions of your idea
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
            {/* <img
                src='/emojis/seedling.svg'
                height={50}
                width={50}
                className='inline-block relative bottom-3.5'
              /> */}
          </p>
          <ProgressBar onLoadOpacity={onLoadOpacity} />
          <div>
            <h1 className="text-primarydark text-lg mt-10 -mb-6 dark:text-background">Your vision</h1>
          </div>
          <div className="w-full flex flex-col justify-center items-center border-r-6 rounded-2xl bg-white mt-8 dark:bg-background">
            <div className="relative flex flex-col h-full w-full flex px-8 pt-8 pb-4">
              <div>
                <label className="block text-sm font-medium flex justify-between items-end" htmlFor="why">
                  Market problem that needs to be solved.
                  <TippyGuide
                    contentClass="w-80 shadow-lg rounded-2xl bg-primary"
                    contentText={
                      ' Questions that can guide you:\n- What is the market problem that your idea solves?\n- Why do people need a solution to this problem?'
                    }
                  />
                </label>
                <textarea
                  autoComplete="none"
                  id="why"
                  onChange={(e) => setMarketProblemSection(e.target.value)}
                  value={marketProblemSection == 'blank' ? '' : marketProblemSection}
                  className="pb-24 shadow appearance-none rounded w-full py-3 px-4 text-primarydark leading-tight focus:outline-none focus:shadow-outline text-sm bg-white rounded-2xl mt-2"
                  type="textarea"
                  placeholder={'“The value of an idea lies in the using of it.”\n\n~ Thomas Edison'}
                />
              </div>
              <div className="mt-12">
                <label className="block text-sm font-medium flex justify-between items-end" htmlFor="what">
                  Solution that solves this market problem.
                  <TippyGuide
                    contentClass="w-80 shadow-lg rounded-2xl bg-primary"
                    contentText={
                      ' Questions that can guide you:\n- What is the solution that your idea will bring into the market?\n- How will your startup solve this problem?\n- How will your startup achieve a solution to this problem?'
                    }
                  />
                </label>
                <textarea
                  autoComplete="none"
                  id="what"
                  onChange={(e) => setMarketSolutionSection(e.target.value)}
                  value={marketSolutionSection == 'blank' ? '' : marketSolutionSection}
                  className="pb-24 px-3 shadow appearance-none rounded w-full py-3 px-4 text-primarydark leading-tight focus:outline-none focus:shadow-outline text-sm bg-white rounded-2xl mt-2"
                  type="textarea"
                  placeholder={'“Chase the vision, not the money, the money will end up following you.”\n\n~ Tony Hsieh'}
                />
              </div>
              <div className="mt-12 pb-8">
                <label className="block text-sm font-medium flex justify-between items-end" htmlFor="founders">
                  Introduce the startup's founders to the world.
                  <TippyGuide
                    contentClass="w-80 shadow-lg rounded-2xl bg-primary"
                    contentText={
                      ' Questions that can guide you:\n- Who will be the founders of your future startup?\n- What experience / expertise do the founders have in the relevant industry?\n- How will the experience / expertise of the founders impact the success of the startup?'
                    }
                  />
                </label>
                <textarea
                  autoComplete="none"
                  id="founders"
                  onChange={(e) => setFoundersSection(e.target.value)}
                  value={foundersSection == 'blank' ? '' : foundersSection}
                  className="pb-24 px-3 shadow appearance-none rounded w-full py-3 px-4 text-primarydark leading-tight focus:outline-none focus:shadow-outline text-sm bg-white rounded-2xl mt-2"
                  type="textarea"
                  placeholder={
                    '“No matter how brilliant your mind or strategy, if you’re playing a solo game, you’ll always lose out to a team.”\n\n~ Reid Hoffman'
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
                <p className="text-sm text-gray">Step 1 of 5</p>
              </div>
              <div className="flex justify-end items-center">
                <button
                  disabled={tippyMonster}
                  onClick={(e) => onSubmit(e)}
                  className="z-10 hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-8 rounded-2xl dark:text-primarydark dark:border-primarydark"
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

export default StartupVisionModal;
