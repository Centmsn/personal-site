import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledLinkProps, LinkVariant } from "./constants";

export const StyledLink = styled(Link)<StyledLinkProps>`
  text-decoration: ${({ underline }) => (underline ? "underline" : "none")};
  text-decoration-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme, variant }) => (variant === LinkVariant.dark ? theme.colors.black : theme.colors.white)};
`;
