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
   {/* /// */}
    <div className='desktopMenu' style={{minWidth:"62%"}} >
      <ul style={{display:"flex",justifyContent:"space-evenly",justifyContent:"space-between"}} >
        <li className='liabc' style={{color:"white",cursor:"pointer"}}>Home	</li>
        <li className='liabc' style={{color:"white",cursor:"pointer"}}>About&nbsp;&nbsp;<i class="fa fa-angle-down">

          </i>
          <div class="dropdown-content" >
          <li className='liabc' style={{color:"white",cursor:"pointer"}}>Company	</li>
          <li className='liabc' style={{color:"white",cursor:"pointer",marginTop:"10px"}}>Certifications	</li>
          <li className='liabc' style={{color:"white",cursor:"pointer",marginTop:"10px"}}>Key Persons</li>

  </div>
          
          </li>
        <li className='liabc' style={{color:"white",cursor:"pointer"}}>Sourcing Agent</li>
        <li className='liabc' style={{color:"white",cursor:"pointer"}}>Products&nbsp;&nbsp;<i class="fa fa-angle-down"></i>
        <div class="dropdown-content" >
          <li className='liabc' style={{color:"white",cursor:"pointer"}}>Home	</li>
          <li className='liabc' style={{color:"white",cursor:"pointer",marginTop:"10px"}}>Home	</li>
          <li className='liabc' style={{color:"white",cursor:"pointer",marginTop:"10px"}}>Home	</li>

  </div>
        </li>
        <li className='liabc' style={{color:"white",cursor:"pointer"}}>Reviews</li>
        <li className='liabc' style={{color:"white",cursor:"pointer"}}>Contact Us</li>

      </ul>
    </div>
    {/* ///// */}
    </div>
    <div className='pannel' scroll="no">
      <div className='nav-bar'>
<ul>
  
  
  
  <li onClick={closeburger}><a href="/"><p>Home</p></a></li><hr/>
  <li onClick={closeAbout}><a style={{display:"flex"}} ><p style={{width:"90%"}}>About</p><span><FaAngleDown/></span></a>
  <div id='about' style={{display:"none"}}>
  <a href="/company"><p>Company</p></a>
  <a href="/certification"><p>Certifications</p></a>
  <a href="/keyperson"><p>Key Persons</p></a>

  </div></li><hr/>
  <li onClick={closeburger}><a href='/sourcing'><p>Sourcing Agent</p></a></li><hr/>
  <li onClick={closeProduct}><a style={{display:"flex"}} ><p style={{width:"90%"}}>Products</p><span><FaAngleDown/></span></a>
  <div id='product' style={{display:"none"}}>
  <a href="/products/spices"><p>Spices</p></a>
  <a href="/products/Temple"><p>Temple</p></a>
  <a href="/products/handicraft"><p>Handicraft</p></a>
  <a href="/products/glass"><p>Glass Products</p></a>
  <a href="/products/metal"><p>Metal Ware</p></a>

  <a href="/products/wood"><p>Wooden Handicrafts</p></a>
  <a href="/products/bamboo"><p>Bamboo Handicrafts</p></a>


  </div></li><hr/>
  <li onClick={closeburger}><a href='/review'><p>Reviews</p></a></li><hr/>
  <li onClick={closeburger}><a href='/contact'><p>Contact Us</p></a></li>
  

  

  
  
</ul>



      </div>
    </div>
    </div>
  )
}

export default Topheader