export enum SlideChange {
  NEXT = 1,
  PREV = -1,
}

export enum AvailableColors {
  "rgb(255, 219, 74)",
  "rgb(60, 60, 60)",
}

export interface TechnologyBar {
  title: string;
  percent: number;
}

export const LEARNED: Array<TechnologyBar> = [
  { title: "Javascript", percent: 65 },
  { title: "HTML", percent: 60 },
  { title: "CSS/SASS", percent: 80 },
  { title: "React", percent: 65 },
  { title: "Next.js", percent: 75 },
  { title: "Redux", percent: 60 },
  { title: "GSAP", percent: 70 },
  { title: "Formik i Yup", percent: 60 },
  { title: "Styled-components", percent: 80 },
  { title: "Git i Github", percent: 50 },
];

export const LEARNING: Array<TechnologyBar> = [
  { title: "Vue", percent: 35 },
  { title: "Jest", percent: 25 },
  { title: "Typescript", percent: 25 },
  { title: "Node", percent: 30 },
  { title: "Express", percent: 40 },
  { title: "Pisanie czystego kodu :)", percent: 45 },
];
