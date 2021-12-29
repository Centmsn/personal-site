import styled from "styled-components";
import { Link } from "react-router-dom";
import breakpoints from "styles/breakpoints";

interface WrapperProps {
  shouldPreventLoadingEffect: boolean;
}

const Wrapper = styled.div<WrapperProps>`
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
    ${({ shouldPreventLoadingEffect }) => (shouldPreventLoadingEffect ? 1 : 0)}
  );

  @media ${breakpoints.tablet} {
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
