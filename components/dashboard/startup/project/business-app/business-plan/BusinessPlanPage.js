import React, { useState, useEffect, useRef } from 'react';
import Cookies from 'js-cookie';
import { db } from '../../../../../../lib/firebase';
import { useRouter } from 'next/router';
import NavbarTemplate from '../../../../NavbarTemplate';
import TippyMonster from '../../../../Tippy';
import ExitComponent from '../../../ExitComponent';
import ReactPDFDocument from '../ReactPDFDocument';
import SectionsManager from './SectionsManager';

const BusinessPlanPage = () => {
  const router = useRouter();
  const [sectionFields, setSectionFields] = useState([]);
  const [sections, setSections] = useState([]);
  const [projectId, setProjectId] = useState('');
  const [selectedSection, setSelectedSection] = useState(null);

  useEffect(async () => {
    const userUid = await Cookies.get('uid');
    // console.log(router.query.project);
    if (userUid && router.query.project) {
      console.log(userUid);
      const data = await db.collection('projects').where('uid', '==', userUid);
      data
        .where('projectName', '==', router.query.project)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach(async (doc1) => {
            setProjectId(doc1.data().projectId);

            await db
              .collection('projects')
              .doc(doc1.data().projectId)
              .collection('businessPlan')
              .doc(router.query.project)
              .collection('inputs')
              .onSnapshot((serverUpdate) => {
                serverUpdate.docs.map((doc) => {
                  console.log(doc.data());
                  setSections([{ id: doc.id, ...doc.data() }]);
                  setSectionFields(doc.data().fields);
                });
              });
          });
        });
    }
    sections && setSelectedSection(sections[0]);
  }, [router.query.project]);
  console.log(sectionFields);

  const addNewChart = () => {};

  const addNewHeader = () => {};

  const addNewSpacing = () => {};

  const addNewTable = () => {};

  const addNewField = () => {};

  return (
    <>
      <TippyMonster
        businessPlan
        contentClass="h-32 w-80 shadow-lg rounded-2xl bg-primary flex justify-center items-center"
        contentText="In this place, you can create a business plan that will be completely customized to your needs, so this time, I won't guide you through the process of creating one. "
      />
      <ExitComponent />
      <NavbarTemplate>
        <div className="min-h-screen w-full relative flex flex-col items-center">
          <div id="left-bar" className="z-50 h-0 w-40 bg-primary fixed top-0 left-0">
            <ul className="circles1" style={{ zIndex: -1 }}>
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
            </ul>
            <img
              id="exit"
              //   onClick={this.onLeftBarHidden}
              src="/chart/exit1.svg"
              width={15}
              width={15}
              style={{ position: 'absolute', top: '1%', right: '-15%', visibility: 'hidden', opacity: 0 }}
            />
            <div className="h-full w-full grid grid-cols-1frr grid-rows-5fr justify-items-center items-center">
              <div
                onClick={() => this.addNewHeader()}
                id="container"
                className="invisible opacity-0 mt-4 w-full h-full flex flex-col justify-center items-center hover:shadow-2xl transform transition duration-500 ease-in-out cursor-pointer"
              >
                <div
                  id="left-element"
                  className="transform scale-0 w-4/6 h-16 bg-background rounded-2xl shadow-lg flex justify-center items-center"
                >
                  <img src="/chart/header.svg" width={55} height={55} />
                </div>
                <p id="left-text" className="transform scale-0 text-center text-background mt-1 text-sm cursor-default">
                  Header
                </p>
              </div>
              <div
                onClick={() => this.addNewField()}
                id="container1"
                className="invisible opacity-0 mt-4 w-full h-full flex flex-col justify-center items-center hover:shadow-2xl transform transition duration-500 ease-in-out cursor-pointer"
              >
                <div
                  id="left-element1"
                  className="transform scale-0 w-4/6 h-16 bg-background rounded-2xl shadow-lg flex justify-center items-center"
                >
                  <img src="/chart/text.svg" width={55} height={55} />
                </div>
                <p id="left-text1" className="transform scale-0 text-center text-background mt-1 text-sm cursor-default">
                  Text
                </p>
              </div>
              <div
                onClick={() => this.addNewSpacing()}
                id="container2"
                className="invisible opacity-0 mt-4 w-full h-full flex flex-col justify-center items-center hover:shadow-2xl transform transition duration-500 ease-in-out cursor-pointer"
              >
                <div
                  id="left-element2"
                  className="transform scale-0 w-4/6 h-16 bg-background rounded-2xl shadow-lg flex justify-center items-center"
                >
                  <img src="/spacing/spacing.svg" width={55} height={55} />
                </div>
                <p id="left-text2" className="transform scale-0 text-center text-background mt-1 text-sm cursor-default">
                  Spacing
                </p>
              </div>
              <div
                onClick={() => this.addNewChart()}
                id="container3"
                className="invisible opacity-0 mt-4 w-full h-full flex flex-col justify-center items-center hover:shadow-2xl transform transition duration-500 ease-in-out cursor-pointer"
              >
                <div
                  id="left-element3"
                  className="transform scale-0 w-4/6 h-16 bg-background rounded-2xl shadow-lg flex justify-center items-center"
                >
                  <img src="/chart/chart.svg" width={55} height={55} />
                </div>
                <p id="left-text3" className="transform scale-0 text-center text-background mt-1 text-sm cursor-default">
                  Chart
                </p>
              </div>
              <div
                onClick={() => this.addNewTable()}
                id="container4"
                className="invisible opacity-0 mt-4 w-full h-full flex flex-col justify-center items-center hover:shadow-2xl transform transition duration-500 ease-in-out cursor-pointer"
              >
                <div
                  id="left-element4"
                  className="transform scale-0 w-4/6 h-16 bg-background rounded-2xl shadow-lg flex justify-center items-center"
                >
                  <img src="/table/table.svg" width={55} height={55} />
                </div>
                <p id="left-text4" className="transform scale-0 text-center text-background mt-1 text-sm cursor-default">
                  Table
                </p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-full relative mt-16 px-8 screenSmall:px-32 text-primarydark">
            <div className="grid grid-cols-2 grid-rows-1 grid-flow-col">
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
                <p className="text-primarydark text-2xl screenLarge:text-3xl mt-2 pl-2 dark:text-background">Business plan</p>
              </div>
              {/* <PDFDocument allData={this.state.sectionFields} pdfChartsCreate={this.pdfChartsCreate} projectId={this.state.projectId} /> */}
              {/* <ReactPDFDocument sectionFields={this.state.sectionFields} pdfChartsCreate={this.pdfChartsCreate} projectId={this.state.projectId} /> */}
            </div>
            <div>
              <h1 className="text-secondary text-md screenLarge:text-base text-gray">Create your business plan any way you want</h1>
            </div>
            {/* SECTIONS */}
            <div className="grid grid-cols-businessSmall screenSmall:grid-cols-business screenMedium:grid-cols-businessMedium grid-flow-col gap-x-8">
              <div className="w-full h-maxcontent mt-12 pb-20">
                {/* {this.state.selectedSection ? (
                  (console.log('selected --> ', this.state.selectedSection),
                  (
                    <EditorInputElement
                      // sectionUpdate={sectionUpdate}
                      // sectionUpdate={sectionUpdate}
                      sectionTitleUpdate={this.sectionTitleUpdate}
                      tableUpdate={this.tableUpdate}
                      headerUpdate={this.headerUpdate}
                      reorderElements={this.reorderElements}
                      projectId={this.state.projectId}
                      addChart={this.addChart}
                      addNewHeader={this.addNewHeader}
                      chartTypeUpdate={this.chartTypeUpdate}
                      onDatasetLabel6Update={this.onDatasetLabel6Update}
                      onDatasetLabel5Update={this.onDatasetLabel5Update}
                      onDatasetLabel4Update={this.onDatasetLabel4Update}
                      onDatasetLabel3Update={this.onDatasetLabel3Update}
                      onDatasetLabel2Update={this.onDatasetLabel2Update}
                      onDatasetLabel1Update={this.onDatasetLabel1Update}
                      onDataset6Update={this.onDataset6Update}
                      onDataset5Update={this.onDataset5Update}
                      onDataset4Update={this.onDataset4Update}
                      onDataset3Update={this.onDataset3Update}
                      onDataset2Update={this.onDataset2Update}
                      onDataset1Update={this.onDataset1Update}
                      chartLabelsUpdate={this.chartLabelsUpdate}
                      chartValueUpdate={this.chartValueUpdate}
                      addNewChart={this.addNewChart}
                      deleteParticularField={this.deleteParticularField}
                      addNewField={this.addNewField}
                      fieldUpdate={this.fieldUpdate}
                      sectionUpdate={this.sectionUpdate}
                      selectedSection={this.state.selectedSection}
                      selectedSectionIndex={this.state.selectedSectionIndex}
                      sectionFields={this.state.sectionFields}
                    />
                  ))
                ) : (
                  <div className="w-full bg-white rounded-2xl p-8 flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                      <img src="/empty-business-plan/empty1.svg" height={300} width={300} />
                      <p className="mt-4">Start creating your business plan by adding a new section!</p>
                    </div>
                  </div>
                )} */}
              </div>
              <SectionsManager
                sectionFields={sectionFields}
                sections={sections}
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
                projectId={projectId}
                // selectedSection={this.state.selectedSection}
                // reorderSections={this.reorderSections}
                // sectionFields={this.state.sectionFields}
                // selectedSectionIndex={this.state.selectedSectionIndex}
                // selectSectionPage={this.selectSectionPage}
                // newSectionPage={this.newSectionPage}
                // deleteSectionPage={this.deleteSectionPage}
              />
            </div>
          </div>
        </div>
      </NavbarTemplate>
    </>
  );
};

export default BusinessPlanPage;
