import React from 'react';
import { css } from '@emotion/react';
import BounceLoader from 'react-spinners/BounceLoader';

const BounceLoaderComponent = () => {
  const bounceStyles = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;
  return (
    <div className="relative h-screen w-full">
      <BounceLoader color={'#6C63FF'} css={bounceStyles} />
    </div>
  );
};

export default BounceLoaderComponent;
