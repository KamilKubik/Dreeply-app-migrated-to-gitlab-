import React, { useState, useEffect, useRef, useMemo } from 'react';
import { db } from '../../../lib/firebase';
import { useAuth } from '../../../lib/newAuth';
import { useRouter } from 'next/router';
import gsap, { Power4, Linear } from 'gsap';
import { saveAs } from 'file-saver';

import {
  Font,
  pdf,
  Page,
  Text,
  View,
  Image,
  Document,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
} from '@react-pdf/renderer';
import TippyMonster from '../Tippy';
import MyDocument1 from './PDFDocument';
import AnimatedBackground from './AnimatedBackground';

const StartupSuccess = () => {
  const [projectId, setProjectId] = useState();
  // STARTER
  const [ideaName, setIdeaName] = useState('');
  const [ideaDesc, setIdeaDesc] = useState('');
  const [ideaCountry, setIdeaCountry] = useState('');
  const [startupField, setStartupField] = useState('');
  const [startupEmail, setStartupEmail] = useState('');
  const [startupPhone, setStartupPhone] = useState('');
  // IMAGE
  const [imageNameExists, setImageNameExists] = useState('');
  const [avatarExists, setAvatarExists] = useState('');

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
  const [
    competitionDistinguishSection,
    setCompetitionDistinguishSection,
  ] = useState('');
  const [targetCustomersSection, setTargetCustomersSection] = useState('');
  // FINANCES
  const [startupCostsSection, setStartupCostsSection] = useState('');
  const [runningCostsSection, setRunningCostsSection] = useState('');
  const [financingSection, setFinancingSection] = useState('');
  // BUSINESS MODEL
  const [
    businessModelOverviewSection,
    setBusinessModelOverviewSection,
  ] = useState('');
  const [businessGrowSection, setBusinessGrowSection] = useState('');
  const [whySuccessSection, setWhySuccessSection] = useState('');

  const { currentUser } = useAuth();
  const router = useRouter();
  const contentRef = useRef();

  const onSubmit = async (e) => {
    e.preventDefault();
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
        // STARTER
        ideaName,
        ideaDesc,
        ideaCountry,
        startupField,
        startupEmail,
        startupPhone,
        // IMAGE
        imageNameExists,
        avatarExists,
        // OVERVIEW
        marketProblemSectionData,
        marketSolutionSectionData,
        foundersSectionData,
        // PRODUCT
        productOverviewSectionData,
        productPromotionSectionData,
        productBenefitsSectionData,
        // MARKET
        marketOverviewSectionData,
        competitorsSectionData,
        targetCustomersSectionData,
        competitionDistinguishSectionData,
        // FINANCES
        startupCostsSectionData,
        runningCostsSectionData,
        financingSectionData,
        // BUSINESS MODEL
        businessModelOverviewSectionData,
        businessGrowSectionData,
        whySuccessSectionData,
      } = data.data();
      return (
        setProjectId(projectId),
        // STARTER
        setIdeaName(ideaName),
        setIdeaDesc(ideaDesc),
        setIdeaCountry(ideaCountry),
        setStartupField(startupField),
        setStartupEmail(startupEmail),
        setStartupPhone(startupPhone),
        // IMAGE
        setImageNameExists(imageNameExists),
        setAvatarExists(avatarExists),
        // OVERVIEW
        setMarketProblemSection(marketProblemSectionData),
        setMarketSolutionSection(marketSolutionSectionData),
        setFoundersSection(foundersSectionData),
        // PRODUCT
        setProductOverviewSection(productOverviewSectionData),
        setProductPromotionSection(productPromotionSectionData),
        setProductBenefitsSection(productBenefitsSectionData),
        // MARKET
        setMarketOverviewSection(marketOverviewSectionData),
        setCompetitorsSection(competitorsSectionData),
        setCompetitionDistinguishSection(competitionDistinguishSectionData),
        setTargetCustomersSection(targetCustomersSectionData),
        // FINANCES
        setStartupCostsSection(startupCostsSectionData),
        setRunningCostsSection(runningCostsSectionData),
        setFinancingSection(financingSectionData),
        // BUSINESS MODEL
        setBusinessModelOverviewSection(businessModelOverviewSectionData),
        setBusinessGrowSection(businessGrowSectionData),
        setWhySuccessSection(whySuccessSectionData)
      );
    };
    getProjectId();
  }, []);

  const image = avatarExists != 'blank' ? avatarExists : imageNameExists;
  console.log(image);

  const data = {
    ideaName,
    ideaDesc,
    ideaCountry,
    startupField,
    startupEmail,
    startupPhone,
    imageNameExists,
    avatarExists,
    marketProblemSection,
    marketSolutionSection,
    foundersSection,
    productOverviewSection,
    productPromotionSection,
    productBenefitsSection,
    marketOverviewSection,
    competitorsSection,
    targetCustomersSection,
    competitionDistinguishSection,
    startupCostsSection,
    runningCostsSection,
    financingSection,
    businessModelOverviewSection,
    businessGrowSection,
    whySuccessSection,
  };

  const onProjectLeave = async (e) => {
    e.preventDefault();
    gsap.to(contentRef.current, {
      autoAlpha: 0,
      duration: 1,
      ease: Linear.easeOut,
    });
    setTimeout(() => {
      router.push('/dashboard/startup/creator/business-model');
    }, 1200);
  };

  console.log(ideaDesc);

  // ------------------------------------------------------------- PDF -----------------------------------------------------------------

  // const delay = (t) => new Promise((resolve) => setTimeout(resolve, t));

  // async function getProps() {
  //   await delay(1_000);
  //   return {
  //     someString: 'You waited 1 second for this',
  //   };
  // }

  Font.register({ src: '/fonts/poppins.ttf', family: 'Poppins' });
  Font.register({ src: '/fonts/comfortaa.ttf', family: 'Comfortaa' });

  const styles = StyleSheet.create({
    // START HOMEPAGE SECTION
    homePage: {
      fontFamily: 'Comfortaa',
      backgroundColor: '#f8f9fb',
      flexDirection: 'row',
    },
    homePageTitleSection: {
      width: '100%',
      textAlign: 'center',
      marginTop: 40,
    },
    homePageTitle: {
      fontSize: 26,
      color: '#0a1230',
    },
    homePageDesc: {
      fontSize: 16,
      color: '#a0aec0',
    },
    image: {
      height: '200px',
      width: '200px',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 22,
    },
    leftDescBlock: {
      width: '75%',
      backgroundColor: '#6C63FF',
      textAlign: 'left',
      marginTop: '32px',
      borderTopRightRadius: 50,
    },
    leftDescBlockText: {
      fontSize: 14,
      padding: 32,
      lineHeight: 1.4,
      color: '#f8f9fb',
    },
    rightBar: {
      height: '100vh',
      width: '15px',
      backgroundColor: '#6C63FF',
      position: 'absolute',
      right: '5%',
    },
    rightBarContact: {
      color: '#f8f9fb',
      fontSize: 14,
      width: '50%',
      backgroundColor: '#6C63FF',
      position: 'absolute',
      bottom: '10%',
      right: '5%',
      padding: 32,
      borderTopLeftRadius: 50,
    },
    countryText: {
      marginTop: 6,
    },
    emailText: {
      marginTop: 6,
    },
    phoneNumberText: {
      marginTop: 6,
    },
    grayBarOne: {
      height: '25%',
      width: '2px',
      backgroundColor: '#a0aec0',
      position: 'absolute',
      bottom: '3%',
      left: '10%',
    },
    grayBarTwo: {
      height: '2px',
      width: '20%',
      backgroundColor: '#a0aec0',
      position: 'absolute',
      bottom: '5%',
      left: '5%',
    },
    // END START HOMEPAGE SECTION
    // START OVERVIEW SECTION
    overviewPage: {
      fontFamily: 'Comfortaa',
      backgroundColor: '#f8f9fb',
      paddingTop: 35,
      paddingBottom: 35,
    },
    overviewHeading: {
      fontSize: 22,
      color: '#0a1230',
      marginLeft: 28,
    },
    overviewSubtitle: {
      fontSize: 14,
      color: '#a0aec0',
    },
    overviewImage: {
      height: '20px',
      width: '20px',
      position: 'absolute',
      top: 37,
      left: 30,
    },
    overviewSection: {
      // padding: '5%',
      // paddingTop: '5%',
      paddingBottom: '5%',
      paddingLeft: '5%',
      paddingRight: '5%',
    },
    sectionContainerOne: {
      marginTop: 30,
    },
    sectionHeadingOne: {
      color: '#0a1230',
      fontSize: 16,
    },
    sectionText: {
      color: '#0a1230',
      fontSize: 12,
      paddingTop: 8,
      paddingRight: 50,
    },
    sectionContainerTwo: {
      paddingTop: 30,
    },
    sectionHeadingTwo: {
      color: '#0a1230',
      fontSize: 16,
    },
    sectionContainerThree: {
      paddingTop: 36,
      paddingBottom: 26,
    },
    sectionHeadingThree: {
      color: '#0a1230',
      fontSize: 16,
    },
    // END OVERVIEW SECTION
    // START TABLE OF CONTENTS SECTION
    contentsPage: {
      fontFamily: 'Comfortaa',
    },
    contentsLeftBar: {
      height: '100%',
      width: '40%',
      backgroundColor: '#6C63FF',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      color: '#f8f9fb',
      paddingLeft: 35,
      fontSize: 20,
      lineHeight: 4,
      position: 'relative',
    },
    contentsBarOne: {
      width: 200,
      height: 2,
      backgroundColor: '#a0aec0',
      position: 'absolute',
      top: '37%',
      left: '100%',
      transform: 'translate(-50%, -50%)',
    },
    contentsBarTwo: {
      width: 200,
      height: 2,
      backgroundColor: '#a0aec0',
      position: 'absolute',
      top: '46.5%',
      left: '100%',
      transform: 'translate(-50%, -50%)',
    },
    contentsBarThree: {
      width: 200,
      height: 2,
      backgroundColor: '#a0aec0',
      position: 'absolute',
      top: '56%',
      left: '100%',
      transform: 'translate(-50%, -50%)',
    },
    contentsBarFour: {
      width: 200,
      height: 2,
      backgroundColor: '#a0aec0',
      position: 'absolute',
      top: '65.5%',
      left: '100%',
      transform: 'translate(-50%, -50%)',
    },
    contentsBarFive: {
      width: 200,
      height: 2,
      backgroundColor: '#a0aec0',
      position: 'absolute',
      top: '74.75%',
      left: '100%',
      transform: 'translate(-50%, -50%)',
    },
    contentsRightBar: {
      height: '100%',
      width: '60%',
      position: 'absolute',
      right: '0',
      display: 'flex',
      alignItems: 'center',
      fontSize: 12,
      color: '#0a1230',
      // paddingHorizontal: 64,
      paddingRight: 80,
      paddingLeft: 32,
    },
    contentsRightTextOne: {
      position: 'absolute',
      top: '26.75%',
    },
    contentsRightTextTwo: {
      position: 'absolute',
      top: '36%',
    },
    contentsRightTextThree: {
      position: 'absolute',
      top: '45.5%',
    },
    contentsRightTextFour: {
      position: 'absolute',
      top: '55%',
    },
    contentsRightTextFive: {
      position: 'absolute',
      top: '64.25%',
    },
  });

  const MyDocument = (props) => (
    <Document>
      <Page size='A4' style={styles.homePage}>
        <View style={styles.homePageTitleSection}>
          <Text style={styles.homePageTitle}>Startup idea plan</Text>
          <Text style={styles.homePageDesc}>
            Just a simple startup about tech field
          </Text>
          <Image
            src={image}
            style={styles.image}
            height='250px'
            width='250px'
          />
          <View style={styles.leftDescBlock}>
            <Text style={styles.leftDescBlockText}>{ideaDesc}</Text>
          </View>
        </View>
        <View style={styles.rightBar}></View>
        <View style={styles.rightBarContact}>
          <Text>{startupField}</Text>
          <Text style={styles.countryText}>{ideaCountry}</Text>
          <Text style={styles.emailText}>{startupEmail}</Text>
          <Text style={styles.phoneNumberText}>{startupPhone}</Text>
        </View>
        <View style={styles.grayBarOne}></View>
        <View style={styles.grayBarTwo}></View>
      </Page>
      {/* TABLE OF CONTENTS */}
      <Page style={styles.contentsPage}>
        <View style={styles.rightBar} fixed></View>
        <View style={styles.contentsLeftBar}>
          <Text>Startup overview</Text>
          <Text>Product</Text>
          <Text>Market analysis</Text>
          <Text>Finances</Text>
          <Text>Business model</Text>
          <View style={styles.contentsBarOne}></View>
          <View style={styles.contentsBarTwo}></View>
          <View style={styles.contentsBarThree}></View>
          <View style={styles.contentsBarFour}></View>
          <View style={styles.contentsBarFive}></View>
        </View>
        <View style={styles.contentsRightBar}>
          <Text style={styles.contentsRightTextOne}>
            01. This section will help you better understand the startup vision
          </Text>
          <Text style={styles.contentsRightTextTwo}>
            02. This section will introduce you to the vision of the product
          </Text>
          <Text style={styles.contentsRightTextThree}>
            03. This section will reveal all the cards of the market
          </Text>
          <Text style={styles.contentsRightTextFour}>
            04. Discover the costs of implementing our idea
          </Text>
          <Text style={styles.contentsRightTextFive}>
            05. In the final section, you will discover the startup's business
            model
          </Text>
        </View>
      </Page>
      {/* OVERVIEW SECTION */}
      <Page style={styles.overviewPage}>
        <View style={styles.rightBar} fixed></View>
        <Image
          style={styles.overviewImage}
          src='/pdf/idea.png'
          height={20}
          width={20}
        />
        <View style={styles.overviewSection}>
          <Text style={styles.overviewHeading}>Startup overview</Text>
          <Text style={styles.overviewSubtitle}>
            This section will help you better understand the startup vision
          </Text>
          <View style={styles.sectionContainerOne}>
            <Text style={styles.sectionHeadingOne}>
              Market problem that needs to be solved
            </Text>
            <Text style={styles.sectionText}>{marketProblemSection}</Text>
          </View>
          <View style={styles.sectionContainerTwo}>
            <Text style={styles.sectionHeadingTwo}>
              Our startup solution for this problem
            </Text>
            <Text style={styles.sectionText}>{marketSolutionSection}</Text>
          </View>
          <View style={styles.sectionContainerThree}>
            <Text style={styles.sectionHeadingThree}>
              Who is behind the foundation of the future company?
            </Text>
            <Text style={styles.sectionText}>{foundersSection}</Text>
          </View>
        </View>
      </Page>
      {/* PRODUCT SECTION */}
      <Page style={styles.overviewPage}>
        <View style={styles.rightBar} fixed></View>
        <Image
          style={styles.overviewImage}
          src='/pdf/blueprint.png'
          height={20}
          width={20}
        />
        <View style={styles.overviewSection}>
          <Text style={styles.overviewHeading}>Product</Text>
          <Text style={styles.overviewSubtitle}>
            This section will introduce you to the vision of the product
          </Text>
          <View style={styles.sectionContainerOne}>
            <Text style={styles.sectionHeadingOne}>
              What does the perfect version of the product look like?
            </Text>
            <Text style={styles.sectionText}>{productOverviewSection}</Text>
          </View>
          <View style={styles.sectionContainerTwo}>
            <Text style={styles.sectionHeadingTwo}>
              How will other people find out about the product?
            </Text>
            <Text style={styles.sectionText}>{productPromotionSection}</Text>
          </View>
          <View style={styles.sectionContainerThree}>
            <Text style={styles.sectionHeadingThree}>
              What benefits will this product brings to customers?
            </Text>
            <Text style={styles.sectionText}>{productBenefitsSection}</Text>
          </View>
        </View>
      </Page>
      {/* MARKET SECTION */}
      <Page style={styles.overviewPage}>
        <View style={styles.rightBar} fixed></View>
        <Image
          style={styles.overviewImage}
          src='/pdf/unicorn.png'
          height={20}
          width={20}
        />
        <View style={styles.overviewSection}>
          <Text style={styles.overviewHeading}>Market analysis</Text>
          <Text style={styles.overviewSubtitle}>
            This section will reveal all the cards of the market
          </Text>
          <View style={styles.sectionContainerOne}>
            <Text style={styles.sectionHeadingOne}>
              A general view of the market that can be obtained
            </Text>
            <Text style={styles.sectionText}>{marketOverviewSection}</Text>
          </View>
          <View style={styles.sectionContainerTwo}>
            <Text style={styles.sectionHeadingTwo}>
              What is the main competition on the market?
            </Text>
            <Text style={styles.sectionText}>{competitorsSection}</Text>
          </View>
          <View style={styles.sectionContainerTwo}>
            <Text style={styles.sectionHeadingTwo}>
              What makes a startup stand out from the competition?
            </Text>
            <Text style={styles.sectionText}>
              {competitionDistinguishSection}
            </Text>
          </View>
          <View style={styles.sectionContainerThree}>
            <Text style={styles.sectionHeadingThree}>
              Who are the target customers of the startup?
            </Text>
            <Text style={styles.sectionText}>{targetCustomersSection}</Text>
          </View>
        </View>
      </Page>
      {/* FINANCES SECTION */}
      <Page style={styles.overviewPage}>
        <View style={styles.rightBar} fixed></View>
        <Image
          style={styles.overviewImage}
          src='/pdf/budget.png'
          height={20}
          width={20}
        />
        <View style={styles.overviewSection}>
          <Text style={styles.overviewHeading}>Finances</Text>
          <Text style={styles.overviewSubtitle}>
            Discover the costs of implementing our idea
          </Text>
          <View style={styles.sectionContainerOne}>
            <Text style={styles.sectionHeadingOne}>
              How much money will it take to launch the startup?
            </Text>
            <Text style={styles.sectionText}>{startupCostsSection}</Text>
          </View>
          <View style={styles.sectionContainerTwo}>
            <Text style={styles.sectionHeadingTwo}>
              Approximate costs of maintaining a startup
            </Text>
            <Text style={styles.sectionText}>{runningCostsSection}</Text>
          </View>
          <View style={styles.sectionContainerThree}>
            <Text style={styles.sectionHeadingThree}>
              How does the idea will be fund?
            </Text>
            <Text style={styles.sectionText}>{financingSection}</Text>
          </View>
        </View>
      </Page>
      {/* BUSINESS MODEL SECTION */}
      <Page style={styles.overviewPage}>
        <View style={styles.rightBar} fixed></View>
        <Image
          style={styles.overviewImage}
          src='/pdf/startup.png'
          height={20}
          width={20}
        />
        <View style={styles.overviewSection}>
          <Text style={styles.overviewHeading}>Business model</Text>
          <Text style={styles.overviewSubtitle}>
            In the final section, you will discover the startup's business model
          </Text>
          <View style={styles.sectionContainerOne}>
            <Text style={styles.sectionHeadingOne}>
              What will the startup's business model look like?
            </Text>
            <Text style={styles.sectionText}>
              {businessModelOverviewSection}
            </Text>
          </View>
          <View style={styles.sectionContainerTwo}>
            <Text style={styles.sectionHeadingTwo}>
              Predictions for startup growth
            </Text>
            <Text style={styles.sectionText}>{businessGrowSection}</Text>
          </View>
          <View style={styles.sectionContainerThree}>
            <Text style={styles.sectionHeadingThree}>
              Why is it that startup that will conquer the world?
            </Text>
            <Text style={styles.sectionText}>{whySuccessSection}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );

  // const [numPages, setNumPages] = useState(null);

  // const MyDocument = (props) => (
  //   <Document
  //     file={props.data}
  //     onLoadSuccess={({ numPages }) => setNumPages(numPages)}
  //   >
  //     {Array.apply(null, Array(numPages))
  //       .map((x, i) => i + 1)
  //       .map((page) => (
  //         <Page pageNumber={page} style={styles.page}>
  //           <View style={styles.section}>
  //           </View>
  //         </Page>
  //       ))}
  //   </Document>
  // );

  const onProjectSave = () => {
    // console.log(whySuccessSection);
  };

  return useMemo(
    () => (
      <>
        <div
          ref={contentRef}
          className='h-screen w-full relative flex flex-col items-center justify-center'
        >
          <ul className='circles'>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            {/* 10 */}
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div className='flex flex-col items-center justify-center w-full max-w-screen-md relative pl-6 pr-6 mt-16 pb-24'>
            <p className='text-primarydark text-2xl normal:text-3xl mt-2 pl-2 dark:text-background text-center'>
            <img src='/gifs/popper.gif' height={60} width={60} className='inline-block relative bottom-4 left-3' />Congratulations!
            </p>
            <p className='text-primarydark text-base normal:text-lg pl-2 dark:text-background text-center'>
              Now you can save your idea and set off to conquer the world
            </p>
            <img src='/success.svg' height={200} width={200} className='mt-4' />
            <div>
              <button
                className='z-10 mr-4 mt-6 hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-8 rounded-2xl dark:text-primarydark dark:border-primarydark'
                onClick={onProjectLeave}
              >
                Back
              </button>
              <button
                className='z-10 ml-4 mt-6 hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-8 rounded-2xl dark:text-primarydark dark:border-primarydark'
                onClick={async (e) => {
                  e.preventDefault();
                  const doc = <MyDocument1 data={data} />;
                  const asPdf = pdf([]); // {} is important, throws without an argument
                  asPdf.updateContainer(doc);
                  const blob = await asPdf.toBlob();
                  saveAs(blob, `${ideaName}.pdf`);
                }}
              >
                Save
              </button>
            </div>
            {/* <button
            onClick={async () => {
              const doc = <MyDocument />;
              const asPdf = pdf([]); // {} is important, throws without an argument
              asPdf.updateContainer(doc);
              const blob = await asPdf.toBlob();
              saveAs(blob, `${ideaName}.pdf`);
            }}
          >
            Download PDF
          </button> */}
            {/* <img src={image} height={200} width={200}></img> */}
            {/* {data && (
            <PDFDownloadLink
              document={<MyDocument />}
              fileName='somename.pdf'
            >
              {({ blob, url, loading, error }) =>
                loading ? 'Loading document...' : 'Download now!'
              }
            </PDFDownloadLink>
          )} */}
            {/* {marketProblemSection && (
          <PDFViewer data={marketProblemSection}>
            <MyDocument />
          </PDFViewer>
        )} */}
          </div>
        </div>
      </>
    ),
    [data]
  );
};

export default StartupSuccess;
