import { StyledTitleProps } from "./constants";
import { getTitleShadow, getTitleColor } from "./utils";
import styled from "styled-components";

export const StyledTitle = styled.h1<StyledTitleProps>`
  width: ${({ fullwidth }) => (fullwidth ? "100%" : "auto")};
  font-size: ${({ size }) => size};
  text-align: ${({ align }) => align};
  ${getTitleShadow}
  ${getTitleColor}
`;
