import { useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import EditIcon from "@mui/icons-material/EditOutlined";
import DeleteForeverIcon from "@mui/icons-material/DeleteForeverOutlined";

import { doc, deleteDoc } from "firebase/firestore";
import { expensesRef } from "../utils/firebase";

import ItemDialog from "./ItemDialog";

export default function Item({ item }) {
  const [isOpen, setOpen] = useState(false);

  const onDelete = async () => {
    await deleteDoc(doc(expensesRef, item.id));
  };

  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            {item.category}
          </Typography>

          <Typography variant="body2" gutterBottom>
            {item.desc}
          </Typography>
          <Typography color="text.secondary">
            TOTAL PRICE: &#8369;{item.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => setOpen(true)}>
            <EditIcon style={{ fill: "green" }} />
          </Button>
          <Button onClick={onDelete}>
            <DeleteForeverIcon style={{ fill: "red" }} />
          </Button>
        </CardActions>
      </Card>

      <ItemDialog action="SET" open={isOpen} setOpen={setOpen} item={item} />
    </>
  );
}
