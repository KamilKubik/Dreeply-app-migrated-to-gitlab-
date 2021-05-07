import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import NewMembersTippy from './tippys/NewMembersTippy';

const NewMembers = ({ projectId }) => {
  return (
    <div className="z-50 text-primarydark rounded-2xl transform hover:scale-105 hover:-translate-y-2 hover:-translate-x-2 transition duration-500 ease-in-out mb-32 flex flex-col">
      <div className="flex">
        <p className="text-primarydark text-lg dark:text-background">Invitation code</p>
        <NewMembersTippy />
      </div>
      <div className="py-8 px-8 shadow-lg mt-1 w-full flex flex-col justify-center items-center border-r-6 rounded-2xl bg-white dark:bg-background">
        <div className="self-center justify-self-center w-full flex">
          <input value={projectId} className="w-full text-gray test-base bg-white focus:outline-none" />
          <CopyToClipboard text={projectId}>
            <img className="cursor-pointer" src="/members/copy1.svg" height={28} width={28} />
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default NewMembers;
