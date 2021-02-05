import styled from 'styled-components';

export const Wrapper = styled.input`
  display: block;
  border: none;
  color: #fff;
  padding: 15px 0;
  margin: 20px 0;
  width: calc(100% - 30px);
  letter-spacing: 1px;
  font-family: 'Open Sans', sans-serif;
  transition: ease all 0.25s;
  box-shadow: none;
  background: lightseagreen;

  &:focus,
  &:hover {
    outline: none;
  }

  &::placeholder {
    color: #fafafa;
  }
`;
