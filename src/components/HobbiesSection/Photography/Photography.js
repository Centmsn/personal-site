import mountains_card from "../../../assets/mountains_card.JPG";
import prudnik_card from "../../../assets/prudnik_card.jpg";
import others_card from "../../../assets/others_card.jpg";

import styled from "styled-components";
import { Link } from "react-router-dom";

import SubSectionContainer from "../SubSectionContainer";

const HobbiesPhotography = () => {
  return (
    <SubSectionContainer>
      <MountainsCard content="Góry">
        <img src={mountains_card} alt="" />
        <StyledLink to="/photography/mountains">Góry i skały</StyledLink>
      </MountainsCard>
      <PrudnikCard content="Okolice Prudnika">
        <StyledLink to="/photography/prudnik">Prudnik</StyledLink>
        <img src={prudnik_card} alt="" />
      </PrudnikCard>
      <OthersCard content="Pozostałe">
        <img src={others_card} alt="" />
        <StyledLink to="/photography/others">Pozostałe</StyledLink>
      </OthersCard>

      <Info>
        <p>
          Pamiętaj proszę, że jakość zdjęć w galerii jest znacznie obniżona by
          przyspieszyć ich ładowanie.
        </p>
        <p>
          Jeżeli jesteś zainteresowany użyciem któregoś ze zdjęc (w pełnej
          rozdzielczości), lub chcesz zobaczyć więcej moich fotografii, to nie
          wahaj się ze mną skontaktować.
        </p>
      </Info>
    </SubSectionContainer>
  );
};

const Card = styled.section`
  position: relative;
  display: flex;

  cursor: pointer;

  img {
    height: 100%;
    width: auto;

    border: 2px solid white;
    border-radius: 50%;
  }

  &:hover img {
    border: 2px solid ${({ theme }) => theme.colors.yellow};
  }
`;

const StyledLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 10rem;
  text-shadow: none;
  text-decoration: none;

  color: rgba(255, 255, 255, 0.25);

  flex-grow: 1;

  &:hover {
    color: rgba(255, 255, 255, 0.75);
  }

  &:focus {
    outline: none;
    color: rgba(255, 255, 255, 0.75);
  }
`;

const MountainsCard = styled(Card)`
  grid-area: 2/3/5/11;
`;

const PrudnikCard = styled(Card)`
  grid-area: 5/3/8/11;
  text-align: right;

  img {
    float: right;
  }
`;

const OthersCard = styled(Card)`
  grid-area: 8/3/11/11;
`;

const Info = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;

  color: white;
`;

export default HobbiesPhotography;
