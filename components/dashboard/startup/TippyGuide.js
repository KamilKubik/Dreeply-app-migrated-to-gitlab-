import React, { useState, useEffect, useRef } from 'react';
import gsap, { Power4 } from 'gsap';
import Tippy from '@tippyjs/react';
import Image from 'next/image';

const TippyGuide = ({
  contentClass,
  contentText,
  market,
  model,
  success,
  tippyMonster,
  setTippyMonster,
  setCurrentTippy,
  emptyInput,
  angry,
}) => {
  const [visible, setVisible] = useState(false);
  const contentRef = useRef(null);
  const tippyRef = useRef();
  const suggestionIcon = useRef();
  const tippyder = useRef();

  // const [emptyInput, setEmptyInput] = useState(false);

  const show = () => {
    gsap.fromTo(
      tippyRef.current,
      { autoAlpha: 0, scale: 0 },
      { autoAlpha: 1, scale: 1, duration: 1, ease: Power4.easeOut }
    );
    setVisible(true);
    // emptyInput && setCurrentTippy(true); // current tippy jest częścią obsługi problemu, kiedy mamy otwartego tooltipa normalnego i wciskamy, żeby wyświetlić czerwonego
  };
  const hide = async () => {
    await gsap.to(tippyRef.current, {
      autoAlpha: 0,
      scale: 0,
      duration: 1,
      ease: Power4.easeIn,
    });
    // emptyInput && setTippyMonster(false);
    setVisible(false);
    // emptyInput && setCurrentTippy(false);
  };

  const onImageClick = () => {
    visible ? hide() : show();
  };

  useEffect(() => {
    tippyder.current.classList.remove('data-placement');
    // suggestionIcon.current.addEventListener('mouseenter', () => (visible ? hide() : show()));
    // suggestionIcon.current.addEventListener('mouseleave', () => (!visible ? hide() : show()));
    // GSAP
    // gsap.fromTo(
    //   contentRef.current,
    //   { autoAlpha: 0 },
    //   { autoAlpha: 1, duration: 2, ease: Power4.easeOut }
    // );
    // TIPPY
    // setVisible(true);
    // emptyInput && setCurrentTippy(true);
  }, []);

  console.log('tm - ', tippyMonster);
  console.log('visible - ', visible);

  return (
    <Tippy
      ref={tippyder}
      // trigger={tippyMonster}
      sticky={false}
      zIndex={20}
      touch={true}
      visible={visible}
      onClickOutside={hide}
      placement='left-end'
      // offset={[-200, -35]}
      interactive={true}
      content={
        <div ref={tippyRef} className={contentClass}>
          <div
            style={{ whiteSpace: 'pre-line' }}
            className='text-primarydark p-4 text-sm text-white'
          >
            {angry ? (
              <img
                src='/emojis/angersymbol.svg'
                height={22}
                width={22}
                className='inline-block relative bottom-0.5'
              />
            ) : (
              <img
                src='/emojis/test.svg'
                height={22}
                width={22}
                className='inline-block'
              />
            )}
            {contentText}
          </div>
        </div>
      }
    >
      <img
        ref={suggestionIcon}
        id='suggestionIcon'
        className='relative cursor-pointer'
        src='/guide/lamp2.svg'
        height={40}
        width={40}
        onClick={onImageClick}
      />
    </Tippy>
  );
};

export default TippyGuide;
