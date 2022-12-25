import React from 'react'
import "./Topheader.css"
import {GiHamburgerMenu} from "react-icons/gi"
import {MdOutlineClose} from "react-icons/md"
import {FaAngleDown} from "react-icons/fa"


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


const closeAbout=function closeAbout(){
  if(document.getElementById("about").style.display=="none"){
    document.getElementById("about").style.display="block"
  }else if(document.getElementById("about").style.display=="block"){
    document.getElementById("about").style.display="none"

  }
}
const closeProduct=function closeProduct(){
  if(document.getElementById("product").style.display=="none"){
    document.getElementById("product").style.display="block"
  }else if(document.getElementById("product").style.display=="block"){
    document.getElementById("product").style.display="none"

  }
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
<ul>
  
  
  
  <li onClick={closeburger}><a href="/"><p>Home</p></a></li><hr/>
  <li onClick={closeAbout}><a style={{display:"flex"}} ><p style={{width:"90%"}}>About</p><span><FaAngleDown/></span></a>
  <div id='about' style={{display:"none"}}>
  <a href="/products/spices"><p>Company</p></a>
  <a href="/products/spices"><p>Certifications</p></a>
  <a href="/products/spices"><p>Key Persons</p></a>

  </div></li><hr/>
  <li onClick={closeburger}><a href='/products/spices'><p>Sourcing Agent</p></a></li><hr/>
  <li onClick={closeProduct}><a style={{display:"flex"}} ><p style={{width:"90%"}}>Products</p><span><FaAngleDown/></span></a>
  <div id='product' style={{display:"none"}}>
  <a href="/products/spices"><p>Company</p></a>
  <a href="/products/spices"><p>Certifications</p></a>
  <a href="/products/spices"><p>Key Persons</p></a>

  </div></li><hr/>
  <li onClick={closeburger}><a href='/products/spices'><p>Reviews</p></a></li><hr/>
  <li onClick={closeburger}><a href='/products/spices'><p>Contact Us</p></a></li>
  

  

  
  
</ul>



      </div>
    </div>
    </div>
  )
}

export default Topheader