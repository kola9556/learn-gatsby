import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from '../assets/styles/globalStyles';
import Navigation from '../components/Navigation/Navigation';

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <Navigation />
    {children}
  </>
);

MainLayout.propTypes = {
  children: PropTypes.element,
};

MainLayout.defaultProps = {
  children: null,
};

export default MainLayout;
