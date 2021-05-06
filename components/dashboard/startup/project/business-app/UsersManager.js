import React from 'react';

const UsersManager = ({ selectedProject }) => {
  console.log(selectedProject);
  return (
    <div className="rounded-2xl transform hover:scale-105 hover:-translate-y-2 hover:-translate-x-2 transition duration-500 ease-in-out mb-32">
      <h1 className="text-primarydark text-lg dark:text-background">Startup members</h1>
      <div className="p-6 shadow-lg mt-1 w-full flex flex-col justify-center items-center border-r-6 rounded-2xl bg-white dark:bg-background">
        <p>Startup members</p>
      </div>
    </div>
  );
};

export default UsersManager;
