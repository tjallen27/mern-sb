import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 380px;
  background: lightseagreen;
  z-index: 1;
  padding: 50px;

  > h2 {
    color: #fff;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.8);
`;

export const Close = styled.div`
  position: absolute;
  right: 50px;
  color: #fff;
  font-size: 1.25rem;

  &:hover {
    cursor: pointer;
  }
`;
