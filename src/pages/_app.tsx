import React from 'react';

import { Provider } from 'next-auth/client';
import { AppProps } from 'next/app';

import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider session={pageProps.session}>
    {/* eslint-disable react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </Provider>
);

export default MyApp;
