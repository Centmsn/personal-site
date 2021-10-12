import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useEffect, useRef } from "react";

import SubContainer from "components/Shared/SubContainer/SubContainer";

const HobbiesSport = () => {
  return (
    <SubContainer>
      <Main>
        <span>Sekcja w budowie</span> <FontAwesomeIcon icon={faPencilRuler} />
        <span>Za utrudnienia przepraszam</span>
      </Main>
    </SubContainer>
  );
};

const Main = styled.section`
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

export default HobbiesSport;
