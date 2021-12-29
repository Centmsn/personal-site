import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledLinkProps } from "./constants";

export const StyledLink = styled(Link)<StyledLinkProps>`
  text-decoration: ${({ underline }) => (underline ? "underline" : "none")};
  text-decoration-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme, light }) => (light ? theme.colors.white : theme.colors.black)};

  &:hover {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;
