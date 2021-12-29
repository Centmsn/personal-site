import { StyledTitleProps } from "./constants";
import { getTitleShadow, getTitleColor } from "./utils";
import styled from "styled-components";

export const StyledTitle = styled.h1<StyledTitleProps>`
  width: 100%;
  font-size: ${({ size }) => size};
  text-align: center;
  ${getTitleShadow}
  ${getTitleColor}
`;
