import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/user/Login";
import Signup from "../src/user/Signup";
import HomePage from "./pages/HomePage";
import ShippingCart from "./pages/ShippingCart";
import DetailProduct from "../src/pages/DetailProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/shippingcart" element={<ShippingCart />} />
        <Route path="/detail" element={<DetailProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
