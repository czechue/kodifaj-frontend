import React from 'react';
import { AppProps } from 'next/app';
import '../styles/index.css';
import { RawUserAuth0 } from '../lib/models/user/user';
import { useFetchUser } from '../lib/auth/user';
import { UserProvider } from '../components/context/User.context';
// import Router from 'next/router';
// import { AccessTokenRequestOptions } from 'use-auth0-hooks/dist/context/auth0-context';

// /**
//  * Where to send the user after they have signed in.
//  */
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// const onRedirectCallback = (appState: any): void => {
//   if (appState && appState.returnTo) {
//     Router.push({
//       pathname: appState.returnTo.pathname,
//       query: appState.returnTo.query,
//     });
//   }
// };
//
// /**
//  * When it hasn't been possible to retrieve a new access token.
//  * @param {Error} err
//  * @param {AccessTokenRequestOptions} options
//  */
// const onAccessTokenError = (err: Error, options: AccessTokenRequestOptions): void => {
//   console.error('Failed to retrieve access token: ', err);
// };
//
// /**
//  * When signing in fails for some reason, we want to show it here.
//  * @param {Error} err
//  */
// const onLoginError = (err: Error): void => {
//   Router.push({
//     pathname: '/oops',
//     query: {
//       message: err.message,
//     },
//   });
// };
//
// /**
//  * When redirecting to the login page you'll end up in this state where the login page is still loading.
//  * You can render a message to show that the user is being redirected.
//  */
// const onRedirecting = (): ReactElement => {
//   return (
//     <div>
//       <h1>Signing you in</h1>
//       <p>
//         In order to access this page you will need to sign in. Please wait while we redirect you to
//         the login page...
//       </p>
//     </div>
//   );
// };

interface UserState {
  user?: RawUserAuth0;
  loadinng: boolean;
}
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
};
export default MyApp;
