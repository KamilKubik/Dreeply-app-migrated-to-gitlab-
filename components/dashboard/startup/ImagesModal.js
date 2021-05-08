import React, { useState, useEffect } from 'react';
import { db } from '../../../lib/firebase';
import Router from 'next/router';
import Image from 'next/image';
import NavbarTemplate from '../NavbarTemplate';

const images = [
  'achievement',
  'ai',
  'application',
  'architect',
  'barber',
  'barista',
  'blockchain',
  'boost',
  'building',
  'businessman',
  'construction',
  'bartender',
  'cybersecurity',
  'data',
  'decisions',
  'delivery',
  'ecommerce',
  'economy',
  'epayments',
  'foodtruck',
  'freelancer',
  'hardware',
  'hr',
  'inspired',
  'investment',
  'lab',
  'leader',
  'logistics',
  'mechanic',
  'meeting',
  'moon',
  'onlinebusiness',
  'pharmacist',
  'programmer',
  'renewable',
  'robot',
  'saleswoman',
  'seo',
  'startup',
  'success',
  'target',
  'team',
  'tech',
  'trainer',
  'virtual',
  'teamwork',
  'webdesign',
  'worker',
  'workflow',
  'workshop',
  'brainstorm',
  'homeoffice',
  'hardsell',
  'collaboration',
];

const ImagesModal = ({ setImageName, setImagesModal, onFileChange, currentUser, setStartupPageContainerClass }) => {
  const [uploadName, setUploadName] = useState(false);
  const [routeClass, setRouteClass] = useState(true);

  const onImageBrowse = (image) => {
    setImageName(image);
    setImagesModal(false);
    setRouteClass(false);
  };

  useEffect(() => {
    setImageName('blank');
  }, []);

  return (
    <NavbarTemplate>
      <div className="w-full absolute bg-background dark:bg-secondary z-20">
        <p className="text-primarydark text-2xl normal:text-3xl mt-12 dark:text-background text-center">
          Choose the illustration that best represents your idea
        </p>
        <p className="text-gray text-base normal:text-lg dark:text-background text-center">
          If you are undecided, feel free to add your own illustration
          {/* <img
            src='/emojis/palm.svg'
            height={25}
            width={25}
            className='inline-block relative bottom-1'
          /> */}
        </p>
        <div className="w-full grid grid-cols-5fr max-w-mdStarter lg:max-w-lgContainer normal:max-w-xlContainer p-2 bg-background m-auto mb-16 mt-6 rounded-2xl">
          <div
            onClick={() => setRouteClass(false)}
            className="flex justify-center items-center flex-col m-4 shadow-md rounded-2xl hover:shadow-xl transform hover:scale-105 hover:-translate-y-2 hover:-translate-x-2 transition duration-500 ease-in-out cursor-pointer"
          >
            <label
              className="cursor-pointer absolute h-full w-full"
              htmlFor={uploadName ? 'upload-button' : 'blank'}
              onClick={() => {
                setUploadName(true);
              }}
            />
            <img style={{ zIndex: -1 }} src="/plus-icon.svg" height={35} width={35} />
            <input type="file" id="upload-button" style={{ display: 'none', zIndex: 10 }} onChange={onFileChange} />
            <p className="text-primarydark text-xs text-center mt-3">Add image</p>
          </div>
          {images.map((image) => (
            <div
              key={image}
              onClick={() => onImageBrowse(image)}
              className="flex justify-center items-center m-4 shadow-md rounded-2xl hover:shadow-xl transform hover:scale-105 hover:-translate-y-2 hover:-translate-x-2 transition duration-500 ease-in-out cursor-pointer"
            >
              <img src={`/modal/${image}.svg`} height={150} width={150} />
            </div>
          ))}
        </div>
      </div>
    </NavbarTemplate>
  );
};

export default ImagesModal;
