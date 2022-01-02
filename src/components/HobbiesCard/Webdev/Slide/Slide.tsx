import Text from "components/generics/Text";
import Title, { TitleVariant, TitleSize } from "components/generics/Title";
import Link from "components/generics/Link";
import { SlideProps } from "./constants";
import * as P from "./parts";

/**
 * functional React component - a container for slides of WebDev
 * @function
 * @param {Object} props - React props
 * @returns {JSX.Element}
 */
const Slide = ({
  slideFields: { description, linkCode, linkDemo, mainImg, title, linkBackend },
  slideIndex,
}: SlideProps) => {
  return (
    <P.Wrapper>
      <P.SlideSection>
        <P.TitleWrapper>
          <Title as="span" size={TitleSize["4xl"]} variant={TitleVariant.white} align="left">
            {slideIndex}.
          </Title>
          <Title size={TitleSize["4xl"]} variant={TitleVariant.yellow} align="left">
            {title}
          </Title>
        </P.TitleWrapper>

        <P.DescriptionContainer>
          <P.ImageWrapper>
            <Link to={linkDemo} external>
              <P.ProjectImage src={mainImg.fields.file.url} alt={title} />
            </Link>
          </P.ImageWrapper>
          <P.TextWrapper>
            <Text light>{description}</Text>
          </P.TextWrapper>
        </P.DescriptionContainer>
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
