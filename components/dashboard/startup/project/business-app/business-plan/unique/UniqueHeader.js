import React, { useState, useEffect } from 'react';

const HeaderComponent = ({ field }) => {
  console.log('Header from field --> ', field);

  const [title, setTitle] = useState('');

  useEffect(() => {
    setTitle(field.title);
  }, [field]);

  return (
    <div className="w-full grid grid-cols-12fr justify-items-center items-center mt-6">
      <div className="col-start-2 col-end-12 relative flex flex-col h-full w-full flex px-8 py-8 rounded-2xl bg-white dark:bg-background">
        <div className="bg-background rounded-2xl">
          <input
            value={title}
            placeholder="Type here your header"
            className="focus:outline-none w-full text-base text-primarydark bg-background rounded-2xl px-4 py-4"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
