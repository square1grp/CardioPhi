import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext([{}, () => null]);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signUp = (data) => {
    console.log("data: ", data);
  };

  const signIn = ({ username, passowrd }) => {};

  const signOut = () => {};

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        signUp,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
