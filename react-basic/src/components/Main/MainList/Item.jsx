import React from "react";
const Item = (props) => {
  const {title, amount} = props
  return (
    <li>
      {title}<span>{amount}</span>
    </li>
  );
};

export default Item;
