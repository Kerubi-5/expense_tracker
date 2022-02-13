import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import Logout from "./Logout";
import walletImg from "../assets/wallet.png";

import AppDrawer from "./AppDrawer";

import { useAuth } from "../contexts/AuthContext";

const Navbar = ({ toggle, darkMode }) => {
  const { user, loading } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AppDrawer />
          </IconButton>
          <img
            style={{ marginRight: "0.5rem" }}
            src={walletImg}
            alt="company logo"
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            KK - Expense Tracker
          </Typography>

          {loading ? null : user ? <Logout /> : null}

          {darkMode ? (
            <NightsStayIcon
              className="switchDarkMode"
              onClick={() => toggle()}
            />
          ) : (
            <WbSunnyIcon className="switchDarkMode" onClick={() => toggle()} />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
