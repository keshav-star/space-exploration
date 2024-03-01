import PropTypes from "prop-types";

import Navbar from "../templates/Navbar";
import Footer from "../templates/Footer";

const AuthLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayout;
