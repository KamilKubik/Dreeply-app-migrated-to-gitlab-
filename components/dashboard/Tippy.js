import React, { useState, useEffect, useRef } from 'react';
import gsap, { Power4 } from 'gsap';
import Tippy from '@tippyjs/react';
import Image from 'next/image';

const TippyMonster = ({
  setTippyHelper,
  setWrongNameTippyHelper,
  wrongName,
  projectCreator,
  cashFlow,
  businessPlan,
  projectManager,
  contentClass,
  contentText,
  contentText1,
  startups,
  market,
  model,
  success,
  tippyMonster,
  setTippyMonster,
  setCurrentTippy,
  emptyInput,
  initialModal,
  vision,
  product,
  finances,
  welcome,
}) => {
  const [visible, setVisible] = useState(false);
  const contentRef = useRef(null);
  const tippyRef = useRef();

  // const [emptyInput, setEmptyInput] = useState(false);

  const show = () => {
    gsap.fromTo(
      tippyRef.current,
      { autoAlpha: 0, scale: 0 },
      { autoAlpha: 1, scale: 1, duration: 1, transformOrigin: 'bottom right', ease: Power4.easeOut }
    );
    setVisible(true);
    emptyInput && setCurrentTippy(true); // current tippy jest częścią obsługi problemu, kiedy mamy otwartego tooltipa normalnego i wciskamy, żeby wyświetlić czerwonego
  };
  const hide = async () => {
    await gsap.to(tippyRef.current, {
      autoAlpha: 0,
      scale: 0,
      duration: 1,
      transformOrigin: 'bottom right',
      ease: Power4.easeIn,
    });
    emptyInput && setTippyMonster(false);
    setVisible(false);
    emptyInput && setCurrentTippy(false);
    tippyMonster && setTippyHelper(false);
    wrongName && setWrongNameTippyHelper(false);
  };

  const onImageClick = () => {
    if (!tippyMonster) {
      visible ? hide() : show();
    }
  };

  useEffect(() => {
    // GSAP
    gsap.fromTo(contentRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 2, transformOrigin: 'bottom right', ease: Power4.easeOut });
    // TIPPY
    setVisible(true);
    emptyInput && setCurrentTippy(true);
  }, []);

  return (
    <Tippy
      // trigger={tippyMonster}
      zIndex={visible || tippyMonster ? 40 : 0}
      onShow={show}
      animation="fade"
      duration={500}
      touch={true}
      visible={visible || tippyMonster}
      onClickOutside={hide}
      offset={market || model || success || tippyMonster || wrongName ? [-265, -65] : [-220, -65]}
      // placement='left-end'
      interactive={true}
      content={
        (wrongName && (
          <div ref={tippyRef} className="h-16 w-96 shadow-lg rounded-2xl bg-red flex justify-center items-center focus:outline-none">
            <p className="p-4 text-sm text-center text-white flex justify-center items-center">
              Ops, unfortunately you already have a project with that name!
              {/* <img src="/emojis/crying.svg" height={25} width={25} className="inline-block relative" /> */}
            </p>
            <div className="flex items-center justify-center flex-wrap gap-2 mt-2"></div>
          </div>
        )) ||
        (tippyMonster && (
          <div ref={tippyRef} className="h-12 w-96 shadow-lg rounded-2xl bg-red flex justify-center items-center focus:outline-none">
            <p className="py-4 px-2 text-sm text-center text-white flex justify-center items-center">
              Oops, you have to provide all the information
              <img src="/project-create/sad.svg" height={18} width={18} className="ml-2 inline-block relative" />
            </p>
            <div className="flex items-center justify-center flex-wrap gap-2 mt-2"></div>
          </div>
        )) || (
          <div ref={tippyRef} className={`focus:outline-none ${contentClass}`}>
            <div className="text-primarydark p-4 text-sm text-center text-white">
              {contentText}
              {startups && (
                <>
                  <img src="/emojis/cocount.svg" height={22} width={22} className="inline-block" />
                  <p className="inline-block">.</p>
                </>
              )}
              {initialModal && (
                <>
                  <img src="/emojis/hammer.svg" height={22} width={22} className="inline-block" />
                  <p className="inline-block">.</p>
                </>
              )}
              {vision && (
                <>
                  <img src="/emojis/desert.svg" height={22} width={22} className="inline-block relative bottom-0.5" />
                  <p className="inline-block">.</p>
                </>
              )}
              {product && (
                <>
                  <img src="/emojis/ox.svg" height={22} width={22} className="inline-block relative bottom-0.5" />
                  <p className="inline-block">.</p>
                </>
              )}
              {market && (
                <>
                  <img src="/emojis/whale.svg" height={22} width={22} className="inline-block" />
                  <p className="inline-block">.</p>
                </>
              )}
              {finances && (
                <>
                  <img src="/emojis/unicorn.svg" height={22} width={22} className="inline-block relative bottom-0.5" />
                  <p className="inline-block">.</p>
                </>
              )}
              {model && (
                <>
                  <img src="/emojis/pirat.svg" height={22} width={22} className="inline-block" />
                  <p className="inline-block">.</p>
                </>
              )}
              {success && (
                <>
                  <img src="/emojis/star.svg" height={22} width={22} className="inline-block" />
                  <p className="inline-block">!</p>
                </>
              )}
              {welcome && (
                <>
                  <img src="/gifs/hello-hand.gif" height={22} width={22} className="inline-block" />
                  <p className="inline-block">.</p>
                </>
              )}
              {projectManager && (
                <>
                  <img src="/project-manager/octopus.svg" height={20} width={20} className="inline-block relative bottom-0.5" />
                  <p className="inline-block">.</p>
                </>
              )}
              {businessPlan && (
                <>
                  <img src="/business-model/grow.svg" height={20} width={20} className="inline-block relative bottom-0.5 left-1" />
                  {/* <p className="inline-block">.</p> */}
                </>
              )}
              {cashFlow && (
                <>
                  <img src="/cash-flow/tippy.svg" height={20} width={20} className="inline-block relative bottom-0.5 left-1" />
                  {/* <p className="inline-block">.</p> */}
                </>
              )}
              {projectCreator && (
                <>
                  <img src="/project-create/bulb.svg" height={20} width={20} className="inline-block relative bottom-0.5 left-1" />
                  {/* <p className="inline-block">.</p> */}
                </>
              )}
              {/* <img src='/emojis/cocount.svg' height={22} width={22} className='inline-block' />. */}

              {/* TEXT 1 */}
              {contentText1 && contentText1}
              {startups && (
                <>
                  <img src="/emojis/balloon.svg" height={22} width={22} className="inline-block" />
                  <p className="inline-block">.</p>
                </>
              )}
              {vision && (
                <>
                  <img src="/emojis/camel.svg" height={22} width={22} className="inline-block" />
                  <p className="inline-block">.</p>
                </>
              )}
              {product && (
                <>
                  <img src="/emojis/map.svg" height={22} width={22} className="inline-block" />
                  <p className="inline-block">.</p>
                </>
              )}
              {market && (
                <>
                  <img src="/emojis/island.svg" height={22} width={22} className="inline-block" />
                  <p className="inline-block">.</p>
                </>
              )}
              {finances && (
                <>
                  <img src="/emojis/construction.svg" height={22} width={22} className="inline-block" />
                  <p className="inline-block">.</p>
                </>
              )}
              {model && (
                <>
                  <img src="/emojis/popper.svg" height={22} width={22} className="inline-block relative bottom-0.5" />
                  <p className="inline-block">!</p>
                </>
              )}
              {welcome && (
                <>
                  <img src="/gifs/rocket.gif" height={22} width={22} className="inline-block" />
                  <p className="inline-block">!</p>
                </>
              )}
              {projectManager && (
                <>
                  <img src="/project-manager/flower.svg" height={18} width={18} className="inline-block relative bottom-0.5" />
                  {/* <p className="inline-block">!</p> */}
                </>
              )}
              {/* <img src='/emojis/balloon.svg' height={22} width={22} className='inline-block' />. */}
            </div>
            <div className="flex items-center justify-center flex-wrap gap-2 mt-2"></div>
          </div>
        )
      }
    >
      <div className="fixed flex flex-wrap m-2 bottom-4 right-2 z-50">
        <Image src="/monsters/monster-two.svg" height={66} width={60} className="cursor-pointer z-50" onClick={onImageClick} />
      </div>
    </Tippy>
  );
};

export default TippyMonster;
