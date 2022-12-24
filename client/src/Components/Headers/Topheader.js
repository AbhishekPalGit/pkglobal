import React from 'react'
import "./Topheader.css"
import {GiHamburgerMenu} from "react-icons/gi"
import {MdOutlineClose} from "react-icons/md"

import {BrowserRouter, Link } from "react-router-dom";


const logo=new URL("./logo.png",import.meta.url)
const openburger=function openburger(){
 const menubar= document.querySelector('.pannel');
  
  menubar.style.display="block";

  document.querySelector(".openburger").style.display="none";
  document.querySelector(".closeburger").style.display="block";


}
const closeburger=function closeburger(){
  const menubar= document.querySelector('.pannel');
  menubar.style.display="none";
  
  document.querySelector(".closeburger").style.display="none";
  document.querySelector(".openburger").style.display="block";


}

  
const Topheader = () => {
  return (
    <div className='header-main'>
    <div className='main'>
    <div className='logo'><img className='logo-image' src={logo}></img></div>
    <h1 className='openburger' style={{zindex:"1",color:"white"}}><GiHamburgerMenu onMouseOver={({target})=>target.style.color="white"} onMouseOut={({target})=>target.style.color="#228c22"}  onClick={openburger} style={{color:"#228c22"}}/></h1>
    <h1 className='closeburger' style={{zindex:"1",color:"white"}}><MdOutlineClose onMouseOver={({target})=>target.style.color="white"} onMouseOut={({target})=>target.style.color="#228c22"} onClick={closeburger} style={{color:"#228c22"}}/></h1>

    </div>
    <div className='pannel' scroll="no">
      <div className='nav-bar'>
<ul onClick={closeburger}>
  
  
  
  <li><a href="/">Home</a></li>
  <li ><a href="/products/spices">About</a></li>
  <li><a href='/products/spices'>Products</a></li>
  

  
  
</ul>



      </div>
    </div>
    </div>
  )
}

export default Topheader