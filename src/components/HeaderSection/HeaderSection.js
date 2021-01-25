import RightArrow from "../../assets/right-arrow.svg";

import PropTypes from "prop-types";

import SectionContainer from "../SectionContainer/SectionContainer";
import { Title, SubTitle, NavInfo, Welcome } from "./styled";
import useWindowSize from "../../hooks/useWindowSize";

const MOBILE_TEXT = "Użyj kropek do nawigacji po witrynie.";
const DESKTOP_TEXT = "Użyj strzałek lub kropek do nawigacji po witrynie.";

/**
 * React functional component - renders header section on the screen
 * @returns {JSX.Element}
 */
const HeaderSection = ({ isVisible }) => {
  const { width } = useWindowSize();

  const content = width > 768 ? DESKTOP_TEXT : MOBILE_TEXT;

  return (
    <SectionContainer isVisible={isVisible}>
      <Title>Wojciech Rygorowicz</Title>

      <SubTitle as="h2" offsetX={0.3} offsetY={0.5}>
        deweloper z Prudnika
      </SubTitle>

      <Welcome as="h3" offsetX={0.3} offsetY={0.5}>
        Cześć! Nazywam się
      </Welcome>

      <NavInfo>
        {content}
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

export default HeaderSection;
