import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export const Badge = ({ children, type }) => {
  return <Wrapper type={type}>{children}</Wrapper>;
};

Badge.defaultProps = {
  type: 'success',
};

Badge.propTypes = {
  type: PropTypes.oneOf(['success', 'danger']).isRequired,
  children: PropTypes.node.isRequired,
};
