import React from 'react'
import "./Products/Spices.css"
import{RiStarSFill} from "react-icons/ri"

const Sourcing = () => {
  return (
    <div>
        <div style={{width:"100%",height:"20vh",backgroundColor:"black",color:"white",textAlign:"center",verticalAlign:"center",paddingTop: '45px'}}>
          <h1>Sourcing Agent</h1>
        </div>
        <div className="about-block" style={{width:"100%",minHeight:"40vh",backgroundColor:"white"}}>
          <div className='aboutBlock-left' style={{width:"100%",height:"100%",backgroundColor:"white",textAlign:"center",paddingTop:"20px"}}>
            <img  src={"https://images.unsplash.com/photo-1592963218849-a477763212b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"} style={{width:"90%",height:"90%"}}/>
          </div>
          <div className='aboutBlock-right' style={{width:"100%",height:"100%",backgroundColor:"white",paddingTop:"20px",paddingRight:"20px",paddingLeft:"20px",paddingBottom:"20px"}}>
         <div style={{display:"flex",marginTop:"10px"}}>
          <h3 style={{color:"orange"}}><RiStarSFill size={70}/></h3>

                 <p style={{paddingTop:"20px"}}>
We find manufacturer as per buyer requirement. </p>
</div>
<div style={{display:"flex",marginTop:"10px"}}>

          <h3 style={{color:"orange"}}><RiStarSFill size={70}/></h3>

                 <p style={{paddingTop:"20px"}}>We negotiate and fix deal in suitable price range. </p>
</div>         <div style={{display:"flex",marginTop:"10px"}}>

          <h3 style={{color:"orange"}}><RiStarSFill size={70}/></h3>

                 <p style={{paddingTop:"20px"}}>We arrange transportation and handle full consignment. </p>
</div>         <div style={{display:"flex",marginTop:"10px"}}>

          <h3 style={{color:"orange"}}><RiStarSFill size={70}/></h3>

                 <p style={{paddingTop:"20px"}}>If buyer have supplier and manufacturer then we also provide shipment or transportation service. </p>
</div>
<div style={{display:"flex",marginTop:"10px"}}>

          <h3 style={{color:"orange"}}><RiStarSFill size={70}/></h3>

                 <p style={{paddingTop:"20px"}}>We can source products from multiple suppliers. </p>
</div>
              
          </div>
         

</div>
    </div>
  )
}

export default Sourcing