import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Container item>
          <Typography variant="h4" component="div" gutterBottom>
            Login to continue
          </Typography>
        </Container>
        <Container item>
          <Typography variant="body1" gutterBottom>
            You cannot access this content without logging in first.
          </Typography>
        </Container>
      </Container>
    </React.Fragment>
  );
}
