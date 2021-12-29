import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Entry } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import SectionContainer from "components/SectionContainer";
import Title, { TitleSize, TitleVariant } from "components/generics/Title";
import Text, { TextSize } from "components/generics/Text";
import { createContentfulClient } from "utils/createContentfulClient";
import { CONTENT_TYPE_ENUM } from "utils/enums/contentfulContentTypes";
import { IAboutMeFields } from "types/contentful";
import { SkillBar, InfoSectionProps } from "./constants";
import round_self2 from "assets/round_self2.jpg";
import * as P from "./parts";

const InfoSection = ({ isVisible }: InfoSectionProps) => {
  const [sectionContent, setSectionContent] = useState<Entry<IAboutMeFields>>();
  const [firstRender, setFirstRender] = useState(true);
  const skillListRef = useRef<HTMLUListElement>(null!);

  useEffect(() => {
    (async () => {
      const client = createContentfulClient();

      try {
        const response = await client.getEntries<IAboutMeFields>({
          content_type: CONTENT_TYPE_ENUM.aboutMe,
        });

        setSectionContent(response.items[0]);
      } catch (error) {
        // TODO add error handling
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    if (isVisible && firstRender) {
      setFirstRender(false);
      const listElement = skillListRef.current.children;

      Array.from(listElement).forEach(el => {
        gsap.to(el.lastChild!.childNodes, {
          stagger: 0.2,
          autoAlpha: 1,
          delay: Math.random() * 3,
        });
      });
    }
  }, [isVisible, firstRender]);

  const renderBars = () => {
    return sectionContent?.fields.mainSkills.skills.map((bar: SkillBar) => {
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
          <Title as="h4" size={TitleSize.l}>
            Co umiem?
          </Title>
          <ul ref={skillListRef}>{renderBars()}</ul>

          <Text size={TextSize.small}>Subiektywna ocena umiejętności</Text>
        </P.Summary>

        <P.Description>
          <article>
            <Title variant={TitleVariant.mixed} size={TitleSize["5xl"]}>
              Krótko o mnie
            </Title>
            {documentToReactComponents(sectionContent?.fields.mainText!)}
          </article>
        </P.Description>
      </P.Wrapper>
    </SectionContainer>
  );
};

export default InfoSection;
