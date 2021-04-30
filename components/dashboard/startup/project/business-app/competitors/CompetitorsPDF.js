import React, { useEffect, useRef, useState } from 'react';
import { saveAs } from 'file-saver';
import Router from 'next/router';
import Cookies from 'js-cookie';
import { db } from '../../../../../../lib/firebase';
// import font from '../../../../../../public/fonts/comfortaa.ttf';
import gsap, { Linear } from 'gsap';
import { useWindowSize } from '../../../../../../utils/useWindowSize';

import { Font, pdf, Page, Text, View, Image, Document, StyleSheet, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';

// Font.register({ src: '/fonts/poppins.ttf', family: 'Poppins', format: 'truetype' });
Font.register({ src: '/fonts/comfortaa.ttf', family: 'Comfortaa' });

const styles = StyleSheet.create({
  homePage: {
    padding: 36,
    fontFamily: 'Comfortaa',
    backgroundColor: '#f8f9fb',
    color: '#0a1230',
  },
  mainTitle: {
    fontSize: 22,
    color: '#0a1230',
    textAlign: 'center',
    paddingBottom: 42,
  },
});

const MyDocument = ({ competitors }) => {
  return (
    <Document scale={96 / 72} renderMode="svg">
      {competitors.map((competitor, index) => (
        <Page size="A4" style={styles.homePage}>
          {index === 0 && (
            <View>
              <Text style={styles.mainTitle}>Competitors analysis</Text>
            </View>
          )}
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            {competitor.image === '' ? (
              <View
                style={{
                  height: 72,
                  width: 72,
                  backgroundColor: '#6C63FF',
                  borderRadius: 9999,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image src="/competitors/empty-image-pdf.png" height={64} width={64} />
              </View>
            ) : (
              <View></View>
            )}
            {/* Company overview start */}
            <View style={{ fontSize: 12 }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignContent: 'space-between',
                  marginLeft: 32,
                  width: '100%',
                }}
              >
                {competitor.title !== '' && (
                  <View style={{ backgroundColor: '#fcfefe', borderRadius: 16, paddingVertical: 8, paddingHorizontal: 16 }}>
                    <Text>name / {competitor.title}</Text>
                  </View>
                )}
                {competitor.location !== '' && (
                  <View style={{ backgroundColor: '#fcfefe', borderRadius: 16, paddingVertical: 8, paddingHorizontal: 16 }}>
                    <Text>location / {competitor.location}</Text>
                  </View>
                )}
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignContent: 'space-between',
                  marginLeft: 32,
                  marginTop: 12,
                  width: '100%',
                }}
              >
                {competitor.employees !== '' && (
                  <View style={{ backgroundColor: '#fcfefe', borderRadius: 16, paddingVertical: 8, paddingHorizontal: 16 }}>
                    <Text>employees / {competitor.employees}</Text>
                  </View>
                )}
                {competitor.revenue !== '' && (
                  <View style={{ backgroundColor: '#fcfefe', borderRadius: 16, paddingVertical: 8, paddingHorizontal: 16 }}>
                    <Text>revenue / {competitor.revenue}</Text>
                  </View>
                )}
              </View>
            </View>
            {/* Company overview end */}
          </View>
          {/* Company description */}
          {competitor.companyDescription !== '' && (
            <View wrap={false} style={{ marginTop: 32 }}>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', fontSize: 14 }}>
                <Image src="/competitors/pdf/description.png" style={{ height: 20, width: 20 }} />
                <Text style={{ marginLeft: 8 }}>Company description</Text>
              </View>
              <View
                style={{
                  backgroundColor: '#fcfefe',
                  borderRadius: 16,
                  paddingVertical: 12,
                  paddingHorizontal: 16,
                  marginTop: 8,
                  fontSize: 10,
                }}
              >
                <Text>{competitor.companyDescription}</Text>
              </View>
            </View>
          )}
          {competitor.businessModel !== '' && (
            <View wrap={false} style={{ marginTop: 32 }}>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', fontSize: 14 }}>
                <Image src="/competitors/pdf/model.png" style={{ height: 20, width: 20 }} />
                <Text style={{ marginLeft: 8 }}>Business model</Text>
              </View>
              <View
                style={{
                  backgroundColor: '#fcfefe',
                  borderRadius: 16,
                  paddingVertical: 12,
                  paddingHorizontal: 16,
                  marginTop: 8,
                  fontSize: 10,
                }}
              >
                <Text>{competitor.businessModel}</Text>
              </View>
            </View>
          )}
          {competitor.productOverview !== '' && (
            <View wrap={false} style={{ marginTop: 32 }}>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', fontSize: 14 }}>
                <Image src="/competitors/pdf/product.png" style={{ height: 20, width: 20 }} />
                <Text style={{ marginLeft: 8 }}>Product overview</Text>
              </View>
              <View
                style={{
                  backgroundColor: '#fcfefe',
                  borderRadius: 16,
                  paddingVertical: 12,
                  paddingHorizontal: 16,
                  marginTop: 8,
                  fontSize: 10,
                }}
              >
                <Text>{competitor.productOverview}</Text>
              </View>
            </View>
          )}
          {competitor.promotionStrategy !== '' && (
            <View wrap={false} style={{ marginTop: 32 }}>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', fontSize: 14 }}>
                <Image src="/competitors/pdf/promotion.png" style={{ height: 20, width: 20 }} />
                <Text style={{ marginLeft: 8 }}>Promotion strategy</Text>
              </View>
              <View
                style={{
                  backgroundColor: '#fcfefe',
                  borderRadius: 16,
                  paddingVertical: 12,
                  paddingHorizontal: 16,
                  marginTop: 8,
                  fontSize: 10,
                }}
              >
                <Text>{competitor.promotionStrategy}</Text>
              </View>
            </View>
          )}
          {competitor.companyStrengths !== '' && (
            <View wrap={false} style={{ marginTop: 32 }}>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', fontSize: 14 }}>
                <Image src="/competitors/pdf/strengths.png" style={{ height: 20, width: 20 }} />
                <Text style={{ marginLeft: 8 }}>Company strengths</Text>
              </View>
              <View
                style={{
                  backgroundColor: '#fcfefe',
                  borderRadius: 16,
                  paddingVertical: 12,
                  paddingHorizontal: 16,
                  marginTop: 8,
                  fontSize: 10,
                }}
              >
                <Text>{competitor.companyStrengths}</Text>
              </View>
            </View>
          )}
          {competitor.companyWeaknesses !== '' && (
            <View wrap={false} style={{ marginTop: 32 }}>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', fontSize: 14 }}>
                <Image src="/competitors/pdf/weaknesses.png" style={{ height: 20, width: 20 }} />
                <Text style={{ marginLeft: 8 }}>Company weaknesses</Text>
              </View>
              <View
                style={{
                  backgroundColor: '#fcfefe',
                  borderRadius: 16,
                  paddingVertical: 12,
                  paddingHorizontal: 16,
                  marginTop: 8,
                  fontSize: 10,
                }}
              >
                <Text>{competitor.companyWeaknesses}</Text>
              </View>
            </View>
          )}
          {competitor.opportunities !== '' && (
            <View wrap={false} style={{ marginTop: 32 }}>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', fontSize: 14 }}>
                <Image src="/competitors/pdf/opportunities.png" style={{ height: 20, width: 20 }} />
                <Text style={{ marginLeft: 8 }}>Company opportunities</Text>
              </View>
              <View
                style={{
                  backgroundColor: '#fcfefe',
                  borderRadius: 16,
                  paddingVertical: 12,
                  paddingHorizontal: 16,
                  marginTop: 8,
                  fontSize: 10,
                }}
              >
                <Text>{competitor.opportunities}</Text>
              </View>
            </View>
          )}
        </Page>
      ))}
    </Document>
  );
};

