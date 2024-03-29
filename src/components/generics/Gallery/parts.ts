import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import breakpoints from "styles/breakpoints";

export interface GalleryImageProps {
  content: string;
}

export interface FullScreenImgProps {
  isVisible: boolean;
}
export interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    React.HTMLAttributes<HTMLButtonElement> {}

export const Wrapper = styled.div`
  position: relative;
  grid-area: 1/1/12/13;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;

  overflow-y: auto;
  overflow-x: hidden;

  img {
    margin: 1rem;

    height: 300px;
    width: auto;

    border-radius: 10px;

    user-select: none;

    cursor: pointer;

    &:hover {
      box-shadow: 0 0 0 4px white;
    }
  }
`;

export const GalleryImg = styled.div<GalleryImageProps>`
  position: relative;

  &:after {
    content: "${({ content }) => content}";
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    right: 0;

    text-align: center;
    color: white;

    visibility: hidden;
  }

  &:hover::after {
    visibility: visible;
  }
`;

export const FullScreenImageContainer = styled.div<FullScreenImgProps>`
  z-index: 999;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(150, 150, 150, 0.75);

  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
`;

export const FullScreenImage = styled.img`
  max-width: 1600px;
  max-height: 1200px;
  height: calc(90%);
  width: auto;

  box-shadow: 0 0 0 4px white;

  @media ${breakpoints.laptop} {
    height: auto;
    width: 90%;
  }
`;

export const Button = styled.button<React.HTMLAttributes<HTMLButtonElement>>`
  position: absolute;

  border: none;
  font-size: 4rem;

  color: ${({ theme }) => theme.colors.gray};
  background: none;

  &:focus {
    color: ${({ theme }) => theme.colors.yellow};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

export const CloseButton = styled(Button)`
  top: 0;
  left: 1rem;
`;

export const LeftArrowButton = styled(Button)`
  left: 1rem;
  top: 50%;
`;

export const RightArrowButton = styled(Button)`
  right: 1rem;
  top: 50%;
`;
