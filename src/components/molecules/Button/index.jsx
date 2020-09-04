import React from 'react'; 
import PropTypes from 'prop-types';

import Loader from '@components/atoms/Loader'

import { StyledButton } from './style';

const Button = ({ children, htmlType = 'button', type, loading, disabled, onClick }) => {
  return (
    <StyledButton type={htmlType} colorSchema={type} loading={loading ? 1 : 0} disabled={disabled} onClick={onClick}>
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
  onClick: PropTypes.func,
};

Button.defaultProps = {
  htmlType: 'button',
  type: 'primary',
  loading: false,
  disabled: false,
  onClick: undefined,
};

export default Button;
