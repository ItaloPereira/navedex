import React from 'react';
import PropTypes from 'prop-types';

import PageHead from '@components/molecules/PageHead';

const Page = ({ children, showNav, title, description }) => {
  return (
    <div>
      <PageHead
        title={title}
        description={description}
      />
      {showNav && (
        'NavBar'
      )}
      {children}
    </div>
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