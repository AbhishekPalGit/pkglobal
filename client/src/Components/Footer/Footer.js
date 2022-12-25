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
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Products</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">shipping</a></li>
  	 				<li><a href="#">returns</a></li>
  	 				<li><a href="#">order status</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Contact Us</h4>
  	 			<ul>
  	 				<li><a href="#">watch</a></li>
  	 				<li><a href="#">bag</a></li>
  	 				<li><a href="#">shoes</a></li>
  	 				<li><a href="#">dress</a></li>
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
					
					<TiSocialInstagram size={30} style={{color:"white"}}/>
					<TiSocialFacebookCircular size={30} style={{color:"white",marginLeft:"3px"}}/>
					<TiSocialYoutube size={30} style={{color:"white",marginLeft:"3px"}}/>

					<TiSocialLinkedinCircular size={30} style={{color:"white",marginLeft:"3px"}}/>
					<TiSocialTwitterCircular size={30} style={{color:"white",marginLeft:"3px"}}/>


					


  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
    </div>
  )
}

export default Footer