import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import useAuth from "../../hooks/useAuth";
import { unAuthenticatedPath } from "../../constants/routes.constant";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  return isAuthenticated ? (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  ) : (
    <Navigate to={unAuthenticatedPath} state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
