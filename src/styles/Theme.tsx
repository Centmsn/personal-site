import { ThemeProvider, DefaultTheme } from "styled-components";
import React from "react";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      yellow: string;
      gray: string;
      lightGray: string;
      smokedWhite: string;
      black: string;
      white: string;
    };
    fonts: {
      title: string;
      text: string;
    };
  }
}

const theme: DefaultTheme = {
  colors: {
    yellow: "rgb(255, 219, 74)",
    gray: "rgb(60, 60, 60)",
    lightGray: "rgb(100, 100, 100)",
    smokedWhite: "rgb(200,200,200)",
    black: "rgb(26, 26, 26)",
    white: "rgb(250, 250, 250)",
  },
  fonts: { title: "'Cairo', sans-serif", text: "'Rajdhani', sans-serif" },
};

export interface ThemeProviderProps {
  children: React.ReactNode;
}

const Provider = ({ children }: ThemeProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Provider;
