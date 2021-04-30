import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { sections } from '../../../../../utils/business-plan';
import useSWR, { mutate } from 'swr';
import firebase, { db } from '../../../../../lib/firebase';
import { useAuth } from '../../../../../lib/newAuth';
import { useRouter } from 'next/router';
import fetcher from '../../../../../utils/fetcher';

const SectionManager = ({ setSections1, dataFromInput, setDataFromInput, activeSection, setActiveSection }) => {
  const [sections, setSections] = useState();
  const [inputValue, setInputValue] = useState();
  const [projectId, setProjectId] = useState();

  const { currentUser } = useAuth();
  const router = useRouter();

  const ref = db.collection('currentBusinessPlan');

  useEffect(() => {
    // PROJECT ID
    const gcp = async () => {
      await db
        .collection('projects')
        .where('uid', '==', currentUser.uid)
        .where('projectName', '==', router.query.project)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            return setProjectId(doc.data().projectId);
          });
        });
    };
    gcp();

    ref.where('uid', '==', currentUser.uid).onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(...doc.data().sections);
      });
      setSections(items);
    });
  }, []);

  // const getProjectSections = () => {
  //   const { data } = useSWR(
  //     currentUser && projectId
  //       ? [`/api/business-plan/${projectId}`, currentUser.token]
  //       : null,
  //     fetcher
  //   );
  //   useMemo(
  //     () =>
  //       data &&
  //       data.map((project) => {
  //         // useMemo jest po to, żeby nie było rerenderów (w sensie wyskakuje wtedy błąd, że za dużo renderowań)
  //         setSections(project.sections);
  //       }),
  //     [data]
  //   );
  // };
  // getProjectSections();

  console.log('SECTIONS --> ', sections);

  const onSectionAdd = async (e) => {
    e.preventDefault();
    sections.push({ name: inputValue });
    ref.doc(currentUser.uid).set({ sections }, { merge: true });
    // sections.push({ name: inputValue });
    // await db.collection('currentBusinessPlan').doc(currentUser.uid).set({ sections }, { merge: true });
    // console.log(sections);
    // mutate([`/api/business-plan/${projectId}`, currentUser.token], sections);
  };

  const onSectionDelete = (e, name) => {
    e.preventDefault();
    console.log(name);
    const newSections = sections.filter((section) => section.name !== name);
    console.log('NEW SECTIONS - ', newSections);
    ref.doc(currentUser.uid).set({ sections: newSections }, { merge: true });
  };

  useEffect(() => {
    console.log(dataFromInput);
  });

  console.log('INPUT DATA --> ', dataFromInput);

  const onSectionClick = async (e, namer) => {
    e.preventDefault();

    if (namer == activeSection) {
      return;
    }

    // UPDATE ALL DATA OF CURRENT SECTION(?)
    // const dataToUpload = dataFromInput ? dataFromInput : { inputs: [] }
    if (dataFromInput) {
      await db
        .collection('currentBusinessPlan')
        .doc(currentUser.uid)
        .collection('data')
        .doc(activeSection)
        .update({
          values: firebase.firestore.FieldValue.arrayUnion({
            id: 'e08855cc-fcbc-46a0-881c-c933d84bd962',
            ...dataFromInput
          })
        });
    }
    // Nowa nazwa wybranej sekcji następuje po tym, jak dodamy data z aktualnego inputa, bo jak było przed tym, to data z inputa dodawało się do innej sekcji
    // setSections1(null);
    setActiveSection(namer);
    // Data input reset
    setDataFromInput(null);
  };

  return (
    <div className='col-start-7 col-end-9 mt-12'>
      <h1 className='ml-4 text-primarydark text-base dark:text-background'>
        Manage your sections
      </h1>
      <div className='w-full ml-4 mt-1 bg-white flex flex-col py-2 px-4 rounded-2xl'>
        {sections &&
          sections.map((section) => {
            return (
              <div
                onClick={(e) => onSectionClick(e, section.name)}
                key={section.name}
                className='h-10 bg-background mt-4 rounded-2xl flex justify-around items-center transform hover:scale-105 hover:-translate-y-1 hover:-translate-x-1 transition duration-500 ease-in-out cursor-pointer'
              >
                <div>
                  <p className='text-primarydark text-sm'>{section.name}</p>
                </div>
                <Image
                  onClick={(e) => onSectionDelete(e, section.name)}
                  src='/business-model/delete.svg'
                  height={20}
                  width={20}
                />
              </div>
            );
          })}
        <div className='h-10 mt-4 rounded-2xl flex justify-around items-center'>
          <div>
            <button
              onClick={(e) => onSectionAdd(e)}
              className='hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary dark:text-primarydark dark:border-primarydark text-sm font-light py-2 px-6 rounded-2xl'
            >
              New section
            </button>
          </div>
          <input
            className='border border-primarydark'
            type='text'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionManager;
