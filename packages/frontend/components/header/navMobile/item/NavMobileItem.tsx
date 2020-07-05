import React, { FC } from 'react';
import Link from 'next/link';

interface NavMobileItemProps {
  children: string;
}

const NavMobileItem: FC<NavMobileItemProps> = ({ children }: NavMobileItemProps) => {
  return (
    <li className="">
      <Link href="/">
        <a className="">{children}</a>
      </Link>
    </li>
  );
};

export default NavMobileItem;
