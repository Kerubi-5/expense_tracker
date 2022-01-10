import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

import Error from "./Error";

import { useAuth } from "../contexts/AuthContext";

const ProfilePage = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  }

  if (user) {
    return (
      <div>
        Hello from user
        <h1>Hello</h1>
        your name is {user.email}
      </div>
    );
  } else {
    return <Error />;
  }
};

export default ProfilePage;
