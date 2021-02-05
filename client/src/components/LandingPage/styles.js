import styled from 'styled-components';

export const Wrapper = styled.div`
  background: url('./assets/homepage-image.jpg');
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: cover;
`;

export const Content = styled.div`
  position: absolute;
  top: 25%;
  left: 25%;
  transform: translate(-25%, -25%);
  color: #fff;
  text-align: left;
  width: 50%;

  h1 {
    font-size: 3.5rem;
    text-decoration: underline;
  }

  h1,
  h2 {
    color: #fff;
  }
`;
