import React from 'react'; 
import PropTypes from 'prop-types';

import { StyledButton } from './style';

const Button = ({ children, htmlType = 'button', type }) => {
  return (
    <StyledButton type={htmlType} colorSchema={type}>
      <span>{children}</span>
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  htmlType: PropTypes.oneOf(['button', 'submit', 'reset']),
  type: PropTypes.oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
  htmlType: 'button',
  type: 'primary'
};

export default Button;
