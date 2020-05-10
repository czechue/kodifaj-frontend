import React, { ReactNode } from 'react';
import Head from 'next/head';
import Error from 'next/error';

interface LayoutProps {
  children: ReactNode;
  title: string;
  errorCode?: number;
}

const Layout: React.FC<LayoutProps> = ({ children, title, errorCode }) => {
  return (
    <div className="font-sans antialiased text-gray-900 bg-gray-200 min-h-screen">
      <Head>
        <title>{title}</title>
      </Head>
      <main className="leading-normal">
        <div className="mx-auto bg-gray-200 grid grid-cols-1  sm:pb-12">{children}</div>
        {errorCode && (
          <div className=" -my-24">
            <Error statusCode={errorCode} />
          </div>
        )}
      </main>
    </div>
  );
};

export default Layout;
