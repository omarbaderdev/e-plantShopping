import React from 'react';
import { useSelector } from 'react-redux';

function Navbar({ setPage }) {
  const totalQuantity = useSelector((state) =>
    state.cart.items.reduce((sum, i) => sum + i.quantity, 0)
  );

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => setPage('home')}>
        <span className="navbar-logo">🌿</span> Paradise Nursery
      </div>
      <div className="navbar-links">
        <a href="#" onClick={(e) => { e.preventDefault(); setPage('home'); }}>Home</a>
        <a href="#" onClick={(e) => { e.preventDefault(); setPage('plants'); }}>Plants</a>
        <a href="#" className="cart-link" onClick={(e) => { e.preventDefault(); setPage('cart'); }}
           aria-label={`Cart with ${totalQuantity} items`}>
          <svg viewBox="0 0 256 256" width="42" height="42" aria-hidden="true">
            <rect width="256" height="256" fill="none" />
            <circle cx="80" cy="216" r="12" />
            <circle cx="184" cy="216" r="12" />
            <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                  fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
          </svg>
          <span className="cart_quantity_count">{totalQuantity}</span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
