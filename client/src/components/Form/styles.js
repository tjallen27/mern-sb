import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  width: 100%;
  max-width: 280px;
  margin: 0 auto;
  padding: 50px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: lightseagreen;

  h2 {
    color: white;
  }
`;
