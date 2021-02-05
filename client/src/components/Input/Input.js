import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export const Input = ({ type, placeholder, name, onChange, value }) => {
  return <Wrapper type={type} placeholder={placeholder} name={name} onChange={onChange} value={value} />;
};

Input.prototypes = {
  type: PropTypes.oneOf(['text', 'password', 'number', 'tel', 'checkbox']).isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
