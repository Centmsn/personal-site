import styled from "styled-components";

export const Main = styled.section`
  grid-area: 4/1/8/-1;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  font-size: 5rem;
  text-align: center;

  color: white;

  span {
    margin-right: 1rem;
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colors.yellow};
  }

  span:last-child {
    flex-basis: 100%;
    font-size: 2rem;
    text-decoration: none;
  }
`;
