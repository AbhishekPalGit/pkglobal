import React from "react";
import "./Contact.css";


import { SiGmail } from "react-icons/si";
import { MdAddIcCall } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";

const Quatation = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "20vh",
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
          verticalAlign: "center",
          paddingTop: "45px",
        }}
      >
        <h1>GET QUOTATION</h1>
      </div>
      <div
        className="about-block"
        style={{
          width: "100%",
          minHeight: "40vh",
          backgroundColor: "white",
          paddingBottom: "30px",
        }}
      >
        <div
          className="aboutBlock-left"
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            textAlign: "center",
            paddingTop: "20px",
          }}
        >
          <h4>Get Quotation.</h4>
          
          <form
            action="https://script.google.com/macros/s/AKfycbw7SW9sNiAoLFJjROs7IzJBzUHUfeOUW6PYvMoyCe5De8H0mI78CndQX6SulZYHq29JQQ/exec"
            method="post"
          >
            <input
              name="name"
              placeholder="Enter Your Name"
              type="text"
              style={{
                textAlign: "center",
                width: "90%",
                height: "50px",
                marginTop: "15px",
                boxSizing: "border-box",
              }}
              required
            ></input>
            <input
              name="email"
              placeholder="Enter Your Email"
              type="mail"
              style={{
                textAlign: "center",
                width: "90%",
                height: "50px",
                marginTop: "28px",
              }}
              required
            ></input>
            <input
              name="phone"
              placeholder="Enter Your Phone No"
              style={{
                textAlign: "center",
                width: "90%",
                height: "50px",
                marginTop: "28px",
              }}
              required
            ></input>
            <textarea
              name="message"
              placeholder="Enter Your Message"
              rows="4"
              style={{ textAlign: "center", marginTop: "28px", width: "90%" }}
              required
            ></textarea>
            <button
              type="submit"
              style={{
                padding: "10px 30px",
                marginTop: "25px",
                backgroundColor: "black",
                borderStyle: "none",
                color: "white",
              }}
            >
              Submit
            </button>
          </form>
          
        </div>
        <div
          className="aboutBlock-right"
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            paddingTop: "20px",
            paddingRight: "20px",
            paddingLeft: "20px",
          }}
        >
        
       <div style={{backgroundColor:"red",width:"100%",height:"300px", backgroundImage: `url("/quot.jpg")`,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
        
         </div>
        
        </div>
      </div>
    
      
     
    </div>
  );
};

export default Quatation;
