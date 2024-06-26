import React, { useState, useEffect } from "react";
import "./Form.css";
import { v4 as uuidv4 } from "uuid";

const Form = (props) => {
  // console.log("Render Form");
  const [title, setTiltle] = useState("");
  const [amount, setAmount] = useState(0);
  const [formValid, setFormValid] = useState(false);

  const inputTitle = (e) => {
    // console.log(e.target.value);
    setTiltle(e.target.value);
  };

  const inputAmount = (e) => {
    // console.log(e.target.value);
    setAmount(e.target.value);
  };

  const seveItem = (e) => {
    e.preventDefault();
    // console.log("บันทึกข้อมูลเรียบร้อย");
    const itemData = {
      id: uuidv4(),
      title: title,
      amount: Number(amount), //แปลงข้อมูลจาก String To Number
    };
    // console.log(itemData);
    props.onAddItem(itemData);
    // เมื่อเพิ่มข้อมูลแล้ว ให้ set เป็นค่าเริ่มต้น
    setTiltle("");
    setAmount(0);
  };

  useEffect(() => {
    // console.log("call useEffect");
    const checkData = title.trim().length > 0 && amount !== 0;
      setFormValid(checkData);
  }, [title, amount]);

  return (
    <div>
      <form onSubmit={seveItem}>
        <div className="form-control">
          <label>ชื่อรายการ :</label>
          <input
            type="text"
            placeholder="ระบุชื่อรายการารของคุณ"
            onChange={inputTitle}
            value={title}
          />
        </div>
        <div className="form-control">
          <label>จำนวนเงิน :</label>
          <input
            type="number"
            placeholder="(+ รายรับ , - รายจ่าย)"
            onChange={inputAmount}
            value={amount}
          />
        </div>
        <div className="btn-control">
          <button type="submit" className="btn" disabled={!formValid}>
            เพิ่มข้อมูล
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
