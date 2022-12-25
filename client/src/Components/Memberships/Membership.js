import React from 'react'
import "./Membership.css"
import { useEffect ,useState} from 'react'
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from 'react-icons/bs'

const Membership = () => {
    
    
    const [first,setfirst]=useState(0)

      const next=function(){
       
        if(first<5){
            document.getElementsByClassName("member-box")[first].style.width="0%"
        setfirst(first+1);
        console.log(first)
        }

      }
      const previous=function(){
        if(first>0){
            document.getElementsByClassName("member-box")[first].style.width="0%"
        setfirst(first-1);
        console.log(first)
        }
      }

    useEffect(() => {
       
        document.getElementsByClassName("member-box")[first].style.width="100%"
        
      },[first]);
    
  return (
    <div>
    <button className='member-head'>
        <h2>Membership & Certifications </h2>
    </button>
    <div className='member-main'>
         
        <BsFillArrowRightCircleFill size={50} onClick={previous} style={{marginTop:"75px"}}/>
        <div className='member-box' style={{textAlign:"center"}}>
            <img src='Membership/BrW8o5cM_400x400.jpg' />
        </div>
        <div className='member-box' style={{textAlign:"center"}}>
        <img src='Membership/images.jpeg' />
        </div>
        <div className='member-box'style={{textAlign:"center"}}>
        <img src='Membership/download.png' />
        </div>
        <div className='member-box' style={{textAlign:"center"}}>
        <img src='Membership/logo-new1.png' />
        </div>
        <div className='member-box' style={{textAlign:"center"}}>
        <img src='Membership/Revised_GJEPC_Logo_Master_210706_FIN-1.jpg' />
        </div>
        <div className='member-box' style={{textAlign:"center"}}>
        <img src='Membership/imgbin-make-in-india-government-of-india-prime-minister-of-india-manufacturing-india-9TuHa0BuR0sN6ej9jmZRbEMS3.jpg' />
        </div>
       <BsFillArrowLeftCircleFill size={50} onClick={next} style={{marginTop:"75px"}}/>
 

        

    </div>
    </div>
  )
}

export default Membership