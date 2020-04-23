import React from 'react';

interface HamburgerProps {
  isOpen: boolean;
  toogle: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ toogle }) => {
  return (
    <button className="md:hidden z-10" onClick={toogle}>
      <div className="w-6 h-2 border-t-4 border-gray-800"></div>
      <div className="w-6 h-2 border-t-4 border-gray-800"></div>
      <div className="w-6 h-2 border-t-4 border-gray-800"></div>
    </button>
  );
};

export default Hamburger;
