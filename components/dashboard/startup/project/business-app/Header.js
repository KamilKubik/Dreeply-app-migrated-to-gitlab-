import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import debounce from '../../../../../utils/helpers';

const HeaderComponent = ({ currentIndex, headerUpdate, provided, deleteField, field }) => {
  console.log('Header from field --> ', field);

  const [title, setTitle] = useState('');

  useEffect(() => {
    setTitle(field.title);
  }, [field])

  const onTitleChange = (title) => {
    setTitle(title);
    const data = {
      title: title
    }
    titleUpdate(data);
  }

  const titleUpdate = useCallback(
    debounce(async (data) => {
      // const currentSectionIndex = await data.selSection.fields.findIndex(
      //   (field) => field.index == data.index
      // );
      headerUpdate(data.title, field.index, currentIndex);
    }, 500),
    []
  );

  return (
    <div ref={provided.innerRef} {...provided.draggableProps} className='w-full grid grid-cols-12fr justify-items-center items-center mt-6'>
      <div className='col-start-2 col-end-12 relative flex flex-col h-full w-full flex px-8 py-8 rounded-2xl bg-white dark:bg-background'>
        <div className='bg-background rounded-2xl'>
          <input
            onChange={(e) => onTitleChange(e.target.value)}
            value={title}
            style={{ fontSize: '1.05rem' }}
            placeholder='Type here your header'
            className='focus:outline-none w-full text-primarydark bg-background rounded-2xl px-4 py-4'
          />
        </div>
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
          className='cursor-pointer mt-2'
          src={`/plan-bar/drag2.svg`}
          height={36}
          width={36}
        />
      </div>
    </div>
  );
};

export default HeaderComponent;
