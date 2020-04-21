import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="px-4 flex flex-wrap justify-between bg-gray-200 border-b-2 border-gray-400 w-full items-center">
      <div className="flex items-center">
        <h1 className="font-mono text-4xl mr-4 tracking-wide">Kodifaj</h1>
      </div>
      <nav className="flex px-4 text-gray-700">
        <Link href="#">
          <a className="text-sm">zadania</a>
        </Link>
        <Link href="#">
          <a className="ml-4 text-sm sm:ml-12">ranking</a>
        </Link>
        <Link href="#">
          <a className="ml-4 text-sm sm:ml-12">pomoc</a>
        </Link>
        <span className="ml-4 text-sm sm:ml-12">|</span>
        <Link href="#">
          <a className="ml-4 text-sm sm:ml-12">rejestracja</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
