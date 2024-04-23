import React from "react";
import "./Item.css"
const Item = () => {
  const name = "เดีนห้างซื้อของ"
  const amount = "-2000"
  return (
    <li className="item">
      {name} <span>{amount}</span>
    </li>
  );
};

export default Item;
