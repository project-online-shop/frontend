import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

class Layout extends Component {
  render() {
    return (
      <div className="w-full h-screen flex flex-col overflow-auto bg-white">
        <Navbar title={this.props.title} />
        <div className="h-full w-full">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
