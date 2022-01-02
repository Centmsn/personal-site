import { useRef, useEffect } from "react";
import gsap from "gsap";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Text, { TextSize } from "components/generics/Text";
import Title, { TitleVariant } from "components/generics/Title";
import Link from "components/generics/Link";
import { ProgressBarData, InitialSlideProps } from "./constants";
import { generateRandomNumber } from "utils/generateRandomNumber";
import * as P from "./parts";

const InitialSlide = ({ slideContent: { items } }: InitialSlideProps) => {
  const listLearnedRef = useRef<HTMLUListElement>(null);
  const listLearningRef = useRef<HTMLUListElement>(null);

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
  }, [items]);

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
    <P.StartSection>
      <P.ListSection>
        <Title as="h2" variant={TitleVariant.yellow}>
          Co umiem?
        </Title>
        <ul ref={listLearnedRef}>
          {/* REFACTOR - DRY */}
          {renderList(items[0].fields.learnedSkills)}
        </ul>
        <Text size={TextSize.s} light>
          {items[0].fields.learnedSkillsAdditional}
        </Text>
      </P.ListSection>

      <P.ListSection>
        <Title as="h2" variant={TitleVariant.yellow}>
          Czego się uczę?
        </Title>
        {/* REFACTOR - DRY */}
        <ul ref={listLearningRef}>{renderList(items[0].fields.learningSkills)}</ul>
        <Text size={TextSize.s} light>
          {items[0].fields.learningSkillsAdditional}
        </Text>
      </P.ListSection>

      <P.Summary>
        {documentToReactComponents(items[0].fields.professionalExperience)}

        <section>
          <Link to="https://github.com/Centmsn" title="Github" external>
            Github
          </Link>

          <Link to="https://www.linkedin.com/in/wojciech-rygorowicz-a654a31ba/" title="LinkedIn" external>
            LinkedIn
          </Link>

          <Link to="https://www.codewars.com/users/Centmsn" title="CodeWars" external>
            CodeWars
          </Link>
        </section>

        <Link to="https://www.codewars.com/users/Centmsn" external>
          <img src="https://www.codewars.com/users/Centmsn/badges/large" alt="CodeWars" title="CodeWars - poziom" />
        </Link>
      </P.Summary>
    </P.StartSection>
  );
};

export default InitialSlide;
