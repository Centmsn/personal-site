import { HTMLAttributes, PropsWithChildren } from "react";

export type LinkProps = PropsWithChildren<{
  external?: boolean;
  to: string;
  light?: boolean;
  underline?: boolean;
}> &
  HTMLAttributes<HTMLAnchorElement>;

export type StyledLinkProps = Pick<LinkProps, "underline" | "light">;
