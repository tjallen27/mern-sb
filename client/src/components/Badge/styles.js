import styled from 'styled-components';

const types = {
  success: {
    background: '#00adb5',
  },
  danger: {
    background: '#FF5666',
  },
};

export const Wrapper = styled.div`
  color: #fff;
  background: ${({ type }) => types[type].background};
  width: max-content;
  height: 1.2rem;
  display: flex;
  align-items: baseline;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
`;
