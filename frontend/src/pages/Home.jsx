import React from 'react';
import Footer from '../components/Footer';

const Home = () => {
  const categories = [
    { icon: '📱', name: 'Smartphones', description: 'Latest mobile technology' },
    { icon: '💻', name: 'Laptops', description: 'Powerful computing devices' },
    { icon: '🎧', name: 'Audio', description: 'Immersive sound experience' },
    { icon: '⌚', name: 'Wearables', description: 'Smart watches and fitness trackers' }
  ];

  return (
    <>
      <section className="hero">
        <h1>Welcome to TechGadget</h1>
        <p>Discover the latest and greatest in electronics technology</p>
        <button className="cta-button">Shop Now</button>
      </section>
      
      <section className="content-section">
        <h2 className="text-center">Featured Categories</h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{category.icon}</div>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="content-section" style={{ background: '#f8f9fa', marginTop: '2rem' }}>
        <div className="text-center">
          <h2>Why Shop With Us?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            <div>
              <h3>🚚 Fast Shipping</h3>
              <p>Free delivery on orders over $50</p>
            </div>
            <div>
              <h3>🔒 Secure Payment</h3>
              <p>100% secure payment processing</p>
            </div>
            <div>
              <h3>📞 24/7 Support</h3>
              <p>Round-the-clock customer service</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Home;