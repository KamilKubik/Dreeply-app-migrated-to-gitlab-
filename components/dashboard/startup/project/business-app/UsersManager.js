import React from 'react';
import ManagerTippy from './tippys/ManagerTippy';

const UsersManager = ({ projectUsers }) => {
  return (
    <div className="z-50 text-primarydark rounded-2xl transform hover:scale-105 hover:-translate-y-2 hover:-translate-x-2 transition duration-500 ease-in-out mb-16 flex flex-col">
      <div className="flex">
        <p className="text-primarydark text-lg dark:text-background">Startup members</p>
        <ManagerTippy />
      </div>
      <div className="py-8 px-8 shadow-lg mt-1 w-full flex flex-col justify-center items-center border-r-6 rounded-2xl bg-white dark:bg-background">
        <div className="w-full grid grid-cols-projectMembers items-center text-xs mdContainer:text-sm lg1Container:text-base">
          <p>Name</p>
          <p>Email</p>
          <p>Country</p>
        </div>
        <hr className="text-primary w-full" />
        <div className="h-full w-full rounded-2xl flex flex-wrap flex-col">
          {projectUsers &&
            projectUsers.map((user) => {
              return (
                <div className="w-full grid grid-cols-projectMembers py-3 items-center text-sm text-gray">
                  {/* <div className="border-l border-primary pl-2"> */}
                  <div>
                    <input value={user.userName} contentEditable={false} className="w-11/12 bg-white focus:outline-none" />
                  </div>
                  <div>
                    <input value={user.userEmail} contentEditable={false} className="w-11/12 bg-white focus:outline-none" />
                  </div>
                  <div>
                    <input value={user.userCountry} contentEditable={false} className="w-11/12 bg-white focus:outline-none" />
                  </div>
                  <div className="flex justify-end">
                    <button className="hover:bg-red hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border-red text-red py-1 px-8 rounded-2xl dark:text-primarydark dark:border-primarydark">
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default UsersManager;
