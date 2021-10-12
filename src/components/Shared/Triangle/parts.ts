import styled from "styled-components";
import breakpoints from "styles/breakpoints";

const Shape = styled.div`
  position: absolute;

  width: 0;
  height: 0;

  @media ${breakpoints.laptop} {
    display: none;
  }
`;

export { Shape };
