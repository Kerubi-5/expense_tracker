import { useState } from "react";

import Paper from "@mui/material/Paper";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AuthProvider } from "../contexts/AuthContext";

import Navbar from "../components/Navbar";
import Home from "./Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Paper className="full-width">
          <Navbar toggle={toggleDarkMode} darkMode={darkMode} />
          <Home />
        </Paper>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
