import React from 'react'
import "../Sliders/Slider.css"
import slideimage from "./slideimage.json"
import {AiOutlineArrowRight,AiOutlineArrowLeft} from 'react-icons/ai'
import { useState } from 'react'
// import img1 from '../../../src/aerial-view-container-cargo-ship-sea.jpg'

const Slider = () => {
    const[slideNo,setslideNo]=useState(0)
    var photo=slideimage[slideNo].slide; 
    var slideRight=()=>{
        if(slideNo<slideimage.length-1){
        setslideNo(slideNo+1)
        settitleno(titleno+1)
        }
    }
    var slideLeft=()=>{
        if(slideNo>0){
        setslideNo(slideNo-1)
        settitleno(titleno-1)

        }
    }
    const[titleno,settitleno]=useState(0)
    var heading=slideimage[titleno].title;
    // const first=new URL("./SlideImages/aerial-view-container-cargo-ship-sea.jpg",import.meta.url)


  return (
    // <div className='Slider'style={{backgroundImage:`url(${photo})`}}>
    <div className='Slider'>
      <img src={process.env.PUBLIC_URL+photo} style={{width:"100%",height:"100%"}}/>
      
      

    <div className='Slider-buttons'>
        <h1 onClick={slideLeft} ><AiOutlineArrowLeft/></h1>
        <h2 style={{color:"white"}}>{heading}</h2>
        <h1 onClick={slideRight}><AiOutlineArrowRight/></h1>


    </div>
    

    </div>
  )
}

export default Slider