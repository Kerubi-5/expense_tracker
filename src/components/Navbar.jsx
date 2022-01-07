import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import Login from "./Login";
import Logout from "./Logout";

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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            KK App
          </Typography>

          {loading ? null : user ? <Logout /> : <Login />}

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
