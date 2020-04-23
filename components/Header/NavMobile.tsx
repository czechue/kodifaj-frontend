import React from 'react';
import Link from 'next/link';

interface NavProps {
  isOpen: boolean;
}

const NavMobile: React.FC<NavProps> = ({ isOpen }) => {
  return (
    <nav
      className={`text-gray-700 fixed w-0 top-0 left-0 transition-all duration-500 bg-gray-300 h-full overflow-x-hidden ${
        isOpen ? 'w-full' : 'w-0'
      } `}
    >
      <ul className="flex flex-col h-full text-4xl capitalize font-medium justify-center items-center">
        <li className="hover:text-gray-900 hover:text-red-500 transition-colors duration-200">
          <Link href="#">
            <a className="">zadania</a>
          </Link>
        </li>
        <li className="hover:text-gray-900 hover:text-red-500 transition-colors duration-200 pt-8">
          <Link href="#">
            <a className="">ranking</a>
          </Link>
        </li>
        <li className="hover:text-gray-900 hover:text-red-500 transition-colors duration-200 pt-8">
          <Link href="#">
            <a className="">pomoc</a>
          </Link>
        </li>
        <li className="hover:text-gray-900 hover:text-red-500 transition-colors duration-200 pt-8">
          <Link href="#">
            <a className="">rejestracja</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
