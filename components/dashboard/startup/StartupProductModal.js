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

const StartupProductModal = () => {
  const [projectId, setProjectId] = useState();

  const [productOverviewSection, setProductOverviewSection] = useState('');
  const [productPromotionSection, setProductPromotionSection] = useState('');
  const [productBenefitsSection, setProductBenefitsSection] = useState('');

  const [onLoadOpacity1, setOnLoadOpacity1] = useState(true);

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
      !productOverviewSection ||
      !productPromotionSection ||
      !productBenefitsSection ||
      productOverviewSection == 'blank' ||
      productPromotionSection == 'blank' ||
      productBenefitsSection == 'blank'
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
      router.push('/dashboard/startup/creator/market');
    }, 1200);

    await db.collection('currentProject').doc(currentUser.uid).set(
      {
        productOverviewSectionData,
        productPromotionSectionData,
        productBenefitsSectionData,
        filledSection1: true,
      },
      { merge: true }
    );
    await db.collection('projects').doc(projectId).set(
      {
        productOverviewSectionData,
        productPromotionSectionData,
        productBenefitsSectionData,
        filledSection1: true,
      },
      { merge: true }
    );
    return;
  };

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 1, ease: Linear.easeIn }
    );
    const getProjectId = async () => {
      const data = await db
        .collection('currentProject')
        .doc(currentUser.uid)
        .get();
      const {
        projectId,
        productOverviewSectionData,
        productPromotionSectionData,
        productBenefitsSectionData,
      } = data.data();
      return (
        setProjectId(projectId),
        setProductOverviewSection(productOverviewSectionData),
        setProductPromotionSection(productPromotionSectionData),
        setProductBenefitsSection(productBenefitsSectionData)
      );
    };
    getProjectId();

    return () => setOnLoadOpacity1(false);
  }, []);

  const productOverviewSectionData = productOverviewSection
    ? productOverviewSection
    : 'blank';
  const productPromotionSectionData = productPromotionSection
    ? productPromotionSection
    : 'blank';
  const productBenefitsSectionData = productBenefitsSection
    ? productBenefitsSection
    : 'blank';

  const onProjectLeave = async (e) => {
    e.preventDefault();

    gsap.to(contentRef.current, {
      autoAlpha: 0,
      duration: 1,
      ease: Linear.easeOut,
    });
    setTimeout(() => {
      router.push('/dashboard/startup/creator/overview');
    }, 1200);
    await db
      .collection('currentProject')
      .doc(currentUser.uid)
      .set(
        {
          productOverviewSectionData,
          productPromotionSectionData,
          productBenefitsSectionData,
          filledSection1:
            productOverviewSection &&
            productOverviewSection != 'blank' &&
            productPromotionSection &&
            productPromotionSection != 'blank' &&
            productBenefitsSection &&
            productBenefitsSection != 'blank'
              ? true
              : (!productOverviewSection ||
                  !productPromotionSection ||
                  !productBenefitsSection ||
                  productOverviewSection == 'blank' ||
                  productPromotionSection == 'blank' ||
                  productBenefitsSection == 'blank') &&
                false,
        },
        { merge: true }
      );
    await db
      .collection('projects')
      .doc(projectId)
      .set(
        {
          productOverviewSectionData,
          productPromotionSectionData,
          productBenefitsSectionData,
          filledSection1:
            productOverviewSection &&
            productOverviewSection != 'blank' &&
            productPromotionSection &&
            productPromotionSection != 'blank' &&
            productBenefitsSection &&
            productBenefitsSection != 'blank'
              ? true
              : (!productOverviewSection ||
                  !productPromotionSection ||
                  !productBenefitsSection ||
                  productOverviewSection == 'blank' ||
                  productPromotionSection == 'blank' ||
                  productBenefitsSection == 'blank') &&
                false,
        },
        { merge: true }
      );
  };

  return (
    <>
      <TippyMonster
        setCurrentTippy={setCurrentTippy}
        emptyInput
        setTippyMonster={setTippyMonster}
        tippyMonster={tippyMonster}
        product
        contentClass='h-36 w-80 shadow-lg rounded-2xl bg-primary flex justify-center items-center'
        contentText={`"Great things take time". On the way to the Great Wall of China `}
        contentText1=' In this section, try to describe the best version of your product, the promotion process and the benefits it will bring to future customers '
      />
      <NavbarTemplate>
        <div
          ref={contentRef}
          className='h-full w-full relative flex flex-col items-center justify-center'
        >
          <div className='w-full max-w-mdStarter lg:max-w-lgContainer 2xl:max-w-xlContainer relative pl-6 pr-6 mt-16 pb-24'>
            <p className='text-primarydark text-2xl normal:text-3xl mt-2 pl-2 dark:text-background text-center'>
              What do the product images look like in your mind?
            </p>
            <p className='text-primarydark text-base normal:text-lg mt-2 pl-2 dark:text-background text-center'>
              Startup idea creator will help you create the initial mockup of
              your future startup
              <img
                src='/gifs/rocket.gif'
                height={35}
                width={35}
                className='inline-block relative bottom-0.5'
              />
              {/* <img
                src='/emojis/palm.svg'
                height={35}
                width={35}
                className='inline-block relative bottom-2'
              /> */}
            </p>
            <ProgressBar onLoadOpacity1={onLoadOpacity1} />
            <div>
              <h1 className='text-primarydark text-lg mt-10 -mb-6 dark:text-background'>
                Product
              </h1>
            </div>
            <div className='w-full flex flex-col justify-center items-center border-r-6 rounded-2xl bg-white mt-8 dark:bg-background'>
              <div className='relative flex flex-col h-full w-full flex px-8 pt-8 pb-4'>
                <div>
                  <label
                    className='block text-sm font-medium flex justify-between items-end'
                    htmlFor='productOverview'
                  >
                    An accurate description of your product vision.
                    <TippyGuide
                      contentClass='w-80 shadow-lg rounded-2xl bg-primary'
                      contentText={
                        ' Questions that can guide you:\n- What resources are you going to use to create your product?\n- How will the production process work?\n- Will your product be available in different versions?\n- What does the perfect version of your product look like?'
                      }
                    />
                  </label>
                  <textarea
                    autoComplete='none'
                    id='productOverview'
                    onChange={(e) => setProductOverviewSection(e.target.value)}
                    value={
                      productOverviewSection == 'blank'
                        ? ''
                        : productOverviewSection
                    }
                    className='pb-24 shadow appearance-none rounded w-full py-3 px-4 text-primarydark leading-tight focus:outline-none focus:shadow-outline text-sm bg-white rounded-2xl mt-2'
                    type='textarea'
                    placeholder={
                      '“Nothing works better than just improving your product.”\n\n~ Joel Spolsky'
                    }
                  />
                </div>
                <div className='mt-12'>
                  <label
                    className='block text-sm font-medium flex justify-between items-end'
                    htmlFor='promotion'
                  >
                    The way other people find out about your startup.
                    <TippyGuide
                      contentClass='w-80 shadow-lg rounded-2xl bg-primary'
                      contentText={
                        ' Questions that can guide you:\n- What will the process of promoting your product look like?\n- What marketing activities are you going to undertake?\n- Are you going to cooperate with any external companies?\n- What distribution channels are you planning to use?'
                      }
                    />
                  </label>
                  <textarea
                    autoComplete='none'
                    id='promotion'
                    onChange={(e) => setProductPromotionSection(e.target.value)}
                    value={
                      productPromotionSection == 'blank'
                        ? ''
                        : productPromotionSection
                    }
                    className='pb-24 px-3 shadow appearance-none rounded w-full py-3 px-4 text-primarydark leading-tight focus:outline-none focus:shadow-outline text-sm bg-white rounded-2xl mt-2'
                    type='textarea'
                    placeholder={
                      '“Be undeniably good. No marketing effort or social media buzzword can be a substitute for that.”\n\n~ Anthony Volodkin'
                    }
                  />
                </div>
                <div className='mt-12 pb-8'>
                  <label
                    className='block text-sm font-medium flex justify-between items-end'
                    htmlFor='benefits'
                  >
                    The benefits that customers will reap by using your product.
                    <TippyGuide
                      contentClass='w-80 shadow-lg rounded-2xl bg-primary'
                      contentText={
                        ' Questions that can guide you:\n- What value will your product provide to your customers?\n- How will you encourage your customers to use your product again?\n- Do your potential customers really need your product?\n- What needs will your customers have when deciding on your product?'
                      }
                    />
                  </label>
                  <textarea
                    autoComplete='none'
                    id='benefits'
                    onChange={(e) => setProductBenefitsSection(e.target.value)}
                    value={
                      productBenefitsSection == 'blank'
                        ? ''
                        : productBenefitsSection
                    }
                    className='pb-24 px-3 shadow appearance-none rounded w-full py-3 px-4 text-primarydark leading-tight focus:outline-none focus:shadow-outline text-sm bg-white rounded-2xl mt-2'
                    type='textarea'
                    placeholder={
                      '“Wonder what your customer really wants? Ask. Don’t tell.”\n\n~ Lisa Stone'
                    }
                  />
                </div>
              </div>
              <hr style={{ width: '90%', color: '#a0aec0' }} />
              <div className='w-full grid grid-cols-3fr grid-flow-column px-8 py-4'>
                <div className='flex items-center mt-1 text-primarydark text-sm'>
                  <button onClick={onProjectLeave}>Back</button>
                </div>
                <div className='flex items-center mt-1 justify-self-center'>
                  <p className='text-sm text-gray'>Step 2 of 5</p>
                </div>
                <div className='flex justify-end items-center'>
                  <button
                    disabled={tippyMonster}
                    onClick={onSubmit}
                    className='hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-8 rounded-2xl dark:text-primarydark dark:border-primarydark'
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
