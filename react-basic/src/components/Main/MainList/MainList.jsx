import React, { useState } from "react";
import "./MainList.css";
import Transaction from "./Transaction";
import Form from "../Form/Form";
import DataContext from "../../../data/DataContext";
import Report from "./Report";

const MainList = () => {
  const designh1 = { color: "red", fontSize: "25px", textAlign: "center" };

  // const initdata = [
  //   { id: 1, title: "ค่ารักษาพยาบาล", amount: 2000 },
  //   { id: 2, title: "ค่าเช่าบ้าน", amount: 9000 },
  //   { id: 3, title: "เงินเดือน", amount: 35000 },
  // ];

  const [items, setItems] = useState([]);

  const onAddNewItem = (newItem) => {
    // console.log("ข้อมูลที่ส่งมาจาก Form ", newItem);
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };

  return (
    <DataContext.Provider value={"Apichat"}>
      <section className="mainList-container">
        <h1 style={designh1}>โปรแกรมบัญชีรายรคับ - รายจ่าย</h1>
        <Report/>
        <Form onAddItem={onAddNewItem} />
        <Transaction items={items} />
      </section>
    </DataContext.Provider>
  );
};

export default MainList;
