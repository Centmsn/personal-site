import styled from "styled-components";

import breakpoints from "styles/breakpoints";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  transform: translate(-100vw);

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);

  overflow-x: hidden;

  @media ${breakpoints.laptop} {
    grid-auto-flow: row;

    padding: ${({ paddingSize }) => paddingSize};

    overflow-y: auto;
  }
`;

export { Wrapper };
