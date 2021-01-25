import styled from "styled-components";

import { device } from "../../GlobalStyles";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);

  overflow-x: hidden;

  @media ${device.laptop} {
    grid-auto-flow: row;

    padding: 1rem;

    overflow-y: auto;
  }
`;

export { Wrapper };
