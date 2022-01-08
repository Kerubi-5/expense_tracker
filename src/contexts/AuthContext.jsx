import { createContext, useContext } from "react";

// FIREBASE AUTHENTICATION
import {
  signInWithRedirect,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
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

  const signUp = (name, pass) => {
    if (!name || !pass) return;

    createUserWithEmailAndPassword(auth, name, pass)
      .then(() => {
        console.log("signUp success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signIn = (name, pass) => {
    if (!name || !pass) return;

    signInWithEmailAndPassword(auth, name, pass)
      .then(() => {
        console.log("sign in succesful");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logout = () => {
    signOut(auth);
  };

  const value = {
    user,
    loading,
    google,
    signUp,
    signIn,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
