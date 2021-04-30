import React, { useState } from 'react';
import { useAuth } from '../lib/newAuth';
import { useRouter } from 'next/router';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  // const auth = useAuth();
  // console.log(auth);

  const { signUp, currentUser } = useAuth();
  console.log(email);
  console.log(password);

  const registerFn = async (e) => {
    e.preventDefault();
    await signUp(email, password);
    router.push('/name');
    console.log(currentUser);
  };

  return (
    <form onSubmit={registerFn} className='px-8 pt-2 rounded-2xl mt-4'>
      {/* <div className='mb-4'>
        <label className='block text-sm font-medium mb-2' htmlFor='name'>
          Name
        </label>
        <input
          className='shadow appearance-none rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline'
          value={name}
          onChange={(e) => setName(e.target.value)}
          type='name'
          placeholder='name'
        />
      </div> */}
      <div className='mb-4'>
        <label className='block text-sm font-medium mb-2' htmlFor='email'>
          Email
        </label>
        <input
          className='shadow appearance-none rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          placeholder='email'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-sm font-medium mb-2' htmlFor='password'>
          Password
        </label>
        <input
          className='shadow appearance-none rounded w-full py-2 px-3 text-gray mb-3 leading-tight focus:outline-none focus:shadow-outline'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          placeholder='password'
        />
      </div>
      <div className='flex justify-between items-center'>
        <button className='font-sans cursor-not-allowed focus:outline-none'>Forgot password?</button>
        <button
          type='submit'
          className='border-2 border-primary hover:bg-primary hover:text-white text-primary font-medium py-1 px-4 rounded-2xl focus:outline-none'
        >
          Sign In
        </button>
      </div>
    </form>
  );
};

export default Register;
