import React from "react";
import "./MainList.css";
import Transaction from "./Transaction";

const Titel = () => <h1>โปรแกรมบัญชีรายรคับ - รายจ่าย</h1>;
const MainList = () => {
  return (
    <section>
      <Titel />
      <Transaction />
    </section>
  );
};

export default MainList;
