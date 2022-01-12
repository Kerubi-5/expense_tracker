import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import ModeEditIcon from "@mui/icons-material/ModeEdit";

import { useAuth } from "../contexts/AuthContext";

import { updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";

const ProfilePage = () => {
  const { user } = useAuth();
  const [displayName, setDisplayName] = useState(user.displayName);
  // const [email, setEmail] = useState(user.email);
  const [editable, setEditable] = useState(false);

  const handleSubmit = () => {
    setEditable(false);

    updateProfile(auth.currentUser, {
      displayName: displayName,
    });
  };

  return (
    <>
      <CssBaseline />
      <Container fixed>
        <div className="profile-page">
          {editable ? (
            <Avatar
              sx={{
                width: 64,
                height: 64,
                alignSelf: "center",
                cursor: "pointer",
              }}
            >
              <ModeEditIcon />
            </Avatar>
          ) : (
            <Avatar
              alt={user.displayName ? user.displayName : "N/A"}
              src={user.photoURL}
              sx={{
                width: 64,
                height: 64,
                alignSelf: "center",
              }}
            />
          )}

          <Button variant="outlined" onClick={() => setEditable(!editable)}>
            EDIT USER
          </Button>
          <TextField
            id="displayName"
            label="Display name"
            variant="outlined"
            value={displayName}
            disabled={editable ? false : true}
            onChange={(event) => setDisplayName(event.target.value)}
          />

          {/* <TextField
            id="username"
            label="Username"
            variant="outlined"
            value={username}
            disabled={editable ? false : true}
            onChange={(event) => setUsername(event.target.value)}
          /> */}
          {/* <TextField
            id="email"
            label="Email"
            variant="outlined"
            type="email"
            value={email}
            disabled={editable ? false : true}
            onChange={(event) => setEmail(event.target.value)}
          /> */}
          {editable && (
            <Button variant="contained" onClick={() => handleSubmit()}>
              SUBMIT
            </Button>
          )}
        </div>
      </Container>
    </>
  );
};

export default ProfilePage;
