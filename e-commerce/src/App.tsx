import  Navbar  from "@/components/Navbar"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Shop from "./pages/Shop";
import Shopcat from "./pages/Shopcat";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Footer from "@/components/footer/Footer";
import men_banner from "@/assets/banner_mens.png";
import women_banner from "@/assets/banner_women.png";
import kid_banner from "@/assets/banner_kids.png";


export default function Home() {
  return (
    <div>
      <BrowserRouter> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/Mens" element={<Shopcat banner={men_banner} category="men" />}/>
        <Route path="/Womens" element={<Shopcat banner={women_banner} category="women"/>}/>
        <Route path="/Kids" element={<Shopcat banner={kid_banner} category="kid"/>}/>
        <Route path="/Product" element={<Products/>}>
        <Route path=":ProductId" element={<Products/>} />
       </Route>
       <Route path="/Cart" element={<Cart/>}/>
       <Route path="/Login" element={<Login/>}/>
      </Routes>
      <Footer/>

      </BrowserRouter>
     
      
    </div>
  )
}
