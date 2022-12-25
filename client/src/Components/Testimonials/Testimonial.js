import React from 'react'
import "./Testimonial.css"
import { useEffect ,useState} from 'react'
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from 'react-icons/bs'
const Testimonial = () => {
  const [first,setfirst]=useState(0)

      const next=function(){
       
        if(first<5){
            document.getElementsByClassName("testimonial-box")[first].style.width="0%"
        setfirst(first+1);
        console.log(first)
        }

      }
      const previous=function(){
        if(first>0){
            document.getElementsByClassName("testimonial-box")[first].style.width="0%"
        setfirst(first-1);
        console.log(first)
        }
      }

    useEffect(() => {
       
        document.getElementsByClassName("testimonial-box")[first].style.width="100%"
        
      },[first]);
  return (
    <div style={{backgroundColor:"#e8e8dd"}}>
    <button className='testimonial-head'>
        <h2>Testimonials </h2>
    </button>
    <div className='testimonial-main'>
         
        <BsFillArrowRightCircleFill size={50} onClick={previous} style={{marginTop:"75px"}}/>
        <div className='testimonial-box' style={{textAlign:"center"}}>
            <img src='Membership/BrW8o5cM_400x400.jpg' />
        </div>
        <div className='testimonial-box' style={{textAlign:"center"}}>
        <img src='Testimonial4.png' />
        </div>
        <div className='testimonial-box'style={{textAlign:"center"}}>
        <img src='Testimonial4.png' />
        </div>
        <div className='testimonial-box' style={{textAlign:"center"}}>
        <img src='Testimonial4.png' />
        </div>
        <div className='testimonial-box' style={{textAlign:"center"}}>
        <img src='Testimonial4.png' />
        </div>
        <div className='testimonial-box' style={{textAlign:"center"}}>
        <img src='Testimonial4.png' />
        </div>
       <BsFillArrowLeftCircleFill size={50} onClick={next} style={{marginTop:"75px"}}/>
 

        

    </div>
    </div>
  )
}

export default Testimonial