import "./App.css";
import PhoneValidation from "./page/PhoneValidation";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <PhoneValidation />
      </ThemeProvider>
    </div>
  );
}

export default App;
