import mountains_card from "assets/mountains_card.JPG";
import prudnik_card from "assets/prudnik_card.jpg";
import others_card from "assets/others_card.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SubContainer from "components/generics/SubContainer/SubContainer";
import breakpoints from "styles/breakpoints";

/**
 * functional React component - renders gallery of images
 * @function
 * @param {Object} props - React props
 * @returns {JSX.Element}
 */
const HobbiesPhotography = () => {
  return (
    <SubContainer shouldPreventLoadingEffect={true}>
      <MountainsCard>
        <img src={mountains_card} alt="" />
        <StyledLink to="/photography/mountains">Góry</StyledLink>
      </MountainsCard>
      <PrudnikCard>
        <StyledLink to="/photography/prudnik">Prudnik</StyledLink>
        <img src={prudnik_card} alt="" />
      </PrudnikCard>
      <OthersCard>
        <img src={others_card} alt="" />
        <StyledLink to="/photography/others">Pozostałe</StyledLink>
      </OthersCard>

      <Info>
        <p>Pamiętaj proszę, że jakość zdjęć w galerii jest znacznie obniżona by przyspieszyć ich ładowanie.</p>
        <p>
          Jeżeli jesteś zainteresowany użyciem któregoś ze zdjęc (w pełnej rozdzielczości), lub chcesz zobaczyć więcej
          moich fotografii, to nie wahaj się ze mną skontaktować.
        </p>
      </Info>
    </SubContainer>
  );
};

const Card = styled.section`
  position: relative;
  display: flex;

  cursor: pointer;

  @media ${breakpoints.tablet} {
    flex-wrap: wrap;
  }

  img {
    height: 100%;
    width: auto;

    border: 2px solid white;
    border-radius: 50%;

    @media ${breakpoints.laptop} {
      height: 90%;
    }

    @media ${breakpoints.tablet} {
      margin: 0 auto;
      height: 65%;

      order: -1;
    }
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

  @media ${breakpoints.laptop} {
    font-size: 8rem;
  }

  @media ${breakpoints.tablet} {
    flex-basis: 100%;
    text-align: center;

    font-size: 7rem;
  }

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

  @media ${breakpoints.laptopL} {
    grid-area: 2/3/5/12;
  }

  @media ${breakpoints.laptop} {
    grid-area: 2/1/5/12;
  }

  @media ${breakpoints.tablet} {
    grid-area: 1/1/3/-1;
  }
`;

const PrudnikCard = styled(Card)`
  grid-area: 5/3/8/11;
  text-align: right;

  @media ${breakpoints.laptopL} {
    grid-area: 5/3/8/12;
  }

  @media ${breakpoints.laptop} {
    grid-area: 5/1/8/12;
  }

  @media ${breakpoints.tablet} {
    grid-area: 5/1/7/-1;
  }

  img {
    float: right;
  }
`;

const OthersCard = styled(Card)`
  grid-area: 8/3/11/11;

  @media ${breakpoints.laptopL} {
    grid-area: 8/3/11/12;
  }

  @media ${breakpoints.laptop} {
    grid-area: 8/1/11/12;
  }

  @media ${breakpoints.tablet} {
    grid-area: 9/1/11/-1;
  }
`;

const Info = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;

  color: white;

  @media ${breakpoints.laptop} {
    font-size: 0.75rem;
    text-align: right;
  }
`;

export default HobbiesPhotography;
