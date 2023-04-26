import { useAuth } from "providers";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTE } from "utils";
import Loading from "./Loading";

const AuthRoutes = () => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn === undefined) return <Loading />;

  if (isLoggedIn) return <Outlet />;

  return <Navigate to={ROUTE.AUTH_SIGN_IN} />;
};

export default AuthRoutes;
