import { useState } from "react";

import Paper from "@mui/material/Paper";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AuthProvider } from "../contexts/AuthContext";

import Navbar from "../components/Navbar";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Wallet from "./Wallet";
import StatsItems from "./StatsItems";

import ProfilePage from "./ProfilePage";
import ProtectedRoutes from "./ProtectedRoutes";

// REACT - ROUTER
import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";

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
              <Route path="wallet" element={<Wallet />} />
              <Route path="graph" element={<StatsItems />} />
              <Route path="profile" element={<ProfilePage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Paper>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
