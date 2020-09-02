import React, { useState } from 'react'; 
import PropTypes from 'prop-types';

import { getErrorMessage } from '@modules/errors';

import Icon from '@components/atoms/Icon';

import {
  Viewport,
  InputWrapper,
  StyledInput,
  IconWrapper,
  Label,
  Error,
} from './style';

const Input = ({ label, placeholder, error, type }) => {
  const [passVisible, setPassVisible] = useState(false);

  return (
    <Viewport>
      {label && (
        <Label>{label}</Label>
      )}

      <InputWrapper>
        <StyledInput error={error} placeholder={placeholder} type={passVisible ? 'text' : type} />

        {type === 'password' && (
          <IconWrapper onClick={() => setPassVisible(!passVisible)}>
            <Icon name={passVisible ? 'eye-block' : 'eye'} />
          </IconWrapper>
        )}
      </InputWrapper>

      <Error error={error}>{error && getErrorMessage(error)}</Error>
    </Viewport>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.objectOf(PropTypes.any),
  type: PropTypes.string,
};

Input.defaultProps = {
  label: undefined,
  placeholder: undefined,
  error: undefined,
  type: 'text'
};

export default Input;
