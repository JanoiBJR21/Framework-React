import React from "react";
import "./MainList.css";
import Transaction from "./Transaction";
import Form from "../Form/Form";


const MainList = () => {
  const designh1 = {color: "red", fontSize: "25px", textAlign: "center" }
  return (
    <section className="mainList-container">
      <h1 style={designh1}>
        โปรแกรมบัญชีรายรคับ - รายจ่าย
      </h1>
      <Form/>
      <Transaction />
    </section>
  );
};

export default MainList;
