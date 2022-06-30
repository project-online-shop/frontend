import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { ProductContext } from "../Context/ProductContext";

const HomePage = () => {
  const navigate = useNavigate();
  const { products } = useContext(ProductContext);
  return (
    <Layout>
      <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-4 lg:grid-cols-5 m-2 gap-3">
        {products.map((item) => (
          <Card
            key={item.id}
            id={item.id}
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
