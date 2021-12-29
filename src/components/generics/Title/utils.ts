import { css, StyledProps } from "styled-components";
import { StyledTitleProps, TitleVariant } from "./constants";

export const getTitleShadow = ({ variant, theme }: StyledProps<StyledTitleProps>) => {
  if (variant === TitleVariant.mixed) {
    return css`
      text-shadow: 4px 4px 0 ${theme.colors.yellow};
    `;
  } else {
    return css`
      text-shadow: none;
    `;
  }
};

export const getTitleColor = ({ variant, theme }: StyledProps<StyledTitleProps>) => {
  if (variant === TitleVariant.mixed) {
    return css`
      color: ${theme.colors.black};
    `;
  } else {
    return css`
      color: ${theme.colors[variant]};
    `;
  }
};
