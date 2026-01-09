import React from 'react';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <div style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>About TechGadget</h1>
        <p style={{ marginTop: '1rem', fontSize: '1.1rem' }}>
          Welcome to TechGadget, your premier destination for cutting-edge electronics 
          and innovative gadgets. Founded in 2024, we're passionate about bringing 
          the latest technology to your fingertips.
        </p>
        
        <div style={{ marginTop: '3rem' }}>
          <h2>Why Choose Us?</h2>
          <ul style={{ marginTop: '1rem', paddingLeft: '2rem' }}>
            <li>Latest products from top brands</li>
            <li>Competitive prices</li>
            <li>Fast and reliable shipping</li>
            <li>Excellent customer support</li>
            <li>30-day return policy</li>
          </ul>
        </div>
        
        <div style={{ marginTop: '3rem' }}>
          <h2>Our Mission</h2>
          <p>
            To make technology accessible to everyone by providing quality products 
            at affordable prices with exceptional customer service.
          </p>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default About;