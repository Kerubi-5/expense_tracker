import React from "react";
import { useAuth } from "../contexts/AuthContext";

// MUI COMPONENTS
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

import Main from "../components/Main";
import LoginForm from "../components/LoginForm";

const Home = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  }

  if (user)
    return (
      <>
        <h1>Home</h1>
        <Main />
      </>
    );
  else {
    return (
      <>
        <LoginForm />
      </>
    );
  }
};

export default Home;
