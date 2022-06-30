import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { AuthContext } from "../Context/AuthContext";
import { ProductContext } from "../Context/ProductContext";
// import sepatu from "../image/spt.jpg";

const DetailProduct = () => {
  let navigate = useNavigate();
  let { detailProduct } = useParams();
  const { getDetail, addToCart } = useContext(ProductContext);
  const { isAuthenticated } = useContext(AuthContext);
  const [isLoading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState({
    id: 0,
    name: "",
    detail: "",
    photo: "",
    price: 0,
    stock: 0,
    url: "",
    userId: 0,
  });

  const handleCart = (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      navigate("/login");
    }

    addToCart(product.id, quantity);
  };

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      const data = await getDetail(detailProduct);
      setProduct({
        id: data.id,
        name: data.name,
        detail: data.detail,
        photo: data.photo,
        price: data.price,
        stock: data.stock,
        url: data.url,
        userId: data.userId,
      });
      setLoading(false);
    };
    fetch();
  }, []);

  return isLoading ? (
    <h1>Loading</h1>
  ) : (
    <Layout>
      <div className=" grid-cols-2 gap-2 border shadow-2xl flex justify-center items-center p-5 m-16">
        <div className="pr-5">
          <img width="300px" height="300px" src={product.url} alt="sepatu" />
        </div>
        <div style={{ padding: "20px" }}>
          <h2 className="text-2xl font-bold my-5">{product.name}</h2>
          <span className="text-xl font-bold text-red-700  my-5">
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(product.price)}
          </span>
          <p className="text-base font-semibold my-5">{product.detail}</p>
          <p className=" text-sm my-5 font-semibold">stock : {product.stock}</p>
          <div className="w-full">
            <div className="flex items-center justify-between">
              <button
                className={`py-2 px-4 disabled:bg-blue-200 bg-blue-500 text-white rounded-md`}
                onClick={() => setQuantity((prev) => prev - 1)}
                disabled={quantity === 0 ? true : false}
              >
                -
              </button>
              <input type="number" className="text-center" value={quantity} />
              <button
                className={`py-2 px-4 disabled:bg-blue-200 bg-blue-500 text-white rounded-md`}
                onClick={() => setQuantity((prev) => prev + 1)}
                disabled={quantity === product.stock ? true : false}
              >
                +
              </button>
            </div>
            <button
              className="p-3 mt-2 w-full text-white rounded-md bg-black"
              onClick={(e) => handleCart(e)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailProduct;
