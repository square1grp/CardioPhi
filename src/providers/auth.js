import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext([{}, () => null]);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState();

  const signIn = () => {};

  const signOut = () => {};

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
