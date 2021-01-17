import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

import SubSectionContainer from "../SubSectionContainer";

const slides = [
  {
    id: 0,
    imgLink: "boxshadowGenerator",
    imgDesc: "BoxShadow - generator",
    projectTitle: "BoxShadow - generator",
    desc:
      "Generator właściwości box-shadow dający nam gotowy kod do wklejenia w arkuszu styli. Przy tworzeniu oprócz React i Redux użyłem także Styled components. Projekt ten ciągle znajduje się w fazie developmentu, dlatego niektóre funkcje mogą działać niepoprawnie, lub być niedostępne.",
    demoLink: "http://www.boxshadowgenerator.online/",
    codeLink: "https://github.com/Centmsn/BoxShadow-generator",
  },
  {
    id: 1,
    imgLink: "renowork",
    imgDesc: "RenoWork",
    projectTitle: "Reno|Work",
    projectDesc:
      "Komercyjna strona internetowa wykonana dla firmy Reno|Work, przy użyciu HTML, SASS oraz czystego JavaScripta - przy tworzeniu strony wykorzystałem także Webpack oraz GSAP.",
    demoLink: "http://www.renowork.pl/",
    codeLink: "https://github.com/Centmsn/Reno-work",
  },
  {
    id: 2,
    imgLink: "todoapp",
    imgDesc: "ToDo App",
    projectTitle: "ToDo App",
    projectDesc:
      "klasyczna aplikacja toDo w nieco odświeżonym wydaniu z wykorzystaniem LocalStorage. Przy tworzeniu oprócz React użyłem także Redux, oraz Redux-form.",
    demoLink: "https://centmsn.github.io/ToDo-App/",
    codeLink: "https://github.com/Centmsn/ToDo-App",
  },
  {
    id: 3,
    technologies: ["react", "javascript", "sass"],
    imgLink: "weatherapp",
    imgDesc: "Aplikacja pogoda",
    projectTitle: "Aplikacja pogodowa",
    projectDesc:
      "prosta aplikacja pogodowa używająca lokalizacji użytkownika oraz OpenWeather API. Animacje wykonane przy użyciu GSAP3",
    demoLink: "https://centmsn.github.io/weatherApp/",
    codeLink: "https://github.com/Centmsn/weatherApp",
  },
  {
    id: 4,
    imgLink: "snake",
    imgDesc: "gra - snake",
    projectTitle: "Snake - gra",
    projectDesc:
      "znany wszystkim (głównie z telefonów Nokii) snake. Jest to typowy grid-game z możliwością dostosowania do własnych preferencji",
    demoLink: "https://centmsn.github.io/snake-JS/",
    codeLink: "https://github.com/Centmsn/snake-JS",
  },
  {
    id: 5,
    imgLink: "checkers",
    imgDesc: "gra - warcaby",
    projectTitle: "Warcaby - gra",
    projectDesc:
      "Kolejny grid-game, tym razem warcaby (zgodne z zasadami stosowanymi w warcabach angielskich). Przy towrzeniu wykorzystałem czysty Javascript.",
    demoLink: "https://centmsn.github.io/checkers-JS/",
    codeLink: "https://github.com/Centmsn/checkers-JS",
  },
  {
    id: 6,
    imgLink: "minesweeper",
    imgDesc: "gra - saper",
    projectTitle: "Saper - gra",
    projectDesc:
      "Minesweeper / Saper - gra wzorowana na tej, która dostarczana jest wraz systemem Windows.",
    demoLink: "https://centmsn.github.io/minesweeper-JS/",
    codeLink: "https://github.com/Centmsn/minesweeper-JS",
  },
  {
    id: 7,
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
        <ProgressBar>
          <InnerBar width={el.percent / 100} />
        </ProgressBar>
      </li>
    ));
  };
  return (
    <SubSectionContainer>
      <StartSection>
        <ListSection>
          <ListTitle>Co umiem?</ListTitle>
          <ul>{renderList(learned)}</ul>
          <small>
            Do powyższej listy dopisać można jeszcze kilka mniejszych bibliotek:{" "}
            React-router, Lodash - podstawy.
          </small>
        </ListSection>

        <ListSection>
          <ListTitle>Czego się uczę?</ListTitle>
          <ul>{renderList(learning)}</ul>
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

      <LeftArrow>
        <FontAwesomeIcon icon={faCaretLeft} />
      </LeftArrow>
      <RightArrow>
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
  width: 100%;
  height: 10px;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

const InnerBar = styled.div`
  width: 100%;
  height: 100%;
  transform: scaleX(${({ width }) => width});
  transform-origin: left;

  background-color: ${({ theme }) => theme.colors.yellow};
`;

const Arrow = styled.button`
  font-size: 7rem;

  color: white;

  background: none;
  transition: 300ms;

  &:hover {
    transform: scale(1.2);
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

const LeftArrow = styled(Arrow)`
  grid-area: 6/1/8/2;
`;

const RightArrow = styled(Arrow)`
  grid-area: 6/12/8/13;
`;

export default HobbiesWebDev;
