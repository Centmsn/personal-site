import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFull } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import PropTypes, { func } from "prop-types";
import styled from "styled-components";
import { useEffect, useRef } from "react";

import SectionContainer from "../SectionContainer/SectionContainer";
import useWindowSize from "../../hooks/useWindowSize";

const MOBILE_INFO =
  "Zachęcam Cię również do odwiedzenia mojej strony na urządzeniu z większym wyświetlaczem";
const DESKTOP_INFO =
  "Jeśli korzystasz z komputera to do dyspozycji masz również strzałki (te z klawiatury oraz te w prawym rogu)";

/**
 * React functional component - renders header section on the screen
 * @returns {JSX.Element}
 */
const HeaderSection = ({ isVisible, slideChange }) => {
  const titleRef = useRef(null);
  const infoRef = useRef(null);
  const descriptionRef = useRef(null);
  const feedbackRef = useRef(null);
  const borderRef = useRef(null);

  const { width } = useWindowSize();

  useEffect(() => {
    const title = titleRef.current;
    const info = infoRef.current;
    const description = descriptionRef.current;
    const feedback = feedbackRef.current;
    const border = borderRef.current;

    const tl = gsap.timeline({ defaults: { duration: 0.3, ease: "none" } });

    tl.to(title, { x: 0, y: 0, delay: 1.5 })
      .to(border, { x: 0, y: 0 }, "-=0.2")
      .to(feedback, { x: 0, y: 0 }, "-=0.6")
      .to(info, { x: 0, y: 0 }, "-=0.5")
      .to(description, { x: 0, y: 0 }, "-=1");
  }, []);

  const content = width > 768 ? DESKTOP_INFO : MOBILE_INFO;

  return (
    <SectionContainer isVisible={isVisible} paddingSize="0px">
      <Info ref={infoRef}>
        <p>
          Jeżeli interesują Cię wyłącznie kwestie zawodowe to odsyłam{" "}
          <a href="#/webDev">tutaj</a>.
        </p>

        <small>
          Będzie mi jednak bardzo miło, jeśli zdecydujesz się zwiedzić całą
          stronę.
        </small>
      </Info>

      <Title ref={titleRef}>
        <span>
          <FontAwesomeIcon icon={faSquareFull} />
        </span>
        <h1>Cześć jestem Wojtek</h1>
        <h2>Deweloper z Prudnika</h2>
      </Title>

      <Border ref={borderRef}></Border>

      <Description ref={descriptionRef}>
        <p>
          <span>
            <FontAwesomeIcon icon={faSquareFull} />
          </span>
          Do poruszania się po witrynie możesz użyc kropek do nawigacji
        </p>

        <p>
          <span>
            <FontAwesomeIcon icon={faSquareFull} />
          </span>
          {content}
        </p>
      </Description>

      <Feedback onClick={() => slideChange("contact")} ref={feedbackRef}>
        <small>
          Poświęć chwilę i napisz co sądzisz o warstwie wizualnej strony.
        </small>

        <small>Sugestie mile widziane.</small>
      </Feedback>
    </SectionContainer>
  );
};

HeaderSection.propTypes = {
  /**
   * switches component visibility
   */
  isVisible: PropTypes.bool.isRequired,

  /**
   * allows slide change
   */
  slideChange: func.isRequired,
};

const Title = styled.div`
  z-index: 3;
  grid-area: 2/2/5/5;

  transform: translate(67%, 22%);

  display: flex;
  flex-wrap: wrap;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.gray};

  padding: 1rem;

  h1 {
    font-size: 2rem;
    display: inline;
  }

  h2 {
    color: white;
    font-size: 2rem;
  }

  span {
    margin-right: 5px;
    color: white;
  }
`;

const Border = styled.div`
  z-index: 2;
  grid-area: 4/4/8/7;
  transform: translate(-127%, 22%);
  border: 4px solid ${({ theme }) => theme.colors.yellow};
`;

const Description = styled.div`
  z-index: 4;
  grid-area: 7/6/10/10;
  transform: translate(15%, 75%);

  font-size: 1.5rem;

  box-shadow: 4px 4px 0 0 ${({ theme }) => theme.colors.yellow};

  color: white;
  background-color: ${({ theme }) => theme.colors.gray};

  padding: 0.5rem;

  p {
    margin-bottom: 5px;
    display: inline-block;
  }

  span {
    font-size: 1rem;
    margin-right: 5px;
  }
`;

const Info = styled.div`
  position: relative;
  grid-area: 2/6/5/11;
  transform: translate(50%, 70%);

  font-size: 2.25rem;

  border: 4px solid black;
  padding: 1rem;

  small {
    position: absolute;

    bottom: 0;
    right: 5px;

    font-size: 1rem;
  }
`;

const Feedback = styled.div`
  grid-area: 13/1/-1/3;

  background-color: ${({ theme }) => theme.colors.gray};
  box-shadow: 8px -8px 0 -4px ${({ theme }) => theme.colors.yellow};

  cursor: pointer;
  transition: box-shadow 300ms;

  &:hover {
    box-shadow: 8px -8px 0 -4px white,
      12px -12px 0 -4px ${({ theme }) => theme.colors.yellow};
  }

  small {
    padding: 3px;
    color: white;
  }
`;

export default HeaderSection;
