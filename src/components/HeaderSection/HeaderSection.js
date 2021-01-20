import RightArrow from "../../assets/right-arrow.svg";

import PropTypes from "prop-types";
import styled from "styled-components";

import SectionContainer from "../SectionContainer/SectionContainer";
import { device } from "../../GlobalStyles";

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

  @media ${device.tablet} {
    grid-area: 2/1/5/-2;
  }

  @media ${device.mobileL} {
    grid-area: 2/1/5/-1;
    line-height: 6rem;
  }
`;

const SubTitle = styled.h2`
  grid-area: 5/1/13/5;

  font-size: 6rem;
  writing-mode: vertical-rl;
  text-decoration: underline;

  color: ${({ theme }) => theme.colors.gray};
  text-shadow: 0.3rem -0.6rem 0 ${({ theme }) => theme.colors.yellow};

  @media ${device.mobileL} {
    grid-area: 4/1/13/4;
    font-size: 5rem;
  }
`;

const Welcome = styled(SubTitle)`
  grid-area: 1/1/3/3;

  font-size: 2rem;
  writing-mode: horizontal-tb;

  padding: 15px;

  @media ${device.mobileL} {
    grid-area: 1/1/1/-1;
    font-size: 3rem;
  }
`;

const NavInfo = styled.section`
  grid-area: 6/6/10/10;

  font-size: 2.25rem;

  @media ${device.tablet} {
    grid-area: 6/4/10/12;
    text-align: center;
  }

  img {
    margin: 0 auto;
    display: block;
    height: 70%;

    @media ${device.laptop} {
      height: 85%;
    }

    @media ${device.mobilesL} {
      height: 70%;
    }
  }
`;

export default HeaderSection;
