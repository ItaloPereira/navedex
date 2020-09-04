import React from 'react'; 
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

import Input from './Input';

const ControlledInput = ({ label, placeholder, name, defaultValue, control, rules, error, type, mask }) => {
  return (
    <Controller 
      as={Input({ label, placeholder, error, type, mask, value: defaultValue })}
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
    />
  );
};

ControlledInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number]).isRequired,
  control: PropTypes.oneOfType([PropTypes.objectOf(PropTypes.any), PropTypes.func]).isRequired,
  rules: PropTypes.oneOfType([PropTypes.string, PropTypes.objectOf(PropTypes.any)]),
  error: PropTypes.objectOf(PropTypes.any),
  type: PropTypes.string,
  mask: PropTypes.string,
};

ControlledInput.defaultProps = {
  label: undefined,
  placeholder: undefined,
  rules: undefined,
  error: undefined,
  type: 'text',
  mask: undefined,
};

export default ControlledInput;
