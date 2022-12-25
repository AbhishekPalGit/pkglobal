import React from 'react'
import "./Choose.css"
import { FaHandshake,FaHandHoldingUsd } from 'react-icons/fa';
import { MdSupervisorAccount,MdLockClock,MdSentimentSatisfiedAlt} from 'react-icons/md';
import { GiRibbonMedal } from 'react-icons/gi';



const Choose = () => {
  return (
    <div className='chooseus-main'>
          <button className='chooseus-head'>
        <h2>-- Why Choose Us --</h2>
    </button>
    <div className='chooseus-row'>
        <div className='chooseus-box'>
        <FaHandshake size={80}/>
        <h3>We Build Relation</h3>
        </div>
        <div className='chooseus-box'>
        <MdSupervisorAccount size={80}/>
        <h3>Experience & Professional</h3>
        </div>
        <div className='chooseus-box'>
        <GiRibbonMedal size={80}/>
        <h3>High Quality Products</h3>
        </div>
        <div className='chooseus-box'>
        <MdLockClock size={80}/>
        <h3>We Deliver On Time</h3>
        </div>
        <div className='chooseus-box'>
        <FaHandHoldingUsd size={80}/>
        <h3>Price Benefits</h3>
        </div>
        <div className='chooseus-box'>
        <MdSentimentSatisfiedAlt size={80}/>
        <h3>Complete Client Satisfaction</h3>
        </div>

    </div>

    </div>
  )
}

export default Choose