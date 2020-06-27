import React, { ReactElement } from 'react';
import '../styles/index.css';
import App, { AppContext } from 'next/app';
import UserProvider from '../components/context/UserContext';
import { User } from '@kodifaj/common';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps: { user?: User } = {};

    if (Component.getInitialProps) {
      const props = await Component.getInitialProps(ctx);
      const res = await fetch(`${process.env.API_URL}/current_user`, {
        credentials: 'include',
        headers: { cookie: String(ctx?.req?.headers.cookie) },
      });
      const currentUser = await res.json();

      pageProps.user = currentUser;
      pageProps = Object.assign(pageProps, props);
    }

    return { pageProps };
  }

  render(): ReactElement {
    const { Component, pageProps } = this.props;
    const user = pageProps.user ? pageProps.user : null;

    return (
      <UserProvider user={user}>
        <Component {...pageProps} />
      </UserProvider>
    );
  }
}

export default MyApp;
