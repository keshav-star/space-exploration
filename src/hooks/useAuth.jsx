import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AuthContext from "../context/authContext";

const useAuth = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { authData, setAuthData } = useContext(AuthContext);
  const isAuthenticated = authData?.isAuthenticated ?? false;

  const loginUser = (data) => {
    setAuthData({ ...data, isAuthenticated: true });
    const redirectUrl = state?.from || "/";
    navigate(redirectUrl);
  };

  const logoutUser = () => {
    setAuthData({ isAuthenticated: false });
    Promise.resolve().then(() => {
      localStorage.removeItem("login-token");
    });
    navigate("/login");
  };

  return { authData, isAuthenticated, loginUser, logoutUser };
};

export default useAuth;
