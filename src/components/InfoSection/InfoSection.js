import round_self2 from "../../assets/round_self2.jpg";

import gsap from "gsap";
import styled from "styled-components";
import { useEffect } from "react";

import SectionContainer from "../SectionContainer/SectionContainer";

const InfoSection = ({ isVisible }) => {
  const bars = [
    { title: "Angielski", percent: 75, desc: "Poziom B2/C1" },
    { title: "Javascript", percent: 70, desc: "70%" },
    { title: "Typescript", percent: 40, desc: "40%" },
    { title: "CSS", percent: 80, desc: "80%" },
    { title: "HTML", percent: 65, desc: "65%" },
  ];

  /**
   * Renders skills bars on the screen
   */
  const renderBars = () => {
    return bars.map((bar) => {
      const skillBarElements = [];

      for (let i = 0; i < bar.percent / 5; i++) {
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
      <Summary>
        <img src={round_self2} alt="Autor" />
        <h4>Co umiem?</h4>
        <ul>{renderBars()}</ul>
      </Summary>

      <Description>
        <Title>Krótko o mnie</Title>
        <p></p>
      </Description>
    </SectionContainer>
  );
};

const Summary = styled.section`
  grid-area: 2/1/12/4;

  border-right: 4px solid ${({ theme }) => theme.colors.gray};

  text-align: center;
  padding: 20px;

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

  border: 3px solid black;
  padding: 2px 0;

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

  background-color: ${({ theme }) => theme.colors.yellow};
`;

const Title = styled.h1`
  text-align: center;
  font-size: 5rem;
`;

const Description = styled.section`
  grid-area: 2/4/12/10;
`;

export default InfoSection;
