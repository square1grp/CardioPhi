import React, { createContext, useContext, useEffect, useState } from "react";
import {
  cognitoUserSignIn,
  cognitoUserSignUp,
  getCurrentUser,
} from "utils/cognito";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "utils";

const AuthContext = createContext([
  {
    isLoggedIn: false,
    currentUser: null,
  },
  () => null,
]);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getCurrentUser().then(setCurrentUser).catch(console.error);
  }, []);

  const isLoggedIn = !!currentUser;

  const signUp = ({ firstName, lastName, email, password }) =>
    cognitoUserSignUp({ firstName, lastName, email, password })
      .then(() => {
        toast.success("Sign up is completed...");
        navigate(ROUTE.AUTH_SIGN_IN);
      })
      .catch((error) => toast.error(error.message || JSON.stringify(error)));

  const signIn = ({ email, password }) =>
    cognitoUserSignIn(email, password).then(console.log).catch(console.error);

  const signOut = () => {};

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        currentUser,
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
