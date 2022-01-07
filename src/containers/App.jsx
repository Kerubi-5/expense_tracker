import { useState } from "react";

import Paper from "@mui/material/Paper";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AuthProvider } from "../contexts/AuthContext";

import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Add from "../components/Add";

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
          <Main />
          <Add />
        </Paper>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;