const CompetitorsPDF = () => {
  const [competitors, setCompetitors] = useState();
  const size = useWindowSize();
  useEffect(async () => {
    const userUid = await Cookies.get('uid');
    // console.log(Router.query.project);
    console.log(userUid);
    if (userUid && Router.query.project) {
      const data = await db.collection('projects').where('uid', '==', userUid);
      data
        .where('projectName', '==', Router.query.project)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach(async (doc1) => {
            db.collection('projects')
              .doc(doc1.data().projectId)
              .collection('competitors')
              .doc(Router.query.project)
              .collection('inputs')
              .onSnapshot((serverUpdate) => {
                serverUpdate.docs.map((doc) => {
                  const data = doc.data();
                  setCompetitors(data.competitorsArray);
                });
              });
          });
        });
    }
  }, []);

  const saveContainer = useRef();
  const [saveContainerHelper, setSaveContainerHelper] = useState(false);
  const saveSectionDropDown = () => {
    if (!saveContainerHelper) {
      gsap.to(saveContainer.current, { autoAlpha: 1, duration: 1, ease: Linear });
      setSaveContainerHelper(true);
    } else if (saveContainerHelper) {
      gsap.to(saveContainer.current, { autoAlpha: 0, duration: 1, ease: Linear });
      setSaveContainerHelper(false);
    }
  };

  const dropdownButton = useRef();
  const dropdownContainer = useRef();
  const [dropdownButtonColorHelper, setDropdownButtonColorHelper] = useState(false);
  const [dropdownContainerHelper, setDropdownContainerHelper] = useState(false);
  const onSaveDropdownShow = () => {
    if (!dropdownContainerHelper) {
      gsap.to(dropdownContainer.current, { autoAlpha: 1, duration: 1, ease: Linear });
      // gsap.to(dropdownButton.current, { backgroundColor: '#6C63FF', color: '#f8f9fb', duration: 1, ease: Linear });
      setDropdownContainerHelper(true);
      setDropdownButtonColorHelper(true);
    } else if (dropdownContainerHelper) {
      gsap.to(dropdownContainer.current, { autoAlpha: 0, duration: 1, ease: Linear });
      // gsap.to(dropdownButton.current, { backgroundColor: '#f8f9fb', color: '#6C63FF', duration: 1, ease: Linear });
      setDropdownContainerHelper(false);
      setDropdownButtonColorHelper(false);
    }
  };

  return (
    <div ref={saveContainer} className="relative flex justify-start">
      {size.width < 680 ? (
        <div className="flex mt-4">
          <img
            onClick={async (e) => {
              e.preventDefault();
              const doc = <MyDocument competitors={competitors} />;
              const asPdf = pdf([]);
              asPdf.updateContainer(doc);
              const blob = await asPdf.toBlob();
              saveAs(blob, `${Router.query.project}/competitors-analysis.pdf`);
            }}
            src="/mobile-navbar/pdf.svg"
            height={30}
            width={30}
          />
          {/* <img src="/mobile-navbar/link.svg" height={30} width={30} /> */}
        </div>
      ) : (
        <div className="relative w-full flex justify-end items-center">
          <button
            ref={dropdownButton}
            onClick={onSaveDropdownShow}
            className={`hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-8 rounded-2xl mt-2 dark:text-primarydark dark:border-primarydark ${
              dropdownButtonColorHelper ? 'bg-primary text-background dark:bg-primarydark dark:text-background' : ''
            }`}
          >
            Save my work
          </button>
          <div ref={dropdownContainer} className="absolute bg-white rounded-2xl shadow-xl p-6 top-14 z-50 invisible opacity-0">
            <div className="flex items-center justify-start">
              <img src="/mobile-navbar/success.svg" height={26} width={26} />
              <p className="text-lg ml-2">Show the world your work!</p>
            </div>
            <div className="px-6 py-4 bg-background rounded-2xl mt-2 pr-6">
              <div>
                <p className="flex">Save as PDF:</p>
                <img
                  onClick={async (e) => {
                    e.preventDefault();
                    const doc = <MyDocument competitors={competitors} />;
                    const asPdf = pdf([]);
                    asPdf.updateContainer(doc);
                    const blob = await asPdf.toBlob();
                    saveAs(blob, `${Router.query.project}/competitors-analysis.pdf`);
                  }}
                  src="/mobile-navbar/pdf.svg"
                  height={30}
                  width={30}
                  className="mt-2 cursor-pointer"
                />
              </div>
              <div className="w-full justify-start items-center mt-4">
                <p>Share your competitors analysis with this public link:</p>
                <div className="w-full flex mt-2">
                  <input value="www.project.com" className="bg-linkBackground text-sm px-2 py-1 dark:text-primarydark" />
                  <img src="/mobile-navbar/foreign.svg" height={28} width={28} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* <button
        onClick={async (e) => {
          e.preventDefault();
          const doc = <MyDocument competitors={competitors} />;
          const asPdf = pdf([]);
          asPdf.updateContainer(doc);
          const blob = await asPdf.toBlob();
          saveAs(blob, `${Router.query.project}/competitors-analysis.pdf`);
        }}
        className="hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-8 rounded-2xl mt-2 dark:text-primarydark dark:border-primarydark"
      >
        PDF Save
      </button> */}
      {/* <div className="absolute top-12 w-24 bg-background shadow">Export as:</div> */}
    </div>
  );
};

export default CompetitorsPDF;
