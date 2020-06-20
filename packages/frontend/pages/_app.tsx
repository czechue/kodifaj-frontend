import React, { ReactElement } from 'react';
import '../styles/index.css';
import App, { AppContext } from 'next/app';
import { IncomingMessage } from 'http';
import UserProvider from '../components/context/UserContext';
import { User } from '@kodifaj/common';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps: { user: User } = {
      user: {
        _id: '',
        githubId: '',
        login: '',
        photo: '',
      },
    };

    if (Component.getInitialProps) {
      const props = await Component.getInitialProps(ctx);
      console.log('props await', props);
      pageProps = Object.assign(pageProps, props);
    }

    if (ctx.req) {
      const request: IncomingMessageExtended = ctx.req;

      if (request && request.session && request.session.passport) {
        pageProps.user = request.session._ctx.user;
      }
    }
    console.log('pageprops', pageProps);
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

interface IncomingMessageExtended extends IncomingMessage {
  session?: {
    passport: {
      user: string;
    };
    _ctx: {
      user: User;
    };
  };
}
