import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductContext = createContext();
const Base_Url = "https://infinitysport.site";

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [transaction, setTransaction] = useState([]);
  const [loading, setLoading] = useState(false);

  const getDetail = async (id) => {
    try {
      const { data: response } = await axios.get(
        `${Base_Url}/products/${Number(id)}`
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCart = (id) => {
    axios
      .delete(`${Base_Url}/carts/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        window.alert("data berhasil dihapus dari cart");
        setCart(cart.filter((c) => c.id !== id));
      })
      .catch((err) => console.log(err));
  };

  const addToCart = (product_id, quantity) => {
    console.log(product_id, quantity);
    axios
      .post(
        `${Base_Url}/carts`,
        {
          product_id: product_id,
          quantity: quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then(() => window.alert("ditambahkan ke cart"))
      .catch((err) => console.log(err));
  };

  const createOrder = (cartId, address) => {
    axios
      .post(
        `${Base_Url}/orders`,
        {
          cartid: cartId,
          address: {
            receiver: address.receiver,
            phone: address.receiver,
            address: address.address,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((data) => {
        window.alert("checkout berhasil");
        console.log(data);
        return true;
      })
      .catch((err) => console.log(err));

    return true;
  };

  const confirmPayment = (paymentname, numbercard, paymentcode) => {
    // numbercard = Number(numbercard);
    console.log(paymentcode, paymentname, numbercard);
    axios
      .get(`${Base_Url}/orders/`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        axios
          .post(
            `${Base_Url}/orders/${res.data.data[0].ID}/confirm`,
            {
              paymentcode,
              numbercard,
              paymentname,
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          )
          .then(() => {
            window.alert("payment berhasil dikonfirmasi");
            return true;
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));

    return true;
  };

  useEffect(() => {
    const fetch = () => {
      axios
        .get(`${Base_Url}/products`)
        .then((res) => {
          console.log(res.data);
          setProducts(res.data.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));

      console.log(localStorage.getItem("token"));
      axios
        .get(`${Base_Url}/carts`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          setCart([...cart, ...res.data.data]);
        })
        .catch((err) => console.log(err));

      axios
        .get(`${Base_Url}/orders`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          setTransaction([...transaction, ...res.data.data]);
          console.log(transaction);
        });
    };
    setLoading(true);
    fetch();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        cart,
        transaction,
        getDetail,
        deleteCart,
        addToCart,
        createOrder,
        confirmPayment,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
