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
import { PageSection, SectionNames } from "types/common";

const sections: Array<PageSection> = [
  {
    name: "header",
    isVisible: true,
    desc: "Home",
  },
  {
    name: "hobbies",
    isVisible: false,
    desc: "Zainteresowania",
  },
  {
    name: "info",
    isVisible: false,
    desc: "Omnie",
  },
  {
    name: "contact",
    isVisible: false,
    desc: "Kontakt",
  },
];

/**
 * functional React component - main app component, brings together all other components
 * @function
 * @param {Object} props - React props
 * @returns {JSX.Element}
 */
const App = () => {
  const [sectionVisibility, setSectionVisibility] =
    useState<Array<PageSection>>(sections);
  const [activeSection, setActiveSection] = useState<PageSection>(sections[0]);

  const handleSlideChange = (slideName: SectionNames) => {
    const newState = sections.map(section => ({
      ...section,
      isVisible: section.name === slideName,
    }));
    const currentlyActiveSection = newState.find(section => section.isVisible);

    setSectionVisibility(newState);
    setActiveSection(currentlyActiveSection || newState[0]);
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
