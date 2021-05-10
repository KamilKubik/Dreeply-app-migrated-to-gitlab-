import React, { useState, useEffect, useRef } from 'react';
import gsap, { Power4 } from 'gsap';
import Tippy from '@tippyjs/react';

const PricingPageTippy = () => {
  const [visible, setVisible] = useState(false);
  const contentRef = useRef(null);
  const tippyRef = useRef();

  const show = () => {
    gsap.fromTo(
      tippyRef.current,
      { autoAlpha: 0, scale: 0 },
      { autoAlpha: 1, scale: 1, duration: 1, transformOrigin: 'bottom left', ease: Power4.easeOut }
    );
    setVisible(true);
  };
  const hide = async () => {
    await gsap.to(tippyRef.current, {
      autoAlpha: 0,
      scale: 0,
      duration: 1,
      transformOrigin: 'bottom left',
      ease: Power4.easeIn,
    });
    setVisible(false);
  };

  const onImageClick = () => {
    if (!visible || visible) {
      visible ? hide() : show();
    }
  };

  useEffect(() => {
    // GSAP
    gsap.fromTo(contentRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 2, transformOrigin: 'bottom left', ease: Power4.easeOut });
  }, []);

  return (
    <Tippy
      zIndex={visible ? 40 : 0}
      onShow={show}
      animation="fade"
      duration={500}
      touch={true}
      visible={visible}
      onClickOutside={hide}
      offset={[180, -25]}
      interactive={true}
      content={
        visible && (
          <div ref={tippyRef} className="h-24 w-80 shadow-lg rounded-2xl bg-primary flex justify-center items-center focus:outline-none">
            <p className="p-4 text-sm text-center text-white flex justify-center items-center">
              Each of our time plans, includes all available features. We're so happy you've made it this far!
            </p>
          </div>
        )
      }
    >
      <img
        onClick={onImageClick}
        className="cursor-pointer ml-2 relative bottom-0.5 opacity-8"
        src="/members/bulb.svg"
        height={24}
        width={24}
      />
    </Tippy>
  );
};

export default PricingPageTippy;
