import React from 'react'
import {Dialog,DialogTitle,DialogContent} from "@mui/material"

import { useState } from 'react'
import {ImCross} from "react-icons/im"
import {SiGooglemessages} from 'react-icons/si'


const Modalform = () => {
const [popup,setpopup]=useState(false)
const hidepopup=()=>{
    setpopup(false)
}
const showpopup=()=>{
    setpopup(true)
}
  return (
    <div>
    <Dialog open={popup}>
        <DialogTitle><div style={{textAlign:"right"}}><ImCross onClick={hidepopup}/></div><h4 style={{textAlign:"center"}}>Welcome To Pk Global!</h4></DialogTitle>
        <DialogContent style={{textAlign:"center"}}>
            <form action='https://script.google.com/macros/s/AKfycbw7SW9sNiAoLFJjROs7IzJBzUHUfeOUW6PYvMoyCe5De8H0mI78CndQX6SulZYHq29JQQ/exec' method='post'>
                <input name="name" placeholder='Enter Your Name' type="text" style={{textAlign:"center", width:"90%",height:"50px",marginTop:"10px", boxSizing:"border-box"}} required></input>
                <input name="email" placeholder='Enter Your Email' type="mail" style={{textAlign:"center", width:"90%",height:"50px",marginTop:"28px"}} required></input>
                <input name="phone" placeholder='Enter Your Phone No' style={{textAlign:"center", width:"90%",height:"50px",marginTop:"28px"}} required></input>
                <textarea name="message" placeholder='Enter Your Message'  rows="4"  style={{textAlign:"center",marginTop:"28px",width:"90%"}} required></textarea>
                <button type='submit' style={{padding:"10px 30px",marginTop:"25px",backgroundColor:"black",borderStyle:"none",color:"white"}}>Submit</button>

            </form>
        </DialogContent>
    </Dialog>

<div onClick={showpopup} style={{width:"60px",height:"60px",backgroundColor:"green", position:"fixed" ,zIndex:434242,bottom:"40px",right:"5px",borderRadius:"100%",textAlign:"center"}}>
<SiGooglemessages size={40} style={{marginTop:"10px"}}/>
</div>


    </div>
    

  )
}

export default Modalform