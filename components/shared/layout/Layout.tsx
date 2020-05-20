import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from '../../header/Header';
import { useUserState } from '../../../pages/_context/User.context';

interface LayoutProps {
  children: ReactNode;
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  const user = useUserState();
  return (
    <div className="font-sans antialiased text-gray-900 bg-gray-200 min-h-screen">
      <Head>
        <title>{title}</title>
      </Head>
      <main className="leading-normal">
        <Header />
        userInfo: {JSON.stringify(user)}
        <div className="mx-auto bg-gray-200 grid grid-cols-1 row-gap-16 sm:pb-12">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
