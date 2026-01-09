import mongoose from 'mongoose';
import Product from './models/Product.js';
import dotenv from 'dotenv';

dotenv.config();

const products = [
  {
    name: "iPhone 15 Pro",
    description: "Latest Apple smartphone with advanced camera system",
    price: 999,
    category: "smartphones",
    brand: "Apple",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",
    stockQuantity: 50,
    features: ["5G", "Face ID", "Pro Camera", "A17 Pro Chip"]
  },
  {
    name: "MacBook Pro 16-inch",
    description: "Powerful laptop for professionals with M2 Pro chip",
    price: 2399,
    category: "laptops",
    brand: "Apple",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
    stockQuantity: 30,
    features: ["M2 Pro Chip", "16GB RAM", "1TB SSD", "Retina Display"]
  },
  {
    name: "Sony WH-1000XM4",
    description: "Industry-leading noise canceling wireless headphones",
    price: 349,
    category: "audio",
    brand: "Sony",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    stockQuantity: 100,
    features: ["Noise Canceling", "30hr Battery", "Touch Control", "Quick Charge"]
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert new products
    await Product.insertMany(products);
    console.log('Database seeded successfully');

    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
};

seedDatabase();