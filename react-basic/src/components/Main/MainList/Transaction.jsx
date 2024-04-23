import React from 'react'
import Item from './Item';
import "./Transaction.css"
const Transaction = () => {
  return (
    <ul className='item-list'>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </ul>
  );
};

export default Transaction