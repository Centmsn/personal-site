import gsap from "gsap";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useEffect, useRef } from "react";

import { getRandomElement } from "../../utils";
import { device } from "../../GlobalStyles";

/**
 * functional React component - a container for page sections
 * @function
 * @param {Object} props - React props
 * @returns {JSX.Element}
 */
const SectionContainer = ({ children, isVisible = false }) => {
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

  return <Wrapper ref={wrapperRef}>{children}</Wrapper>;
};

SectionContainer.propTypes = {
  /**
   * switches component visibility
   */
  isVisible: PropTypes.bool.isRequired,
};

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);

  @media ${device.laptop} {
    grid-auto-flow: row;

    padding: 1rem;

    overflow-y: auto;
  }
`;

export default SectionContainer;
