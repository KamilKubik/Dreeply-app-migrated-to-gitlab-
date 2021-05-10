import React from 'react';
import Register from '../components/Register';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

const SignupPage = () => {
  const title = "Let's create an account for you";
  const url = 'https://supersweetchilli.online/signup';

  return (
    <>
      <NextSeo title={title} canonical={url} openGraph={{ url, title }} />
      <div className="h-screen w-full flex justify-center items-center bg-background flex-col">
        <div className="p-10 h-auto grid grid-cols-1 grid-rows-3 max-w-loginContainer w-full bg-white rounded-3xl">
          <div className="row-span-1 text-center">
            <div className="text-2xl font-sans font-medium">
              <img src="/gifs/hello-hand.gif" height={40} width={40} className="inline-block relative bottom-1" /> Create your account
            </div>
            <div className="text-base text-gray font-sans">
              To become a member of our startup community, please tell us something about yourself.
            </div>
          </div>
          <div className="row-span-2">
            <Register />
          </div>
        </div>
        <div className="text-center mt-4 text-sm text-gray-400 text-primarydark">
          Are you already a member?
          <Link href="/login">
            <a> Log In</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
