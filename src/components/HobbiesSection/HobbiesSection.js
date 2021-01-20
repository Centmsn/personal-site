import photography_photo from "../../assets/hobbies_photography.jpg";
import sport_photo from "../../assets/hobbies_sport.jpg";
import webdev_photo from "../../assets/hobbies_webdev.jpg";

import gsap from "gsap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useRef, useEffect, useState } from "react";

import SectionContainer from "../SectionContainer/SectionContainer";
import { device } from "../../GlobalStyles";

/**
 * Renders HobbiesSection on screen
 */
const HobbiesSection = ({ isVisible = false }) => {
  const [firstRender, setFirstRender] = useState(true);

  const webDevRef = useRef(null);
  const webDevBorderRef = useRef(null);

  const sportRef = useRef(null);
  const sportBorderRef = useRef(null);

  const photographyRef = useRef(null);
  const photographyBorderRef = useRef(null);

  const bottomHolderRef = useRef(null);
  const topHolderRef = useRef(null);
  const middleHolderRef = useRef(null);
  const sectionInfoRef = useRef(null);

  const cards = [
    {
      title: "Web development",
      desc: ` Tworzenie stron i aplikacji internetowych to moja pasja - większość
    dnia spędzam przed komputerem pisząc kod. Jestem samoukiem - nie
    posiadam wykształcenia w tym kierunku. Wiedzę czerpię z różnych
    źródeł, od książek po dokumentację poszczególnych technologii.`,
      ref: webDevRef,
      borderRef: webDevBorderRef,
      link: "webDev",
      img: webdev_photo,
      area: "2/2/4/10",
    },
    {
      title: "Sport",
      desc: `Sport w moim życiu obecny jest od dawna. Nie jestem przywiązany do
      jednej dyscypliny (choć najbliższa memu sercu jest wspinaczka), lubię
      eksperymentować i poznawać nowe dyscypliny. Jeżdżę na rolkach, w zimie
      na nartach, a także na rowerze (w każdych warunkach).`,
      ref: sportRef,
      borderRef: sportBorderRef,
      link: "sport",
      img: sport_photo,
      area: "5/4/7/12",
    },
    {
      title: "Fotografia",
      desc: `Stwierdzenie, że jestem pasjonatem fotografii to z pewnością duża
      przesada. Bardzo lubię fotografować, jednak nie mam w tym kierunku
      żadnych kwalifikacji, a większość zdjęc wykonuję tym co mam pod ręką -
      zazwyczaj jest to po prostu telefon. Wykonane zdjęcia rzadko poddaję obróbce
      - cenię naturalny efekt.`,
      ref: photographyRef,
      borderRef: photographyBorderRef,
      link: "photography",
      img: photography_photo,
      area: "8/2/10/10",
    },
  ];

  useEffect(() => {
    if (isVisible && firstRender) {
      setFirstRender(false);

      const tl = gsap.timeline({ defaults: { duration: 0.3, ease: "none" } });

      const borderPhotography = photographyBorderRef.current.children;
      const borderSport = sportBorderRef.current.children;
      const webDevBorder = webDevBorderRef.current.children;

      tl.to(bottomHolderRef.current, { scaleY: 1, delay: 1 })
        .to(borderPhotography[0], { scaleY: 1 })
        .to(borderPhotography[1], { scaleX: 1 }, "-=0.2")
        .to(borderPhotography[2], { scaleX: 1 }, "-=0.2")
        .to(borderPhotography[3], { scaleY: 1 })
        .to(topHolderRef.current, { scaleY: 1 }, "-=0.5")
        .add("split")
        .to(middleHolderRef.current, { scaleX: 1 }, "-=0.3")
        .to(borderSport[0], { scaleY: 1, transformOrigin: "center" }, "split")
        .to(borderSport[1], { scaleX: 1 })
        .to(borderSport[2], { scaleX: 1 }, "-=0.2")
        .to(borderSport[3], { scaleY: 1 }, "-=0.3")
        .to(webDevBorder[0], { scaleY: 1 }, "split")
        .to(webDevBorder[1], { scaleX: 1 }, "-=0.2")
        .to(webDevBorder[3], { scaleY: 1, transformOrigin: "bottom" })
        .to(webDevBorder[2], { scaleX: 1 }, "-=0.5")
        .add("borderRemove")
        .to(middleHolderRef.current, { scaleX: 0 })
        .to(topHolderRef.current, { scaleY: 0 })
        .to(bottomHolderRef.current, { scaleY: 0 })
        .add("displayCard")
        .to(
          sectionInfoRef.current,
          { autoAlpha: 1, duration: 0 },
          "displayCards"
        )
        .to(sectionInfoRef.current, { x: 0 }, "displayCards")
        .to(
          webDevBorderRef.current,
          { backgroundColor: "rgba(255, 255, 255, 0)" },
          "displayCards"
        )
        .to(
          sportBorderRef.current,
          { backgroundColor: "rgba(255, 255, 255, 0)" },
          "displayCards"
        )
        .to(
          photographyBorderRef.current,
          { backgroundColor: "rgba(255, 255, 255, 0)" },
          "displayCards"
        )
        .add("displayTitles")
        .to(
          webDevRef.current.lastChild,
          { autoAlpha: 1, x: 0, ease: "Back.easeOut(5)" },
          "displayTitles"
        )
        .to(
          photographyRef.current.lastChild,
          { autoAlpha: 1, x: 0, ease: "Back.easeOut(5)" },
          "displayTitles"
        )
        .to(
          sportRef.current.lastChild,
          { autoAlpha: 1, x: 0, ease: "Back.easeOut(5)" },
          "displayTitles"
        );
    }
  }, [isVisible, firstRender]);

  const renderCards = () => {
    return cards.map((card) => (
      <StyledLink
        ref={card.ref}
        tabIndex="0"
        key={card.title}
        area={card.area}
        to={card.link}
      >
        <p>{card.desc}</p>
        <img src={card.img} alt={card.title} />
        <BorderContainer ref={card.borderRef}>
          <BorderLeft />
          <BorderBottom />
          <BorderTop />
          <BorderRight />
        </BorderContainer>
        <CardTitle>{card.title}</CardTitle>
      </StyledLink>
    ));
  };

  return (
    <SectionContainer isVisible={isVisible}>
      {renderCards()}
      <SectionInfo ref={sectionInfoRef}>
        Kliknij jedną z sekcji i dowiedz się więcej
      </SectionInfo>

      <CardHolder ref={topHolderRef} />
      <CardHolder2 ref={middleHolderRef} />
      <CardHolder3 ref={bottomHolderRef} />
    </SectionContainer>
  );
};

