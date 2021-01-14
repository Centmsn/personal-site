import { ThemeProvider } from "styled-components";

const theme = {
  colors: { yellow: "rgb(255, 219, 74)", gray: "rgb(60, 60, 60)" },
  fonts: { title: "'Cairo', sans-serif", text: "'Rajdhani', sans-serif" },
  others: {},
};

const Provider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Provider;
