import React from "react";
import { useAuth } from "../contexts/AuthContext";

import Main from "../components/Main";
const Home = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <h1>Loading please wait</h1>;
  }

  if (user)
    return (
      <>
        <h1>Home</h1>
        <Main />
      </>
    );
  else {
    return null;
  }
};

export default Home;
