import { createContext, useContext } from "react";

// FIREBASE AUTHENTICATION
import { signInWithRedirect, signOut } from "firebase/auth";
import { auth, google_provider } from "../utils/firebase";

// FIREBASE HOOKS
import { useAuthState } from "react-firebase-hooks/auth";

export const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  const google = () => {
    signInWithRedirect(auth, google_provider);
  };

  const logout = () => {
    signOut(auth);
  };

  const value = {
    user,
    loading,
    google,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
