import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { productAPI } from '../api/api';

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log('Fetching products from API...');
        const data = await productAPI.getAll();
        console.log('Products received:', data);
        setProducts(data.products || data); // Handle both response formats
      } catch (err) {
        console.error('Error fetching products:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '50vh',
      fontSize: '1.2rem',
      color: '#666'
    }}>
      🔄 Loading products from database...
    </div>
  );

  if (error) return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '50vh',
      flexDirection: 'column',
      color: '#e74c3c'
    }}>
      <h2>❌ Error Loading Products</h2>
      <p>{error}</p>
      <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
        Make sure your backend server is running on http://localhost:5000
      </p>
    </div>
  );

  return (
    <>

      <div className="products-grid">
        {products.map(product => (
          <ProductCard 
            key={product._id || product.id} 
            product={product} 
            addToCart={addToCart}
          />
        ))}
      </div>
      
      <Footer />
    </>
  );
};

export default Products;