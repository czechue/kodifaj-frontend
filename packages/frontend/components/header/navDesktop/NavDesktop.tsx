import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { useUser } from '../../context/UserContext';
import NavDesktopItem from './item/NavDesktopItem';

const NavDesktop: React.FC = () => {
  const user = useUser();
  return (
    <nav className="flex">
      <ul className="flex text-xs text-gray-500 font-semibold uppercase tracking-wider justify-center items-center">
        <NavDesktopItem to="/">zadania</NavDesktopItem>
        <NavDesktopItem to="/">ranking</NavDesktopItem>
        <NavDesktopItem to="/">pomoc</NavDesktopItem>
        <span className="pl-8">|</span>

        {user ? (
          <NavDesktopItem to={`/users/${user._id}`}>{user.login}</NavDesktopItem>
        ) : (
          <>
            <NavDesktopItem to="/login">logowanie</NavDesktopItem>
            <FaGithub className="ml-2 text-2xl" />
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavDesktop;
