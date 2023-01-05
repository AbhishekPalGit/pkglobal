import React from 'react'
import "./Spices.css"


const Spices = () => {
  return (
    <div>
        <div style={{width:"100%",height:"20vh",backgroundColor:"black",color:"white",textAlign:"center",verticalAlign:"center",paddingTop: '45px'}}>
          <h1>SPICES</h1>
        </div>
        <div className="about-block" style={{width:"100%",minHeight:"40vh",backgroundColor:"white"}}>
          <div className='aboutBlock-left' style={{width:"100%",height:"100%",backgroundColor:"white",textAlign:"center",paddingTop:"20px"}}>
            <img src={"/SpicesImage/masalej.png"} style={{width:"90%",height:"90%"}}/>
          </div>
          <div className='aboutBlock-right' style={{width:"100%",height:"100%",backgroundColor:"white",paddingTop:"20px",paddingRight:"20px",paddingLeft:"20px"}}>
                <h2>About Spices</h2>
                
                  <p>Spices are one of the most important ingredients in Indian dishes. Indian Spices have been popular across the world for their unique flavor, aroma, and beautiful texture.
India has been a front-runner in the race for export of spices. India leads in the production and their exports of different spices and products in the last few years have shown an increasing trend. 
Out of the 109 varieties listed by the International Organization for Standardization around 75 varieties are exported and produced by India and therefore India is known to be the “home of spices”. 
Spices are aromatic substances of vegetable origin obtained from various roots, bark, leaves, and stems of certain plants.They have a varied range of properties and cater to the cosmetic, perfumery, medicinal and food industries.
		In the medicinal sector, they act as antioxidants, antimicrobial agents. To the perfumery industry, the processed products of spices like oleoresins and spice oils play an important role.
		Spices are valued mainly for their distinctive color, flavors and aroma and thus are indispensable for culinary purposes and flavoring.
		Spices come with notable nutritional values and provide some major health benefits.
we believe that Indian culture and our unique spices in India should reach each corner of the world.</p>
              
          </div>

</div>
        <button className='Spices-head'>
            <h2>SPICES</h2>
        </button>
        <div className="cards">
  <div className="card">
    <img className="card__image" style={{border:"2px solid #ebb4b4",padding:"20px",borderRadius:"4px"}} src={"/SpicesImage/MADRAS.png"} alt=""/>
    
    
  </div>

  <div className="card">
    <img className="card__image" style={{border:"2px solid #ebb4b4",padding:"20px",borderRadius:"4px"}} src={"/SpicesImage/masalej.png"} alt=""/>
    
    
  </div><div className="card">
    <img className="card__image" style={{border:"2px solid #ebb4b4",padding:"20px",borderRadius:"4px"}} src={"/SpicesImage/Cinnamon.png"} alt=""/>
   
    
  </div>
  <div className="card">
    <img className="card__image" style={{border:"2px solid #ebb4b4",padding:"20px",borderRadius:"4px"}} src={"/SpicesImage/Masale.png"} alt=""/>
    
  </div>
  <div className="card">
    <img className="card__image" style={{border:"2px solid #ebb4b4",padding:"20px",borderRadius:"4px"}} src={"/Productsphoto/Masalas/mockupo-nOyjlj-dse0-unsplash.jpg"} alt=""/>
   
    
  </div>
  <div className="card">
    <img className="card__image" style={{border:"2px solid #ebb4b4",padding:"20px",borderRadius:"4px"}} src={"/Productsphoto/Masalas/jaspreet-kalsi-2P0EFD18NYA-unsplash.jpg"} alt=""/>
   
    
  </div>
  <div className="card">
    <img className="card__image" style={{border:"2px solid #ebb4b4",padding:"20px",borderRadius:"4px"}} src={"/Productsphoto/Masalas/towfiqu-barbhuiya-ul3G99O5oIA-unsplash.jpg"} alt=""/>
    
  </div><div className="card">
    <img className="card__image" style={{border:"2px solid #ebb4b4",padding:"20px",borderRadius:"4px"}} src={"/Productsphoto/Masalas/vd-photography-1VTEK-sA8w8-unsplash.jpg"} alt=""/>
    
  </div>
  
</div>

    </div>
  )
}

export default Spices