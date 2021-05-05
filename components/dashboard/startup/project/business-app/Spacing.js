import React from 'react';
import Image from 'next/image';

const SpacingElement = ({ provided, deleteField, field }) => {
  return (
    <div ref={provided.innerRef} {...provided.draggableProps} className="w-full grid grid-cols-12fr justify-items-center items-center mt-6">
      <div className="col-start-2 col-end-12 relative flex flex-col h-full w-full flex px-8 py-8 rounded-2xl bg-white dark:bg-background">
        <div className="bg-background rounded-2xl w-full px-4 py-5"></div>
      </div>
      <div className="col-start-12 col-end-13 justify-self-center self-start flex flex-col flex-wrap gap-2">
        <Image onClick={() => deleteField(field.index)} className="cursor-pointer" src={`/plan-bar/exit4.svg`} height={36} width={36} />
        <Image {...provided.dragHandleProps} className="cursor-pointer" src={`/plan-bar/drag2.svg`} height={36} width={36} />
      </div>
    </div>
  );
};

export default SpacingElement;
