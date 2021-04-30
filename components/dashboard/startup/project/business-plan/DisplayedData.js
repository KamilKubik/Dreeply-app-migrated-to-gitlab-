import React, { useEffect, useMemo, useState } from 'react';
import { db } from '../../../../../lib/firebase';
import { useAuth } from '../../../../../lib/newAuth';
import InputElement from './InputElement';

const DisplayedData = ({ setDataFromInput, activeSection }) => {
  const [sections1, setSections1] = useState();

  const { currentUser } = useAuth();

  const ref = db.collection('currentBusinessPlan');

  useEffect(() => {
      ref
        .doc(currentUser.uid)
        .collection('data')
        .where('name', '==', activeSection)
        .onSnapshot((querySnapshot) => {
          const items = [];
          querySnapshot.forEach((doc) => {
            console.log(doc.data());
            // items.push(...doc.data().sections);
            setSections1(doc.data());
          });
          // setSections1(items);
        });
  }, []);

  console.log('DISPLAED DATA --> ', sections1);

  return (
      <>
        {sections1 ? (
          sections1.sections[0] ? (
            sections1.sections.map((section) => {
              console.log(section);
              // return (
              //   <div>
              //     <p>Sections below:</p>
              //     {section.blocks.map((block) => {
              //       return (
              //         <div>
              //           <p>{block.data.text}</p>
              //         </div>
              //       );
              //     })}
              //   </div>
              // );
            })
          ) : (
            <div>Sections exists but it is empty</div>
          )
        ) : (
          <div>No sections</div>
        )}
      </>
  );
};

export default DisplayedData;
