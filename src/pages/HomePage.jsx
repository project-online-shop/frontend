import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";

const HomePage = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = () => {
      axios
        .get("http://34.238.252.143:8000/products")
        .then((res) => {
          console.log(res);
          setProduct(res.data.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    };
    setLoading(true);
    fetchProduct();
    console.log(product);
  }, []);
  return (
    <Layout>
      <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-4 lg:grid-cols-5 m-2 gap-3">
        {product.map((item) => (
          <Card
            key={item.id}
            titleItem={item.name}
            imgItem={item.url}
            priceItem={item.price}
          />
        ))}
      </div>
    </Layout>
  );
};

export default HomePage;
