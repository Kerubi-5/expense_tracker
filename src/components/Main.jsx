import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";
import Item from "./Item";
import Add from "../components/Add";

// FIREBASE - STORE
import { onSnapshot } from "firebase/firestore";
import { expensesRef } from "../utils/firebase";

import { useAuth } from "../contexts/AuthContext";
const Main = () => {
  const [items, setItems] = useState([]);
  const { user } = useAuth();

  const displayItems = () => {
    return items.map((item) => <Item key={item.id} item={item} />);
  };

  useEffect(
    () =>
      onSnapshot(expensesRef, (snapshot) => {
        setItems(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }),
    []
  );

  return (
    <>
      {user ? (
        <>
          <Stack spacing={2} mt={2} mr={1} ml={1}>
            {displayItems()}
          </Stack>
          <Add setItems={setItems} items={items} />
        </>
      ) : (
        "Login to see content"
      )}
    </>
  );
};

export default Main;
