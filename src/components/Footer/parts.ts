import styled from "styled-components";
import breakpoints from "styles/breakpoints";

export const FooterWrapper = styled.footer`
  position: relative;
  flex-basis: 45%;

  @media ${breakpoints.tablet} {
    flex-basis: 100%;
  }
`;

export const FooterSection = styled.footer`
  position: relative;
  transform: translateY(100vh);

  /* font-size: 1.25rem; */

  p {
    text-align: justify;
  }

  span {
    margin-right: 5px;
  }
`;

export const TitleWrapper = styled.div`
  margin: 15px 0;
  border-right: 4px solid ${({ theme }) => theme.colors.yellow};
  background-color: ${({ theme }) => theme.colors.gray};
`;
