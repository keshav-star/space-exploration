import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import Footer from '../templates/Footer';
import Navbar from '../templates/Navbar';
import PageLoader from '../templates/PageLoader';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div>
        <Suspense fallback={<PageLoader />}>
          <main>
            <Outlet />
          </main>
        </Suspense>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
