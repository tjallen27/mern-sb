import React from 'react';

import Navigation from '../Navigation/Navigation';
import { Content } from './styles';

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <Content>{children}</Content>
    </div>
  );
};

export default Layout;
