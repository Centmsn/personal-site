import { EntryCollection } from "contentful";
import { IWebDevFields } from "types/contentful";

export interface InnerBarProps {
  width: number;
}

export interface ProgressBarData {
  title: string;
  percent: number;
}

export interface InitialSlideProps {
  slideContent: EntryCollection<IWebDevFields>;
}
