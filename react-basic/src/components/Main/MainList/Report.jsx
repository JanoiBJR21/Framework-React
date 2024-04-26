import React from "react";
import DataContext from "../../../data/DataContext";
import { useContext } from "react";

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
      <p>รายรับ : {income}</p>
      <p>รายจ่าย : {expense}</p>
    </div>
  );
};

export default Report;
