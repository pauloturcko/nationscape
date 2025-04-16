import { Sidebar } from "./components/organisms/Sidebar";
import { filterResponse } from "./services/FilterResponse";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/Theme";
import { ThemeProvider } from "styled-components";

filterResponse();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Sidebar />
    </ThemeProvider>
  );
}

export default App;
