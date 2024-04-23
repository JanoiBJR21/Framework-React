import React from 'react'
import Item from './Item';
import "./Transaction.css"
const Transaction = () => {
  const data = [
    {title: "ค่ารักษาพยาบาล", amount:"2000"},
    {title: "ค่ากระเป๋า", amount:"800"},
    {title: "ค่าเดีนทาง", amount:"1200"},
    {title: "ค่าเช่าบ้าน", amount:"9000"},
    {title: "เงินเดือน", amount:"35000"},
  ]
  return (
    <ul className='item-list'>
      <Item title={data[0].title} amount={data[0].amount}/>
      <Item title={data[1].title} amount={data[1].amount}/>
      <Item title={data[2].title} amount={data[2].amount}/>
      <Item title={data[3].title} amount={data[3].amount}/>
      <Item title={data[4].title} amount={data[4].amount}/>

    </ul>
  );
};

export default Transaction