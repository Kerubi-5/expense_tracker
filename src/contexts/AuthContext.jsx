import { createContext, useContext } from "react";

// FIREBASE AUTHENTICATION
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, google_provider } from "../utils/firebase";

// FIREBASE HOOKS
import { useAuthState } from "react-firebase-hooks/auth";

export const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user] = useAuthState(auth);

  const google = () => {
    signInWithPopup(auth, google_provider);
  };

  const logout = () => {
    signOut(auth);
  };

  const value = {
    user,
    google,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
