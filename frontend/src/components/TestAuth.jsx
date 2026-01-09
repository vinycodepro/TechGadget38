import React, { useState } from 'react';
import { authAPI } from '../api/api';

const TestAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const testRegister = async () => {
    setLoading(true);
    try {
      const userData = {
        name: 'Test User',
        email: `test${Date.now()}@example.com`,
        password: 'password123'
      };
      
      const result = await authAPI.register(userData);
      setUser(result.user);
      localStorage.setItem('token', result.token);
      alert('✅ Registration successful! Token saved.');
    } catch (error) {
      alert(`❌ Registration failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const testLogin = async () => {
    setLoading(true);
    try {
      const credentials = {
        email: 'test@example.com', // Use an existing user
        password: 'password123'
      };
      
      const result = await authAPI.login(credentials);
      setUser(result.user);
      localStorage.setItem('token', result.token);
      alert('✅ Login successful!');
    } catch (error) {
      alert(`❌ Login failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const testGetMe = async () => {
    try {
      const userData = await authAPI.getMe();
      alert(`✅ Current user: ${userData.name} (${userData.email})`);
    } catch (error) {
      alert(`❌ Get user failed: ${error.message}`);
    }
  };

  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc', margin: '1rem' }}>
      <h3>Auth Test</h3>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <button onClick={testRegister} disabled={loading}>
          Test Register
        </button>
        <button onClick={testLogin} disabled={loading}>
          Test Login
        </button>
        <button onClick={testGetMe} disabled={loading}>
          Test Get User
        </button>
      </div>
      {user && (
        <div style={{ marginTop: '1rem' }}>
          <p>Logged in as: {user.name} ({user.email})</p>
        </div>
      )}
    </div>
  );
};

export default TestAuth;