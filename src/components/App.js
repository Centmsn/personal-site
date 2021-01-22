import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";

import Arrows from "./Elements/Arrows";
import ContactSection from "./ContactSection/ContactSection";
import GlobalStyles from "../GlobalStyles";
import HeaderSection from "./HeaderSection/HeaderSection";
import HobbiesSection from "./HobbiesSection/HobbiesSection";
import HobbiesPhotography from "./HobbiesSection/Photography/Photography";
import HobbiesSport from "./HobbiesSection/Sport/Sport";
import HobbiesWebDev from "./HobbiesSection/Webdev/WebDev";
import InfoSection from "./InfoSection/InfoSection";
import MainContainer from "./MainContainer/MainContainer";
import Navigation from "./Navigation/Navigation";
import ThemeProvider from "../context/ThemeContext";

import MountainsGallery from "./HobbiesSection/Photography/MountainsGallery";
import PrudnikGallery from "./HobbiesSection/Photography/PrudnikGallery";
import OthersGallery from "./HobbiesSection/Photography/OthersGallery";

const sections = [
  {
    name: "header",
    isVisible: false,
    desc: "Home",
    component: <HeaderSection />,
  },
  {
    name: "hobbies",
    isVisible: true,
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
  const handleSlideChange = (slideName) => {
    const newState = [...sections];

    for (let i = 0; i < sections.length; i++) {
      newState[i].isVisible = false;
    }
    const active = newState.find((el) => el.name === slideName);
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
            <HeaderSection isVisible={sectionVisibility[0].isVisible} />
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
