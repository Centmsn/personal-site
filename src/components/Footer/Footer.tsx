import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ContactList from "./ContactList";
import Link from "components/generics/Link";
import Text, { TextSize } from "components/generics/Text";
import Title, { TitleVariant, TitleSize } from "components/generics/Title";
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
        <P.TitleWrapper>
          <Title variant={TitleVariant.white} as="h4">
            Projekt i wykonanie
          </Title>
        </P.TitleWrapper>
        <Text>
          Stronę zaprojektowałem i wykonałem sam, przy użyciu Typescripta, Reacta, oraz kilku mniejszych bibliotek -
          styled components, gsap, formik, yup. Dodatkowo posłużyłem się Contentful - headless CMS
        </Text>
      </P.FooterSection>

      <P.FooterSection>
        <P.TitleWrapper>
          <Title variant={TitleVariant.white} size={TitleSize.s} as="h4">
            Współpraca
          </Title>
        </P.TitleWrapper>
        <Text>
          Masz dla mnie propozycję współpracy / pracy? A może chcesz wspólnie zrealizować jakiś projekt? Nie wahaj się i
          napisz!<br></br>
          Dane do kontaktu znajdziesz poniżej.
        </Text>
      </P.FooterSection>

      <P.FooterSection>
        <P.TitleWrapper>
          <Title variant={TitleVariant.white} size={TitleSize.xs} as="h4">
            Pozostałe informacje
          </Title>
        </P.TitleWrapper>
        <ContactList listData={CONTACT_LIST} />
      </P.FooterSection>

      <P.FooterSection>
        <Text size={TextSize.small}>
          Icons made by{" "}
          <Link to="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </Link>{" "}
          from{" "}
          <Link to="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </Link>
        </Text>

        <Text size={TextSize.small}>Copyright &#169; {new Date().getFullYear()} Wojciech Rygorowicz</Text>
      </P.FooterSection>
    </P.FooterWrapper>
  );
};

export default Footer;
