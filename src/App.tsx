import { StyledEngineProvider } from "@mui/material/styles";
import './App.css';

import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <Main />
      </StyledEngineProvider>
    </div>
  );
}

export default App;
