import React from 'react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

const NavDesktop: React.FC = () => {
  return (
    <nav className="hidden md:flex">
      <ul className="flex text-sm capitalize text-gray-700 font-medium justify-center items-center">
        <li className="hover:text-red-500 transition-colors duration-200">
          <Link href="#">
            <a className="">zadania</a>
          </Link>
        </li>
        <li className="pl-8 hover:text-red-500 transition-colors duration-200">
          <Link href="#">
            <a className="">ranking</a>
          </Link>
        </li>
        <li className="pl-8 hover:text-red-500 transition-colors duration-200">
          <Link href="#">
            <a className="">pomoc</a>
          </Link>
        </li>
        <span className="pl-8">|</span>
        <li className="pl-8 hover:text-red-500 transition-colors duration-200 flex items-center">
          <Link href="#">
            <a className="">rejestracja</a>
          </Link>
          <FaGithub className="ml-2 text-2xl" />
        </li>
      </ul>
    </nav>
  );
};

export default NavDesktop;
