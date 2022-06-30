// import React from "react";

import axios from "axios";
import Layout from "../components/Layout";
// import { useEffect, useState } from "react";
import sepatu from "../images/sepatu.jpg";

const Transaction = () => {
  return (
    <Layout>
      <div className="flex gap-6 min-h-screen">
        <div className="flex items-center">
          <div class="flex mr-2">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          <img className="rounded-full" width="60" src={sepatu} alt="sepatu" />
          <div className="flex flex-col ml-3">
            <span className="md:text-md font-medium">
              NIKE JORDAN BUKAN ABAL ABAL
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="pr-8 flex">
            <input
              type="text"
              className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
              value="2"
            />
          </div>
          <div className="pr-8">
            <span className="text-xs font-medium">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format("6000000")}
            </span>
          </div>
          <span>status : Paid</span>
          <div>
            <button className="p-1 bg-black text-white rounded-md text-center ml-4">
              Delete
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Transaction;
