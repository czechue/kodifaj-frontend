import React, { ReactElement } from 'react';
import '../styles/index.css';
import App, { AppContext } from 'next/app';
import UserProvider from '../components/context/UserContext';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render(): ReactElement {
    const { Component, pageProps } = this.props;

    return (
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    );
  }
}

export default MyApp;
