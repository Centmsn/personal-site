import PropTypes from "prop-types";
import { PageSection, SectionNames } from "types/common";
import { Wrapper, NavDot } from "./parts";

interface NavigationProps {
  sections: PageSection[];
  changeSection: (sectionName: SectionNames) => void;
}

/**
 * functional React component - naviation dots
 * @function
 * @param {Object} props - React props
 * @returns {JSX.Element}
 */
const Navigation = ({ sections, changeSection }: NavigationProps) => {
  /**
   * Renders navigation dots on the screen
   * @param {{isVisible: boolean, name: string}} arr - array containg page sections
   * @param {function} callback - function that allows state change
   * @return {Object[]}
   */
  const renderNavDots = () => {
    return sections.map(section => (
      <NavDot
        onClick={() => changeSection(section.name)}
        key={section.name}
        isActive={section.isVisible}
        description={section.desc || ""}
      />
    ));
  };

  return <Wrapper>{renderNavDots()}</Wrapper>;
};

Navigation.propTypes = {
  /**
   * App sections - array of objects
   */
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      isVisible: PropTypes.bool.isRequired,
      description: PropTypes.string,
    })
  ).isRequired,

  /**
   * Function to update state
   */
  changeSection: PropTypes.func.isRequired,
};

export default Navigation;
