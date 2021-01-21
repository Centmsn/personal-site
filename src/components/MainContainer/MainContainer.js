import gsap from "gsap";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

import Triangle from "../Elements/Triangle";
import { device } from "../../GlobalStyles";

const COLORS = ["rgb(255, 219, 74)", "rgb(60, 60, 60)"];

/**
 * functional React component - main app container
 * @function
 * @param {Object} props - React props
 * @returns {JSX.Element}
 */
const MainContainer = ({ children, pageInfo }) => {
  const [currentColor, setCurrentColor] = useState(COLORS[0]);
  const topTriangleRef = useRef(null);
  const pageInfoRef = useRef(null);

  useEffect(() => {
    const triangle = topTriangleRef.current;
    const text = pageInfoRef.current;

    gsap.set(text, { color: "transparent" });
    const tl = gsap.timeline({ defaults: { duration: 0.5 } });

    tl.to(triangle, { x: "25vw", y: "-25vh" })
      .to(triangle, { x: 0, y: 0 }, "+=0.3")
      .to(text, { color: "white" });
  }, [pageInfo]);

  useEffect(() => {
    setCurrentColor(COLORS[Math.floor(Math.random() * 2)]);
  }, [pageInfo]);

  return (
    <Wrapper>
      {children}
      <Triangle color={"rgb(255, 219, 74)"} position="bottom-right" />
      <Triangle
        color={currentColor}
        position="top-right"
        ref={topTriangleRef}
      />
      <PageInfo ref={pageInfoRef}>{pageInfo}</PageInfo>
    </Wrapper>
  );
};

MainContainer.propTypes = {
  /**
   * Renders on the screen current page description
   */
  pageInfo: PropTypes.string,
};

const Wrapper = styled.div`
  position: relative;

  width: 100vw;
  height: 100vh;

  overflow: hidden;
`;

const PageInfo = styled.div`
  position: absolute;
  top: 10px;
  right: 0;

  font-size: 2rem;
  writing-mode: vertical-rl;
  color: transparent;
`;

export default MainContainer;
