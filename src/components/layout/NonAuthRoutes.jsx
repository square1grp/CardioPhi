import { useAuth } from "providers";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTE } from "utils";
import Loading from "./Loading";

const NonAuthRoutes = () => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn === undefined) return <Loading />;

  if (!isLoggedIn) return <Outlet />;

  return <Navigate to={ROUTE.INDEX} />;
};

export default NonAuthRoutes;
