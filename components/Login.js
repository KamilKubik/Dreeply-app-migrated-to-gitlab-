import React, { useState } from 'react';
import { useAuth } from '../lib/newAuth';
import { useRouter } from 'next/router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { logIn, currentUser } = useAuth();
  console.log(currentUser);

  const router = useRouter();

  const loginFn = async (e) => {
    e.preventDefault();
    await logIn(email, password);
    router.push('/dashboard/welcome');
  };

  return (
    <form onSubmit={loginFn} className='px-8 pt-2 rounded-2xl mt-4'>
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
        <button className='font-sans'>Forgot password?</button>
        <button
          type='submit'
          className='border-2 border-primary hover:bg-primary hover:text-white text-primary font-medium py-1 px-4 rounded-2xl'
        >
          Log In
        </button>
      </div>
    </form>
  );
};

export default Login;
