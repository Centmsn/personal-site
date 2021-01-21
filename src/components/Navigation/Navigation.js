import styled from "styled-components";
import PropTypes from "prop-types";

import { device } from "../../GlobalStyles";

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

    return arr.map((section) => (
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

const Wrapper = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;

  transform: translateX(-50%);

  display: flex;
`;

const NavDot = styled.div`
  width: 15px;
  height: 15px;
  margin: 0 15px;

  border-radius: 50%;
  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.gray}, 0 0 0 4px white,
    0 0 0 6px
      ${({ theme, active }) => (active ? theme.colors.gray : "transparent")};
  background-color: ${({ theme, active }) =>
    active ? theme.colors.yellow : "none"};

  cursor: pointer;
  transition: 300ms;

  &::before {
    content: "${({ description }) => description}";
    position: absolute;

    top: -50px;
    left: 50%;
    transform: translateX(-50%);

    font-size: 1.75rem;
    letter-spacing: 3px;

    color: white;
    background-color: ${({ theme }) => theme.colors.gray};

    padding: 0 5px;

    opacity: 0;
    visibility: hidden;
  }

  &:hover&::before {
    opacity: 1;
    visibility: visible;
  }

  &:hover {
    background-color: ${({ theme, active }) =>
      active ? theme.colors.yellow : theme.colors.gray};
  }
`;

export default Navigation;
