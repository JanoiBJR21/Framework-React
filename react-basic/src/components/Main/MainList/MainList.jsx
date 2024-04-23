import React from "react";
import "./MainList.css";
import Transaction from "./Transaction";

const MainList = () => {
  return (
    <section>
      <h1>โปรแกรมบัญชีรายรคับ - รายจ่าย</h1>
      <Transaction />
    </section>
  );
};

export default MainList;
