import { Navigate, Route, Routes } from 'react-router-dom';

// import ProtectedRoute from '../components/routes/ProtectedRoute';
// import PublicRoute from '../components/routes/PublicRoute';
// import { protectedRoutes } from '../config/route-configs/protected.routes';
// import { publicRoutes } from '../config/route-configs/public.routes';
import { PATHS } from '../constants/page-paths';
import Layout from '../components/layouts/Layout';
import { routes } from '../config/route-configs/routes';

const Pages = () => {
  return (
    <>
      <Routes>
        {/* <Route element={<ProtectedRoute />}>
          {protectedRoutes.map((route, index) => (
            <Route key={index} path={route.path} Component={route.component} />
          ))}
        </Route>
        <Route element={<PublicRoute />}>
          {publicRoutes.map((route, index) => (
            <Route key={index} path={route.path} Component={route.component} />
          ))}
        </Route> */}
         <Route path="/" element={<Layout />}>
          {routes?.map((route) => (
            <Route
              key={route.name}
              path={route.path}
              Component={route.component}
            />
          ))}
        </Route>
        <Route path="*" element={<Navigate to={PATHS.HOME} />} />
      </Routes>
    </>
  );
};

export default Pages;
