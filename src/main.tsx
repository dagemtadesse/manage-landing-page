import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const theme = createTheme({
  palette: {
    primary: {
      main: "hsl(12, 88%, 59%)",
      light: "hsl(13, 100%, 96%)",
    },
    secondary: {
      main: "hsl(228, 39%, 23%)",
    },
    text: {
      primary: "hsl(227, 12%, 61%)",
      secondary: "hsl(227, 12%, 61%)",
    },
  },
  typography: {
    fontFamily: "Be Vietnam Pro",
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
