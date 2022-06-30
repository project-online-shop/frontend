import React, { useContext, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Cart2 from "../components/Cart2";
// import Cart from "../components/Cart";
import Layout from "../components/Layout";
import { ProductContext } from "../Context/ProductContext";

const ShippingCart = () => {
  let navigate = useNavigate();
  const { cart, createOrder, confirmPayment } = useContext(ProductContext);
  const cartid = [];
  const [searchParams, setSearchParams] = useSearchParams();
  const [receiver, setReceiver] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [paymentname, setPaymentName] = useState("");
  const [numbercard, setNumberCard] = useState("");
  const [paymentcode, setPaymentCode] = useState("");

  const getCartid = () => {
    return cart.map((data) => cartid.push(data.id));
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    getCartid();
    const newOrder = createOrder(cartid, {
      receiver,
      phone,
      address,
    });

    if (newOrder) {
      setSearchParams({ q: "confirm" });
    }
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    const confirm = confirmPayment(paymentname, numbercard, paymentcode);
    if (confirm) {
      navigate("/");
    }
  };

  const subTotal = () => {
    if (cart.length <= 0) {
      return 0;
    }

    if (cart.length === 1) {
      return cart[0].price * cart[0].quantity;
    }

    return cart.reduce((a, b) => {
      return a.price * a.quantity + b.price * b.quantity;
    });
  };
  return (
    <Layout>
      <div className="h-screen bg-gray-300">
        {searchParams.get("q") === "confirm" ? (
          <div className="p-5 bg-gray-800 rounded overflow-vesible">
            <span className="texxt-xl font-medium text-gray-100 block pb-3">
              Confirm Payment
            </span>
            <div className="flex justify-center flex-col pt-3">
              <label className="text-xs text-gray-400">Nama Payment</label>
              <input
                type="text"
                className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                placeholder="Andaru Akbar"
                onChange={(e) => setPaymentName(e.target.value)}
              />
            </div>
            <div className="flex justify-center flex-col pt-3">
              <label className="text-xs text-gray-400">Kode Payment</label>
              <input
                type="text"
                className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                placeholder="+62 8123456789"
                onChange={(e) => setPaymentCode(e.target.value)}
              />
            </div>
            <div className="flex justify-center flex-col pt-3">
              <label className="text-xs text-gray-400">Nomor Kartu</label>
              <input
                type="text"
                className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                placeholder="Jl. Sooko - Pulung, Ponorogo, Jawatimur, kode pos : ...."
                onChange={(e) => setNumberCard(e.target.value)}
              />
            </div>

            <button
              className="h-12 w-full bg-blue-500 rounded focus:outline-none text-white hover:bg-blue-600"
              onClick={(e) => handleConfirm(e)}
            >
              Konfirmasi
            </button>
          </div>
        ) : (
          <div className="py-12">
            <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg md:max-w-5xl">
              <div className="md:flex">
                <div className="w-full p-4 px-5 py-5">
                  <div className="md:grid md:grid-cols-3 gap-2">
                    <div className="col-span-2 p-5">
                      <h1 className="text-xl font-medium">Shopping Cart</h1>
                      {cart.length === 0 && <h1>Empty</h1>}
                      {cart &&
                        cart.map((data) => {
                          return <Cart2 product={data} />;
                        })}
                      <div className="flex justify-between items-center mt-6 pt-6 border-t">
                        <div className="flex items-center">
                          <div className="flex flex-col ">
                            <div>
                              <input
                                id="default-checkbox"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="default-checkbox"
                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                Pilih Semua
                              </label>
                            </div>
                            <div className="mt-4">
                              <span className="text-sm font-medium  text-gray-400">
                                Subtotal:
                              </span>
                              <span className="text-sm font-bold  text-red-600">
                                {new Intl.NumberFormat("id-ID", {
                                  style: "currency",
                                  currency: "IDR",
                                }).format(subTotal())}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-md font-medium text-blue-500 mt-4">
                        <Link to="/">Back Homepage</Link>
                      </p>
                    </div>
                    <div className="p-5 bg-gray-800 rounded overflow-vesible">
                      <span className="texxt-xl font-medium text-gray-100 block pb-3">
                        Card Details
                      </span>
                      <div className="flex justify-center flex-col pt-3">
                        <label className="text-xs text-gray-400">
                          Nama Penerima
                        </label>
                        <input
                          type="text"
                          className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                          placeholder="Andaru Akbar"
                          onChange={(e) => setReceiver(e.target.value)}
                        />
                      </div>
                      <div className="flex justify-center flex-col pt-3">
                        <label className="text-xs text-gray-400">
                          Nomor Telepon
                        </label>
                        <input
                          type="text"
                          className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                          placeholder="+62 8123456789"
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                      <div className="flex justify-center flex-col pt-3">
                        <label className="text-xs text-gray-400">
                          Alamat Tujuan
                        </label>
                        <input
                          type="text"
                          className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                          placeholder="Jl. Sooko - Pulung, Ponorogo, Jawatimur, kode pos : ...."
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>

                      <button
                        className="h-12 w-full bg-blue-500 rounded focus:outline-none text-white hover:bg-blue-600"
                        onClick={(e) => handleCheckout(e)}
                      >
                        Check Out
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};
export default ShippingCart;
