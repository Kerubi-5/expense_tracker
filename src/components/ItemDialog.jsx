// DIALOG Box
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import Calendar from "./Calendar";

import { useAuth } from "../contexts/AuthContext";
import { doc, setDoc, addDoc } from "firebase/firestore";
import { expensesRef } from "../utils/firebase";

import { useState } from "react";

import menuItems from "../utils/menuItems";

const ItemDialog = ({ action, open, setOpen, item }) => {
  const isOpen = open;

  const [category, setCategory] = useState(item ? item.category : "");
  const [desc, setDesc] = useState(item ? item.desc : "");
  const [price, setPrice] = useState(item ? item.price : "");
  const [date, setDate] = useState(new Date());

  const { user } = useAuth();

  const actionTypes = {
    SET: "SET",
    ADD: "ADD",
  };

  const handleClick = async () => {
    if (!category || !desc || !price || !date) return;
    setOpen(false);

    if (action === actionTypes.SET) {
      const payload = [
        {
          category: category,
          desc: desc,
          price: price,
          createdAt: date,
        },
        {
          merge: true,
        },
      ];

      await setDoc(doc(expensesRef, item.id), ...payload);
    } else if (action === actionTypes.ADD) {
      const item = {
        category,
        desc,
        price,
        createdAt: date,
        userId: user.uid,
      };

      // SET DOC HERE
      setDesc("");
      setPrice("");

      await addDoc(expensesRef, item);
    }
  };
  return (
    <>
      <Dialog
        open={isOpen}
        keepMounted
        scroll="paper"
        aria-describedby="alert-dialog-slide-description"
        fullWidth={true}
        onBackdropClick={() => setOpen(false)}
      >
        <DialogTitle>{actionTypes[action]}</DialogTitle>
        <DialogContent dividers={true}>
          <FormControl
            variant="standard"
            margin="dense"
            fullWidth
            error={category ? false : true}
          >
            <InputLabel id="category">Category</InputLabel>
            <Select
              labelId="category-select-label"
              id="category-select"
              label="Category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              {menuItems.map((menu) => {
                return (
                  <MenuItem key={menu.name} value={menu.name}>
                    {menu.name}
                  </MenuItem>
                );
              })}
            </Select>
            <FormHelperText>Select a category</FormHelperText>
          </FormControl>
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            value={desc}
            onChange={(event) => setDesc(event.target.value)}
            error={desc ? false : true}
            helperText={desc ? null : "Please enter a description"}
          />
          <TextField
            autoFocus
            margin="dense"
            id="price"
            label="Price of expense"
            type="number"
            fullWidth
            variant="standard"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            error={price ? false : true}
            helperText={price ? null : "Please enter a price"}
          />
          <div className="date-picker">
            <Calendar date={date} setDate={setDate} />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>CANCEL</Button>
          <Button onClick={handleClick}>SUBMIT</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ItemDialog;
