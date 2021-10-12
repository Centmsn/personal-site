import PropTypes from "prop-types";

import { Wrapper, NavDot } from "./parts";

/**
 * functional React component - naviation dots
 * @function
 * @param {Object} props - React props
 * @returns {JSX.Element}
 */
const Navigation = ({ sections, changeSection }) => {
  /**
   * Renders navigation dots on the screen
   * @param {{isVisible: boolean, name: string}} arr - array containg page sections
   * @param {function} callback - function that allows state change
   * @return {Object[]}
   */
  const renderNavDots = (arr, callback) => {
    if (!Array.isArray(arr)) {
      console.error(
        `Incorrect type of argument. Expected Array instead got ${typeof arr}. Function execution has stopped.`
      );
      return;
    }

    if (typeof callback !== "function") {
      console.error(
        `Incorrect type of argument. Expected Function instead got ${typeof arr}. Function execution has stopped.`
      );
      return;
    }

    if (arr.length < 1) {
      console.error(
        `Array must contain atleast one element. Function execution has stopped.`
      );
      return;
    }

    return arr.map(section => (
      <NavDot
        onClick={() => callback(section.name)}
        key={section.name}
        active={section.isVisible}
        description={section.desc || null}
      ></NavDot>
    ));
  };

  return <Wrapper>{renderNavDots(sections, changeSection)}</Wrapper>;
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
