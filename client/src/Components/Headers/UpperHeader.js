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
     <div style={{display:"flex"}}> <GrMail size={30} style={{marginLeft:"20px",color:"white"}}/>
      <p style={{marginTop:"3px",marginLeft:"8px",color:"white"}}>info@pkglobaloverseas.com</p></div>
      </div>
      <div className='upper-right'>
      <TiSocialInstagram size={30} style={{color:"white"}}/>
					<TiSocialFacebookCircular size={30} style={{color:"white",marginLeft:"3px"}}/>
					<TiSocialYoutube size={30} style={{color:"white",marginLeft:"3px"}}/>

					<TiSocialLinkedinCircular size={30} style={{color:"white",marginLeft:"3px"}}/>
					<TiSocialTwitterCircular size={30} style={{color:"white",marginLeft:"3px"}}/>
      </div>
    </div>
  )
}

export default UpperHeader