
import { Routes,Route,Link } from "react-router-dom";
// import Home from './Component/Home'; //phần ví dụ router 
// import Product from './Component/Product';
import './../css/App.css';
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import Product from "./Product";
import Contact from "./Contact";

// import Contact from "./Component/Contact";
function App() {
  return (
    <div >
      {/* <nav>
        <Link to="/">Trang chủ </Link>
        <Link to="/product"> Sản phẩm </Link>
        <Link to="/contact"> Liên hệ </Link>   
      </nav>
      <Routes>  
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/contact" element={Contact}/>

      </Routes> */}
      <Nav/>
      <Header/>
      {/* <Product/> */}
      {/* <About/> */}
      {/* <Home/> */}
      {/* <Contact/> */}
      <Routes>  
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>

      </Routes>
      <Footer/>
    </div>
   
  );
}

export default App;
