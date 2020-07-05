import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { FaGithub } from 'react-icons/fa';
import { useUser } from '../../context/UserContext';
import NavMobileItem from './item/NavMobileItem';

interface NavMobileProps {
  isOpen: boolean;
}

const NavMobile: React.FC<NavMobileProps> = ({ isOpen }) => {
  const user = useUser();
  const navStyles = clsx(
    'text-gray-700 fixed w-0 top-0 left-0 transition-all duration-500 bg-gray-300 h-full overflow-x-hidden',
    isOpen && 'w-full',
  );

  return (
    <nav className={navStyles}>
      <ul className="flex flex-col h-full text-2xl sm:text-4xl capitalize font-medium justify-center items-center">
        <NavMobileItem>zadania</NavMobileItem>
        <NavMobileItem>ranking</NavMobileItem>
        <NavMobileItem>pomoc</NavMobileItem>

        <span className="pt-6 border-gray-600 border-b w-6/12" />
        <li className="hover:text-gray-900 hover:text-red-500 transition-colors duration-200 pt-8 flex items-center">
          {user ? (
            <span>{user.login}</span>
          ) : (
            <>
              <Link href="/login">
                <a className="">logowanie</a>
              </Link>
              <FaGithub className="pl-2 text-4xl sm:text-6xl" />
            </>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
