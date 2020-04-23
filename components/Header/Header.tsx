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
    <header className="relative px-4 flex flex-wrap justify-between bg-gray-300 border-b border-gray-400 w-full items-center z-10">
      <h1 className="font-mono text-4xl mr-4 tracking-wide header relative">Kodifaj</h1>
      <Hamburger isOpen={isOpen} toogle={toogle} />
      <NavMobile isOpen={isOpen} />
      <NavDesktop />
    </header>
  );
};

export default Header;
