import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const HobbiesWebDev = ({ children }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    gsap.to(wrapper, { scale: 1, duration: 0.5 });
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
      {children}
      <StyledLink to="/">
        <FontAwesomeIcon
          icon={faArrowAltCircleLeft}
          style={{ marginRight: "10px" }}
        />
        Wróć
      </StyledLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 9999;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);

  background-color: rgba(60, 60, 60, 0.98);

  transform: scale(0);
`;

const StyledLink = styled(Link)`
  grid-area: 12/1/13/2;

  text-align: center;
  text-decoration: none;
  font-size: 2.25rem;

  color: white;

  &:hover {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

export default HobbiesWebDev;
