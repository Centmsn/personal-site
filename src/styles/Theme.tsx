import { ThemeProvider, DefaultTheme } from "styled-components";
import React from "react";

const theme = {
  colors: {
    yellow: "rgb(255, 219, 74)",
    gray: "rgb(60, 60, 60)",
    lightGray: "rgb(100, 100, 100)",
    smokedWhite: "rgb(200,200,200)",
  },
  fonts: { title: "'Cairo', sans-serif", text: "'Rajdhani', sans-serif" },
};

declare module "styled-components" {
  export interface DefaultTheme extends ThemeInterface {}
}

type ThemeInterface = typeof theme;

export interface ThemeProviderProps {
  children: React.ReactNode;
}

const Provider = ({ children }: ThemeProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Provider;
