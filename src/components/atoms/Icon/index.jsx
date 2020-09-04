import React from 'react'; 
import PropTypes from 'prop-types';

const Icon = ({ name }) => {
  return (
    <span className={`icon-${name}`} />
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
