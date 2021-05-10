import React from 'react';
import Login from '../components/Login';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-background flex-col">
      <div className="p-10 h-auto grid grid-cols-1 grid-rows-3 max-w-loginContainer w-full bg-white rounded-3xl">
        <div className="row-span-1 text-center">
          <div className="text-2xl font-sans font-medium">
            <img src="/gifs/hello-hand.gif" height={40} width={40} className="inline-block relative bottom-1" /> Welcome back!
          </div>
          <div className="text-base text-gray font-sans">We are extremely happy to welcome you back.</div>
        </div>
        <div className="row-span-2">
          <Login />
        </div>
      </div>
      <div className="text-center mt-4 text-sm text-gray-400 text-primarydark">
        Don't have an account?
        <Link href="/signup">
          <a> Create one!</a>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
