import { useEffect, useRef, PropsWithChildren } from "react";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { Wrapper, ContainerFooter, StyledLink } from "./parts";

interface SubContainerProps {
  shouldPreventLoadingEffect?: boolean;
}

/**
 * functional React component - a container for hobbies subSections
 * @function
 * @param {Object} props - React props
 * @returns {JSX.Element}
 */
const SubSectionContainer = ({
  children,
  shouldPreventLoadingEffect = false,
}: PropsWithChildren<SubContainerProps>) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!shouldPreventLoadingEffect) {
      const wrapper = wrapperRef.current;

      gsap.to(wrapper, { scale: 1, duration: 0.5 });
    }
  }, [shouldPreventLoadingEffect]);

  return (
    <Wrapper
      ref={wrapperRef}
      shouldPreventLoadingEffect={shouldPreventLoadingEffect}
    >
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

export default SubSectionContainer;
