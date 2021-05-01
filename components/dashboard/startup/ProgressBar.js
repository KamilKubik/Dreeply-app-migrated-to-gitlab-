import React, { useEffect, useRef, useState } from 'react';
import { db } from '../../../lib/firebase';
import { useAuth } from '../../../lib/newAuth';
import Image from 'next/image';
import styled from 'styled-components';
import gsap, { Power4 } from 'gsap';

const DivComponent = styled.div`
  position: relative;
  z-index: 2;
  margin-top: 16px;
  margin-bottom: 16px;
  ::after {
    content: '';
    background-color: ${(props) =>
      props.filledSection ? '#0AFF00' : '#fc573b'};
    height: 1px;
    width: 50%;
    display: block;
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
`;

const DivComponent1 = styled.div`
  position: relative;
  z-index: 2;
  margin-top: 16px;
  margin-bottom: 16px;
  ::after {
    content: '';
    background-color: ${(props) =>
      props.filledSection1 ? '#0AFF00' : '#fc573b'};
    height: 1px;
    width: 50%;
    display: block;
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
`;

const DivComponent2 = styled.div`
  position: relative;
  z-index: 2;
  margin-top: 16px;
  margin-bottom: 16px;
  ::after {
    content: '';
    background-color: ${(props) =>
      props.filledSection2 ? '#0AFF00' : '#fc573b'};
    height: 1px;
    width: 50%;
    display: block;
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
`;

const DivComponent3 = styled.div`
  position: relative;
  z-index: 2;
  margin-top: 16px;
  margin-bottom: 16px;
  ::after {
    content: '';
    background-color: ${(props) =>
      props.filledSection3 ? '#0AFF00' : '#fc573b'};
    height: 1px;
    width: 50%;
    display: block;
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
`;

