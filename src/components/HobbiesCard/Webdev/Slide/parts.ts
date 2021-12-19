import styled from "styled-components";
import breakpoints from "styles/breakpoints";

interface WrapperProps {
  isVisible: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  grid-area: 2/2/12/12;

  display: flex;
  flex-wrap: wrap;

  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
`;

export const SlideSection = styled.section`
  flex-basis: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  text-align: center;
  font-size: 1.5rem;
  color: white;

  h1 {
    flex-basis: 100%;

    font-size: 3rem;
  }

  p {
    text-align: justify;
  }

  img {
    height: auto;
    width: 60%;

    box-shadow: 0 0 0 2px rgba(60, 60, 60, 0.98),
      0 0 0 4px ${({ theme }) => theme.colors.yellow},
      0 0 0 6px rgba(60, 60, 60, 0.98),
      0 0 0 8px ${({ theme }) => theme.colors.yellow};

    transition: 300ms;

    @media ${breakpoints.laptop} {
      width: 90%;
    }

    &:hover {
      box-shadow: 0 0 0 2px rgba(60, 60, 60, 0.98),
        0 0 0 4px ${({ theme }) => theme.colors.yellow},
        0 0 0 10px rgba(60, 60, 60, 0.98),
        0 0 0 12px ${({ theme }) => theme.colors.yellow};
    }
  }
`;

export const SectionLink = styled.a`
  position: relative;
  margin: 0 3rem;

  font-size: 2rem;
  text-decoration: none;

  border: 2px solid ${({ theme }) => theme.colors.yellow};
  color: white;

  padding: 5px;
  transition: color 400ms;

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;

    background-color: ${({ theme }) => theme.colors.yellow};
    clip-path: circle(0 at bottom center);

    transition: clip-path 300ms linear;
  }

  &:hover::after {
    clip-path: circle(100% at bottom center);
  }

  &:hover {
    color: ${({ theme }) => theme.colors.gray};
  }
`;
