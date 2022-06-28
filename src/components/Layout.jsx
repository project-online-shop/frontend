import React from "react";
import Navbar from "./Navbar";

function Layout(props) {
  return (
    <div className="w-full h-screen flex flex-col overflow-auto">
      {/* <Navbar /> */}
      <div className="h-full w-full">{props.children}</div>
    </div>
  );
}

export default Layout;
