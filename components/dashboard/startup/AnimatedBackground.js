import React from 'react';

const AnimatedBackground = ({ children }) => (
  <div className='area'>
      {children}
    <ul className='circles'>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
);

export default AnimatedBackground;
