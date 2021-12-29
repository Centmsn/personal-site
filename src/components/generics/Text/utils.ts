import { StyledProps, css } from "styled-components";
import { TextSize, StyledTextProps } from "./constants";

export const getTextColor = ({ important, theme, size, light }: StyledProps<StyledTextProps>) => {
  let textColor: string;

  if (important) {
    textColor = theme.colors.yellow;
  } else if (light) {
    textColor = theme.colors.white;
  } else if ([TextSize.s, TextSize.xs].includes(size)) {
    textColor = theme.colors.gray;
  } else {
    textColor = theme.colors.black;
  }

  return css`
    color: ${textColor};
  `;
};
