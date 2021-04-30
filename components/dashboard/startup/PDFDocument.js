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

// const image = avatarExists != 'blank' ? avatarExists : imageNameExists;
// console.log(image);

const MyDocument1 = ({ data }) => {
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

  //   const data = {
  //     ideaName,
  //     ideaDesc,
  //     ideaCountry,
  //     startupField,
  //     startupEmail,
  //     startupPhone,
  //     imageNameExists,
  //     marketProblemSection,
  //     marketSolutionSection,
  //     foundersSection,
  //     productOverviewSection,
  //     productPromotionSection,
  //     productBenefitsSection,
  //     marketOverviewSection,
  //     competitorsSection,
  //     targetCustomersSection,
  //     competitionDistinguishSection,
  //     startupCostsSection,
  //     runningCostsSection,
  //     financingSection,
  //     businessModelOverviewSection,
  //     businessGrowSection,
  //     whySuccessSection,
  //   };

  const image =
    data.avatarExists != 'blank'
      ? data.avatarExists
      : `/png/${data.imageNameExists}.png`;
  console.log('data - ', data);
  console.log('dataMarketProblem - ', data.marketProblemSection);

  return (
    <Document>
      <Page size='A4' style={styles.homePage}>
        <View style={styles.homePageTitleSection}>
          <Text style={styles.homePageTitle}>Startup idea plan</Text>
          <Text style={styles.homePageDesc}>
            {data.ideaName}
          </Text>
          <Image
            src={image}
            style={styles.image}
            height='250px'
            width='250px'
          />
          <View style={styles.leftDescBlock}>
            <Text style={styles.leftDescBlockText}>{data.ideaDesc}</Text>
          </View>
        </View>
        <View style={styles.rightBar}></View>
        <View style={styles.rightBarContact}>
          <Text>{data.startupField}</Text>
          <Text style={styles.countryText}>{data.ideaCountry}</Text>
          <Text style={styles.emailText}>{data.startupEmail}</Text>
          <Text style={styles.phoneNumberText}>{data.startupPhone}</Text>
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
              Market problem that needs to be solved.
            </Text>
            <Text style={styles.sectionText}>{data.marketProblemSection}</Text>
          </View>
          <View style={styles.sectionContainerTwo}>
            <Text style={styles.sectionHeadingTwo}>
              Solution that solves this market problem.
            </Text>
            <Text style={styles.sectionText}>{data.marketSolutionSection}</Text>
          </View>
          <View style={styles.sectionContainerThree}>
            <Text style={styles.sectionHeadingThree}>
              Who is behind the foundation of the future company?
            </Text>
            <Text style={styles.sectionText}>{data.foundersSection}</Text>
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
              Detailed description of the product vision.
            </Text>
            <Text style={styles.sectionText}>
              {data.productOverviewSection}
            </Text>
          </View>
          <View style={styles.sectionContainerTwo}>
            <Text style={styles.sectionHeadingTwo}>
              How will other people find out about the product?
            </Text>
            <Text style={styles.sectionText}>
              {data.productPromotionSection}
            </Text>
          </View>
          <View style={styles.sectionContainerThree}>
            <Text style={styles.sectionHeadingThree}>
              What benefits will this product brings to customers?
            </Text>
            <Text style={styles.sectionText}>
              {data.productBenefitsSection}
            </Text>
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
              General insight into the market.
            </Text>
            <Text style={styles.sectionText}>{data.marketOverviewSection}</Text>
          </View>
          <View style={styles.sectionContainerTwo}>
            <Text style={styles.sectionHeadingTwo}>
              Who are the major competitors in the market?
            </Text>
            <Text style={styles.sectionText}>{data.competitorsSection}</Text>
          </View>
          <View style={styles.sectionContainerTwo}>
            <Text style={styles.sectionHeadingTwo}>
              What makes this startup stand out from the competition?
            </Text>
            <Text style={styles.sectionText}>
              {data.competitionDistinguishSection}
            </Text>
          </View>
          <View style={styles.sectionContainerThree}>
            <Text style={styles.sectionHeadingThree}>
              Target group of startup customers.
            </Text>
            <Text style={styles.sectionText}>
              {data.targetCustomersSection}
            </Text>
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
            <Text style={styles.sectionText}>{data.startupCostsSection}</Text>
          </View>
          <View style={styles.sectionContainerTwo}>
            <Text style={styles.sectionHeadingTwo}>
              Approximate running costs, based on startup growth.
            </Text>
            <Text style={styles.sectionText}>{data.runningCostsSection}</Text>
          </View>
          <View style={styles.sectionContainerThree}>
            <Text style={styles.sectionHeadingThree}>
              How does the idea will be fund?
            </Text>
            <Text style={styles.sectionText}>{data.financingSection}</Text>
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
              Startup business model and legal structure overview.
            </Text>
            <Text style={styles.sectionText}>
              {data.businessModelOverviewSection}
            </Text>
          </View>
          <View style={styles.sectionContainerTwo}>
            <Text style={styles.sectionHeadingTwo}>
              Predictions for startup growth.
            </Text>
            <Text style={styles.sectionText}>{data.businessGrowSection}</Text>
          </View>
          <View style={styles.sectionContainerThree}>
            <Text style={styles.sectionHeadingThree}>
              Why will this particular startup succeed?
            </Text>
            <Text style={styles.sectionText}>{data.whySuccessSection}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default MyDocument1;
