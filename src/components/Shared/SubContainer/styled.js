import styled from "styled-components";
import { Link } from "react-router-dom";

import { device } from "../../../GlobalStyles";

const Wrapper = styled.div`
  z-index: 9999;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);

  background-color: rgba(60, 60, 60, 0.98);

  transform: scale(
    ${({ preventLoadingEffect }) => (preventLoadingEffect ? 1 : 0)}
  );

  @media ${device.tablet} {
    overflow-y: auto;
    padding: 1rem;
  }
`;

const ContainerFooter = styled.div`
  grid-area: 12/1/13/-1;

  display: flex;
  align-items: center;

  border-top: 2px solid ${({ theme }) => theme.colors.lightGray};

  background-color: ${({ theme }) => theme.colors.gray};
`;

const StyledLink = styled(Link)`
  margin-left: 1rem;
  font-size: 2.25rem;
  text-decoration: none;

  color: white;

  &:hover {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

export { StyledLink, ContainerFooter, Wrapper };
