import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faPhone,
  faAt,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { FooterSection, FooterWrapper, SectionTitle } from "./styled";

const contactList = [
  { icon: faMapMarkedAlt, desc: "Łódź / Warszawa" },
  { icon: faPhone, desc: "+48 794-364-458" },
  {
    icon: faAt,
    desc: null,
    link: {
      to: "mailto:wojciech.rygorowicz@gmail.com",
      desc: "wojciech.rygorowicz@gmail.com",
      title: "Napisz do mnie",
    },
  },
  {
    icon: faGithub,
    desc: "znajdziesz mnie także na",
    link: {
      to: "https://github.com/Centmsn",
      desc: "Githubie",
      title: "Github",
    },
  },
];

/**
 * functional React component - renders footer section on the screen
 * @function
 * @param {Object} props - React props
 * @returns {JSX.Element}
 */
const Footer = ({ isVisible }) => {
  const ulRef = useRef(null);
  const footerWrapperRef = useRef(null);

  useEffect(() => {
    if (isVisible) {
      const wrapper = footerWrapperRef.current;
      const tl = gsap.timeline({ defaults: { duration: 0.4 } });
      gsap.set(wrapper, { overflow: "hidden" });

      tl.to(wrapper.children, {
        stagger: 0.4,
        delay: 1,
        y: 0,
      }).to(wrapper, { overflow: "auto" });
    }
  }, [isVisible]);

  /**
   * Renders Footer list on the screen
   * @return {Object[]}
   */
  const renderList = () => {
    return contactList.map((element, i) => (
      <li key={i}>
        <span>{element.icon && <FontAwesomeIcon icon={element.icon} />}</span>
        {element.desc}{" "}
        {element.link && (
          <a
            href={element.link.to}
            target="_blank"
            rel="noreferrer"
            title={element.link.title}
          >
            {element.link.desc}
          </a>
        )}
      </li>
    ));
  };

  return (
    <FooterWrapper ref={footerWrapperRef}>
      <FooterSection>
        <SectionTitle>Projekt i wykonanie</SectionTitle>
        <p>
          Stronę zaprojektowałem i wykonałem sam, przy użyciu frameworka React
          oraz kilku mniejszych bibliotek - styled components, gsap, formik, yup
        </p>
      </FooterSection>

      <FooterSection>
        <SectionTitle as="h3">Współpraca</SectionTitle>
        <p>
          Masz dla mnie propozycję współpracy / pracy? A może chcesz wspólnie
          zrealizować jakiś projekt? Nie wahaj się i napisz!<br></br>
          Dane do kontaktu znajdziesz poniżej.
        </p>
      </FooterSection>

      <FooterSection>
        <SectionTitle as="h4">Pozostałe informacje</SectionTitle>
        <ul ref={ulRef}>{renderList()}</ul>
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

        <small>Copyright &#169; 2021 Wojciech Rygorowicz</small>
      </FooterSection>
    </FooterWrapper>
  );
};

Footer.propTypes = {
  /**
   * triggers list visibility
   */
  isVisible: PropTypes.bool.isRequired,
};

export default Footer;
