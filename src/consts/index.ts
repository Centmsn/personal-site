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
