import React from 'react';
import { AppProps } from 'next/app';
import '../styles/tailwind.css';
import '../styles/global.css';
import Header from '../components/Header';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;