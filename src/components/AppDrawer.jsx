import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-router-dom";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({ left: false });

  // LIST OF CLICKABLE ITEMS
  const linkItems = [
    {
      name: "Home",
      link: "/",
      icon: <HomeOutlinedIcon />,
    },
    {
      name: "Analytics",
      link: "/analytics",
      icon: <EqualizerOutlinedIcon />,
    },
    {
      name: "User",
      link: "/profile",
      icon: <PersonOutlineOutlinedIcon />,
    },
  ];

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {linkItems.map((link) => (
          <Link key={link.name} to={link.link} className="nav-link">
            <ListItem button key={link.name} sx={{ color: "gray" }}>
              <ListItemIcon>{link.icon}</ListItemIcon>
              <ListItemText primary={link.name} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <MenuIcon onClick={toggleDrawer("left", true)} />

        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
