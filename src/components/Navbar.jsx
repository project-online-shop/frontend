import React from "react";
import infinitySport from "../images/infinitySport.png";

const Navbar = (props) => {
  return (
    <nav className="sticky top-0 w-full px-2 py-2.5 bg-white flex justify-between items-center drop-shadow-xl">
      <div className="flex">
        <img
          src={infinitySport}
          alt="logo_infinitySport"
          className="w-20 h-20"
        />
      </div>
      <div>
        <form class="flex items-center">
          <label for="simple-search" class="sr-only">
            Search
          </label>
          <div class="relative w-full">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="text-sm rounded-lg block w-full pl-10 p-2.5 bg-white shadow-lg"
              placeholder="Search"
              required
            />
          </div>
        </form>
      </div>
      <div className="flex gap-2">
        <button className="px-6 py-2 mt-4 text-black bg-white border border-black rounded-lg hover:bg-slate-500 ">
          Sign Up
        </button>
        <button className="px-6 py-2 mt-4 text-white bg-black rounded-lg hover:bg-slate-500 ">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
