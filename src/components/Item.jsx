import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BasicCard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Category
        </Typography>
        <Typography variant="body2">Ps</Typography>
        <Typography color="text.secondary">&#8369;5000</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">EDIT</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
