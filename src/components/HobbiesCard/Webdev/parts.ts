import styled from "styled-components";
import { motion } from "framer-motion";

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

export const StyledMotionDiv = styled(motion.div)`
  grid-area: 2/2/12/12;
  overflow: auto;
`;
