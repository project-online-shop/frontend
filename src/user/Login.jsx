import React, { useState } from "react";
import axios from "axios";

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
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>email</label>
        <input
          className="font-sm text-base p-2 border border-slate-700 m-3"
          type="text"
          id="input-email"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <label>password</label>
        <input
          className="font-sm text-base p-2 border border-slate-700 m-3"
          type="password"
          id="input-password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button className="bg-slate-600 text-white p-2" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
