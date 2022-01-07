import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Item({ item }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {item.category}
        </Typography>
        <Typography variant="body2">{item.desc}</Typography>
        <Typography color="text.secondary">
          TOTAL PRICE: &#8369;{item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">EDIT</Button>
      </CardActions>
    </Card>
  );
}
