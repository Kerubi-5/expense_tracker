import * as React from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

export default function SimpleContainer() {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [isVisible, setVisibility] = React.useState(false);
  const { signIn } = useAuth();

  return (
    <React.Fragment>
      <Container>
        <Grid container direction="column" alignItems="center" spacing={3}>
          <Grid item container>
            <Typography variant="h2" component="div" gutterBottom mt={5}>
              Sign In
            </Typography>
          </Grid>
          <Grid item container>
            <TextField
              id="email"
              label="Email"
              helperText={email ? null : "Please enter your email"}
              error={email ? false : true}
              variant="filled"
              fullWidth={true}
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </Grid>
          <Grid item container>
            <TextField
              id="password"
              label="Password"
              helperText={pass ? null : "Please enter your password"}
              error={pass ? false : true}
              variant="filled"
              fullWidth={true}
              type={isVisible ? "text" : "password"}
              value={pass}
              onChange={(event) => {
                setPass(event.target.value);
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setVisibility(!isVisible)}
                    >
                      {isVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item container>
            <Button variant="contained" onClick={() => signIn(email, pass)}>
              LOGIN
            </Button>
          </Grid>
          <Grid item container>
            <Typography variant="subtitle1" gutterBottom component="div">
              Dont have an account yet? <Link to="/about">Sign up here</Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}