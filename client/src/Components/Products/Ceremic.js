import React from 'react'
import "./Spices.css"


const Ceremic = () => {
  return (
    <div>
        <div style={{width:"100%",height:"20vh",backgroundColor:"black",color:"white",textAlign:"center",verticalAlign:"center",paddingTop: '45px'}}>
          <h1>Ceramic Items</h1>
        </div>
        <div className="about-block" style={{width:"100%",minHeight:"40vh",backgroundColor:"white"}}> 
        <div className='aboutBlock-left' style={{width:"100%",height:"100%",backgroundColor:"white",textAlign:"center",paddingTop:"20px"}}> 
        <img src={"/HeadImg/CERAMIC CATEGORY PHOTO.jpg"} style={{width:"90%",height:"90%"}}/> 
          </div> 
           <div className='aboutBlock-right' style={{width:"100%",height:"100%",backgroundColor:"white",paddingTop:"20px",paddingRight:"20px",paddingLeft:"20px"}}>
                <h2> About Ceramic Items</h2>
                
                  <p>In our everyday life, we are surrounded by ceramics and glass. Ceramics and glass are beneficial in the kitchen for cooking, storing, and serving food. The finest tableware and cookware are made from porcelain. Wine Glasses, pitchers, and jars are obtained from blown glass. Kitchenware based on Pyrex glass is oven proof and used to cook premium baked goods. Ceramic coatings cover the oven’s internal surface and make it scratch-free, easy-to-clean, and well insulated to ensure uniform temperature.  Even many washing machines and dryers are coated with a porcelain enamel that is ant scratch, stain resistant and resistant to chemicals.>Ceramic has been in use for over millions of years and is found healthy l and safe for food. It has been observed that ingredients that form ceramic are considered non-toxic. 
</p>
              
          </div>
          </div>


        <button className='Spices-head'>
            <h2>Ceramic Items</h2>
        </button>
      <div className="cards">
       
      <div className="card"><div className="card-in">
    <img className="card__image" style={{borderRadius:"4px"}} src={"/Productsphoto/12. CERAMIC ITEMS/BATHROOM ACCESORIES.jpg"} alt=""></img>
    cdcdcdcd
    </div>
  </div>
  <div className="card"><div className="card-in">
    <img className="card__image" style={{borderRadius:"4px"}} src={"/Productsphoto/12. CERAMIC ITEMS/BOWL.jpg"} alt=""></img>
    cdcdcdcd
    </div>
  </div>
  <div className="card"><div className="card-in">
    <img className="card__image" style={{borderRadius:"4px"}} src={"/Productsphoto/12. CERAMIC ITEMS/BOWLS.jpg"} alt=""></img>
    cdcdcdcd
    </div>
  </div>
  <div className="card"><div className="card-in">
    <img className="card__image" style={{borderRadius:"4px"}} src={"/Productsphoto/12. CERAMIC ITEMS/COFFEE MUGS.jpg"} alt=""></img>
    cdcdcdcd
    </div>
  </div>
        
      </div>

      <div className="cards">
       
       <div className="card"><div className="card-in">
     <img className="card__image" style={{borderRadius:"4px"}} src={"/Productsphoto/12. CERAMIC ITEMS/FLOWER POT WHITE.jpg"} alt=""></img>
     cdcdcdcd
     </div>
   </div>
   <div className="card"><div className="card-in">
     <img className="card__image" style={{borderRadius:"4px"}} src={"/Productsphoto/12. CERAMIC ITEMS/FLOWER POT.jpg"} alt=""></img>
     cdcdcdcd
     </div>
   </div>
   <div className="card"><div className="card-in">
     <img className="card__image" style={{borderRadius:"4px"}} src={"/Productsphoto/12. CERAMIC ITEMS/VESSELS.jpg"} alt=""></img>
     cdcdcdcd
     </div>
   </div>
   <div className="card"><div className="card-in">
     <img className="card__image" style={{borderRadius:"4px"}} src={"/Productsphoto/12. CERAMIC ITEMS/STYLIST FLOWER POT.jpg"} alt=""></img>
     cdcdcdcd
     </div>
   </div>
         
       </div>

    
  
    </div>
  )
}

export default Ceremic