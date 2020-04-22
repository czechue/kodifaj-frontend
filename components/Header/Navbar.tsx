import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="flex text-gray-700">
      <ul className="flex capitalize font-medium">
        <li className="hover:text-gray-900 hover:text-red-500 transition-colors duration-200">
          <Link href="#">
            <a className="text-sm">zadania</a>
          </Link>
        </li>
        <li className="hover:text-gray-900 hover:text-red-500 transition-colors duration-200">
          <Link href="#">
            <a className="ml-4 text-sm sm:ml-12">ranking</a>
          </Link>
        </li>
        <li className="hover:text-gray-900 hover:text-red-500 transition-colors duration-200">
          <Link href="#">
            <a className="ml-4 text-sm sm:ml-12">pomoc</a>
          </Link>
        </li>
        <span className="ml-4 pb-1 text-lg sm:ml-12">|</span>
        <li className="hover:text-gray-900 hover:text-red-500 transition-colors duration-200">
          <Link href="#">
            <a className="ml-4 text-sm sm:ml-12">rejestracja</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
