import React, { useState } from 'react';

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
          <li><a href="#home" onClick={() => handleNavClick('home')}>Home</a></li>
          <li><a href="#products" onClick={() => handleNavClick('products')}>Products</a></li>
          <li><a href="#about" onClick={() => handleNavClick('about')}>About</a></li>
          <li>
            <button className="cart-icon" onClick={openCart}>
              🛒 Cart ({cartItemsCount})
            </button>
          </li>
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