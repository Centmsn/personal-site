import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { createClient, Entry } from "contentful";
import { SlideChange, LEARNED, LEARNING } from "consts";
import SubContainer from "components/Shared/SubContainer/SubContainer";
import WebDevSlide from "./WebDevSlide";
import { ISlideFields } from "types/contentful";
import * as P from "./parts";

export interface ProgressBarData {
  title: string;
  percent: number;
}
/**
 * functional React component - renders webDev section
 * @function
 * @param {Object} props - React props
 * @returns {JSX.Element}
 */
const HobbiesWebDev = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [content, setContent] = useState<Entry<ISlideFields>[]>([]);
  const listLearnedRef = useRef<HTMLUListElement>(null);
  const listLearningRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    (async () => {
      const space: string = process.env.REACT_APP_CONTENTFUL_SPACE as string;
      const accessToken: string = process.env
        .REACT_APP_CONTENTFUL_ACCESS_TOKEN as string;

      const client = createClient({
        space,
        accessToken,
      });

      try {
        const response = await client.getEntries<ISlideFields>({
          content_type: "slide",
        });

        setContent(response.items.reverse());
      } catch (error) {
        // TODO add error handling
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    const learned = listLearnedRef.current;
    const learning = listLearningRef.current;

    if (learned && learning) {
      const learnedChildrens = learned.children;
      const learningChildren = learning.children;
      const tl = gsap.timeline({ defaults: { duration: 0.5 } });

      // TODO: refactor animation
      tl.to(learnedChildrens[0]?.lastChild?.lastChild || null, {
        scaleX: 1,
        delay: 1,
      })
        .add("triggerLists")
        .to(learnedChildrens[2]?.lastChild?.lastChild || null, { scaleX: 1 })
        .to(learnedChildrens[5]?.lastChild?.lastChild || null, { scaleX: 1 })
        .to(
          learnedChildrens[6]?.lastChild?.lastChild || null,
          { scaleX: 1 },
          "-=1"
        )
        .to(
          learnedChildrens[4]?.lastChild?.lastChild || null,
          { scaleX: 1 },
          "-=0.5"
        )
        .to(
          learnedChildrens[7]?.lastChild?.lastChild || null,
          { scaleX: 1 },
          "-=0.1"
        )
        .to(
          learnedChildrens[8]?.lastChild?.lastChild || null,
          { scaleX: 1 },
          "-=0.7"
        )
        .to(
          learnedChildrens[3]?.lastChild?.lastChild || null,
          { scaleX: 1 },
          "-=0.3"
        )
        .to(
          learnedChildrens[1]?.lastChild?.lastChild || null,
          { scaleX: 1 },
          "-=0.2"
        )
        .to(
          learnedChildrens[9]?.lastChild?.lastChild || null,
          { scaleX: 1 },
          "-=0.2"
        )
        .to(
          learningChildren[0]?.lastChild?.lastChild || null,
          { scaleX: 1 },
          "triggerLists"
        )
        .to(
          learningChildren[2]?.lastChild?.lastChild || null,
          { scaleX: 1 },
          "-=0.1"
        )
        .to(learningChildren[1]?.lastChild?.lastChild || null, { scaleX: 1 })
        .to(learningChildren[3]?.lastChild?.lastChild || null, { scaleX: 1 })
        .to(
          learningChildren[4]?.lastChild?.lastChild || null,
          { scaleX: 1 },
          "-=0.3"
        )
        .to(
          learningChildren[5]?.lastChild?.lastChild || null,
          { scaleX: 1 },
          "-=0.3"
        );
    }
  }, []);

  const handleSlideChange = useCallback(
    direction => {
      if (direction === SlideChange.NEXT && currentSlide < content.length) {
        setCurrentSlide(prev => prev + 1);
      } else if (direction === SlideChange.PREV && currentSlide > 0) {
        setCurrentSlide(prev => prev - 1);
      }
    },
    [currentSlide, content]
  );

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.keyCode === 37) {
        handleSlideChange(SlideChange.PREV);
      } else if (e.keyCode === 39) {
        handleSlideChange(SlideChange.NEXT);
      }
    };

    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [handleSlideChange]);

  /**
   * Renders list elements on the screen
   *
   * @param { Object[] } listElement
   * @param {string} listElement[].title - element title
   * @param {number} listElement[].percent - progress bar width
   * @return {Array}
   */
  const renderList = (progressBarData: Array<ProgressBarData>) => {
    return progressBarData.map((data, index) => (
      <li key={index}>
        {data.title}
        <P.ProgressBar>
          <P.InnerBar width={data.percent} />
        </P.ProgressBar>
      </li>
    ));
  };

  return (
    <SubContainer>
      <P.StartSection isVisible={currentSlide === 0}>
        <P.ListSection>
          <h2>Co umiem?</h2>
          <ul ref={listLearnedRef}>{renderList(LEARNED)} </ul>
          <small>
            Do powyższej listy dopisać można jeszcze kilka mniejszych bibliotek:{" "}
            React-router, Lodash - podstawy.
          </small>
        </P.ListSection>

        <P.ListSection>
          <h2>Czego się uczę?</h2>
          <ul ref={listLearningRef}>{renderList(LEARNING)}</ul>
          <small>
            Moim priorytetem jest aktualnie Vue, Jest oraz ciągły rozwój w React
            i czystym JS. Uczę się także Node, choć na ten moment są to zupełne
            podstawy.
          </small>
        </P.ListSection>

        <P.Summary>
          <h1>Szybkie podsumowanie</h1>
          <p>
            Jestem samoukiem z wielkim zapałem do ciągłego rozwoju, tworzenie
            aplikacji i stron internetowych to moja pasja, na którą każdego dnia
            poświęcam długie godziny.
          </p>

          <p>
            Szczególnie interesują mnie technologie front-endowe, uwielbiam
            testować nowe rozwiązania, biblioteki i frameworki. Jestem wielkim
            fanem Reacta, w związku z tym umiejętność na której doskonalenie
            poświęcam najwięcej czasu to Javascript oraz jego "otoczka".
          </p>

          <p>
            Jeżeli chodzi o komercyjne doświadczenie - do tej pory wykonywałem
            strony internetowe na zamówienie dla małych firm lub osób
            prywatnych. W tym momencie jestem pewny, że moje umiejętności, oraz
            zapał do dalszego rozwoju wystarczają by rozpocząc szukanie
            pierwszej pracy "na pełen etat" w tej branży. Lokalizacje którymi
            jestem zainteresowany to Łódź / Warszawa, pod uwagę biorę również
            pracę zdalną.
          </p>

          <p>
            Na kolejnych slajdach znajdziesz projekty które do tej pory
            tworzyłem, na różnych etapach mojej nauki.
          </p>

          <hr />
          <p>Więcej kodu mojego autorstwa znajdziesz w linkach poniżej.</p>

          <section>
            <a
              href="https://github.com/Centmsn"
              target="_blank"
              rel="noreferrer"
              title="Github"
            >
              Github
            </a>

            <a
              href="https://www.codewars.com/users/Centmsn"
              target="_blank"
              rel="noreferrer"
              title="CodeWars"
            >
              CodeWars
            </a>
          </section>

          <a
            href="https://www.codewars.com/users/Centmsn"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://www.codewars.com/users/Centmsn/badges/large"
              alt="CodeWars"
              title="CodeWars - poziom"
            />
          </a>
        </P.Summary>
      </P.StartSection>

      <WebDevSlide
        isVisible={!(currentSlide === 0)}
        title={content[currentSlide - 1]?.fields.title}
        description={content[currentSlide - 1]?.fields.description}
        imgLink={content[currentSlide - 1]?.fields.mainImg.fields.file.url}
        codeLink={content[currentSlide - 1]?.fields.linkCode}
        demoLink={content[currentSlide - 1]?.fields.linkDemo}
        backendLink={content[currentSlide - 1]?.fields.linkBackend}
      />

      <P.LeftArrow
        onClick={() => handleSlideChange(SlideChange.PREV)}
        disabled={currentSlide === 0}
      >
        <FontAwesomeIcon icon={faCaretLeft} />
      </P.LeftArrow>

      <P.RightArrow
        onClick={() => handleSlideChange(SlideChange.NEXT)}
        disabled={currentSlide > content.length - 1}
      >
        <FontAwesomeIcon icon={faCaretRight} />
      </P.RightArrow>
    </SubContainer>
  );
};

export default HobbiesWebDev;
