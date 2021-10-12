import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { Wrapper, ContainerFooter, StyledLink } from "./parts";

/**
 * functional React component - a container for hobbies subSections
 * @function
 * @param {Object} props - React props
 * @returns {JSX.Element}
 */
const SubSectionContainer = ({ children, preventLoadingEffect = false }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!preventLoadingEffect) {
      const wrapper = wrapperRef.current;

      gsap.to(wrapper, { scale: 1, duration: 0.5 });
    }
  }, [preventLoadingEffect]);

  return (
    <Wrapper ref={wrapperRef} preventLoadingEffect={!!preventLoadingEffect}>
      {children}
      <ContainerFooter>
        <StyledLink to="/">
          <FontAwesomeIcon
            icon={faArrowAltCircleLeft}
            style={{ marginRight: "10px" }}
          />
          Wróć
        </StyledLink>
      </ContainerFooter>
    </Wrapper>
  );
};

SubSectionContainer.propTypes = {
  /**
   * Prevents loading animation
   */
  preventLoadingEffect: PropTypes.bool,
};

export default SubSectionContainer;
