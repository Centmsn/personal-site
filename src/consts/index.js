/**
 * Enum for slide changing
 * @readonly
 * @enum { number }
 */
const SLIDE_CHANGE_ENUM = {
  NEXT: 1,
  PREV: -1,
};

/**
 * main page theme
 * @readonly
 */
const COLORS = ["rgb(255, 219, 74)", "rgb(60, 60, 60)"];

/**
 * WebDev slides content
 *
 * @type {{
 *  imgLink: string,
 *  imgDesc: string,
 *  projectTitle: string,
 *  projectDesc, string,
 *  demoLink: string,
 *  codeLink: string,
 * }}
 * @readonly
 */
const SLIDES = [
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

/**
 * WebDev - learned bars
 *
 * @type {{title: string, percent: number}}
 * @readonly
 */
const LEARNED = [
  { title: "Javascript", percent: 65 },
  { title: "HTML", percent: 60 },
  { title: "CSS/SASS", percent: 80 },
  { title: "React", percent: 65 },
  { title: "Redux", percent: 60 },
  { title: "GSAP", percent: 70 },
  { title: "Formik i Yup", percent: 60 },
  { title: "Styled-components", percent: 65 },
  { title: "Git i Github", percent: 50 },
];

/**
 * WebDev - learning bars
 *
 * @type {{title: string, percent: number}}
 * @readonly
 */
const LEARNING = [
  { title: "Jest", percent: 35 },
  { title: "Webpack", percent: 50 },
  { title: "Typescript", percent: 30 },
  { title: "Pisanie czystego kodu :)", percent: 40 },
];

export { COLORS, LEARNING, LEARNED, SLIDES, SLIDE_CHANGE_ENUM };
