import { ISlideFields } from "types/contentful";
import Text, { TextSize } from "components/Shared/Text";
import * as P from "./parts";

interface SlideProps {
  slideFields: ISlideFields;
  isVisible: boolean;
}

/**
 * functional React component - a container for slides of WebDev
 * @function
 * @param {Object} props - React props
 * @returns {JSX.Element}
 */
const Slide = ({
  slideFields: { description, linkCode, linkDemo, mainImg, title, linkBackend },
  isVisible,
}: SlideProps) => {
  return (
    <P.Wrapper isVisible={isVisible}>
      <P.SlideSection>
        <a href={linkDemo} target="_blank" rel="noreferrer">
          <img src={mainImg.fields.file.url} alt={title} />
        </a>
        <h1>{title}</h1>
        <Text light>{description}</Text>
      </P.SlideSection>

      <P.SlideSection>
        <P.SectionLink href={linkDemo} target="_blank" rel="noreferrer">
          Wersja demo
        </P.SectionLink>

        <P.SectionLink href={linkCode} target="_blank" rel="noreferrer">
          Pokaż kod
        </P.SectionLink>

        {linkBackend && (
          <P.SectionLink href={linkBackend} target="_blank" rel="noreferrer">
            Kod - backend
          </P.SectionLink>
        )}
      </P.SlideSection>
    </P.Wrapper>
  );
};

export default Slide;
