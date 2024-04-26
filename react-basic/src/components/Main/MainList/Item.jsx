import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./Item.css";
import numeral from "numeral";

const Item = (props) => {
  const { title, amount } = props;
  const status = amount < 0 ? "expense" : "income";
  const symbol = amount < 0 ? "-" : "+";

  return (
    <li className={status}>
      {title}
      <span>
      {symbol}
        {/* {Math.abs(amount)} */}
        {numeral(Math.abs(amount)).format("0, 0.00")}
      </span>
    </li>
  );
};
// การตรวจสอบข้อมูลและกำหนดค่าให้ข้อมูล
Item.propTypes = {
  title: PropTypes.string.isRequired, //title จะต้องเป็นข้อมูล String เท่านั้น และห้ามเป็นค่าว่าง
  amount: PropTypes.number.isRequired, //amount จะต้องเป็นข้อมูล Number เท่านั้น และห้ามเป็นค่าว่าง
};

export default Item;
