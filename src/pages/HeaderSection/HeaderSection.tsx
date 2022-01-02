import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFull } from "@fortawesome/free-solid-svg-icons";
import Text, { TextSize } from "components/generics/Text";
import Title, { TitleSize, TitleVariant } from "components/generics/Title";
import Link from "components/generics/Link";
import { HeaderSectionProps, MOBILE_INFO, DESKTOP_INFO } from "./constants";
import SectionContainer from "components/SectionContainer/SectionContainer";
import useWindowSize from "hooks/useWindowSize";
import * as P from "./parts";

/**
 * React functional component - renders header section on the screen
 * @returns {JSX.Element}
 */
const HeaderSection = ({ isVisible, slideChange }: HeaderSectionProps) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useWindowSize();

  useEffect(() => {
    const title = titleRef.current;
    const info = infoRef.current;
    const description = descriptionRef.current;
    const feedback = feedbackRef.current;

    gsap.set(title, { x: "50%", y: "50%" });
    gsap.set(info, { x: "-50%", y: "50%" });
    gsap.set(description, { x: "-50%", y: "-50%" });
    gsap.set(feedback, { x: "-150%" });

    const tl = gsap.timeline({
      defaults: { ease: "back.out(1.7)", autoAlpha: 1, duration: 0.3 },
    });

    tl.to(title, {
      x: 0,
      y: 0,
      delay: 1,
    })
      .to(info, {
        x: 0,
        y: 0,
      })
      .to(description, {
        x: 0,
        y: 0,
      })
      .to(feedback, {
        x: 0,
      });
  }, []);

  const content = isMobile ? MOBILE_INFO : DESKTOP_INFO;

  return (
    <SectionContainer isVisible={isVisible} paddingSize="0px">
      <P.Info ref={infoRef}>
        <Text size={TextSize["2xl"]} light>
          Jeżeli interesują Cię wyłącznie kwestie zawodowe to odsyłam{" "}
          <Link to="webDev" light>
            tutaj
          </Link>
        </Text>

        <P.SmallTextContainer>
          <Text size={TextSize.s}>Będzie mi jednak bardzo miło, jeśli zdecydujesz się zwiedzić całą stronę.</Text>
        </P.SmallTextContainer>
      </P.Info>

      <P.TitleContainer ref={titleRef}>
        <P.MainTitleWrapper>
          <P.IconWrapper>
            <FontAwesomeIcon icon={faSquareFull} />
          </P.IconWrapper>
          <Title variant={TitleVariant.yellow} size={TitleSize["2xl"]}>
            Cześć jestem Wojtek
          </Title>
        </P.MainTitleWrapper>

        <Title as="h2" variant={TitleVariant.white} size={TitleSize.xl} align="left" fullwidth>
          Deweloper z Prudnika
        </Title>
      </P.TitleContainer>

      <P.SiteMapContainer ref={mapRef}>
        <P.SiteMapTitleWrapper>
          <Title as="h3" align="right" fullwidth>
            Mapa witryny
          </Title>
        </P.SiteMapTitleWrapper>

        <button onClick={() => slideChange("header")}>Home</button>
        <button onClick={() => slideChange("hobbies")}>Zainteresowania</button>
        <button onClick={() => slideChange("info")}>O mnie</button>
        <button onClick={() => slideChange("contact")}>Kontakt</button>
      </P.SiteMapContainer>

      <P.DescriptionContainer ref={descriptionRef}>
        <Text light size={TextSize.l}>
          <P.IconWrapper>
            <FontAwesomeIcon icon={faSquareFull} />
          </P.IconWrapper>
          Do poruszania się po witrynie możesz użyc kropek do nawigacji
        </Text>

        <Text light>
          <P.IconWrapper>
            <FontAwesomeIcon icon={faSquareFull} />
          </P.IconWrapper>
          {content}
        </Text>

        {isMobile && (
          <Text light>
            <P.IconWrapper>
              <FontAwesomeIcon icon={faSquareFull} />
            </P.IconWrapper>
            Będę Ci bardzo wdzięczny, jeśli poświecisz chwilę i napiszesz mi co sądzisz na temat warstwy wizualnej tej
            strony.
          </Text>
        )}
      </P.DescriptionContainer>

      <P.Feedback onClick={() => slideChange("contact")} ref={feedbackRef}>
        <Text size={TextSize.s} light>
          Poświęć chwilę i napisz co sądzisz o warstwie wizualnej strony.
        </Text>

        <Text size={TextSize.s} light>
          Sugestie mile widziane.
        </Text>
      </P.Feedback>
    </SectionContainer>
  );
};

export default HeaderSection;
