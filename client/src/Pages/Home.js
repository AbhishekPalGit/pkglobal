import React from 'react'
import Slider from '../Components/Sliders/Slider.js'
import About from '../Components/About/About.js'
import Spices from '../Components/Products/Spices.js'
import Wwd from '../Components/WhatWeDo/Wwd.js'
import Testimonial from '../Components/Testimonials/Testimonial.js'
import Weprovide from '../Components/Weprovide/Weprovide.js'
import Choose from '../Components/ChooseUs/Choose.js';
import Membership from '../Components/Memberships/Membership.js'
import { useEffect } from 'react'


const Home = () => {
  useEffect(()=>{
    if(window.location.href==(window.host+"/review")){
      alert('dvshd')
      var elem = document.getElementById("review");
                    elem.scrollIntoView();
    }
  },[])
  return (
    <div>
        
       <Slider/>
        <About/>
        <Wwd/>
       <Weprovide/>
       <Choose/>
        <Testimonial id="review"/>
        <Membership/>
      

        
    </div>
  )
}

export default Home