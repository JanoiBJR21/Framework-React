import React from "react";
const Item = (props) => {
  return (
    <li>
      {props.title}<span>{props.amount}</span>
    </li>
  );
};

export default Item;
