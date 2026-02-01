import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { useState } from 'react'
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
//import Cart from './components/Cart';
import './App.css';
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'

function App() {
  return (
    <Router>
      <AuthProvider>
        {/* 1. Put the Header here so it shows on EVERY page */}
        <Header /> 

        <Routes>
          <Route path="/" element={<Home />} />
          {/* 2. Fixed 'login' to 'Login' */}
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} /> 
        </Routes>
      </AuthProvider>
    </Router>
  );
}
export default App
