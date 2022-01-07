import Stack from "@mui/material/Stack";
import React from "react";
import Item from "./Item";

import { useAuth } from "../contexts/AuthContext";
const Main = () => {
  const { user } = useAuth();
  return (
    <>
      {user ? (
        <Stack spacing={2} mt={2} mr={1} ml={1}>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </Stack>
      ) : (
        "Login to see content"
      )}
    </>
  );
};

export default Main;
