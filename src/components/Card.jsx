import React from "react";

const Card = (props) => {
  return (
    <div className="container grow p-3 flex flex-col bg-white shadow-md rounded">
      <div className="cursor-pointer h-full flex flex-col" onClick={props.onClickItem}>
        <img className="max-w-full h-auto" width="500" height="" src={props.imgItem} alt={props.imgItem} />
      </div>
      <div>
        <p className="text-black">{props.titleItem}</p>
        <p className="text-black">Rp. {props.priceItem}</p>
      </div>
    </div>
  );
};

export default Card;
