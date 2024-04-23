import React from "react";
import PropTypes from "prop-types";

const Item = (props) => {
  const { title, amount } = props;
  return (
    <li>
      {title}
      <span>{amount}</span>
    </li>
  );
};
// การตรวจสอบข้อมูลและกำหนดค่าให้ข้อมูล
Item.propTypes = {
  title:PropTypes.string.isRequired,//title จะต้องเป็นข้อมูล String เท่านั้น และห้ามเป็นค่าว่าง
  amount:PropTypes.number.isRequired,//amount จะต้องเป็นข้อมูล Number เท่านั้น และห้ามเป็นค่าว่าง
};

export default Item;