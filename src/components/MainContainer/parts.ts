import styled from "styled-components";

import breakpoints from "styles/breakpoints";

const Wrapper = styled.div`
  position: relative;

  width: 100vw;
  height: 100vh;

  overflow: hidden;
`;

const PageInfo = styled.div`
  position: absolute;
  right: 5px;

  font-size: 2rem;
  color: transparent;

  @media ${breakpoints.tablet} {
    display: none;
  }
`;

export { Wrapper, PageInfo };
