import React from 'react'
import "../About/About.css"
// const office=new URL("../About/office2.png",import.meta.url)
import { BsFileBarGraphFill } from 'react-icons/bs';
const office=new URL("../About/office2.png",import.meta.url)

const About = () => {
  return (
    <div>
       
      <div className="section">
		<div className="container">
			<div className="content-section">
				<div className="title">
					<h1>About Us</h1>
				</div>
				<div className="content">
					<h3>Welcome to PK Global Overseas PVT ltd.</h3>
					<p>Thank you for your interest in our Company.PK Global Overseas PVT ltd able to create its own goodwill and a name for itself. 
We are primarily exporters of all Wooden Handicraft products, wooden items, Ceramic Products, handmade products, Spices, Handmade Clothes Products, Handmade Decorative Products, all types of wooden temple. The products are of elegance, style and superior quality. We have a well-established global clientele.
The company understands the importance of Quality and Timely Delivery of merchandise in this competitive and challenging International Business scenario.

</p>			</div>
				<div className="social">
					 <a href=""><BsFileBarGraphFill className="insta"/></a> 
					 <a href=""><BsFileBarGraphFill className="twiter"/></a> 
					 <a href=""><BsFileBarGraphFill className="facebook"/></a> 
				</div>
			</div>
			<div className="image-section">
				 <img id="officeImage" src={office}/> 
			</div>
		</div>
	</div>

    </div>
  )
}

export default About