import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
// MUI COMPONENTS
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const ProtectedRoutes = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  }

  if (user) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoutes;
