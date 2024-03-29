import styled from "styled-components";
import breakpoints from "styles/breakpoints";

export interface SendingFeedbackProps {
  hasError: boolean;
}

export interface FormTooltipProps {
  isActive: boolean;
}

export const Wrapper = styled.div`
  grid-area: 1/1/12/11;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  @media ${breakpoints.laptop} {
    overflow-y: auto;
  }

  @media ${breakpoints.tablet} {
    grid-area: 1/1/-2/-1;

    padding: 1rem;
  }
`;

export const Form = styled.form`
  flex-basis: 45%;
  position: relative;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media ${breakpoints.tablet} {
    flex-basis: 100%;
  }
`;

export const FormSection = styled.div`
  position: relative;
  flex-basis: 100%;
  margin-bottom: 25px;

  display: flex;
  justify-content: center;
`;

export const SendingFeedback = styled.div<SendingFeedbackProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  transform: translateY(-100vh);

  font-size: 2rem;
  text-align: center;

  opacity: 0;
  visibility: hidden;

  span {
    font-size: 10rem;
    color: ${({ hasError, theme }) =>
      hasError ? theme.colors.yellow : "rgb(98, 168, 116)"};
  }
`;

export const FormTooltip = styled.span<FormTooltipProps>`
  position: absolute;
  top: calc(-1.25rem - 10px);
  left: 0;
  right: 0;
  transform: translateY(${({ isActive }) => (isActive ? 0 : "-10px")});

  font-size: 1.25rem;
  text-align: center;

  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.gray};

  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: 300ms;

  @media ${breakpoints.tablet} {
    font-size: 1.5rem;
  }
`;

export const FormTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  text-shadow: 4px 4px 0 ${({ theme }) => theme.colors.yellow};

  color: ${({ theme }) => theme.colors.gray};
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 1.75rem;

  border: 4px solid ${({ theme }) => theme.colors.gray};

  font-size: 1.5rem;

  resize: none;
  padding: 5px;

  &:focus {
    background-color: ${({ theme }) => theme.colors.yellow};
  }
`;

export const Button = styled.button`
  position: relative;
  width: 200px;

  box-shadow: 0 0 0 5px ${({ theme }) => theme.colors.yellow};

  font-size: 1.75rem;
  font-family: ${({ theme }) => theme.fonts.title};
  letter-spacing: 2px;

  color: white;
  background-color: ${({ theme }) => theme.colors.gray};

  transition: 300ms;

  &:hover,
  &:focus {
    box-shadow: 0 0 0 4px white, 0 0 0 9px ${({ theme }) => theme.colors.yellow};
  }

  &:hover img {
    transform: translate(100px);
    opacity: 1;
  }

  &:disabled {
    color: gray;

    box-shadow: 0 0 0 4px white, 0 0 0 9px ${({ theme }) => theme.colors.gray};
  }

  img {
    z-index: -1;
    position: absolute;

    opacity: 0;
    transition: 300ms;
  }
`;
