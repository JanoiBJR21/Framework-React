import React from "react";
import "./Form.css";

const Form = () => {
  const inputTitle = (e) => {
    console.log(e.target.value);
  };

  const inputAmount = (e) => {
    console.log(e.target.value);
  };

  const seveItem = (e) => {
    e.preventDefault()
    console.log("บันทึกข้อมูลเรียบร้อย");
  };
  return (
    <div>
      <form onSubmit={seveItem}>
        <div className="form-control">
          <label>ชื่อรายการ :</label>
          <input
            type="text"
            placeholder="ระบุชื่อรายการารของคุณ"
            onChange={inputTitle}
          />
        </div>
        <div className="form-control">
          <label>จำนววนเงิน :</label>
          <input
            type="number"
            placeholder="(+ รายรับ , - รายจ่าย)"
            onChange={inputAmount}
          />
        </div>
        <div className="btn-control">
          <button type="submit" className="btn">
            เพิ่มข้อมูล
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
