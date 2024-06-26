import React, { useState, useEffect, useReducer } from "react";
import "./MainList.css";
import Transaction from "./Transaction";
import Form from "../Form/Form";
import DataContext from "../../../data/DataContext";
import Report from "./Report";

const MainList = () => {
  const designh1 = { color: "red", fontSize: "25px", textAlign: "center" };

  // ตัวอย่าง Item รายการ รายรับ , รายจ่าย
  // const initdata = [
  //   { id: 1, title: "ค่ารักษาพยาบาล", amount: -2000 },
  //   { id: 2, title: "ค่าเช่าบ้าน", amount: -9000 },
  //   { id: 3, title: "เงินเดือน", amount: 35000 },
  //   { id: 4, title: "ค่าเดินทาง", amount: -800 },
  //   { id: 5, title: "โบนัส", amount: 15000 },
  // ];

  const [items, setItems] = useState([]);
  // console.log(items);
  const [reportIcome, setReportIcome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);

  // เพิ่ม Item เมื่อมีการกดปุ่ม เพิ่มข้อมูล
  const onAddNewItem = (newItem) => {
    // console.log("ข้อมูลที่ส่งมาจาก Form ", newItem);
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };

  useEffect(() => {
    const amounts = items.map((items) => items.amount);
    // console.log(amounts);

    const income = amounts
      .filter((element) => element > 0)
      .reduce((total, element) => (total += element), 0);

    const expense =
      amounts
        .filter((element) => element < 0)
        .reduce((total, element) => (total += element), 0) * -1;

    // console.log("ยอดรายได้ = ", income);
    // console.log("ยอดรายจ่าย = ", expense);
    setReportIcome(income);
    setReportExpense(expense);
  }, [items, reportIcome, reportExpense]);

  // การนิยาม reducer
  const [showReport, setShowReport] = useState(false);
  const reducer = (showReport, action) => {
    switch (action.type) {
      case "SHOW":
        return setShowReport(true);
      case "HIDE":
        return setShowReport(false);
      // case "Clear":
      //   return 0;
    }
  };
  const [result, dispatch] = useReducer(reducer, showReport);
  return (
    <DataContext.Provider
      value={{
        income: reportIcome,
        expense: reportExpense,
      }}
    >
      <section className="mainList-container">
        <h1 style={designh1}>โปรแกรมบัญชีรายรคับ - รายจ่าย</h1>
        {showReport && <Report />}
        <Form onAddItem={onAddNewItem} />
        <Transaction items={items} />

        <div align="center">
          {/* <p style={{ color: "red", fontSize: 30 }}>{result}</p> */}

          {/* payload: 10 เพิ่มค่าครั้งละ 10 */}
          <button
            style={{ padding: 10, margin: 10 }}
            onClick={() => dispatch({ type: "SHOW"})}
          >
            แสดง
          </button>

          {/* payload: 10 ลดค่าครั้งละ 10 */}
          <button
            style={{ padding: 10, margin: 10 }}
            onClick={() => dispatch({ type: "HIDE"})}
          >
            ซ่อน
          </button>
          {/* <button
        style={{ padding: 10, margin: 10 }}
        onClick={() => dispatch({ type: "Clear" })}
      >
        ล้าง
      </button> */}
        </div>
      </section>
    </DataContext.Provider>
  );
};

export default MainList;
