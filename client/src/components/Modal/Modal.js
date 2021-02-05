import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import { Wrapper, Overlay, Close } from './styles';

export const Modal = ({ children, handleClose }) => {
  return (
    <>
      <OutsideClickHandler onOutsideClick={handleClose}>
        <Wrapper>
          <Close onClick={handleClose}>x</Close>
          {children}
        </Wrapper>
      </OutsideClickHandler>
      <Overlay />
    </>
  );
};
