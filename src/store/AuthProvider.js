import React, { useEffect, useState } from "react";
import { firebase } from "../firebase";

const initialState = {
  user: null,
  authenticated: false,
  setUser: {},
  loadingAuthState: false,
};

export const AuthContext = React.createContext(initialState);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [loadingAuthState, setLoadingAuthState] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      setLoadingAuthState(false);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        authenticated: user !== null,
        setUser,
        loadingAuthState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
