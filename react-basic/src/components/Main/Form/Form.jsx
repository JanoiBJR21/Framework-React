import React from 'react'
import "./Form.css"

const Form = () => {
  return (
    <div>
        <form>
            <div className='form-control'>
                <label>ชื่อรายการ :</label>
                <input type="text" placeholder='ระบุชื่อรายการารของคุณ'/>
            </div>
            <div className="form-control">
                <label>จำนววนเงิน :</label>
                <input type="number" placeholder='(+ รายรับ , - รายจ่าย)' />
            </div>
            <div className='btn-control'>
                <button type="submit" className='btn'>เพิ่มข้อมูล</button>
            </div>
        </form>
    </div>
  )
}

export default Form