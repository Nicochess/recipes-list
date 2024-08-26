"use client";

import { ThemeProvider } from "styled-components";

export const theme = {
  selectedColor: "#2c89ff",
  lightGray: "#9d9d9d",
  black: "#000",
  softHoverColor: "#f9f9f9",
  card: {
    titleColor: "#333",
    subtitleColor: "#b5b5b5",
  },
  filterDifficulty: {
    subtitleColor: "#a1a1a1",
    shadow: "0px 0px 0px 2px #9d9d9d",
    shadowSelected: `0px 0px 0px 2px #2c89ff`,
  },
};

const Theme: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
