import React from 'react';

const ProjectNav = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='z-50 h-16 w-52 rounded-3xl bottom-6 bg-white'>
        <div className='h-full w-full grid grid-flow-col grid-cols-7fr gap-x-6 flex justify-items-center items-center px-8'>
          <button className='bg-priamry rounded-3xl'>
            <p className='text-primarydark'>Mockup</p>
          </button>
          <button className='bg-priamryrounded-3xl'>
            <p className='text-primarydark'>Idea</p>
          </button>
          <button className='rounded-3xl'>
            <p className='text-primarydark'>Plan</p>
          </button>
          <button className='bg-priamry rounded-3xl'>
            <p className='text-primarydark'>Budget</p>
          </button>
          <button className='bg-priamry rounded-3xl'>
            <p className='text-primarydark'>SWOT</p>
          </button>
          <button className='bg-priamry rounded-3xl'>
            <p className='text-primarydark'>Members</p>
          </button>
          <button className='bg-priamry rounded-3xl'>
            <p className='text-primarydark'>Settings</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectNav;
