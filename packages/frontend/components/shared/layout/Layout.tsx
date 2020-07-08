import React, { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
  title: string;
  errorCode?: number;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <div className="font-sans antialiased text-gray-900 bg-gray-200 min-h-screen">
      <Head>
        <title>{title}</title>
      </Head>
      <main className="leading-normal">
        <div className="mx-auto bg-gray-200 grid grid-cols-1 sm:pb-12">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
