import styled from 'styled-components';

const types = {
  primary: {
    color: '#fff',
    background: 'darkcyan',
  },
  secondary: {
    color: '#222831',
    background: '#eeeeee',
  },
};

export const Wrapper = styled.button`
  color: ${({ type }) => types[type].color};
  background: ${({ type }) => types[type].background};
  width: ${({ size }) => (size === 'fluid' ? '100%' : 'max-content')};
  padding: 15px;
  border: none;
  outline: none;
  transition: all ease 0.25s;
  box-shadow: ${({ shadow }) => shadow && '0 5px 10px rgba(0,0,0,0.5)'};
  font-family: 'Open Sans', sans-serif;

  &:hover {
    cursor: pointer;
  }

  &:active {
    box-shadow: ${({ shadow }) => shadow && 'none'};
  }
`;
