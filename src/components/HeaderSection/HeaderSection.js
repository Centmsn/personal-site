import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

import SectionContainer from "../SectionContainer/SectionContainer";
import Editor from "../Editor/Editor";
import { Title, SubTitle, NavInfo, Welcome } from "./styled";

/**
 * React functional component - renders header section on the screen
 * @returns {JSX.Element}
 */
const HeaderSection = ({ isVisible }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
  }, []);

  return (
    <SectionContainer isVisible={isVisible} paddingSize="0px">
      {/* <Title ref={titleRef}>Wojciech Rygorowicz</Title>

      <SubTitle as="h2" offsetX={0} offsetY={0}>
        deweloper z Prudnika
      </SubTitle>

      <Welcome as="h3" offsetX={0} offsetY={0}>
        Cześć! Jestem
      </Welcome> */}

      <NavInfo>
        <Editor />
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