HobbiesSection.propTypes = {
  /**
   * switches component visibility
   */
  isVisible: PropTypes.bool.isRequired,
};

const StyledLink = styled(Link)`
  position: relative;
  grid-area: ${({ area }) => area};

  display: flex;
  align-items: center;

  border-radius: 5px;

  font-size: 1.25rem;
  text-align: justify;
  text-decoration: none;

  background-color: ${({ theme }) => theme.colors.gray};
  color: white;

  padding: 10px;
  cursor: pointer;

  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.colors.lightGray};
  }

  img {
    float: right;
    margin: 0 10px;

    border-radius: 50%;
    box-shadow: 0 0 0 2px white;
  }

  &::after {
    content: "Przejdź do tej sekcji";
    position: absolute;
    bottom: calc(-2rem - 25px);
    left: 0;

    transform: translateX(50px);

    font-size: 1.75rem;
    font-family: ${({ theme }) => theme.fonts.title};

    background-color: ${({ theme }) => theme.colors.gray};
    padding: 0 10px;

    opacity: 0;
    transition: 300ms;
  }

  &:hover&::after {
    transform: translateX(0);
    opacity: 1;
  }
`;

const CardTitle = styled.div`
  position: absolute;
  bottom: calc(-2rem - 25px);
  right: 0;
  transform: translateX(50px);

  border-right: 4px solid ${({ theme }) => theme.colors.yellow};

  font-size: 1.75rem;
  font-family: ${({ theme }) => theme.fonts.title};

  color: ${({ theme }) => theme.colors.yellow};
  background-color: ${({ theme }) => theme.colors.gray};
  opacity: 0;

  padding: 0 10px;
`;

const SectionInfo = styled.aside`
  grid-area: 5/1/7/3;
  transform: translateX(-50vw);

  display: flex;
  align-items: center;

  border-right: 4px solid ${({ theme }) => theme.colors.gray};

  font-size: 1.75rem;
  font-family: ${({ theme }) => theme.fonts.title};
  line-height: 1.6rem;
  text-align: center;

  background-color: ${({ theme }) => theme.colors.yellow};

  color: ${({ theme }) => theme.colors.gray};

  opacity: 0;
  padding: 0 5px;
`;

const BorderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: white;
`;

const Border = styled.div`
  position: absolute;

  transform: scaleX(0);
  transform-origin: left;

  background-color: ${({ theme }) => theme.colors.gray};
`;

const BorderBottom = styled(Border)`
  left: 0;
  right: 0;
  bottom: 0;

  height: 4px;
`;
const BorderTop = styled(Border)`
  left: 0;
  right: 0;
  top: 0;

  height: 4px;
`;
const BorderLeft = styled(Border)`
  left: 0;
  top: 0;
  bottom: 0;

  transform: scaleY(0);
  transform-origin: bottom;

  width: 4px;
`;
const BorderRight = styled(Border)`
  top: 0;
  right: 0;
  bottom: 0;

  transform: scaleY(0);
  transform-origin: top;

  width: 4px;
  background-color: ${({ theme }) => theme.colors.yellow};
`;

const CardHolder = styled.div`
  grid-area: 4/2/8/2;
  border-left: 4px solid ${({ theme }) => theme.colors.gray};

  transform: scaleY(0);
  transform-origin: bottom;
`;

const CardHolder2 = styled.div`
  grid-area: 5/2/6/4;
  border-bottom: 4px solid ${({ theme }) => theme.colors.gray};

  transform: scaleX(0);
  transform-origin: left;
`;

const CardHolder3 = styled.div`
  grid-area: 10/2/14/2;
  border-left: 4px solid ${({ theme }) => theme.colors.gray};

  transform: scaleY(0);
  transform-origin: bottom;
`;

export default HobbiesSection;
