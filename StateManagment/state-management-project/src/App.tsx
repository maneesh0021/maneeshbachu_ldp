import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import MyLibrary from "./components/pages/MyLibrary";
import "./App.css";

const App = () => (
  <ThemeProvider theme={theme}>
    <MyLibrary />
  </ThemeProvider>
);

export default App;
