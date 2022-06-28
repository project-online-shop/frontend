import React from "react";
import { BsCart3, BsPerson } from "react-icons/bs";
import logo from "../image/logo.png";

const Navbar = () => {
  return (
    <div className="w-screen h-[80px] z-10 bg-white fixed shadlow-lg">
      <div className="px-2 flex justify-around  items-center w-full h-full">
        <div className="flex items-center ">
          <img className="w-20" src={logo} alt="logo" />
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
