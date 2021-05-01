import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import debounce from '../../../../../utils/helpers';

import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
// const Quill = dynamic(() => import('react-quill'), { ssr: false });
// const Quill = dynamic(() =>
//   import('react-quill').then(module => module.Quill)
// );
// const { Quill } = await import("react-quill");
// const QuillBetterTable = dynamic(() => import('quill-better-table'), { ssr: false });

// Quill.register("modules/better-table", QuillBetterTable);

// const editorModules = {
//   table: true, // disable table module
//   "better-table": {
//     operationMenu: {
//       items: {
//         unmergeCells: {
//           text: "Another unmerge cells name"
//         }
//       }
//     }
//   },
//   keyboard: {
//     bindings: QuillBetterTable.keyboardBindings
//   }
// };

const TextElement = ({ fieldUpdate, selectedSection, currentIndex, provided, field, deleteField, setCurrentIndex }) => {

  console.log('Field from text --> ', field);

    const[text, setText] = useState('');

    useEffect(() => {
      if(!text) {
        setText(field.body);
      }
    }, [field])

    const updateBody = (val) => {
      console.log('val --> ', val);
      setText(val);
      const value = {
        // To może niekoniecznie
        // id: selectedSection.id,
        // title,
        body: val,
        index: field.index,
        selSection: selectedSection,
      };
      update(value);
    };

    const update = useCallback(
      debounce(async (value) => {
        // sectionUpdate(value.id, value); // TITLE UPDATE
  
        console.log(value.selSection);
        console.log(value);
        const currentSectionIndex = await value.selSection.fields.findIndex(
          (field) => field.index == value.index
        );
        console.log(currentSectionIndex == false);
        console.log(currentSectionIndex !== -1);
        console.log(currentSectionIndex);
  
        // CHYBA DZIAŁA, WSZYSTKO ZALEŻY OD RESETU ZA POMOCĄ setCurrentIndex
        // if (currentSectionIndex !== -1) {
          fieldUpdate(value, currentSectionIndex, currentIndex);
        // }
        // const particularIndex = selectedSection.fields.findIndex((doc) => doc.index = value.index);
      }, 500),
      []
    );

    const modules = {
      toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
        ['link', 'image'],
        ['clean']
      ],
    }

    const formats = [
      'header',
      'font',
      'size',
      'bold',
      'italic',
      'underline',
      'strike',
      'blockquote',
      'list',
      'bullet',
      'indent',
      'align',
      'link',
      'image',
      'video',
      'code-block'
    ]

    return (
      <div ref={provided.innerRef} {...provided.draggableProps} className='w-full grid grid-cols-12fr justify-items-center items-center mt-6'>
        <div className='col-start-2 col-end-12 relative flex flex-col h-full w-full flex px-8 py-8 rounded-2xl bg-white dark:bg-background'>
          <ReactQuill
            // onKeyPress={() => setCurrentIndex(field.index)}
            modules={modules}
            formats={formats}
            onKeyUp={() => setCurrentIndex(field.index)}
            onKeyDown={() => setCurrentIndex(field.index)}
            onKeyPress={() => setCurrentIndex(field.index)}
            onFocus={() => setCurrentIndex(field.index)}
            onChangeSelection={() => setCurrentIndex(field.index)}
            className='bg-white rounded-2xl border-l-2 border-r-2 border-b-2 border-background'
            placeholder='Enter your text here'
            theme='snow'
            value={text}
            onChange={updateBody}
          ></ReactQuill>
         </div>
        <div className='col-start-12 col-end-13 justify-self-center self-start flex flex-col flex-wrap gap-2'>
          <Image
            onClick={() => deleteField(field.index)}
            className='cursor-pointer'
            src={`/plan-bar/exit4.svg`}
            height={36}
            width={36}
          />
          <Image
            {...provided.dragHandleProps}
            className='cursor-pointer'
            src={`/plan-bar/drag2.svg`}
            height={36}
            width={36}
          />
        </div>
      </div>
    )
}

export default TextElement;