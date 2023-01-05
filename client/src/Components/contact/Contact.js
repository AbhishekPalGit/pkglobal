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

const Contact = () => {
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
        <h1>CONTACT US</h1>
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
          <h4>What's Your Query?</h4>
          <form
            action="https://script.google.com/macros/s/AKfycbxYLo5SFsHBmgfKbLwmVWfatO4Zse__TfJoyNaq-rWh5spBirvzJe8xUilwY3VtGG4_/exec"
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
          <h2>Welcome PK Global Overseas PVT ltd</h2>

          <p>
            Thank you for your interest in our Company.PK Global Overseas PVT
            ltd able to create its own goodwill and a name for itself. We are
            primarily exporters of all Wooden Handicraft products, wooden items,
            Ceramic Products, handmade products, Spices, Handmade Clothes
            Products, Handmade Decorative Products, all types of wooden temple.
            The products are of elegance, style and superior quality. We have a
            well-established global clientele. The company understands the
            importance of Quality and Timely Delivery of merchandise in this
            competitive and challenging International Business scenario.
          </p>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15072.713053199228!2d72.9527682!3d19.1874148!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe1c3bcb7385b1782!2sPK%20GLOBAL%20OVERSEAS%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1672335812203!5m2!1sen!2sin"
          style={{
            width: "100%",
            height: "450px",
            style: "border:0",
            loading: "lazy",
            referrerPolicy: "no-referrer-when-downgrade",
          }}
        ></iframe>
      </div>

      <div
       
        style={{
          width: "100%",
          height: "20vh",
          backgroundColor: "black",
          color: "white",
          verticalAlign: "center",
          paddingTop: "45px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <a href="mailto:info@pkglobaloverseas.com" style={{color:"white"}}><SiGmail size={50} /></a> 
        <a href="tel:+917500980861" style={{color:"white"}}> <MdAddIcCall size={50} /></a> 
       <a href="https://goo.gl/maps/4RHj8MwYiuEgGuRY8"style={{color:"white"}}> <ImLocation2 size={50} /></a> 
       <a href="https://instagram.com/pkglobaloverseas?igshid=YmMyMTA2M2Y="style={{color:"white"}}><FaInstagramSquare size={50} /></a> 
        {/* <FaFacebookSquare size={50} />
        <BsYoutube size={50} />
        <BsLinkedin size={50} />
        <FaTwitterSquare size={50} /> */}
      </div>
      <div
       
        style={{
          width: "100%",
          height: "20vh",
          backgroundColor: "black",
          color: "white",
          verticalAlign: "center",
          paddingTop: "45px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
         <a href="https://www.facebook.com/Pkglobaloverseas?mibextid=ZbWKwL"style={{color:"white"}}><FaFacebookSquare size={50} /></a>
         <a href="https://youtube.com/@pkglobaloverseas"style={{color:"white"}}><BsYoutube size={50} /></a>
         <a href="https://www.linkedin.com/company/pk-global-overseas-pvt-ltd/"style={{color:"white"}}><BsLinkedin size={50} /></a>
         <a href="https://twitter.com/PKGLOBALOVERSEA"style={{color:"white"}}><FaTwitterSquare size={50} /></a>
        
      </div>
      
     
    </div>
  );
};

export default Contact;
