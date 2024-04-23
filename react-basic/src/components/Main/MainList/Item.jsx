import React from "react";
const Item = () => {
  const name = "เดีนห้างซื้อของ"
  const amount = "-2000"
  return (
    <li>
      {name} <span>{amount}</span>
    </li>
  );
};

export default Item;
