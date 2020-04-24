import React, { useState } from 'react';
import NavMobile from './NavMobile';
import Hamburger from './Hamburger';
import NavDesktop from './NavDeskop';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toogle = (): void => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header className="relative px-4 py-2 flex flex-wrap justify-between bg-gray-300 border-b border-gray-400 w-full items-center z-10">
      <h1>
        <img className="w-24" src="./logo.png" alt="Kodifaj" />
      </h1>
      <div className="flex items-center md:hidden">
        <Hamburger isOpen={isOpen} toogle={toogle} />
        <NavMobile isOpen={isOpen} />
      </div>
      <div className="hidden md:block">
        <NavDesktop />
      </div>
    </header>
  );
};

export default Header;
