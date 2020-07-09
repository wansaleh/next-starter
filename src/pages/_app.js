import React from 'react';
import App from 'next/app';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import chakra from '../styles/chakra';
import '../styles/main.css';
import '../styles/font-sf2.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={chakra}>
        <CSSReset />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default MyApp;
