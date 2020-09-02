import React from 'react'; 
import PropTypes from 'prop-types';

import Loader from '@components/atoms/Loader'

import { StyledButton } from './style';

const Button = ({ children, htmlType = 'button', type, loading, disabled }) => {
  return (
    <StyledButton type={htmlType} colorSchema={type} loading={loading} disabled={disabled}>
      <Loader size="small" colorSchema={type} />
      <span>{children}</span>
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  htmlType: PropTypes.oneOf(['button', 'submit', 'reset']),
  type: PropTypes.oneOf(['primary', 'secondary']),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  htmlType: 'button',
  type: 'primary',
  loading: false,
  disabled: false,
};

export default Button;
