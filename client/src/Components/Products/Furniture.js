import React from 'react'
import "./Spices.css"


const Furniture = () => {
  return (
    <div>
        <div style={{width:"100%",height:"20vh",backgroundColor:"black",color:"white",textAlign:"center",verticalAlign:"center",paddingTop: '45px'}}>
          <h1>Furniture</h1>
        </div>
        <div className="about-block" style={{width:"100%",minHeight:"40vh",backgroundColor:"white"}}> 
        <div className='aboutBlock-left' style={{width:"100%",height:"100%",backgroundColor:"white",textAlign:"center",paddingTop:"20px"}}> 
        <img src={"/HeadImg/FURNITURE CATEGORY PHOTO.jpg"} style={{width:"90%",height:"90%"}}/> 
          </div> 
           <div className='aboutBlock-right' style={{width:"100%",height:"100%",backgroundColor:"white",paddingTop:"20px",paddingRight:"20px",paddingLeft:"20px"}}>
                <h2> About Furniture</h2>
                
                  <p>If you’re facing an empty house or a big remodel, you’ve got big choices to make. Before you decide how to fill your home, learn about the options you have—the types of furniture and the names of furniture pieces—to help you make the best decisions to decorate your rooms. Furniture is also used to hold objects at a convenient height for work (as horizontal surfaces above the ground, such as tables and desks), or to store things (e.g., cupboards and shelves). Furniture can be a product of design and is considered a form of decorative art. Wood is the most environmentally friendly raw material. It’s renewable.
</p>
              
          </div>
          </div>


        <button className='Spices-head'>
            <h2>Furniture</h2>
        </button>
      <div className="cards">
       
      <div className="card"><div className="card-in">
    <img className="card__image" style={{borderRadius:"4px"}} src={"/Productsphoto/11. FURNITURE/BEd.png"} alt=""></img>
    cdcdcdcd
    </div>
  </div>
  <div className="card"><div className="card-in">
    <img className="card__image" style={{borderRadius:"4px"}} src={"/Productsphoto/11. FURNITURE/Bookshelves.jpg"} alt=""></img>
    cdcdcdcd
    </div>
  </div>
  <div className="card"><div className="card-in">
    <img className="card__image" style={{borderRadius:"4px"}} src={"/Productsphoto/11. FURNITURE/Center-Tables.jpg"} alt=""></img>
    cdcdcdcd
    </div>
  </div>
  <div className="card"><div className="card-in">
    <img className="card__image" style={{borderRadius:"4px"}} src={"/Productsphoto/11. FURNITURE/Chest-of-Drawers.jpg"} alt=""></img>
    cdcdcdcd
    </div>
  </div>
        
      </div>

      <div className="cards">
       
       <div className="card"><div className="card-in">
     <img className="card__image" style={{borderRadius:"4px"}} src={"/Productsphoto/11. FURNITURE/Shoe-Racks.jpg"} alt=""></img>
     cdcdcdcd
     </div>
   </div>
   <div className="card"><div className="card-in">
     <img className="card__image" style={{borderRadius:"4px"}} src={"/Productsphoto/11. FURNITURE/tv-unit.jpg"} alt=""></img>
     cdcdcdcd
     </div>
   </div>
   <div className="card"><div className="card-in">
     <img className="card__image" style={{borderRadius:"4px"}} src={"/Productsphoto/11. FURNITURE/wooden-chairs.jpg"} alt=""></img>
     cdcdcdcd
     </div>
   </div>
   <div className="card"><div className="card-in">
     <img className="card__image" style={{borderRadius:"4px"}} src={"/Productsphoto/11. FURNITURE/sofa.jpg"} alt=""></img>
     cdcdcdcd
     </div>
   </div>
         
       </div>

    
  
    </div>
  )
}

export default Furniture