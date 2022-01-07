import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { blue } from "@mui/material/colors";

import { useAuth } from "../contexts/AuthContext";

function SimpleDialog(props) {
  const { google } = useAuth();
  const { onClose, open } = props;

  const auth_providers = [
    {
      icon: <FacebookIcon />,
      text: "FACEBOOK",
    },
    {
      icon: <GoogleIcon />,
      text: "GOOGLE",
      auth: google,
    },
  ];

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = (auth) => {
    if (auth) auth();
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth={true}>
      <DialogTitle>Select a mode of login</DialogTitle>
      <List sx={{ pt: 0 }}>
        {auth_providers.map((provider) => (
          <ListItem
            button
            key={provider.text}
            onClick={() => handleListItemClick(provider.auth)}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                {provider.icon}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={provider.text} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleClickOpen}>
        LOGIN
      </Button>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}
