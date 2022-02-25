import React, { useState, useEffect } from "react";
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";
import AddIcon from "@mui/icons-material/Add";

import ItemDialog from "./ItemDialog";

// FIREBASE - STORE
import { doc, getDoc } from "firebase/firestore";
import { walletRef } from "../utils/firebase";

import { useAuth } from "../contexts/AuthContext";

const Add = () => {
  const [isOpen, setOpen] = useState(false);
  const [wallet, setWallet] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    const getData = async () => {
      const walletDoc = doc(walletRef, user.uid);
      const walletData = await getDoc(walletDoc);
      setWallet(walletData.data());
    };
    return getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Tooltip title="Add" aria-label="Add" onClick={() => setOpen(true)}>
        <Fab
          color="primary"
          aria-label="add"
          sx={{ position: "fixed", bottom: "2rem", right: "2.5rem" }}
        >
          <AddIcon />
        </Fab>
      </Tooltip>

      <ItemDialog
        action="ADD"
        open={isOpen}
        setOpen={setOpen}
        wallet={wallet}
      />
    </>
  );
};

export default Add;
