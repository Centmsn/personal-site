import gsap from "gsap";
import { useState } from "react";

import Arrows from "./Elements/Arrows";
import FooterSection from "./FooterSection/FooterSection";
import GlobalStyles from "../GlobalStyles";
import HeaderSection from "./HeaderSection/HeaderSection";
import HobbiesSection from "./HobbiesSection/HobbiesSection";
import InfoSection from "./InfoSection/InfoSection";
import MainContainer from "./MainContainer/MainContainer";
import Navigation from "./Navigation/Navigation";
import ThemeProvider from "../context/ThemeContext";

const sections = [
  {
    name: "header",
    isVisible: true,
    desc: "Home",
    component: <HeaderSection />,
  },
  {
    name: "hobbies",
    isVisible: false,
    desc: "Zainteresowania",
    component: <HobbiesSection />,
  },
  {
    name: "info",
    isVisible: false,
    desc: "O mnie",
    component: <InfoSection />,
  },
  {
    name: "footer",
    isVisible: false,
    desc: "Stopka",
    component: <FooterSection />,
  },
];

const App = () => {
  const [sectionVisibility, setSectionVisibility] = useState(sections);

  /**
   * handle section change
   * @param slideName - section name
   */
  const handleSlideChange = (slideName) => {
    const newState = [...sections];

    for (let i = 0; i < sections.length; i++) {
      newState[i].isVisible = false;
    }
    newState.find((el) => el.name === slideName).isVisible = true;

    setSectionVisibility(newState);
  };

  const renderContent = () => {
    let content;

    sectionVisibility.forEach((section) => {
      if (section.isVisible) {
        content = section.component;
      }
    });

    return content;
  };

  return (
    <>
      <ThemeProvider>
        <GlobalStyles />
        <MainContainer>
          {renderContent()}
          <Navigation
            changeSection={handleSlideChange}
            sections={sectionVisibility}
          />
          <Arrows
            changeSection={handleSlideChange}
            sections={sectionVisibility}
          />
        </MainContainer>
      </ThemeProvider>
    </>
  );
};

export default App;
