import RightArrow from "../../assets/right-arrow.svg";

import PropTypes from "prop-types";
import styled from "styled-components";

import SectionContainer from "../SectionContainer/SectionContainer";

/**
 * Header component - renders aplication header
 */
const HeaderSection = ({ isVisible }) => {
  return (
    <SectionContainer isVisible={isVisible}>
      <Title>Wojciech Rygorowicz</Title>
      <SubTitle>deweloper z Prudnika</SubTitle>
      <Welcome>Cześć! Nazywam się</Welcome>
      <NavInfo>
        Użyj strzałek lub kropek do nawigacji po witrynie
        <img src={RightArrow} alt="" />
      </NavInfo>
    </SectionContainer>
  );
};

HeaderSection.propTypes = {
  /**
   * switches component visibility
   */
  isVisible: PropTypes.bool.isRequired,
};

const Title = styled.h1`
  grid-area: 1/3/3/11;

  font-size: 7rem;
  text-align: center;
`;

const SubTitle = styled.h2`
  grid-area: 5/1/13/5;

  font-size: 6rem;
  writing-mode: vertical-rl;
  text-decoration: underline;

  color: ${({ theme }) => theme.colors.gray};
  text-shadow: 5px -10px 0 ${({ theme }) => theme.colors.yellow};
`;

const Welcome = styled(SubTitle)`
  grid-area: 1/1/3/3;

  font-size: 2rem;
  writing-mode: horizontal-tb;

  padding: 15px;
`;

const NavInfo = styled.section`
  grid-area: 6/6/10/10;

  font-size: 2rem;
`;

export default HeaderSection;
