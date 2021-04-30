import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createStartupData } from '../../../lib/db';
import { useAuth } from '../../../lib/newAuth';

const Dashboard = () => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const { currentUser } = useAuth();

  const { register, handleSubmit } = useForm();

  const onStartupDataCreate = (data) => {
    const newStartup = {
      authorId: currentUser.uid,
      ...data,
    };
    console.log('new - ', newStartup);
    createStartupData(newStartup);
  };

  return (
    <div className='h-screen w-full flex justify-center items-center bg-background flex-col'>
      <div className='p-10 h-auto grid grid-cols-1 w-auto max-w-md w-full bg-white rounded-3xl'>
        <form
          onSubmit={handleSubmit(onStartupDataCreate)}
          className='px-8 pt-2 rounded-2xl'
        >
          <div className='mb-4'>
            <label className='block text-sm font-medium mb-2' htmlFor='name'>
              Name
            </label>
            <input
              name='name' // Przez to name, dodaje się to, co wpisujemy w input'cie (react-hooks-form)
              id='name'
              className='shadow appearance-none rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline'
              value={name}
              onChange={(e) => setName(e.target.value)}
              type='text'
              placeholder='name'
              ref={register({
                required: 'required',
              })}
            />
          </div>
          <div className='mb-6'>
            <label className='block text-sm font-medium mb-2' htmlFor='country'>
              Country
            </label>
            <input
              name='country'
              id='country'
              className='shadow appearance-none rounded w-full py-2 px-3 text-gray mb-3 leading-tight focus:outline-none focus:shadow-outline'
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              type='text'
              placeholder='country'
              ref={register({
                required: 'required',
              })}
            />
          </div>
          <div className='flex justify-end'>
            <button
              type='submit'
              className='border-2 border-primary hover:bg-primary hover:text-white text-primary font-medium py-1 px-4 rounded-2xl'
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
