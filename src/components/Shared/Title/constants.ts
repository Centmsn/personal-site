import { PropsWithChildren } from "react";
import { HTMLTagNames } from "types/common";

export enum TitleVariant {
  yellow = "yellow",
  black = "black",
  white = "white",
  mixed = "mixed",
}

export enum TitleSize {
  xs = "1rem",
  s = "1.25rem",
  m = "1.5rem",
  l = "1.75rem",
  xl = "2rem",
  "2xl" = "2.25rem",
  "3xl" = "2.5rem",
  "4xl" = "3.5rem",
  "5xl" = "5rem",
}

export type TitleProps = PropsWithChildren<{
  as: HTMLTagNames;
  variant: TitleVariant;
  size: TitleSize;
}>;

export type StyledTitleProps = Omit<TitleProps, "children">;
