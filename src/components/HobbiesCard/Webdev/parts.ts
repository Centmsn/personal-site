import styled from "styled-components";
import breakpoints from "styles/breakpoints";

interface StartSectionProps {
  isVisible: boolean;
}

export const StartSection = styled.section<StartSectionProps>`
  grid-area: 2/2/11/12;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;

  color: white;

  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  overflow-y: auto;

  @media ${breakpoints.laptop} {
    margin-bottom: calc(100vh / 12);
    grid-area: 1/2/-1/12;

    overflow-y: scroll;
  }

  small {
    color: ${({ theme }) => theme.colors.smokedWhite};
  }
`;

export const ListSection = styled.section`
  flex-basis: 21%;

  padding: 10px;

  @media ${breakpoints.laptop} {
    flex-basis: 100%;
  }
`;

export const Summary = styled.section`
  flex-basis: 47%;

  padding: 10px;

  @media ${breakpoints.laptop} {
    flex-basis: 100%;
  }

  section {
    margin-bottom: 1rem;

    display: flex;
    justify-content: space-around;
  }

  img {
    width: 75%;
    max-width: 500px;
  }

  h1 {
    font-size: 2rem;
  }

  p {
    margin-bottom: 1rem;

    text-align: justify;
    font-size: 1.25rem;
  }

  a {
    display: block;

    font-size: 1.75rem;
    text-align: center;

    color: white;

    &:hover {
      color: ${({ theme }) => theme.colors.yellow};
    }
  }
`;

export const ProgressBar = styled.div`
  position: relative;
  width: 100%;
  height: 10px;

  background-color: ${({ theme }) => theme.colors.lightGray};

  overflow: hidden;
`;

interface InnerBarProps {
  width: number;
}

export const InnerBar = styled.div<InnerBarProps>`
  width: ${({ width }) => width}%;
  height: 100%;
  transform: scaleX(5);
  transform-origin: left;

  background-color: ${({ theme }) => theme.colors.yellow};
`;

export const Arrow = styled.button`
  font-size: 7rem;

  color: ${({ disabled, theme }) => (disabled ? theme.colors.lightGray : theme.colors.yellow)};

  background: none;
  transition: 300ms;

  &:hover {
    transform: scale(1.2);
    color: ${({ disabled, theme }) => (disabled ? theme.colors.lightGray : theme.colors.yellow)};
  }
`;

export const LeftArrow = styled(Arrow)`
  grid-area: 6/1/8/2;
`;

export const RightArrow = styled(Arrow)`
  grid-area: 6/12/8/13;
`;
