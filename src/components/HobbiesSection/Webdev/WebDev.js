import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

import SubSectionContainer from "../SubSectionContainer";
import WebDevSlide from "./WebDevSlide";

/**
 * Enum for slide changing
 * @readonly
 * @enum { number }
 */
const SLIDE_CHANGE = {
  NEXT: 0,
  PREV: 1,
};

const slides = [
  {
    imgLink: "boxshadowGenerator",
    imgDesc: "BoxShadow - generator",
    projectTitle: "BoxShadow - generator",
    projectDesc:
      "Generator właściwości box-shadow dający nam gotowy kod do wklejenia w arkuszu styli. Przy tworzeniu oprócz React i Redux użyłem także Styled components. Projekt ten ciągle znajduje się w fazie developmentu, dlatego niektóre funkcje mogą działać niepoprawnie, lub być niedostępne.",
    demoLink: "http://www.boxshadowgenerator.online/",
    codeLink: "https://github.com/Centmsn/BoxShadow-generator",
  },
  {
    imgLink: "renowork",
    imgDesc: "RenoWork",
    projectTitle: "Reno|Work",
    projectDesc:
      "Komercyjna strona internetowa wykonana dla firmy Reno|Work, przy użyciu HTML, SASS oraz czystego JavaScripta - przy tworzeniu strony wykorzystałem także Webpack oraz GSAP.",
    demoLink: "http://www.renowork.pl/",
    codeLink: "https://github.com/Centmsn/Reno-work",
  },
  {
    imgLink: "todoapp",
    imgDesc: "ToDo App",
    projectTitle: "ToDo App",
    projectDesc:
      "klasyczna aplikacja toDo w nieco odświeżonym wydaniu z wykorzystaniem LocalStorage. Przy tworzeniu oprócz React użyłem także Redux, oraz Redux-form.",
    demoLink: "https://centmsn.github.io/ToDo-App/",
    codeLink: "https://github.com/Centmsn/ToDo-App",
  },
  {
    imgLink: "weatherapp",
    imgDesc: "Aplikacja pogoda",
    projectTitle: "Aplikacja pogodowa",
    projectDesc:
      "prosta aplikacja pogodowa używająca lokalizacji użytkownika oraz OpenWeather API. Animacje wykonane przy użyciu GSAP3",
    demoLink: "https://centmsn.github.io/weatherApp/",
    codeLink: "https://github.com/Centmsn/weatherApp",
  },
  {
    imgLink: "snake",
    imgDesc: "gra - snake",
    projectTitle: "Snake - gra",
    projectDesc:
      "znany wszystkim (głównie z telefonów Nokii) snake. Jest to typowy grid-game z możliwością dostosowania do własnych preferencji",
    demoLink: "https://centmsn.github.io/snake-JS/",
    codeLink: "https://github.com/Centmsn/snake-JS",
  },
  {
    imgLink: "checkers",
    imgDesc: "gra - warcaby",
    projectTitle: "Warcaby - gra",
    projectDesc:
      "Kolejny grid-game, tym razem warcaby (zgodne z zasadami stosowanymi w warcabach angielskich). Przy towrzeniu wykorzystałem czysty Javascript.",
    demoLink: "https://centmsn.github.io/checkers-JS/",
    codeLink: "https://github.com/Centmsn/checkers-JS",
  },
  {
    imgLink: "minesweeper",
    imgDesc: "gra - saper",
    projectTitle: "Saper - gra",
    projectDesc:
      "Minesweeper / Saper - gra wzorowana na tej, która dostarczana jest wraz systemem Windows.",
    demoLink: "https://centmsn.github.io/minesweeper-JS/",
    codeLink: "https://github.com/Centmsn/minesweeper-JS",
  },
  {
    imgLink: "gradientGenerator",
    imgDesc: "generator gradientu",
    projectTitle: "Generator gradientu CSS",
    projectDesc:
      "Generator gradientu dający nam gotowy kod do wklejenia w arkuszu styli. Przy tworzeniu oprócz React i Redux użyłem także Styled components. Projekt ten ciągle znajduje się w fazie developmentu, dlatego niektóre funkcje mogą działać niepoprawnie, lub być niedostępne.",
    demoLink: "https://centmsn.github.io/CSS-gradient-generator/",
    codeLink: "https://github.com/Centmsn/CSS-gradient-generator",
  },
];

const learned = [
  { title: "Javascript", percent: 70 },
  { title: "HTML", percent: 65 },
  { title: "CSS/SASS", percent: 80 },
  { title: "React", percent: 70 },
  { title: "Redux", percent: 60 },
  { title: "GSAP", percent: 75 },
  { title: "Formik i Yup", percent: 70 },
  { title: "Styled-components", percent: 65 },
  { title: "Git i Github", percent: 50 },
];

const learning = [
  { title: "Jest", percent: 35 },
  { title: "Webpack", percent: 50 },
  { title: "Typescript", percent: 40 },
];

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
    if (direction === SLIDE_CHANGE.NEXT && currentSlide < slides.length) {
      setCurrentSlide((prev) => prev + 1);
    } else if (direction === SLIDE_CHANGE.PREV && currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const renderSlides = () => {};

  /**
   * Renders list elements on the screen
   *
   * @param { Object[] } listElement
   * @param {string} listElement[].title - element title
   * @param {number} listElement[].percent - progress bar width
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
          <ul ref={listLearnedRef}>{renderList(learned)} </ul>
          <small>
            Do powyższej listy dopisać można jeszcze kilka mniejszych bibliotek:{" "}
            React-router, Lodash - podstawy.
          </small>
        </ListSection>

        <ListSection>
          <ListTitle>Czego się uczę?</ListTitle>
          <ul ref={listLearningRef}>{renderList(learning)}</ul>
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
        title={slides[currentSlide - 1]?.projectTitle}
        description={slides[currentSlide - 1]?.projectDesc}
        imgLink={slides[currentSlide - 1]?.imgLink}
        codeLink={slides[currentSlide - 1]?.codeLink}
        demoLink={slides[currentSlide - 1]?.demoLink}
        imgDesc={slides[currentSlide - 1]?.imgDesc}
      />

      <LeftArrow
        onClick={() => handleSlideChange(SLIDE_CHANGE.PREV)}
        disabled={currentSlide === 0}
      >
        <FontAwesomeIcon icon={faCaretLeft} />
      </LeftArrow>

      <RightArrow
        onClick={() => handleSlideChange(SLIDE_CHANGE.NEXT)}
        disabled={currentSlide > slides.length - 1}
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
