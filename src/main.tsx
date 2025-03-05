import "./index.css";
import Application from "./Application";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";

const theme = {};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Application />
    </ThemeProvider>
  </StrictMode>
);
