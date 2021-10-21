import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFull } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Map, Title, Info, Description, Feedback } from "./parts";
import { HeaderSectionProps, MOBILE_INFO, DESKTOP_INFO } from "./constants";
import SectionContainer from "components/SectionContainer/SectionContainer";
import useWindowSize from "hooks/useWindowSize";

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
  const { width } = useWindowSize();

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

  const content = width > 768 ? DESKTOP_INFO : MOBILE_INFO;

  return (
    <SectionContainer isVisible={isVisible} paddingSize="0px">
      <Info ref={infoRef}>
        <p>
          Jeżeli interesują Cię wyłącznie kwestie zawodowe to odsyłam{" "}
          <a href="#/webDev">tutaj</a>.
        </p>

        <small>
          Będzie mi jednak bardzo miło, jeśli zdecydujesz się zwiedzić całą
          stronę.
        </small>
      </Info>
      <Title ref={titleRef}>
        <span>
          <FontAwesomeIcon icon={faSquareFull} />
        </span>
        <h1>Cześć jestem Wojtek</h1>
        <h2>Deweloper z Prudnika</h2>
      </Title>
      <Map ref={mapRef}>
        <h3>Mapa witryny</h3>

        <button onClick={() => slideChange("header")}>Home</button>
        <button onClick={() => slideChange("hobbies")}>Zainteresowania</button>
        <button onClick={() => slideChange("info")}>O mnie</button>
        <button onClick={() => slideChange("contact")}>Kontakt</button>
      </Map>
      <Description ref={descriptionRef}>
        <p>
          <span>
            <FontAwesomeIcon icon={faSquareFull} />
          </span>
          Do poruszania się po witrynie możesz użyc kropek do nawigacji
        </p>

        <p>
          <span>
            <FontAwesomeIcon icon={faSquareFull} />
          </span>
          {content}
        </p>

        {width < 768 && (
          <p>
            <span>
              <FontAwesomeIcon icon={faSquareFull} />
            </span>
            Będę Ci bardzo wdzięczny, jeśli poświecisz chwilę i napiszesz mi co
            sądzisz na temat warstwy wizualnej tej strony.
          </p>
        )}
      </Description>
      <Feedback onClick={() => slideChange("contact")} ref={feedbackRef}>
        <small>
          Poświęć chwilę i napisz co sądzisz o warstwie wizualnej strony.
        </small>

        <small>Sugestie mile widziane.</small>
      </Feedback>
    </SectionContainer>
  );
};

export default HeaderSection;
