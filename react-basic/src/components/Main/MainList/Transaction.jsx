import React from "react";
import Item from "./Item";
import "./Transaction.css";
const Transaction = () => {
  const data = [
    {id: 1, title: "ค่ารักษาพยาบาล", amount: "2000" },
    {id: 2, title: "ค่ากระเป๋า", amount: "800" },
    {id: 3, title: "ค่าเดีนทาง", amount: "1200" },
    {id: 4, title: "ค่าเช่าบ้าน", amount: "9000" },
    {id: 5, title: "เงินเดือน", amount: "35000" },
    {id: 6, title: "ค่าประกันชีวิต", amount: "28000" },
  ];
  return (
    <ul className="item-list">
      {data.map((element) => {
        return <Item key = {element.id} {...element}/>;
      })}
    </ul>
  );
};

export default Transaction;
