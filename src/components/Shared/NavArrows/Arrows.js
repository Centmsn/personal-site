import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { useEffect, useCallback } from "react";

import { Wrapper, Icon } from "./styled";

/**
 * functional React component - renders navigation arrows
 * @function
 * @param {Object} props - React props
 * @returns {JSX.Element}
 */
const Arrows = ({ changeSection, sections }) => {
  /**
   * Calls changeSection callback
   * @param {string} direction - "prev" or "next"
   * @param {object} e - "Event object is required for keyEvents"
   * @return {undefined}
   */
  const handleSectionChange = useCallback(
    (direction, e) => {
      const active = sections.findIndex(el => el.isVisible);

      if (e && e.hasOwnProperty("keyCode")) {
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
    },
    [changeSection, sections]
  );

  useEffect(() => {
    const listener = e => {
      if (e.keyCode === 40) {
        handleSectionChange("next", e);
      } else if (e.keyCode === 38) {
        handleSectionChange("prev", e);
      }
    };

    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [handleSectionChange]);

  return (
    <Wrapper>
      <Icon
        onClick={() => handleSectionChange("prev")}
        onKeyDown={e => handleSectionChange("prev", e)}
        tabIndex="0"
      >
        <FontAwesomeIcon icon={faCaretUp} />
      </Icon>

      <Icon
        onClick={() => handleSectionChange("next")}
        onKeyDown={e => handleSectionChange("next", e)}
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

export default Arrows;
