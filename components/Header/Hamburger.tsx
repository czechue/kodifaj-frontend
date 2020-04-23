import React from 'react';

interface HamburgerProps {
  isOpen: boolean;
  toogle: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ isOpen, toogle }) => {
  return (
    <button className={`md:hidden z-10 ${isOpen && 'fixed right-0 mr-4'}`} onClick={toogle}>
      <div
        className={`hamburger-bar ${isOpen && 'transform rotate-45 -translate-x-00 translate-y-2'}`}
      ></div>
      <div className={`hamburger-bar-middle  ${isOpen && 'transform opacity-0'}`}></div>
      <div
        className={`hamburger-bar ${
          isOpen && 'transform -rotate-45 translate-x-00 -translate-y-2'
        }`}
      ></div>
    </button>
  );
};

export default Hamburger;
