
import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Topheader  from './Components/Headers/Topheader';
import Home from "./Pages/Home";
import Admin from './Pages/Admin/Admin';
import Pannel from './Components/Headers/Pannel';
import Spices from './Components/Products/Spices';
import Temple from './Components/Products/Temple';
import Footer from './Components/Footer/Footer';
import UpperHeader from './Components/Headers/UpperHeader';
import Testimonial from './Components/Testimonials/Testimonial';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Handicraft from './Components/Products/Handicraft';
import Textile from './Components/Products/Textile';
import Metal from './Components/Products/Metal';
import Wooden from './Components/Products/Wooden';
import Bamboo from './Components/Products/Bamboo';
import Company from './Components/About/Company';
import Certification from './Components/About/Certification';
import KeyPerson from './Components/About/KeyPerson';
import Modalform from './Components/Modalform';
import Contact from './Components/contact/Contact';
import {useEffect} from 'react'
import Sourcing from './Components/Sourcing';
import Review from './Components/Testimonials/Review';
import Glass from './Components/Glass/Glass';
import Leather from './Components/Products/Leather';
import Jwellary from './Components/Products/Jwellery';
import Clothing from './Components/Products/Clothing';
import Fruits from './Components/Products/Fruits';
import Grocery from './Components/Products/Grocery';
import Furniture from './Components/Products/Furniture';
import Ceremic from './Components/Products/Ceremic';



function App() {
  useEffect(()=>{
    if(window.location.href==(window.host+"/review")){
      alert('dvshd')
      var elem = document.getElementById("review");
                    elem.scrollIntoView();
    }
  },[])
  return (
   <div>
<BrowserRouter>
      <Routes>
      <Route exact path="/" element={ <UpperHeader/>}></Route>
      </Routes>
   
</BrowserRouter>

<Topheader/>

<BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/products/spices" element={<Spices/>}></Route>
        <Route exact path="/products/Temple" element={<Temple/>}></Route>
        <Route exact path="/products/Leather" element={<Leather/>}></Route>
        <Route exact path="/products/jwellery" element={<Jwellary/>}></Route>
        <Route exact path="/products/clothing" element={<Clothing/>}></Route>
        <Route exact path="/products/Fruit&veg" element={<Fruits/>}></Route>
        <Route exact path="/products/grocery" element={<Grocery/>}></Route>
        <Route exact path="/products/furniture" element={<Furniture/>}></Route>
        <Route exact path="/products/ceremic" element={<Ceremic/>}></Route>



        <Route exact path="/products/handicraft" element={<Handicraft/>}></Route>
        <Route exact path="/products/glass" element={<Glass/>}></Route>
        <Route exact path="/products/metal" element={<Metal/>}></Route>
        <Route exact path="/products/wood" element={<Wooden/>}></Route>
        <Route exact path="/products/bamboo" element={<Bamboo/>}></Route>
        <Route exact path="/company" element={<Company/>}></Route>
        <Route exact path="/certification" element={<Certification/>}></Route>
        <Route exact path="/keyperson" element={<KeyPerson/>}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>
        <Route exact path="/review" element={<Review/>}></Route>
        <Route exact path="/sourcing" element={<Sourcing/>}></Route>
        
        


        








        <Route exact path="/openpannel" element={<Pannel/>}></Route>
          
          <Route path="/openmyadmin" element={<Admin />} >
         
        </Route>
      </Routes>
    </BrowserRouter>
    
<Footer/>
<Modalform/>
{/* <div style={{width:"60px",height:"60px",backgroundColor:"green", position:"fixed" ,zIndex:434242,bottom:"40px",right:"5px",borderRadius:"100%"}}></div> */}

   </div>
  );
}

export default App;
