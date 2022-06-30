import React, { Component, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Card = (props) => {
  let navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);
  const handleCart = (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      navigate("/login");
    }
  };
  return (
    <div className="container grow p-3 flex flex-col bg-white shadow-md rounded">
      <div className="cursor-pointer h-full flex flex-col">
        <Link to={`/detail/${props.id}`}>
          <img
            className="max-w-full h-auto"
            width="500"
            height="750"
            src={props.imgItem}
            alt={props.imgItem}
          />
        </Link>
      </div>
      <div>
        <p className="text-black font-bold">{props.titleItem}</p>
        <p className="text-red-600 font-semibold">
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(props.priceItem)}
        </p>
      </div>
      <button
        className="border bg-black text-white p-1 w-auto mt-2 rounded-md font-semibold"
        onClick={(e) => handleCart(e)}
      >
        <Link to={`detail/${props.id}`}>Details</Link>
      </button>
    </div>
  );
};

export default Card;
