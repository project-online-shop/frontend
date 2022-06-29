import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="container grow p-3 flex flex-col bg-zinc-800 md:bg-zinc-500 rounded">
        <div
          className="cursor-pointer h-full flex flex-col"
          onClick={this.props.onClickItem}
        >
          <img
            className="max-w-full h-auto"
            width="500"
            height="750"
            src={this.props.imgItem}
            alt={this.props.imgItem}
          />
          <p className="text-white">{this.props.titleItem}</p>
          <p className="text-white">{this.props.priceItem}</p>
        </div>
      </div>
    );
  }
}

export default Card;
