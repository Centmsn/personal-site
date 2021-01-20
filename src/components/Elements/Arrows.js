import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import styled from "styled-components";

import { device } from "../../GlobalStyles";

/**
 * Renders arrows in the bottom right corner
 */
const Arrows = ({ changeSection, sections }) => {
  /**
   * Calls changeSection callback
   * @param {string} direction - "prev" or "next"
   * @param {object} e - "Event object is required for keyEvents"
   * @return {undefined}
   */
  const handleSectionChange = (direction, e) => {
    const active = sections.findIndex((el) => el.isVisible);

    if (e && typeof e.hasOwnProperty("keyCode")) {
      if (e.keyCode !== 32 && e.keyCode !== 13) {
        return;
      }
    }

    if (
      (active === 0 && direction === "prev") ||
      (active === sections.length - 1 && direction === "next")
    )
      return;

    const currentSection = sections[active + (direction === "prev" ? -1 : 1)];

    changeSection(currentSection.name);
  };

  return (
    <Wrapper>
      <Icon
        onClick={() => handleSectionChange("prev")}
        onKeyDown={(e) => handleSectionChange("prev", e)}
        tabIndex="0"
      >
        <FontAwesomeIcon icon={faCaretUp} />
      </Icon>

      <Icon
        onClick={() => handleSectionChange("next")}
        onKeyDown={(e) => handleSectionChange("next", e)}
        tabIndex="0"
      >
        <FontAwesomeIcon icon={faCaretDown} />
      </Icon>
    </Wrapper>
  );
};

Arrows.propTypes = {
  /**
   * Function to update state
   */
  changeSection: PropTypes.func.isRequired,

  /**
   * App sections - array of objects
   */
  sections: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, isVisible: PropTypes.bool })
  ).isRequired,
};

const Wrapper = styled.div`
  z-index: 999;
  position: absolute;
  bottom: 0;
  right: 10px;
  width: 6rem;

  display: flex;
  flex-wrap: wrap;
  font-size: 6rem;

  color: ${({ theme }) => theme.colors.gray};
`;

const Icon = styled.div`
  cursor: pointer;
  transition: 300ms;

  &:hover {
    color: white;

    transform: scale(1.2);
  }

  &:focus {
    outline: none;
    color: ${({ theme }) => theme.colors.lightGray};
  }
`;

export default Arrows;
