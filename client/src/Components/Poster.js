import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Poster.css"

const Poster = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };
  return (
<>
   <div style={{overflow:"hidden"}}>
       
        <Slider {...settings} >
        <div style={{backgroundColor:"red",width:"100%",height:"80vh"}}>
<div  style={{backgroundColor:"red",height:"80vh",backgroundImage:`url(${"/SliderImage/cargo.jpg"})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
  <div style={{textAlign:"center",paddingLeft:"20%",paddingRight:"20%",paddingTop:"60px"}}><p className="ppp" style={{color:"white",backgroundColor:"black"}}>welcome to pk gobal.</p></div>
</div>
</div>
<div>
<div  style={{backgroundColor:"red",height:"80vh",backgroundImage:`url(${"/premium.jpeg"})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
<div style={{textAlign:"center",paddingLeft:"20%",paddingRight:"20%",paddingTop:"60px"}}><p className="ppp" style={{color:"white",backgroundColor:"black"}}>Enter in the World of Premium Quality Products.</p></div>
</div>
</div>
<div>
<div  style={{backgroundColor:"red",height:"80vh",backgroundImage:`url(${"/photo2.jpeg"})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
<div style={{textAlign:"center",paddingLeft:"20%",paddingRight:"20%",paddingTop:"60px"}}><p className="ppp" style={{color:"white",backgroundColor:"black"}}>100% Transparent Export & Satisfied Clients.</p></div>
</div>
</div>
<div>
<div  style={{backgroundColor:"red",height:"80vh",backgroundImage:`url(${"/aeroplane.jpeg"})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
<div style={{textAlign:"center",paddingLeft:"20%",paddingRight:"20%",paddingTop:"60px"}}><p className="ppp" style={{color:"white",backgroundColor:"black"}}>We provide very fast delivery</p></div>
</div>
</div>
          
       
        </Slider>
      </div>
   </>
   
  );
};

export default Poster;
