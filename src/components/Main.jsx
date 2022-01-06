import Stack from "@mui/material/Stack";
import React from "react";
import Item from "./Item";
const Main = () => {
  return (
    <>
      <Stack spacing={2} mt={2} mr={1} ml={1}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Stack>
    </>
  );
};

export default Main;
