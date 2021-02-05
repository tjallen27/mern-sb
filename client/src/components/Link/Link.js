import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

export const Link = ({ children, onClick }) => {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
