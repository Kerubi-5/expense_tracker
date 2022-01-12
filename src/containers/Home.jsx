import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";
import Item from "../components/Item";
import Add from "../components/Add";
import Toolbar from "../components/Toolbar";

// FIREBASE - STORE
import { onSnapshot, query, where } from "firebase/firestore";
import { expensesRef } from "../utils/firebase";

import { useAuth } from "../contexts/AuthContext";

const Main = () => {
  const { user } = useAuth();

  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState(
    query(expensesRef, where("userId", "==", user.uid))
  );

  const displayItems = () => {
    return items.map((item) => <Item key={item.id} item={item} />);
  };

  useEffect(
    () =>
      onSnapshot(filter, (snapshot) => {
        console.log(filter);
        setItems(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }),
    [filter]
  );

  return (
    <>
      {user ? (
        <>
          <Toolbar setValue={setFilter} user={user} />
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
