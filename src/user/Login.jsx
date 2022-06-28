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
      .post("https://virtserver.swaggerhub.com/Alfin7007/infinitysport/1.0.0/login", body)
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
        <div className="border shadow-lg flex flex-col justify-center items-center m-56 p-5">
          <img className="" src={logo} alt="logo" />
          <form className="w-full mx-auto" onSubmit={(e) => handleSubmit(e)}>
            <div>
              <p>email</p>
              <input
                className="w-1/2"
                id="input-email"
                label="Email"
                value={email}
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <p>Password</p>
              <input
                className="w-1/2"
                id="input-password"
                label="Password"
                value={password}
                type="email"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
            </div>
            <button
              className="bg-gra
             text-white rounded-full px-3 py-2"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default Login;
