import gsap from "gsap";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

import { getRandomElement } from "utils";
import { Wrapper } from "./styled";

/**
 * functional React component - a container for page sections
 * @function
 * @param {Object} props - React props
 * @returns {JSX.Element}
 */
const SectionContainer = ({
  children,
  isVisible = false,
  paddingSize = null,
}) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.5 } });
    const wrapper = wrapperRef.current;

    if (isVisible) {
      gsap.set(wrapper, {
        y: 0,
        autoAlpha: 1,
        x: `${getRandomElement(["100", "-100"])}vw`,
      });
      tl.to(wrapper, { x: 0 }, "+=0.3");
    } else {
      tl.to(wrapper, { y: `${getRandomElement(["100", "-100"])}vh` }).to(
        wrapper,
        {
          autoAlpha: 0,
          duration: 0,
        }
      );
    }
  }, [isVisible]);

  return (
    <Wrapper ref={wrapperRef} paddingSize={paddingSize || "1rem"}>
      {children}
    </Wrapper>
  );
};

SectionContainer.propTypes = {
  /**
   * switches component visibility
   */
  isVisible: PropTypes.bool.isRequired,
  paddingSize: PropTypes.number,
};

export default SectionContainer;
