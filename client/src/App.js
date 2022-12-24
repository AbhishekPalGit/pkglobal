
import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Topheader  from './Components/Headers/Topheader';
import Home from "./Pages/Home";
import Admin from './Pages/Admin/Admin';
import Pannel from './Components/Headers/Pannel';
import Spices from './Components/Products/Spices';
import Footer from './Components/Footer/Footer';
import UpperHeader from './Components/Headers/UpperHeader';
import Testimonial from './Components/Testimonials/Testimonial';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
   <div>
    <UpperHeader/>
<Topheader/>

<BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/products/spices" element={<Spices/>}></Route>
        <Route exact path="/openpannel" element={<Pannel/>}></Route>
          
          <Route path="/openmyadmin" element={<Admin />} >
         
        </Route>
      </Routes>
    </BrowserRouter>
    
<Footer/>
   </div>
  );
}

export default App;
