import styled from "styled-components";
import { StyledTextProps } from "./constants";
import { getTextColor } from "./utils";

export const StyledText = styled.p<StyledTextProps>`
  ${getTextColor};
  font-size: ${({ size }) => size};
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
`;
