import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "../user/Login";

const Routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routes;
