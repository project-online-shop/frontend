import React from "react";
import sepatu from "../image/spt.jpg";

const DetailProduct = () => {
  return (
    <div className=" grid-cols-2 gap-2 border shadow-2xl flex justify-center items-center p-5 m-16">
      <div className="">
        <img width="300px" height="300px" src={sepatu} alt="sepatu" />
      </div>
      <div className="">
        <h2 className="text-2xl font-bold flex justify-end items-center my-5">NIKE DUNK LOW BLACK WHITE</h2>
        <span className="text-xl font-bold text-red-700 flex justify-center items-center my-5">Rp. 4.990.000</span>
        <p className="text-base font-semibold flex justify-center items-center my-5">BINB AND AUTHENTIC</p>
        <p className="flex justify-center items-center text-sm my-5 font-semibold">stock : 4</p>
      </div>
    </div>
  );
};

export default DetailProduct;
