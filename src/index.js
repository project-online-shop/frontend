import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import EditProfilCard from "./components/EditProfilCard";
// import Login from "./components/Login";
// import Register from "./components/Register";
import App from "./App";
import { AuthProvider } from "./Context/AuthContext";
import { ProductProvider } from "./Context/ProductContext";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Layout from "./components/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
