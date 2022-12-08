import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@mantine/core';

import Header from 'components/Header';
// import Banner from 'components/Banner';
import Footer from 'components/Footer';

function Layout({ children }) {
  return (
    <>
      <Header />
      <Container>
        {/* <Banner /> */}
        {children}
      </Container>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
