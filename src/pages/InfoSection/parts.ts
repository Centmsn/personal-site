import styled from "styled-components";
import breakpoints from "styles/breakpoints";

export interface SkillBarProps {
  content: string;
}

export const Wrapper = styled.div`
  grid-area: 1/1/12/11;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;

  @media ${breakpoints.laptop} {
    grid-area: 1/1/-1/-1;
  }

  @media ${breakpoints.tablet} {
    grid-area: 1/1/-2/-1;
    overflow-y: auto;
  }
`;

export const Summary = styled.section`
  flex-basis: 30%;
  text-align: center;
  padding: 1rem;

  @media ${breakpoints.tablet} {
    flex-basis: 100%;

    border: none;
  }

  img {
    margin: 0 auto;
    width: 60%;
    height: auto;
    display: block;
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.yellow}, 0 0 0 6px white, 0 0 0 8px white,
      0 0 0 10px ${({ theme }) => theme.colors.gray};
    border-radius: 50%;
  }

  ul {
    width: 100%;
  }

  li {
    font-size: 1.5rem;
  }
`;

export const SkillBar = styled.div<SkillBarProps>`
  position: relative;
  margin: 0 auto;

  width: 75%;
  height: 25px;

  display: flex;

  border: 2px solid black;
  padding: 2px 0;

  @media ${breakpoints.laptop} {
    width: 100%;
  }

  &::after {
    content: "${({ content }) => content}";
    position: absolute;
    left: -3px;
    bottom: calc(-1.75rem - 10px);

    color: white;
    background-color: ${({ theme }) => theme.colors.gray};

    padding: 0 5px;
    opacity: 0;
    transition: opacity 300ms;
  }

  &:hover::after {
    opacity: 1;
  }
`;

export const InnerBar = styled.div`
  margin-left: 3px;
  width: calc(5% - 3px);
  height: 100%;

  transform-origin: left;

  border: 1px solid ${({ theme }) => theme.colors.gray};

  background-color: ${({ theme }) => theme.colors.yellow};

  opacity: 0;
`;

export const Description = styled.section`
  flex-basis: 70%;

  text-align: justify;
  font-size: 1.25rem;
  padding: 1rem;

  overflow-y: auto;

  h1 {
    line-height: 3rem;
    margin-bottom: 2rem;
  }

  @media ${breakpoints.tablet} {
    flex-basis: 100%;
  }
`;
