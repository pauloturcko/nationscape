import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/Theme";
import { ThemeProvider } from "styled-components";
import { getCountriesByRegion } from "./services/Region";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <button onClick={getCountriesByRegion}></button>
    </ThemeProvider>
  );
}

export default App;
