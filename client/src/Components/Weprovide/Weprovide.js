import React from 'react'
import "../Products/Spices.css"
import {FaEye} from "react-icons/fa"
import Metal from '../Products/Metal'

const Weprovide = () => {
  return (
    <div>
    {/* <img src={process.env.PUBLIC_URL+"Images/artturi-jalli-Su1gc1A63xE-unsplash.jpg"}/> */}
    <button className='Spices-head'>
        <h2>-- What We Provide --</h2>
    </button>
    <div className="cards">
    <a href='/products/handicraft'>

<div className="card">
<img className="card__image" src={"/Productsphoto/Handicrafts/CERAMIChandicrafts/britta-preusse-p7KKwjP3s68-unsplash.jpg"} alt=""/>
<div className="card__content">
      <p style={{color:"black"}}>
      Handicraft is a type of craft where people make things using only their hands or basic tools. The items are usually decorative and have a particular use.


      </p>
      <p>
      
      </p>
    </div>
<div className="card__info">
  <h4>Handicraft</h4>
  <div>
    <a href="./" className="card__link"><FaEye size={20}/></a>
  </div>
</div>
</div></a>
    <a href='/products/spices'>
<div className="card">
<img className="card__image" src={"/Productsphoto/Masalas/vd-photography-1VTEK-sA8w8-unsplash.jpg"} alt=""/>
<div className="card__content">
      <p style={{color:"black"}}> 
      Spices are one of the most important ingredients in Indian dishes. Indian Spices have been popular across the world for their unique flavor, aroma, and beautiful texture.
      </p>
      <p>
       
      </p>
    </div>
<div className="card__info">
  <h4>Spices</h4>
  <div>
    <a href="./" className="card__link"><FaEye size={20}/></a>
  </div>
</div>
</div>
</a>

<a href='/products/temple'>

<div className="card">
<img className="card__image" src={"/Productsphoto/Temple/yash-bohra-W1IVL77V83I-unsplash.jpg"} alt=""/>
<div className="card__content">
      <p style={{color:"black"}}>
      Temple Architecture is one of the world’s traditional & ancient art of India. We are one of the leading architecture & manufacturing company practicing successfully since last 50 years.

      </p>
      <p>
     
      </p>
    </div>
<div className="card__info">
  <h4>Temple</h4>
  <div>
    <a href="./" className="card__link"><FaEye size={20}/></a>
  </div>
</div>

</div></a>

< a href='/products/textile'>
<div className="card">
<img className="card__image" src={"/Productsphoto/Handicrafts/TextileBased/SAREE/DabufromRajasthan.png"} alt=""/>
<div className="card__content">
      <p style={{color:"black"}}>
      The various kinds of traditional art displayed in the Indian Textile Handicrafts are phulkari art, jamawar, batik, block printing, resist printing, and tie and dye. 
      </p>
      <p>
        
      </p>
    </div>
<div className="card__info">
  <h4>Textile Based</h4>
  <div>
    <a href="./" className="card__link"><FaEye size={20}/></a>
  </div>

</div>
</div>
</a>
< a href='/products/metal'>

<div className="card">
<img className="card__image" src={"/Productsphoto/Handicrafts/MetalWare/244737361_4547082922001880_5321303995525154372_n.jpg"} alt=""/>
<div className="card__content">
      <p style={{color:"black"}}>
      Copper is an imperative nutrient for body. It helps the body to form red blood cells, maintain healthy bones, blood vessels, nerves, immune function, and iron absorption. 
      </p>
      <p>
       
      </p>
    </div>
<div className="card__info">
  <h4>Metal Ware</h4>
  <div>
    <a href="./" className="card__link"><FaEye size={20}/></a>
  </div>
  
</div>
</div>
</a>
< a href='/products/clothing'>

<div className="card">
<img className="card__image" src={"/Productsphoto/Handicrafts/WoodenCraft/239317100_4403703703006470_7339805642552162667_n.jpg"} alt=""/>
<div className="card__content">
      <p style={{color:"black"}}>
      Clothing could be classified based on several aspects as there is no standard classification system available. However, the garments could be classified as cotton, jeans, woolen etc.
      </p>
      <p>
        
      </p>
    </div>
<div className="card__info">
  <h4>Clothing</h4>
  <div>
    <a href="/products/clothing" className="card__link"><FaEye size={20}/></a>
  </div>
  
</div>
</div>
</a>


</div>
</div>
  )
}

export default Weprovide