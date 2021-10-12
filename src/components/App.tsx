import { HashRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState } from "react";

// pages
import ContactSection from "pages/ContactSection";
import HeaderSection from "pages/HeaderSection";
import HobbiesSection from "pages/HobbiesSection";
import InfoSection from "pages/InfoSection";
// components
import Arrows from "components/Shared/NavArrows/Arrows";
import HobbiesPhotography from "components/HobbiesCard/Photography/Photography";
import HobbiesSport from "components/HobbiesCard/Sport/Sport";
import HobbiesWebDev from "components/HobbiesCard/Webdev/WebDev";
import MainContainer from "components/MainContainer/MainContainer";
import Navigation from "components/Navigation/Navigation";
import MountainsGallery from "components/HobbiesCard/Photography/MountainsGallery";
import PrudnikGallery from "components/HobbiesCard/Photography/PrudnikGallery";
import OthersGallery from "components/HobbiesCard/Photography/OthersGallery";
// styles
import GlobalStyles from "styles/GlobalStyles";
import ThemeProvider from "styles/Theme";

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
    desc: "Omnie",
    component: <InfoSection />,
  },
  {
    name: "contact",
    isVisible: false,
    desc: "Kontakt",
    component: <ContactSection />,
  },
];

/**
 * functional React component - main app component, brings together all other components
 * @function
 * @param {Object} props - React props
 * @returns {JSX.Element}
 */
const App = () => {
  const [sectionVisibility, setSectionVisibility] = useState(sections);
  const [activeSection, setActiveSection] = useState(sections[0]);

  /**
   * handles section change
   * @param {string} slideName - section name
   */
  const handleSlideChange = slideName => {
    const newState = [...sections];

    for (let i = 0; i < sections.length; i++) {
      newState[i].isVisible = false;
    }
    const active = newState.find(el => el.name === slideName);
    active.isVisible = true;

    setSectionVisibility(newState);
    setActiveSection(active);
  };

  return (
    <>
      <ThemeProvider>
        <GlobalStyles />
        <Router>
          <MainContainer pageInfo={activeSection.desc}>
            <HeaderSection
              isVisible={sectionVisibility[0].isVisible}
              slideChange={handleSlideChange}
            />
            <HobbiesSection isVisible={sectionVisibility[1].isVisible} />
            <InfoSection isVisible={sectionVisibility[2].isVisible} />
            <ContactSection isVisible={sectionVisibility[3].isVisible} />

            <Switch>
              <Route path="/webDev" component={HobbiesWebDev} />
              <Route path="/sport" component={HobbiesSport} />
              <Route
                path="/photography/mountains"
                component={MountainsGallery}
              />
              <Route path="/photography/prudnik" component={PrudnikGallery} />
              <Route path="/photography/others" component={OthersGallery} />
              <Route path="/photography" component={HobbiesPhotography} />
            </Switch>

            <Navigation
              changeSection={handleSlideChange}
              sections={sectionVisibility}
            />
            <Arrows
              changeSection={handleSlideChange}
              sections={sectionVisibility}
            />
          </MainContainer>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
