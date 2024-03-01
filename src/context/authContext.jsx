import { createContext, useState } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext({
  authData: {
    isAuthenticated: false,
  },
  setAuthData: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [authData, setAuthValue] = useState(() => {
    if (typeof window === "undefined") {
      return {
        isAuthenticated: false,
      };
    }
    try {
      const encryptedData = localStorage.getItem("login-token");
      if (encryptedData) {
        return JSON.parse(encryptedData)
      }
      return {
        isAuthenticated: false,
      };
    } catch (error) {
      console.log(error);
      return {
        isAuthenticated: false,
      };
    }
  });

  const setAuthData = (data) => {
    try {
      setAuthValue(data);
      if (typeof window !== "undefined") {
        localStorage.setItem("login-token", JSON.stringify(data));
      }
    } catch (error) {
      console.error("Error setting authData:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
