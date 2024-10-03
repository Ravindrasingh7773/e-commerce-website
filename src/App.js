import { Fragment } from "react"; 
import Home from "./pages/home"; 
import LogIn from "./components/logIn";
import Registration from "./components/registration";
import SingleProduct from "./components/singlePage";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import ProductPage from "./pages/productPage";
import Card from "./pages/card";
import Profile from "./pages/profile";
import Contact from "./pages/contact";
import Checkout from "./pages/checkout";
import About from "./pages/about";
import ScrollToTop from "./components/scrollToTop";

function App() {
  return (
    <Fragment>  
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />} >
          <Route index element={<Home />} /> 
          <Route path="/home" element={<Home />} /> 
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/singleProduct/:id" element={<SingleProduct />} />
          <Route path="/productPage" element={<ProductPage />} />
          <Route path="/card" element={<Card />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/about" element={<About/>} />
          {/* You can add more routes as needed */}
          
          </Route>
        </Routes> 
    </Fragment>
  );
}

export default App;

//
