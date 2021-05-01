import React, { useContext, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useAuth } from '../../lib/newAuth';
import { useRouter } from 'next/router';
// import { IsActiveContext } from '../../components/dashboard/Navbar';
import { IsActiveContext } from '../../components/dashboard/DesktopNavbar';
import gsap, { Power4, Linear } from 'gsap';

import TippyMonster from '../../components/dashboard/Tippy';
import Link from 'next/link';
import { db } from '../../lib/firebase';

const Redirect = ({ to }) => {
  const router = useRouter();

  useEffect(() => {
    router.push(to);
  }, [to]);

  return null;
};

const DasboardPage = () => {
  const [userName, setUserName] = useState('');
  const activeHover = useContext(IsActiveContext);
  const { currentUser, logOut } = useAuth();
  const contentRef = useRef(null);

  const activeClass = activeHover ? 'ml-52' : 'ml-20';

  if (activeHover) {
    gsap.to(contentRef.current, {
      marginLeft: '208px',
      ease: Power4.easeOut,
      // duration: 1
    });
  } else {
    gsap.to(contentRef.current, { marginLeft: '80px', ease: Power4.easeOut });
  }

  if (!currentUser) {
    return <Redirect to="/" />;
  }

  // console.log('CURRENT USER - ', currentUser);

  useEffect(() => {
    console.log(currentUser);
    const getUser = async () => {
      const data = await db.collection('users').doc(currentUser.uid).get();
      setUserName(data.data().name);
    };
    getUser();

    // GSAP
    gsap.fromTo(contentRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 2, ease: Power4.easeInOut });
  }, []);

  console.log('CURRENT USER - ', userName);

  return (
    <>
      <TippyMonster
        welcome
        contentClass="sm:h-32 sm:w-80 shadow-lg rounded-2xl bg-primary flex justify-center items-center"
        contentText="Welcome to our startup builder! I'm so happy to see you "
        contentText1=" If you ever have a problem, just click on me, i'm here to help you. Let's get to work and create a startup that will conquer this world "
      />
      <div
        ref={contentRef}
        className={`h-full ${activeClass} bg-background dark:bg-secondary`}
        style={{
          transitionTimingFunction: 'linear',
          transitionDuration: '200ms',
          transitionProperty: 'width, margin-left',
        }}
      >
        <div className="h-screen w-full relative flex flex-col justify-center items-center">
          <div>
            <p className="text-primarydark dark:text-background text-center text-2xl sm:text-3xl">
              <img src="/gifs/globe.gif" height={50} width={50} className="inline-block relative bottom-1" /> Good Afternoon, {userName}
            </p>
          </div>
          <div>
            <p className="text-primarydark dark:text-background text-center text-md sm:text-lg">How would you like to get started?</p>
          </div>
          <div>
            <img src="/software.svg" height={175} width={175} />
          </div>
          <div className="flex flex-wrap justify-center">
            <Link href="/dashboard/startup">
              <button className="border border-primarydark dark:border-background text-primarydark dark:text-background font-light py-2 px-6 rounded-2xl m-2 focus:outline-none">
                Plain mockup
              </button>
            </Link>
            <button
              disabled={true}
              className="border border-primarydark dark:border-background text-primarydark dark:text-background font-light py-2 px-6 rounded-2xl m-2 focus:outline-none cursor-not-allowed"
            >
              Detailed business plan
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DasboardPage;
