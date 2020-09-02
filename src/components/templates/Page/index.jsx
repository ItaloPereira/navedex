import React from 'react';
import PropTypes from 'prop-types';

import PageHead from '@components/molecules/PageHead';
import NavBar from '@components/molecules/NavBar';

import { Viewport } from './style';

const Page = ({ children, showNav, title, description }) => {
  return (
    <Viewport>
      <PageHead
        title={title}
        description={description}
      />
      {showNav && (
        <NavBar />
      )}
      {children}
    </Viewport>
  );
}

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element).isRequired,
    PropTypes.element.isRequired,
  ]).isRequired,
  showNav: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};


Page.defaultProps = {
  showNav: true,
};


export default Page;