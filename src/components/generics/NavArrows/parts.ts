import styled from "styled-components";

import breakpoints from "styles/breakpoints";

const Wrapper = styled.div`
  z-index: 999;
  position: absolute;
  bottom: 0;
  right: 10px;
  width: 6rem;

  display: flex;
  flex-wrap: wrap;
  font-size: 6rem;

  color: ${({ theme }) => theme.colors.gray};

  @media ${breakpoints.tablet} {
    display: none;
  }
`;

const Icon = styled.div`
  cursor: pointer;
  transition: 300ms;

  &:hover {
    color: white;

    transform: scale(1.2);
  }

  &:focus {
    outline: none;
    color: ${({ theme }) => theme.colors.lightGray};
  }
`;

export { Wrapper, Icon };
