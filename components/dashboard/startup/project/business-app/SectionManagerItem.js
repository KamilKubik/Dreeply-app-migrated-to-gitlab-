import React, { useEffect } from 'react';
import Image from 'next/image';
import { useWindowSize } from '../../../../../utils/useWindowSize';

const SectionManagerItem = ({ provided, _section, _index, selectedSectionIndex, selectSection, deleteSection }) => {
  const size = useWindowSize();
  const onSelectSection = (section, index) => selectSection(section, index);

  // useEffect(() => {
  //   selectSection(_section, _index);
  // }, [_section])

  const onDeleteSection = (section) => {
    if (confirm(`Are you sure u want to delete ${section.title}`)) {
      // Jeśli true, odpalamy funkcję deleteSection, tak samo, jak u góry odpalamy selectSection
      deleteSection(section);
    }
  };

  return (
    <div
      // Można dać jeszcze selected={_index === selectedSectionIndex}
      ref={provided.innerRef}
      {...provided.draggableProps}
      onClick={() => onSelectSection(_section, _index)}
      key={_index}
      className="flex justify-center items-center z-10 h-10 w-full bg-background mb-4 px-3 py-3 rounded-2xl transform hover:scale-105 hover:-translate-y-1 hover:-translate-x-1 transition duration-500 ease-in-out cursor-pointer"
    >
      {/* <p       onClick={() => onSelectSection(_section, _index)} className='text-primarydark text-sm'>{_section.title}</p> */}
      <input className="text-primarydark text-sm bg-background focus:outline-none w-full mr-2 self-start" value={_section.title} />
      <div className="w-20 grid grid-cols-2fr justify-items-center items-center">
        <img
          {...provided.dragHandleProps}
          className="z-50"
          src="/business-model/drag.png"
          height={(size.width < 960 && 19) || (size.width > 960 && size.width < 1220 && 21) || (size.width > 1220 && 23)}
          width={(size.width < 960 && 19) || (size.width > 960 && size.width < 1220 && 21) || (size.width > 1220 && 23)}
        />
        <img
          className="z-50"
          onClick={(e) => onDeleteSection(_section)}
          src="/business-model/delete.svg"
          height={(size.width < 960 && 16) || (size.width > 960 && size.width < 1220 && 18) || (size.width > 1220 && 20)}
          width={(size.width < 960 && 16) || (size.width > 960 && size.width < 1220 && 18) || (size.width > 1220 && 20)}
        />
      </div>
    </div>
  );
};

export default SectionManagerItem;
