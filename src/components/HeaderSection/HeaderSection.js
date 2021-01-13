import styled from "styled-components";

import SectionContainer from "../SectionContainer/SectionContainer";
import Triangle from "../Elements/Triangle";

/**
 * Header component - renders aplication header
 */
const HeaderSection = () => {
  return (
    <SectionContainer>
      <Navigation>
        <NavList></NavList>
      </Navigation>
      <Title>Wojciech Rygorowicz</Title>
      <SubTitle>Prudnicki deweloper</SubTitle>
      <Triangle color={"rgb(255, 219, 74)"} position="bottom-right" />
    </SectionContainer>
  );
};

const Navigation = styled.nav`
  grid-area: 1/1/3/-1;

  display: flex;
`;

const NavList = styled.ul``;

const NavListItem = styled.li``;

const Title = styled.h1`
  grid-area: 3/1/6/-1;

  font-size: 7rem;
  text-align: center;
`;

const SubTitle = styled.h2`
  font-size: 5rem;
  writing-mode: vertical-lr;

  color: ${({ theme }) => theme.colors.shadow};
  text-shadow: 5px -10px 0 ${({ theme }) => theme.colors.title};
`;

export default HeaderSection;
