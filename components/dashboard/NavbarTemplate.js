import React, { useContext, useEffect, useRef } from 'react';
import { useAuth } from '../../lib/newAuth';
import { useRouter } from 'next/router';
import { IsActiveContext } from './DesktopNavbar';
import gsap, { Power4 } from 'gsap';
import { useWindowSize } from '../../utils/useWindowSize';

const Redirect = ({ to }) => {
  const router = useRouter();

  useEffect(() => {
    router.push(to);
  }, [to]);

  return null;
};

const NavbarTemplate = ({ children }) => {
  // Mobile friendly
  const size = useWindowSize();

  const activeHover = useContext(IsActiveContext);
  const { currentUser } = useAuth();
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

  return (
    <>
      {size.width < 860 ? (
        <>{children}</>
      ) : (
        <div
          ref={contentRef}
          className={`relative h-full ${activeClass} bg-background dark:bg-secondary`}
          style={{
            transitionTimingFunction: 'linear',
            transitionDuration: '200ms',
            transitionProperty: 'width, margin-left',
          }}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default NavbarTemplate;
