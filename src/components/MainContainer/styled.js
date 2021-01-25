import styled from "styled-components";

import { device } from "../../GlobalStyles";

const Wrapper = styled.div`
  position: relative;

  width: 100vw;
  height: 100vh;

  overflow: hidden;
`;

const PageInfo = styled.div`
  position: absolute;
  top: 10px;
  right: 0;

  font-size: 2rem;
  writing-mode: vertical-rl;
  color: transparent;

  @media ${device.tablet} {
    display: none;
  }
`;

export { Wrapper, PageInfo };
