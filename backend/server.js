import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/products.js';
import authRoutes from './routes/auth.js';
import orderRoutes from './routes/orders.js';
import connectDB from './config/database.js';
import dns from 'dns';

dns.setServers(['8.8.8.8', '1.1.1.1'])

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);


// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'TechGadget API is running!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});