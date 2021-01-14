import PropTypes from "prop-types";
import styled from "styled-components";

import SectionContainer from "../SectionContainer/SectionContainer";

const HobbiesSection = ({ isVisible }) => {
  return (
    <SectionContainer isVisible={isVisible}>
      <Test />
    </SectionContainer>
  );
};

HobbiesSection.propTypes = {
  /**
   * switches component visibility
   */
  isVisible: PropTypes.bool.isRequired,
};

const Test = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: red;
`;

export default HobbiesSection;
