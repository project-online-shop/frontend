import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="container grow p-3 flex flex-col bg-white shadow-md rounded">
        <div
          className="cursor-pointer h-full flex flex-col"
          onClick={this.props.onClickItem}
        >
          <img
            className="max-w-full h-auto"
            width="500"
            height=""
            src={this.props.imgItem}
            alt={this.props.imgItem}
          />
        </div>
        <div>
          <p className="text-black">{this.props.titleItem}</p>
          <p className="text-black">Rp. {this.props.priceItem}</p>
        </div>
      </div>
    );
  }
}

export default Card;
