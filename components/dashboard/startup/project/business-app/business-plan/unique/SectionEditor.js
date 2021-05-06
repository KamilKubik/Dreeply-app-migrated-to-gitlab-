import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import '../../../../../../../node_modules/react-quill/dist/quill.snow.css';
import '../../../../../../../node_modules/react-quill/dist/quill.bubble.css';
import '../../../../../../../node_modules/react-quill/dist/quill.core.css';
import UniqueHeader from './UniqueHeader';
import UniqueText from './UniqueText';
// import UniqueChart from './UniqueChart';
import UniqueTable from './UniqueTable';

const EditorInputElement = ({ selectedSection }) => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    setTitle(selectedSection.title);
  }, [selectedSection]);

  return (
    <>
      <div className="relative flex flex-col h-full w-full px-2 py-2 rounded-2xl bg-white dark:bg-background mt-1">
        <div>
          <div className="w-full px-3 bg-white py-3 rounded-2xl flex items-center justify-between">
            <input
              className="text-lg bg-white focus:outline-none w-3/5 text-primarydark"
              placeholder="Section title..."
              value={title ? title : ''}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center flex-col"></div>
      {selectedSection &&
        selectedSection.fields.map((field) => {
          return (
            (field.type == 'text' && <UniqueText field={field} />) ||
            // (field.type == 'chart' && <UniqueChart field={field} />) ||
            (field.type == 'header' && <UniqueHeader field={field} />) ||
            (field.type == 'table' && <UniqueTable field={field} />) ||
            (field.type == 'spacing' && <div />)
          );
        })}
    </>
  );
};

export default EditorInputElement;
