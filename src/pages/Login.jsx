import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

import infinitySport from "../images/infinitySport.png";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const { login, isAuthenticated } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    navigate("/");
  };

  return (
    <>
      <Layout>
        <div className="flex justify-center items-center min-h-screen px-12 py-10 mt-4 text-left shadow-lg">
          <div className="px-12 py-10 mt-4 text-left shadow-lg">
            <img className="p-3" src={infinitySport} alt="logo" />
            <h3 className="text-2xl font-bold text-center">Login</h3>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
              <div className="mt-4">
                <div>
                  <label className="block" for="email">
                    Email
                  </label>
                  <input
                    id="input-email"
                    label="Email"
                    type="text"
                    placeholder="Email"
                    value={email}
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="mt-4">
                  <div>
                    <label className="block" for="email">
                      Password
                    </label>
                    <input
                      id="input-password"
                      label="Password"
                      type="Password"
                      value={password}
                      placeholder="password"
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  <button
                    className="bg-slate-500 text-white rounded-lg px-6 py-2 mt-4 bg-slate"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Login;
