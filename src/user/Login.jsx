import React, { useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

import logo from "../image/logo-.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      email,
      password,
    };
    console.log(body);

    setLoading(true);

    axios
      .post("http://34.238.252.143:8000/login", body)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {/* <Navbar /> */}
      <Layout>
        <div className="flex justify-center items-center min-h-screen px-12 py-10 mt-4 text-left shadow-lg">
          <div className="px-12 py-10 mt-4 text-left shadow-lg">
            <img className="p-3" src={logo} alt="logo" />
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
                  <button className="bg-black text-white rounded-lg px-6 py-2 mt-4 font-semibold" type="submit">
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default Login;
