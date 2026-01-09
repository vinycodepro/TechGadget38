import React, { useState, useEffect } from 'react';
import { productAPI, authAPI } from '../api/api';

const ConnectionTest = () => {
  const [status, setStatus] = useState('testing');
  const [message, setMessage] = useState('');
  const [productsCount, setProductsCount] = useState(0);

  const testConnection = async () => {
    try {
      setStatus('testing');
      setMessage('Testing backend connection...');
      
      // Test 1: Basic products fetch
      const productsData = await productAPI.getAll();
      const products = productsData.products || productsData;
      setProductsCount(products.length);
      
      // Test 2: Test user registration
      const testUser = {
        name: 'Test User',
        email: `test${Date.now()}@test.com`,
        password: 'password123'
      };
      
      try {
        await authAPI.register(testUser);
        setStatus('success');
        setMessage(`✅ Backend connected successfully! Loaded ${products.length} products and user registration working.`);
      } catch (regError) {
        if (regError.message.includes('already exists')) {
          setStatus('success');
          setMessage(`✅ Backend connected successfully! Loaded ${products.length} products. User system working.`);
        } else {
          throw regError;
        }
      }
      
    } catch (error) {
      setStatus('error');
      setMessage(`❌ Connection failed: ${error.message}`);
      console.error('Connection test error:', error);
    }
  };

  useEffect(() => {
    testConnection();
  }, []);

  return (
    <div style={{
      padding: '1rem',
      margin: '1rem',
      borderRadius: '5px',
      backgroundColor: status === 'success' ? '#d4edda' : 
                      status === 'error' ? '#f8d7da' : '#fff3cd',
      border: `1px solid ${
        status === 'success' ? '#c3e6cb' : 
        status === 'error' ? '#f5c6cb' : '#ffeaa7'
      }`,
      color: status === 'success' ? '#155724' : 
             status === 'error' ? '#721c24' : '#856404'
    }}>
      <h3>Backend Connection Test</h3>
      <p>{message}</p>
      {status === 'testing' && <p>🔄 Testing...</p>}
      {productsCount > 0 && (
        <p><strong>Products in database:</strong> {productsCount}</p>
      )}
      <button 
        onClick={testConnection}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '3px',
          cursor: 'pointer'
        }}
      >
        Test Again
      </button>
    </div>
  );
};

export default ConnectionTest;