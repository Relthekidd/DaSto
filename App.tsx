import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/flower" element={<CategoryPage category="flower" />} />
              <Route path="/carts" element={<CategoryPage category="carts" />} />
              <Route path="/edibles" element={<CategoryPage category="edibles" />} />
              <Route path="/pre-rolls" element={<CategoryPage category="pre-rolls" />} />
              <Route path="/concentrates" element={<CategoryPage category="concentrates" />} />
              <Route path="/accessories" element={<CategoryPage category="accessories" />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;