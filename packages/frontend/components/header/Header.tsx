import React, { useState } from 'react';
import Hamburger from './hamburger/Hamburger';
import NavDesktop from './navDesktop/NavDesktop';
import NavMobile from './navMobile/NavMobile';
import Link from 'next/link';

// todo: Hero Section to Design and Develop

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toogle = (): void => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <header className="relative px-4 py-2 flex flex-wrap justify-between w-full items-center z-10">
        <h1>
          <Link href="/">Kodifaj</Link>
        </h1>
        <div className="flex items-center md:hidden">
          <Hamburger isOpen={isOpen} toogle={toogle} />
          <NavMobile isOpen={isOpen} />
        </div>
        <div className="hidden md:block">
          <NavDesktop />
        </div>
      </header>
      <div id="hero" className="w-full h-32 bg-gray-900"></div>
    </>
  );
};

export default Header;
