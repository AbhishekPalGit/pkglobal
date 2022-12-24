import React from 'react'
import Slider from '../Components/Sliders/Slider.js'
import About from '../Components/About/About.js'
import Spices from '../Components/Products/Spices.js'
import Wwd from '../Components/WhatWeDo/Wwd.js'
import Testimonial from '../Components/Testimonials/Testimonial.js'
import Weprovide from '../Components/Weprovide/Weprovide.js'

const Home = () => {
  return (
    <div>
        
       <Slider/>
        <About/>
        <Wwd/>
       <Weprovide/>
        <Testimonial/>
      

        
    </div>
  )
}

export default Home