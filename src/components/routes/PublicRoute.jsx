import { Navigate, Outlet } from "react-router-dom";
import { authenticatedPath } from "../../constants/routes.constant";
import useAuth from "../../hooks/useAuth";

const PublicRoute = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navigate to={authenticatedPath} /> : <Outlet />;
};

export default PublicRoute;
