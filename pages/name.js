import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import { db } from '../lib/firebase';
import { useAuth } from '../lib/newAuth';

const Name = () => {
  const [name, setName] = useState('');
  const [userCountry, setUserCountry] = useState('');
  const router = useRouter();

  const { currentUser } = useAuth();
  console.log(currentUser);

  const onSubmit = async (e) => {
    e.preventDefault();
    if ((name, userCountry)) {
      await db
        .collection('users')
        .doc(currentUser.uid)
        .set({ name }, { merge: true });
      router.push('/dashboard/welcome');
      return;
    } else {
      alert(':(((');
    }
  };

  return (
    <>
      <ul className='circles'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        {/* 10 */}
        {/* <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li> */}
      </ul>
      <div className='h-screen w-full flex justify-center items-center bg-background flex-col'>
        <div className='z-50 p-10 h-auto grid grid-cols-1 grid-rows-3 w-auto max-w-nameContainer w-full bg-white rounded-3xl'>
          <div className='row-span-1 text-center'>
            <div className='text-2xl font-medium'>
              <img
                src='/gifs/sparkles.gif'
                height={50}
                width={50}
                className='inline-block relative bottom-2'
              />{' '}
              What is your name?
            </div>
            <div className='text-base text-gray px-4'>
              Oops, one more tiny step and we will get down to business.
            </div>
          </div>
          <div className='row-span-2'>
            <form
              onSubmit={onSubmit}
              className='z-50 px-4 pt-2 rounded-2xl mt-4'
            >
              <div className='mb-8'>
                <label
                  className='block text-sm font-medium mb-2'
                  htmlFor='name'
                >
                  Name
                </label>
                <input
                  className='text-primarydark w-full z-50 shadow appearance-none rounded-lg py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type='name'
                  placeholder='name'
                />
              </div>
              <div className='mb-8'>
                <label
                  className='block text-sm font-medium mb-2'
                  htmlFor='userCountry'
                >
                  Country
                </label>
                <CountryDropdown
                  id='country'
                  defaultOptionLabel='country'
                  className={`${
                    userCountry ? 'text-primarydark' : 'text-placeholder'
                  } w-full z-50 shadow appearance-none rounded-lg py-2 px-3 leading-tight focus:outline-none focus:shadow-outline`}
                  value={userCountry}
                  onChange={(country) => setUserCountry(country)}
                />
              </div>
              {/* <div className='flex justify-between items-center pb-8 pt-4'>
                <input
                  className='text-primarydark mr-4 w-40 z-50 shadow appearance-none rounded-2xl py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type='name'
                  placeholder='name'
                />
                <CountryDropdown
                  id='country'
                  defaultOptionLabel='Country'
                  className={`${
                    userCountry ? 'text-primarydark' : 'text-placeholder'
                  } ml-4 w-40 z-50 shadow appearance-none rounded-2xl py-2 px-3 leading-tight focus:outline-none focus:shadow-outline`}
                  value={userCountry}
                  onChange={(country) => setUserCountry(country)}
                />
              </div> */}
              <hr style={{ width: '100%', color: '#6C63FF' }} />
              <div className='flex items-center justify-between mt-8'>
                <p className='text-primarydark'>Back</p>
                <button
                  type='submit'
                  className='z-50 border-2 border-primary hover:bg-primary hover:text-white text-primary font-medium py-1.5 px-6 rounded-2xl focus:outline-none'
                >
                  Let's start
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className='text-center mt-4 text-sm text-gray-400 text-primarydark max-w-nameContainer px-4'>
          “Always think outside the box and embrace opportunities that appear,
          wherever they might be.”
        </div>
      </div>
    </>
  );
};

export default Name;
