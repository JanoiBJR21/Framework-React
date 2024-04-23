import React from "react";
const Item = ({title, amount}) => {
  // const {title, amount} = props
  return (
    <li>
      {title}<span>{amount}</span>
    </li>
  );
};

export default Item;
