import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import styled from "styled-components";
import { useEffect, useRef } from "react";

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
  const renderSlides = () => {};

  const renderList = () => {};
  return (
    <SubSectionContainer>
      <StartSection>
        <ListSection>
          <ListTitle>Co umiem?</ListTitle>
          <ul>
            <li>a</li>
            <li>b</li>
            <li>c</li>
          </ul>
        </ListSection>

        <ListSection>
          <ListTitle>Czego się uczę?</ListTitle>
          <ul>
            <li>a</li>
            <li>b</li>
            <li>c</li>
          </ul>
        </ListSection>

        <Summary>
          <h1>Szybkie podsumowanie</h1>
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
`;

const ListSection = styled.section`
  flex-basis: 20%;
`;

const ListTitle = styled.h2``;

const Summary = styled.section`
  flex-basis: 47%;

  background-color: red;
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
