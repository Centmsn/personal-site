import styled from "styled-components";
import { Link } from "react-router-dom";

import breakpoints from "styles/breakpoints";

const StyledLink = styled(Link)`
  position: relative;
  grid-area: ${({ area }) => area};

  display: flex;
  align-items: center;

  border-radius: 5px;

  font-size: 1.25rem;
  text-align: justify;
  text-decoration: none;

  background-color: ${({ theme }) => theme.colors.gray};
  color: white;

  padding: 10px;
  cursor: pointer;

  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.colors.lightGray};
  }

  img {
    float: right;
    margin: 0 10px;

    border-radius: 50%;
    box-shadow: 0 0 0 2px white;

    @media ${breakpoints.mobilesL} {
      height: 80%;
    }
  }

  &::after {
    content: "Przejdź do tej sekcji";
    position: absolute;
    bottom: calc(-2rem - 1.5rem);
    left: 0;

    transform: translateX(50px);

    font-size: 1.75rem;
    font-family: ${({ theme }) => theme.fonts.title};

    background-color: ${({ theme }) => theme.colors.gray};
    padding: 0 10px;

    opacity: 0;
    transition: 300ms;

    @media ${breakpoints.tablet} {
      display: none;
    }
  }

  &:hover&::after {
    transform: translateX(0);
    opacity: 1;
  }
`;

const CardTitle = styled.div`
  position: absolute;
  bottom: calc(-2rem - 1.5rem);
  right: 0;
  transform: translateX(50px);

  border-right: 4px solid ${({ theme }) => theme.colors.yellow};

  font-size: 1.75rem;
  font-family: ${({ theme }) => theme.fonts.title};

  color: ${({ theme }) => theme.colors.yellow};
  background-color: ${({ theme }) => theme.colors.gray};
  opacity: 0;

  padding: 0 1rem;
`;

const SectionInfo = styled.aside`
  grid-area: 5/1/7/3;
  transform: translateX(-50vw);

  display: flex;
  align-items: center;

  border-right: 4px solid ${({ theme }) => theme.colors.gray};

  font-size: 1.75rem;
  font-family: ${({ theme }) => theme.fonts.title};
  line-height: 1.6rem;
  text-align: center;

  background-color: ${({ theme }) => theme.colors.yellow};

  color: ${({ theme }) => theme.colors.gray};

  opacity: 0;
  padding: 0 5px;

  @media ${breakpoints.tablet} {
    display: none;
  }
`;

const BorderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: white;
`;

const Border = styled.div`
  position: absolute;

  transform: scaleX(0);
  transform-origin: left;

  background-color: ${({ theme }) => theme.colors.gray};
`;

const BorderBottom = styled(Border)`
  left: 0;
  right: 0;
  bottom: 0;

  height: 4px;
`;
const BorderTop = styled(Border)`
  left: 0;
  right: 0;
  top: 0;

  height: 4px;
`;
const BorderLeft = styled(Border)`
  left: 0;
  top: 0;
  bottom: 0;

  transform: scaleY(0);
  transform-origin: bottom;

  width: 4px;
`;
const BorderRight = styled(Border)`
  top: 0;
  right: 0;
  bottom: 0;

  transform: scaleY(0);
  transform-origin: top;

  width: 4px;
  background-color: ${({ theme }) => theme.colors.yellow};
`;

const CardHolder = styled.div`
  grid-area: 4/2/8/2;
  border-left: 4px solid ${({ theme }) => theme.colors.gray};

  transform: scaleY(0);
  transform-origin: bottom;

  @media ${breakpoints.tablet} {
    display: none;
  }
`;

const CardHolder2 = styled.div`
  grid-area: 5/2/6/4;
  border-bottom: 4px solid ${({ theme }) => theme.colors.gray};

  transform: scaleX(0);
  transform-origin: left;

  @media ${breakpoints.tablet} {
    display: none;
  }
`;

const CardHolder3 = styled.div`
  grid-area: 10/2/14/2;
  border-left: 4px solid ${({ theme }) => theme.colors.gray};

  transform: scaleY(0);
  transform-origin: bottom;

  @media ${breakpoints.tablet} {
    grid-area: 1/1/14/1;
  }
`;

export {
  StyledLink,
  CardHolder,
  CardHolder2,
  CardHolder3,
  BorderRight,
  BorderLeft,
  BorderTop,
  BorderBottom,
  CardTitle,
  SectionInfo,
  BorderContainer,
};
