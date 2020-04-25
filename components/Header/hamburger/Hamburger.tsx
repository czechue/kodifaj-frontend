import React from 'react';
import clsx from 'clsx';

interface HamburgerProps {
  isOpen: boolean;
  toogle: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ isOpen, toogle }) => {
  const buttonStyles = clsx('md:hidden z-10', isOpen && 'fixed right-0 mr-4');
  const buttonStylesTop = clsx(
    'hamburger-bar',
    isOpen && 'transform rotate-45 -translate-x-00 translate-y-2',
  );
  const buttonStylesMiddle = clsx('hamburger-bar-middle', isOpen && 'transform opacity-0');
  const buttonStylesBottom = clsx(
    'hamburger-bar',
    isOpen && 'transform -rotate-45 translate-x-00 -translate-y-2',
  );

  return (
    <button className={buttonStyles} onClick={toogle}>
      <div className={buttonStylesTop}></div>
      <div className={buttonStylesMiddle}></div>
      <div className={buttonStylesBottom}></div>
    </button>
  );
};

export default Hamburger;
