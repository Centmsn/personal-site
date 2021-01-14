import gsap from "gsap";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useEffect, useRef } from "react";

const SectionContainer = ({ children, isVisible = false, color = null }) => {
  const wrapperRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.5 } });
    const wrapper = wrapperRef.current;

    if (isVisible) {
      gsap.set(wrapper, { y: 0, autoAlpha: 1, x: `${getRandomDirection()}vw` });
      tl.to(wrapper, { x: 0 }, "+=0.3");
    } else {
      tl.to(wrapper, { y: `${getRandomDirection()}vh` }).to(wrapper, {
        autoAlpha: 0,
        duration: 0,
      });
    }
  }, [isVisible]);

  const getRandomDirection = () => {
    const directions = ["100", "-100"];

    return directions[Math.floor(Math.random() * 2)];
  };

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
`;

export default SectionContainer;
