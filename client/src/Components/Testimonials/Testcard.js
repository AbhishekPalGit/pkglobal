import React from 'react'
import "./Testcard.css"
const Testcard = (props) => {
  return (
    // <div className='mycard' style={{backgroundColor:`${props.cardno}`}}> </div>
    <div className='mycard' style={{ backgroundImage:`url(${props.cardno})`}}> </div>

  )
}

export default Testcard