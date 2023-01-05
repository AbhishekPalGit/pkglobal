import React from 'react'
import '../Products/Spices.css'
import Wwd from '../WhatWeDo/Wwd'

const Company = () => {
  return (
    <div>
         <div style={{width:"100%",height:"20vh",backgroundColor:"black",color:"white",textAlign:"center",verticalAlign:"center",paddingTop: '45px'}}>
          <h1>COMPANY</h1>
        </div>
       <div style={{textAlign:"center",padding:"20px 20px"}}><h2>About Our Company</h2></div> 
       <div style={{textAlign:"center",padding:"20px 30px"}}>
        <p>PK Global Overseas Private Limited is India's leading Manufacturer Cum Exporter Company recognised by govt. of india. 
Manufacturing Hub located in Agra Northern part of INDIA, farming lands in madhya pradesh and Trading office in Mumbai.
 It was founded by two mother & Son i.e. Mrs.Divya Sharma and his Son Mr. Kaushal Sharma by interest to expand business globally.

We provide cost effective quality products and  on timely delivery with complete client satisfaction.
We are rapidly expanding our business on a large scale to provide better quality products.


We are one of the most trusted names of the industry
engaged in manufacturing, exporting and supplying
an excellent range of Handicrafts, spices, cereals, garments fruits& vegetables.
The range of accessories is made available to the
clients in standard as well as customized forms,
which helps us in meeting the unique demands of
the clients in the best possible manner.
Moreover, these products can be availed from us
at pocket-friendly prices.


We are the first & only company which provide 100% Transparent Export.
Everything from packaging to loading and sealing the container is shown to you in real time through video conferencing
So that there is transparency, we send only the product that you have said, taking full care of the quality.


</p>
       </div>
       <div className="about-block" style={{width:"100%",minHeight:"40vh",backgroundColor:"antiquewhite",paddingBottom:"90px"}}>
          <div className='aboutBlock-left' style={{width:"100%",height:"100%",textAlign:"center",paddingTop:"20px"}}>
            <img src={"/SpicesImage/masalej.png"} style={{width:"90%",height:"90%"}}/>
          </div>
          <div className='aboutBlock-right' style={{width:"100%",height:"100%",paddingTop:"20px",paddingRight:"20px",paddingLeft:"20px"}}>
                <h2>Current Stage Of Company</h2>
                
                  <p style={{marginTop:"10px"}}>Currently the company serves products to many countries around the world.
 The Main market is America, Latin America, European market, Asian market & Australia.
 Now the company team members are working continuously for better service & client satisfaction.
 The goal of our company is to keep the customer engaged with us for a long time and our honourable customer will be successful in their mission.
We are also working as Import Export sourcing agent in India If you are looking for any product from India we can source the best quality product for you.</p>
              
          </div>

</div>
<Wwd />
    </div>
  )
}

export default Company