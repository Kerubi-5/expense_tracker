import { useState } from "react";

import Paper from "@mui/material/Paper";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AuthProvider } from "../contexts/AuthContext";

import Navbar from "../components/Navbar";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Analytics from "./Analytics";
import ProfilePage from "./ProfilePage";
import ProtectedRoutes from "./ProtectedRoutes";

// REACT - ROUTER
import { Routes, Route } from "react-router-dom";

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
          <Routes>
            <Route path="login" element={<SignIn />} />
            <Route path="register" element={<SignUp />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<Home />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="profile" element={<ProfilePage />} />
            </Route>
          </Routes>
        </Paper>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
