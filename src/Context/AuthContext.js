import { createContext, useEffect, useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  //   const []

  const login = (email, password) => {
    axios
      .post("http://34.238.252.143/login", {
        email,
        password,
      })
      .then(({ data }) => {
        console.log(data);
        localStorage.setItem("token", data.token);
        console.log(localStorage.getItem("token"));
        console.log(jwtDecode(data.token));
        setAuthenticated(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthenticated(true);
    }
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login }}>
      {children}
    </AuthContext.Provider>
  );
};
