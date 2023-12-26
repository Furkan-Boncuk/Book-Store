import './App.css'
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from "../src/pages/homepage/Homepage"
import BookDetail from "../src/pages/bookDetail/BookDetail"
import ShoppingCart from "../src/pages/shoppingCart/ShoppingCart"
import { useState } from 'react';
import { CartProvider } from './context/CartContext';

function App() {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm)
  }

  return (
    <BrowserRouter>
      {/* PROVIDER */}
      <CartProvider>
        <Navbar onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Homepage searchTerm={searchTerm} />} />
          <Route path="/detail/:id" element={<BookDetail />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App