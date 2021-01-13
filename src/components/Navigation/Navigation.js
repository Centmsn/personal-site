import styled from "styled-components";
import PropTypes from "prop-types";

/**
 * Navigation dots - renders navigation dots on the bottom of the screen
 */
const Navigation = ({ sections, changeSection }) => {
  const renderNavDots = () => {
    return sections.map((section) => (
      <NavDot
        onClick={() => changeSection(section.name)}
        key={section.name}
        active={section.isVisible}
        description={section.desc || null}
      ></NavDot>
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
  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.shadow};
  background-color: ${({ theme, active }) =>
    active ? theme.colors.title : "none"};

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
    background-color: ${({ theme }) => theme.colors.shadow};

    padding: 0 5px;

    opacity: 0;
    visibility: hidden;
  }

  &:hover&::before {
    opacity: 1;
    visibility: visible;
  }
`;

export default Navigation;
