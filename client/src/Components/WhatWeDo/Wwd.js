import React from 'react'
import "./Wwd.css"
const Wwd = () => {
  return (
    <div>
        <div className='wwd-main'>
        <button className='Spices-head'>
            <h2>-- WHAT WE DO --</h2>
        </button>
        <div className='wwd-cards'>
            
        <div className="wrapper">
    <div className="box">
      
      <p>
We are Exporting best quality product around the world, You need best product on time you are at right place @ PK Global Overseas.</p>
      <div className="content">
        <div className="info">
          <div className="name">Export</div>
         
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </div>
        </div>
        <div className="image">
        <img style={{backgroundColor:"white"}} src={"/wwd/export.png"} alt=""/>

        </div>
      </div>
    </div>
    <div className="box">
      
      <p>We are manufacturer of best quality handicrafts and spices in India.</p>
      <div className="content">
        <div className="info">
          <div className="name">
          Manufac-<br/>turer</div>
         
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>
        </div>
        <div className="image" style={{textAlign:"right"}}>
        <img style={{backgroundColor:"white"}} src={"/manu.png"} alt=""/>

        </div>
      </div>
    </div>
    <div className="box">
      
      <p>
We are working as local partner of our foreign client to source best quality product from India as per client requirement and Specification</p>
      <div className="content">
        <div className="info">
          <div className="name">Sourcing<br/>Agent</div>
         
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>
        </div>
        <div className="image">
        <img src={"/wwd/—Pngtree—agent icon for your project_4857130.png"} alt=""/>

        </div>
      </div>
    </div>
   
    <div className="box">
      
      {/*  */}
      <p>We help foreign company to introduce his best quality product in India and help them to find local partners in India</p>
      <div className="content">
        <div className="info">
          <div className="name">Import <br/>Agent</div>
          
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </div>
        </div>
        <div className="image" >
          <img style={{backgroundColor:"white"}} src={"/wwd/import.png"} alt=""/>
        </div>
      </div>
    </div>
  </div>
            </div>
            
        </div>
        
        </div>
    
  )
}

export default Wwd