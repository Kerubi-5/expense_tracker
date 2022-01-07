import Stack from "@mui/material/Stack";
import { useState } from "react";
import Item from "./Item";
import Add from "../components/Add";

import { useAuth } from "../contexts/AuthContext";
const Main = () => {
  const [items, setItems] = useState([]);
  const { user } = useAuth();
  return (
    <>
      {user ? (
        <Stack spacing={2} mt={2} mr={1} ml={1}>
          {items.map((item) => {
            return <Item key={item} item={item} />;
          })}
        </Stack>
      ) : (
        "Login to see content"
      )}
      <Add setItems={setItems} items={items} />
    </>
  );
};

export default Main;
