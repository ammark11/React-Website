import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import Contact from './pages/contact/contact';
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import LandingPage from './pages/home/LandingPage'; 
import Login from './pages/login/login'; 

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/shop" element={<Shop />} /> 
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
