import React, { useState, useEffect } from 'react';
import NavMobile from './NavMobile';
import Hamburger from './Hamburger';
import NavDesktop from './NavDeskop';
import useWindowWidth from '../../customHooks/useWindowWidth';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const width = useWindowWidth();
  const toogle = (): void => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (width >= 768) {
      setIsOpen(false);
    }
  }, [width]);

  return (
    <header className="relative px-4 py-2 flex flex-wrap justify-between bg-gray-300 border-b border-gray-400 w-full items-center z-10">
      <h1>
        <img className=" w-24" src="./logo.png" alt="Kodifaj" />
      </h1>
      <Hamburger isOpen={isOpen} toogle={toogle} />
      <NavMobile isOpen={isOpen} />
      <NavDesktop />
    </header>
  );
};

export default Header;
