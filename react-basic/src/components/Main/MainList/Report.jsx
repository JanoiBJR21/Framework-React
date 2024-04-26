import React from 'react'
import DataContext from '../../../data/DataContext'
import { useContext } from 'react'

const Report = () => {
    const name = useContext(DataContext)
  return (
    <div>
      สวัสดี {name}
    </div>
  )
}

export default Report