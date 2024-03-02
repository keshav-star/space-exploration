import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { message } from "antd";

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
        const decryptedData = JSON.parse(encryptedData);
        return {
          name: decryptedData.name,
          isAuthenticated: true,
        };
        //check error for where isAuthenticated is set True
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
      const decryptedData = JSON.parse(localStorage.getItem("reg_users"));
      if (
        decryptedData?.email === data?.cred?.email &&
        decryptedData?.password === data?.cred?.password
      ) {
        const d = {
          name: decryptedData?.name,
          isAuthenticated: true,
        };
        setAuthValue(d);
        if (typeof window !== "undefined") {
          localStorage.setItem(
            "login-token",
            JSON.stringify({ code: data?.code, name: decryptedData?.name})
          );
        }
      }
      else{
        message.warning("Credentials not found")
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
