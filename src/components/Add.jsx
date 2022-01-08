import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";
import AddIcon from "@mui/icons-material/Add";

// DIALOG PLUGIN DEFINITION
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";

// SELECT DEFINITION
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";

import { addDoc, Timestamp } from "firebase/firestore";
import { expensesRef } from "../utils/firebase";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Add = ({ items, setItems }) => {
  const [isOpen, setOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");

  const menuItems = [
    {
      name: "Food and Drink",
      value: "food",
    },
    {
      name: "Entertainment",
      value: "entertainment",
    },
    {
      name: "Clothing and Shoes",
      value: "clothing",
    },
    {
      name: "Medical",
      value: "medical",
    },
    {
      name: "Transportation",
      value: "transportation",
    },
    {
      name: "Miscellaneous",
      value: "miscellaneous",
    },
  ];

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = async () => {
    if (!category || !desc || !price) return;

    const item = {
      category,
      desc,
      price,
      date: Timestamp.now(),
    };

    await addDoc(expensesRef, item);

    setDesc("");
    setPrice("");

    setOpen(false);
  };

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

      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        scroll="paper"
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        fullWidth={true}
      >
        <DialogTitle>Track a new expense</DialogTitle>
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
              defaultValue={category}
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>CANCEL</Button>
          <Button onClick={handleAdd}>ADD</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Add;
