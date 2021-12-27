import { PropsWithChildren } from "react";

export enum TextSize {
  small = "SMALL",
  regular = "REGULAR",
  large = "LARGE",
}

export interface TextProps {
  size: TextSize;
  as?: keyof HTMLElementTagNameMap;
  bold?: boolean;
  important?: boolean;
}

export type StyledTextProps = TextProps;

export type ExtendtedTextProps = PropsWithChildren<TextProps>;
