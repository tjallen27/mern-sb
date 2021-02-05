import styled from 'styled-components';

export const NavigationWrapper = styled.div`
  width: calc(100% - 40px);
  margin: 0 auto;
`;

export const List = styled.ul`
  margin: 0;
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  border-bottom: solid 2px #333;
`;

export const ListItem = styled.li`
  list-style: none;
  padding: 0;
  margin-left: 20px;
  font-weight: 300;
  font-size: 1.2rem;

  a {
    color: #222;
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
    outline: none;
    font-size: 1rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    color: #222;
    font-size: 1.2rem;
    padding: 0;

    &:hover {
      cursor: pointer;
    }
  }
`;
