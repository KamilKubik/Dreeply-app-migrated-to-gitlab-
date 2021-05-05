import React, { Component, useEffect, useMemo, useState } from 'react';
import firebase, { db } from '../../../../../lib/firebase';
import { useAuth } from '../../../../../lib/newAuth';
import NavbarTemplate from '../../../NavbarTemplate';
import EditorInputElement from './Editor';
import SectionManager from './SectionManager';
import { useStateWithPromise } from '../../../../../utils/useStateWithPromise';
import { useCustomState } from '../../../../../utils/useCustomState';
import { v4 as uuidv4 } from 'uuid';
import ChartComponent from './Chart';
import PDFDocument from './PDFDocument';
import Image from 'next/image';
import gsap, { Linear } from 'gsap';
import Cookies from 'js-cookie';
import Router from 'next/router';
import ChartJsImage from 'chartjs-to-image';
import { isMobile } from 'react-device-detect';
import TippyMonster from '../../../Tippy';
import ExitComponent from '../../ExitComponent';
import ReactPDFDocument from './ReactPDFDocument';

// import { useAsyncCallback } from 'react-async-hook';

// const BusinessPlanApp = () => {
//   const [sections, setSections] = useStateWithPromise(null);
//   const [selectedSection, setSelectedSection] = useState(null);
//   const [selectedSectionIndex, setSelectedSectionIndex] = useState(null);
//   const { currentUser } = useAuth();

//   useEffect(() => {
//     db.collection('currentBusinessPlan')
//       .doc(currentUser.uid)
//       .collection('inputs')
//       .onSnapshot((querySnapshot) => {
//         const sections = querySnapshot.docs.map((_doc) => {
//           const data = _doc.data();
//           data['id'] = _doc.id;
//           return data;
//         });
//         setSections(sections);
//       });
//   }, [selectedSection, deleteHelper]);

//   const selectSectionPage = (section, index) => {
//     console.log(section);
//     setSelectedSectionIndex(index);
//     setSelectedSection(section);
//   };

//   const sectionUpdate = (id, sectionObj) => {
//     console.log(id, sectionObj);
//     console.log('ss', selectedSection);
//     console.log(sections);
//     console.log(deleteHelper);
//     // if (id == selectedSection.id && !deleteHelper) {
//     // const willsee = sections.filter((_section) => _section.id === id);
//     // console.log(willsee);
//     // PROBLEM W TYM, ŻE TO PRÓBOJE ZUPDATOWAĆ DOKUMENT, KTÓREGO NIE MA, BO WŁAŚNIE GO USUNELIŚMY, TYLKO TO USUWANIE NIE JEST ASYNCHRONICZNE TAM U GÓRY
//     // sectionObj.title !== '' || sectionObj.body !== '' id == selectedSection.id
//     console.log(sections.includes(sectionObj.title));
//     if (sectionObj !== selectedSection && sectionObj.title && sectionObj.body && sectionObj.id && typeof sectionObj != 'undefined' && deleteHelper == false) {
//       db.collection('currentBusinessPlan')
//       .doc(currentUser.uid)
//       .collection('inputs')
//       .doc(id)
//       .update({
//         title: sectionObj.title,
//         body: sectionObj.body,
//         timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//       });
//       console.log(' --- UPDATED --- ');
//       setDeleteHelper(false);
//       return
//     } else {
//       return
//     }
//   };

//   const [loading, setLoading] = useState(false);
//   const [newIdSection, setNewIdSection] = useState(null);

//   // ADD NEW SECTION
//   const newSectionPage = async (title) => {
//     const section = {
//       title,
//       body: '',
//     };
//     const newFromDB = await db
//       .collection('currentBusinessPlan')
//       .doc(currentUser.uid)
//       .collection('inputs')
//       .add({
//         title: section.title,
//         body: section.body,
//         timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//       });
//     const newId = newFromDB.id;
//     setNewIdSection(newId);
//     console.log(newId);
//     setLoading(true);
//     await setSections([...sections, section]);
//     console.log(sections);
//     // To, co dzieje się pod tą linijką, służy między innymi temu, żeby wyświetlić od razu nową sekcję, po jej utworzeniu (po prostu tą nową sekcję, którą tworzymy, przypisujemy jako selectedSection).
//     setLoading(true);
//     // setTimeout(() => {
//     //   console.log('sections after timeout - ', sections);
//     //   const newSectionIndex = sections.indexOf(
//     //     sections.filter((_section) => _section.id === newId)[0]
//     //   );
//     //   console.log(newSectionIndex);
//     //   setSelectedSection(sections[newSectionIndex]);
//     //   setSelectedSectionIndex(newSectionIndex);
//     //   console.log('SELECTED SECTION --> ', selectedSection);
//     // }, 2000)
//   };

//   console.log('SECTIONS --> ', sections);
//   console.log('SELECTED SECTION --> ', selectedSection);

//   useEffect(() => {
//     if (loading) {
//       const newSectionIndex = sections.indexOf(
//         sections.filter((_section) => _section.id === newIdSection)[0]
//       );
//       console.log(newSectionIndex);
//       console.log('here? - ', selectedSection);
//       if (newSectionIndex !== -1) {
//         setSelectedSection(sections[newSectionIndex]);
//         setSelectedSectionIndex(newSectionIndex);
//       }
//       // reset
//       setNewIdSection(null);
//       setLoading(false);
//     }
//   }, [loading]);

//   const [deleteHelper, setDeleteHelper] = useCustomState(false);
//   const [what, setWhat] = useState();

//   // DELETE SECTION
//   const deleteSectionPage = (section) => {
//     setDeleteHelper(true);
//     const sectionIndex = sections.indexOf(section);
//     // To musi być async / await, asynchroniczne jakimś cudem !!!
//     // setSections(async () => await sections.filter((_section) => _section !== section));
//     // setSections(sections.filter((_section) => _section !== section));
//     async () => await setSections(sections.filter((_section) => _section !== section)).then((sect) => sect);
//     if (selectedSectionIndex === sectionIndex) {
//       // Jeśli usuwamy sekcję, którą obecnie mamy wybraną (activeSection), to robimy to:
//       setSelectedSectionIndex(null);
//       setSelectedSection(null);
//     } else {
//       // Po tym, jak usuniemy element, to selectedSection nie istnieje, dlatego wybieramy jako selectedSection, następną sekcję z listy
//       // --> FIRST VERSION
//       // sections.length >= 1
//       //   ? selectSectionPage(
//       //       sections[selectedSectionIndex - 1],
//       //       selectedSectionIndex - 1
//       //     )
//       //   : (setSelectedSectionIndex(null), setSelectedSection(null));
//       // --> SECOND VERSION (chodzi o to, żeby po usunięciu danej sekcji, selectedSection nie było undefined)
//       if (sections.length >= 1) {
//         selectedSectionIndex < sectionIndex
//           ? selectSectionPage(
//               sections[selectedSectionIndex],
//               selectedSectionIndex
//             )
//           : selectSectionPage(
//               sections[selectedSectionIndex - 1],
//               selectedSectionIndex - 1
//             );
//       } else {
//         setSelectedSection(null);
//         setSelectedSectionIndex(null);
//       }
//     }

//     db.collection('currentBusinessPlan')
//       .doc(currentUser.uid)
//       .collection('inputs')
//       .doc(section.id)
//       .delete();
//   };

//   return useMemo(
//     () => (
//       <NavbarTemplate>
//         <div className='min-h-screen w-full relative flex flex-col items-center'>
//           <div className='w-full max-w-full relative mt-16 px-32'>
//             <div className='grid grid-cols-2 grid-rows-1 grid-flow-col'>
//               <div className='flex items-center'>
//                 <svg
//                   height='30'
//                   width='30'
//                   className='fill-current text-primary dark:text-primarydark'
//                   xmlns='http://www.w3.org/2000/svg'
//                   viewBox='0 0 128 128'
//                 >
//                   <title>Landing Success</title>
//                   <g id='Landing_Success' data-name='Landing Success'>
//                     <path
//                       className='cls-1'
//                       d='M109.3,90.1A46,46,0,0,0,65,36V20.08c1.78-.62,7.21-2.14,12.57.23a19.33,19.33,0,0,0,14.82,0c.87-.38.61.31.61-17.93a1,1,0,0,0-1.43-.93c-.07,0-6.69,2.87-13.18,0A19.41,19.41,0,0,0,65,.93,1,1,0,0,0,63,1V36a45.86,45.86,0,0,0-28.66,10.8C16.18,40.48,4,40,.79,45.51-2.29,50.86,3.94,59.3,10,65.68A11,11,0,0,0,18,83c.81,38.41,46.08,59.2,75.66,34.21,8.53,3,29,9.15,33.55,1.31C130.39,113,123.86,102.65,109.3,90.1ZM77.59,3.31A19.39,19.39,0,0,0,91,3.83V18.68c-1.79.62-7.22,2.13-12.57-.23A19.19,19.19,0,0,0,65,17.93V3.08C66.81,2.46,72.24,1,77.59,3.31ZM65,45v-7c39.69.91,58,50.27,28.21,76.81C71.32,107,46,92.66,27.77,78.64a11,11,0,0,0-3.2-16.13A43.88,43.88,0,0,1,63,38.06V45A1,1,0,0,0,65,45ZM32.55,48.36a46.21,46.21,0,0,0-9.83,13.28,10.93,10.93,0,0,0-11.4,2.47C-8.39,43.23,5.23,39.08,32.55,48.36ZM10,72a9,9,0,1,1,9,9A9,9,0,0,1,10,72Zm10,11a11,11,0,0,0,6.34-2.82c18.45,14.21,43.45,28.35,65.05,36.22C63,139.16,20.83,119.1,20.05,83Zm105.4,34.5c-2.51,4.35-14,3.62-30-1.85a45.61,45.61,0,0,0,13.42-23.21C121.59,103.58,128,113.12,125.45,117.47Z'
//                     />
//                   </g>
//                 </svg>
//                 <p className='text-primarydark text-2xl mt-2 pl-2 dark:text-background'>
//                   Business plan
//                 </p>
//               </div>
//               <div className='flex justify-end mt-4'>
//                 <button className='hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-8 rounded-2xl mt-2 dark:text-primarydark dark:border-primarydark'>
//                   Settings
//                 </button>
//               </div>
//             </div>
//             <div>
//               <h1 className='text-secondary text-md text-gray'>
//                 Create your business plan any way you want
//               </h1>
//             </div>
//             {/* SECTIONS */}
//             <div className='grid grid-cols-8fr grid-flow-col'>
//               <div className='col-start-1 col-end-7 w-full h-maxcontent mt-12'>
//                 <h1 className='text-primarydark text-base dark:text-background'>
//                   Manage your input
//                 </h1>
//                 <div className='relative flex flex-col h-full w-full flex px-8 pt-8 pb-8 rounded-2xl bg-white dark:bg-background mt-1'>
//                   {selectedSection ? (
//                     (console.log('selected --> ', selectedSection),
//                     (
//                       <EditorInputElement
//                         // sectionUpdate={sectionUpdate}
//                         // sectionUpdate={sectionUpdate}
//                         sectionUpdate={sectionUpdate}
//                         selectedSection={selectedSection}
//                         selectedSectionIndex={selectedSectionIndex}
//                         sections={sections}
//                       />
//                     ))
//                   ) : (
//                     <div>Text section or chart???</div>
//                   )}
//                 </div>
//               </div>
//               <SectionManager
//                 sections={sections}
//                 selectedSectionIndex={selectedSectionIndex}
//                 selectSectionPage={selectSectionPage}
//                 newSectionPage={newSectionPage}
//                 deleteSectionPage={deleteSectionPage}
//               />
//             </div>
//           </div>
//         </div>
//       </NavbarTemplate>
//     ),
//     [sections, selectedSectionIndex, selectedSection]
//   );
// };

// export default BusinessPlanApp;

// Class based component
class BusinessPlanApp extends Component {
  constructor() {
    super();
    this.state = {
      selectedSectionIndex: null,
      selectedSection: null,
      sections: null,
      projectId: null,
      projectName: null,
      projectDescription: null,
      projectCountry: null,
      projectField: null,
      projectNumber: null,
      projectEmail: null,
      imageName: null,
      imageFileUrl: null,
      // routerPath: useRouter().query.project
    };
    this.addNewElement = React.createRef();
  }

  componentDidMount = async () => {
    const userUid = Cookies.get('uid');
    // console.log(Router.query.project);
    if (userUid && Router.query.project) {
      await db
        .collection('projects')
        .where('uid', '==', userUid)
        .where('projectName', '==', Router.query.project)
        .get()
        .then((querySnapshot) => {
          console.log(querySnapshot);
          const querySnap = querySnapshot.forEach((doc) => {
            console.log(doc.data());
            const data = doc.data();
            return this.setState({
              projectId: data.projectId,
              projectName: data.projectName,
              projectDescription: data.projectDescription,
              projectCountry: data.projectCountry,
              projectField: data.projectField,
              projectEmail: data.projectEmail,
              projectNumber: data.projectNumber,
              imageName: data.imageName,
              imageFileUrl: data.imageFileUrl,
            });
          });
          console.log(querySnap);
          return querySnap;
        });
      console.log(this.state.projectId);

      await db
        .collection('projects')
        .doc(this.state.projectId)
        .collection('businessPlan')
        .doc(Router.query.project)
        .collection('inputs')
        .onSnapshot((serverUpdate) => {
          const sections = serverUpdate.docs.map((_doc) => {
            const data = _doc.data();
            data['id'] = _doc.id;
            return data;
          });
          console.log(sections);
          // sections.sort((a, b) => b.createdAt - a.createdAt);
          sections.sort((a, b) => a.position - b.position);
          this.setState({ sections: sections });

          // Initial section
          if (sections && sections.length !== 0 && !this.state.selectedSection) {
            this.setState({ selectedSection: sections[0] });
          }
        });
    }

    // await db.collection('projects')
    // .doc(this.state.projectId)
    // .collection('businessPlan')
    // .where('pathName', '==', Router.query.project)
    // .where('projectId', '==', this.state.projectId)
    // .onSnapshot((serverUpdate) => {
    //   const sections = serverUpdate.docs.map((doc) => {
    //    const data = doc.data();
    //    data['id'] = doc.id;
    //    return data.sections;
    //   })
    //   const sectionsArray = sections[0];
    //   console.log(sectionsArray);
    // })

    //   db.collection('currentBusinessPlan')
    // .doc('GrcvhyJwvlWVy31QsiudoQKdKI72')
    // .collection('inputs')
    // .onSnapshot((serverUpdate) => {
    //   const sections = serverUpdate.docs.map((_doc) => {
    //     const data = _doc.data();
    //     data['id'] = _doc.id;
    //     return data;
    //   });
    //   console.log(sections);
    //   sections.sort((a, b) => b.createdAt - a.createdAt);
    //   this.setState({ sections: sections });
    // });
  };

  selectSectionPage = (section, index) => this.setState({ selectedSectionIndex: index, selectedSection: section });

  sectionTitleUpdate = async (title) => {
    let newSectionsArray = [...this.state.sections];
    newSectionsArray[this.state.selectedSectionIndex] = {
      // createdAt: this.state.selectedSection.createdAt,
      fields: this.state.selectedSection.fields,
      // timestamp: this.state.selectedSection.timestamp,
      title: title,
      position: this.state.selectedSection.position,
    };

    await this.setState({ sections: newSectionsArray });

    db.collection('projects')
      .doc(this.state.projectId)
      .collection('businessPlan')
      .doc(Router.query.project)
      .collection('inputs')
      .doc(this.state.selectedSection.id)
      .update({ title: title });
  };

  reorderElements = async (elements) => {
    console.log(elements);
    console.log(this.state.selectedSection.id);
    let newSectionsArray = [...this.state.sections];
    newSectionsArray[this.state.selectedSectionIndex] = {
      // createdAt: this.state.selectedSection.createdAt,
      fields: elements,
      // timestamp: this.state.selectedSection.timestamp,
      title: this.state.selectedSection.title,
      position: this.state.selectedSection.position,
      id: this.state.selectedSection.id,
    };

    const newSelectedSection = {
      // createdAt: this.state.selectedSection.createdAt,
      fields: elements,
      // timestamp: this.state.selectedSection.timestamp,
      title: this.state.selectedSection.title,
      position: this.state.selectedSection.position,
      id: this.state.selectedSection.id,
    };

    await this.setState({ sections: newSectionsArray });
    await this.setState({ selectedSection: newSelectedSection });

    db.collection('projects')
      .doc(this.state.projectId)
      .collection('businessPlan')
      .doc(Router.query.project)
      .collection('inputs')
      .doc(this.state.selectedSection.id)
      .update({ fields: elements });
  };

  // sectionUpdate = (id, sectionObj) => {
  //   if (sectionObj.title && sectionObj.body) {
  //   db.collection('currentBusinessPlan')
  //     .doc('GrcvhyJwvlWVy31QsiudoQKdKI72')
  //     .collection('inputs')
  //     .doc(id)
  //     .update({
  //       title: sectionObj.title,
  //       body: sectionObj.body,
  //       timestamp: firebase.firestore.FieldValue.serverTimestamp()
  //     });
  //   }
  // }

  reorderSections = async (sections) => {
    console.log(sections);

    await sections.forEach((section, index) => {
      db.collection('projects')
        .doc(this.state.projectId)
        .collection('businessPlan')
        .doc(Router.query.project)
        .collection('inputs')
        .doc(section.id)
        .update({ position: index });
    });

    // await db.collection('projects')
    // .doc(this.state.projectId)
    // .collection('businessPlan')
    // .doc(Router.query.project)
    // .collection('inputs')
    // .add({ sections })
  };

