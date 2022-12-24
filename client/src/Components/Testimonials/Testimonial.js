import React from 'react'
import "./Testimonial.css"
import Testcard from "./Testcard"


 
let box = document.querySelector('.product-container');

    const btnpressprev = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
        console.log(width)
    }

    const btnpressnext = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        console.log(width)
    }

const Testimonial = () => {
  return (
    
    <div className="product-carousel">
    <button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
    <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>


    <div className="product-container">
   
                <Testcard cardno='./Testimonial4.png' />
                <Testcard cardno='./Testimonial4.png' />
                <Testcard cardno='./Testimonial4.png' />
               

                
               

       
    </div>
</div>
  )
}

export default Testimonial