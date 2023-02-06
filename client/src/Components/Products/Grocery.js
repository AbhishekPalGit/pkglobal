import React from 'react'
import "./Spices.css"


const Grocery = () => {
  return (
    <div>
        <div style={{width:"100%",height:"20vh",backgroundColor:"black",color:"white",textAlign:"center",verticalAlign:"center",paddingTop: '45px'}}>
          <h1>Grocery</h1>
        </div>
        <div className="about-block" style={{width:"100%",minHeight:"40vh",backgroundColor:"white"}}> 
        <div className='aboutBlock-left' style={{width:"100%",height:"100%",backgroundColor:"white",textAlign:"center",paddingTop:"20px"}}> 
        <img src={"/HeadImg/GROCERY CATEGORY PHOTO.jpg"} style={{width:"90%",height:"90%"}}/> 
          </div> 
           <div className='aboutBlock-right' style={{width:"100%",height:"100%",backgroundColor:"white",paddingTop:"20px",paddingRight:"20px",paddingLeft:"20px"}}>
                <h2> About Grocery</h2>
                
                  <p> PK Global Overseas is a world-class Grocery exporter in India. We have been manufacturing top quality product for our customers.
Our best quality products have helped us gain the reputation of being one of the grocery exporters in India. Our customers have continuously demanded and expected a lot from us. They look up to us for more variety and we never let them down.
We know how much people love and value food.Therefor we have many Grocery Products like, Wheat flour, Dal/Lentils & Legumes, Coffee + TEA and Sugar, all Spices, Pasta, Noodles, Breakfast and Snack , Sauces / Masala /Paste, Cooking oil, Dairy & Eggs many more. We have a wide portfolio of products; therefore, you will get a lot of items from this one place.
</p>
              
          </div>
          </div>


        <button className='Spices-head'>
            <h2>Grocery</h2>
        </button>
      <div className="cards">
       
      <div className="card"><div className="card-in">
    <img className="card__image" style={{borderRadius:"4px"}} src={"/Productsphoto/9. GROCERY/adzuki-beans.png"} alt=""></img>
    cdcdcdcd
    </div>
  </div>
  <div className="card"><div className="card-in">
    <img className="card__image" style={{borderRadius:"4px"}} src={"/Productsphoto/9. GROCERY/Banana-Chips.png"} alt=""></img>
    cdcdcdcd
    </div>
  </div>
  <div className="card"><div className="card-in">
    <img className="card__image" style={{borderRadius:"4px"}} src={"/Productsphoto/9. GROCERY/Besan.png"} alt=""></img>
    cdcdcdcd
    </div>
  </div>
  <div className="card"><div className="card-in">
    <img className="card__image" style={{borderRadius:"4px"}} src={"/Productsphoto/9. GROCERY/Chickpea.png"} alt=""></img>
    cdcdcdcd
    </div>
  </div>
        
      </div>

      <div className="cards">
       
       <div className="card"><div className="card-in">
     <img className="card__image" style={{borderRadius:"4px"}} src={"/Productsphoto/9. GROCERY/COFFEE.jpg"} alt=""></img>
     cdcdcdcd
     </div>
   </div>
   <div className="card"><div className="card-in">
     <img className="card__image" style={{borderRadius:"4px"}} src={"/Productsphoto/9. GROCERY/corn-flour.png"} alt=""></img>
     cdcdcdcd
     </div>
   </div>
   <div className="card"><div className="card-in">
     <img className="card__image" style={{borderRadius:"4px"}} src={"/Productsphoto/9. GROCERY/Green-Gram-Beans.png"} alt=""></img>
     cdcdcdcd
     </div>
   </div>
   <div className="card"><div className="card-in">
     <img className="card__image" style={{borderRadius:"4px"}} src={"/Productsphoto/9. GROCERY/Masoor-Dal.png"} alt=""></img>
     cdcdcdcd
     </div>
   </div>
         
       </div>

    
  
    </div>
  )
}

export default Grocery