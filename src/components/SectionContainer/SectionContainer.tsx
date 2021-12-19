import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { getRandomArrElement } from "utils/getRandomArrElement";
import * as P from "./parts";

export interface SectionContainerProps {
  isVisible: boolean;
  paddingSize?: null | string;
}

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
}: React.PropsWithChildren<SectionContainerProps>) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.5 } });
    const wrapper = wrapperRef.current;

    if (isVisible) {
      gsap.set(wrapper, {
        y: 0,
        autoAlpha: 1,
        x: `${getRandomArrElement(["100", "-100"])}vw`,
      });
      tl.to(wrapper, { x: 0 }, "+=0.3");
    } else {
      tl.to(wrapper, { y: `${getRandomArrElement(["100", "-100"])}vh` }).to(
        wrapper,
        {
          autoAlpha: 0,
          duration: 0,
        }
      );
    }
  }, [isVisible]);

  return (
    <P.Wrapper ref={wrapperRef} paddingSize={paddingSize || "1rem"}>
      {children}
    </P.Wrapper>
  );
};

export default SectionContainer;
