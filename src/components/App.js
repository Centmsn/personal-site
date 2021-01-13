import { useState } from "react";

import MainContainer from "./MainContainer";

const App = () => {
  const [sectionVisibility, setSectionVsibility] = useState({
    header: true,
    hobbies: false,
    info: false,
    footer: false,
  });

  return <MainContainer></MainContainer>;
};

export default App;
