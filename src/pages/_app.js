import React from 'react';

import { Provider } from 'react-redux';
import Head from 'next/head';
import App from 'next/app';

import { MantineProvider } from '@mantine/core';

import withReduxStore from 'utils/with-redux-store';
import { appWithTranslation } from 'utils/with-i18next';

import 'fontsource-metropolis';
import '@typefaces-pack/typeface-inter';

import 'styles/global.scss';

class Srr extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <React.StrictMode>
        <Head>
          <title>Mantine</title>
        </Head>
        <Provider store={reduxStore}>
          <MantineProvider withGlobalStyles withNormalizeCSS>
            <Component {...pageProps} />
          </MantineProvider>
        </Provider>
      </React.StrictMode>
    );
  }
}

export default appWithTranslation(withReduxStore(Srr));
