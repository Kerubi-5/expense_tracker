import { useState } from "react";

import Paper from "@mui/material/Paper";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Add from "../components/Add";

// FIREBASE AUTHENTICATION
import { signInWithPopup } from "firebase/auth";
import { auth, google_provider } from "../utils/firebase";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const googleSignIn = () => {
    signInWithPopup(auth, google_provider);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper className="full-width">
        <Navbar toggle={toggleDarkMode} darkMode={darkMode} />
        <Main />
        <Add />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
