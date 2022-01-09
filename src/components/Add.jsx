import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";
import AddIcon from "@mui/icons-material/Add";

import ItemDialog from "./ItemDialog";

const Add = () => {
  const [isOpen, setOpen] = useState(false);

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

      <ItemDialog action="ADD" open={isOpen} setOpen={setOpen} />
    </>
  );
};

export default Add;
