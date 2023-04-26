import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./providers";
import { AuthRoutes, NonAuthRoutes } from "components";
import { SignIn } from "./pages/auth";
import { Home } from "pages";
import { ROUTE } from "utils";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTE.INDEX} element={<AuthRoutes />}>
            <Route index element={<Navigate to={ROUTE.HOME} replace />} />
            <Route path={ROUTE.HOME} element={<Home />} />
          </Route>

          <Route path={ROUTE.INDEX} element={<NonAuthRoutes />}>
            <Route index element={<Navigate to={ROUTE.AUTH_SIGN_IN} replace />} />
            <Route default path={ROUTE.AUTH_SIGN_IN} element={<SignIn />} />
          </Route>

          <Route path="*" element={<Navigate to={ROUTE.INDEX} replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
