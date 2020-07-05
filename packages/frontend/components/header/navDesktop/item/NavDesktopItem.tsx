import React, { FC } from 'react';
import Link from 'next/link';

interface NavDesktopItemProps {
  children: string;
  to: string;
}

const NavDesktopItem: FC<NavDesktopItemProps> = ({ children, to }: NavDesktopItemProps) => {
  return (
    <li className="pl-4">
      <Link href={to}>
        <a className="hover:text-gray-900">{children}</a>
      </Link>
    </li>
  );
};

export default NavDesktopItem;
