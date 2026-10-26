import React, { useState } from 'react';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';

function App() {
  const [page, setPage] = useState('home'); // 'home' | 'plants' | 'cart'

  if (page === 'plants') return <ProductList setPage={setPage} />;
  if (page === 'cart') return <CartItem setPage={setPage} />;

  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <div className="landing-content">
          <h1>Paradise Nursery</h1>
          <p className="tagline">Where green meets serenity</p>
          <button className="get-started-button" onClick={() => setPage('plants')}>
            Get Started
          </button>
        </div>
        <AboutUs />
      </div>
    </div>
  );
}

export default App;