const DivComponent4 = styled.div`
  position: relative;
  z-index: 2;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const ProgressBar = ({ onLoadOpacity, onLoadOpacity1, onLoadOpacity2, onLoadOpacity3, onLoadOpacity4 }) => {
  const [filledSection, setFilledSection] = useState(false);
  const [filledSection1, setFilledSection1] = useState(false);
  const [filledSection2, setFilledSection2] = useState(false);
  const [filledSection3, setFilledSection3] = useState(false);
  const [filledSection4, setFilledSection4] = useState(false);
  const { currentUser } = useAuth();
  const containerRef = useRef();

  console.log('-', filledSection);
  console.log('1-', filledSection1);
  console.log('2-', filledSection2);
  console.log('3-', filledSection3);
  console.log('4-', filledSection4);

  useEffect(() => {
    gsap.set(containerRef.current, { opacity: 0 });
    gsap.to(containerRef.current, { opacity: 1, duration: 1, ease: Power4.easeIn})
    const getCurrentProject = async () => {
      const data = await db
        .collection('currentProject')
        .doc(currentUser.uid)
        .get();
      console.log(data.data());
      const {
        // projectId,
        filledSection,
        filledSection1,
        filledSection2,
        filledSection3,
        filledSection4,
      } = data.data();
      return (
        setFilledSection(filledSection),
        setFilledSection1(filledSection1),
        setFilledSection2(filledSection2),
        setFilledSection3(filledSection3),
        setFilledSection4(filledSection4)
      );
    };
    getCurrentProject();
  }, []);

  // const filledSections =
  //   filledSection &&
  //   filledSection1 &&
  //   filledSection2 &&
  //   filledSection3 &&
  //   filledSection4;

  console.log('opacity - ', onLoadOpacity);

  return (
    // <>
    //   {filledSections && (
        <div
          ref={containerRef}
          className='text-center mt-12 mb-12'
        >
          <ul className='text-center'>
            <li className='inline-block w-1/5 relative'>
              <Image src='/places/desert.svg' height={75} width={75} className={`${onLoadOpacity ? 'opacity-100' : 'opacity-50'}`} />
              <br />
              <DivComponent filledSection={filledSection}>
                {/* <p className='m-auto max-w-min text-2xl bg-transparent'>⛈</p> */}
                <Image
                  src={`/progress/${filledSection ? 'check' : 'remove'}.svg`}
                  height={32}
                  width={32}
                  className={`${onLoadOpacity ? 'opacity-100' : 'opacity-50'}`}
                />
                {/* <svg
                      height='24px'
                      width='24px'
                      className='m-auto bg-background border border-red rounded-full p-1.5'
                      aria-hidden='true'
                      focusable='false'
                      data-prefix='fas'
                      data-icon='times'
                      role='img'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 352 512'
                    >
                      <path
                        fill='currentColor'
                        d='M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z'
                      ></path>
                    </svg> */}
                {/* <svg
                      height='24px'
                      width='24px'
                      className='m-auto bg-background border border-gray rounded-full p-1.5'
                      aria-hidden='true'
                      focusable='false'
                      data-prefix='fas'
                      data-icon='check'
                      role='img'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 512 512'
                    >
                      <path
                        fill='currentColor'
                        d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'
                      ></path>
                    </svg> */}
              </DivComponent>
              <p className={`${onLoadOpacity ? 'opacity-100' : 'opacity-50'} text-primarydark dark:text-background`}>Vision</p>
            </li>
            <li className='inline-block w-1/5 relative'>
              <Image
                src='/places/wall.svg'
                height={75}
                width={75}
                className={`${onLoadOpacity1 ? 'opacity-100' : 'opacity-50'}`}
              />
              <br />
              <DivComponent1 filledSection1={filledSection1}>
                {/* <p className='m-auto max-w-min text-2xl bg-transparent opacity-50'>
                      🌧
                    </p> */}
                <Image
                  src={`/progress/${filledSection1 ? 'check' : 'remove'}.svg`}
                  height={32}
                  width={32}
                  className={`${onLoadOpacity1 ? 'opacity-100' : 'opacity-50'}`}
                />
                {/* <svg
                      height='24px'
                      width='24px'
                      className='m-auto bg-background border border-primary rounded-full p-1.5'
                      aria-hidden='true'
                      focusable='false'
                      data-prefix='fas'
                      data-icon='check'
                      role='img'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 512 512'
                    >
                      <path
                        fill='currentColor'
                        d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'
                      ></path>
                    </svg> */}
              </DivComponent1>
              <p className={`${onLoadOpacity1 ? 'opacity-100' : 'opacity-50'} text-primarydark dark:text-background`}>Product</p>
            </li>
            <li className='inline-block w-1/5 relative'>
              <Image
                src='/places/sea.svg'
                height={75}
                width={75}
                className={`${onLoadOpacity2 ? 'opacity-100' : 'opacity-50'}`}
              />
              <br />
              <DivComponent2 filledSection2={filledSection2}>
                {/* <p className='m-auto max-w-min text-2xl bg-transparent opacity-50'>
                      ☁️
                    </p> */}
                <Image
                  src={`/progress/${filledSection2 ? 'check' : 'remove'}.svg`}
                  height={32}
                  width={32}
                  className={`${onLoadOpacity2 ? 'opacity-100' : 'opacity-50'}`}
                />
                {/* <svg
                      height='24px'
                      width='24px'
                      className='m-auto bg-background border border-primary rounded-full p-1.5'
                      aria-hidden='true'
                      focusable='false'
                      data-prefix='fas'
                      data-icon='check'
                      role='img'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 512 512'
                    >
                      <path
                        fill='currentColor'
                        d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'
                      ></path>
                    </svg> */}
              </DivComponent2>
              <p className={`${onLoadOpacity2 ? 'opacity-100' : 'opacity-50'} text-primarydark dark:text-background`}>Market</p>
            </li>
            <li className='inline-block w-1/5 relative'>
              <Image
                src='/places/amsterdam.svg'
                height={75}
                width={75}
                className={`${onLoadOpacity3 ? 'opacity-100' : 'opacity-50'}`}
              />
              <br />
              <DivComponent3 filledSection3={filledSection3}>
                {/* <div className='m-auto max-w-min text-2xl bg-transparent opacity-50'>
                      ⛅️
                    </div> */}
                <Image
                  src={`/progress/${filledSection3 ? 'check' : 'remove'}.svg`}
                  height={32}
                  width={32}
                  className={`${onLoadOpacity3 ? 'opacity-100' : 'opacity-50'}`}
                />
                {/* <svg
                      height='24px'
                      width='24px'
                      className='m-auto bg-background border border-primary rounded-full p-1.5'
                      aria-hidden='true'
                      focusable='false'
                      data-prefix='fas'
                      data-icon='check'
                      role='img'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 512 512'
                    >
                      <path
                        fill='currentColor'
                        d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'
                      ></path>
                    </svg> */}
              </DivComponent3>
              <p className={`${onLoadOpacity3 ? 'opacity-100' : 'opacity-50'} text-primarydark dark:text-background`}>Finances</p>
            </li>
            <li className='inline-block w-1/5 relative'>
              <Image
                src='/places/pirate.svg'
                height={75}
                width={75}
                className={`${onLoadOpacity4 ? 'opacity-100' : 'opacity-50'}`}
              />
              <br />
              <DivComponent4 filledSection4={filledSection4}>
                {/* <div className='m-auto max-w-min text-2xl bg-transparent opacity-50'>
                      ⛅️
                    </div> */}
                <Image
                  src={`/progress/${filledSection4 ? 'check' : 'remove'}.svg`}
                  height={32}
                  width={32}
                  className={`${onLoadOpacity4 ? 'opacity-100' : 'opacity-50'}`}
                />
                {/* <svg
                      height='24px'
                      width='24px'
                      className='m-auto bg-background border border-primary rounded-full p-1.5'
                      aria-hidden='true'
                      focusable='false'
                      data-prefix='fas'
                      data-icon='check'
                      role='img'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 512 512'
                    >
                      <path
                        fill='currentColor'
                        d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'
                      ></path>
                    </svg> */}
              </DivComponent4>
              <p className={`${onLoadOpacity4 ? 'opacity-100' : 'opacity-50'} text-primarydark dark:text-background`}>Model</p>
            </li>
          </ul>
        </div>
    //   )}
    // </>
  );
};

export default ProgressBar;
