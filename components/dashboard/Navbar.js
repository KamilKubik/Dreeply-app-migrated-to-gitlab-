import React, { useRef, useState, createContext, useEffect } from 'react';
import Link from 'next/link';
import gsap, { Power1, Power4 } from 'gsap';

import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import { useAuth } from '../../lib/newAuth';

// Mobile friendly
import { useWindowSize } from '../../utils/useWindowSize';
import MobileNavbar from './MobileNavbar';
import DesktopNavbar from './DesktopNavbar';
import { isMobile } from 'react-device-detect';

const Navbar = ({ children }) => {
  // Mobile friendly
  // const size = useWindowSize();
  const size = { width: window.innerWidth };
  console.log(size);

  return <>{isMobile ? <MobileNavbar children={children} /> : <DesktopNavbar children={children} />}</>;
};

export default Navbar;
