import React from "react";
import Item from "./Item";
import "./Transaction.css";
import DataContext from "../../../data/DataContext";

const Transaction = (props) => {
  const { item } = props;

  return (
    <div>
      <ul className="item-list">
        {item.map((element) => {
          return <Item {...element} key={element.id} />;
        })}
      </ul>
      <DataContext.Consumer>{(value) => <p>{value}</p>}</DataContext.Consumer>
    </div>
  );
};

export default Transaction;
