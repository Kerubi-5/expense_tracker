import { createContext, useContext } from "react";

// FIREBASE AUTHENTICATION
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, google_provider } from "../utils/firebase";

export const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const google = () => {
    signInWithPopup(auth, google_provider);
  };

  const logout = () => {
    signOut(auth);
  };

  const value = {
    google,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
