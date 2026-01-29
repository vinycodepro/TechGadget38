import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/products.js';
import authRoutes from './routes/auth.js';
import orderRoutes from './routes/orders.js';
import dns from 'dns';

dns.setServers(['8.8.8.8', '1.1.1.1'])

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://vincyweb38_db_user:home@vincyweb38.l6j2gd1.mongodb.net/')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'TechGadget API is running!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});