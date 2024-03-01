import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../components/routes/ProtectedRoute";
import { protectedRoutes } from "../config/route-configs/protected.routes";
import PublicRoute from "../components/routes/PublicRoute";
import { publicRoutes } from "../config/route-configs/public.routes";

const Pages = () => {
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoute />}>
          {protectedRoutes.map((route, index) => (
            <Route key={index} path={route.path} Component={route.component} />
          ))}
        </Route>
        <Route element={<PublicRoute />}>
          {publicRoutes.map((route, index) => (
            <Route key={index} path={route.path} Component={route.component} />
          ))}
        </Route>
      </Routes>
    </>
  );
};

export default Pages;
