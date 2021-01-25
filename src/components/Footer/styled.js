import styled from "styled-components";

import { device } from "../../GlobalStyles";

const FooterWrapper = styled.footer`
  position: relative;
  flex-basis: 45%;

  @media ${device.tablet} {
    flex-basis: 100%;
  }
`;

const FooterSection = styled.footer`
  position: relative;
  transform: translateY(100vh);

  font-size: 1.25rem;

  p {
    text-align: justify;
  }

  span {
    margin-right: 5px;
  }
`;

const SectionTitle = styled.h2`
  margin: 15px 0;

  border-right: 4px solid ${({ theme }) => theme.colors.yellow};

  text-align: center;
  text-shadow: none;

  color: white;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export { FooterWrapper, FooterSection, SectionTitle };
