import React from "react";
import { BsCart3, BsPerson } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="w-screen h-[80px] z-10 bg-violet-900 fixed drop-shadlow-lg">
      <div className="px-2 flex justify-around  items-center w-full h-full">
        <div className="flex items-center ">
          <h1 className="text-2xl font-bold mr-4 sm:text-1xl text-white">
            INFINITYSPORT.
          </h1>
        </div>
        <ul className="flex gap-4">
          <li>
            <BsCart3 className="w-6 h-6 text-white" />
          </li>
          <li>
            <BsPerson className="w-6 h-6 text-white" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
