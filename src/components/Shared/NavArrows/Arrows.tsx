import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useCallback } from "react";
import { PageSection, SectionNames } from "types/common";
import { Wrapper, Icon } from "./parts";

interface ArrowProps {
  changeSection: (sectionName: SectionNames) => void;
  sections: PageSection[];
}

/**
 * functional React component - renders navigation arrows
 * @function
 * @param {Object} props - React props
 * @returns {JSX.Element}
 */
const Arrows = ({ changeSection, sections }: ArrowProps) => {
  /**
   * Calls changeSection callback
   * @param {string} direction - "prev" or "next"
   * @param {object} e - "Event object is required for keyEvents"
   * @return {undefined}
   */
  const handleSectionChange = useCallback(
    (direction: string, e?: KeyboardEvent) => {
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
    const listener = (e: KeyboardEvent) => {
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
        // onKeyDown={e => handleSectionChange("prev", e)}
        tabIndex={0}
      >
        <FontAwesomeIcon icon={faCaretUp} />
      </Icon>

      <Icon
        onClick={() => handleSectionChange("next")}
        // onKeyDown={e => handleSectionChange("next", e)}
        tabIndex={0}
      >
        <FontAwesomeIcon icon={faCaretDown} />
      </Icon>
    </Wrapper>
  );
};

export default Arrows;
