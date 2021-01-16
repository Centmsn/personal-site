import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterSection>
        <h2>Projekt i wykonanie</h2>
        <p>
          Stronę zaprojektowałem i wykonałem sam, przy użyciu frameworka React
          oraz kilku mniejszych bibliotek - styled components, gsap, formik, yup
        </p>
      </FooterSection>

      <FooterSection>
        <h3>Pozostałe informacje</h3>
        <ul>
          <li>
            <span>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </span>
            Łódź / Warszawa
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faPhone} />
              +48 794-364-458
            </span>
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faAt} />
              wojciech.rygorowicz@gmail.com
            </span>
          </li>
        </ul>
      </FooterSection>

      <FooterSection>
        <small>
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </small>
      </FooterSection>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  grid-area: 2/7/11/10;
`;

const FooterSection = styled.footer`
  font-size: 1.5rem;
  h2,
  h3 {
    text-shadow: none;

    color: white;
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;

export default Footer;
