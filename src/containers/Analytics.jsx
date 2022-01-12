import Stack from "@mui/material/Stack";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import clothing from "../assets/clothing_and_shoes.jpg";
import entertainment from "../assets/entertainment.jpg";
import food_and_drinks from "../assets/food_and_drinks.jpg";
import medical from "../assets/medical.jpg";
import transportation from "../assets/transportation.jpg";
import misc from "../assets/misc.png";

const Analytics = () => {
  return (
    <Stack spacing={2} mt={2} mr={1} ml={1}>
      <Card>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={clothing}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Clothing and Shoes
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={entertainment}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Entertainment
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={food_and_drinks}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Food and Drink
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={medical}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Medical
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={transportation}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Transportation
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={misc}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Clothing and Shoes
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Stack>
  );
};

export default Analytics;
