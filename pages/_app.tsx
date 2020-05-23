import React from 'react';
import { AppProps } from 'next/app';
import '../styles/index.css';
import { RawUserAuth0 } from '../lib/models/user/user';

interface UserState {
  user?: RawUserAuth0;
  loadinng: boolean;
}
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};
export default MyApp;
