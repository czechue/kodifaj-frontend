import React from 'react';

interface HamburgerProps {
  isOpen: boolean;
  toogle: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ isOpen, toogle }) => {
  return (
    <button className={`md:hidden z-10 ${isOpen && 'fixed right-0 mr-4'}`} onClick={toogle}>
      <div
        className={`w-6 h-2 border-t-4 border-gray-800 transition-transform duration-500 ${
          isOpen && 'transform rotate-45 -translate-x-00 translate-y-2'
        }`}
      ></div>
      <div
        className={`w-6 h-2 border-t-4 border-gray-800 transition-all duration-500  ${
          isOpen && 'transform opacity-0'
        }`}
      ></div>
      <div
        className={`w-6 h-2 border-t-4 border-gray-800 transition-transform duration-500 ${
          isOpen && 'transform -rotate-45 translate-x-00 -translate-y-2'
        }`}
      ></div>
    </button>
  );
};

export default Hamburger;
