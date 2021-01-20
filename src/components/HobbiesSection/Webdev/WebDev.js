import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

import { SLIDE_CHANGE_ENUM, SLIDES, LEARNED, LEARNING } from "../../../consts";
import SubSectionContainer from "../SubSectionContainer";
import WebDevSlide from "./WebDevSlide";

/**
 * Renders WebDev section in Hobbies
 */
const HobbiesWebDev = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const listLearnedRef = useRef(null);
  const listLearningRef = useRef(null);

  useEffect(() => {
    const learned = listLearnedRef.current.children;
    const learning = listLearningRef.current.children;

    const tl = gsap.timeline({ defaults: { duration: 0.5 } });

    tl.to(learned[0].lastChild.lastChild, { scaleX: 1, delay: 1 });
    tl.add("triggerLists");
    tl.to(learned[2].lastChild.lastChild, { scaleX: 1 });
    tl.to(learned[5].lastChild.lastChild, { scaleX: 1 });
    tl.to(learned[6].lastChild.lastChild, { scaleX: 1 }, "-=1");
    tl.to(learned[4].lastChild.lastChild, { scaleX: 1 }, "-=0.5");
    tl.to(learned[7].lastChild.lastChild, { scaleX: 1 }, "-=0.1");
    tl.to(learned[8].lastChild.lastChild, { scaleX: 1 }, "-=0.7");
    tl.to(learned[3].lastChild.lastChild, { scaleX: 1 }, "-=0.3");
    tl.to(learned[1].lastChild.lastChild, { scaleX: 1 }, "-=0.2");
    tl.to(learning[0].lastChild.lastChild, { scaleX: 1 }, "triggerLists");
    tl.to(learning[2].lastChild.lastChild, { scaleX: 1 }, "-=0.1");
    tl.to(learning[1].lastChild.lastChild, { scaleX: 1 });
  }, []);

  const handleSlideChange = (direction) => {
    if (direction === SLIDE_CHANGE_ENUM.NEXT && currentSlide < SLIDES.length) {
      setCurrentSlide((prev) => prev + 1);
    } else if (direction === SLIDE_CHANGE_ENUM.PREV && currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  /**
   * Renders list elements on the screen
   *
   * @param { Object[] } listElement
   * @param {string} listElement[].title - element title
   * @param {number} listElement[].percent - progress bar width
   * @return {Array}
   */
  const renderList = (arr) => {
    return arr.map((el, i) => (
      <li key={i}>
        {el.title}
        <ProgressBar content={el.percent}>
          <InnerBar width={el.percent} />
        </ProgressBar>
      </li>
    ));
  };

  return (
    <SubSectionContainer>
      <StartSection isVisible={currentSlide === 0}>
        <ListSection>
          <ListTitle>Co umiem?</ListTitle>
          <ul ref={listLearnedRef}>{renderList(LEARNED)} </ul>
          <small>
            Do powyższej listy dopisać można jeszcze kilka mniejszych bibliotek:{" "}
            React-router, Lodash - podstawy.
          </small>
        </ListSection>

        <ListSection>
          <ListTitle>Czego się uczę?</ListTitle>
          <ul ref={listLearningRef}>{renderList(LEARNING)}</ul>
          <small>
            Aktualnie uczę się także Web components - choć nie jest to mój
            priorytet, interesuję się także Node.js (zupełne podstawy).
          </small>
        </ListSection>

        <Summary>
          <h1>Szybkie podsumowanie</h1>
          <p>
            Jestem samoukiem z wielkim zapałem do ciągłego rozwoju, tworzenie
            aplikacji i stron internetowych to moja pasja, na którą każdego dnia
            poświęcam długie godziny.
          </p>

          <p>
            Szczególnie interesują mnie technologie front-endowe, uwielbiam
            testować nowe rozwiązania, biblioteki i frameworki. Jestem wielkim
            fanem Reacta, w związku z tym umiejętność na której doskonalenie
            poświęcam najwięcej czasu to Javascript oraz jego "otoczka".
          </p>

          <p>
            Jeżeli chodzi o komercyjne doświadczenie - do tej pory wykonywałem
            strony internetowe na zamówienie dla małych firm lub osób
            prywatnych. W tym momencie jestem pewny, że moje umiejętności, oraz
            zapał do dalszego rozwoju wystarczają by rozpocząc szukanie
            pierwszej pracy "na pełen etat" w tej branży. Lokalizacje którymi
            jestem zainteresowany to Łódź / Warszawa, pod uwagę biorę również
            pracę zdalną.
          </p>

          <p>
            Na kolejnych slajdach znajdziesz projekty które do tej pory
            tworzyłem, na różnych etapach mojej nauki.
          </p>

          <p>
            Udzielam się także na CodeWars oraz na Githubie, i tam również Cię
            zapraszam.
          </p>

          <section>
            <a
              href="https://github.com/Centmsn"
              target="_blank"
              rel="noreferrer"
              title="Github"
            >
              Github
            </a>

            <a
              href="https://www.codewars.com/users/Centmsn"
              target="_blank"
              rel="noreferrer"
              title="CodeWars"
            >
              CodeWars
            </a>
          </section>

          <a
            href="https://www.codewars.com/users/Centmsn"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://www.codewars.com/users/Centmsn/badges/large"
              alt="CodeWars"
              title="CodeWars - poziom"
            />
          </a>
        </Summary>
      </StartSection>

      <WebDevSlide
        isVisible={!(currentSlide === 0)}
        title={SLIDES[currentSlide - 1]?.projectTitle}
        description={SLIDES[currentSlide - 1]?.projectDesc}
        imgLink={SLIDES[currentSlide - 1]?.imgLink}
        codeLink={SLIDES[currentSlide - 1]?.codeLink}
        demoLink={SLIDES[currentSlide - 1]?.demoLink}
        imgDesc={SLIDES[currentSlide - 1]?.imgDesc}
      />

      <LeftArrow
        onClick={() => handleSlideChange(SLIDE_CHANGE_ENUM.PREV)}
        disabled={currentSlide === 0}
      >
        <FontAwesomeIcon icon={faCaretLeft} />
      </LeftArrow>

      <RightArrow
        onClick={() => handleSlideChange(SLIDE_CHANGE_ENUM.NEXT)}
        disabled={currentSlide > SLIDES.length - 1}
      >
        <FontAwesomeIcon icon={faCaretRight} />
      </RightArrow>
    </SubSectionContainer>
  );
};

const StartSection = styled.section`
  grid-area: 2/2/12/12;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;

  color: white;

  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};

  small {
    color: ${({ theme }) => theme.colors.smokedWhite};
  }
`;

const ListSection = styled.section`
  flex-basis: 20%;
`;

const ListTitle = styled.h2``;

const Summary = styled.section`
  flex-basis: 47%;

  section {
    margin-bottom: 1rem;

    display: flex;
    justify-content: space-around;
  }

  h1 {
    font-size: 2rem;
  }

  p {
    margin-bottom: 1rem;

    text-align: justify;
    font-size: 1.25rem;
  }

  a {
    display: block;

    font-size: 1.75rem;
    text-align: center;

    color: white;

    &:hover {
      color: ${({ theme }) => theme.colors.yellow};
    }
  }
`;

const ProgressBar = styled.div`
  position: relative;
  width: 100%;
  height: 10px;

  background-color: ${({ theme }) => theme.colors.lightGray};

  overflow: hidden;
`;

const InnerBar = styled.div`
  width: ${({ width }) => width}%;
  height: 100%;
  transform: scaleX(5);
  transform-origin: left;

  background-color: ${({ theme }) => theme.colors.yellow};
`;

const Arrow = styled.button`
  font-size: 7rem;

  color: ${({ disabled, theme }) =>
    disabled ? theme.colors.lightGray : theme.colors.yellow};

  background: none;
  transition: 300ms;

  &:hover {
    transform: scale(1.2);
    color: ${({ disabled, theme }) =>
      disabled ? theme.colors.lightGray : theme.colors.yellow};
  }
`;

const LeftArrow = styled(Arrow)`
  grid-area: 6/1/8/2;
`;

const RightArrow = styled(Arrow)`
  grid-area: 6/12/8/13;
`;

export default HobbiesWebDev;
