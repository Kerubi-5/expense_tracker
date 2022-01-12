import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Wallet = () => {
  return (
    <Container maxWidth="fluid">
      <Stack spacing={3}>
        <Typography
          variant="h4"
          component="div"
          sx={{ textAlign: "center" }}
          mt={2}
        >
          Expense Tracker
        </Typography>
        <div>
          <Typography variant="h6" component="div">
            Your remaining balance
          </Typography>
          <Typography variant="h5" component="div">
            &#8369;10000
          </Typography>
        </div>

        <Button variant="contained">ADD MORE FUNDS</Button>
      </Stack>
    </Container>
  );
};

export default Wallet;
