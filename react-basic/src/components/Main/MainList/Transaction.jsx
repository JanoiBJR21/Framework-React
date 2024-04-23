import React from "react";
import Item from "./Item";
import "./Transaction.css";
const Transaction = () => {
  const data = [
    { title: "ค่ารักษาพยาบาล", amount: "2000" },
    { title: "ค่ากระเป๋า", amount: "800" },
    { title: "ค่าเดีนทาง", amount: "1200" },
    { title: "ค่าเช่าบ้าน", amount: "9000" },
    { title: "เงินเดือน", amount: "35000" },
    { title: "ค่าประกันชีวิต", amount: "28000" },
  ];
  return (
    <ul className="item-list">
      {data.map((element) => {
        // return <Item title={element.title} amount={element.amount}/>;
        return <Item {...element}/>;
      })}
    </ul>
  );
};

export default Transaction;
