import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./providers";
import { AuthRoutes, NonAuthRoutes } from "components";
import { SignIn, SignUp } from "./pages";
import { ROUTE } from "utils";
import "assets/scss/styles.scss";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path={ROUTE.INDEX} element={<AuthRoutes />}>
            <Route index element={<Navigate to={ROUTE.HOME} replace />} />
          </Route>

          <Route path={ROUTE.INDEX} element={<NonAuthRoutes />}>
            <Route
              index
              element={<Navigate to={ROUTE.AUTH_SIGN_IN} replace />}
            />
            <Route default path={ROUTE.AUTH_SIGN_IN} element={<SignIn />} />
            <Route default path={ROUTE.AUTH_SIGN_UP} element={<SignUp />} />
          </Route>

          <Route path="*" element={<Navigate to={ROUTE.INDEX} replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
