import React, { Component, useContext } from "react";
import sepatu from "../images/sepatu.jpg";
import { Checkbox } from "@material-tailwind/react";
import { ProductContext } from "../Context/ProductContext";

const Cart2 = ({ product }) => {
  const { deleteCart } = useContext(ProductContext);
  return (
    <div className="flex justify-between items-center mt-6 pt-6">
      <div className="flex items-center">
        <div class="flex items-center mr-2">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>

        <img
          className="rounded-full"
          width="60"
          src={product.image}
          alt={product.name}
        />
        <div className="flex flex-col ml-3">
          <span className="md:text-md font-medium">{product.product_name}</span>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="pr-8 flex">
          <span className="font-semibold">-</span>
          <input
            type="text"
            className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
            value={product.quantity}
          />
          <span className="font-semibold">+</span>
        </div>
        <div className="pr-8">
          <span className="text-xs font-medium">
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(product.price * product.quantity)}
          </span>
        </div>
        <div>
          <button
            className="p-1 bg-black text-white rounded-md text-center"
            onClick={(e) => deleteCart(product.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart2;
