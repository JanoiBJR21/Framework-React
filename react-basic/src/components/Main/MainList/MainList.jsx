import React from "react";
import "./MainList.css";
import Transaction from "./Transaction";


const MainList = () => {
  const designh1 = {color: "red", fontSize: "25px", textAlign: "center" }
  return (
    <section className="mainList-container">
      <h1 style={designh1}>
        โปรแกรมบัญชีรายรคับ - รายจ่าย
      </h1>
      <Transaction />
    </section>
  );
};

export default MainList;
