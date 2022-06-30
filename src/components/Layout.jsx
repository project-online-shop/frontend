import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <div className="w-full h-screen flex flex-col overflow-auto bg-white">
      <Navbar title={props.title} />
      <div className="h-full w-full">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
