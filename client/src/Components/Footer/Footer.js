import React from 'react'
import "./Footer.css"
import {TiSocialYoutube,TiSocialInstagram,TiSocialFacebookCircular,TiSocialTwitterCircular,TiSocialLinkedinCircular} from "react-icons/ti"
const Footer = () => {
  return (
    <div>
        <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>Quick Links</h4>
  	 			<ul>
  	 				<li><a href="/">Home</a></li>
  	 				<li><a href="/company">About Us</a></li>
  	 				<li><a href="/keyperson">About Key Persons</a></li>
  	 				<li><a href="/certification">About Certifications</a></li>
  	 				<li><a href="/sourcing">Sourcing Agent</a></li>
  	 				<li><a href="/contact">Contact Us</a></li>

  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Products</h4>
  	 			<ul>
				   <li><a href="/products/spices">Spices</a></li>

  	 				<li><a href="/products/handicraft">Handicrafts</a></li>
  	 				<li><a href="/products/metal">MetalWare</a></li>
  	 				<li><a href="/products/temple">Temple</a></li>
  	 				<li><a href="/products/textile">Textile Based</a></li>
  	 				<li><a href="/products/wood">Wooden Handicrafts</a></li>
  	 				<li><a href="/products/bamboo">Bamboo Handicrafts</a></li>

					   
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Contact Us</h4>
  	 			<ul>
  	 				<li><a href="mailto:info@pkglobaloverseas.com">info@pkglobaloverseas.com</a></li>
  	 				<li><a href="tel:+917500980861">+91 7500980861</a></li>
  	 				<li><a href="https://goo.gl/maps/4RHj8MwYiuEgGuRY8">Shivaji Nagar Mumbai India</a></li>
  	 				
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				{/* <a href="#"><TiSocialYoutube/></a>
  	 				<a href="#"><i className="fab fa-twitter"><TiSocialYoutube/></i></a>
  	 				<a href="#"><i className="fab fa-instagram"></i></a>
  	 				<a href="#"><i className="fab fa-linkedin-in"></i></a>
  	 				<a href="#"><i className="fab fa-linkedin-in"></i></a> */}
					
					<a href="https://instagram.com/pkglobaloverseas?igshid=YmMyMTA2M2Y="><TiSocialInstagram size={30} style={{color:"white"}}/></a>
				<a href="https://www.facebook.com/Pkglobaloverseas?mibextid=ZbWKwL"><TiSocialFacebookCircular size={30} style={{color:"white",marginLeft:"3px"}}/></a>
					<a href='https://youtube.com/@pkglobaloverseas'><TiSocialYoutube size={30} style={{color:"white",marginLeft:"3px"}}/></a>

					<a href="https://www.linkedin.com/company/pk-global-overseas-pvt-ltd/"><TiSocialLinkedinCircular size={30} style={{color:"white",marginLeft:"3px"}}/></a>
				<a href="https://twitter.com/PKGLOBALOVERSEA">	<TiSocialTwitterCircular size={30} style={{color:"white",marginLeft:"3px"}}/></a>


					


  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
    </div>
  )
}

export default Footer