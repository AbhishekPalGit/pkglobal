import React from 'react'
import "./Upperheader.css"
import {ImLocation2} from "react-icons/im"
import {GrMail} from "react-icons/gr"
import {TiSocialYoutube,TiSocialInstagram,TiSocialFacebookCircular,TiSocialTwitterCircular,TiSocialLinkedinCircular} from "react-icons/ti"



const UpperHeader = () => {
  return (
    <div className='upper-header'>
      <div className='upper-left'>
   <a href="https://g.co/kgs/GY39Ve" ><div style={{display:"flex"}}> <ImLocation2 style={{color:"white"}}size={30}/>
      <p style={{marginTop:"3px",color:"white"}}>Shivaji Nagar Mumbai India</p></div></a>
      <a href="mailto:info@pkglobaloverseas.com"><div style={{display:"flex"}}> <GrMail size={30} style={{marginLeft:"20px",color:"white"}}/>
      <p style={{marginTop:"3px",marginLeft:"8px",color:"white"}}>info@pkglobaloverseas.com</p></div></a>
      </div>
      <div className='upper-right'>
      <a href="https://instagram.com/pkglobaloverseas?igshid=YmMyMTA2M2Y="><TiSocialInstagram size={30} style={{color:"white"}}/></a>
      <a href="https://www.facebook.com/Pkglobaloverseas?mibextid=ZbWKwL">	<TiSocialFacebookCircular size={30} style={{color:"white",marginLeft:"3px"}}/></a>
      <a href="https://youtube.com/@pkglobaloverseas">	<TiSocialYoutube size={30} style={{color:"white",marginLeft:"3px"}}/></a>

      <a href="https://www.linkedin.com/company/pk-global-overseas-pvt-ltd/"><TiSocialLinkedinCircular size={30} style={{color:"white",marginLeft:"3px"}}/></a>
      <a href="https://twitter.com/PKGLOBALOVERSEA"><TiSocialTwitterCircular size={30} style={{color:"white",marginLeft:"3px"}}/></a>
      </div>
    </div>
  )
}

export default UpperHeader