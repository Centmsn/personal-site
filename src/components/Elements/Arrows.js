import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import styled from "styled-components";

/**
 * Renders arrows in the bottom right corner
 */
const Arrows = ({ changeSection, sections }) => {
  const range = 15;

  const handleSectionChange = (direction) => {
    const active = sections.findIndex((el) => el.isVisible);

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
      <Icon move={-range} onClick={() => handleSectionChange("prev")}>
        <FontAwesomeIcon icon={faCaretUp} />
      </Icon>

      <Icon move={range}>
        <FontAwesomeIcon
          icon={faCaretDown}
          onClick={() => handleSectionChange("next")}
        />
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
`;

export default Arrows;
