import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ContactList from "./ContactList";
import PropTypes from "prop-types";
import { CONTACT_LIST, FooterProps } from "./constants";
import * as P from "./parts";

const Footer = ({ isVisible }: FooterProps) => {
  const footerWrapperRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const wrapper = footerWrapperRef.current;
    if (isVisible && wrapper) {
      const tl = gsap.timeline({ defaults: { duration: 0.4 } });
      gsap.set(wrapper, { overflow: "hidden" });

      tl.to(wrapper.children, {
        stagger: 0.4,
        delay: 1,
        y: 0,
      }).to(wrapper, { overflow: "auto" });
    }
  }, [isVisible]);

  return (
    <P.FooterWrapper ref={footerWrapperRef}>
      <P.FooterSection>
        <P.SectionTitle>Projekt i wykonanie</P.SectionTitle>
        <p>
          Stronę zaprojektowałem i wykonałem sam, przy użyciu Typescripta, Reacta, oraz kilku mniejszych bibliotek -
          styled components, gsap, formik, yup. Dodatkowo posłużyłem się Contentful - headless CMS
        </p>
      </P.FooterSection>

      <P.FooterSection>
        <P.SectionTitle as="h3">Współpraca</P.SectionTitle>
        <p>
          Masz dla mnie propozycję współpracy / pracy? A może chcesz wspólnie zrealizować jakiś projekt? Nie wahaj się i
          napisz!<br></br>
          Dane do kontaktu znajdziesz poniżej.
        </p>
      </P.FooterSection>

      <P.FooterSection>
        <P.SectionTitle as="h4">Pozostałe informacje</P.SectionTitle>
        <ContactList listData={CONTACT_LIST} />
      </P.FooterSection>

      <P.FooterSection>
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

        <small>Copyright &#169; {new Date().getFullYear()} Wojciech Rygorowicz</small>
      </P.FooterSection>
    </P.FooterWrapper>
  );
};

Footer.propTypes = {
  /**
   * triggers list visibility
   */
  isVisible: PropTypes.bool.isRequired,
};

export default Footer;
