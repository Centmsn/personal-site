import round_self2 from "../../assets/round_self2.jpg";

import gsap from "gsap";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

import SectionContainer from "../SectionContainer/SectionContainer";
import { device } from "../../GlobalStyles";

const InfoSection = ({ isVisible }) => {
  const [firstRender, setFirstRender] = useState(true);
  const skillListRef = useRef(null);
  const bars = [
    { title: "Angielski", percent: 75, desc: "Poziom B2/C1" },
    { title: "Javascript", percent: 65, desc: "65%" },
    { title: "Typescript", percent: 30, desc: "30%" },
    { title: "CSS", percent: 80, desc: "80%" },
    { title: "HTML", percent: 65, desc: "65%" },
  ];

  useEffect(() => {
    if (isVisible && firstRender) {
      setFirstRender(false);

      const listElement = skillListRef.current.children;
      const tl = gsap.timeline({ defaults: { duration: 0.2 } });

      tl.to(listElement[0].lastChild.children, {
        stagger: 0.2,
        autoAlpha: 1,
      })
        .to(
          listElement[1].lastChild.children,
          { stagger: 0.1, autoAlpha: 1 },
          "-=0.5"
        )
        .to(
          listElement[2].lastChild.children,
          { stagger: 0.2, autoAlpha: 1 },
          "-=2"
        )
        .to(
          listElement[3].lastChild.children,
          { stagger: 0.2, autoAlpha: 1 },
          "-=3"
        )
        .to(
          listElement[4].lastChild.children,
          { stagger: 0.1, autoAlpha: 1 },
          "-=2.5"
        );
    }
  }, [isVisible, firstRender]);

  /**
   * Renders skills bars on the screen
   */
  const renderBars = () => {
    return bars.map((bar) => {
      const skillBarElements = [];

      for (let i = 0; i < Math.floor(bar.percent / 5); i++) {
        skillBarElements.push(<InnerBar key={i} />);
      }

      return (
        <li key={bar.title}>
          {bar.title}
          <SkillBar content={bar.desc}>{skillBarElements}</SkillBar>
        </li>
      );
    });
  };

  return (
    <SectionContainer isVisible={isVisible}>
      <Wrapper>
        <Summary>
          <img src={round_self2} alt="Autor" />
          <h4>Co umiem?</h4>
          <ul ref={skillListRef}>{renderBars()}</ul>

          <small>Subiektywna ocena umiejętności</small>
        </Summary>

        <Description>
          <article>
            <Title>Krótko o mnie</Title>

            <p>
              Informacje które znajdziesz poniżej dotyczą w większej części
              mojego życia prywatnego niż zawodowego - jeżeli interesuje Cię
              tylko aspekt zawodowy to odsyłam <a href="#/webdev">tutaj</a>
            </p>

            <p>
              Jak już zapewne wiesz jestem Wojtek i pochodzę z Prudnika, choć
              aktualnie mieszkam w Łodzi. W życiu kieruję się zasadą by robić
              to, co daje przyjemność - w moim przypadku jest to ścieżka
              front-end developera, jeżeli mowa o pracy, oraz taternika /
              alpinisty jeśli chodzi o czas wolny. Wiąże się to z tym, że często
              bywam w górach, a co za tym idzie, równie często trafiam, na jakiś
              ładny widok, coś co jest ciekawe i staram się to uwiecznić - tak
              doszło w moim życiu do narodzenia kolejnego hobby czyli
              fotografii. Co prawda w tej dziedzinie jestem totalnym amatorem,
              nie posiadam nawet profesjonalnego aparatu, więc nie spodziewaj
              się, że moje zdjęcią są jakości tych z National Geographic
              &#9786;. Prawdę mówiąc nie znam się nawet na ich obróbce, a na
              zgłębianie tajników tej sztukii po prostu brakuje mi czasu.
            </p>

            <p>
              Uważam się za lokalnego patriotę. Tak, tak, wiem - nie mieszkam w
              Prudniku, a się wymądrzam. Jednak ta decyzja jest podyktowana
              wieloma czynnikami:
            </p>

            <ol>
              <li>
                Chęć rozwoju osobistego i zawodowego co znacznie łatwiejsze jest
                w dużym mieście.
              </li>

              <li>
                Bardzo trudno znaleźć w okolicy zatrudnienie które odpowiada
                mojej pasji.
              </li>

              <li>
                I na koniec - moja druga połówka jest z Łodzi... wiem, mało
                obiektywny argument
              </li>
            </ol>

            <p>
              Wracając do mojego poczucia lokalnego patriotyzmu - dosyć często w
              Prudniku bywam, uwielbiam jeździć na rowerze po okolicznych lasach
              i górach, o każdej porze roku i w każdych warunkach. Zdjęcia z
              niektórych przejażdżek znajdziesz{" "}
              <a href="#/photography">TUTAJ</a>. Będzie mi bardzo miło jeśli
              rzucisz okiem, być może spodoba Ci się na tyle, że zechesz Prudnik
              odwiedzić. Jeśli tak to koniecznie zajrzyj do sklepy Google Play
              (Android) i pobierz aplikację Prudnik. Możesz także napisać do
              mnie - chętnie odpowiem na Twoje pytania.
            </p>
          </article>
        </Description>
      </Wrapper>
    </SectionContainer>
  );
};

const Wrapper = styled.div`
  grid-area: 2/2/12/12;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  overflow-y: auto;

  @media ${device.tablet} {
    grid-area: 1/1/-2/-1;
  }
`;

const Summary = styled.section`
  grid-area: 2/1/12/4;

  border-right: 4px solid ${({ theme }) => theme.colors.gray};

  text-align: center;
  padding: 20px;

  overflow-y: auto;

  @media ${device.laptop} {
    grid-area: 1/1/-1/5;
  }

  @media ${device.tablet} {
    grid-area: 1/1/-3/-1;

    border: none;
  }

  img {
    margin: 0 auto;
    width: 60%;
    height: auto;

    display: block;

    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.yellow}, 0 0 0 6px white,
      0 0 0 8px white, 0 0 0 10px ${({ theme }) => theme.colors.gray};
    border-radius: 50%;
  }

  h4 {
    font-size: 1.75rem;
    text-shadow: none;

    color: ${({ theme }) => theme.colors.gray};
  }

  ul {
    width: 100%;
  }

  li {
    font-size: 1.5rem;
  }
`;

const SkillBar = styled.div`
  position: relative;
  margin: 0 auto;

  width: 75%;
  height: 25px;

  display: flex;

  border: 2px solid black;
  padding: 2px 0;

  @media ${device.laptop} {
    width: 100%;
  }

  &::after {
    content: "${({ content }) => content}";
    position: absolute;
    left: -3px;
    bottom: calc(-1.75rem - 10px);

    color: white;
    background-color: ${({ theme }) => theme.colors.gray};

    padding: 0 5px;
    opacity: 0;
    transition: opacity 300ms;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const InnerBar = styled.div`
  margin-left: 3px;
  width: calc(5% - 3px);
  height: 100%;

  transform-origin: left;

  border: 1px solid ${({ theme }) => theme.colors.gray};

  background-color: ${({ theme }) => theme.colors.yellow};

  opacity: 0;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 5rem;
`;

const Description = styled.section`
  grid-area: 2/4/12/10;

  text-align: justify;
  font-size: 1.25rem;
  padding: 1rem;

  overflow: auto;

  @media ${device.laptop} {
    grid-area: 1/5/-1/-1;
  }

  @media ${device.tablet} {
    grid-area: 8/1/-1/-1;
  }
`;

export default InfoSection;
