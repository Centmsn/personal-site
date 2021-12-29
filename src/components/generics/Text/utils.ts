import { StyledProps } from "styled-components";
import { TextSize, StyledTextProps } from "./constants";

export const getTextColor = ({ important, theme, size, light }: StyledProps<StyledTextProps>) => {
  if (important) {
    return theme.colors.yellow;
  }

  if (light) {
    return theme.colors.white;
  }

  if (size === TextSize.small) {
    return theme.colors.gray;
  } else {
    return theme.colors.black;
  }
};
