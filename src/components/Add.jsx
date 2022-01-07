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
import Select from "@mui/material/Select";

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

  const handleAdd = () => {
    const item = {
      category,
      desc,
      price,
    };

    setItems((items) => [...items, item]);
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
          <FormControl variant="standard" margin="dense" fullWidth>
            <InputLabel id="category">Category</InputLabel>
            <Select
              labelId="category-select-label"
              id="category-select"
              label="Category"
              defaultValue={"food"}
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
          </FormControl>
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            onChange={(event) => setDesc(event.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="price"
            label="Price of expense"
            type="number"
            fullWidth
            variant="standard"
            onChange={(event) => setPrice(event.target.value)}
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
