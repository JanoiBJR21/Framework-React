import React from "react";
import DataContext from "../../../data/DataContext";
import { useContext } from "react";
import "./Report.css";
import numeral from "numeral";

const Report = () => {
  // {/* การเรียกใช้งานแบบ useContext */}
  const { income, expense } = useContext(DataContext);
  return (
    <div>
      {/* การเรียกใช้งานแบบ Consumer */}
      {/* <DataContext.Consumer>
        {context=> <p>รายรับ : {context.income} รายจ่าย : {context.expense}</p>}
      </DataContext.Consumer> */}

      {/* การเรียกใช้งานแบบ useContext */}
      {/* <p>รายรับทั้งหมด : {income}</p>
      <p>รายจ่ายทั้งหมด : {expense}</p> */}
      <div className="report-container">
        <div>
          <h4>รายได้ทั้งหมด</h4>
          <p className="report plus">฿{numeral(income).format("0, 0.00")}</p>
        </div>
        <div>
          <h4>รายจ่ายทั้งหมด</h4>
          <p className="report minus">฿{numeral(expense).format("0, 0.00")}</p>
        </div>
      </div>
      <div className="report-total">
        <h4>ยอดคงเหลือ (บาท)</h4>
        <h1>฿{numeral(income - expense).format("0, 0.00")}</h1>
      </div>
    </div>
  );
};

export default Report;
