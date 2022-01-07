import React from "react";
import Button from "@mui/material/Button";

import { useAuth } from "../contexts/AuthContext";

const Logout = () => {
  const { logout } = useAuth();
  return (
    <Button variant="primary" onClick={logout}>
      LOGOUT
    </Button>
  );
};

export default Logout;
