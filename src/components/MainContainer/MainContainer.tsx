import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import Triangle from "components/generics/Triangle/Triangle";
import { Wrapper, PageInfo } from "./parts";
import { AvailableColors } from "consts";

export interface MainContainerProps {
  pageInfo: string;
}
/**
 * functional React component - main app container
 * @function
 * @param {Object} props - React props
 * @returns {JSX.Element}
 */
const MainContainer = ({ children, pageInfo }: React.PropsWithChildren<MainContainerProps>) => {
  const [currentColor, setCurrentColor] = useState(AvailableColors[0]);
  const topTriangleRef = useRef(null);
  const pageInfoRef = useRef(null);

  useEffect(() => {
    const triangle = topTriangleRef.current;
    const text = pageInfoRef.current;

    gsap.set(text, { color: "transparent" });
    const tl = gsap.timeline({ defaults: { duration: 0.5 } });

    tl.to(triangle, { x: "25vw", y: "-25vh" }).to(triangle, { x: 0, y: 0 }, "+=0.3").to(text, { color: "white" });
  }, [pageInfo]);

  useEffect(() => {
    setCurrentColor(AvailableColors[Math.floor(Math.random() * 2)]);
  }, [pageInfo]);

  return (
    <Wrapper>
      {children}
      <Triangle color={AvailableColors[0]} position="bottom-right" />
      <Triangle color={currentColor} position="top-right" ref={topTriangleRef} />
      <PageInfo ref={pageInfoRef}>{pageInfo}</PageInfo>
    </Wrapper>
  );
};

export default MainContainer;
