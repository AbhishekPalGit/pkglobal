import React from 'react'
import "../Products/Spices.css"
import {FaEye} from "react-icons/fa"

const Weprovide = () => {
  return (
    <div>
    {/* <img src={process.env.PUBLIC_URL+"Images/artturi-jalli-Su1gc1A63xE-unsplash.jpg"}/> */}
    <button className='Spices-head'>
        <h2>-- What We Provide --</h2>
    </button>
    <div className="cards">
<div className="card">
<img className="card__image" src={"/SpicesImage/MADRAS.png"} alt=""/>

<div className="card__info">
  <h4>Spices Masala</h4>
  <div>
    <a href="./" className="card__link"><FaEye size={20}/></a>
  </div>
</div>
</div>

<div className="card">
<img className="card__image" src={"/SpicesImage/masalej.png"} alt=""/>

<div className="card__info">
  <h4>Spices Masala</h4>
  <div>
    <a href="./" className="card__link"><FaEye size={20}/></a>
  </div>
</div>
</div><div className="card">
<img className="card__image" src={"/SpicesImage/Cinnamon.png"} alt=""/>

<div className="card__info">
  <h4>Spices Masala</h4>
  <div>
    <a href="./" className="card__link"><FaEye size={20}/></a>
  </div>
</div>
</div>
<div className="card">
<img className="card__image" src={"/SpicesImage/Makhana.png"} alt=""/>

<div className="card__info">
  <h4>Spices Masala</h4>
  <div>
    <a href="./" className="card__link"><FaEye size={20}/></a>
  </div>
</div>
</div>




</div>
</div>
  )
}

export default Weprovide