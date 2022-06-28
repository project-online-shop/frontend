import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [invalidMsg, setInvalidMsg] = useState("");
  const navigate = useNavigate();

  //   const Register = async (e) => {
  //     e.preventDefault();
  //     try {
  //       await axios.post(
  //         "https://virtserver.swaggerhub.com/iswanulumam/E-commerceApp/1.0.0/users/",
  //         {
  //           name: name,
  //           email: email,
  //           password: password,
  //           confPassword: confPassword,
  //         }
  //       );
  //       navigate("/login");
  //     } catch (error) {
  //       if (error.response) {
  //         console.log(error.response.data.msg);
  //       }
  //     }
  //   };

  const register = async (e) => {
    e.preventDefault();
    if (password !== confPassword) {
      setInvalidMsg("Password Not Same");
      setInvalid(true);
    } else {
      setInvalid(false);
      await axios
        .post("34.238.252.143:8000/signup", {
          name,
          email,
          password,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        {invalid && (
          <div className="text-center text-red-700">
            <p>{invalidMsg}</p>
          </div>
        )}
        <h3 className="text-2xl font-bold text-center">SignUp</h3>
        <form onSubmit={register}>
          <div className="mt-4">
            <div>
              <label className="block" for="email">
                Username
              </label>
              <input
                type="text"
                placeholder="UserName"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <div>
                <label className="block" for="email">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <div>
                  <label className="block" for="email">
                    Password
                  </label>
                  <input
                    type="Password"
                    placeholder="*********"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mt-4">
                  <div>
                    <label className="block" for="email">
                      Confirm Password
                    </label>
                    <input
                      type="Password"
                      placeholder="*********"
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                      value={confPassword}
                      onChange={(e) => setConfPassword(e.target.value)}
                    />
                  </div>
                  <div className="flex items-baseline justify-between">
                    <button className="px-6 py-2 mt-4 text-white bg-black rounded-lg hover:bg-slate-500 ">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
