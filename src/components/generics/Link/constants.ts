import { HTMLAttributes, PropsWithChildren } from "react";

export enum LinkVariant {
  light = "LIGHT",
  dark = "DARK",
}

export type LinkProps = PropsWithChildren<{
  external?: boolean;
  to: string;
  variant?: LinkVariant;
  underline?: boolean;
}> &
  HTMLAttributes<HTMLAnchorElement>;

export type StyledLinkProps = Pick<LinkProps, "underline" | "variant">;
