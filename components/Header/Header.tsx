import React from 'react';
import Navbar from './Navbar';

const Header: React.FC = () => {
  return (
    <header className="px-4 flex flex-wrap justify-between bg-gray-300 border-b border-gray-400 w-full items-center">
      <h1 className="font-mono text-4xl mr-4 tracking-wide header relative">Kodifaj</h1>
      <Navbar />
    </header>
  );
};

export default Header;
