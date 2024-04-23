import React from 'react'
import Item from './Item';
import "./Transaction.css"
const Transaction = () => {
  return (
    <ul className='item-list'>
      <Item title="ค่ารักษาพยาบาล" amount="2000"/>
      <Item title="ค่ากระเป๋า" amount="500"/>
      <Item title="ค่าเดีนทาง" amount="1000"/>
      <Item title="ค่าเช่าบ้าน" amount="7000"/>
    </ul>
  );
};

export default Transaction