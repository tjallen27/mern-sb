import React from 'react';
import { Wrapper } from './styles';
import PropTypes from 'prop-types';

export const Form = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Form.prototypes = {
  children: PropTypes.node.isRequired,
};
