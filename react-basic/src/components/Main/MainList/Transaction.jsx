import React from "react";
import Item from "./Item";
import "./Transaction.css";
import { v4 as uuidv4 } from "uuid";

const Transaction = () => {
  const data = [
    { title: "ค่ารักษาพยาบาล", amount: 2000 },
    { title: "ค่ากระเป๋า", amount: 800 },
    { title: "ค่าเดีนทาง", amount: 1200 },
    { title: "ค่าเช่าบ้าน", amount: 9000 },
    { title: "เงินเดือน", amount: 35000 },
    { title: "ค่าประกันชีวิต", amount: 28000 },
  ];
  return (
    <ul className="item-list">
      {data.map((element) => {
        return <Item key = {uuidv4()} {...element} />;
      })}
    </ul>
  );
};

export default Transaction;
