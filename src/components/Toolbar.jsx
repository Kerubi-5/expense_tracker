import { useState } from "react";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { query, where, orderBy, limit } from "firebase/firestore";
import { expensesRef } from "../utils/firebase";

import menuItems from "../utils/menuItems";

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
          orderBy("createdAt", "desc"),
          limit(25)
        )
      );
    else
      setValue(
        query(
          expensesRef,
          where("userId", "==", user.uid),
          orderBy("createdAt", "desc"),
          limit(25)
        )
      );
  };
  return (
    <div className="toolbar">
      <div className="toolbar__title"></div>
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
