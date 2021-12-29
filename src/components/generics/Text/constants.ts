import { PropsWithChildren } from "react";

export enum TextSize {
  small = "0.8rem",
  regular = "1.25rem",
  large = "1.75rem",
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