  deleteParticularField = async (index) => {
    console.log(index);
    const selectedSection = this.state.selectedSection;
    console.log(selectedSection);
    // this.setState({ selectedSection: this.state.selectedSection.fields.filter((field) => index == field.index)})

    // console.log(this.state.selectedSection.fields.filter((field) => index !== field.index));
    const newFields = this.state.selectedSection.fields.filter((field) => index !== field.index);
    console.log(this.state.selectedSection);
    const newSelectedSection = {
      // createdAt: this.state.selectedSection.createdAt,
      fields: newFields,
      // timestamp: selectedSection.timestamp,
      title: selectedSection.title,
      id: selectedSection.id,
    };

    await db
      .collection('projects')
      .doc(this.state.projectId)
      .collection('businessPlan')
      .doc(Router.query.project)
      .collection('inputs')
      // .collection('currentBusinessPlan')
      // .doc('GrcvhyJwvlWVy31QsiudoQKdKI72')
      // .collection('inputs')
      .doc(selectedSection.id)
      .update({
        fields: newFields,
      });

    await this.setState({ selectedSection: newSelectedSection });
  };

  addNewField = async (setCurrentIndex) => {
    const newArrayItem = {
      // title: this.state.selectedSection.title,
      body: '',
      index: uuidv4(),
      type: 'text',
    };

    await db
      .collection('projects')
      .doc(this.state.projectId)
      .collection('businessPlan')
      .doc(Router.query.project)
      .collection('inputs')
      // .collection('currentBusinessPlan')
      // .doc('GrcvhyJwvlWVy31QsiudoQKdKI72')
      // .collection('inputs')
      .doc(this.state.selectedSection.id)
      .update({
        fields: firebase.firestore.FieldValue.arrayUnion(newArrayItem),
      });

    console.log('SELECTED SECTION --> ', this.state.selectedSection);
    await this.state.selectedSection.fields.push(newArrayItem);
    console.log(this.state.selectedSection);
    await this.setState({ selectedSection: this.state.selectedSection });
    console.log(this.state.selectedSection);

    // To jest testowe, więc możesz to wyrzucić (03.04.2021 00:10)
    // setCurrentIndex(null);
  };

  addNewSpacing = async () => {
    const newArrayItem = {
      // title: this.state.selectedSection.title,
      index: uuidv4(),
      type: 'spacing',
      spacingId: uuidv4(),
    };

    await db
      .collection('projects')
      .doc(this.state.projectId)
      .collection('businessPlan')
      .doc(Router.query.project)
      .collection('inputs')
      .doc(this.state.selectedSection.id)
      .update({
        fields: firebase.firestore.FieldValue.arrayUnion(newArrayItem),
      });

    await this.state.selectedSection.fields.push(newArrayItem);
    await this.setState({ selectedSection: this.state.selectedSection });
  };

  addNewChart = async (setCurrentIndex) => {
    const newArrayItem = {
      // title: this.state.selectedSection.title,
      index: uuidv4(),
      type: 'chart',
      chartType: 'Bar chart',
      stacked: false,
      labels: ['', '', '', '', '', '', '', '', '', '', '', ''],
      dataset1Label: '',
      dataset2Label: '',
      dataset3Label: '',
      dataset4Label: '',
      dataset5Label: '',
      dataset6Label: '',
      dataset1: [],
      dataset2: [],
      dataset3: [],
      dataset4: [],
      dataset5: [],
      dataset6: [],
      chartId: uuidv4(),
    };

    await db
      .collection('projects')
      .doc(this.state.projectId)
      .collection('businessPlan')
      .doc(Router.query.project)
      .collection('inputs')
      // .collection('currentBusinessPlan')
      // .doc('GrcvhyJwvlWVy31QsiudoQKdKI72')
      // .collection('inputs')
      .doc(this.state.selectedSection.id)
      .update({
        fields: firebase.firestore.FieldValue.arrayUnion(newArrayItem),
      });

    console.log('SELECTED SECTION --> ', this.state.selectedSection);
    await this.state.selectedSection.fields.push(newArrayItem);
    console.log(this.state.selectedSection);
    await this.setState({ selectedSection: this.state.selectedSection });
    console.log(this.state.selectedSection);

    // To jest testowe, więc możesz to wyrzucić (03.04.2021 00:10)
    // setCurrentIndex(null);
  };

  addNewHeader = async (setCurrentIndex) => {
    const newArrayItem = {
      text: '',
      index: uuidv4(),
      type: 'header',
    };

    await db
      .collection('projects')
      .doc(this.state.projectId)
      .collection('businessPlan')
      .doc(Router.query.project)
      .collection('inputs')
      // .collection('currentBusinessPlan')
      // .doc('GrcvhyJwvlWVy31QsiudoQKdKI72')
      // .collection('inputs')
      .doc(this.state.selectedSection.id)
      .update({
        fields: firebase.firestore.FieldValue.arrayUnion(newArrayItem),
      });

    await this.state.selectedSection.fields.push(newArrayItem);
    await this.setState({ selectedSection: this.state.selectedSection });

    // To jest testowe, więc możesz to wyrzucić (03.04.2021 00:10)
    // setCurrentIndex(null);
  };

  headerUpdate = async (title, index, currentIndex) => {
    console.log('Title --> ', title);
    console.log(currentIndex);

    let newFieldsArray = [...this.state.selectedSection.fields];
    newFieldsArray[currentIndex] = {
      title,
      index,
      type: 'header',
    };

    const newSection = {
      title: this.state.selectedSection.title,
      // createdAt: this.state.selectedSection.createdAt,
      fields: newFieldsArray,
      id: this.state.selectedSection.id,
      position: this.state.selectedSection.position,
    };

    await this.setState({ selectedSection: newSection });

    // Update database
    db.collection('projects')
      .doc(this.state.projectId)
      .collection('businessPlan')
      .doc(Router.query.project)
      .collection('inputs')
      // .collection('currentBusinessPlan')
      //   .doc('GrcvhyJwvlWVy31QsiudoQKdKI72')
      //   .collection('inputs')
      .doc(this.state.selectedSection.id)
      .update({
        fields: newFieldsArray,
      });
  };

  fieldUpdate = async (fieldObj, index, currentIndex) => {
    console.log(fieldObj);

    const objToUpdate = {
      // title: fieldObj.title,
      body: fieldObj.body,
      index: fieldObj.index,
      type: 'text',
    };
    // console.log('SELECTED SECTION --> ', this.state.selectedSection);
    // console.log('FILEOBJ --> ', fieldObj);

    // if (index !== -1) {
    let newFieldsArray = [...this.state.selectedSection.fields];
    console.log(newFieldsArray);
    newFieldsArray[currentIndex] = objToUpdate;
    // TO JEST OFICJALNA TABLICA INPUTS, KTÓRĄ TRZEBA WRZUCIĆ DO FIREBASE'A !!!
    console.log(newFieldsArray);
    const testSection = {
      title: this.state.selectedSection.title,
      // createdAt: this.state.selectedSection.createdAt,
      fields: newFieldsArray,
      // id: id,
      id: this.state.selectedSection.id,
    };

    console.log('TEST SECTION --> ', testSection);
    console.log('SELECTED SECTION --> ', this.state.selectedSection);

    this.setState({ selectedSection: testSection });

    // console.log(this.state.selectedSection.fields[index].body == fieldObj.body);

    // Chodzi o to, że jakby po wybraniu nowego inputu (czyli po zmianie indexu), ten index zanim się zmieni, dalej pozostaje taki sam (zobacz że w linijce 298 i 299 są jakby zupełnie inne wartości)
    // Nie patrz na to u góry !!! Jakby nie działało, to spróbuj odpalić to sprawdzenie pod spodem (na wypadek zbyt późnego wczytania się obecnego indexu)
    // if (this.state.selectedSection.fields[index].body == fieldObj.body) {
    await db
      .collection('projects')
      .doc(this.state.projectId)
      .collection('businessPlan')
      .doc(Router.query.project)
      .collection('inputs')
      // .collection('currentBusinessPlan')
      //   .doc('GrcvhyJwvlWVy31QsiudoQKdKI72')
      //   .collection('inputs')
      .doc(this.state.selectedSection.id)
      .update({
        fields: newFieldsArray,
      });
    // }

    // CHYBA DZIAŁA, WSZYSTKO ZALEŻY OD TEGO RESETU
    // setCurrentIndex(null);
    // }

    // if (fieldObj.title && fieldObj.body) {
    //   db.collection('currentBusinessPlan')
    //     .doc('GrcvhyJwvlWVy31QsiudoQKdKI72')
    //     .collection('inputs')
    //     .doc(id)
    //     // TRZEBA TO JAKOŚ ZUPDATEOWAĆ (Trzeba chyba dodać od nowa całą tablicę!!!)
    //     // .update({
    //     //   fields: [{
    //     //     title: fieldObj.title,
    //     //     body: fieldObj.body,
    //     //     // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //     //     index: index
    //     //   }]});
    //   }
  };

  addNewTable = async () => {
    const newArrayItem = {
      // title: this.state.selectedSection.title,
      index: uuidv4(),
      type: 'table',
      tableId: uuidv4(),
      headRows: ['Name', 'Surname', 'Age'],
      rows: [
        {
          row: ['Kamil', 'Kubik', '32'],
        },
        {
          row: ['Szymon', 'Kubik', '43'],
        },
        {
          row: ['John', 'Kubik', '51'],
        },
      ],
    };

    await db
      .collection('projects')
      .doc(this.state.projectId)
      .collection('businessPlan')
      .doc(Router.query.project)
      .collection('inputs')
      // .collection('currentBusinessPlan')
      // .doc('GrcvhyJwvlWVy31QsiudoQKdKI72')
      // .collection('inputs')
      .doc(this.state.selectedSection.id)
      .update({
        fields: firebase.firestore.FieldValue.arrayUnion(newArrayItem),
      });

    await this.state.selectedSection.fields.push(newArrayItem);
    await this.setState({ selectedSection: this.state.selectedSection });
  };

  tableUpdate = async (newArray, fieldIndex, tableId, index) => {
    console.log(newArray);

    let newFieldsArray = [...this.state.selectedSection.fields];
    newFieldsArray[fieldIndex] = newArray;

    const newSection = {
      title: this.state.selectedSection.title,
      // createdAt: this.state.selectedSection.createdAt,
      fields: newFieldsArray,
      id: this.state.selectedSection.id,
    };

    await this.setState({ selectedSection: newSection });

    // Update database
    db.collection('projects')
      .doc(this.state.projectId)
      .collection('businessPlan')
      .doc(Router.query.project)
      .collection('inputs')
      // .collection('currentBusinessPlan')
      //   .doc('GrcvhyJwvlWVy31QsiudoQKdKI72')
      //   .collection('inputs')
      .doc(this.state.selectedSection.id)
      .update({
        fields: newFieldsArray,
      });
  };

  addChart = async (chart, currentSectionIndex, index, selectedSection) => {
    console.log(currentSectionIndex);
    // Take current array copy
    let newFieldsArray = [...this.state.selectedSection.fields];
    newFieldsArray[currentSectionIndex] = {
      chartId: selectedSection.chartId,
      chart: chart,
      index,
      type: 'chart',
      chartType: selectedSection.fields[currentSectionIndex].chartType,
      stacked: selectedSection.fields[currentSectionIndex].stacked,
      labels: selectedSection.fields[currentSectionIndex].labels,
      dataset1: selectedSection.fields[currentSectionIndex].dataset1,
      dataset2: selectedSection.fields[currentSectionIndex].dataset2,
      dataset3: selectedSection.fields[currentSectionIndex].dataset3,
      dataset4: selectedSection.fields[currentSectionIndex].dataset4,
      dataset5: selectedSection.fields[currentSectionIndex].dataset5,
      dataset6: selectedSection.fields[currentSectionIndex].dataset6,
      // Dataset labels
      dataset1Label: selectedSection.fields[currentSectionIndex].dataset1Label,
      dataset2Label: selectedSection.fields[currentSectionIndex].dataset2Label,
      dataset3Label: selectedSection.fields[currentSectionIndex].dataset3Label,
      dataset4Label: selectedSection.fields[currentSectionIndex].dataset4Label,
      dataset5Label: selectedSection.fields[currentSectionIndex].dataset5Label,
      dataset6Label: selectedSection.fields[currentSectionIndex].dataset6Label,
    };

    const newSection = {
      title: this.state.selectedSection.title,
      // createdAt: this.state.selectedSection.createdAt,
      fields: newFieldsArray,
      id: this.state.selectedSection.id,
    };

    await this.setState({ selectedSection: newSection });

    // Update database
    db.collection('projects')
      .doc(this.state.projectId)
      .collection('businessPlan')
      .doc(Router.query.project)
      .collection('inputs')
      // .collection('currentBusinessPlan')
      //   .doc('GrcvhyJwvlWVy31QsiudoQKdKI72')
      //   .collection('inputs')
      .doc(this.state.selectedSection.id)
      .update({
        fields: newFieldsArray,
      });
  };

