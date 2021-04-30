import Image from 'next/image';
import React from 'react';

const StartupSkeleton = () => {
  const helperVariable = window.innerWidth < 1536 ? 'small' : 'large';

  return (
    <>
      {helperVariable == 'small' ? (
        <div className='w-full grid grid-cols-3fr gap-8 border-r-6 rounded-2xl bg-white mt-8 mb-8 dark:bg-background p-8 text-center'>
          {/* <Image src='/loading/loading.svg' width={150} height={195} className='p-6' /> */}
          <div className='shadow rounded-2xl flex flex-wrap justify-center items-center flex-col'>
            <div
              style={{ height: '486px' }}
              className='relative inline-block text-right w-4/5 py-8'
            >
              <Image src='/loading/loading.svg' width={150} height={195} />
              <div className='h-8 bg-background rounded-2xl mt-2'></div>
              <div className='h-8 bg-background rounded-2xl mt-4'></div>
              <div className='h-8 bg-background rounded-2xl mt-4'></div>
              <div className='h-8 bg-background rounded-2xl mt-4'></div>
              <div className='h-8 bg-background rounded-2xl mt-4'></div>
            </div>
          </div>
          <div className='shadow rounded-2xl flex flex-wrap justify-center items-center flex-col'>
            <div
              style={{ height: '486px' }}
              className='relative inline-block text-right w-4/5 py-8'
            >
              <Image src='/loading/loading.svg' width={150} height={195} />
              <div className='h-8 bg-background rounded-2xl mt-2'></div>
              <div className='h-8 bg-background rounded-2xl mt-4'></div>
              <div className='h-8 bg-background rounded-2xl mt-4'></div>
              <div className='h-8 bg-background rounded-2xl mt-4'></div>
              <div className='h-8 bg-background rounded-2xl mt-4'></div>
            </div>
          </div>
          <div className='shadow rounded-2xl flex flex-wrap justify-center items-center flex-col'>
            <div
              style={{ height: '486px' }}
              className='relative inline-block text-right w-4/5 py-8'
            >
              <Image src='/loading/loading.svg' width={150} height={195} />
              <div className='h-8 bg-background rounded-2xl mt-2'></div>
              <div className='h-8 bg-background rounded-2xl mt-4'></div>
              <div className='h-8 bg-background rounded-2xl mt-4'></div>
              <div className='h-8 bg-background rounded-2xl mt-4'></div>
              <div className='h-8 bg-background rounded-2xl mt-4'></div>
            </div>
          </div>
        </div>
      ) : (
        <div className='w-full grid grid-cols-4fr gap-8 border-r-6 rounded-2xl bg-white mt-8 mb-8 dark:bg-background p-8 text-center'>
          {/* <Image src='/loading/loading.svg' width={150} height={195} className='p-6' /> */}
          <div className='shadow rounded-2xl flex flex-wrap justify-center items-center flex-col'>
            <div
              style={{ height: '486px' }}
              className='relative inline-block text-right w-4/5 py-8'
            >
              <Image src='/loading/loading.svg' width={150} height={195} />
              <div className='h-8 bg-background rounded-2xl mt-2'></div>
              <div className='h-8 bg-background rounded-2xl mt-4'></div>
              <div className='h-8 bg-background rounded-2xl mt-4'></div>
              <div className='h-8 bg-background rounded-2xl mt-4'></div>
              <div className='h-8 bg-background rounded-2xl mt-4'></div>
            </div>
          </div>
          <div className='shadow rounded-2xl flex flex-wrap justify-center items-center flex-col'>
            <div
              style={{ height: '486px' }}
              className='relative inline-block text-right w-4/5 py-8'
            >
              <Image src='/loading/loading.svg' width={150} height={195} />
              <div className='h-8 bg-background rounded-2xl mt-2'></div>
              <div className='h-8 bg-background rounded-2xl mt-4'></div>
              <div className='h-8 bg-background rounded-2xl mt-4'></div>
              <div className='h-8 bg-background rounded-2xl mt-4'></div>
              <div className='h-8 bg-background rounded-2xl mt-4'></div>
            </div>
          </div>
          <div className='shadow rounded-2xl flex flex-wrap justify-center items-center flex-col'>
            <div
              style={{ height: '486px' }}
              className='relative inline-block text-right w-4/5 py-8'
            >
              <Image src='/loading/loading.svg' width={150} height={195} />
              <div className='h-8 bg-background rounded-2xl mt-2'></div>
              <div className='h-8 bg-background rounded-2xl mt-4'></div>
              <div className='h-8 bg-background rounded-2xl mt-4'></div>
              <div className='h-8 bg-background rounded-2xl mt-4'></div>
              <div className='h-8 bg-background rounded-2xl mt-4'></div>
            </div>
          </div>
          <div className='shadow rounded-2xl flex flex-wrap justify-center items-center flex-col'>
            <div
              style={{ height: '486px' }}
              className='relative inline-block text-right w-4/5 py-8'
            >
              <Image src='/loading/loading.svg' width={150} height={195} />
              <div className='h-8 bg-background rounded-2xl mt-2'></div>
              <div className='h-8 bg-background rounded-2xl mt-4'></div>
              <div className='h-8 bg-background rounded-2xl mt-4'></div>
              <div className='h-8 bg-background rounded-2xl mt-4'></div>
              <div className='h-8 bg-background rounded-2xl mt-4'></div>
            </div>
          </div>
        </div>
      )}
    </>
  );

  // if (window.screen.width > 1536) {
  //   return (
  //     <div className='w-full grid grid-cols-3fr gap-8 border-r-6 rounded-2xl bg-white mt-8 mb-8 dark:bg-background p-8 text-center'>
  //       {/* <Image src='/loading/loading.svg' width={150} height={195} className='p-6' /> */}
  //       <div className='shadow rounded-2xl flex flex-wrap justify-center items-center flex-col'>
  //         <div
  //           style={{ height: '486px' }}
  //           className='relative inline-block text-right w-4/5 py-8'
  //         >
  //           <Image src='/loading/loading.svg' width={150} height={195} />
  //           <div className='h-8 bg-background rounded-2xl mt-2'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //         </div>
  //       </div>
  //       <div className='shadow rounded-2xl flex flex-wrap justify-center items-center flex-col'>
  //         <div
  //           style={{ height: '486px' }}
  //           className='relative inline-block text-right w-4/5 py-8'
  //         >
  //           <Image src='/loading/loading.svg' width={150} height={195} />
  //           <div className='h-8 bg-background rounded-2xl mt-2'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //         </div>
  //       </div>
  //       <div className='shadow rounded-2xl flex flex-wrap justify-center items-center flex-col'>
  //         <div
  //           style={{ height: '486px' }}
  //           className='relative inline-block text-right w-4/5 py-8'
  //         >
  //           <Image src='/loading/loading.svg' width={150} height={195} />
  //           <div className='h-8 bg-background rounded-2xl mt-2'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className='w-full grid grid-cols-4fr gap-8 border-r-6 rounded-2xl bg-white mt-8 mb-8 dark:bg-background p-8 text-center'>
  //       {/* <Image src='/loading/loading.svg' width={150} height={195} className='p-6' /> */}
  //       <div className='shadow rounded-2xl flex flex-wrap justify-center items-center flex-col'>
  //         <div
  //           style={{ height: '486px' }}
  //           className='relative inline-block text-right w-4/5 py-8'
  //         >
  //           <Image src='/loading/loading.svg' width={150} height={195} />
  //           <div className='h-8 bg-background rounded-2xl mt-2'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //         </div>
  //       </div>
  //       <div className='shadow rounded-2xl flex flex-wrap justify-center items-center flex-col'>
  //         <div
  //           style={{ height: '486px' }}
  //           className='relative inline-block text-right w-4/5 py-8'
  //         >
  //           <Image src='/loading/loading.svg' width={150} height={195} />
  //           <div className='h-8 bg-background rounded-2xl mt-2'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //         </div>
  //       </div>
  //       <div className='shadow rounded-2xl flex flex-wrap justify-center items-center flex-col'>
  //         <div
  //           style={{ height: '486px' }}
  //           className='relative inline-block text-right w-4/5 py-8'
  //         >
  //           <Image src='/loading/loading.svg' width={150} height={195} />
  //           <div className='h-8 bg-background rounded-2xl mt-2'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //         </div>
  //       </div>
  //       <div className='shadow rounded-2xl flex flex-wrap justify-center items-center flex-col'>
  //         <div
  //           style={{ height: '486px' }}
  //           className='relative inline-block text-right w-4/5 py-8'
  //         >
  //           <Image src='/loading/loading.svg' width={150} height={195} />
  //           <div className='h-8 bg-background rounded-2xl mt-2'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //           <div className='h-8 bg-background rounded-2xl mt-4'></div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
};

export default StartupSkeleton;
