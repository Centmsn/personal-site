import styled from "styled-components";
import Title from "components/generics/Title";
import breakpoints from "styles/breakpoints";

export const Wrapper = styled.div`
  grid-area: 2/2/12/12;
  display: flex;
  flex-wrap: wrap;
`;

export const SlideSection = styled.section`
  flex-basis: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;

  &:not(:last-child) {
    border-bottom: 2px solid ${({ theme }) => theme.colors.lightGray};
  }
`;

export const ProjectTitle = styled(Title)`
  width: auto;
`;

export const ProjectImage = styled.img`
  width: 100%;
  box-shadow: 0px 3px 0px 0px rgba(60, 60, 60, 0.98), 0px 4px 0px 0px ${({ theme }) => theme.colors.yellow},
    0px 7px 0px 0px rgba(60, 60, 60, 0.98), 0px 8px 0px 0px ${({ theme }) => theme.colors.yellow};
`;

export const ImageWrapper = styled.div`
  width: 50%;

  @media ${breakpoints.tablet} {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const TextWrapper = styled.div`
  width: 50%;
  padding-left: 10px;

  @media ${breakpoints.tablet} {
    width: 100%;
  }
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  margin-bottom: 25px;
  display: flex;
  flex-wrap: wrap;
  text-align: justify;
`;

export const SectionLink = styled.a`
  position: relative;
  font-size: 1.5rem;
  text-decoration: none;
  border: 2px solid ${({ theme }) => theme.colors.yellow};
  color: white;
  padding: 5px;
  transition: color 400ms;

  &:not(&:first-child) {
    margin-left: 2rem;
  }

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

export const Test = styled.div``;
