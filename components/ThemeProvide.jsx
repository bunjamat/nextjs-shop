"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

const ThemeProvide = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default ThemeProvide;
