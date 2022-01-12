import { useState } from "react";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { query, where, orderBy } from "firebase/firestore";
import { expensesRef } from "../utils/firebase";

const Toolbar = ({ setValue, user }) => {
  const [filter, setFilter] = useState("");

  const handleChange = (e) => {
    setFilter(e);
    if (e)
      setValue(
        query(
          expensesRef,
          where("userId", "==", user.uid),
          where("category", "==", e),
          orderBy("createdAt")
        )
      );
    else
      setValue(
        query(
          expensesRef,
          where("userId", "==", user.uid),
          orderBy("createdAt")
        )
      );
  };
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

  return (
    <div className="toolbar">
      <div className="toolbar__title">
        <Typography variant="h6" gutterBottom component="div">
          Good day! {user.displayName}
        </Typography>
      </div>
      <div className="toolbar__filter">
        <Button
          onClick={() => handleChange("")}
          variant="text"
          sx={{ maxHeight: "1.5rem" }}
        >
          CLEAR
        </Button>
        <FormControl variant="standard" margin="dense" fullWidth>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={filter}
            onChange={(event) => handleChange(event.target.value)}
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
      </div>
    </div>
  );
};

export default Toolbar;
