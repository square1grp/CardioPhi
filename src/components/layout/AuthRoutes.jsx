import { useAuth } from "providers";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTE } from "utils";
import { LoadingScreen } from "components";

export const AuthRoutes = () => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn === undefined) return <LoadingScreen show={true} />;

  if (isLoggedIn) return <Outlet />;

  return <Navigate to={ROUTE.AUTH_SIGN_IN} />;
};
