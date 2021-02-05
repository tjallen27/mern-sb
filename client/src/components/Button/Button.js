import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

export const Button = ({ children, onClick, type, shadow, size }) => {
  return (
    <Wrapper type={type} onClick={onClick} shadow={shadow} size={size}>
      {children}
    </Wrapper>
  );
};

Button.defaultProps = {
  type: 'primary',
  shadow: false,
  size: 'standard',
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  shadow: PropTypes.bool,
  size: PropTypes.oneOf(['fluid', 'standard']),
};
