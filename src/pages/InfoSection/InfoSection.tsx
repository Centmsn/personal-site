import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SectionContainer from "components/SectionContainer/SectionContainer";
import round_self2 from "assets/round_self2.jpg";
import * as P from "./parts";

interface InfoSectionProps {
  isVisible: boolean;
}

const InfoSection = ({ isVisible }: InfoSectionProps) => {
  const [firstRender, setFirstRender] = useState(true);
  const skillListRef = useRef<HTMLUListElement>(null!);
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

      //! Changed from children to childNoes
      const listElement = skillListRef.current.children;
      const tl = gsap.timeline({ defaults: { duration: 0.2 } });

      tl.to(listElement[0].lastChild!.childNodes, {
        stagger: 0.2,
        autoAlpha: 1,
      })
        .to(
          listElement[1].lastChild!.childNodes,
          { stagger: 0.1, autoAlpha: 1 },
          "-=0.5"
        )
        .to(
          listElement[2].lastChild!.childNodes,
          { stagger: 0.2, autoAlpha: 1 },
          "-=2"
        )
        .to(
          listElement[3].lastChild!.childNodes,
          { stagger: 0.2, autoAlpha: 1 },
          "-=3"
        )
        .to(
          listElement[4].lastChild!.childNodes,
          { stagger: 0.1, autoAlpha: 1 },
          "-=2.5"
        );
    }
  }, [isVisible, firstRender]);

  const renderBars = () => {
    return bars.map(bar => {
      const skillBarElements = [];

      for (let i = 0; i < Math.floor(bar.percent / 5); i++) {
        skillBarElements.push(<P.InnerBar key={i} />);
      }

      return (
        <li key={bar.title}>
          {bar.title}
          <P.SkillBar content={bar.desc}>{skillBarElements}</P.SkillBar>
        </li>
      );
    });
  };

  return (
    <SectionContainer isVisible={isVisible} paddingSize="0px">
      <P.Wrapper>
        <P.Summary>
          <img src={round_self2} alt="Autor" />
          <h4>Co umiem?</h4>
          <ul ref={skillListRef}>{renderBars()}</ul>

          <small>Subiektywna ocena umiejętności</small>
        </P.Summary>

        <P.Description>
          <article>
            <P.Title>Krótko o mnie</P.Title>
            <p>
              Informacje które znajdziesz poniżej dotyczą w większej części
              mojego życia prywatnego niż zawodowego - jeżeli interesuje Cię
              tylko aspekt zawodowy to odsyłam <a href="#/webdev">tutaj</a>
            </p>
            <br />
            <hr />
            <br />
            <p>
              Jak już zapewne wiesz jestem Wojtek i pochodzę z Prudnika, choć
              aktualnie mieszkam w Łodzi. W życiu kieruję się zasadą by robić
              to, co się kocha i co sprawa nam przyjemność - w moim przypadku
              jest to ścieżka front-end developera (choć do tej pory nie
              pracowałem w tej branży "na pełen etat"), jeżeli mowa o pracy,
              oraz taternika / alpinisty jeśli chodzi o czas wolny. Wiąże się to
              z tym, że często bywam w górach, a co za tym idzie, równie często
              trafiam, na piękne widoki, lub po prostu coś co jest ciekawe i
              staram się to uwiecznić - tak doszło w moim życiu do narodzenia
              kolejnego hobby czyli fotografii. Co prawda w tej dziedzinie
              jestem totalnym amatorem, nie posiadam nawet profesjonalnego
              aparatu, więc nie spodziewaj się, że moje zdjęcią są jakości tych
              z National Geographic &#9786;. Prawdę mówiąc nie znam się nawet na
              ich obróbce, a na zgłębianie tajników tej sztukii po prostu
              brakuje mi czasu.
            </p>

            <br />

            <p>
              Większość dnia spędzam przy komputerze - pisząc kod lub ucząc się
              czegoś nowego, a kiedy tylko mam czas dla siebie wyjeżdżam z
              miasta (zazwyczaj w góry, lub inny skalisty teren).
            </p>

            <br />

            <p>
              Jestem lokalnym patriotą (choć aktulnie mieszkam poza swoją małą
              ojczyzną). Zawsze przyjeżdżam do Prunika z uśmiechem na twarzy, a
              będąc na miejscu, długie godziny spędzam jeżdżąc po okolicznych
              lasach na rowerze.
            </p>
          </article>
        </P.Description>
      </P.Wrapper>
    </SectionContainer>
  );
};

export default InfoSection;
