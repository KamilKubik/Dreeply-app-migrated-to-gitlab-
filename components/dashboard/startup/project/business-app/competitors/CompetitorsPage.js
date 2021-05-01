import React, { useEffect, useState } from 'react';
import { db } from '../../../../../../lib/firebase';
import NavbarTemplate from '../../../../NavbarTemplate';
import CashFlowPDF from '../cash-flow/CashFlowPDF';
import Competitor from './Competitor';
import Cookies from 'js-cookie';
import Router from 'next/router';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import CompetitorsPDF from './CompetitorsPDF';
// Drag & drop
// Mobile friendly
import { useWindowSize } from '../../../../../../utils/useWindowSize';

const CompetitorsPage = () => {
  const [projectId, setProjectId] = useState('');
  const [documentId, setDocumentId] = useState('');
  const [competitors, setCompetitors] = useState();
  const size = useWindowSize();
  const [loadingHelper, setLoadingHelper] = useState(false);

  useEffect(async () => {
    const userUid = Cookies.get('uid');
    // console.log(Router.query.project);
    console.log(userUid && Router.query.project);
    if (userUid && Router.query.project) {
      const data = db.collection('projects').where('uid', '==', userUid);
      data
        .where('projectName', '==', Router.query.project)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach(async (doc1) => {
            setProjectId(doc1.data().projectId);

            db.collection('projects')
              .doc(doc1.data().projectId)
              .collection('competitors')
              .doc(Router.query.project)
              .collection('inputs')
              .onSnapshot((serverUpdate) => {
                serverUpdate.docs.map((doc) => {
                  console.log(doc.data());
                  const data = doc.data();
                  setDocumentId(doc.id);
                  setCompetitors(data.competitorsArray);
                  setLoadingHelper(false);
                });
              });
          });
        });
    } else {
      console.log('Loading failed');
      setLoadingHelper(true);
    }
  }, [loadingHelper, Router.query.project]);

  console.log(competitors);

  const onNewCompetitorAdd = async () => {
    const wholeCompetitorsArray = [...competitors];
    const newCompetitor = {
      image: '',
      title: '',
      location: '',
      employees: '',
      revenue: '',
      index: uuidv4(),
      // Elements
      companyDescription: '',
      businessModel: '',
      productOverview: '',
      promotionStrategy: '',
      companyStrengths: '',
      companyWeaknesses: '',
      opportunities: '',
    };
    wholeCompetitorsArray.push(newCompetitor);
    setCompetitors(wholeCompetitorsArray);
    // Firebase update
    await db
      .collection('projects')
      .doc(projectId)
      .collection('competitors')
      .doc(Router.query.project)
      .collection('inputs')
      .doc(documentId)
      .update({ competitorsArray: wholeCompetitorsArray });
  };

  return (
    <NavbarTemplate>
      <div className="min-h-screen w-full relative flex flex-col items-center text-primarydark">
        {/* <div className="w-full xlContainer:max-w-xlContainerBreak xxlContainer:max-w-xxlContainerBreak relative mt-16"> */}
        <div className="w-full max-w-full relative mt-8 mdContainer:mt-16 mb-16 px-8 mdContainer:px-16 lgContainer:px-32 bigContainer:px-48 big2Container:px-64 big3Container:px-80 QHD:max-w-QHD">
          <div className="relative grid grid-cols-2 grid-rows-1 grid-flow-col">
            <div className="flex items-center">
              <svg
                height="30"
                width="30"
                className="fill-current text-primary dark:text-primarydark"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
              >
                <title>Landing Success</title>
                <g id="Landing_Success" data-name="Landing Success">
                  <path
                    className="cls-1"
                    d="M109.3,90.1A46,46,0,0,0,65,36V20.08c1.78-.62,7.21-2.14,12.57.23a19.33,19.33,0,0,0,14.82,0c.87-.38.61.31.61-17.93a1,1,0,0,0-1.43-.93c-.07,0-6.69,2.87-13.18,0A19.41,19.41,0,0,0,65,.93,1,1,0,0,0,63,1V36a45.86,45.86,0,0,0-28.66,10.8C16.18,40.48,4,40,.79,45.51-2.29,50.86,3.94,59.3,10,65.68A11,11,0,0,0,18,83c.81,38.41,46.08,59.2,75.66,34.21,8.53,3,29,9.15,33.55,1.31C130.39,113,123.86,102.65,109.3,90.1ZM77.59,3.31A19.39,19.39,0,0,0,91,3.83V18.68c-1.79.62-7.22,2.13-12.57-.23A19.19,19.19,0,0,0,65,17.93V3.08C66.81,2.46,72.24,1,77.59,3.31ZM65,45v-7c39.69.91,58,50.27,28.21,76.81C71.32,107,46,92.66,27.77,78.64a11,11,0,0,0-3.2-16.13A43.88,43.88,0,0,1,63,38.06V45A1,1,0,0,0,65,45ZM32.55,48.36a46.21,46.21,0,0,0-9.83,13.28,10.93,10.93,0,0,0-11.4,2.47C-8.39,43.23,5.23,39.08,32.55,48.36ZM10,72a9,9,0,1,1,9,9A9,9,0,0,1,10,72Zm10,11a11,11,0,0,0,6.34-2.82c18.45,14.21,43.45,28.35,65.05,36.22C63,139.16,20.83,119.1,20.05,83Zm105.4,34.5c-2.51,4.35-14,3.62-30-1.85a45.61,45.61,0,0,0,13.42-23.21C121.59,103.58,128,113.12,125.45,117.47Z"
                  />
                </g>
              </svg>
              <p className="text-primarydark text-xl ssmContainer:text-2xl mt-2 pl-2 dark:text-background">Competitors analysis</p>
            </div>
            {size.width > 680 && <CompetitorsPDF />}
          </div>
          <div>
            <h1 className="text-secondary text-base ssmContainer:text-md text-gray">Manage your startup competitors</h1>
          </div>
          <div className="w-full bg-white rounded-2xl mt-12 p-8">
            <div className="flex justify-between items-center">
              <p className="text-primarydark text-md ssmContainer:text-lg">Competitors</p>
              <Image className="cursor-pointer" onClick={onNewCompetitorAdd} src="/competitors/add1.svg" height={32} width={32} />
            </div>
            <div className="grid grid-cols-1frr normalContainer:grid-cols-2fr gap-x-12">
              {competitors &&
                competitors.map((competitor, index) => (
                  <Competitor
                    setCompetitors={setCompetitors}
                    key={index}
                    data={competitor}
                    projectId={projectId}
                    documentId={documentId}
                    competitors={competitors}
                    index={index}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </NavbarTemplate>
  );
};

export default CompetitorsPage;
