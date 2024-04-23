import React from "react";
const Item = ({title, amount}) => {
  return (
    <li>
      {title}<span>{amount}</span>
    </li>
  );
};

export default Item;
