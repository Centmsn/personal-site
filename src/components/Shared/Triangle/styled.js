import styled from "styled-components";
import { device } from "../../../GlobalStyles";

const Shape = styled.div`
  position: absolute;

  width: 0;
  height: 0;

  @media ${device.laptop} {
    display: none;
  }
`;

export { Shape };
