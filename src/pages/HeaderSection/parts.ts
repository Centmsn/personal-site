import styled from "styled-components";

import breakpoints from "styles/breakpoints";

export const TitleContainer = styled.div`
  z-index: 3;
  grid-area: 2/2/5/5;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-right: 4px solid ${({ theme }) => theme.colors.yellow};
  border-bottom: 4px solid ${({ theme }) => theme.colors.yellow};
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 0.5rem;
  opacity: 0;

  @media ${breakpoints.laptop} {
    grid-area: 1/1/5/5;
  }

  @media ${breakpoints.tablet} {
    grid-area: 1/1/2/-1;
  }
`;

export const IconWrapper = styled.span`
  margin-right: 10px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const SiteMapContainer = styled.div`
  z-index: 2;
  grid-area: 4/4/8/7;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  background-color: ${({ theme }) => theme.colors.yellow};
  padding: 0 1rem;

  @media ${breakpoints.laptop} {
    grid-area: 4/4/9/8;
  }

  @media ${breakpoints.tablet} {
    grid-area: 4/1/8/-1;
  }

  button {
    position: relative;
    text-align: center;
    border: 2px solid ${({ theme }) => theme.colors.gray};
    background-color: ${({ theme }) => theme.colors.gray};
    color: white;
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.yellow};
      color: ${({ theme }) => theme.colors.gray};
    }
  }

  button:nth-child(2) {
    grid-area: 3/10/4/-1;

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: calc(-100% - 6px);
      height: calc(100% + 4px);

      border-left: 2px solid ${({ theme }) => theme.colors.gray};
    }
  }

  button:nth-child(3) {
    grid-area: 5/6/6/-1;

    &::after {
      content: "";
      position: absolute;
      left: 15%;
      bottom: calc(-100% - 6px);
      height: calc(100% + 4px);

      border-left: 2px solid ${({ theme }) => theme.colors.gray};
    }
  }

  button:nth-child(4) {
    grid-area: 7/2/8/8;

    &::after {
      content: "";
      position: absolute;
      left: 60%;
      bottom: calc(-200% - 10px);
      height: calc(200% + 8px);

      border-left: 2px solid ${({ theme }) => theme.colors.gray};
    }
  }

  button:nth-child(5) {
    grid-area: 10/3/11/9;
  }
`;

export const SiteMapTitleWrapper = styled.div`
  grid-area: 1/6/3/-1;
`;

export const DescriptionContainer = styled.div`
  z-index: 4;
  grid-area: 7/6/10/10;
  font-size: 1.5rem;
  border-left: 4px solid ${({ theme }) => theme.colors.yellow};
  border-top: 4px solid ${({ theme }) => theme.colors.yellow};
  color: white;
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 0.5rem;
  opacity: 0;

  @media ${breakpoints.laptop} {
    grid-area: 8/7/11/12;
  }

  @media ${breakpoints.tablet} {
    grid-area: 8/1/-1/-1;
    border-bottom: 4px solid ${({ theme }) => theme.colors.yellow};
  }
`;

export const Info = styled.div`
  position: relative;
  grid-area: 2/6/5/11;
  font-size: 2.25rem;
  border-left: 4px solid ${({ theme }) => theme.colors.yellow};
  border-bottom: 4px solid ${({ theme }) => theme.colors.yellow};
  background-color: ${({ theme }) => theme.colors.gray};
  color: white;
  padding: 1rem;
  opacity: 0;

  @media ${breakpoints.laptop} {
    grid-area: 1/6/5/12;
  }

  @media ${breakpoints.tablet} {
    grid-area: 2/1/4/-1;
  }
`;

export const Feedback = styled.div`
  grid-area: 13/1/-1/3;
  border-right: 4px solid ${({ theme }) => theme.colors.yellow};
  background-color: ${({ theme }) => theme.colors.gray};
  cursor: pointer;
  transition: 300ms;

  @media ${breakpoints.tablet} {
    display: none;
  }
`;

export const SmallTextContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 30%;
  padding: 3px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.yellow};

  @media ${breakpoints.tablet} {
    left: 0;
  }
`;

export const MainTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;
