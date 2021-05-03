import Image from 'next/image';
import React from 'react';

const MobilePrevent = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-background text-primarydark">
      <div className="w-full px-4 smContainer:px-12 mdContainer:px-20 flex flex-col justify-center items-center">
        <img src="/mobile-prevent/computer.svg" height={250} width={250} />
        <div>
          <p className="text-center text-lg mt-4">
            Please open the application on your computer! 🌴
            {/* <div className="inline-block relative left-2 top-0.5">
              <img src="/mobile-prevent/rocket.svg" height={20} width={20} />
            </div> */}
          </p>
        </div>
        <p className="text-center text mt-2 text-gray px-4 smContainer:px-8 mdContainer:px-16">
          In order to provide our users with the best possible experience, we have decided to disable the use of our app via mobile devices.
        </p>
      </div>
    </div>
  );
};

export default MobilePrevent;
