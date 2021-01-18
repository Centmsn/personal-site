import boxshadowGenerator from "../../../assets/boxshadowGenerator.jpg";
import checkers from "../../../assets/checkers.jpg";
import gradientGenerator from "../../../assets/gradientGenerator.jpg";
import minesweeper from "../../../assets/minesweeper.jpg";
import renowork from "../../../assets/renowork.jpg";
import snake from "../../../assets/snake.jpg";
import todoapp from "../../../assets/todoapp.jpg";
import weatherapp from "../../../assets/weatherapp.jpg";

import styled from "styled-components";
import PropTypes from "prop-types";

const WebDevSlide = ({
  isVisible,
  title,
  description,
  imgLink,
  codeLink,
  demoLink,
  imgDesc,
}) => {
  const images = {
    boxshadowGenerator,
    checkers,
    gradientGenerator,
    minesweeper,
    snake,
    todoapp,
    weatherapp,
    renowork,
  };

  return (
    <Wrapper isVisible={isVisible}>
      <SlideSection>
        <a href={demoLink} target="_blank" rel="noreferrer">
          <img src={images[imgLink]} alt={imgDesc} />
        </a>
        <h1>{title}</h1>
        {description}
      </SlideSection>

      <SlideSection>
        <SectionLink href={demoLink} target="_blank" rel="noreferrer">
          Wersja demo
        </SectionLink>
        <SectionLink href={codeLink} target="_blank" rel="noreferrer">
          Pokaż kod
        </SectionLink>
      </SlideSection>
    </Wrapper>
  );
};

WebDevSlide.propTypes = {
  /**
   * if true - component is visible
   */
  isVisible: PropTypes.bool.isRequired,

  /**
   * Project title
   */
  title: PropTypes.string.isRequired,

  /**
   * Project description
   */
  description: PropTypes.string.isRequired,

  /**
   * Image name
   */
  imgLink: PropTypes.string.isRequired,

  /**
   * Link to source code
   */
  codeLink: PropTypes.string.isRequired,

  /**
   * Link to app demo
   */
  demoLink: PropTypes.string.isRequired,
};

const Wrapper = styled.div`
  grid-area: 2/2/12/12;

  display: flex;
  flex-wrap: wrap;

  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
`;

const SlideSection = styled.section`
  flex-basis: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  text-align: center;
  font-size: 1.5rem;
  color: white;

  h1 {
    flex-basis: 100%;

    font-size: 3rem;
  }

  img {
    height: auto;
    width: 60%;

    box-shadow: 0 0 0 2px rgba(60, 60, 60, 0.98),
      0 0 0 4px ${({ theme }) => theme.colors.yellow},
      0 0 0 6px rgba(60, 60, 60, 0.98),
      0 0 0 8px ${({ theme }) => theme.colors.yellow};

    transition: 300ms;

    &:hover {
      box-shadow: 0 0 0 2px rgba(60, 60, 60, 0.98),
        0 0 0 4px ${({ theme }) => theme.colors.yellow},
        0 0 0 10px rgba(60, 60, 60, 0.98),
        0 0 0 12px ${({ theme }) => theme.colors.yellow};
    }
  }
`;

const SectionLink = styled.a`
  position: relative;
  margin: 0 3rem;

  font-size: 2rem;
  text-decoration: none;

  color: ${({ theme }) => theme.colors.yellow};

  &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;

    height: 2px;
    transform: scaleX(0);
    transform-origin: left;

    background-color: ${({ theme }) => theme.colors.yellow};

    transition: 300ms;
  }

  &:hover::after {
    transform: scale(1);
  }
`;

export default WebDevSlide;
