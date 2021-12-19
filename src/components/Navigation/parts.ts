import styled from "styled-components";

interface NavDotProps {
  isActive: boolean;
  description: string;
}

const Wrapper = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;

  transform: translateX(-50%);

  display: flex;
`;

const NavDot = styled.div<NavDotProps>`
  width: 15px;
  height: 15px;
  margin: 0 15px;

  border-radius: 50%;
  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.gray}, 0 0 0 4px white,
    0 0 0 6px
      ${({ theme, isActive }) => (isActive ? theme.colors.gray : "transparent")};
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.yellow : "none"};

  cursor: pointer;
  transition: 300ms;

  &::before {
    content: "${({ description }) => description}";
    position: absolute;

    top: -50px;
    left: 50%;
    transform: translateX(-50%);

    font-size: 1.75rem;
    letter-spacing: 3px;

    color: white;
    background-color: ${({ theme }) => theme.colors.gray};

    padding: 0 5px;

    opacity: 0;
    visibility: hidden;
  }

  &:hover&::before {
    opacity: 1;
    visibility: visible;
  }

  &:hover {
    background-color: ${({ theme, isActive }) =>
      isActive ? theme.colors.yellow : theme.colors.gray};
  }
`;

export { NavDot, Wrapper };
