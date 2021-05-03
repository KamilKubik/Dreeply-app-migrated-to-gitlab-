import React, { useRef, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import gsap, { Linear } from 'gsap';
import Router from 'next/router';

const ExitComponent = () => {
  const exitImage = useRef();
  useEffect(() => {
    if (!isMobile) {
      exitImage.current.addEventListener('mouseenter', () => {
        gsap.to(exitImage.current, { rotation: '180_cw', duration: 0.5, ease: Linear.easeIn });
      });
      exitImage.current.addEventListener('mouseleave', () => {
        gsap.to(exitImage.current, { rotation: '0_cw', duration: 0.5, ease: Linear.easeIn });
      });
    }
  }, []);
  return (
    <img
      ref={exitImage}
      onClick={() => Router.push(`/dashboard/projects/${Router.query.project}`)}
      src="/business-model/back4.svg"
      height={28}
      width={28}
      className="fixed left-6 top-3 cursor-pointer z-50"
    />
  );
};

export default ExitComponent;
