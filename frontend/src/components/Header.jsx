import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ setCurrentPage, cartItemsCount, openCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">TechGadget</div>
        
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
         <Link to="/" onClick={() => handleNavClick('home')}>Home</Link>
          <Link to="/products" onClick={() => handleNavClick('products')}>Products</Link>
          <Link to="/about" onClick={() => handleNavClick('about')}>About</Link>
          <Link to="/login" onClick={() => handleNavClick('login')}>Login</Link>
          <Link to="/register" onClick={() => handleNavClick('register')}>Register</Link>

        </ul>


        {/* Desktop cart button */}
        <button className="cart-icon mobile-cart" onClick={openCart}>
          🛒 ({cartItemsCount})
        </button>
      </nav>
    </header>

  );
};

export default Header;