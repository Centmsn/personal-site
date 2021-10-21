import { SlideNames } from "components/App";

export interface HeaderSectionProps {
  isVisible: boolean;
  slideChange: (slideName: SlideNames) => void;
}

export const MOBILE_INFO =
  "Zachęcam Cię również do odwiedzenia mojej strony na urządzeniu z większym wyświetlaczem";
export const DESKTOP_INFO =
  "Jeśli korzystasz z komputera to do dyspozycji masz również strzałki (te z klawiatury oraz te w prawym rogu)";
