import { PropsWithChildren } from "react";

export enum TextSize {
  xs = "0.7rem",
  s = "0.8rem",
  m = "1rem",
  l = "1.25rem",
  xl = "1.5rem",
  "2xl" = "1.75rem",
  "3xl" = "2rem",
}

export interface TextProps {
  size?: TextSize;
  as?: keyof HTMLElementTagNameMap;
  bold?: boolean;
  important?: boolean;
  light?: boolean;
}

export interface StyledTextProps extends TextProps {
  size: TextSize;
}

export type ExtendtedTextProps = PropsWithChildren<TextProps>;