  // ------------------------------------------- CHART LABELS UPDATE -------------------------------------------
  chartLabelsUpdate = async (data, index, currentSectionIndex, selectedSection) => {
    console.log(selectedSection);

    const newArrayObj = [];

    if (data.labelOne) {
      console.log('Label 1 --> ', data.label1);
      const newObj = [
        data.label1 ? data.label1 : '',
        selectedSection.fields[currentSectionIndex].labels[1],
        selectedSection.fields[currentSectionIndex].labels[2],
        selectedSection.fields[currentSectionIndex].labels[3],
        selectedSection.fields[currentSectionIndex].labels[4],
        selectedSection.fields[currentSectionIndex].labels[5],
        selectedSection.fields[currentSectionIndex].labels[6],
        selectedSection.fields[currentSectionIndex].labels[7],
        selectedSection.fields[currentSectionIndex].labels[8],
        selectedSection.fields[currentSectionIndex].labels[9],
        selectedSection.fields[currentSectionIndex].labels[10],
        selectedSection.fields[currentSectionIndex].labels[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.label22) {
      console.log('Label 2 --> ', data.label2);
      const newObj = [
        selectedSection.fields[currentSectionIndex].labels[0],
        data.label2 ? data.label2 : '',
        selectedSection.fields[currentSectionIndex].labels[2],
        selectedSection.fields[currentSectionIndex].labels[3],
        selectedSection.fields[currentSectionIndex].labels[4],
        selectedSection.fields[currentSectionIndex].labels[5],
        selectedSection.fields[currentSectionIndex].labels[6],
        selectedSection.fields[currentSectionIndex].labels[7],
        selectedSection.fields[currentSectionIndex].labels[8],
        selectedSection.fields[currentSectionIndex].labels[9],
        selectedSection.fields[currentSectionIndex].labels[10],
        selectedSection.fields[currentSectionIndex].labels[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.label33) {
      console.log('Label 3 --> ', data.label3);
      const newObj = [
        selectedSection.fields[currentSectionIndex].labels[0],
        selectedSection.fields[currentSectionIndex].labels[1],
        data.label3 ? data.label3 : '',
        selectedSection.fields[currentSectionIndex].labels[3],
        selectedSection.fields[currentSectionIndex].labels[4],
        selectedSection.fields[currentSectionIndex].labels[5],
        selectedSection.fields[currentSectionIndex].labels[6],
        selectedSection.fields[currentSectionIndex].labels[7],
        selectedSection.fields[currentSectionIndex].labels[8],
        selectedSection.fields[currentSectionIndex].labels[9],
        selectedSection.fields[currentSectionIndex].labels[10],
        selectedSection.fields[currentSectionIndex].labels[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.label44) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].labels[0],
        selectedSection.fields[currentSectionIndex].labels[1],
        selectedSection.fields[currentSectionIndex].labels[2],
        data.label4 ? data.label4 : '',
        selectedSection.fields[currentSectionIndex].labels[4],
        selectedSection.fields[currentSectionIndex].labels[5],
        selectedSection.fields[currentSectionIndex].labels[6],
        selectedSection.fields[currentSectionIndex].labels[7],
        selectedSection.fields[currentSectionIndex].labels[8],
        selectedSection.fields[currentSectionIndex].labels[9],
        selectedSection.fields[currentSectionIndex].labels[10],
        selectedSection.fields[currentSectionIndex].labels[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.label55) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].labels[0],
        selectedSection.fields[currentSectionIndex].labels[1],
        selectedSection.fields[currentSectionIndex].labels[2],
        selectedSection.fields[currentSectionIndex].labels[3],
        data.label5 ? data.label5 : '',
        selectedSection.fields[currentSectionIndex].labels[5],
        selectedSection.fields[currentSectionIndex].labels[6],
        selectedSection.fields[currentSectionIndex].labels[7],
        selectedSection.fields[currentSectionIndex].labels[8],
        selectedSection.fields[currentSectionIndex].labels[9],
        selectedSection.fields[currentSectionIndex].labels[10],
        selectedSection.fields[currentSectionIndex].labels[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.label66) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].labels[0],
        selectedSection.fields[currentSectionIndex].labels[1],
        selectedSection.fields[currentSectionIndex].labels[2],
        selectedSection.fields[currentSectionIndex].labels[3],
        selectedSection.fields[currentSectionIndex].labels[4],
        data.label6 ? data.label6 : '',
        selectedSection.fields[currentSectionIndex].labels[6],
        selectedSection.fields[currentSectionIndex].labels[7],
        selectedSection.fields[currentSectionIndex].labels[8],
        selectedSection.fields[currentSectionIndex].labels[9],
        selectedSection.fields[currentSectionIndex].labels[10],
        selectedSection.fields[currentSectionIndex].labels[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.label77) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].labels[0],
        selectedSection.fields[currentSectionIndex].labels[1],
        selectedSection.fields[currentSectionIndex].labels[2],
        selectedSection.fields[currentSectionIndex].labels[3],
        selectedSection.fields[currentSectionIndex].labels[4],
        selectedSection.fields[currentSectionIndex].labels[5],
        data.label7 ? data.label7 : '',
        selectedSection.fields[currentSectionIndex].labels[7],
        selectedSection.fields[currentSectionIndex].labels[8],
        selectedSection.fields[currentSectionIndex].labels[9],
        selectedSection.fields[currentSectionIndex].labels[10],
        selectedSection.fields[currentSectionIndex].labels[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.label88) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].labels[0],
        selectedSection.fields[currentSectionIndex].labels[1],
        selectedSection.fields[currentSectionIndex].labels[2],
        selectedSection.fields[currentSectionIndex].labels[3],
        selectedSection.fields[currentSectionIndex].labels[4],
        selectedSection.fields[currentSectionIndex].labels[5],
        selectedSection.fields[currentSectionIndex].labels[6],
        data.label8 ? data.label8 : '',
        selectedSection.fields[currentSectionIndex].labels[8],
        selectedSection.fields[currentSectionIndex].labels[9],
        selectedSection.fields[currentSectionIndex].labels[10],
        selectedSection.fields[currentSectionIndex].labels[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.label99) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].labels[0],
        selectedSection.fields[currentSectionIndex].labels[1],
        selectedSection.fields[currentSectionIndex].labels[2],
        selectedSection.fields[currentSectionIndex].labels[3],
        selectedSection.fields[currentSectionIndex].labels[4],
        selectedSection.fields[currentSectionIndex].labels[5],
        selectedSection.fields[currentSectionIndex].labels[6],
        selectedSection.fields[currentSectionIndex].labels[7],
        data.label9 ? data.label9 : '',
        selectedSection.fields[currentSectionIndex].labels[9],
        selectedSection.fields[currentSectionIndex].labels[10],
        selectedSection.fields[currentSectionIndex].labels[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.label100) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].labels[0],
        selectedSection.fields[currentSectionIndex].labels[1],
        selectedSection.fields[currentSectionIndex].labels[2],
        selectedSection.fields[currentSectionIndex].labels[3],
        selectedSection.fields[currentSectionIndex].labels[4],
        selectedSection.fields[currentSectionIndex].labels[5],
        selectedSection.fields[currentSectionIndex].labels[6],
        selectedSection.fields[currentSectionIndex].labels[7],
        selectedSection.fields[currentSectionIndex].labels[8],
        data.label10 ? data.label10 : '',
        selectedSection.fields[currentSectionIndex].labels[10],
        selectedSection.fields[currentSectionIndex].labels[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.label111) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].labels[0],
        selectedSection.fields[currentSectionIndex].labels[1],
        selectedSection.fields[currentSectionIndex].labels[2],
        selectedSection.fields[currentSectionIndex].labels[3],
        selectedSection.fields[currentSectionIndex].labels[4],
        selectedSection.fields[currentSectionIndex].labels[5],
        selectedSection.fields[currentSectionIndex].labels[6],
        selectedSection.fields[currentSectionIndex].labels[7],
        selectedSection.fields[currentSectionIndex].labels[8],
        selectedSection.fields[currentSectionIndex].labels[9],
        data.label11 ? data.label11 : '',
        selectedSection.fields[currentSectionIndex].labels[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.label120) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].labels[0],
        selectedSection.fields[currentSectionIndex].labels[1],
        selectedSection.fields[currentSectionIndex].labels[2],
        selectedSection.fields[currentSectionIndex].labels[3],
        selectedSection.fields[currentSectionIndex].labels[4],
        selectedSection.fields[currentSectionIndex].labels[5],
        selectedSection.fields[currentSectionIndex].labels[6],
        selectedSection.fields[currentSectionIndex].labels[7],
        selectedSection.fields[currentSectionIndex].labels[8],
        selectedSection.fields[currentSectionIndex].labels[9],
        selectedSection.fields[currentSectionIndex].labels[10],
        data.label12 ? data.label12 : '',
      ];
      newArrayObj.push(...newObj);
    }

    // Take current array copy
    let newFieldsArray = [...this.state.selectedSection.fields];
    newFieldsArray[currentSectionIndex] = {
      index,
      type: 'chart',
      chartType: selectedSection.fields[currentSectionIndex].chartType,
      stacked: selectedSection.fields[currentSectionIndex].stacked,
      labels: newArrayObj,
      dataset1: selectedSection.fields[currentSectionIndex].dataset1,
      dataset2: selectedSection.fields[currentSectionIndex].dataset2,
      dataset3: selectedSection.fields[currentSectionIndex].dataset3,
      dataset4: selectedSection.fields[currentSectionIndex].dataset4,
      dataset5: selectedSection.fields[currentSectionIndex].dataset5,
      dataset6: selectedSection.fields[currentSectionIndex].dataset6,
      // Dataset labels
      dataset1Label: selectedSection.fields[currentSectionIndex].dataset1Label,
      dataset2Label: selectedSection.fields[currentSectionIndex].dataset2Label,
      dataset3Label: selectedSection.fields[currentSectionIndex].dataset3Label,
      dataset4Label: selectedSection.fields[currentSectionIndex].dataset4Label,
      dataset5Label: selectedSection.fields[currentSectionIndex].dataset5Label,
      dataset6Label: selectedSection.fields[currentSectionIndex].dataset6Label,
    };

    const newSection = {
      title: this.state.selectedSection.title,
      // createdAt: this.state.selectedSection.createdAt,
      fields: newFieldsArray,
      id: this.state.selectedSection.id,
    };

    await this.setState({ selectedSection: newSection });

    // Update database
    db.collection('projects')
      .doc(this.state.projectId)
      .collection('businessPlan')
      .doc(Router.query.project)
      .collection('inputs')
      // .collection('currentBusinessPlan')
      //   .doc('GrcvhyJwvlWVy31QsiudoQKdKI72')
      //   .collection('inputs')
      .doc(this.state.selectedSection.id)
      .update({
        fields: newFieldsArray,
      });
  };

  // Dataset 1
  onDataset1Update = async (data, index, currentSectionIndex, selectedSection) => {
    const newArrayObj = [];
    console.log('IMPORTANT --> ', data.dataset1ValueOne);

    if (data.dataset1ValueOne) {
      const newObj = [
        data.dataset1Value1 ? data.dataset1Value1 : '',
        selectedSection.fields[currentSectionIndex].dataset1[1],
        selectedSection.fields[currentSectionIndex].dataset1[2],
        selectedSection.fields[currentSectionIndex].dataset1[3],
        selectedSection.fields[currentSectionIndex].dataset1[4],
        selectedSection.fields[currentSectionIndex].dataset1[5],
        selectedSection.fields[currentSectionIndex].dataset1[6],
        selectedSection.fields[currentSectionIndex].dataset1[7],
        selectedSection.fields[currentSectionIndex].dataset1[8],
        selectedSection.fields[currentSectionIndex].dataset1[9],
        selectedSection.fields[currentSectionIndex].dataset1[10],
        selectedSection.fields[currentSectionIndex].dataset1[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset1Value22) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset1[0],
        data.dataset1Value2 ? data.dataset1Value2 : '',
        selectedSection.fields[currentSectionIndex].dataset1[2],
        selectedSection.fields[currentSectionIndex].dataset1[3],
        selectedSection.fields[currentSectionIndex].dataset1[4],
        selectedSection.fields[currentSectionIndex].dataset1[5],
        selectedSection.fields[currentSectionIndex].dataset1[6],
        selectedSection.fields[currentSectionIndex].dataset1[7],
        selectedSection.fields[currentSectionIndex].dataset1[8],
        selectedSection.fields[currentSectionIndex].dataset1[9],
        selectedSection.fields[currentSectionIndex].dataset1[10],
        selectedSection.fields[currentSectionIndex].dataset1[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset1Value33) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset1[0],
        selectedSection.fields[currentSectionIndex].dataset1[1],
        data.dataset1Value3 ? data.dataset1Value3 : '',
        selectedSection.fields[currentSectionIndex].dataset1[3],
        selectedSection.fields[currentSectionIndex].dataset1[4],
        selectedSection.fields[currentSectionIndex].dataset1[5],
        selectedSection.fields[currentSectionIndex].dataset1[6],
        selectedSection.fields[currentSectionIndex].dataset1[7],
        selectedSection.fields[currentSectionIndex].dataset1[8],
        selectedSection.fields[currentSectionIndex].dataset1[9],
        selectedSection.fields[currentSectionIndex].dataset1[10],
        selectedSection.fields[currentSectionIndex].dataset1[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset1Value44) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset1[0],
        selectedSection.fields[currentSectionIndex].dataset1[1],
        selectedSection.fields[currentSectionIndex].dataset1[2],
        data.dataset1Value4 ? data.dataset1Value4 : '',
        selectedSection.fields[currentSectionIndex].dataset1[4],
        selectedSection.fields[currentSectionIndex].dataset1[5],
        selectedSection.fields[currentSectionIndex].dataset1[6],
        selectedSection.fields[currentSectionIndex].dataset1[7],
        selectedSection.fields[currentSectionIndex].dataset1[8],
        selectedSection.fields[currentSectionIndex].dataset1[9],
        selectedSection.fields[currentSectionIndex].dataset1[10],
        selectedSection.fields[currentSectionIndex].dataset1[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset1Value55) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset1[0],
        selectedSection.fields[currentSectionIndex].dataset1[1],
        selectedSection.fields[currentSectionIndex].dataset1[2],
        selectedSection.fields[currentSectionIndex].dataset1[3],
        data.dataset1Value5 ? data.dataset1Value5 : '',
        selectedSection.fields[currentSectionIndex].dataset1[5],
        selectedSection.fields[currentSectionIndex].dataset1[6],
        selectedSection.fields[currentSectionIndex].dataset1[7],
        selectedSection.fields[currentSectionIndex].dataset1[8],
        selectedSection.fields[currentSectionIndex].dataset1[9],
        selectedSection.fields[currentSectionIndex].dataset1[10],
        selectedSection.fields[currentSectionIndex].dataset1[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset1Value66) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset1[0],
        selectedSection.fields[currentSectionIndex].dataset1[1],
        selectedSection.fields[currentSectionIndex].dataset1[2],
        selectedSection.fields[currentSectionIndex].dataset1[3],
        selectedSection.fields[currentSectionIndex].dataset1[4],
        data.dataset1Value6 ? data.dataset1Value6 : '',
        selectedSection.fields[currentSectionIndex].dataset1[6],
        selectedSection.fields[currentSectionIndex].dataset1[7],
        selectedSection.fields[currentSectionIndex].dataset1[8],
        selectedSection.fields[currentSectionIndex].dataset1[9],
        selectedSection.fields[currentSectionIndex].dataset1[10],
        selectedSection.fields[currentSectionIndex].dataset1[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset1Value77) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset1[0],
        selectedSection.fields[currentSectionIndex].dataset1[1],
        selectedSection.fields[currentSectionIndex].dataset1[2],
        selectedSection.fields[currentSectionIndex].dataset1[3],
        selectedSection.fields[currentSectionIndex].dataset1[4],
        selectedSection.fields[currentSectionIndex].dataset1[5],
        data.dataset1Value7 ? data.dataset1Value7 : '',
        selectedSection.fields[currentSectionIndex].dataset1[7],
        selectedSection.fields[currentSectionIndex].dataset1[8],
        selectedSection.fields[currentSectionIndex].dataset1[9],
        selectedSection.fields[currentSectionIndex].dataset1[10],
        selectedSection.fields[currentSectionIndex].dataset1[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset1Value88) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset1[0],
        selectedSection.fields[currentSectionIndex].dataset1[1],
        selectedSection.fields[currentSectionIndex].dataset1[2],
        selectedSection.fields[currentSectionIndex].dataset1[3],
        selectedSection.fields[currentSectionIndex].dataset1[4],
        selectedSection.fields[currentSectionIndex].dataset1[5],
        selectedSection.fields[currentSectionIndex].dataset1[6],
        data.dataset1Value8 ? data.dataset1Value8 : '',
        selectedSection.fields[currentSectionIndex].dataset1[8],
        selectedSection.fields[currentSectionIndex].dataset1[9],
        selectedSection.fields[currentSectionIndex].dataset1[10],
        selectedSection.fields[currentSectionIndex].dataset1[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset1Value99) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset1[0],
        selectedSection.fields[currentSectionIndex].dataset1[1],
        selectedSection.fields[currentSectionIndex].dataset1[2],
        selectedSection.fields[currentSectionIndex].dataset1[3],
        selectedSection.fields[currentSectionIndex].dataset1[4],
        selectedSection.fields[currentSectionIndex].dataset1[5],
        selectedSection.fields[currentSectionIndex].dataset1[6],
        selectedSection.fields[currentSectionIndex].dataset1[7],
        data.dataset1Value9 ? data.dataset1Value9 : '',
        selectedSection.fields[currentSectionIndex].dataset1[9],
        selectedSection.fields[currentSectionIndex].dataset1[10],
        selectedSection.fields[currentSectionIndex].dataset1[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset1Value100) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset1[0],
        selectedSection.fields[currentSectionIndex].dataset1[1],
        selectedSection.fields[currentSectionIndex].dataset1[2],
        selectedSection.fields[currentSectionIndex].dataset1[3],
        selectedSection.fields[currentSectionIndex].dataset1[4],
        selectedSection.fields[currentSectionIndex].dataset1[5],
        selectedSection.fields[currentSectionIndex].dataset1[6],
        selectedSection.fields[currentSectionIndex].dataset1[7],
        selectedSection.fields[currentSectionIndex].dataset1[8],
        data.dataset1Value10 ? data.dataset1Value10 : '',
        selectedSection.fields[currentSectionIndex].dataset1[10],
        selectedSection.fields[currentSectionIndex].dataset1[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset1Value111) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset1[0],
        selectedSection.fields[currentSectionIndex].dataset1[1],
        selectedSection.fields[currentSectionIndex].dataset1[2],
        selectedSection.fields[currentSectionIndex].dataset1[3],
        selectedSection.fields[currentSectionIndex].dataset1[4],
        selectedSection.fields[currentSectionIndex].dataset1[5],
        selectedSection.fields[currentSectionIndex].dataset1[6],
        selectedSection.fields[currentSectionIndex].dataset1[7],
        selectedSection.fields[currentSectionIndex].dataset1[8],
        selectedSection.fields[currentSectionIndex].dataset1[9],
        data.dataset1Value11 ? data.dataset1Value11 : '',
        selectedSection.fields[currentSectionIndex].dataset1[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset1Value120) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset1[0],
        selectedSection.fields[currentSectionIndex].dataset1[1],
        selectedSection.fields[currentSectionIndex].dataset1[2],
        selectedSection.fields[currentSectionIndex].dataset1[3],
        selectedSection.fields[currentSectionIndex].dataset1[4],
        selectedSection.fields[currentSectionIndex].dataset1[5],
        selectedSection.fields[currentSectionIndex].dataset1[6],
        selectedSection.fields[currentSectionIndex].dataset1[7],
        selectedSection.fields[currentSectionIndex].dataset1[8],
        selectedSection.fields[currentSectionIndex].dataset1[9],
        selectedSection.fields[currentSectionIndex].dataset1[10],
        data.dataset1Value12 ? data.dataset1Value12 : '',
      ];
      newArrayObj.push(...newObj);
    }
    const filteredArrayObj = newArrayObj.map((obj) => {
      if (obj == undefined) {
        return '';
      } else {
        return obj;
      }
    });

    const newArr = filteredArrayObj.filter((element) => element !== '');

    // Take current array copy
    let newFieldsArray = [...this.state.selectedSection.fields];
    newFieldsArray[currentSectionIndex] = {
      index,
      type: 'chart',
      chartType: selectedSection.fields[currentSectionIndex].chartType,
      stacked: selectedSection.fields[currentSectionIndex].stacked,
      dataset1: newArr,
      labels: selectedSection.fields[currentSectionIndex].labels,
      dataset2: selectedSection.fields[currentSectionIndex].dataset2,
      dataset3: selectedSection.fields[currentSectionIndex].dataset3,
      dataset4: selectedSection.fields[currentSectionIndex].dataset4,
      dataset5: selectedSection.fields[currentSectionIndex].dataset5,
      dataset6: selectedSection.fields[currentSectionIndex].dataset6,
      // Dataset labels
      dataset1Label: selectedSection.fields[currentSectionIndex].dataset1Label,
      dataset2Label: selectedSection.fields[currentSectionIndex].dataset2Label,
      dataset3Label: selectedSection.fields[currentSectionIndex].dataset3Label,
      dataset4Label: selectedSection.fields[currentSectionIndex].dataset4Label,
      dataset5Label: selectedSection.fields[currentSectionIndex].dataset5Label,
      dataset6Label: selectedSection.fields[currentSectionIndex].dataset6Label,
    };

    console.log(newFieldsArray);

    const newSection = {
      title: this.state.selectedSection.title,
      // createdAt: this.state.selectedSection.createdAt,
      fields: newFieldsArray,
      id: this.state.selectedSection.id,
    };

    await this.setState({ selectedSection: newSection });

    // Update database
    db.collection('projects')
      .doc(this.state.projectId)
      .collection('businessPlan')
      .doc(Router.query.project)
      .collection('inputs')
      // .collection('currentBusinessPlan')
      //   .doc('GrcvhyJwvlWVy31QsiudoQKdKI72')
      //   .collection('inputs')
      .doc(this.state.selectedSection.id)
      .update({
        fields: newFieldsArray,
      });
  };

  // Dataset 2
  onDataset2Update = async (data, index, currentSectionIndex, selectedSection) => {
    const newArrayObj = [];
    console.log('DATA --> ', selectedSection);

    if (data.dataset2ValueOne) {
      const newObj = [
        data.dataset2Value1 ? data.dataset2Value1 : '',
        selectedSection.fields[currentSectionIndex].dataset2[1],
        selectedSection.fields[currentSectionIndex].dataset2[2],
        selectedSection.fields[currentSectionIndex].dataset2[3],
        selectedSection.fields[currentSectionIndex].dataset2[4],
        selectedSection.fields[currentSectionIndex].dataset2[5],
        selectedSection.fields[currentSectionIndex].dataset2[6],
        selectedSection.fields[currentSectionIndex].dataset2[7],
        selectedSection.fields[currentSectionIndex].dataset2[8],
        selectedSection.fields[currentSectionIndex].dataset2[9],
        selectedSection.fields[currentSectionIndex].dataset2[10],
        selectedSection.fields[currentSectionIndex].dataset2[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset2Value22) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset2[0],
        data.dataset2Value2 ? data.dataset2Value2 : '',
        selectedSection.fields[currentSectionIndex].dataset2[2],
        selectedSection.fields[currentSectionIndex].dataset2[3],
        selectedSection.fields[currentSectionIndex].dataset2[4],
        selectedSection.fields[currentSectionIndex].dataset2[5],
        selectedSection.fields[currentSectionIndex].dataset2[6],
        selectedSection.fields[currentSectionIndex].dataset2[7],
        selectedSection.fields[currentSectionIndex].dataset2[8],
        selectedSection.fields[currentSectionIndex].dataset2[9],
        selectedSection.fields[currentSectionIndex].dataset2[10],
        selectedSection.fields[currentSectionIndex].dataset2[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset2Value33) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset2[0],
        selectedSection.fields[currentSectionIndex].dataset2[1],
        data.dataset2Value3 ? data.dataset2Value3 : '',
        selectedSection.fields[currentSectionIndex].dataset2[3],
        selectedSection.fields[currentSectionIndex].dataset2[4],
        selectedSection.fields[currentSectionIndex].dataset2[5],
        selectedSection.fields[currentSectionIndex].dataset2[6],
        selectedSection.fields[currentSectionIndex].dataset2[7],
        selectedSection.fields[currentSectionIndex].dataset2[8],
        selectedSection.fields[currentSectionIndex].dataset2[9],
        selectedSection.fields[currentSectionIndex].dataset2[10],
        selectedSection.fields[currentSectionIndex].dataset2[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset2Value44) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset2[0],
        selectedSection.fields[currentSectionIndex].dataset2[1],
        selectedSection.fields[currentSectionIndex].dataset2[2],
        data.dataset2Value4 ? data.dataset2Value4 : '',
        selectedSection.fields[currentSectionIndex].dataset2[4],
        selectedSection.fields[currentSectionIndex].dataset2[5],
        selectedSection.fields[currentSectionIndex].dataset2[6],
        selectedSection.fields[currentSectionIndex].dataset2[7],
        selectedSection.fields[currentSectionIndex].dataset2[8],
        selectedSection.fields[currentSectionIndex].dataset2[9],
        selectedSection.fields[currentSectionIndex].dataset2[10],
        selectedSection.fields[currentSectionIndex].dataset2[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset2Value55) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset2[0],
        selectedSection.fields[currentSectionIndex].dataset2[1],
        selectedSection.fields[currentSectionIndex].dataset2[2],
        selectedSection.fields[currentSectionIndex].dataset2[3],
        data.dataset2Value5 ? data.dataset2Value5 : '',
        selectedSection.fields[currentSectionIndex].dataset2[5],
        selectedSection.fields[currentSectionIndex].dataset2[6],
        selectedSection.fields[currentSectionIndex].dataset2[7],
        selectedSection.fields[currentSectionIndex].dataset2[8],
        selectedSection.fields[currentSectionIndex].dataset2[9],
        selectedSection.fields[currentSectionIndex].dataset2[10],
        selectedSection.fields[currentSectionIndex].dataset2[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset2Value66) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset2[0],
        selectedSection.fields[currentSectionIndex].dataset2[1],
        selectedSection.fields[currentSectionIndex].dataset2[2],
        selectedSection.fields[currentSectionIndex].dataset2[3],
        selectedSection.fields[currentSectionIndex].dataset2[4],
        data.dataset2Value6 ? data.dataset2Value6 : '',
        selectedSection.fields[currentSectionIndex].dataset2[6],
        selectedSection.fields[currentSectionIndex].dataset2[7],
        selectedSection.fields[currentSectionIndex].dataset2[8],
        selectedSection.fields[currentSectionIndex].dataset2[9],
        selectedSection.fields[currentSectionIndex].dataset2[10],
        selectedSection.fields[currentSectionIndex].dataset2[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset2Value77) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset2[0],
        selectedSection.fields[currentSectionIndex].dataset2[1],
        selectedSection.fields[currentSectionIndex].dataset2[2],
        selectedSection.fields[currentSectionIndex].dataset2[3],
        selectedSection.fields[currentSectionIndex].dataset2[4],
        selectedSection.fields[currentSectionIndex].dataset2[5],
        data.dataset2Value7 ? data.dataset2Value7 : '',
        selectedSection.fields[currentSectionIndex].dataset2[7],
        selectedSection.fields[currentSectionIndex].dataset2[8],
        selectedSection.fields[currentSectionIndex].dataset2[9],
        selectedSection.fields[currentSectionIndex].dataset2[10],
        selectedSection.fields[currentSectionIndex].dataset2[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset2Value88) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset2[0],
        selectedSection.fields[currentSectionIndex].dataset2[1],
        selectedSection.fields[currentSectionIndex].dataset2[2],
        selectedSection.fields[currentSectionIndex].dataset2[3],
        selectedSection.fields[currentSectionIndex].dataset2[4],
        selectedSection.fields[currentSectionIndex].dataset2[5],
        selectedSection.fields[currentSectionIndex].dataset2[6],
        data.dataset2Value8 ? data.dataset2Value8 : '',
        selectedSection.fields[currentSectionIndex].dataset2[8],
        selectedSection.fields[currentSectionIndex].dataset2[9],
        selectedSection.fields[currentSectionIndex].dataset2[10],
        selectedSection.fields[currentSectionIndex].dataset2[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset2Value99) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset2[0],
        selectedSection.fields[currentSectionIndex].dataset2[1],
        selectedSection.fields[currentSectionIndex].dataset2[2],
        selectedSection.fields[currentSectionIndex].dataset2[3],
        selectedSection.fields[currentSectionIndex].dataset2[4],
        selectedSection.fields[currentSectionIndex].dataset2[5],
        selectedSection.fields[currentSectionIndex].dataset2[6],
        selectedSection.fields[currentSectionIndex].dataset2[7],
        data.dataset2Value9 ? data.dataset2Value9 : '',
        selectedSection.fields[currentSectionIndex].dataset2[9],
        selectedSection.fields[currentSectionIndex].dataset2[10],
        selectedSection.fields[currentSectionIndex].dataset2[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset2Value100) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset2[0],
        selectedSection.fields[currentSectionIndex].dataset2[1],
        selectedSection.fields[currentSectionIndex].dataset2[2],
        selectedSection.fields[currentSectionIndex].dataset2[3],
        selectedSection.fields[currentSectionIndex].dataset2[4],
        selectedSection.fields[currentSectionIndex].dataset2[5],
        selectedSection.fields[currentSectionIndex].dataset2[6],
        selectedSection.fields[currentSectionIndex].dataset2[7],
        selectedSection.fields[currentSectionIndex].dataset2[8],
        data.dataset2Value10 ? data.dataset2Value10 : '',
        selectedSection.fields[currentSectionIndex].dataset2[10],
        selectedSection.fields[currentSectionIndex].dataset2[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset2Value111) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset2[0],
        selectedSection.fields[currentSectionIndex].dataset2[1],
        selectedSection.fields[currentSectionIndex].dataset2[2],
        selectedSection.fields[currentSectionIndex].dataset2[3],
        selectedSection.fields[currentSectionIndex].dataset2[4],
        selectedSection.fields[currentSectionIndex].dataset2[5],
        selectedSection.fields[currentSectionIndex].dataset2[6],
        selectedSection.fields[currentSectionIndex].dataset2[7],
        selectedSection.fields[currentSectionIndex].dataset2[8],
        selectedSection.fields[currentSectionIndex].dataset2[9],
        data.dataset2Value11 ? data.dataset2Value11 : '',
        selectedSection.fields[currentSectionIndex].dataset2[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset2Value120) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset2[0],
        selectedSection.fields[currentSectionIndex].dataset2[1],
        selectedSection.fields[currentSectionIndex].dataset2[2],
        selectedSection.fields[currentSectionIndex].dataset2[3],
        selectedSection.fields[currentSectionIndex].dataset2[4],
        selectedSection.fields[currentSectionIndex].dataset2[5],
        selectedSection.fields[currentSectionIndex].dataset2[6],
        selectedSection.fields[currentSectionIndex].dataset2[7],
        selectedSection.fields[currentSectionIndex].dataset2[8],
        selectedSection.fields[currentSectionIndex].dataset2[9],
        selectedSection.fields[currentSectionIndex].dataset2[10],
        data.dataset2Value12 ? data.dataset2Value12 : '',
      ];
      newArrayObj.push(...newObj);
    }

    const filteredArrayObj = newArrayObj.map((obj) => {
      if (obj == undefined) {
        return '';
      } else {
        return obj;
      }
    });

    const newArr = filteredArrayObj.filter((element) => element !== '');

    // Take current array copy
    let newFieldsArray = [...this.state.selectedSection.fields];
    newFieldsArray[currentSectionIndex] = {
      index,
      type: 'chart',
      chartType: selectedSection.fields[currentSectionIndex].chartType,
      stacked: selectedSection.fields[currentSectionIndex].stacked,
      dataset2: newArr,
      labels: selectedSection.fields[currentSectionIndex].labels,
      dataset1: selectedSection.fields[currentSectionIndex].dataset1,
      dataset3: selectedSection.fields[currentSectionIndex].dataset3,
      dataset4: selectedSection.fields[currentSectionIndex].dataset4,
      dataset5: selectedSection.fields[currentSectionIndex].dataset5,
      dataset6: selectedSection.fields[currentSectionIndex].dataset6,
      // Dataset labels
      dataset1Label: selectedSection.fields[currentSectionIndex].dataset1Label,
      dataset2Label: selectedSection.fields[currentSectionIndex].dataset2Label,
      dataset3Label: selectedSection.fields[currentSectionIndex].dataset3Label,
      dataset4Label: selectedSection.fields[currentSectionIndex].dataset4Label,
      dataset5Label: selectedSection.fields[currentSectionIndex].dataset5Label,
      dataset6Label: selectedSection.fields[currentSectionIndex].dataset6Label,
    };

    const newSection = {
      title: this.state.selectedSection.title,
      // createdAt: this.state.selectedSection.createdAt,
      fields: newFieldsArray,
      id: this.state.selectedSection.id,
    };

    await this.setState({ selectedSection: newSection });

    // console.log(newFieldsArray[0]);

    // Update database
    db.collection('projects')
      .doc(this.state.projectId)
      .collection('businessPlan')
      .doc(Router.query.project)
      .collection('inputs')
      // .collection('currentBusinessPlan')
      //   .doc('GrcvhyJwvlWVy31QsiudoQKdKI72')
      //   .collection('inputs')
      .doc(this.state.selectedSection.id)
      .update({
        fields: newFieldsArray,
      });
  };

  // Dataset 3
  onDataset3Update = async (data, index, currentSectionIndex, selectedSection) => {
    const newArrayObj = [];

    if (data.dataset3ValueOne) {
      const newObj = [
        data.dataset3Value1 ? data.dataset3Value1 : '',
        selectedSection.fields[currentSectionIndex].dataset3[1],
        selectedSection.fields[currentSectionIndex].dataset3[2],
        selectedSection.fields[currentSectionIndex].dataset3[3],
        selectedSection.fields[currentSectionIndex].dataset3[4],
        selectedSection.fields[currentSectionIndex].dataset3[5],
        selectedSection.fields[currentSectionIndex].dataset3[6],
        selectedSection.fields[currentSectionIndex].dataset3[7],
        selectedSection.fields[currentSectionIndex].dataset3[8],
        selectedSection.fields[currentSectionIndex].dataset3[9],
        selectedSection.fields[currentSectionIndex].dataset3[10],
        selectedSection.fields[currentSectionIndex].dataset3[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset3Value22) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset3[0],
        data.dataset3Value2 ? data.dataset3Value2 : '',
        selectedSection.fields[currentSectionIndex].dataset3[2],
        selectedSection.fields[currentSectionIndex].dataset3[3],
        selectedSection.fields[currentSectionIndex].dataset3[4],
        selectedSection.fields[currentSectionIndex].dataset3[5],
        selectedSection.fields[currentSectionIndex].dataset3[6],
        selectedSection.fields[currentSectionIndex].dataset3[7],
        selectedSection.fields[currentSectionIndex].dataset3[8],
        selectedSection.fields[currentSectionIndex].dataset3[9],
        selectedSection.fields[currentSectionIndex].dataset3[10],
        selectedSection.fields[currentSectionIndex].dataset3[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset3Value33) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset3[0],
        selectedSection.fields[currentSectionIndex].dataset3[1],
        data.dataset3Value3 ? data.dataset3Value3 : '',
        selectedSection.fields[currentSectionIndex].dataset3[3],
        selectedSection.fields[currentSectionIndex].dataset3[4],
        selectedSection.fields[currentSectionIndex].dataset3[5],
        selectedSection.fields[currentSectionIndex].dataset3[6],
        selectedSection.fields[currentSectionIndex].dataset3[7],
        selectedSection.fields[currentSectionIndex].dataset3[8],
        selectedSection.fields[currentSectionIndex].dataset3[9],
        selectedSection.fields[currentSectionIndex].dataset3[10],
        selectedSection.fields[currentSectionIndex].dataset3[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset3Value44) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset3[0],
        selectedSection.fields[currentSectionIndex].dataset3[1],
        selectedSection.fields[currentSectionIndex].dataset3[2],
        data.dataset3Value4 ? data.dataset3Value4 : '',
        selectedSection.fields[currentSectionIndex].dataset3[4],
        selectedSection.fields[currentSectionIndex].dataset3[5],
        selectedSection.fields[currentSectionIndex].dataset3[6],
        selectedSection.fields[currentSectionIndex].dataset3[7],
        selectedSection.fields[currentSectionIndex].dataset3[8],
        selectedSection.fields[currentSectionIndex].dataset3[9],
        selectedSection.fields[currentSectionIndex].dataset3[10],
        selectedSection.fields[currentSectionIndex].dataset3[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset3Value55) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset3[0],
        selectedSection.fields[currentSectionIndex].dataset3[1],
        selectedSection.fields[currentSectionIndex].dataset3[2],
        selectedSection.fields[currentSectionIndex].dataset3[3],
        data.dataset3Value5 ? data.dataset3Value5 : '',
        selectedSection.fields[currentSectionIndex].dataset3[5],
        selectedSection.fields[currentSectionIndex].dataset3[6],
        selectedSection.fields[currentSectionIndex].dataset3[7],
        selectedSection.fields[currentSectionIndex].dataset3[8],
        selectedSection.fields[currentSectionIndex].dataset3[9],
        selectedSection.fields[currentSectionIndex].dataset3[10],
        selectedSection.fields[currentSectionIndex].dataset3[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset3Value66) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset3[0],
        selectedSection.fields[currentSectionIndex].dataset3[1],
        selectedSection.fields[currentSectionIndex].dataset3[2],
        selectedSection.fields[currentSectionIndex].dataset3[3],
        selectedSection.fields[currentSectionIndex].dataset3[4],
        data.dataset3Value6 ? data.dataset3Value6 : '',
        selectedSection.fields[currentSectionIndex].dataset3[6],
        selectedSection.fields[currentSectionIndex].dataset3[7],
        selectedSection.fields[currentSectionIndex].dataset3[8],
        selectedSection.fields[currentSectionIndex].dataset3[9],
        selectedSection.fields[currentSectionIndex].dataset3[10],
        selectedSection.fields[currentSectionIndex].dataset3[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset3Value77) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset3[0],
        selectedSection.fields[currentSectionIndex].dataset3[1],
        selectedSection.fields[currentSectionIndex].dataset3[2],
        selectedSection.fields[currentSectionIndex].dataset3[3],
        selectedSection.fields[currentSectionIndex].dataset3[4],
        selectedSection.fields[currentSectionIndex].dataset3[5],
        data.dataset3Value7 ? data.dataset3Value7 : '',
        selectedSection.fields[currentSectionIndex].dataset3[7],
        selectedSection.fields[currentSectionIndex].dataset3[8],
        selectedSection.fields[currentSectionIndex].dataset3[9],
        selectedSection.fields[currentSectionIndex].dataset3[10],
        selectedSection.fields[currentSectionIndex].dataset3[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset3Value88) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset3[0],
        selectedSection.fields[currentSectionIndex].dataset3[1],
        selectedSection.fields[currentSectionIndex].dataset3[2],
        selectedSection.fields[currentSectionIndex].dataset3[3],
        selectedSection.fields[currentSectionIndex].dataset3[4],
        selectedSection.fields[currentSectionIndex].dataset3[5],
        selectedSection.fields[currentSectionIndex].dataset3[6],
        data.dataset3Value8 ? data.dataset3Value8 : '',
        selectedSection.fields[currentSectionIndex].dataset3[8],
        selectedSection.fields[currentSectionIndex].dataset3[9],
        selectedSection.fields[currentSectionIndex].dataset3[10],
        selectedSection.fields[currentSectionIndex].dataset3[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset3Value99) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset3[0],
        selectedSection.fields[currentSectionIndex].dataset3[1],
        selectedSection.fields[currentSectionIndex].dataset3[2],
        selectedSection.fields[currentSectionIndex].dataset3[3],
        selectedSection.fields[currentSectionIndex].dataset3[4],
        selectedSection.fields[currentSectionIndex].dataset3[5],
        selectedSection.fields[currentSectionIndex].dataset3[6],
        selectedSection.fields[currentSectionIndex].dataset3[7],
        data.dataset3Value9 ? data.dataset3Value9 : '',
        selectedSection.fields[currentSectionIndex].dataset3[9],
        selectedSection.fields[currentSectionIndex].dataset3[10],
        selectedSection.fields[currentSectionIndex].dataset3[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset3Value100) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset3[0],
        selectedSection.fields[currentSectionIndex].dataset3[1],
        selectedSection.fields[currentSectionIndex].dataset3[2],
        selectedSection.fields[currentSectionIndex].dataset3[3],
        selectedSection.fields[currentSectionIndex].dataset3[4],
        selectedSection.fields[currentSectionIndex].dataset3[5],
        selectedSection.fields[currentSectionIndex].dataset3[6],
        selectedSection.fields[currentSectionIndex].dataset3[7],
        selectedSection.fields[currentSectionIndex].dataset3[8],
        data.dataset3Value10 ? data.dataset3Value10 : '',
        selectedSection.fields[currentSectionIndex].dataset3[10],
        selectedSection.fields[currentSectionIndex].dataset3[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset3Value111) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset3[0],
        selectedSection.fields[currentSectionIndex].dataset3[1],
        selectedSection.fields[currentSectionIndex].dataset3[2],
        selectedSection.fields[currentSectionIndex].dataset3[3],
        selectedSection.fields[currentSectionIndex].dataset3[4],
        selectedSection.fields[currentSectionIndex].dataset3[5],
        selectedSection.fields[currentSectionIndex].dataset3[6],
        selectedSection.fields[currentSectionIndex].dataset3[7],
        selectedSection.fields[currentSectionIndex].dataset3[8],
        selectedSection.fields[currentSectionIndex].dataset3[9],
        data.dataset3Value11 ? data.dataset3Value11 : '',
        selectedSection.fields[currentSectionIndex].dataset3[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset3Value120) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset3[0],
        selectedSection.fields[currentSectionIndex].dataset3[1],
        selectedSection.fields[currentSectionIndex].dataset3[2],
        selectedSection.fields[currentSectionIndex].dataset3[3],
        selectedSection.fields[currentSectionIndex].dataset3[4],
        selectedSection.fields[currentSectionIndex].dataset3[5],
        selectedSection.fields[currentSectionIndex].dataset3[6],
        selectedSection.fields[currentSectionIndex].dataset3[7],
        selectedSection.fields[currentSectionIndex].dataset3[8],
        selectedSection.fields[currentSectionIndex].dataset3[9],
        selectedSection.fields[currentSectionIndex].dataset3[10],
        data.dataset3Value12 ? data.dataset3Value12 : '',
      ];
      newArrayObj.push(...newObj);
    }

    const filteredArrayObj = newArrayObj.map((obj) => {
      if (obj == undefined) {
        return '';
      } else {
        return obj;
      }
    });

    const newArr = filteredArrayObj.filter((element) => element !== '');

    // Take current array copy
    let newFieldsArray = [...this.state.selectedSection.fields];
    newFieldsArray[currentSectionIndex] = {
      index,
      type: 'chart',
      chartType: selectedSection.fields[currentSectionIndex].chartType,
      stacked: selectedSection.fields[currentSectionIndex].stacked,
      dataset3: newArr,
      labels: selectedSection.fields[currentSectionIndex].labels,
      dataset1: selectedSection.fields[currentSectionIndex].dataset1,
      dataset2: selectedSection.fields[currentSectionIndex].dataset2,
      dataset4: selectedSection.fields[currentSectionIndex].dataset4,
      dataset5: selectedSection.fields[currentSectionIndex].dataset5,
      dataset6: selectedSection.fields[currentSectionIndex].dataset6,
      // Dataset labels
      dataset1Label: selectedSection.fields[currentSectionIndex].dataset1Label,
      dataset2Label: selectedSection.fields[currentSectionIndex].dataset2Label,
      dataset3Label: selectedSection.fields[currentSectionIndex].dataset3Label,
      dataset4Label: selectedSection.fields[currentSectionIndex].dataset4Label,
      dataset5Label: selectedSection.fields[currentSectionIndex].dataset5Label,
      dataset6Label: selectedSection.fields[currentSectionIndex].dataset6Label,
    };

    const newSection = {
      title: this.state.selectedSection.title,
      // createdAt: this.state.selectedSection.createdAt,
      fields: newFieldsArray,
      id: this.state.selectedSection.id,
    };

    await this.setState({ selectedSection: newSection });

    // Update database
    db.collection('projects')
      .doc(this.state.projectId)
      .collection('businessPlan')
      .doc(Router.query.project)
      .collection('inputs')
      // .collection('currentBusinessPlan')
      //   .doc('GrcvhyJwvlWVy31QsiudoQKdKI72')
      //   .collection('inputs')
      .doc(this.state.selectedSection.id)
      .update({
        fields: newFieldsArray,
      });
  };

  // Dataset 4
  onDataset4Update = async (data, index, currentSectionIndex, selectedSection) => {
    const newArrayObj = [];

    if (data.dataset4ValueOne) {
      const newObj = [
        data.dataset4Value1 ? data.dataset4Value1 : '',
        selectedSection.fields[currentSectionIndex].dataset4[1],
        selectedSection.fields[currentSectionIndex].dataset4[2],
        selectedSection.fields[currentSectionIndex].dataset4[3],
        selectedSection.fields[currentSectionIndex].dataset4[4],
        selectedSection.fields[currentSectionIndex].dataset4[5],
        selectedSection.fields[currentSectionIndex].dataset4[6],
        selectedSection.fields[currentSectionIndex].dataset4[7],
        selectedSection.fields[currentSectionIndex].dataset4[8],
        selectedSection.fields[currentSectionIndex].dataset4[9],
        selectedSection.fields[currentSectionIndex].dataset4[10],
        selectedSection.fields[currentSectionIndex].dataset4[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset4Value22) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset4[0],
        data.dataset4Value2 ? data.dataset4Value2 : '',
        selectedSection.fields[currentSectionIndex].dataset4[2],
        selectedSection.fields[currentSectionIndex].dataset4[3],
        selectedSection.fields[currentSectionIndex].dataset4[4],
        selectedSection.fields[currentSectionIndex].dataset4[5],
        selectedSection.fields[currentSectionIndex].dataset4[6],
        selectedSection.fields[currentSectionIndex].dataset4[7],
        selectedSection.fields[currentSectionIndex].dataset4[8],
        selectedSection.fields[currentSectionIndex].dataset4[9],
        selectedSection.fields[currentSectionIndex].dataset4[10],
        selectedSection.fields[currentSectionIndex].dataset4[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset4Value33) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset4[0],
        selectedSection.fields[currentSectionIndex].dataset4[1],
        data.dataset4Value3 ? data.dataset4Value3 : '',
        selectedSection.fields[currentSectionIndex].dataset4[3],
        selectedSection.fields[currentSectionIndex].dataset4[4],
        selectedSection.fields[currentSectionIndex].dataset4[5],
        selectedSection.fields[currentSectionIndex].dataset4[6],
        selectedSection.fields[currentSectionIndex].dataset4[7],
        selectedSection.fields[currentSectionIndex].dataset4[8],
        selectedSection.fields[currentSectionIndex].dataset4[9],
        selectedSection.fields[currentSectionIndex].dataset4[10],
        selectedSection.fields[currentSectionIndex].dataset4[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset4Value44) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset4[0],
        selectedSection.fields[currentSectionIndex].dataset4[1],
        selectedSection.fields[currentSectionIndex].dataset4[2],
        data.dataset4Value4 ? data.dataset4Value4 : '',
        selectedSection.fields[currentSectionIndex].dataset4[4],
        selectedSection.fields[currentSectionIndex].dataset4[5],
        selectedSection.fields[currentSectionIndex].dataset4[6],
        selectedSection.fields[currentSectionIndex].dataset4[7],
        selectedSection.fields[currentSectionIndex].dataset4[8],
        selectedSection.fields[currentSectionIndex].dataset4[9],
        selectedSection.fields[currentSectionIndex].dataset4[10],
        selectedSection.fields[currentSectionIndex].dataset4[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset4Value55) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset4[0],
        selectedSection.fields[currentSectionIndex].dataset4[1],
        selectedSection.fields[currentSectionIndex].dataset4[2],
        selectedSection.fields[currentSectionIndex].dataset4[3],
        data.dataset4Value5 ? data.dataset4Value5 : '',
        selectedSection.fields[currentSectionIndex].dataset4[5],
        selectedSection.fields[currentSectionIndex].dataset4[6],
        selectedSection.fields[currentSectionIndex].dataset4[7],
        selectedSection.fields[currentSectionIndex].dataset4[8],
        selectedSection.fields[currentSectionIndex].dataset4[9],
        selectedSection.fields[currentSectionIndex].dataset4[10],
        selectedSection.fields[currentSectionIndex].dataset4[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset4Value66) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset4[0],
        selectedSection.fields[currentSectionIndex].dataset4[1],
        selectedSection.fields[currentSectionIndex].dataset4[2],
        selectedSection.fields[currentSectionIndex].dataset4[3],
        selectedSection.fields[currentSectionIndex].dataset4[4],
        data.dataset4Value6 ? data.dataset4Value6 : '',
        selectedSection.fields[currentSectionIndex].dataset4[6],
        selectedSection.fields[currentSectionIndex].dataset4[7],
        selectedSection.fields[currentSectionIndex].dataset4[8],
        selectedSection.fields[currentSectionIndex].dataset4[9],
        selectedSection.fields[currentSectionIndex].dataset4[10],
        selectedSection.fields[currentSectionIndex].dataset4[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset4Value77) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset4[0],
        selectedSection.fields[currentSectionIndex].dataset4[1],
        selectedSection.fields[currentSectionIndex].dataset4[2],
        selectedSection.fields[currentSectionIndex].dataset4[3],
        selectedSection.fields[currentSectionIndex].dataset4[4],
        selectedSection.fields[currentSectionIndex].dataset4[5],
        data.dataset4Value7 ? data.dataset4Value7 : '',
        selectedSection.fields[currentSectionIndex].dataset4[7],
        selectedSection.fields[currentSectionIndex].dataset4[8],
        selectedSection.fields[currentSectionIndex].dataset4[9],
        selectedSection.fields[currentSectionIndex].dataset4[10],
        selectedSection.fields[currentSectionIndex].dataset4[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset4Value88) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset4[0],
        selectedSection.fields[currentSectionIndex].dataset4[1],
        selectedSection.fields[currentSectionIndex].dataset4[2],
        selectedSection.fields[currentSectionIndex].dataset4[3],
        selectedSection.fields[currentSectionIndex].dataset4[4],
        selectedSection.fields[currentSectionIndex].dataset4[5],
        selectedSection.fields[currentSectionIndex].dataset4[6],
        data.dataset4Value8 ? data.dataset4Value8 : '',
        selectedSection.fields[currentSectionIndex].dataset4[8],
        selectedSection.fields[currentSectionIndex].dataset4[9],
        selectedSection.fields[currentSectionIndex].dataset4[10],
        selectedSection.fields[currentSectionIndex].dataset4[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset4Value99) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset4[0],
        selectedSection.fields[currentSectionIndex].dataset4[1],
        selectedSection.fields[currentSectionIndex].dataset4[2],
        selectedSection.fields[currentSectionIndex].dataset4[3],
        selectedSection.fields[currentSectionIndex].dataset4[4],
        selectedSection.fields[currentSectionIndex].dataset4[5],
        selectedSection.fields[currentSectionIndex].dataset4[6],
        selectedSection.fields[currentSectionIndex].dataset4[7],
        data.dataset4Value9 ? data.dataset4Value9 : '',
        selectedSection.fields[currentSectionIndex].dataset4[9],
        selectedSection.fields[currentSectionIndex].dataset4[10],
        selectedSection.fields[currentSectionIndex].dataset4[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset4Value100) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset4[0],
        selectedSection.fields[currentSectionIndex].dataset4[1],
        selectedSection.fields[currentSectionIndex].dataset4[2],
        selectedSection.fields[currentSectionIndex].dataset4[3],
        selectedSection.fields[currentSectionIndex].dataset4[4],
        selectedSection.fields[currentSectionIndex].dataset4[5],
        selectedSection.fields[currentSectionIndex].dataset4[6],
        selectedSection.fields[currentSectionIndex].dataset4[7],
        selectedSection.fields[currentSectionIndex].dataset4[8],
        data.dataset4Value10 ? data.dataset4Value10 : '',
        selectedSection.fields[currentSectionIndex].dataset4[10],
        selectedSection.fields[currentSectionIndex].dataset4[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset4Value111) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset4[0],
        selectedSection.fields[currentSectionIndex].dataset4[1],
        selectedSection.fields[currentSectionIndex].dataset4[2],
        selectedSection.fields[currentSectionIndex].dataset4[3],
        selectedSection.fields[currentSectionIndex].dataset4[4],
        selectedSection.fields[currentSectionIndex].dataset4[5],
        selectedSection.fields[currentSectionIndex].dataset4[6],
        selectedSection.fields[currentSectionIndex].dataset4[7],
        selectedSection.fields[currentSectionIndex].dataset4[8],
        selectedSection.fields[currentSectionIndex].dataset4[9],
        data.dataset4Value11 ? data.dataset4Value11 : '',
        selectedSection.fields[currentSectionIndex].dataset4[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset4Value120) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset4[0],
        selectedSection.fields[currentSectionIndex].dataset4[1],
        selectedSection.fields[currentSectionIndex].dataset4[2],
        selectedSection.fields[currentSectionIndex].dataset4[3],
        selectedSection.fields[currentSectionIndex].dataset4[4],
        selectedSection.fields[currentSectionIndex].dataset4[5],
        selectedSection.fields[currentSectionIndex].dataset4[6],
        selectedSection.fields[currentSectionIndex].dataset4[7],
        selectedSection.fields[currentSectionIndex].dataset4[8],
        selectedSection.fields[currentSectionIndex].dataset4[9],
        selectedSection.fields[currentSectionIndex].dataset4[10],
        data.dataset4Value12 ? data.dataset4Value12 : '',
      ];
      newArrayObj.push(...newObj);
    }

    const filteredArrayObj = newArrayObj.map((obj) => {
      if (obj == undefined) {
        return '';
      } else {
        return obj;
      }
    });

    const newArr = filteredArrayObj.filter((element) => element !== '');

    // Take current array copy
    let newFieldsArray = [...this.state.selectedSection.fields];
    newFieldsArray[currentSectionIndex] = {
      index,
      type: 'chart',
      chartType: selectedSection.fields[currentSectionIndex].chartType,
      stacked: selectedSection.fields[currentSectionIndex].stacked,
      dataset4: newArr,
      labels: selectedSection.fields[currentSectionIndex].labels,
      dataset1: selectedSection.fields[currentSectionIndex].dataset1,
      dataset2: selectedSection.fields[currentSectionIndex].dataset2,
      dataset3: selectedSection.fields[currentSectionIndex].dataset3,
      dataset5: selectedSection.fields[currentSectionIndex].dataset5,
      dataset6: selectedSection.fields[currentSectionIndex].dataset6,
      // Dataset labels
      dataset1Label: selectedSection.fields[currentSectionIndex].dataset1Label,
      dataset2Label: selectedSection.fields[currentSectionIndex].dataset2Label,
      dataset3Label: selectedSection.fields[currentSectionIndex].dataset3Label,
      dataset4Label: selectedSection.fields[currentSectionIndex].dataset4Label,
      dataset5Label: selectedSection.fields[currentSectionIndex].dataset5Label,
      dataset6Label: selectedSection.fields[currentSectionIndex].dataset6Label,
    };

    const newSection = {
      title: this.state.selectedSection.title,
      // createdAt: this.state.selectedSection.createdAt,
      fields: newFieldsArray,
      id: this.state.selectedSection.id,
    };

    await this.setState({ selectedSection: newSection });

    // Update database
    db.collection('projects')
      .doc(this.state.projectId)
      .collection('businessPlan')
      .doc(Router.query.project)
      .collection('inputs')
      // .collection('currentBusinessPlan')
      //   .doc('GrcvhyJwvlWVy31QsiudoQKdKI72')
      //   .collection('inputs')
      .doc(this.state.selectedSection.id)
      .update({
        fields: newFieldsArray,
      });
  };

  // Dataset 5
  onDataset5Update = async (data, index, currentSectionIndex, selectedSection) => {
    const newArrayObj = [];

    if (data.dataset5ValueOne) {
      const newObj = [
        data.dataset5Value1 ? data.dataset5Value1 : '',
        selectedSection.fields[currentSectionIndex].dataset5[1],
        selectedSection.fields[currentSectionIndex].dataset5[2],
        selectedSection.fields[currentSectionIndex].dataset5[3],
        selectedSection.fields[currentSectionIndex].dataset5[4],
        selectedSection.fields[currentSectionIndex].dataset5[5],
        selectedSection.fields[currentSectionIndex].dataset5[6],
        selectedSection.fields[currentSectionIndex].dataset5[7],
        selectedSection.fields[currentSectionIndex].dataset5[8],
        selectedSection.fields[currentSectionIndex].dataset5[9],
        selectedSection.fields[currentSectionIndex].dataset5[10],
        selectedSection.fields[currentSectionIndex].dataset5[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset5Value22) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset5[0],
        data.dataset5Value2 ? data.dataset5Value2 : '',
        selectedSection.fields[currentSectionIndex].dataset5[2],
        selectedSection.fields[currentSectionIndex].dataset5[3],
        selectedSection.fields[currentSectionIndex].dataset5[4],
        selectedSection.fields[currentSectionIndex].dataset5[5],
        selectedSection.fields[currentSectionIndex].dataset5[6],
        selectedSection.fields[currentSectionIndex].dataset5[7],
        selectedSection.fields[currentSectionIndex].dataset5[8],
        selectedSection.fields[currentSectionIndex].dataset5[9],
        selectedSection.fields[currentSectionIndex].dataset5[10],
        selectedSection.fields[currentSectionIndex].dataset5[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset5Value33) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset5[0],
        selectedSection.fields[currentSectionIndex].dataset5[1],
        data.dataset5Value3 ? data.dataset5Value3 : '',
        selectedSection.fields[currentSectionIndex].dataset5[3],
        selectedSection.fields[currentSectionIndex].dataset5[4],
        selectedSection.fields[currentSectionIndex].dataset5[5],
        selectedSection.fields[currentSectionIndex].dataset5[6],
        selectedSection.fields[currentSectionIndex].dataset5[7],
        selectedSection.fields[currentSectionIndex].dataset5[8],
        selectedSection.fields[currentSectionIndex].dataset5[9],
        selectedSection.fields[currentSectionIndex].dataset5[10],
        selectedSection.fields[currentSectionIndex].dataset5[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset5Value44) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset5[0],
        selectedSection.fields[currentSectionIndex].dataset5[1],
        selectedSection.fields[currentSectionIndex].dataset5[2],
        data.dataset5Value4 ? data.dataset5Value4 : '',
        selectedSection.fields[currentSectionIndex].dataset5[4],
        selectedSection.fields[currentSectionIndex].dataset5[5],
        selectedSection.fields[currentSectionIndex].dataset5[6],
        selectedSection.fields[currentSectionIndex].dataset5[7],
        selectedSection.fields[currentSectionIndex].dataset5[8],
        selectedSection.fields[currentSectionIndex].dataset5[9],
        selectedSection.fields[currentSectionIndex].dataset5[10],
        selectedSection.fields[currentSectionIndex].dataset5[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset5Value55) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset5[0],
        selectedSection.fields[currentSectionIndex].dataset5[1],
        selectedSection.fields[currentSectionIndex].dataset5[2],
        selectedSection.fields[currentSectionIndex].dataset5[3],
        data.dataset5Value5 ? data.dataset5Value5 : '',
        selectedSection.fields[currentSectionIndex].dataset5[5],
        selectedSection.fields[currentSectionIndex].dataset5[6],
        selectedSection.fields[currentSectionIndex].dataset5[7],
        selectedSection.fields[currentSectionIndex].dataset5[8],
        selectedSection.fields[currentSectionIndex].dataset5[9],
        selectedSection.fields[currentSectionIndex].dataset5[10],
        selectedSection.fields[currentSectionIndex].dataset5[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset5Value66) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset5[0],
        selectedSection.fields[currentSectionIndex].dataset5[1],
        selectedSection.fields[currentSectionIndex].dataset5[2],
        selectedSection.fields[currentSectionIndex].dataset5[3],
        selectedSection.fields[currentSectionIndex].dataset5[4],
        data.dataset5Value6 ? data.dataset5Value6 : '',
        selectedSection.fields[currentSectionIndex].dataset5[6],
        selectedSection.fields[currentSectionIndex].dataset5[7],
        selectedSection.fields[currentSectionIndex].dataset5[8],
        selectedSection.fields[currentSectionIndex].dataset5[9],
        selectedSection.fields[currentSectionIndex].dataset5[10],
        selectedSection.fields[currentSectionIndex].dataset5[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset5Value77) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset5[0],
        selectedSection.fields[currentSectionIndex].dataset5[1],
        selectedSection.fields[currentSectionIndex].dataset5[2],
        selectedSection.fields[currentSectionIndex].dataset5[3],
        selectedSection.fields[currentSectionIndex].dataset5[4],
        selectedSection.fields[currentSectionIndex].dataset5[5],
        data.dataset5Value7 ? data.dataset5Value7 : '',
        selectedSection.fields[currentSectionIndex].dataset5[7],
        selectedSection.fields[currentSectionIndex].dataset5[8],
        selectedSection.fields[currentSectionIndex].dataset5[9],
        selectedSection.fields[currentSectionIndex].dataset5[10],
        selectedSection.fields[currentSectionIndex].dataset5[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset5Value88) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset5[0],
        selectedSection.fields[currentSectionIndex].dataset5[1],
        selectedSection.fields[currentSectionIndex].dataset5[2],
        selectedSection.fields[currentSectionIndex].dataset5[3],
        selectedSection.fields[currentSectionIndex].dataset5[4],
        selectedSection.fields[currentSectionIndex].dataset5[5],
        selectedSection.fields[currentSectionIndex].dataset5[6],
        data.dataset5Value8 ? data.dataset5Value8 : '',
        selectedSection.fields[currentSectionIndex].dataset5[8],
        selectedSection.fields[currentSectionIndex].dataset5[9],
        selectedSection.fields[currentSectionIndex].dataset5[10],
        selectedSection.fields[currentSectionIndex].dataset5[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset5Value99) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset5[0],
        selectedSection.fields[currentSectionIndex].dataset5[1],
        selectedSection.fields[currentSectionIndex].dataset5[2],
        selectedSection.fields[currentSectionIndex].dataset5[3],
        selectedSection.fields[currentSectionIndex].dataset5[4],
        selectedSection.fields[currentSectionIndex].dataset5[5],
        selectedSection.fields[currentSectionIndex].dataset5[6],
        selectedSection.fields[currentSectionIndex].dataset5[7],
        data.dataset5Value9 ? data.dataset5Value9 : '',
        selectedSection.fields[currentSectionIndex].dataset5[9],
        selectedSection.fields[currentSectionIndex].dataset5[10],
        selectedSection.fields[currentSectionIndex].dataset5[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset5Value100) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset5[0],
        selectedSection.fields[currentSectionIndex].dataset5[1],
        selectedSection.fields[currentSectionIndex].dataset5[2],
        selectedSection.fields[currentSectionIndex].dataset5[3],
        selectedSection.fields[currentSectionIndex].dataset5[4],
        selectedSection.fields[currentSectionIndex].dataset5[5],
        selectedSection.fields[currentSectionIndex].dataset5[6],
        selectedSection.fields[currentSectionIndex].dataset5[7],
        selectedSection.fields[currentSectionIndex].dataset5[8],
        data.dataset5Value10 ? data.dataset5Value10 : '',
        selectedSection.fields[currentSectionIndex].dataset5[10],
        selectedSection.fields[currentSectionIndex].dataset5[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset5Value111) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset5[0],
        selectedSection.fields[currentSectionIndex].dataset5[1],
        selectedSection.fields[currentSectionIndex].dataset5[2],
        selectedSection.fields[currentSectionIndex].dataset5[3],
        selectedSection.fields[currentSectionIndex].dataset5[4],
        selectedSection.fields[currentSectionIndex].dataset5[5],
        selectedSection.fields[currentSectionIndex].dataset5[6],
        selectedSection.fields[currentSectionIndex].dataset5[7],
        selectedSection.fields[currentSectionIndex].dataset5[8],
        selectedSection.fields[currentSectionIndex].dataset5[9],
        data.dataset5Value11 ? data.dataset5Value11 : '',
        selectedSection.fields[currentSectionIndex].dataset5[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset5Value120) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset5[0],
        selectedSection.fields[currentSectionIndex].dataset5[1],
        selectedSection.fields[currentSectionIndex].dataset5[2],
        selectedSection.fields[currentSectionIndex].dataset5[3],
        selectedSection.fields[currentSectionIndex].dataset5[4],
        selectedSection.fields[currentSectionIndex].dataset5[5],
        selectedSection.fields[currentSectionIndex].dataset5[6],
        selectedSection.fields[currentSectionIndex].dataset5[7],
        selectedSection.fields[currentSectionIndex].dataset5[8],
        selectedSection.fields[currentSectionIndex].dataset5[9],
        selectedSection.fields[currentSectionIndex].dataset5[10],
        data.dataset5Value12 ? data.dataset5Value12 : '',
      ];
      newArrayObj.push(...newObj);
    }

    const filteredArrayObj = newArrayObj.map((obj) => {
      if (obj == undefined) {
        return '';
      } else {
        return obj;
      }
    });

    const newArr = filteredArrayObj.filter((element) => element !== '');

    // Take current array copy
    let newFieldsArray = [...this.state.selectedSection.fields];
    newFieldsArray[currentSectionIndex] = {
      index,
      type: 'chart',
      chartType: selectedSection.fields[currentSectionIndex].chartType,
      stacked: selectedSection.fields[currentSectionIndex].stacked,
      dataset5: newArr,
      labels: selectedSection.fields[currentSectionIndex].labels,
      dataset1: selectedSection.fields[currentSectionIndex].dataset1,
      dataset2: selectedSection.fields[currentSectionIndex].dataset2,
      dataset3: selectedSection.fields[currentSectionIndex].dataset3,
      dataset4: selectedSection.fields[currentSectionIndex].dataset4,
      dataset6: selectedSection.fields[currentSectionIndex].dataset6,
      // Dataset labels
      dataset1Label: selectedSection.fields[currentSectionIndex].dataset1Label,
      dataset2Label: selectedSection.fields[currentSectionIndex].dataset2Label,
      dataset3Label: selectedSection.fields[currentSectionIndex].dataset3Label,
      dataset4Label: selectedSection.fields[currentSectionIndex].dataset4Label,
      dataset5Label: selectedSection.fields[currentSectionIndex].dataset5Label,
      dataset6Label: selectedSection.fields[currentSectionIndex].dataset6Label,
    };

    const newSection = {
      title: this.state.selectedSection.title,
      // createdAt: this.state.selectedSection.createdAt,
      fields: newFieldsArray,
      id: this.state.selectedSection.id,
    };

    await this.setState({ selectedSection: newSection });

    // Update database
    db.collection('projects')
      .doc(this.state.projectId)
      .collection('businessPlan')
      .doc(Router.query.project)
      .collection('inputs')
      // .collection('currentBusinessPlan')
      //   .doc('GrcvhyJwvlWVy31QsiudoQKdKI72')
      //   .collection('inputs')
      .doc(this.state.selectedSection.id)
      .update({
        fields: newFieldsArray,
      });
  };

  // Dataset 6
  onDataset6Update = async (data, index, currentSectionIndex, selectedSection) => {
    const newArrayObj = [];

    if (data.dataset6ValueOne) {
      const newObj = [
        data.dataset6Value1 ? data.dataset6Value1 : '',
        selectedSection.fields[currentSectionIndex].dataset6[1],
        selectedSection.fields[currentSectionIndex].dataset6[2],
        selectedSection.fields[currentSectionIndex].dataset6[3],
        selectedSection.fields[currentSectionIndex].dataset6[4],
        selectedSection.fields[currentSectionIndex].dataset6[5],
        selectedSection.fields[currentSectionIndex].dataset6[6],
        selectedSection.fields[currentSectionIndex].dataset6[7],
        selectedSection.fields[currentSectionIndex].dataset6[8],
        selectedSection.fields[currentSectionIndex].dataset6[9],
        selectedSection.fields[currentSectionIndex].dataset6[10],
        selectedSection.fields[currentSectionIndex].dataset6[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset6Value22) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset6[0],
        data.dataset6Value2 ? data.dataset6Value2 : '',
        selectedSection.fields[currentSectionIndex].dataset6[2],
        selectedSection.fields[currentSectionIndex].dataset6[3],
        selectedSection.fields[currentSectionIndex].dataset6[4],
        selectedSection.fields[currentSectionIndex].dataset6[5],
        selectedSection.fields[currentSectionIndex].dataset6[6],
        selectedSection.fields[currentSectionIndex].dataset6[7],
        selectedSection.fields[currentSectionIndex].dataset6[8],
        selectedSection.fields[currentSectionIndex].dataset6[9],
        selectedSection.fields[currentSectionIndex].dataset6[10],
        selectedSection.fields[currentSectionIndex].dataset6[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset6Value33) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset6[0],
        selectedSection.fields[currentSectionIndex].dataset6[1],
        data.dataset6Value3 ? data.dataset6Value3 : '',
        selectedSection.fields[currentSectionIndex].dataset6[3],
        selectedSection.fields[currentSectionIndex].dataset6[4],
        selectedSection.fields[currentSectionIndex].dataset6[5],
        selectedSection.fields[currentSectionIndex].dataset6[6],
        selectedSection.fields[currentSectionIndex].dataset6[7],
        selectedSection.fields[currentSectionIndex].dataset6[8],
        selectedSection.fields[currentSectionIndex].dataset6[9],
        selectedSection.fields[currentSectionIndex].dataset6[10],
        selectedSection.fields[currentSectionIndex].dataset6[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset6Value44) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset6[0],
        selectedSection.fields[currentSectionIndex].dataset6[1],
        selectedSection.fields[currentSectionIndex].dataset6[2],
        data.dataset6Value4 ? data.dataset6Value4 : '',
        selectedSection.fields[currentSectionIndex].dataset6[4],
        selectedSection.fields[currentSectionIndex].dataset6[5],
        selectedSection.fields[currentSectionIndex].dataset6[6],
        selectedSection.fields[currentSectionIndex].dataset6[7],
        selectedSection.fields[currentSectionIndex].dataset6[8],
        selectedSection.fields[currentSectionIndex].dataset6[9],
        selectedSection.fields[currentSectionIndex].dataset6[10],
        selectedSection.fields[currentSectionIndex].dataset6[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset6Value55) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset6[0],
        selectedSection.fields[currentSectionIndex].dataset6[1],
        selectedSection.fields[currentSectionIndex].dataset6[2],
        selectedSection.fields[currentSectionIndex].dataset6[3],
        data.dataset6Value5 ? data.dataset6Value5 : '',
        selectedSection.fields[currentSectionIndex].dataset6[5],
        selectedSection.fields[currentSectionIndex].dataset6[6],
        selectedSection.fields[currentSectionIndex].dataset6[7],
        selectedSection.fields[currentSectionIndex].dataset6[8],
        selectedSection.fields[currentSectionIndex].dataset6[9],
        selectedSection.fields[currentSectionIndex].dataset6[10],
        selectedSection.fields[currentSectionIndex].dataset6[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset6Value66) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset6[0],
        selectedSection.fields[currentSectionIndex].dataset6[1],
        selectedSection.fields[currentSectionIndex].dataset6[2],
        selectedSection.fields[currentSectionIndex].dataset6[3],
        selectedSection.fields[currentSectionIndex].dataset6[4],
        data.dataset6Value6 ? data.dataset6Value6 : '',
        selectedSection.fields[currentSectionIndex].dataset6[6],
        selectedSection.fields[currentSectionIndex].dataset6[7],
        selectedSection.fields[currentSectionIndex].dataset6[8],
        selectedSection.fields[currentSectionIndex].dataset6[9],
        selectedSection.fields[currentSectionIndex].dataset6[10],
        selectedSection.fields[currentSectionIndex].dataset6[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset6Value77) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset6[0],
        selectedSection.fields[currentSectionIndex].dataset6[1],
        selectedSection.fields[currentSectionIndex].dataset6[2],
        selectedSection.fields[currentSectionIndex].dataset6[3],
        selectedSection.fields[currentSectionIndex].dataset6[4],
        selectedSection.fields[currentSectionIndex].dataset6[5],
        data.dataset6Value7 ? data.dataset6Value7 : '',
        selectedSection.fields[currentSectionIndex].dataset6[7],
        selectedSection.fields[currentSectionIndex].dataset6[8],
        selectedSection.fields[currentSectionIndex].dataset6[9],
        selectedSection.fields[currentSectionIndex].dataset6[10],
        selectedSection.fields[currentSectionIndex].dataset6[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset6Value88) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset6[0],
        selectedSection.fields[currentSectionIndex].dataset6[1],
        selectedSection.fields[currentSectionIndex].dataset6[2],
        selectedSection.fields[currentSectionIndex].dataset6[3],
        selectedSection.fields[currentSectionIndex].dataset6[4],
        selectedSection.fields[currentSectionIndex].dataset6[5],
        selectedSection.fields[currentSectionIndex].dataset6[6],
        data.dataset6Value8 ? data.dataset6Value8 : '',
        selectedSection.fields[currentSectionIndex].dataset6[8],
        selectedSection.fields[currentSectionIndex].dataset6[9],
        selectedSection.fields[currentSectionIndex].dataset6[10],
        selectedSection.fields[currentSectionIndex].dataset6[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset6Value99) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset6[0],
        selectedSection.fields[currentSectionIndex].dataset6[1],
        selectedSection.fields[currentSectionIndex].dataset6[2],
        selectedSection.fields[currentSectionIndex].dataset6[3],
        selectedSection.fields[currentSectionIndex].dataset6[4],
        selectedSection.fields[currentSectionIndex].dataset6[5],
        selectedSection.fields[currentSectionIndex].dataset6[6],
        selectedSection.fields[currentSectionIndex].dataset6[7],
        data.dataset6Value9 ? data.dataset6Value9 : '',
        selectedSection.fields[currentSectionIndex].dataset6[9],
        selectedSection.fields[currentSectionIndex].dataset6[10],
        selectedSection.fields[currentSectionIndex].dataset6[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset6Value100) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset6[0],
        selectedSection.fields[currentSectionIndex].dataset6[1],
        selectedSection.fields[currentSectionIndex].dataset6[2],
        selectedSection.fields[currentSectionIndex].dataset6[3],
        selectedSection.fields[currentSectionIndex].dataset6[4],
        selectedSection.fields[currentSectionIndex].dataset6[5],
        selectedSection.fields[currentSectionIndex].dataset6[6],
        selectedSection.fields[currentSectionIndex].dataset6[7],
        selectedSection.fields[currentSectionIndex].dataset6[8],
        data.dataset6Value10 ? data.dataset6Value10 : '',
        selectedSection.fields[currentSectionIndex].dataset6[10],
        selectedSection.fields[currentSectionIndex].dataset6[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset6Value111) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset6[0],
        selectedSection.fields[currentSectionIndex].dataset6[1],
        selectedSection.fields[currentSectionIndex].dataset6[2],
        selectedSection.fields[currentSectionIndex].dataset6[3],
        selectedSection.fields[currentSectionIndex].dataset6[4],
        selectedSection.fields[currentSectionIndex].dataset6[5],
        selectedSection.fields[currentSectionIndex].dataset6[6],
        selectedSection.fields[currentSectionIndex].dataset6[7],
        selectedSection.fields[currentSectionIndex].dataset6[8],
        selectedSection.fields[currentSectionIndex].dataset6[9],
        data.dataset6Value11 ? data.dataset6Value11 : '',
        selectedSection.fields[currentSectionIndex].dataset6[11],
      ];
      newArrayObj.push(...newObj);
    } else if (data.dataset6Value120) {
      const newObj = [
        selectedSection.fields[currentSectionIndex].dataset6[0],
        selectedSection.fields[currentSectionIndex].dataset6[1],
        selectedSection.fields[currentSectionIndex].dataset6[2],
        selectedSection.fields[currentSectionIndex].dataset6[3],
        selectedSection.fields[currentSectionIndex].dataset6[4],
        selectedSection.fields[currentSectionIndex].dataset6[5],
        selectedSection.fields[currentSectionIndex].dataset6[6],
        selectedSection.fields[currentSectionIndex].dataset6[7],
        selectedSection.fields[currentSectionIndex].dataset6[8],
        selectedSection.fields[currentSectionIndex].dataset6[9],
        selectedSection.fields[currentSectionIndex].dataset6[10],
        data.dataset6Value12 ? data.dataset6Value12 : '',
      ];
      newArrayObj.push(...newObj);
    }

    const filteredArrayObj = newArrayObj.map((obj) => {
      if (obj == undefined) {
        return '';
      } else {
        return obj;
      }
    });

    const newArr = filteredArrayObj.filter((element) => element !== '');

    // Take current array copy
    let newFieldsArray = [...this.state.selectedSection.fields];
    newFieldsArray[currentSectionIndex] = {
      index,
      type: 'chart',
      chartType: selectedSection.fields[currentSectionIndex].chartType,
      stacked: selectedSection.fields[currentSectionIndex].stacked,
      dataset6: newArr,
      labels: selectedSection.fields[currentSectionIndex].labels,
      dataset1: selectedSection.fields[currentSectionIndex].dataset1,
      dataset2: selectedSection.fields[currentSectionIndex].dataset2,
      dataset3: selectedSection.fields[currentSectionIndex].dataset3,
      dataset4: selectedSection.fields[currentSectionIndex].dataset4,
      dataset5: selectedSection.fields[currentSectionIndex].dataset5,
      // Dataset labels
      dataset1Label: selectedSection.fields[currentSectionIndex].dataset1Label,
      dataset2Label: selectedSection.fields[currentSectionIndex].dataset2Label,
      dataset3Label: selectedSection.fields[currentSectionIndex].dataset3Label,
      dataset4Label: selectedSection.fields[currentSectionIndex].dataset4Label,
      dataset5Label: selectedSection.fields[currentSectionIndex].dataset5Label,
      dataset6Label: selectedSection.fields[currentSectionIndex].dataset6Label,
    };

    const newSection = {
      title: this.state.selectedSection.title,
      // createdAt: this.state.selectedSection.createdAt,
      fields: newFieldsArray,
      id: this.state.selectedSection.id,
    };

    await this.setState({ selectedSection: newSection });

    // Update database
    db.collection('projects')
      .doc(this.state.projectId)
      .collection('businessPlan')
      .doc(Router.query.project)
      .collection('inputs')
      // .collection('currentBusinessPlan')
      //   .doc('GrcvhyJwvlWVy31QsiudoQKdKI72')
      //   .collection('inputs')
      .doc(this.state.selectedSection.id)
      .update({
        fields: newFieldsArray,
      });
  };

  // Dataset label1
  onDatasetLabel1Update = async (data, index, currentSectionIndex, selectedSection) => {
    // Take current array copy
    let newFieldsArray = [...this.state.selectedSection.fields];
    newFieldsArray[currentSectionIndex] = {
      index,
      type: 'chart',
      chartType: selectedSection.fields[currentSectionIndex].chartType,
      stacked: selectedSection.fields[currentSectionIndex].stacked,
      labels: selectedSection.fields[currentSectionIndex].labels,
      dataset1: selectedSection.fields[currentSectionIndex].dataset1,
      dataset2: selectedSection.fields[currentSectionIndex].dataset2,
      dataset3: selectedSection.fields[currentSectionIndex].dataset3,
      dataset4: selectedSection.fields[currentSectionIndex].dataset4,
      dataset5: selectedSection.fields[currentSectionIndex].dataset5,
      dataset6: selectedSection.fields[currentSectionIndex].dataset6,
      // Dataset labels
      dataset1Label: data.dataset1Label,
      dataset2Label: selectedSection.fields[currentSectionIndex].dataset2Label,
      dataset3Label: selectedSection.fields[currentSectionIndex].dataset3Label,
      dataset4Label: selectedSection.fields[currentSectionIndex].dataset4Label,
      dataset5Label: selectedSection.fields[currentSectionIndex].dataset5Label,
      dataset6Label: selectedSection.fields[currentSectionIndex].dataset6Label,
    };

    const newSection = {
      title: this.state.selectedSection.title,
      // createdAt: this.state.selectedSection.createdAt,
      fields: newFieldsArray,
      id: this.state.selectedSection.id,
    };

    await this.setState({ selectedSection: newSection });

    // Update database
    db.collection('projects')
      .doc(this.state.projectId)
      .collection('businessPlan')
      .doc(Router.query.project)
      .collection('inputs')
      // .collection('currentBusinessPlan')
      //   .doc('GrcvhyJwvlWVy31QsiudoQKdKI72')
      //   .collection('inputs')
      .doc(this.state.selectedSection.id)
      .update({
        fields: newFieldsArray,
      });
  };

  // Dataset label2
  onDatasetLabel2Update = async (data, index, currentSectionIndex, selectedSection) => {
    // Take current array copy
    let newFieldsArray = [...this.state.selectedSection.fields];
    newFieldsArray[currentSectionIndex] = {
      index,
      type: 'chart',
      chartType: selectedSection.fields[currentSectionIndex].chartType,
      stacked: selectedSection.fields[currentSectionIndex].stacked,
      labels: selectedSection.fields[currentSectionIndex].labels,
      dataset1: selectedSection.fields[currentSectionIndex].dataset1,
      dataset2: selectedSection.fields[currentSectionIndex].dataset2,
      dataset3: selectedSection.fields[currentSectionIndex].dataset3,
      dataset4: selectedSection.fields[currentSectionIndex].dataset4,
      dataset5: selectedSection.fields[currentSectionIndex].dataset5,
      dataset6: selectedSection.fields[currentSectionIndex].dataset6,
      // Dataset labels
      dataset1Label: selectedSection.fields[currentSectionIndex].dataset1Label,
      dataset2Label: data.dataset2Label,
      dataset3Label: selectedSection.fields[currentSectionIndex].dataset3Label,
      dataset4Label: selectedSection.fields[currentSectionIndex].dataset4Label,
      dataset5Label: selectedSection.fields[currentSectionIndex].dataset5Label,
      dataset6Label: selectedSection.fields[currentSectionIndex].dataset6Label,
    };

    const newSection = {
      title: this.state.selectedSection.title,
      // createdAt: this.state.selectedSection.createdAt,
      fields: newFieldsArray,
      id: this.state.selectedSection.id,
    };

    await this.setState({ selectedSection: newSection });

    // Update database
    db.collection('projects')
      .doc(this.state.projectId)
      .collection('businessPlan')
      .doc(Router.query.project)
      .collection('inputs')
      // .collection('currentBusinessPlan')
      //   .doc('GrcvhyJwvlWVy31QsiudoQKdKI72')
      //   .collection('inputs')
      .doc(this.state.selectedSection.id)
      .update({
        fields: newFieldsArray,
      });
  };

  // Dataset label3
  onDatasetLabel3Update = async (data, index, currentSectionIndex, selectedSection) => {
    // Take current array copy
    let newFieldsArray = [...this.state.selectedSection.fields];
    newFieldsArray[currentSectionIndex] = {
      index,
      type: 'chart',
      chartType: selectedSection.fields[currentSectionIndex].chartType,
      stacked: selectedSection.fields[currentSectionIndex].stacked,
      labels: selectedSection.fields[currentSectionIndex].labels,
      dataset1: selectedSection.fields[currentSectionIndex].dataset1,
      dataset2: selectedSection.fields[currentSectionIndex].dataset2,
      dataset3: selectedSection.fields[currentSectionIndex].dataset3,
      dataset4: selectedSection.fields[currentSectionIndex].dataset4,
      dataset5: selectedSection.fields[currentSectionIndex].dataset5,
      dataset6: selectedSection.fields[currentSectionIndex].dataset6,
      // Dataset labels
      dataset1Label: selectedSection.fields[currentSectionIndex].dataset1Label,
      dataset2Label: selectedSection.fields[currentSectionIndex].dataset2Label,
      dataset3Label: data.dataset3Label,
      dataset4Label: selectedSection.fields[currentSectionIndex].dataset4Label,
      dataset5Label: selectedSection.fields[currentSectionIndex].dataset5Label,
      dataset6Label: selectedSection.fields[currentSectionIndex].dataset6Label,
    };

    const newSection = {
      title: this.state.selectedSection.title,
      // createdAt: this.state.selectedSection.createdAt,
      fields: newFieldsArray,
      id: this.state.selectedSection.id,
    };

    await this.setState({ selectedSection: newSection });

    // Update database
    db.collection('projects')
      .doc(this.state.projectId)
      .collection('businessPlan')
      .doc(Router.query.project)
      .collection('inputs')
      // .collection('currentBusinessPlan')
      //   .doc('GrcvhyJwvlWVy31QsiudoQKdKI72')
      //   .collection('inputs')
      .doc(this.state.selectedSection.id)
      .update({
        fields: newFieldsArray,
      });
  };

  // Dataset label4
  onDatasetLabel4Update = async (data, index, currentSectionIndex, selectedSection) => {
    // Take current array copy
    let newFieldsArray = [...this.state.selectedSection.fields];
    newFieldsArray[currentSectionIndex] = {
      index,
      type: 'chart',
      chartType: selectedSection.fields[currentSectionIndex].chartType,
      stacked: selectedSection.fields[currentSectionIndex].stacked,
      labels: selectedSection.fields[currentSectionIndex].labels,
      dataset1: selectedSection.fields[currentSectionIndex].dataset1,
      dataset2: selectedSection.fields[currentSectionIndex].dataset2,
      dataset3: selectedSection.fields[currentSectionIndex].dataset3,
      dataset4: selectedSection.fields[currentSectionIndex].dataset4,
      dataset5: selectedSection.fields[currentSectionIndex].dataset5,
      dataset6: selectedSection.fields[currentSectionIndex].dataset6,
      // Dataset labels
      dataset1Label: selectedSection.fields[currentSectionIndex].dataset1Label,
      dataset2Label: selectedSection.fields[currentSectionIndex].dataset2Label,
      dataset3Label: selectedSection.fields[currentSectionIndex].dataset3Label,
      dataset4Label: data.dataset4Label,
      dataset5Label: selectedSection.fields[currentSectionIndex].dataset5Label,
      dataset6Label: selectedSection.fields[currentSectionIndex].dataset6Label,
    };

    const newSection = {
      title: this.state.selectedSection.title,
      // createdAt: this.state.selectedSection.createdAt,
      fields: newFieldsArray,
      id: this.state.selectedSection.id,
    };

    await this.setState({ selectedSection: newSection });

    // Update database
    db.collection('projects')
      .doc(this.state.projectId)
      .collection('businessPlan')
      .doc(Router.query.project)
      .collection('inputs')
      // .collection('currentBusinessPlan')
      //   .doc('GrcvhyJwvlWVy31QsiudoQKdKI72')
      //   .collection('inputs')
      .doc(this.state.selectedSection.id)
      .update({
        fields: newFieldsArray,
      });
  };

  // Dataset label5
  onDatasetLabel5Update = async (data, index, currentSectionIndex, selectedSection) => {
    // Take current array copy
    let newFieldsArray = [...this.state.selectedSection.fields];
    newFieldsArray[currentSectionIndex] = {
      index,
      type: 'chart',
      chartType: selectedSection.fields[currentSectionIndex].chartType,
      stacked: selectedSection.fields[currentSectionIndex].stacked,
      labels: selectedSection.fields[currentSectionIndex].labels,
      dataset1: selectedSection.fields[currentSectionIndex].dataset1,
      dataset2: selectedSection.fields[currentSectionIndex].dataset2,
      dataset3: selectedSection.fields[currentSectionIndex].dataset3,
      dataset4: selectedSection.fields[currentSectionIndex].dataset4,
      dataset5: selectedSection.fields[currentSectionIndex].dataset5,
      dataset6: selectedSection.fields[currentSectionIndex].dataset6,
      // Dataset labels
      dataset1Label: selectedSection.fields[currentSectionIndex].dataset1Label,
      dataset2Label: selectedSection.fields[currentSectionIndex].dataset2Label,
      dataset3Label: selectedSection.fields[currentSectionIndex].dataset3Label,
      dataset4Label: selectedSection.fields[currentSectionIndex].dataset4Label,
      dataset5Label: data.dataset5Label,
      dataset6Label: selectedSection.fields[currentSectionIndex].dataset6Label,
    };

    const newSection = {
      title: this.state.selectedSection.title,
      // createdAt: this.state.selectedSection.createdAt,
      fields: newFieldsArray,
      id: this.state.selectedSection.id,
    };

    await this.setState({ selectedSection: newSection });

    // Update database
    db.collection('projects')
      .doc(this.state.projectId)
      .collection('businessPlan')
      .doc(Router.query.project)
      .collection('inputs')
      // .collection('currentBusinessPlan')
      //   .doc('GrcvhyJwvlWVy31QsiudoQKdKI72')
      //   .collection('inputs')
      .doc(this.state.selectedSection.id)
      .update({
        fields: newFieldsArray,
      });
  };

  // Dataset label6
  onDatasetLabel6Update = async (data, index, currentSectionIndex, selectedSection) => {
    // Take current array copy
    let newFieldsArray = [...this.state.selectedSection.fields];
    newFieldsArray[currentSectionIndex] = {
      index,
      type: 'chart',
      chartType: selectedSection.fields[currentSectionIndex].chartType,
      stacked: selectedSection.fields[currentSectionIndex].stacked,
      labels: selectedSection.fields[currentSectionIndex].labels,
      dataset1: selectedSection.fields[currentSectionIndex].dataset1,
      dataset2: selectedSection.fields[currentSectionIndex].dataset2,
      dataset3: selectedSection.fields[currentSectionIndex].dataset3,
      dataset4: selectedSection.fields[currentSectionIndex].dataset4,
      dataset5: selectedSection.fields[currentSectionIndex].dataset5,
      dataset6: selectedSection.fields[currentSectionIndex].dataset6,
      // Dataset labels
      dataset1Label: selectedSection.fields[currentSectionIndex].dataset1Label,
      dataset2Label: selectedSection.fields[currentSectionIndex].dataset2Label,
      dataset3Label: selectedSection.fields[currentSectionIndex].dataset3Label,
      dataset4Label: selectedSection.fields[currentSectionIndex].dataset4Label,
      dataset5Label: selectedSection.fields[currentSectionIndex].dataset5Label,
      dataset6Label: data.dataset6Label,
    };

    const newSection = {
      title: this.state.selectedSection.title,
      // createdAt: this.state.selectedSection.createdAt,
      fields: newFieldsArray,
      id: this.state.selectedSection.id,
    };

    await this.setState({ selectedSection: newSection });

    // Update database
    db.collection('projects')
      .doc(this.state.projectId)
      .collection('businessPlan')
      .doc(Router.query.project)
      .collection('inputs')
      // .collection('currentBusinessPlan')
      //   .doc('GrcvhyJwvlWVy31QsiudoQKdKI72')
      //   .collection('inputs')
      .doc(this.state.selectedSection.id)
      .update({
        fields: newFieldsArray,
      });
  };

  chartValueUpdate = async (value, index, currentSectionIndex) => {
    console.log(value);
    console.log(index);
    console.log(currentSectionIndex);
    // console.log(this.state.selectedSection);
    if (value.name) {
      console.log(value.name);
    }
    const name = value.name ? value.name : this.state.selectedSection.fields[currentSectionIndex].data.name;
    const type = value.type ? value.type : this.state.selectedSection.fields[currentSectionIndex].data.type;
    const valuev = value.value ? value.value : this.state.selectedSection.fields[currentSectionIndex].data.value;
    const color = value.color ? value.color : this.state.selectedSection.fields[currentSectionIndex].data.color;
    const newObj = {
      name,
      type,
      value: valuev,
      color,
    };
    // Take current array copy
    let newFieldsArray = [...this.state.selectedSection.fields];
    newFieldsArray[currentSectionIndex] = {
      index,
      type: 'chart',
      data: newObj,
    };

    const newSection = {
      title: this.state.selectedSection.title,
      // createdAt: this.state.selectedSection.createdAt,
      fields: newFieldsArray,
      id: this.state.selectedSection.id,
    };

    this.setState({ selectedSection: newSection });

    // Update database
    db.collection('projects')
      .doc(this.state.projectId)
      .collection('businessPlan')
      .doc(Router.query.project)
      .collection('inputs')
      // .collection('currentBusinessPlan')
      //   .doc('GrcvhyJwvlWVy31QsiudoQKdKI72')
      //   .collection('inputs')
      .doc(this.state.selectedSection.id)
      .update({
        fields: newFieldsArray,
      });
  };

  newSectionPage = async (title) => {
    const section = {
      position: this.state.sections.length,
      title: title,
      body: '',
    };
    const newFromDB = await db
      .collection('projects')
      .doc(this.state.projectId)
      .collection('businessPlan')
      .doc(Router.query.project)
      .collection('inputs')
      .add({
        position: section.position,
        title: section.title,
        // body: section.body,
        fields: [],
        // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        // createdAt: new Date(),
      });
    const newID = newFromDB.id;
    // await this.setState({ sections: [...this.state.sections, section] });
    const newSectionIndex = this.state.sections.indexOf(this.state.sections.filter((_section) => _section.id === newID)[0]);
    this.setState({
      selectedSection: this.state.sections[newSectionIndex],
      selectedSectionIndex: newSectionIndex,
    });
  };

  deleteSectionPage = async (section) => {
    const sectionIndex = this.state.sections.indexOf(section);
    await this.setState({
      sections: this.state.sections.filter((_section) => _section !== section),
    });
    if (this.state.selectedSectionIndex === sectionIndex) {
      this.setState({ selectedSectionIndex: null, selectedSection: null });
    } else {
      // this.state.sections.length > 1 ?
      // this.selectSectionPage(this.state.sections[this.state.selectedSectionIndex - 1], this.state.selectedSectionIndex - 1) :
      // this.setState({ selectedSectionIndex: null, selectedSection: null });
      if (this.state.sections.length >= 1) {
        this.state.selectedSectionIndex < sectionIndex
          ? this.selectSectionPage(this.state.sections[this.state.selectedSectionIndex], this.state.selectedSectionIndex)
          : this.selectSectionPage(this.state.sections[this.state.selectedSectionIndex - 1], this.state.selectedSectionIndex - 1);
      } else {
        this.setState({ selectedNote: null, selectedNote: null }); // DO POPRAWY
      }
    }

    db.collection('projects')
      .doc(this.state.projectId)
      .collection('businessPlan')
      .doc(Router.query.project)
      .collection('inputs')
      // .collection('currentBusinessPlan')
      //   .doc('GrcvhyJwvlWVy31QsiudoQKdKI72')
      //   .collection('inputs')
      .doc(section.id)
      .delete();
  };

  chartTypeUpdate = async (newSection) => {
    await this.setState({ selectedSection: newSection });
  };

  onLeftBarHidden = () => {
    // --- VERSION 1 ---
    // EXIT
    // gsap.to(document.getElementById('exit'), { autoAlpha: 0, duration: 1, ease: Linear })
    // // TEXT
    // gsap.to(document.getElementById('left-text'), { scale: 0, duration: 1, ease: Linear });
    // gsap.to(document.getElementById('left-text1'), { scale: 0, duration: 1, ease: Linear });
    // gsap.to(document.getElementById('left-text2'), { scale: 0, duration: 1, ease: Linear });
    // // IMAGES
    // gsap.to(document.getElementById('left-element'), { scale: 0, duration: 1, ease: Linear });
    // gsap.to(document.getElementById('left-element1'), { scale: 0, duration: 1, ease: Linear });
    // gsap.to(document.getElementById('left-element2'), { scale: 0, duration: 1, ease: Linear });
    // gsap.to(document.getElementById('left-bar'), {width: 0, transformOrigin: 'left', duration: 1, ease: Linear, delay: 1 });

    // --- VERSION 2 ---
    // CONTAINERS
    gsap.to(document.getElementById('container'), { autoAlpha: 0, delay: 1 });
    gsap.to(document.getElementById('container1'), { autoAlpha: 0, delay: 1 });
    gsap.to(document.getElementById('container2'), { autoAlpha: 0, delay: 1 });
    gsap.to(document.getElementById('container3'), { autoAlpha: 0, delay: 1 });
    gsap.to(document.getElementById('container4'), { autoAlpha: 0, delay: 1 });
    // LEFT BAR
    gsap.to(document.getElementById('left-bar'), { height: 0, transformOrigin: 'top', duration: 2.5, ease: Linear });
    // EXIT
    gsap.to(document.getElementById('exit'), { autoAlpha: 0, duration: 2, ease: Linear });
    // TEXTS
    gsap.to(document.getElementById('left-text4'), { scale: 0, transformOrigin: 'top', duration: 1, ease: Linear });
    gsap.to(document.getElementById('left-text3'), { scale: 0, transformOrigin: 'top', duration: 1, ease: Linear, delay: 0.2 });
    gsap.to(document.getElementById('left-text2'), { scale: 0, transformOrigin: 'top', duration: 1, ease: Linear, delay: 0.4 });
    gsap.to(document.getElementById('left-text1'), { scale: 0, transformOrigin: 'top', duration: 1, ease: Linear, delay: 0.6 });
    gsap.to(document.getElementById('left-text'), { scale: 0, transformOrigin: 'top', duration: 1, ease: Linear, delay: 0.8 });
    // IMAGES
    gsap.to(document.getElementById('left-element4'), { scale: 0, transformOrigin: 'top', duration: 1, ease: Linear });
    gsap.to(document.getElementById('left-element3'), { scale: 0, transformOrigin: 'top', duration: 1, ease: Linear, delay: 0.2 });
    gsap.to(document.getElementById('left-element2'), { scale: 0, transformOrigin: 'top', duration: 1, ease: Linear, delay: 0.4 });
    gsap.to(document.getElementById('left-element1'), { scale: 0, transformOrigin: 'top', duration: 1, ease: Linear, delay: 0.6 });
    gsap.to(document.getElementById('left-element'), { scale: 0, transformOrigin: 'top', duration: 1, ease: Linear, delay: 0.8 });
  };

  pdfChartsCreate = async (sections) => {
    // console.log(sections);
    const images = [];

    sections.map((section) => {
      section.fields.map(async (field) => {
        if (field.type == 'chart') {
          console.log(field);

          const colors =
            field.chartType == 'Pie chart' || field.chartType == 'Doughnut chart'
              ? [
                  'rgba(205,220,57,1)',
                  'rgba(255,235,59,1)',
                  'rgba(255,193,7,1)',
                  'rgba(255,152,0,1)',
                  'rgba(255,87,34,1)',
                  'rgba(244,67,54,1)',
                  'rgba(233,30,99,1)',
                  'rgba(156,39,176,1)',
                  'rgba(103,58,183,1)',
                  'rgba(63,81,181,1)',
                  'rgba(96,125,139,1)',
                  'rgba(121,85,72,1)',
                ]
              : field.chartType == 'Line chart' || field.chartType == 'Area chart'
              ? 'rgba(255,185,0 ,1 )'
              : [
                  'rgba(255,185,0 ,1 )',
                  'rgba(255,185,0 ,1 )',
                  'rgba(255,185,0 ,1 )',
                  'rgba(255,185,0 ,1 )',
                  'rgba(255,185,0 ,1 )',
                  'rgba(255,185,0 ,1 )',
                  'rgba(255,185,0 ,1 )',
                  'rgba(255,185,0 ,1 )',
                  'rgba(255,185,0 ,1 )',
                  'rgba(255,185,0 ,1 )',
                  'rgba(255,185,0 ,1 )',
                  'rgba(255,185,0 ,1 )',
                ];

          const colors1 =
            field.chartType == 'Pie chart' || field.chartType == 'Doughnut chart'
              ? [
                  'rgba(205,220,57,1)',
                  'rgba(255,235,59,1)',
                  'rgba(255,193,7,1)',
                  'rgba(255,152,0,1)',
                  'rgba(255,87,34,1)',
                  'rgba(244,67,54,1)',
                  'rgba(233,30,99,1)',
                  'rgba(156,39,176,1)',
                  'rgba(103,58,183,1)',
                  'rgba(63,81,181,1)',
                  'rgba(96,125,139,1)',
                  'rgba(121,85,72,1)',
                ]
              : field.chartType == 'Line chart' || field.chartType == 'Area chart'
              ? 'rgba(0,204,106 ,1 )'
              : [
                  'rgba(0,204,106 ,1 )',
                  'rgba(0,204,106 ,1 )',
                  'rgba(0,204,106 ,1 )',
                  'rgba(0,204,106 ,1 )',
                  'rgba(0,204,106 ,1 )',
                  'rgba(0,204,106 ,1 )',
                  'rgba(0,204,106 ,1 )',
                  'rgba(0,204,106 ,1 )',
                  'rgba(0,204,106 ,1 )',
                  'rgba(0,204,106 ,1 )',
                  'rgba(0,204,106 ,1 )',
                  'rgba(0,204,106 ,1 )',
                ];

          const colors2 =
            field.chartType == 'Pie chart' || field.chartType == 'Doughnut chart'
              ? [
                  'rgba(205,220,57,1)',
                  'rgba(255,235,59,1)',
                  'rgba(255,193,7,1)',
                  'rgba(255,152,0,1)',
                  'rgba(255,87,34,1)',
                  'rgba(244,67,54,1)',
                  'rgba(233,30,99,1)',
                  'rgba(156,39,176,1)',
                  'rgba(103,58,183,1)',
                  'rgba(63,81,181,1)',
                  'rgba(96,125,139,1)',
                  'rgba(121,85,72,1)',
                ]
              : field.chartType == 'Line chart' || field.chartType == 'Area chart'
              ? 'rgba(0,120,215 ,1 )'
              : [
                  'rgba(0,120,215 ,1 )',
                  'rgba(0,120,215 ,1 )',
                  'rgba(0,120,215 ,1 )',
                  'rgba(0,120,215 ,1 )',
                  'rgba(0,120,215 ,1 )',
                  'rgba(0,120,215 ,1 )',
                  'rgba(0,120,215 ,1 )',
                  'rgba(0,120,215 ,1 )',
                  'rgba(0,120,215 ,1 )',
                  'rgba(0,120,215 ,1 )',
                  'rgba(0,120,215 ,1 )',
                  'rgba(0,120,215 ,1 )',
                ];

          const colors3 =
            field.chartType == 'Pie chart' || field.chartType == 'Doughnut chart'
              ? [
                  'rgba(205,220,57,1)',
                  'rgba(255,235,59,1)',
                  'rgba(255,193,7,1)',
                  'rgba(255,152,0,1)',
                  'rgba(255,87,34,1)',
                  'rgba(244,67,54,1)',
                  'rgba(233,30,99,1)',
                  'rgba(156,39,176,1)',
                  'rgba(103,58,183,1)',
                  'rgba(63,81,181,1)',
                  'rgba(96,125,139,1)',
                  'rgba(121,85,72,1)',
                ]
              : field.chartType == 'Line chart' || field.chartType == 'Area chart'
              ? 'rgba(231,72,86 ,1 )'
              : [
                  'rgba(231,72,86 ,1 )',
                  'rgba(231,72,86 ,1 )',
                  'rgba(231,72,86 ,1 )',
                  'rgba(231,72,86 ,1 )',
                  'rgba(231,72,86 ,1 )',
                  'rgba(231,72,86 ,1 )',
                  'rgba(231,72,86 ,1 )',
                  'rgba(231,72,86 ,1 )',
                  'rgba(231,72,86 ,1 )',
                  'rgba(231,72,86 ,1 )',
                  'rgba(231,72,86 ,1 )',
                  'rgba(231,72,86 ,1 )',
                ];

          const colors4 =
            field.chartType == 'Pie chart' || field.chartType == 'Doughnut chart'
              ? [
                  'rgba(205,220,57,1)',
                  'rgba(255,235,59,1)',
                  'rgba(255,193,7,1)',
                  'rgba(255,152,0,1)',
                  'rgba(255,87,34,1)',
                  'rgba(244,67,54,1)',
                  'rgba(233,30,99,1)',
                  'rgba(156,39,176,1)',
                  'rgba(103,58,183,1)',
                  'rgba(63,81,181,1)',
                  'rgba(96,125,139,1)',
                  'rgba(121,85,72,1)',
                ]
              : field.chartType == 'Line chart' || field.chartType == 'Area chart'
              ? 'rgba(126,115,95 ,1 )'
              : [
                  'rgba(126,115,95 ,1 )',
                  'rgba(126,115,95 ,1 )',
                  'rgba(126,115,95 ,1 )',
                  'rgba(126,115,95 ,1 )',
                  'rgba(126,115,95 ,1 )',
                  'rgba(126,115,95 ,1 )',
                  'rgba(126,115,95 ,1 )',
                  'rgba(126,115,95 ,1 )',
                  'rgba(126,115,95 ,1 )',
                  'rgba(126,115,95 ,1 )',
                  'rgba(126,115,95 ,1 )',
                  'rgba(126,115,95 ,1 )',
                ];

          const colors5 =
            field.chartType == 'Pie chart' || field.chartType == 'Doughnut chart'
              ? [
                  'rgba(205,220,57,1)',
                  'rgba(255,235,59,1)',
                  'rgba(255,193,7,1)',
                  'rgba(255,152,0,1)',
                  'rgba(255,87,34,1)',
                  'rgba(244,67,54,1)',
                  'rgba(233,30,99,1)',
                  'rgba(156,39,176,1)',
                  'rgba(103,58,183,1)',
                  'rgba(63,81,181,1)',
                  'rgba(96,125,139,1)',
                  'rgba(121,85,72,1)',
                ]
              : field.chartType == 'Line chart' || field.chartType == 'Area chart'
              ? 'rgba(177,70,194 ,1 )'
              : [
                  'rgba(177,70,194 ,1 )',
                  'rgba(177,70,194 ,1 )',
                  'rgba(177,70,194 ,1 )',
                  'rgba(177,70,194 ,1 )',
                  'rgba(177,70,194 ,1 )',
                  'rgba(177,70,194 ,1 )',
                  'rgba(177,70,194 ,1 )',
                  'rgba(177,70,194 ,1 )',
                  'rgba(177,70,194 ,1 )',
                  'rgba(177,70,194 ,1 )',
                  'rgba(177,70,194 ,1 )',
                  'rgba(177,70,194 ,1 )',
                ];

          const data = {
            labels: field.labels && [
              ...field.labels.map((label) => {
                if (label !== '') {
                  return label;
                } else {
                  return '';
                }
              }),
            ],
            datasets: [
              // Dataset1
              {
                label: field.dataset1Label && field.dataset1Label,
                data:
                  field.dataset1 &&
                  field.dataset1.map((data) => {
                    if (data !== '') {
                      return data;
                    }
                  }),
                backgroundColor: colors,
                borderWidth:
                  field.chartType == 'Area chart' ? 0 : field.chartType == 'Pie chart' || (field.chartType == 'Doughnut chart' && 2),
              },
              // Dataset2
              {
                label: field.dataset2Label && field.dataset2Label,
                data:
                  field.dataset2 &&
                  field.dataset2.map((data) => {
                    if (data !== '') {
                      return data;
                    }
                  }),
                backgroundColor: colors1,
                borderWidth:
                  field.chartType == 'Area chart' ? 0 : field.chartType == 'Pie chart' || (field.chartType == 'Doughnut chart' && 2),
              },
              // Dataset3
              {
                label: field.dataset3Label && field.dataset3Label,
                data:
                  field.dataset3 &&
                  field.dataset3.map((data) => {
                    if (data !== '') {
                      return data;
                    }
                  }),
                backgroundColor: colors2,
                borderWidth:
                  field.chartType == 'Area chart' ? 0 : field.chartType == 'Pie chart' || (field.chartType == 'Doughnut chart' && 2),
              },
              // Dataset4
              {
                label: field.dataset4Label && field.dataset4Label,
                data:
                  field.dataset4 &&
                  field.dataset4.map((data) => {
                    if (data !== '') {
                      return data;
                    }
                  }),
                backgroundColor: colors3,
                borderWidth:
                  field.chartType == 'Area chart' ? 0 : field.chartType == 'Pie chart' || (field.chartType == 'Doughnut chart' && 2),
              },
              // Dataset5
              {
                label: field.dataset5Label && field.dataset5Label,
                data:
                  field.dataset5 &&
                  field.dataset5.map((data) => {
                    if (data !== '') {
                      return data;
                    }
                  }),
                backgroundColor: colors4,
                borderWidth:
                  field.chartType == 'Area chart' ? 0 : field.chartType == 'Pie chart' || (field.chartType == 'Doughnut chart' && 2),
              },
              // Dataset6
              {
                label: field.dataset6Label && field.dataset6Label,
                data:
                  field.dataset6 &&
                  field.dataset6.map((data) => {
                    if (data !== '') {
                      return data;
                    }
                  }),
                backgroundColor: colors5,
                borderWidth:
                  field.chartType == 'Area chart' ? 0 : field.chartType == 'Pie chart' || (field.chartType == 'Doughnut chart' && 2),
              },
            ],
          };

          const toSaveChart = new ChartJsImage();
          toSaveChart.setConfig({
            type: 'bar',
            data: data,
            options: {
              responsive: false,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          });

          const imageUrl = toSaveChart.toDataUrl();
          // const returnedChart = imageUrl.then((data) => data);
          // return imageUrl.then((data) => `<img src='${data}' />`)

          // imageUrl.then((data) => images.push({
          //   index: field.index,
          //   imageUrl: data
          // }))

          imageUrl.then((data) => {
            if (data) {
              db.collection('projects')
                .doc(this.state.projectId)
                .collection('businessPlan')
                .doc(Router.query.project)
                .collection('inputs')
                // .collection('currentBusinessPlan')
                //   .doc('GrcvhyJwvlWVy31QsiudoQKdKI72')
                //   .collection('inputs')
                .doc('chartImages')
                .add({
                  index: field.index,
                  imageUrl: data,
                });
            }
          });
        }
      });
    });

    console.log(images);
  };

  render() {
    return (
      <>
        <TippyMonster
          businessPlan
          contentClass="h-32 w-80 shadow-lg rounded-2xl bg-primary flex justify-center items-center"
          contentText="In this place, you can create a business plan that will be completely customized to your needs, so this time, I won't guide you through the process of creating one. "
        />
        <ExitComponent />
        <NavbarTemplate>
          {/* <NavbarTemplate> */}
          <div className="min-h-screen w-full relative flex flex-col items-center">
            {/* <div className='h-1/5 w-4/5 bg-primarydark fixed bottom-0 z-50'></div> */}
            {/* ADDING ITEMS LEFT BAR */}
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
                onClick={this.onLeftBarHidden}
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
                    <Image src="/chart/header.svg" width={55} height={55} />
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
                    <Image src="/chart/text.svg" width={55} height={55} />
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
                    <Image src="/spacing/spacing.svg" width={55} height={55} />
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
                    <Image src="/chart/chart.svg" width={55} height={55} />
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
                    <Image src="/table/table.svg" width={55} height={55} />
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
                {/* <PDFDocument allData={this.state.sections} pdfChartsCreate={this.pdfChartsCreate} projectId={this.state.projectId} /> */}
                <ReactPDFDocument
                  projectName={this.state.projectName}
                  projectDescription={this.state.projectDescription}
                  projectCountry={this.state.projectCountry}
                  projectField={this.state.projectField}
                  projectEmail={this.state.projectEmail}
                  projectNumber={this.state.projectNumber}
                  imageName={this.state.imageName}
                  imageFileUrl={this.state.imageFileUrl}
                  sections={this.state.sections}
                  pdfChartsCreate={this.pdfChartsCreate}
                  projectId={this.state.projectId}
                />
              </div>
              <div>
                <h1 className="text-secondary text-md screenLarge:text-base text-gray">Create your business plan any way you want</h1>
              </div>
              {/* SECTIONS */}
              <div className="grid grid-cols-businessSmall screenSmall:grid-cols-business screenMedium:grid-cols-businessMedium grid-flow-col gap-x-8">
                <div className="w-full h-maxcontent mt-12 pb-20">
                  {this.state.selectedSection ? (
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
                        sections={this.state.sections}
                      />
                    ))
                  ) : (
                    <div className="w-full bg-white rounded-2xl p-8 flex justify-center items-center">
                      <div className="flex flex-col justify-center items-center">
                        <img src="/empty-business-plan/empty1.svg" height={300} width={300} />
                        <p className="mt-4">Start creating your business plan by adding a new section!</p>
                      </div>
                    </div>
                  )}
                </div>
                <SectionManager
                  selectedSection={this.state.selectedSection}
                  reorderSections={this.reorderSections}
                  sections={this.state.sections}
                  selectedSectionIndex={this.state.selectedSectionIndex}
                  selectSectionPage={this.selectSectionPage}
                  newSectionPage={this.newSectionPage}
                  deleteSectionPage={this.deleteSectionPage}
                />
              </div>
            </div>
          </div>
          {/* </NavbarTemplate> */}
        </NavbarTemplate>
      </>
    );
  }
}

export default BusinessPlanApp;
