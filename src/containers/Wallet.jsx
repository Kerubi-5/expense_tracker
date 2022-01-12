import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { useState, useEffect } from "react";

import { useAuth } from "../contexts/AuthContext";

import { walletRef } from "../utils/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const Wallet = () => {
  const [wallet, setWallet] = useState(0);
  const [funds, setFunds] = useState("");

  const { user } = useAuth();

  useEffect(() => {
    const getData = async () => {
      const walletDoc = doc(walletRef, user.uid);
      const walletData = await getDoc(walletDoc);
      setWallet(walletData.data());
      console.log("mice");
    };
    return getData();
  }, []);

  const addFunds = async () => {
    const walletDoc = doc(walletRef, user.uid);

    await setDoc(walletDoc, {
      money: Number(wallet.money) + Number(funds),
    });

    setWallet({ money: Number(wallet.money) + Number(funds) });
    setFunds("");
  };

  return (
    <Container maxWidth="fluid">
      <Stack spacing={3}>
        <Typography
          variant="h4"
          component="div"
          sx={{ textAlign: "center" }}
          mt={2}
        >
          Expense Tracker
        </Typography>
        <div>
          <Typography variant="h6" component="div">
            Your remaining balance
          </Typography>
          <Typography variant="h5" component="div">
            &#8369; {wallet.money ? wallet.money : ""}
          </Typography>
        </div>

        <TextField
          id="addFunds"
          label="Funds"
          variant="standard"
          type="number"
          value={funds}
          onChange={(event) => setFunds(event.target.value)}
        />

        <Button variant="contained" onClick={() => addFunds()}>
          ADD MORE FUNDS
        </Button>
      </Stack>
    </Container>
  );
};

export default Wallet;
