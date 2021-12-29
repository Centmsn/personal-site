import { useEffect, useRef, useState, useCallback } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import SubContainer from "components/generics/SubContainer/SubContainer";
import Slide from "./Slide";
import Spinner from "components/generics/Spinner";
import Text, { TextSize } from "components/generics/Text";
import Title, { TitleVariant } from "components/generics/Title";
import { ProgressBarData } from "./constants";
import { generateRandomNumber } from "utils/generateRandomNumber";
import { CONTENT_TYPE_ENUM } from "utils/enums/contentfulContentTypes";
import { useContentfulData } from "hooks/useContentfulData";
import { SlideChange } from "consts";
import { ISlideFields, IWebDevFields } from "types/contentful";
import * as P from "./parts";

/**
 * functional React component - renders webDev section
 * @function
 * @param {Object} props - React props
 * @returns {JSX.Element}
 */
const HobbiesWebDev = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const listLearnedRef = useRef<HTMLUListElement>(null);
  const listLearningRef = useRef<HTMLUListElement>(null);
  const { contentulData, isLoading } = useContentfulData<ISlideFields>(CONTENT_TYPE_ENUM.slide);
  const { contentulData: sectionContent } = useContentfulData<IWebDevFields>(CONTENT_TYPE_ENUM.webDev);
  const isFirstSlide = currentSlideIndex === 0;
  const isLastSlide = contentulData && currentSlideIndex === contentulData?.items.length - 1;
  const currentSlide = contentulData?.items[currentSlideIndex].fields;

  useEffect(() => {
    const learned = listLearnedRef.current;
    const learning = listLearningRef.current;

    if (learned && learning) {
      const learnedChildrens = learned.children;
      const learningChildren = learning.children;

      [...Array.from(learningChildren), ...Array.from(learnedChildrens)].forEach(el => {
        gsap.to(el.lastChild?.lastChild as HTMLElement, { scaleX: 1, delay: generateRandomNumber(0, 2) });
      });
    }
  }, [sectionContent]);

  const handleSlideChange = useCallback(
    direction => {
      if (contentulData) {
        if (direction === SlideChange.NEXT && currentSlideIndex < contentulData?.items.length) {
          setCurrentSlideIndex(prev => prev + 1);
        } else if (direction === SlideChange.PREV && currentSlideIndex > 0) {
          setCurrentSlideIndex(prev => prev - 1);
        }
      }
    },
    [currentSlideIndex, contentulData]
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

  //! may cause inifite loading if an error occured - add error handling
  if (isLoading || !currentSlide || !sectionContent) {
    return (
      <SubContainer>
        <Spinner />
      </SubContainer>
    );
  }

  return (
    <SubContainer>
      <P.StartSection isVisible={isFirstSlide}>
        <P.ListSection>
          <Title as="h2" variant={TitleVariant.yellow}>
            Co umiem?
          </Title>
          <ul ref={listLearnedRef}>
            {/* REFACTOR - DRY */}
            {renderList(sectionContent.items[0].fields.learnedSkills)}
          </ul>
          <Text size={TextSize.s} light>
            {sectionContent.items[0].fields.learnedSkillsAdditional}
          </Text>
        </P.ListSection>

        <P.ListSection>
          <Title as="h2" variant={TitleVariant.yellow}>
            Czego się uczę?
          </Title>
          {/* REFACTOR - DRY */}
          <ul ref={listLearningRef}>{renderList(sectionContent.items[0].fields.learningSkills)}</ul>
          <Text size={TextSize.s} light>
            {sectionContent.items[0].fields.learningSkillsAdditional}
          </Text>
        </P.ListSection>

        <P.Summary>
          {documentToReactComponents(sectionContent.items[0].fields.professionalExperience)}

          <section>
            <a href="https://github.com/Centmsn" target="_blank" rel="noreferrer" title="Github">
              Github
            </a>

            <a href="https://www.codewars.com/users/Centmsn" target="_blank" rel="noreferrer" title="CodeWars">
              CodeWars
            </a>
          </section>

          <a href="https://www.codewars.com/users/Centmsn" target="_blank" rel="noreferrer">
            <img src="https://www.codewars.com/users/Centmsn/badges/large" alt="CodeWars" title="CodeWars - poziom" />
          </a>
        </P.Summary>
      </P.StartSection>

      <Slide isVisible={!isFirstSlide} slideFields={currentSlide} />

      <P.LeftArrow onClick={() => handleSlideChange(SlideChange.PREV)} disabled={isFirstSlide}>
        <FontAwesomeIcon icon={faCaretLeft} />
      </P.LeftArrow>

      <P.RightArrow onClick={() => handleSlideChange(SlideChange.NEXT)} disabled={isLastSlide}>
        <FontAwesomeIcon icon={faCaretRight} />
      </P.RightArrow>
    </SubContainer>
  );
};

export default HobbiesWebDev;
