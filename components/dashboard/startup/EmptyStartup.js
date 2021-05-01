import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const EmptyStartup = ({ onProjectCreate }) => {

  // useEffect(() => {
  //   gsap.fromTo(
  //     containerRef.current,
  //     { autoAlpha: 0 },
  //     { autoAlpha: 1, duration: 2, ease: Power4.easeOut }
  //   );
  // }, [])

  return (
    <div className='w-full flex flex-col justify-center items-center border-r-6 rounded-2xl bg-white mt-8 dark:bg-background'>
      <Image height={200} width={200} src='/launch-maker.svg' />
      <h1 className='text-secondary text-base text-gray'>
        It looks like you have no any startups yet 🔎
      </h1>
      <div className='p-4'>
        <Link href='/dashboard/startup/creator'>
          <button onClick={onProjectCreate} className='hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary dark:text-primarydark dark:border-primarydark text-sm font-light py-2 px-6 rounded-2xl m-2'>
            Create your first startup
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyStartup;
