import React, { useCallback, useEffect, useState } from 'react';

import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const TextElement = ({ field }) => {
  console.log('Field from text --> ', field);

  const [text, setText] = useState('');

  useEffect(() => {
    if (!text) {
      setText(field.body);
    }
  }, [field]);

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
      ['image'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    // 'blockquote',
    'list',
    'bullet',
    // 'indent',
    'align',
    // 'link',
    'image',
    'video',
    'code-block',
  ];

  return (
    <div className="w-full grid grid-cols-12fr justify-items-center items-center mt-6">
      <div className="col-start-2 col-end-12 relative flex flex-col h-full w-full flex px-8 py-8 rounded-2xl bg-white dark:bg-background">
        <ReactQuill
          modules={modules}
          formats={formats}
          className="bg-white rounded-2xl border-l-2 border-r-2 border-b-2 border-background"
          theme="snow"
          value={text}
        ></ReactQuill>
      </div>
    </div>
  );
};

export default TextElement;
