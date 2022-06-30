import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import ShippingCart from "./pages/ShippingCart";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import Profile from "./pages/Profile";
import Transaction from "./pages/Transaction";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:detailProduct" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shippingcart" element={<ShippingCart />} />
        <Route path="/transaksi" element={<Transaction />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
