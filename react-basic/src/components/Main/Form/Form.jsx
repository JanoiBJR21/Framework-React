import React from 'react'
import "./Form.css"

const Form = () => {
  return (
    <div>
        <form action="">
            <div className='form-control'>
                <label htmlFor="">ชื่อรายการ</label>
                <input type="text" placeholder='ระบุชื่อรายการารของคุณ'/>
            </div>
            <div className="form-control">
                <label htmlFor="">จำนววนเงิน</label>
                <input type="text" placeholder='ระบุจำนวนเงิน' />
            </div>
            <div>
                <button type="submit">เพิ่มข้อมูล</button>
            </div>
        </form>
    </div>
  )
}

export default Form