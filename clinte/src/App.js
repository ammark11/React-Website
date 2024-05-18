import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import Shop  from "./pages/shop/shop";
import Contact from './pages/contact/contact';
import Cart  from "./pages/cart/cart";
import { ShopProvider } from "./context/shop-context";
import LandingPage from './pages/home/LandingPage'; // Make sure to save your LandingPage component here
import AdminPanel from './pages/admin/admin-panel';
import Login from './pages/login/login';
import Checkout from './pages/checkout/checkout';
import ItemsList from './ItemsList';


function App() {
  return (
    <div className="App">
      <ShopProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/login" element={<Login />} />
            <Route path="/items" exact component={<ItemsList />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/shop" element={<Shop />} /> 
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </ShopProvider>
    </div>
  );
}

export default App;
